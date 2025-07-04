import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const testimonials = [
    {
      text: "Recula transformed our hiring process completely. We went from spending weeks on initial interviews to having qualified candidates ready for final rounds in just days. The AI insights are incredibly accurate.",
      name: "Sarah Johnson",
      title: "Head of Talent Acquisition",
      company: "TechCorp",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "The quality of candidates we're seeing has improved dramatically. Recula filters out unqualified applicants while highlighting hidden gems we might have missed. It's like having an expert recruiter working 24/7.",
      name: "Michael Chen",
      title: "Engineering Manager",
      company: "InnovateLab",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      text: "What impressed me most is how candidates actually enjoy the interview experience. They feel heard and understood, which reflects well on our company brand. Plus, we're making decisions faster than ever.",
      name: "Emily Rodriguez",
      title: "HR Director",
      company: "GrowthVentures",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      text: "ROI was immediate. We reduced time-to-hire by 60% and improved candidate quality significantly. Recula pays for itself just in the time savings alone, not to mention better hiring outcomes.",
      name: "David Thompson",
      title: "Startup Founder",
      company: "NextGen Solutions",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      text: "Integration was seamless with our existing ATS. The team was up and running in one day, and the support has been exceptional. It's rare to find a tool that delivers exactly what it promises.",
      name: "Lisa Wang",
      title: "People Operations Lead",
      company: "ScaleUp Inc",
      image: "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ];

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="testimonials-container">
        <div className={`testimonials-content ${isVisible ? 'animate-in' : ''}`}>
          {/* Previous Arrow */}
          <button className="testimonial-arrow prev-arrow" onClick={goToPrevious}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="testimonial-wrapper">
            <div className="testimonial-text">
              "{testimonials[currentTestimonial].text}"
            </div>
            
            <div className="testimonial-author">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="author-image"
              />
              <div className="author-info">
                <div className="author-name">{testimonials[currentTestimonial].name}</div>
                <div className="author-title">
                  {testimonials[currentTestimonial].title} · {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button className="testimonial-arrow next-arrow" onClick={goToNext}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={`testimonial-dots ${isVisible ? 'animate-in' : ''}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 