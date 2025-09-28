import { Button } from './components/Button';

function App() {
  return (
    <div className="app">
      <Button onClick={() => alert('Hello World!')} variant="primary" label="Click here" />
    </div>
  );
}

export default App;
