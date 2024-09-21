import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./DinoGameModal.css";

const DinoGameModal = ({ onClose }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentCactus, setCurrentCactus] = useState(0);
  const [obstacleKey, setObstacleKey] = useState(0);


  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);
  const gameRef = useRef(null);

  const cloudSVGs = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
      <rect x="10" y="10" width="80" height="20" fill="#ffffff" />
      <rect x="0" y="20" width="100" height="10" fill="#ffffff" />
      <rect x="20" y="5" width="40" height="5" fill="#ffffff" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 20">
      <rect x="5" y="5" width="70" height="15" fill="#ffffff" />
      <rect x="0" y="10" width="80" height="10" fill="#ffffff" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 25">
      <rect x="10" y="5" width="40" height="20" fill="#ffffff" />
      <rect x="0" y="15" width="60" height="10" fill="#ffffff" />
      <rect x="15" y="0" width="30" height="5" fill="#ffffff" />
    </svg>,
  ];

  const cactusSVGs = [
    <g transform="translate(0,0)">
      <rect x="10" y="50" width="20" height="50" fill="#2ecc71" />
      <rect x="5" y="30" width="10" height="30" fill="#2ecc71" />
      <rect x="25" y="20" width="10" height="40" fill="#2ecc71" />
    </g>,
    <g transform="translate(60,0)">
      <rect x="5" y="60" width="30" height="40" fill="#27ae60" />
      <rect x="0" y="65" width="40" height="30" fill="#27ae60" />
      <rect x="15" y="55" width="10" height="5" fill="#e74c3c" />
    </g>,
    <g transform="translate(120,0)">
      <rect x="5" y="70" width="20" height="30" fill="#16a085" />
      <rect x="25" y="60" width="15" height="20" fill="#16a085" />
      <rect x="15" y="50" width="20" height="15" fill="#16a085" />
      <rect x="0" y="55" width="15" height="20" fill="#16a085" />
    </g>,
    <g transform="translate(180,0)">
      <rect x="10" y="20" width="10" height="80" fill="#1abc9c" />
      <rect x="20" y="40" width="10" height="60" fill="#1abc9c" />
      <rect x="0" y="50" width="10" height="50" fill="#1abc9c" />
    </g>,
    <g transform="translate(240,0)">
      <rect x="15" y="70" width="10" height="30" fill="#2ecc71" />
      <rect x="5" y="60" width="20" height="10" fill="#2ecc71" />
      <rect x="25" y="50" width="15" height="20" fill="#2ecc71" />
      <rect x="0" y="40" width="15" height="20" fill="#2ecc71" />
      <rect x="15" y="30" width="10" height="10" fill="#2ecc71" />
      <rect x="12" y="27" width="5" height="5" fill="#e74c3c" />
      <rect x="23" y="47" width="5" height="5" fill="#e74c3c" />
    </g>,
  ];

  useEffect(() => {
    const storedHighScore = localStorage.getItem("dinoHighScore");
    if (storedHighScore) setHighScore(parseInt(storedHighScore));
  }, []);

  const jumpDino = () => {
    if (dinoRef.current && !dinoRef.current.classList.contains("jump")) {
      dinoRef.current.classList.add("jump");
      setTimeout(() => {
        dinoRef.current && dinoRef.current.classList.remove("jump");
      }, 500);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    // setCurrentCactus(Math.floor(Math.random() * cactusSVGs.length));
    setObstacleKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        if (!gameStarted) {
          startGame();
        } else {
          jumpDino();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted]);

  useEffect(() => {
    let isAlive;
    let scoreInterval;
    let cactusInterval;

    if (gameStarted && !gameOver) {
      isAlive = setInterval(() => {
        const dino = dinoRef.current;
        const obstacle = obstacleRef.current;
        if (!dino || !obstacle) return;

        const dinoRect = dino.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        if (
          obstacleRect.left < dinoRect.right &&
          obstacleRect.right > dinoRect.left &&
          obstacleRect.top < dinoRect.bottom &&
          obstacleRect.bottom > dinoRect.top
        ) {
          setGameOver(true);
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem("dinoHighScore", score.toString());
          }
        }
      }, 10);

      scoreInterval = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
      }, 100);

      cactusInterval = setInterval(() => {
        setCurrentCactus(Math.floor(Math.random() * cactusSVGs.length));
      }, 4000);
    }

    return () => {
      clearInterval(isAlive);
      clearInterval(scoreInterval);
      clearInterval(cactusInterval);
    };
  }, [gameStarted, gameOver, score, highScore]);

  const handleClick = () => {
    if (!gameStarted) {
      startGame();
    } else if (!gameOver) {
      jumpDino();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Dino Runner Game</h2>
        <div
          className={`game-area ${gameStarted && !gameOver ? "game-active" : ""}`}
          onClick={handleClick}
        >
          {!gameStarted ? (
            <div className="start-screen">
              <p>Press Space or Click/Tap to start/jump</p>
              <button onClick={startGame}>Start Game</button>
            </div>
          ) : (
            <div className="game-container" ref={gameRef}>
              <div className="score">Score: {score}</div>
              <div className="high-score">High Score: {highScore}</div>
              <div className="ground"></div>
              <div className="cloud cloud-1">{cloudSVGs[0]}</div>
              <div className="cloud cloud-2">{cloudSVGs[1]}</div>
              <div className="cloud cloud-3">{cloudSVGs[2]}</div>
              <motion.div
                className="dino"
                ref={dinoRef}
                animate={gameOver ? { y: 0 } : {}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 60">
                  <rect x="15" y="30" width="40" height="20" fill="#8B008B" />
                  <rect x="45" y="25" width="20" height="15" fill="#8B008B" />
                  <rect x="55" y="27" width="5" height="5" fill="white" />
                  <rect x="57" y="29" width="2" height="2" fill="black" />
                  <rect x="45" y="10" width="5" height="20" fill="#8B008B" />
                  <rect x="35" y="5" width="5" height="25" fill="#8B008B" />
                  <rect x="25" y="10" width="5" height="20" fill="#8B008B" />
                  <rect x="20" y="50" width="10" height="10" fill="#8B008B" />
                  <rect x="40" y="50" width="10" height="10" fill="#8B008B" />
                  <rect x="10" y="35" width="5" height="10" fill="#8B008B" />
                  <rect x="5" y="40" width="5" height="5" fill="#8B008B" />
                  <rect x="0" y="45" width="5" height="5" fill="#8B008B" />
                </svg>
              </motion.div>
              <div className="obstacle" ref={obstacleRef} key={obstacleKey}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 90">
                  {cactusSVGs[currentCactus]}
                </svg>
              </div>
              {gameOver && (
                <div className="game-over">
                  <h3>Game Over</h3>
                  <p>Your score: {score}</p>
                  <button onClick={startGame}>Restart</button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="game-instructions">
          <h3>How to Play</h3>
          <p>
            Press the spacebar or click/tap to make the dino jump over
            obstacles. The game ends if you hit an obstacle. Try to get the
            highest score!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DinoGameModal;
