import React from 'react';
import './CreativeProcess.css';

const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Research",
    description: "We start with deep research into your industry, target audience, and competitors to understand exactly where your brand stands.",
    icon: "🔍" 
  },
  {
    id: 2,
    number: "02",
    title: "Strategic Planning",
    description: "We develop a comprehensive, data-backed strategy that aligns with your business objectives and defines your unique brand voice.",
    icon: "🎯"
  },
  {
    id: 3,
    number: "03",
    title: "Creative Execution",
    description: "Our creative team brings the strategy to life through compelling visuals, engaging copy, and innovative campaigns that stop the scroll.",
    icon: "✨"
  },
  {
    id: 4,
    number: "04",
    title: "Optimization & Growth",
    description: "We continuously monitor performance metrics and optimize our approach to ensure maximum ROI and sustained growth for your brand.",
    icon: "🚀"
  },
  {
    id: 5,
    number: "05",
    title: "Launch & Scale",
    description: "We execute the launch with precision across all channels, scaling successful campaigns to maximize reach and impact.",
    icon: "📈"
  },
  {
    id: 6,
    number: "06",
    title: "Reporting & Insights",
    description: "We provide transparent, detailed reports on campaign performance, offering actionable insights for future success.",
    icon: "📊"
  }
];

const CreativeProcess = React.forwardRef((props, ref) => {
  return (
    <section className="process-section" ref={ref} id="creative-process">
      <div className="container">
        
        {/* Header */}
        <div className="process-header">
          <h2>Our Creative Process</h2>
          <p>
            A collaborative approach designed to ensure every campaign is tailored to your unique goals.
          </p>
        </div>

        {/* Card Grid */}
        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-card">
              {/* The large background number (Watermark) */}
              <div className="card-bg-number">{step.number}</div>
              
              <div className="card-content">
                <div className="icon-wrapper">
                  <span>{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default CreativeProcess;