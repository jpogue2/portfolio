/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

export function otherProjectsCollection(collectionApi) {
  return collectionApi.getFilteredByTag("other-projects").sort((a, b) => {
    const ao = a.data.order ?? 9999;
    const bo = b.data.order ?? 9999;

    if (ao !== bo) return ao - bo;

    // tie-breaker: title (stable)
    return (a.data.title || "").localeCompare(b.data.title || "");
  });
}
