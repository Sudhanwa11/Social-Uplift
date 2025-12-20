import React from 'react';
import './Services.css';

const Services = React.forwardRef((props, ref) => {
  const serviceItems = [
    { icon: 'fas fa-hashtag', title: 'Social Media Management', description: 'Strategic management of your social media presence across platforms to engage your audience.' },
    { icon: 'fas fa-camera', title: 'Product Photoshoot', description: 'Professional product photography that showcases your offerings in the best light.' },
    { icon: 'fas fa-users', title: 'Influencer Marketing', description: 'Strategic partnerships with influencers to amplify your brand message and reach.' },
    { icon: 'fas fa-calendar-alt', title: 'Event Planning', description: 'Creative event planning and execution that leaves a lasting impression on your audience.' },
    // Removed: Promotional Videos (was fas fa-video)
    // Removed: WhatsApp Marketing (was fab fa-whatsapp)
    { icon: 'fas fa-paint-brush', title: 'Graphic Designing', description: 'Creative visual designs that communicate your brand identity and message effectively.' },
    { icon: 'fas fa-chart-line', title: 'Performance Marketing', description: 'Data-driven marketing strategies focused on delivering measurable results and ROI.' },
  ];

  return (
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of marketing services to help your brand stand out, connect, and grow.</p>
        </div>
        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon"><i className={item.icon}></i></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;
