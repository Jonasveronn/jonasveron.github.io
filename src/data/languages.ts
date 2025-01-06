interface Language {
  name: string
  level: string
  show: boolean
}

const languages: Language[] = [
  {
    name: "Spanish",
    level: "Native",
    show: true,
  },
  {
    name: "English",
    level:
      "Basic (Actively improving my technical English skills to collaborate effectively in international teams and understand industry documentation)",
    show: true,
  },
  {
    name: "Italian",
    level: "Advanced",
    show: true,
  },
  {
    name: "Catalan",
    level: "Advanced",
    show: true,
  },
]

export default languages
