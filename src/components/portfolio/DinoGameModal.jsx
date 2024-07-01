// import React, { useState, useEffect, useRef } from 'react';
// import './DinoGameModal.css';

// const DinoGameModal = ({ onClose }) => {
//   const [gameStarted, setGameStarted] = useState(false);
//   const [gameOver, setGameOver] = useState(false);
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(0);

//   const dinoRef = useRef(null);
//   const obstacleRef = useRef(null);
//   const gameRef = useRef(null);

//   useEffect(() => {
//     const storedHighScore = localStorage.getItem('dinoHighScore');
//     if (storedHighScore) setHighScore(parseInt(storedHighScore));
//   }, []);

//   const jumpDino = () => {
//     if (dinoRef.current && !dinoRef.current.classList.contains('jump')) {
//       dinoRef.current.classList.add('jump');
//       setTimeout(() => {
//         dinoRef.current && dinoRef.current.classList.remove('jump');
//       }, 500);
//     }
//   };

//   const startGame = () => {
//     setGameStarted(true);
//     setGameOver(false);
//     setScore(0);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.code === 'Space') {
//         event.preventDefault();
//         if (!gameStarted) {
//           startGame();
//         } else {
//           jumpDino();
//         }
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [gameStarted]);

//   useEffect(() => {
//     let isAlive;
//     let scoreInterval;

//     if (gameStarted && !gameOver) {
//       isAlive = setInterval(() => {
//         const dino = dinoRef.current;
//         const obstacle = obstacleRef.current;
//         if (!dino || !obstacle) return;

//         const dinoRect = dino.getBoundingClientRect();
//         const obstacleRect = obstacle.getBoundingClientRect();

//         if (
//           obstacleRect.left < dinoRect.right &&
//           obstacleRect.right > dinoRect.left &&
//           obstacleRect.top < dinoRect.bottom &&
//           obstacleRect.bottom > dinoRect.top
//         ) {
//           setGameOver(true);
//           if (score > highScore) {
//             setHighScore(score);
//             localStorage.setItem('dinoHighScore', score.toString());
//           }
//         }
//       }, 10);

//       scoreInterval = setInterval(() => {
//         setScore((prevScore) => prevScore + 1);
//       }, 100);
//     }

//     return () => {
//       clearInterval(isAlive);
//       clearInterval(scoreInterval);
//     };
//   }, [gameStarted, gameOver, score, highScore]);

//   const handleClick = () => {
//     if (!gameStarted) {
//       startGame();
//     } else {
//       jumpDino();
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>×</button>
//         <h2>Dino Runner Game</h2>
//         <div className="game-area" onClick={handleClick}>
//           {!gameStarted ? (
//             <div className="start-screen">
//               <p>Press Space or Click/Tap to start/jump</p>
//               <button onClick={startGame}>Start Game</button>
//             </div>
//           ) : (
//             <div className="game-container" ref={gameRef}>
//               <div className="score">Score: {score}</div>
//               <div className="high-score">High Score: {highScore}</div>
//               <div className="dino" ref={dinoRef}></div>
//               <div className="obstacle" ref={obstacleRef}></div>
//               {gameOver && (
//                 <div className="game-over">
//                   <h3>Game Over</h3>
//                   <p>Your score: {score}</p>
//                   <button onClick={startGame}>Restart</button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="game-instructions">
//           <h3>How to Play</h3>
//           <p>Press the spacebar or click/tap to make the dino jump over obstacles. The game ends if you hit an obstacle. Try to get the highest score!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DinoGameModal;


import React, { useState, useEffect, useRef } from 'react';
import './DinoGameModal.css';

const DinoGameModal = ({ onClose }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    const storedHighScore = localStorage.getItem('dinoHighScore');
    if (storedHighScore) setHighScore(parseInt(storedHighScore));
  }, []);

  const jumpDino = () => {
    if (dinoRef.current && !dinoRef.current.classList.contains('jump')) {
      dinoRef.current.classList.add('jump');
      setTimeout(() => {
        dinoRef.current && dinoRef.current.classList.remove('jump');
      }, 500);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        if (!gameStarted) {
          startGame();
        } else {
          jumpDino();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameStarted]);

  useEffect(() => {
    let isAlive;
    let scoreInterval;

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
            localStorage.setItem('dinoHighScore', score.toString());
          }
        }
      }, 10);

      scoreInterval = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
      }, 100);
    }

    return () => {
      clearInterval(isAlive);
      clearInterval(scoreInterval);
    };
  }, [gameStarted, gameOver, score, highScore]);

  const handleClick = () => {
    if (!gameStarted) {
      startGame();
    } else {
      jumpDino();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Dino Runner Game</h2>
        <div className="game-area" onClick={handleClick}>
          {!gameStarted ? (
            <div className="start-screen">
              <p>Press Space or Click/Tap to start/jump</p>
              <button onClick={startGame}>Start Game</button>
            </div>
          ) : (
            <div className="game-container" ref={gameRef}>
              <div className="score">Score: {score}</div>
              <div className="high-score">High Score: {highScore}</div>
              <div className="dino" ref={dinoRef}>
                <div className="eye"></div>
                <div className="leg back"></div>
                <div className="leg front"></div>
              </div>
              <div className="obstacle" ref={obstacleRef}></div>
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
          <p>Press the spacebar or click/tap to make the dino jump over obstacles. The game ends if you hit an obstacle. Try to get the highest score!</p>
        </div>
      </div>
    </div>
  );
};

export default DinoGameModal;