import "./styles.css";
import { useRef, useEffect } from "react";

const drawLine = (canvas, x1, y1, x2, y2, stroke = "red", width = 3) => {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
  ctx.closePath();
};

export default function App() {
  const ref = useRef();
  const lines = [];

  useEffect(() => {
    drawLine(ref.current, 10, 10, 100, 100);
  }, []);

  return (
    <div className="App">
      <div className="canvas-containter">
        <canvas ref={ref}></canvas>
      </div>
      <div className="list">
        <ul>
          <li>
            <span>1</span>
            <button>Delete</button>
          </li>
          <li>
            <span>2</span>
            <button>Delete</button>
          </li>
          <li>
            <span>3</span>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
