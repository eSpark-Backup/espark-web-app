import React, { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="calendly-inline-widget" data-url="https://calendly.com/hr--1312/strategic-session?hide_gdpr_banner=1" style={{ minWidth: '350px', height: '700px', overflowY: "hidden" }}></div>
};


export default Calendly;