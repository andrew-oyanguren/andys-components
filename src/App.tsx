import Card from './components/Card';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Card>
        <h1>Mastering React</h1>
      </Card>
      
      <Button title="Click me" onClick={() => console.log('Button clicked')} />
    </div>
  );
}

export default App;
