"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { ProjectDetailsContentSubjectDescription } from "@/components/atoms/ProjectDetailsContentSubjectDescription";
import { ProjectDetailsContentSubjectImages } from "@/components/atoms/ProjectDetailsContentSubjectImages";
import { ProjectDetailsContentSubjectList } from "@/components/atoms/ProjectDetailsContentSubjectList";
import { ProjectDetailsContentSubjectTitle } from "@/components/atoms/ProjectDetailsContentSubjectTitle";
import { ProjectDetailsContentSubjectPrototype } from "@/components/molecules/ProjectDetailsContentSubjectPrototype";

import { IProjectDetailsContent } from "@/types/global";

interface ProjectDetailsContentSubjectProps {
  content: IProjectDetailsContent;
}

export function ProjectDetailsContentSubject(
  props: ProjectDetailsContentSubjectProps
) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  return (
    <div className="flex flex-col items-stretch justify-start gap-8 w-full h-auto">
      {props.content?.map((contentItem, idx) => {
        if (contentItem.type === "title") {
          return (
            <ProjectDetailsContentSubjectTitle
              key={idx}
              title={contentItem.data}
            />
          );
        }

        if (contentItem.type === "description") {
          return (
            <ProjectDetailsContentSubjectDescription
              key={idx}
              description={contentItem.data}
            />
          );
        }

        if (contentItem.type === "images") {
          return (
            <ProjectDetailsContentSubjectImages
              key={idx}
              images={contentItem.data.map((image) => ({
                title: image.title,
                alt: image.alt,
                source:
                  resolvedTheme === "dark"
                    ? image["source-dark"]
                    : image["source-light"],
              }))}
            />
          );
        }

        if (contentItem.type === "list") {
          return (
            <ProjectDetailsContentSubjectList
              key={idx}
              list={contentItem.data}
            />
          );
        }

        if (contentItem.type === "prototype") {
          return (
            <ProjectDetailsContentSubjectPrototype
              key={idx}
              data={contentItem.data}
            />
          );
        }

        return <div key={idx} className="hidden" />;
      })}
    </div>
  );
}
