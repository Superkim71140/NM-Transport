import { NextResponse } from 'next/server';

const FALLBACK_REVIEWS = [
  {
    text: '"บริการดี ราคาเป็นกันเองแนะนำครับ จากผู้ใช้บริการจริงมาแล้ว"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 1.jpg',
    link: 'https://www.facebook.com/share/p/1GAruLkniU/',
    rating: 5
  },
  {
    text: '"บริการดี บริการเด่น เน้นบริการ เอาเป็นว่าถูกใจครับ"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 2.jpg',
    link: 'https://www.facebook.com/share/p/1BzQhAJer8/',
    rating: 5
  },
  {
    text: '"บริการดี ปลอดภัย รวดเร็ว ราคาไม่แพง แนะนำเลยค่ะ วันนี้ส่งชุดโต๊ะทานข้าวหินอ่อน จากขอนแก่น ไป อ.บ้านผือ จ.อุดรธานี จัดแพ็คห่อกันกระแทก กันรอยดีมาก เข้ามารับสินค้า 10 โมง แพ็คเสร็จเกือบเที่ยง ส่งสินค้าเสร็จเรียบร้อยบ่ายสามโมง คือแนะนำเลยค่าา"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 3.jpg',
    link: 'https://www.facebook.com/share/p/1CnXgdzM2d/',
    rating: 5
  },
  {
    text: '"บริการดีส่งใวค่ะ..สินค้าเรียบร้อยดีค่ะใว้ใช้บริการใหม่นะค่ะ"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 4.jpg',
    link: 'https://www.facebook.com/share/p/1DJNwEFe4m/',
    rating: 5
  }
];

export async function GET() {
  const apiKey = process.env.GOOGLE_BUSINESS_PROFILE_API_KEY;
  let placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey) {
    console.warn('[API/REVIEWS] GOOGLE_BUSINESS_PROFILE_API_KEY is not configured. Serving local fallback reviews.');
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, rating: 5, userRatingCount: 158, source: 'fallback' });
  }

  try {
    // 1. Resolve Place ID dynamically if not specified
    if (!placeId) {
      console.log('[API/REVIEWS] GOOGLE_PLACES_PLACE_ID not found in environment. Searching by query...');
      const searchResponse = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.id'
        },
        body: JSON.stringify({ textQuery: 'N&M 18 TRANSPORT' }),
        next: { revalidate: 86400 } // Cache the Place ID search for 24 hours
      });

      if (!searchResponse.ok) {
        throw new Error(`Place search returned status ${searchResponse.status}`);
      }

      const searchData = await searchResponse.json();
      if (searchData.places && searchData.places.length > 0) {
        placeId = searchData.places[0].id;
        console.log(`[API/REVIEWS] Dynamically resolved Place ID: ${placeId}`);
      } else {
        throw new Error('No places found for query "N&M 18 TRANSPORT"');
      }
    }

    // 2. Query Place Details (including reviews)
    console.log(`[API/REVIEWS] Fetching reviews for Place ID: ${placeId}...`);
    const detailsResponse = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews'
      },
      next: { revalidate: 86400 } // Cache review details for 24 hours
    });

    if (!detailsResponse.ok) {
      const errText = await detailsResponse.text();
      throw new Error(`Place Details returned status ${detailsResponse.status}: ${errText}`);
    }

    const detailsData = await detailsResponse.json();

    if (!detailsData.reviews || detailsData.reviews.length === 0) {
      console.warn('[API/REVIEWS] Google Places API returned zero reviews. Using fallback.');
      return NextResponse.json({
        reviews: FALLBACK_REVIEWS,
        rating: detailsData.rating || 5,
        userRatingCount: detailsData.userRatingCount || 158,
        source: 'fallback_empty'
      });
    }

    // 3. Format dynamic reviews to fit UI structure
    const dynamicReviews = detailsData.reviews.map((rev: any, index: number) => {
      return {
        text: rev.text?.text || rev.originalText?.text || 'รีวิวคุณภาพจาก Google Maps',
        author: rev.authorAttribution?.displayName || 'ลูกค้า Google Maps',
        img: rev.authorAttribution?.photoUri || `/images/reviews/ลูกค้ารีวิว ${(index % 4) + 1}.jpg`,
        link: rev.authorAttribution?.uri || `https://maps.google.com/?cid=${placeId}`,
        rating: rev.rating || 5
      };
    });

    return NextResponse.json({
      reviews: dynamicReviews,
      rating: detailsData.rating || 5,
      userRatingCount: detailsData.userRatingCount || 158,
      source: 'google_places'
    });

  } catch (err: any) {
    console.error('[API/REVIEWS] Places API call failed. Serving local fallback reviews. Error:', err.message);
    return NextResponse.json({
      reviews: FALLBACK_REVIEWS,
      rating: 5,
      userRatingCount: 158,
      source: 'fallback_error',
      error: err.message
    });
  }
}
