import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Scene = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');

    if (!canvas) {
      console.error("Canvas element with id 'canvas3d' not found.");
      return;
    }

    const app = new Application(canvas);
    app.load('https://prod.spline.design/hjVBxGXnSv7iGriP/scene.splinecode');
  }, []);

  return (
     <div>
          <canvas id="canvas3d" />
          <p>hdsahdvsh</p>
     </div>
  )

  ;
};

export default Scene;
