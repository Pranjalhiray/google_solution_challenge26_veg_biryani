import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const generateJSON = async (prompt, imageParts = []) => {
  try {
    // Standardize input for the v1 SDK
    const parts = [{ text: prompt }];
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const response = await result.response;
    const raw = response.text();
    
    const jsonStr = raw.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('Gemini Agent Error:', err);
    throw err;
  }
};
