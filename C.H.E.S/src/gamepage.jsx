import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

function GamePage() {
  const { mode } = useParams();
  const cardCount = 3;
  const timerDuration = mode === "timed" ? 60 : mode === "practice" ? 600 : 60;

  const generateUniqueRandomNumbers = (count) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const num = Math.floor(Math.random() * 100) + 1;
      numbers.add(num);
    }
    return Array.from(numbers);
  };

  const [cards, setCards] = useState(() => {
    const uniqueNumbers = generateUniqueRandomNumbers(cardCount);
    return Array.from({ length: cardCount }, (_, index) => ({
      id: index,
      number: uniqueNumbers[index],
    }));
  });

  // State variables
  const [order, setOrder] = useState(() => cards.map((card) => card.id)); // Display order of cards
  const [selectedOrder, setSelectedOrder] = useState([]); // Initial selection order
  const [memorySelection, setMemorySelection] = useState([]); // Memory phase selections
  const [flippedCards, setFlippedCards] = useState([]); // Flipped card IDs
  const [isSelectionComplete, setIsSelectionComplete] = useState(false); // Selection phase toggle
  const [count, setCount] = useState(0); // Score count
  const [timeLeft, setTimeLeft] = useState(timerDuration); // Timer

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Shuffle cards after initial selection is complete
  useEffect(() => {
    if (isSelectionComplete && flippedCards.length === cards.length) {
      setTimeout(() => {
        shuffleOrder();
      }, 500);
    }
  }, [isSelectionComplete, flippedCards, cards.length]);

  // Check memory selection and reset game
  useEffect(() => {
    if (memorySelection.length === cardCount) {
      if (arraysEqual(memorySelection, selectedOrder)) {
        setCount((prev) => prev + 1);
      }
      resetGame();
    }
  }, [memorySelection]);

  const handlePlayAgain = () => {
    resetGame();
    setTimeLeft(timerDuration);
    setCount(0);
  };

  // Check if two arrays are equal
  const arraysEqual = (a, b) =>
    a.length === b.length && a.every((val, index) => val === b[index]);

  // Shuffle the display order of cards
  const shuffleOrder = () => {
    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newOrder[i], newOrder[j]] = [newOrder[j], newOrder[i]];
      }
      return newOrder;
    });
  };

  // Reset game for the next round
  const resetGame = () => {
    const uniqueNumbers = generateUniqueRandomNumbers(cardCount);
    setCards((prevCards) =>
      prevCards.map((card, index) => ({
        ...card,
        number: uniqueNumbers[index],
      }))
    );
    setSelectedOrder([]);
    setMemorySelection([]);
    setFlippedCards([]);
    setIsSelectionComplete(false);
    setOrder(cards.map((card) => card.id));
  };

  // Handle card clicks
  const handleCardClick = (card) => {
    if (timeLeft <= 0) return;

    if (!isSelectionComplete) {
      // Selection phase
      if (
        !selectedOrder.includes(card.number) &&
        selectedOrder.length < cards.length
      ) {
        const newSelectedOrder = [...selectedOrder, card.number];
        setSelectedOrder(newSelectedOrder);
        if (newSelectedOrder.length === cards.length) {
          setIsSelectionComplete(true);
          setFlippedCards(cards.map((c) => c.id)); // Flip all cards to back
        }
      }
    } else {
      // Memory phase
      if (
        flippedCards.includes(card.id) &&
        !memorySelection.includes(card.number)
      ) {
        setFlippedCards((prev) => prev.filter((id) => id !== card.id)); // Flip card to front
        setMemorySelection((prev) => [...prev, card.number]); // Record selection
      }
    }
  };

  // Map order to actual card objects
  const orderedCards = order.map((id) => cards.find((card) => card.id === id));

  if (timeLeft > 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50vw",
            marginBottom: 20,
          }}
        >
          <h3>Score: {count} success</h3>
          <h3>Time Left: {timeLeft}s</h3>
        </div>

        <h2 style={{ textAlign: "center", marginBottom: 10 }}>
          {!isSelectionComplete
            ? "Select your cards in the order that you want"
            : "Select the cards in the same order again"}
        </h2>

        <h3
          style={{ textAlign: "center", marginBottom: 20, minHeight: "1.5em" }}
        >
          Selected: {selectedOrder.join(" → ")}
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cardCount}, 1fr)`,
            gap: 20,
            width: "100%",
            maxWidth: "50vw",
            margin: "0 auto",
          }}
        >
          {orderedCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                aspectRatio: "1 / 1.25",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GameCard
                number={card.number}
                isFlipped={flippedCards.includes(card.id)}
                onClick={() => handleCardClick(card)}
                isSelected={
                  !isSelectionComplete && selectedOrder.includes(card.number)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <h1>Game Over!</h1>
        <h2>Your score: {count}</h2>
        <button
          onClick={handlePlayAgain}
          style={{
            marginTop: 20,
            padding: "10px 40px",
            fontSize: "1rem",
            cursor: "pointer",
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          }}
        >
          Play again!
        </button>
      </div>
    );
  }
}

GameCard.propTypes = {
  number: PropTypes.number.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

function GameCard({ number, isFlipped, onClick, isSelected }) {
  return (
    <motion.div style={{ perspective: 1000, width: "100%", height: "100%" }}>
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front Side */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div
            onClick={onClick}
            style={{
              cursor: "pointer",
              backgroundColor: isSelected ? "#e6f3ff" : "white",
              border: isSelected ? "2px solid #0066cc" : "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "3rem" }}>{number}</h1>
          </div>
        </motion.div>
        {/* Back Side */}
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            onClick={onClick}
            style={{
              cursor: "pointer",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "3rem" }}>?</h1>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default GamePage;
