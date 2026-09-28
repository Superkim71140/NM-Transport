import { MetadataRoute } from "next";
import locations from "../data/bangkok-locations.json";
import routes from "../data/long-haul-routes.json";
import { AREA_ZONES } from "../data/area-zones";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = "https://www.nm18transport.com";
  const now = new Date();

  // 1. Homepage (Highest priority)
  const homePage: MetadataRoute.Sitemap = [
    {
      url: domain,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // 2. High-converting Core Service pages
  const servicePages: MetadataRoute.Sitemap = [
    "/service/moving",
    "/service/pets",
    "/service/moto",
  ].map((route) => ({
    url: `${domain}${route}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // 3. Authority & Conversion pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${domain}/works`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${domain}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // 4. Area hub and Regional Zone pages
  const areaPages: MetadataRoute.Sitemap = [
    {
      url: `${domain}/area`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...Object.keys(AREA_ZONES).map((slug) => ({
      url: `${domain}/area/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  // 5. Educational / Blog content
  const blogPages: MetadataRoute.Sitemap = [
    "/blog/ultimate-moving-guide",
    "/blog/packing-fragile-items",
  ].map((route) => ({
    url: `${domain}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 6. District / Location programmatic pages (Index only verified active locations)
  const locationPages: MetadataRoute.Sitemap = locations
    .filter((loc) => loc.status === "active")
    .map((loc) => ({
      url: `${domain}/location/${loc.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.65,
    }));

  // 7. Interprovincial long-haul route pages
  const routePages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${domain}/route/${route.originSlug}/${route.destinationSlug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.isTopRoute ? 0.85 : 0.75,
  }));

  return [
    ...homePage,
    ...servicePages,
    ...corePages,
    ...areaPages,
    ...blogPages,
    ...locationPages,
    ...routePages,
  ];
}
