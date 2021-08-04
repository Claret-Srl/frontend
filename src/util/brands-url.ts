export const brandsUrl = (
  domain: string,
  type: "icon" | "logo",
  useFallback?: boolean
): string =>
  `https://brands.safegatepro.it/${
    useFallback ? "_/" : ""
  }${domain}/${type}.png`;
