import './Style.scss';
import CardsBlock from './components/cardsComponent';

function App() {
  return (
    <div className="App">

      <div className='container mt-5 mb-5'>
        <div className='row flex-wrap'>
      <CardsBlock/>
      </div>
      </div>
    </div>
  );
}

export default App;
