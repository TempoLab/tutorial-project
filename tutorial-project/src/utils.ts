export type Choice = "paper" | "scissors" | "rock";

type GetRandomNumberSignature = (max: number) => number;
const getRandomNumber: GetRandomNumberSignature = (max) => {
  return Math.floor(Math.random() * max);
};

export type RenderHomeSignature = () => string;
const renderHome: RenderHomeSignature = () => {
  return `
        <div>
            <button type="button" id="rockBtn">Rock</button>
            <button type="button" id="paperBtn">Paper</button>
            <button type="button" id="scissorsBtn">Scissors</button>
        </div>
    `;
};

export type RenderResultsSignature = (
    winner: string
) => string;
const renderResults: RenderResultsSignature = (
  winner,
) => {
  return `
        <div>
            <h1>${winner} won!</h1>
            <button type="button" id="playAgainBtn">Play again!</button>
        <div>
    `;
};

export { renderHome, renderResults, getRandomNumber };
