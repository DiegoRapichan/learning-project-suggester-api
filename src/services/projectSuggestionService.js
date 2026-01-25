import { lessonProjects } from "../data/lessonProjects.js";

export function suggestProjectsByLesson(lessonName) {
  const lesson = lessonName.toLowerCase();

  if (lesson.includes("dom")) {
    return lessonProjects.dom;
  }

  if (lesson.includes("array")) {
    return lessonProjects.arrays;
  }

  if (lesson.includes("api")) {
    return lessonProjects.api;
  }

  return [
    {
      title: "Projeto livre",
      description:
        "Crie um projeto aplicando os conceitos aprendidos nesta aula",
      skills: ["JavaScript"],
    },
  ];
}
