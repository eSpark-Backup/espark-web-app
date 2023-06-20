import React, { useEffect } from 'react';
const Calendly = ({devSelected}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="calendly-inline-widget" data-url={`https://calendly.com/esparkconsgroup/30min?primary_color=11a79c&a2=${devSelected}`} style={{ minWidth: '350px', height: '700px', overflowY: "hidden" }}></div>
};


export default Calendly;