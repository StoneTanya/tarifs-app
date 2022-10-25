import './Style.scss';
import CardsBlock from './components/cardsComponent';
import ButtonBlock from './components/button';

function App() {
  return (
    <div className="App">
      <div className='container mt-5 mb-5'>
        <div className='row flex-wrap text-center'>

            <CardsBlock />

      </div>
    </div>

<ButtonBlock/>

    </div>
  );
}

export default App;
