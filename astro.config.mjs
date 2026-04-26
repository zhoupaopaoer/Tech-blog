import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repository?.endsWith(".github.io");
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const site = process.env.SITE_URL || "https://example.com";
const base =
  process.env.SITE_BASE ||
  (isGitHubPagesBuild && repository && !isUserSite ? `/${repository}` : "/");

export default defineConfig({
  site,
  base,
  output: "static",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
