// data/personalizationData.ts
export const sections = [
  {
    title: "Learning Preferences",
    questions: [
      {
        id: "learning_style",
        question: "How do you prefer to learn?",
        options: ["Visual", "Auditory", "Reading/Writing", "Kinesthetic"],
      },
      {
        id: "study_time",
        question: "What time of day do you study best?",
        options: ["Morning", "Afternoon", "Evening", "Late night"],
      },
      {
        id: "study_environment",
        question: "What kind of study environment do you prefer?",
        options: ["Quiet", "Background noise", "Music", "Group setting"],
      },
    ],
  },
  {
    title: "Career Interests",
    questions: [
      {
        id: "field_interest",
        question: "Which field are you most interested in?",
        options: ["Technology", "Health", "Finance", "Art & Design"],
      },
      {
        id: "work_type",
        question: "What type of work do you prefer?",
        options: ["Remote", "On-site", "Hybrid", "Freelance"],
      },
      {
        id: "team_preference",
        question: "Do you prefer working alone or in a team?",
        options: ["Alone", "Small teams", "Large teams", "Flexible"],
      },
    ],
  },
  // Add more sections as needed
];
