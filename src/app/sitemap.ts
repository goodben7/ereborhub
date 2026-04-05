import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ereborhub.cloud";
  const locales = ["en", "fr"];
  const routes = ["", "/about", "/projects", "/services", "/contact"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      // Determine priority and change frequency based on the route
      let priority = 0.8;
      let changeFrequency:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never" = "monthly";

      if (route === "") {
        priority = 1.0;
        changeFrequency = "weekly";
      } else if (route === "/projects" || route === "/services") {
        priority = 0.9;
        changeFrequency = "weekly";
      } else if (route === "/contact") {
        priority = 0.7;
        changeFrequency = "yearly";
      }

      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  return sitemapEntries;
}
