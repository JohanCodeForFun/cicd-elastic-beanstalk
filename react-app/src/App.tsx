import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [sqlInput, setSqlInput] = useState('');
  const [jsonInput, setJsonInput] = useState('');

  // Simulated SQL query function
  const runQuery = (input: string) => {
    const query = `SELECT * FROM users WHERE name = '${input}'`;
    console.log('Running query:', query);
  };

  // Simulated deserialization function
  const deserialize = (input: string) => {
    try {
      const obj = JSON.parse(input);
      console.log('Deserialized object:', obj);
    } catch (error) {
      console.error('Failed to deserialize input:', error);
    }
  };

  return (
    <>
      <div>
        <h1>CI && CD Deployment!</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          <h2>Unsafe User Input</h2>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter some text"
          />
          <p>Output:</p>
          <div dangerouslySetInnerHTML={{ __html: userInput }} />
        </div>
        <div>
          <h2>Simulated SQL Injection</h2>
          <input
            type="text"
            value={sqlInput}
            onChange={(e) => setSqlInput(e.target.value)}
            placeholder="Enter SQL input"
          />
          <button onClick={() => runQuery(sqlInput)}>Run Query</button>
        </div>
        <div>
          <h2>Simulated Insecure Deserialization</h2>
          <input
            type="text"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Enter JSON string"
          />
          <button onClick={() => deserialize(jsonInput)}>Deserialize</button>
        </div>
      </div>
    </>
  );
}

export default App;