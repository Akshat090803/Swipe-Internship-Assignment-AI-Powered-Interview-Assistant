# Crisp AI - AI-Powered Interview Assistant

Crisp AI is a web application built with React that serves as an AI-powered assistant for conducting technical interviews. It provides a seamless, interactive experience for candidates and a comprehensive dashboard for interviewers to review performance.

**Live Demo:** [https://swipe-assignment-akshat-jain.netlify.app/](https://swipe-assignment-akshat-jain.netlify.app/)

## Features

-   **AI-Powered Resume Parsing:** Candidates can upload their resume (PDF/DOCX), and the application's AI will automatically extract key contact information.
-   **Dynamic Question Generation:** The application generates a unique set of 6 technical questions for a Full Stack (React/Node.js) role, categorized by difficulty (Easy, Medium, Hard).
-   **Timed Interview Flow:** Each question is timed according to its difficulty level to simulate a real interview environment.
-   **Interactive Chat Interface:** A clean, intuitive chat UI for the candidate to interact with the AI interviewer.
-   **Persistent State:** The application uses Redux Persist to save the entire interview state locally. If a user refreshes or closes the page, they can seamlessly resume their progress.
-   **Interviewer Dashboard:** A dedicated dashboard for interviewers to view a list of all completed interviews.
-   **Search and Sort:** Interviewers can easily search for candidates by name and sort the list by date, score, or name.
-   **Detailed Performance Review:** Interviewers can view a detailed breakdown of each candidate's performance, including their answers, question-wise scores, and an overall AI-generated summary.

## Tech Stack

-   **Frontend:**
    -   React
    -   Vite
    -   Tailwind CSS for styling
-   **State Management:**
    -   Redux Toolkit
    -   Redux Persist for local storage persistence
-   **UI Components:**
    -   Shadcn/ui
    -   Lucide React & React Icons for icons
    -   Sonner for toast notifications
-   **AI & Functionality:**
    -   Google Generative AI (Gemini) for resume parsing, question generation, and evaluation.
    -   `pdfjs-dist` for handling PDF files.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/akshat090803/swipe-internship-assignment-ai-powered-interview-assistant.git](https://github.com/akshat090803/swipe-internship-assignment-ai-powered-interview-assistant.git)
    cd swipe-internship-assignment-ai-powered-interview-assistant
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Google Gemini API key:
    ```
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173`.

## Application Demo

*A brief GIF or video showcasing the application's features will be added here.*