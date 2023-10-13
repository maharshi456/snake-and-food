import Board from "../Board";
import Food from "../Food";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Border = () => {
  const randomFoodGenerate = () => {
    let min = 1;
    let max = 99;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    return [x, y];
  };
  const [foodDot, setFoodDot] = useState(randomFoodGenerate);
  const [snakeDots, setSnakeDots] = useState([
    [2, 2],
    [4, 2],
    [6, 2],
  ]);
  // const [snakeDots, setSnakeDots] = useState([
  //   [12, 4],
  //   [14, 4],
  //   [16, 4],
  //   [18, 4],
  //   [20, 4],
  //   [22, 4],
  //   [24, 4],
  //   [26, 4],
  //   [28, 4],
  //   [30, 4],
  // ]);
  const [speed, setSpeed] = useState(70);
  const [direction, setDirection] = useState("down");
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    e = e || window.event;
    switch (e.which) {
      case 38:
      case 87:
        setDirection("up");
        break;
      case 40:
      case 83:
        setDirection("down");
        break;
      case 37:
      case 65:
        setDirection("left");
        break;
      case 39:
      case 68:
        setDirection("right");
        break;
      default:
        break;
    }
    // if (e.which === 16) {
    //   setSpeed(speed - 10);
    // } else {
    //   setSpeed(speed);
    // }
  };

  const SnakePlaceMoment = useCallback((snakeDots) => {
    let dots = [...snakeDots];
    let head = snakeDots[snakeDots.length - 1];
    switch (direction) {
      case "right":
        head = [head[0] + 2, head[1]];
        break;
      case "left":
        head = [head[0] - 2, head[1]];
        break;
      case "up":
        head = [head[0], head[1] - 2];
        break;
      case "down":
        head = [head[0], head[1] + 2];
        break;
      default:
        break;
    }
    dots.push(head);
    if (foodDot[0] === head[0] && foodDot[1] === head[1]) {
      setFoodDot(randomFoodGenerate);
      setSpeed(speed - 5);
    } else {
      dots.shift();
    }
    setSnakeDots(dots);

    if (head[0] < 0 || head[0] > 98 || head[1] < 0 || head[1] > 98) {
      alert("out");
      setSnakeDots([
        [2, 2],
        [4, 2],
        [6, 2],
      ]);
      setDirection("right");
      setSpeed(70);
    }
    snakeDots.map((i) => {
      if (i[0] === head[0] && i[1] === head[1]) {
        alert(`out 
                snake Length:${snakeDots.length}`);
        setSnakeDots([
          [2, 2],
          [4, 2],
          [6, 2],
        ]);
        setDirection("right");
        setSpeed(100);
      }
    });
  });

  useEffect(() => {
    setTimeout(() => {
      SnakePlaceMoment(snakeDots);
    }, speed);
    document.onkeydown = (e) => {
      onKeyPress(e);
    };
    document.addEventListener("keydown", (event) => {
      event.keyCode === 16 && setSpeed(speed - 30);
      event.keyCode === 32 && setSpeed(speed - 45);
    });
    document.addEventListener("keyup", (event) => {
      (event.keyCode === 16 || event.keyCode === 32) && setSpeed(70);
    });
  }, [snakeDots]);

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <p>Up:W & Up Arrow</p>
      <p>Left:A & left Arrow</p>
      <p>Down:S & Down Arrow</p>
      <p>Right:D & Right Arrow</p>
      <p>For Accelerator:Left Shift</p>
      <p>For Boost:Space</p>
      <div className="game-area">
        <Board snakeDots={snakeDots} setSnakeDots={setSnakeDots} />
        <Food foodDot={foodDot} />
      </div>
    </>
  );
};

export default Border;
