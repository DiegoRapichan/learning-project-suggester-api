import { suggestProjectsByLesson } from "../services/projectSuggestionService.js";

export function suggestProjects(req, res) {
  const { lesson } = req.body;

  if (!lesson) {
    return res.status(400).json({
      error: "Lesson is required",
    });
  }

  const suggestions = suggestProjectsByLesson(lesson);

  res.json({
    lesson,
    suggestions,
  });
}
