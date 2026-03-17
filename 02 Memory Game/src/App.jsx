import { GameHeader } from './components/GameHeader';
import { Card } from './components/Card'

const cardValues = [
        "🍎",
        "🍌",
        "🍇",
        "🍊",
        "🍓",
        "🥝",
        "🍑",
        "🍒",
        "🍎",
        "🍌",
        "🍇",
        "🍊",
        "🍓",
        "🥝",
        "🍑",
        "🍒",
    ]

  function App() {
    const [cards, setCards] = useState([]);

    const initializeGame = () => {
      // SHUFFLE THE CARDS

      console.log(cardValues);

      const finalCards = cardValues.map((value, index) => (
          {
            id: index,
            value,
            isFlipped: false,
            isMatched: false,
          }
      ));

      console.log(finalCards);
    };

    return (
      <div className="app">
        <GameHeader score={3} moves={10} />

        <div className="cards-grid">
          {cardValues.map((card) => (
              <Card card={card}/>
          ))}
        </div>
      </div>
    );
}

export default App
