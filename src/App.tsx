import Card from './components/Card';
import Button from './components/Button';
import Loader from './components/Loader';

function App() {
  return (
    <div className="App">
      <p style={{marginTop: 20}}>Card</p>
      <Card>
        <h1>Mastering React</h1>
      </Card>
      <p style={{marginTop: 20}}>Button</p>
      <Button title="Click me" onClick={() => console.log('Button clicked')} />
      <p style={{marginTop: 20}}>Loader</p>
      <Loader />
    </div>
  );
}

export default App;
