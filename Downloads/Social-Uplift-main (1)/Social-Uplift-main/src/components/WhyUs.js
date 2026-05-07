import React from 'react';
import NehalPic from '../assets/nehalpic.jpg'; 
import YashiPic from '../assets/yashipic.jpg'; 
import socialuplift from '../assets/socialuplift.jpg';
import './WhyUs.css';

const founderData = [
    // ASSIGN YASHI JAIN'S IMAGE
    { name: 'Yashi Jain', title: 'Co-Founder', image: YashiPic }, 
    { name: 'Nehal Batra', title: 'Co-Founder', image: NehalPic }
];

const WhyUs = React.forwardRef((props, ref) => (
    <section className="section" id="why-us" ref={ref}>
        <div className="container">
            <div className="section-title">
                <h2>The <span>Social Uplift</span> Difference</h2> 
                <p>We don't just run ads; we build genuine creator-led brands that actually move the needle for your business.</p>
            </div>
            <div className="why-us-content">
                <div className="why-us-text">
                    <h3>Why Choose Social Uplift?</h3>
                    <p>We've combined the efficiency of performance marketing with the authenticity of the creator economy. Our approach ensures your brand message is delivered by voices that audiences actually trust, leading to better conversion rates and long-term brand equity.</p>
                    <p>We treat your brand like it's our own, striving to over-deliver on every campaign metric.</p>
                    
                    <div className="founders">
                        {founderData.map((founder, index) => (
                            <div className="founder" key={index}>
                                <div className="founder-img">
                                    {/* This conditional rendering now works for both */}
                                    {founder.image ? (
                                        <img 
                                            src={founder.image} 
                                            alt={founder.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                        />
                                    ) : (
                                        // Fallback icon, though now less likely to be used for founders
                                        <i className="fas fa-user-circle"></i>
                                    )}
                                </div>
                                
                                <h4>{founder.name}</h4>
                                <p>{founder.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="why-us-image">
                    <img src={socialuplift} alt="Social Uplift" style={{ width: '100%', height: '100%'}}/>
                </div>
            </div>
        </div>
    </section>
));

export default WhyUs;