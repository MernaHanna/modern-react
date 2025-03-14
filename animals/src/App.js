// name the callback function using the pattern of: handle + eventName
// we pass the reference of the function as a prop to the element. we don't call the function itself
const handleClick = () => {
  console.log('Button was clicked!');
};

function App() {
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
