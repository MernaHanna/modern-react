// 1) Import the React and ReactDOM libraries
import React from 'react'; // library that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client'; // library that knows how to get a component to show up in the browser

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
// function App() {
//   // numbers and strings will be shown
//   // boolean values, null or undefined will show nothing
//   // array will be converted to string
//   // object will cause an error message in the console
//   // however they may be passed as props to elements
//   // const message = true;

//   // let message = 'Bye there!';
//   // if (Math.random()>0.5) {
//   //   message = 'Hello there!';
//   // }

//   // return <h1>{message}</h1>;

//   // we might use curly braces to write an expression directly inside jsx
//   // return <h1>{new Date().toLocaleTimeString()}</h1>

//   //we may print two variables inside jsx using curly braces
//   let name = 'John';
//   let age = 30;

//   return <h1>Hi, my name is {name} and my age is {age}</h1>;
// }

function App() {
  // return <input type="number" />;

  //props can refer to values using curly braces
  // const inputType = 'number';
  // const minValue = 5;

  // return <input type={inputType} min={minValue} />;

  // if we want to add a prop value that is a string we have to wrap it in quotes, and if we want to add a prop value that is a number we have to wrap it in curly braces
  // string => type = "number"
  // number => min = {5}
  // number => max = {10}
  // array => list = {[1,2,3]}
  // object => style = {{color:'red'}}
  // valiable => alt = {message}
  // boolean true => checked
  // boolean false => checked={false}

  // return <input style={{ border: '3px solid red' }} type="number" min={5} />;

  // rules for converting HTML to JSX
  // 1) All prop names follow camelCase (placeholder is one word)
  // 2) Number attributes use curly braces
  // 3) Boolean 'true' can be written with just the property name.
  // Boolean 'false' should be written with curly braces and the value 'false'
  // 4) The 'class' attribute is written as 'className'
  // 5) In-line styles are provided as objects
  // Also in style there is no - for example text-decoration will be textDecoration

  // return <textarea autoFocus></textarea>;
  // or
  return (
    <textarea
      autoFocus={true}
      spellCheck
      style={{ border: '1px solid blue' }}
    ></textarea>
  );
}

// 5) Show the component on the screen
root.render(<App />);
