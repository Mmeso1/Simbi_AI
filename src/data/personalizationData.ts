// data/personalizationData.ts
export const sections = [
  {
    title: "Learning Preferences",
    questions: [
      {
        id: "learning_style",
        question: "What’s your preferred way of studying?",
        options: [
          "Watching videos",
          "Reading articles",
          "Practicing with quizzes",
          "Group discussions",
          "One-on-one explanations",
        ],
      },
      {
        id: "study_time",
        question: "How do you usually take notes?",
        options: [
          "Typed notes",
          "Handwritten notes",
          "I don’t take notes",
          "I use voice memos",
        ],
      },
      {
        id: "study_environment",
        question: "What time do you feel most focused?",
        options: ["Morning", "Afternoon", "Evening", "Late night"],
      },
    ],
  },
  {
    title: "Study Habits",
    questions: [
      {
        id: "field_interest",
        question: "How long can you study before losing focus?",
        options: [
          "Less than 20 minutes",
          "20-40 minutes",
          "1 hour",
          "Over one hour",
        ],
      },
      {
        id: "study_struggle",
        question: "What is your biggest struggle when studying?",
        options: ["Lack of motivation", "Procrastination", "Time management"],
      },
      {
        id: "team_preference",
        question: "How often do you procrastinate on studying?",
        options: ["Rarely", "Sometimes", "Often", "All the time"],
      },
    ],
  },
  {
    title: "Personality and Tone",
    questions: [
      {
        id: "education_level",
        question: "What is your current level of education?",
        options: ["University", "Secondary", "Priimary", "Professional level"],
      },
      {
        id: "personality",
        question:
          "Would you like Simbi to hold you accountable? (e.g, with reminders or check-ins)?",
        options: ["Yes", "No"],
      },
      {
        id: "reaction",
        question: "How should SIMBI react if you miss a study goal?",
        options: [
          "Send a gentle reminder",
          "Motivate with a funny message",
          "Be firm and direct",
          "Say nothing-I’ll catch up on my own",
        ],
      },
    ],
  },
  {
    title: "Goal Setting",
    questions: [
      {
        id: "goals",
        question: "What are your current learning goals?",
        options: ["open ended"],
      },
      {
        id: "check in",
        question:
          "How often would you like SIMBI to check in on your progress?",
        options: [
          "Daily",
          "Weekly",
          "After each study session",
          "Only when I ask",
        ],
      },
    ],
  },
];
