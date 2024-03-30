import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "AIzaSyDV2zfdS9iKJolTjUFwqnox5V6xPBt6fk8";
const genAI = new GoogleGenerativeAI(API_KEY);
const button = document.getElementById("Button");
const aiResponse = document.getElementById("ai-response");

async function run(event) {
  event.preventDefault();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = document.getElementById("question").value;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  aiResponse.innerHTML = text;
}

button.addEventListener("click", run);
