interface IProject {
  thumbUrl: string;
  thumbAlt: string;
  thumbType: string;
  name: string;
  area: string;
  type: string;
  link: string;
}

function getProjectInformation(
  t: (key: string) => string,
  slug: string
): IProject {
  return {
    thumbUrl: t(`projects.${slug}.thumb-url`),
    thumbAlt: t(`projects.${slug}.thumb-alt`),
    thumbType: t(`projects.${slug}.thumb-type`),
    name: t(`projects.${slug}.title`),
    area: t(`projects.${slug}.area`),
    type: t(`projects.${slug}.type`),
    link: t(`projects.${slug}.link`),
  };
}

export { getProjectInformation };
