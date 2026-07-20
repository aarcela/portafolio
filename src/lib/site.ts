/** GitHub repo name — used as Pages base path: aarcela.github.io/portafolio */
export const REPO_NAME = "portafolio";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  `https://aarcela.github.io/${REPO_NAME}`;

/** Prefix for static asset / public file links when deployed under a subpath */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
