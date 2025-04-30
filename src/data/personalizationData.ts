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
          "40-60 minutes",
          "Over one hour",
        ],
      },
      {
        id: "work_type",
        question: "Do you like structured routines or flexible schedules?",
        options: [
          "I prefer a fixed routine",
          "I like flexibility",
          "A bit of both",
        ],
      },
      {
        id: "team_preference",
        question: "How often do you procrastinate on studying?",
        options: ["Rarely", "Some times", "Often", "All the time"],
      },
    ],
  },

  {
    title: "Personality and Tone",
    questions: [
      {
        id: "study_assistant",
        question: "What tone do you prefer for your study assistant?",
        options: [
          "Friendly and supportive",
          "Motivational and energetic",
          "Sassy and humourous",
          "Serious and no-nonese",
        ],
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
