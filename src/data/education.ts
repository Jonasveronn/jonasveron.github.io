interface Education {
  title: string
  startDate: string
  endDate?: string
  school: string
  location: string
  description: string
  currentUni: boolean
}

const education: Education[] = [
  {
    title: "FullStack Web Developer",
    startDate: "2024-09-16",
    endDate: "2024-12-20",
    school: "ISDI Coders",
    location: "Barcelona",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB, working with Agile methodology and Git for version control.",
    currentUni: true,
  },
  {
    title: "Bachelor's in Marketing and Finance (First Year)",
    startDate: "2014-01-01",
    endDate: "2015-12-31",
    school: "Universidad UCES",
    location: "Argentina",
    description:
      "Studied Marketing and Finance, focusing on strategic management, market analysis, and financial modeling.",
    currentUni: false,
  },
  {
    title: "Bachelor's Degree in Economics (Two Years)",
    startDate: "2010-01-01",
    endDate: "2012-12-31",
    school: "Universidad UNNE",
    location: "Argentina",
    description:
      "Completed first year of the Economics degree program, covering fundamental subjects in economics, business, and finance.",
    currentUni: false,
  },
]

export default education
