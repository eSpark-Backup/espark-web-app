// VisitorQueueTracking.js

import React, { useEffect } from 'react';

const VisitorQueueTracking = () => {
  useEffect(() => {
    function vqTrackId() {
      return '8ff2c762-5fab-489d-9cdf-3c6340814386';
    }

    // Main tracking script
    const trackingScript = document.createElement('script');
    trackingScript.src = `//t.visitorqueue.com/p/tracking.min.js?id=${vqTrackId()}`;
    trackingScript.async = true;
    trackingScript.setAttribute('id', 'vq_tracking');
    trackingScript.setAttribute('data-id', vqTrackId());
    document.body.appendChild(trackingScript);

    // Stylesheet link
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.type = 'text/css';
    styleLink.href = `https://p.visitorqueue.com/styles/${vqTrackId()}.css`;
    styleLink.id = 'vq_flick_styles';
    document.head.appendChild(styleLink);

    // Personalization tracking script
    // function vqTrackPc() {
    //   return 1;
    // }

    const personalizationScript = document.createElement('script');
    personalizationScript.src = `//personalisation.visitorqueue.com/p/personalisation.min.js?id=${vqTrackId()}`;
    personalizationScript.async = true;
    personalizationScript.setAttribute('id', 'vq_personalisation');
    personalizationScript.setAttribute('data-id', vqTrackId());
    document.body.appendChild(personalizationScript);

    window.onload = VisitorQueueTracking;
    // Cleanup function
    return () => {
        if (document.body.contains(trackingScript)) {
          document.body.removeChild(trackingScript);
        }
        if (document.head.contains(styleLink)) {
          document.head.removeChild(styleLink);
        }
        if (document.body.contains(personalizationScript)) {
          document.body.removeChild(personalizationScript);
        }
        window.onload = null;
      };
  }, []);

  return <div>Visitor Queue Tracking is being loaded...</div>;
};

export default VisitorQueueTracking;
