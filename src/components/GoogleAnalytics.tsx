import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <div className="container">
      <Script
      id="first-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-C0TS62PYKK"
      ></Script>
      <Script id="second-script" >
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C0TS62PYKK');
  `}
      </Script>
    </div>
  );
};

export default GoogleAnalytics;
