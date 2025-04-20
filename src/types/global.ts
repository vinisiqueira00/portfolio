interface IProjectDetailsContentTitle {
  type: "title";
  data: string;
}

interface IProjectDetailsContentDescription {
  type: "description";
  data: string;
}

interface IProjectDetailsContentImages {
  type: "images";
  data: {
    title: string;
    "source-light": string;
    "source-dark": string;
    alt: string;
  }[];
}

interface IProjectDetailsContentList {
  type: "list";
  data: { icon: string; text: string }[];
}

interface IProjectDetailsContentPrototype {
  type: "prototype";
  data: {
    title: string;
    description: string;
    image: { source: string; alt: string };
    button: {
      label: string;
      link: string;
      isPrimary: boolean;
      target: "_blank" | "_self";
    };
  };
}

type IProjectDetailsContentBlock =
  | IProjectDetailsContentTitle
  | IProjectDetailsContentDescription
  | IProjectDetailsContentImages
  | IProjectDetailsContentList
  | IProjectDetailsContentPrototype;

export type IProjectDetailsContent = IProjectDetailsContentBlock[];
