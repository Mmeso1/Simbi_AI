// data/personalizationData.ts
export const sections = [
  {
    title: "Pre Assessment Test",
    questions: [
      {
        id: "age",
        question: "How old are you?",
        options: ["under 13", "13-17", "18-22", "23-30", "30+"],
      },
      {
        id: "education level",
        question: "What level of education are you currently in?",
        options: [
          "Secondary school (JSS/SSS)",
          "University/ Polytechnic",
          "Vocational or Proffesional training",
          "Just preparing for exams (e.g. JAMB, WAEC)",
          "Other",
        ],
      },
      {
        id: "study assistant",
        question: "Have you used a study assistant app before?",
        options: ["Yes", "No"],
      },
      {
        id: "study assistant2",
        question: "If yes, what apps do you use? (Optional)",
        options: ["Open ended"],
      },
      {
        id: "visibility",
        question: "How did you hear about SIMBI?",
        options: [
          "Social Media",
          "A friend or classmate",
          "My school or a teacher",
          "Blog or article",
          "Google search",
          "Other",
        ],
      },
      {
        id: "achievement expectation",
        question: "What do you hope to achieve with SIMBI?",
        options: [
          "Just exploring for now",
          "Improve my grades",
          "Track my progress",
          "Build consistent study habits",
          "Stay motivated",
          "Feel less stressed about academics",
          "Other",
        ],
      },
    ],
  },
  // {
  //   title: "Study Habits",
  //   questions: [
  //     {
  //       id: "field_interest",
  //       question: "How long can you study before losing focus?",
  //       options: [
  //         "Less than 20 minutes",
  //         "20-40 minutes",
  //         "40-60 minutes",
  //         "Over one hour",
  //       ],
  //     },
  //     {
  //       id: "work_type",
  //       question: "Do you like structured routines or flexible schedules?",
  //       options: [
  //         "I prefer a fixed routine",
  //         "I like flexibility",
  //         "A bit of both",
  //       ],
  //     },
  //     {
  //       id: "team_preference",
  //       question: "How often do you procrastinate on studying?",
  //       options: ["Rarely", "Some times", "Often", "All the time"],
  //     },
  //   ],
  // },

  // {
  //   title: "Personality and Tone",
  //   questions: [
  //     {
  //       id: "study_assistant",
  //       question: "What tone do you prefer for your study assistant?",
  //       options: [
  //         "Friendly and supportive",
  //         "Motivational and energetic",
  //         "Sassy and humourous",
  //         "Serious and no-nonese",
  //       ],
  //     },
  //     {
  //       id: "personality",
  //       question:
  //         "Would you like Simbi to hold you accountable? (e.g, with reminders or check-ins)?",
  //       options: ["Yes", "No"],
  //     },
  //     {
  //       id: "reaction",
  //       question: "How should SIMBI react if you miss a study goal?",
  //       options: [
  //         "Send a gentle reminder",
  //         "Motivate with a funny message",
  //         "Be firm and direct",
  //         "Say nothing-I’ll catch up on my own",
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Goal Setting",
  //   questions: [
  //     {
  //       id: "goals",
  //       question: "What are your current learning goals?",
  //       options: ["open ended"],
  //     },
  //     {
  //       id: "check in",
  //       question:
  //         "How often would you like SIMBI to check in on your progress?",
  //       options: [
  //         "Daily",
  //         "Weekly",
  //         "After each study session",
  //         "Only when I ask",
  //       ],
  //     },
  //   ],
  // },
];
