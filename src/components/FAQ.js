import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate();

  const faqData = [
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
    }
  ];

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  const handleSeeMoreFAQs = () => {
    navigate('/faqs');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openQuestion === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <span className="question-text">{item.question}</span>
                <span className="question-icon">
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
              
              <div className={`faq-answer ${openQuestion === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="see-more-container">
          <button className="see-more-btn" onClick={handleSeeMoreFAQs}>
            See More FAQs
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 