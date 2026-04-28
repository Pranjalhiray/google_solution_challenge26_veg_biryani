import { GoogleGenerativeAI } from "@google/generative-ai";

// Use gemini-2.0-flash as it is supported by your key and more stable than 2.5
const MODEL_NAME = "gemini-2.0-flash"; 

export const generateJSON = async (prompt, imageParts = []) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("GEMINI_API_KEY is missing in environment");

    console.log(`--- AI Agent Start ---`);
    console.log(`Using Model: ${MODEL_NAME}`);
    
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const parts = [{ text: prompt }];
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const response = await result.response;
    const raw = response.text();
    
    console.log(`AI Response received successfully.`);
    
    const jsonStr = raw.replace(/```json|```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (err) {
    console.error('--- AI Agent ERROR ---');
    console.error('Status:', err.status);
    console.error('Message:', err.message);
    throw err;
  }
};
