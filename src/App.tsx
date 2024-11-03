import Card from './components/Card';
import Button from './components/Button';
import Loader from './components/Loader';
import SelectableCard from './components/SelectableCard';

function App() {
  return (
    <div className="App">
      <p style={{marginTop: 20}}>Card</p>
      <Card>
        <h1>Card</h1>
      </Card>

      <p style={{marginTop: 20}}>Button</p>
      <Button title="Click me" onClick={() => console.log('Button clicked')} />
        
      <p style={{marginTop: 20}}>Loader</p>
      <Loader />

      <p style={{marginTop: 20}}>SelectableCard</p>
      <SelectableCard flexCenter>
        <h1>Selectable Card</h1>
      </SelectableCard>
    </div>
  );
}

export default App;
