import React from "react";

export function FixedPlugin() {
  React.useEffect(() => {
    loadBotScript();
  }, []); // Load the bot script when the component mounts

  return (
    <>
      <div id="bot-container"></div>
    </>
  );
}

function loadBotScript() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.defer = true;
  script.src = "//js-na1.hs-scripts.com/46081576.js"; // Replace with your bot 
  
  const botContainer = document.getElementById("bot-container");
  if (botContainer) {
    botContainer.appendChild(script);
  }
}
