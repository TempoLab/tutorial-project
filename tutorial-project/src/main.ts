import "./style.css";
import { Choice, renderHome, renderResults, getRandomNumber } from "./utils";

// - Render interface
// - Setup event listener for "Paper", "Scissors" and "Rock" buttons
// - Computer to choose it's argument
// - Compare results
// - Render winner
// - Setup event listender for "Play again"
// - Tear down and re-render on "Play again"

class GameRenderer {
  private playerChoice: Choice | undefined;
  private computerChoice: Choice | undefined;

  public constructor() {
    this.playerChoice;
    this.computerChoice;
    this.renderHome();
  }

  private setPlayerChoiceAndRenderResults(choice: Choice) {
    return () => {
      const computerChoices: Choice[] = ["rock", "paper", "scissors"];

      this.playerChoice = choice;
      this.computerChoice = computerChoices[getRandomNumber(3)];

      this.renderResults();
    };
  }

  private renderHome() {
    const element = document.querySelector<HTMLDivElement>("#app");
    if (element === null) {
      throw new Error("No valid element found on page");
    }
    // this.tearResultHomeEventListeners();
    element.innerHTML = renderHome();
    this.setupHomeEventListeners();
  }

  private renderResults() {
    const element = document.querySelector<HTMLDivElement>("#app");
    if (element === null) {
      throw new Error("No valid element found on page");
    }
    this.tearDownHomeEventListeners();
    element.innerHTML = renderResults("You");
    // this.setupResultHomeEventListeners();
  }

  private getBtnElemetns() {
    const rockBtnElement =
      document.querySelector<HTMLButtonElement>("#rockBtn");
    const scissorsBtnElement =
      document.querySelector<HTMLButtonElement>("#scissorsBtn");
    const paperBtnElement =
      document.querySelector<HTMLButtonElement>("#paperBtn");

    if (rockBtnElement === null) {
      throw new Error("Rock button element not found");
    }

    if (scissorsBtnElement === null) {
      throw new Error("Scissors button element not found");
    }

    if (paperBtnElement === null) {
      throw new Error("Paper button element not found");
    }

    return [rockBtnElement, scissorsBtnElement, paperBtnElement];
  }

  private setupHomeEventListeners() {
    const [rockBtnElement, scissorsBtnElement, paperBtnElement] =
      this.getBtnElemetns();
    rockBtnElement.addEventListener(
      "click",
      this.setPlayerChoiceAndRenderResults("rock")
    );
    scissorsBtnElement.addEventListener(
      "click",
      this.setPlayerChoiceAndRenderResults("scissors")
    );
    paperBtnElement.addEventListener(
      "click",
      this.setPlayerChoiceAndRenderResults("paper")
    );
  }

  private tearDownHomeEventListeners() {
    const [rockBtnElement, scissorsBtnElement, paperBtnElement] =
      this.getBtnElemetns();
    rockBtnElement.removeEventListener(
      "click",
      this.setPlayerChoiceAndRenderResults("rock")
    );
    scissorsBtnElement.removeEventListener(
      "click",
      this.setPlayerChoiceAndRenderResults("scissors")
    );
    paperBtnElement.removeEventListener(
      "click",
      this.setPlayerChoiceAndRenderResults("paper")
    );
  }
}

new GameRenderer();
