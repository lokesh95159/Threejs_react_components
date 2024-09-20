import React, { useEffect } from "react";
import { neonCursor } from "threejs-toys";

const Backgroundanimation = () => {
  useEffect(() => {
    const element = document.getElementById("bg");
    if (!element) return;

    // Initialize neon cursor effect
    const nc = neonCursor({
      el: element, // Target element
      shaderPoints: 16, // Number of points for the neon effect
      curvePoints: 80, // Number of curve points
      curveLerp: 0.5, // Curvature intensity
      radius1: 0.2, // Inner radius of the cursor effect
      radius2: 0.6, // Outer radius of the cursor effect
      velocityTreshold: 10, // Cursor movement velocity threshold for the effect
      sleepRadiusX: 200, // Sleep radius on X axis when inactive
      sleepRadiusY: 200, // Sleep radius on Y axis when inactive
    });

    // Cleanup function, no need for nc.destroy()
    return () => {
      // Add any other cleanup logic if necessary
    };
  }, []);

  return (
    <div id="bg" style={styles.bg}>
      <div id="hero" style={styles.hero}>
        <h1>Lokesh</h1>
        <p>Innovating with neon effects!</p>
      </div>
    </div>
  );
};

const styles = {
  bg: {
    margin: 0,
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    color: "#ffffff",
    fontFamily: "'Montserrat', sans-serif",
    textAlign: "center",
    textShadow: "0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000",
    overflow: "hidden",
    zIndex: -5,
  },
  hero: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
};

export default Backgroundanimation;
