import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const API_KEY = "";
const genAI = new GoogleGenerativeAI(API_KEY);
const button = document.getElementById("Button");
const aiResponse = document.getElementById("ai-response");
const loadingIndicator = document.getElementById("loading-indicator");

async function run(event) {
  event.preventDefault();

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = document.getElementById("question").value;

  loadingIndicator.style.display = "block";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  loadingIndicator.style.display = "none";

  aiResponse.innerHTML = text;
}

button.addEventListener("click", run);
