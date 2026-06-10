import Header from "../components/layout/Header";
import ScoreBoard from "../components/game/ScoreBoard";

function GameScreen() {
  return (
    <div className="game-screen">
      <Header />

      <main className="game-container">
        <ScoreBoard />

        <div className="coming-soon">
          🍮 Factory Conveyor Coming Soon...
        </div>
      </main>
    </div>
  );
}

export default GameScreen;