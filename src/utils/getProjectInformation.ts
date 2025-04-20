interface IProject {
  thumbnail: {
    source: string;
    alt: string;
  };
  title: string;
  area: string;
  type: string;
  slug: string;
}

function getProjectInformation(
  t: (key: string) => string,
  slug: string
): IProject {
  return {
    thumbnail: {
      source: t(`projects.${slug}.thumbnail.source`),
      alt: t(`projects.${slug}.thumbnail.alt`),
    },
    title: t(`projects.${slug}.title`),
    area: t(`projects.${slug}.area`),
    type: t(`projects.${slug}.type`),
    slug: t(`projects.${slug}.slug`),
  };
}

export { getProjectInformation };
