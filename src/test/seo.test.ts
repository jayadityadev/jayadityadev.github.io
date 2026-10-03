import { describe, it, expect } from "vitest";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { metadata } from "@/app/layout";

describe("SEO & Indexing Directives", () => {
  it("robots() returns proper crawl rules and sitemap URI", () => {
    const robotsConfig = robots();
    expect(robotsConfig.rules).toBeDefined();
    expect(robotsConfig.sitemap).toBe("https://jayadityadev.tech/sitemap.xml");
    expect(robotsConfig.host).toBe("https://jayadityadev.tech");
  });

  it("sitemap() returns primary canonical url with highest priority", () => {
    const sitemapEntries = sitemap();
    expect(sitemapEntries.length).toBeGreaterThan(0);
    expect(sitemapEntries[0].url).toBe("https://jayadityadev.tech/");
    expect(sitemapEntries[0].priority).toBe(1.0);
  });

  it("metadata contains canonical URL, branding keywords and search author", () => {
    expect(metadata.metadataBase?.toString()).toBe("https://jayadityadev.tech/");
    expect(metadata.alternates?.canonical).toBe("https://jayadityadev.tech");
    expect(metadata.keywords).toContain("Jayaditya Dev");
    expect(metadata.keywords).toContain("jayadityadev");
    expect(metadata.keywords).toContain("jayadityadev.tech");
  });
});
