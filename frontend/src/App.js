import './App.css';
import Header from './components/header';
import { Container } from './styles/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Header />
        </Container>
      </header>
    </div>
  );
}

export default App;
