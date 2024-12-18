
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
        {/* Do not remove the main div */}
      <p>Button clicked {count} times.</p>
      <button onClick={() =>setCount((preCount) => preCount+1)}>Click me</button>
    </div>
  )
}

export default App
