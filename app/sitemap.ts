import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://pixveda.in",
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: "https://pixveda.in/about",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://pixveda.in/services",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://pixveda.in/contact",
            lastModified: new Date(),
            priority: 0.8,
        },
    ];
}