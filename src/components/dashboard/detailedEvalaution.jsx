import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Progress } from "../ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RxCross2 } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { getScoreColor } from "./candidateCard";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const getColorAccToScore = (score) => {
  if (score <= 30) return "[&>div]:bg-red-500";
  if (score <= 50) return "[&>div]:bg-orange-400";
  if (score <= 70) return "[&>div]:bg-yellow-400";
  return "[&>div]:bg-green-500";
};

export default function DetailedEvaluation({
  interviewData,
  total = 60,
  clickHandler,
  showExit = false,
  extraCSS = "",
}) {
  const { score, aiSummary, questionWiseScore, contactDetails, questions } =
    interviewData;
  const [answer, setAnswer] = useState([]);
  const [loading, setLoading] = useState(false);

  const scoreVal = (score / total) * 100;
  console.log(interviewData);

  async function CorrectAnswers() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const genAi = new GoogleGenerativeAI(apiKey);
    const model = genAi.getGenerativeModel({
      model: "gemini-2.5-flash-lite-preview-06-17",
    });

const prompt = `
You are an expert Full Stack Developer (React/Node.js) and seasoned technical educator. Your goal is to create a highly accurate and educational answer key for interview preparation.

I will provide a JSON array of technical interview questions. Each question object will include "question" and "difficulty" fields.

Your task:
For each question, provide the **ideal, technically comprehensive, and pedagogically clear answer**, as a JSON array named "answerKey".

Guidelines:
- Write clear, logically structured explanations in full sentences and paragraphs.
- Do NOT use section headers like "Definition", "How to use", "Example", etc.
- Include concise, relevant **code snippets** when they clarify the concept (avoid unnecessary code).
- Focus on **accuracy**, **depth**, and **clarity**.
- Cover **core principles**, **trade-offs**, and **best practices** where applicable.
- Keep the output **factual and educational**, not conversational.

Response format:
You must respond ONLY with a single valid JSON object, with no extra text or formatting like '''json or markdown.

The JSON object must have this structure:
[  
    {
      "question": "<original question text>",
      "difficulty": "<difficulty from input>",
      "idealAnswer": "<comprehensive, technically sound explanation>",
      "keyConcepts": ["<main concept 1>", "<main concept 2>", ...]
    }
]

Input questions:
${JSON.stringify(questions)}
`;
    try {
      setLoading(true);

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      const cleanedText = text.replace(/```(?:json)?\n?/g, "").trim();
      const answerArray = JSON.parse(cleanedText);

      setAnswer(answerArray);
      console.log("AI Answer Key:", answerArray);
    } catch (err) {
      toast.error(
        err.message || "An unknown error occurred while generating answer."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="relative border-b pb-4">
        {showExit && (
          <BiLogOut
            className="sm:absolute cursor-pointer h-7 w-7 sm:h-8 sm:w-8 top-0 text-purple-600"
            onClick={clickHandler}
          />
        )}
        <h2 className=" text-2xl font-bold text-center ">
          Performance Breakdown 🏆
        </h2>
      </div>

      <div className={`flex  gap-6 flex-col ${extraCSS}`}>
        {/* contact info */}
        <div className="flex gap-6 flex-col sm:flex-row items-center">
          <div className="w-24 h-24 text-center rounded-full bg-input/80 text-white flex items-center justify-center">
            <IoPerson className="text-white h-16 w-16 " />
          </div>

          <div className="bg-input/80 text-white p-2 rounded-lg flex-1">
            <p className="pb-1 border-b">
              <span className="font-bold text-white">Name: </span>
              {contactDetails.name}
            </p>
            <p className="pb-1 border-b">
              <span className="font-bold">Email: </span>
              {contactDetails.email}
            </p>
            <p className="pb-1 border-b">
              <span className="font-bold">Phone: </span>
              {contactDetails.phone}
            </p>
          </div>
        </div>
        {/* Score Progress Bar */}
        <div className="">
          <h3 className="text-xl font-bold pb-2">{`Score: ${score} / ${total}`}</h3>
          <Progress
            value={scoreVal || 0}
            className={`w-full ${getColorAccToScore(
              scoreVal
            )} [&>div]:rounded-r-[5px] `}
          />
        </div>

        {/* Interview Summary */}
        <div className="space-y-4">
          <h3 className="text-xl  font-bold  border-b pb-2 ">
            Interview Summary
          </h3>
          <div className="bg-input/80 text-white flex-1 p-2 rounded-lg">
            <p>{aiSummary}</p>
          </div>
        </div>

        {/* Question Wise Score */}
        <div className="space-y-2">
          <h3 className="text-xl  font-bold  border-b pb-2">
            Detailed Performance Analysis
          </h3>
          <Accordion type="single" collapsible>
            {questionWiseScore.map((item, ind) => {
              return (
                <AccordionItem key={ind + 1} value={`item-${ind + 1}`}>
                  <AccordionTrigger className={""}>
                    <div className="flex justify-end w-full flex-col ">
                      <p>
                        <span className="mr-2 font-bold">{`Ques ${
                          ind + 1
                        }.`}</span>
                        {questionWiseScore[ind].question}
                      </p>

                      <p className="text-gradient-secondary font-semibold ">
                        {`(${item.difficulty})`}{" "}
                        <span
                          className={` ml-4 rounded-lg px-1.5 border-2  w-fit text-xs font-bold ${getScoreColor(
                            item.score,
                            item.outof
                          )}`}
                        >{`Score: ${item.score}/${item.outof}`}</span>
                      </p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="bg-input/80 p-2 rounded-lg text-white mb-2">
                      <span className="mr-2 font-bold">Ans.</span>
                      {item.answer}
                    </p>

                    {answer.length > 0 && answer[ind] && (
                      <div className="bg-green-900/50 p-2 rounded-lg text-white">
                        <p className="font-bold mb-1">Ideal Answer:</p>
                        <p>{answer[ind].idealAnswer}</p>
                        <p className="mt-2 text-sm text-gray-300">
                          Key Concepts: {answer[ind].keyConcepts.join(", ")}
                        </p>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <button
            onClick={CorrectAnswers}
             disabled={loading || answer.length > 0}
            className={`mt-4 px-4 py-2 rounded-lg transition ${
              loading || answer.length > 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            {loading
              ? "Generating..."
              : answer.length > 0
              ? "Answers Generated"
              : "Show Correct Answers"}
          </button>
        </div>
      </div>
    </div>
  );
}

//  <Badge variant={
//                             question.difficulty === 'easy' ? 'default' :
//                             question.difficulty === 'medium' ? 'secondary' : 'destructive'
//                           }></Badge>
