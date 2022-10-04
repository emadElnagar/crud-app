import './App.css';
import Form from './components/form';
import Header from './components/header';
import List from './components/list';
import { Container } from './styles/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Header />
          <Form />
          <List />
        </Container>
      </header>
    </div>
  );
}

export default App;
