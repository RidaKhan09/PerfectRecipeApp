// const axios = require("axios");

// const generateRecipeWithAI = async (preferences) => {
//   const prompt = `Generate a recipe based on these preferences: ${preferences}. Respond with "Title: ..." followed by step-by-step instructions.`;

//   const response = await axios.post(
//     "https://api.openai.com/v1/chat/completions",
//     {
//       model: "gpt-3.5-turbo", // or gpt-4 if you have access
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.7,
//       max_tokens: 500,
//     },
//     {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//     }
//   );

//   return response.data.choices[0].message.content;
// };

// module.exports = { generateRecipeWithAI };

