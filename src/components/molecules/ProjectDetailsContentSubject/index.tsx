"use client";

import { useTheme } from "next-themes";

import { ProjectDetailsContentSubjectDescription } from "@/components/atoms/ProjectDetailsContentSubjectDescription";
import { ProjectDetailsContentSubjectImages } from "@/components/atoms/ProjectDetailsContentSubjectImages";
import { ProjectDetailsContentSubjectList } from "@/components/atoms/ProjectDetailsContentSubjectList";
import { ProjectDetailsContentSubjectTitle } from "@/components/atoms/ProjectDetailsContentSubjectTitle";

import { IProjectDetailsContent } from "@/types/global";
import { useEffect, useState } from "react";

interface ProjectDetailsContentSubjectProps {
  content: IProjectDetailsContent[];
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
                url:
                  resolvedTheme === "dark"
                    ? image["url-dark"]
                    : image["url-light"],
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

        return <div key={idx} className="hidden" />;
      })}
    </div>
  );
}
