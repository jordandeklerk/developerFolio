import React, { useContext, useEffect, useState } from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        // Navigate to the main website or hide the splash screen
        // For example, you can use react-router to navigate to the main page
        // history.push("/");
        // Or you can hide the splash screen by setting a state variable
        // setShowSplashScreen(false);
      }, 500); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [animationComplete]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie
          animationData={splashScreen.animation}
          onComplete={handleAnimationComplete}
        />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}

