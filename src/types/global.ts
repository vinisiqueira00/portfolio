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
    "url-light": string;
    "url-dark": string;
    alt: string;
  }[];
}

interface IProjectDetailsContentList {
  type: "list";
  data: { index: string; text: string }[];
}

export type IProjectDetailsContent =
  | IProjectDetailsContentTitle
  | IProjectDetailsContentDescription
  | IProjectDetailsContentImages
  | IProjectDetailsContentList;
