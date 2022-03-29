import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup2 from './Components/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App">
      <h1>Now we start react bootstrap</h1>
      <Button variant='danger'>Read me</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="border" />
      <Spinner animation="grow" />
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
