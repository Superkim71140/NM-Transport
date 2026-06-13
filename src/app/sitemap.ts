import { MetadataRoute } from "next";
import locations from "../data/bangkok-locations.json";
import routes from "../data/long-haul-routes.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = "https://www.nm18transport.com";

  // Core pages
  const corePages = ["", "/works", "/contact"].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service pages
  const servicePages = ["/service/moving", "/service/pets", "/service/moto"].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Area pages
  const areaPages = [
    "/area/thonburi",
    "/area/bangkok-inner",
    "/area/perimeter",
    "/area/chiangmai",
    "/area/chiangrai",
  ].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = [
    "/blog/ultimate-moving-guide",
    "/blog/packing-fragile-items",
  ].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Programmatic location pages (index only verified active locations)
  const locationPages = locations
    .filter((loc) => loc.status === "active")
    .map((loc) => ({
      url: `${domain}/location/${loc.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  // Programmatic long-haul route pages
  const routePages = routes.map((route) => ({
    url: `${domain}/route/${route.originSlug}/${route.destinationSlug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.isTopRoute ? 0.85 : 0.75,
  }));

  return [...corePages, ...servicePages, ...areaPages, ...blogPages, ...locationPages, ...routePages];
}
