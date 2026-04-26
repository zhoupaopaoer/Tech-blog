export function withBase(path = "/") {
  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

  if (path === "/") {
    return base;
  }

  return new URL(path.replace(/^\//, ""), `https://codex.local${base}`).pathname;
}
