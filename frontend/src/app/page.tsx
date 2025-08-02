"use client";

// app/page.js (또는 app/page.tsx)
import React, { useState } from "react";

// Main App component
const App = () => {
	// Sample flashcard data
	const [flashcards, setFlashcards] = useState([
		{ id: 1, question: "대한민국의 수도는 어디인가요?", answer: "서울" },
		{ id: 2, question: "지구상에서 가장 높은 산은 무엇인가요?", answer: "에베레스트 산" },
		{ id: 3, question: "태양계에서 가장 큰 행성은 무엇인가요?", answer: "목성" },
		{ id: 4, question: "프랑스의 수도는 어디인가요?", answer: "파리" },
		{ id: 5, question: "물의 화학 기호는 무엇인가요?", answer: "H2O" },
	]);

	// State to keep track of the current card index
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	// State to toggle visibility of the answer
	const [showAnswer, setShowAnswer] = useState(false);

	// Get the current flashcard based on the index
	const currentCard = flashcards[currentCardIndex];

	// Function to show/hide the answer
	const toggleAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	// Function to move to the next card
	const nextCard = () => {
		setShowAnswer(false); // Hide answer when moving to next card
		setCurrentCardIndex(prevIndex => (prevIndex + 1) % flashcards.length);
	};

	// Function to move to the previous card
	const prevCard = () => {
		setShowAnswer(false); // Hide answer when moving to previous card
		setCurrentCardIndex(prevIndex => (prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1));
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4 sm:p-6 lg:p-8">
			<div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md mx-auto transform transition-all duration-300 hover:scale-105">
				<h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 mb-6 sm:mb-8">
					<span role="img" aria-label="Anki icon" className="mr-2">
						🧠
					</span>
					나의 Anki 앱
				</h1>

				{flashcards.length > 0 ? (
					<>
						{/* Flashcard display area */}
						<div
							className="bg-blue-500 text-white rounded-lg p-6 sm:p-8 text-center min-h-[150px] flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-100 shadow-md"
							onClick={toggleAnswer}
						>
							<p className="text-xl sm:text-2xl font-semibold select-none">
								{showAnswer ? currentCard.answer : currentCard.question}
							</p>
						</div>

						{/* Card navigation and info */}
						<div className="flex justify-between items-center mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base">
							<span>
								{currentCardIndex + 1} / {flashcards.length}
							</span>
							<button
								onClick={toggleAnswer}
								className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
							>
								{showAnswer ? "질문 보기" : "답 보기"}
							</button>
						</div>

						{/* Navigation buttons */}
						<div className="flex justify-between mt-6 sm:mt-8 space-x-4">
							<button
								onClick={prevCard}
								className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
							>
								이전 카드
							</button>
							<button
								onClick={nextCard}
								className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
							>
								다음 카드
							</button>
						</div>
					</>
				) : (
					<p className="text-center text-gray-600 text-lg">표시할 플래시카드가 없습니다. 새 카드를 추가하세요!</p>
				)}
			</div>
		</div>
	);
};

export default App;
