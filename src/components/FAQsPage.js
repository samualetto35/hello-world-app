import React, { useState, useEffect } from 'react';
import Header from './Header';
import './FAQsPage.css';

const FAQsPage = ({ onLoginClick }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allFaqData = [
    // Original FAQs
    {
      question: "How does Recula conduct interviews?",
      answer: "Recula uses advanced AI to conduct natural, conversational interviews with candidates. The AI adapts to each candidate's responses, asking follow-up questions and diving deeper into relevant topics, just like a human interviewer would."
    },
    {
      question: "What types of questions does Recula ask?",
      answer: "Recula asks role-specific questions tailored to your job requirements. This includes behavioral questions, technical assessments, situational scenarios, and culture-fit evaluations. You can customize the question types and difficulty levels."
    },
    {
      question: "How accurate is the AI evaluation?",
      answer: "Our AI has an 84% alignment score with human evaluators. It provides consistent, bias-free assessments and generates detailed reports with scores, insights, and recommendations for each candidate."
    },
    {
      question: "Can candidates use their preferred language?",
      answer: "Yes! Recula supports multiple languages and automatically adapts to the candidate's preferred language. It also ensures compliance with local hiring regulations in different countries."
    },
    {
      question: "How long does an interview take?",
      answer: "Typical interviews range from 15-30 minutes, depending on the role and your configuration. The AI efficiently covers all necessary topics while keeping candidates engaged throughout the process."
    },
    {
      question: "What happens after the interview?",
      answer: "You receive a comprehensive report within minutes, including candidate scores, key insights, interview transcript, and ranking compared to other candidates. This helps you quickly identify top performers for the next round."
    },
    // Additional FAQs
    {
      question: "How does the interview process actually work with Recula?",
      answer: "Once you upload your candidate list or share a unique interview link, Recula automatically invites them to complete an AI-led interview. The interview is conducted in real time, with dynamic follow-up questions, and a structured report is generated right after completion — no manual involvement needed from your team."
    },
    {
      question: "Do we need to schedule the interviews ourselves?",
      answer: "No. Recula handles everything asynchronously. Candidates can complete interviews anytime, without needing to coordinate calendars. Your team simply gets the results once it's done."
    },
    {
      question: "Can we control or customize the type of interview questions asked?",
      answer: "Yes. You can use our ready-made templates or write your own questions. You can choose the tone (formal/casual), format (text/audio), and scoring criteria based on the role or department."
    },
    {
      question: "How do we receive the results after the interview?",
      answer: "You'll get a structured report with: Interview summary, Full transcript, Confidence, clarity, and communication scores, AI-backed recommendation (optional). You can view results in the dashboard or export them to PDF or your ATS."
    },
    {
      question: "What happens if a candidate doesn't complete the interview?",
      answer: "You'll be notified. The system records partial data if available and you can choose to resend the invite or follow up manually. You can also set expiry rules and reminders automatically."
    },
    {
      question: "How long does it take to get started with Recula?",
      answer: "Most teams can launch Recula within 1 business day. We provide onboarding support, pre-built templates, and a live demo session for your team if needed."
    },
    {
      question: "Can we integrate Recula into our current hiring process?",
      answer: "Yes. Recula can be used standalone or integrated into your ATS or existing workflow. We support integrations via API, and we offer native exports for most major platforms (e.g. Greenhouse, Lever, Teamtailor)."
    },
    {
      question: "Can multiple team members review the same interview?",
      answer: "Yes. Your entire hiring team can access, comment on, and rate each candidate's interview results — all within the Recula dashboard. You can also assign candidates to specific reviewers."
    },
    {
      question: "Is the candidate experience branded and professional?",
      answer: "Absolutely. You can customize the welcome screen, logo, tone of voice, and email copy to ensure a consistent, branded experience for every applicant."
    },
    {
      question: "What kind of support do we get?",
      answer: "We provide onboarding assistance, live support (chat/email), and success check-ins to ensure you're getting maximum value. Enterprise plans include dedicated account management."
    },
    {
      question: "How does Recula fit into our current hiring workflow?",
      answer: "Recula works alongside your current process. You can invite candidates manually or via ATS, and once interviews are completed, results are delivered directly to your team—ready for review, scoring, or next steps."
    },
    {
      question: "Do we need to train the AI before using it?",
      answer: "No training is required. Recula works out-of-the-box with smart defaults and industry templates. However, you can fine-tune the experience by adjusting question sets, tone, and scoring preferences."
    },
    {
      question: "How customizable is the interview experience?",
      answer: "Highly customizable. You can control the questions asked, the language used, the branding shown to candidates, and the scoring dimensions. It can reflect your company's voice and values."
    },
    {
      question: "How do we invite candidates to the AI interview?",
      answer: "You can upload candidate emails in bulk, connect Recula to your ATS, or generate unique links for each job posting. Recula handles sending the invites and reminders automatically."
    },
    {
      question: "What kind of questions can Recula ask?",
      answer: "Recula supports open-ended, behavioral, role-specific, and even situational questions. It can adjust follow-up questions in real time based on how the candidate responds."
    },
    {
      question: "Can we use Recula across different departments or roles?",
      answer: "Yes. You can create separate workflows for different roles or departments, each with tailored questions and evaluation criteria. Teams can access only the candidates relevant to them."
    },
    {
      question: "Who in our team can access the interview results?",
      answer: "You can set permissions for HR, hiring managers, or department heads. Each team member can view interviews, leave internal comments, and filter candidates by score or status."
    },
    {
      question: "What happens if a candidate has technical issues during the interview?",
      answer: "Recula has built-in fallback systems and gives candidates the option to retry. If issues persist, you'll be notified and can reach out or offer a manual interview as a backup."
    },
    {
      question: "Does Recula require candidates to install anything?",
      answer: "No. Everything happens in the browser. Candidates simply click the link, answer the questions, and submit. No logins, no downloads."
    },
    {
      question: "Can Recula help us compare candidates objectively?",
      answer: "Yes. Each candidate is scored on consistent criteria (like communication, confidence, clarity), and presented with structured summaries—making side-by-side comparisons easy and fair."
    }
  ];

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <div className="faqs-page">
      <Header onLoginClick={onLoginClick} />
      
      <main className="faqs-main">
        <div className="faqs-container">
          <h1 className="faqs-page-title">FAQ</h1>
          
          <div className="faqs-list">
            {allFaqData.map((item, index) => (
              <div key={index} className="faqs-item">
                <button 
                  className={`faqs-question ${openQuestion === index ? 'active' : ''}`}
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="faqs-question-text">{item.question}</span>
                  <span className="faqs-question-icon">
                    {openQuestion === index ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 12H6"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 6v12M6 12h12"/>
                      </svg>
                    )}
                  </span>
                </button>
                
                <div className={`faqs-answer ${openQuestion === index ? 'open' : ''}`}>
                  <div className="faqs-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQsPage; 