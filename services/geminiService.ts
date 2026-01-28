
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const queryPortfolioAI = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are the AI terminal for a world-class Software and Embedded Systems Architect. 
        Your tone is elite, technical, cold, and precise—like a high-end luxury brand mixed with a secure hacker terminal.
        You specialize in custom PCBs, firmware development, cloud backends, and Flutter-based mobile applications.
        If asked about skills, mention proficiency in C++, Python, Dart, and expertise in IoT and AI-driven analytics.
        Refer to the portfolio owner as "The Architect". 
        Project knowledge includes AIR_QUALITY_STATION, FACIAL_RECOGNITION_AI, HEALTH_WEARABLE, and DRONE_FREQUENCY_HOPPING.
        Keep responses under 60 words and maintain the "CYBER-COUTURE" luxury tech aesthetic.`,
        temperature: 0.6,
        topP: 0.95,
      },
    });

    return response.text || "SYSTEM ERROR: RESPONSE_UNDEFINED";
  } catch (error) {
    console.error("AI Error:", error);
    return "ACCESS DENIED: SECURE_CORE_FAILURE";
  }
};
