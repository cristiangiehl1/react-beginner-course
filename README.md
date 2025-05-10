# Libraries -vs- Frameworks

## Libraries

- Collection of reusable code.
- Reduces need to write repetitive/complex things from scratch.
- You control how/when it's used. No/few boundaries.

## Frameworks

- Predetermined architecture - you follow a specified pattern of development.
- You work within the boundaries set by the framework.
- "Right" and "wrong" ways to use it.

# React 

- The library for web and native user interfaces

## Why choose React?

- Highest job demand.
- Largest ecosystem/community.
- Less "magic" that happening behind the scenes.
- Composable/Declarative.
  - Composable: you can create small, reusable components that can be combined together.
  - Declarative: you describe the final result of the UI, and React handles the details behind the scenes.
- Active development.

## When you might NOT want a framework

- Small projects.
- Network load concerns.
- Learning curve.
- Maintenance concerns.
- Incompatibility with existing codebase.

## JSX

JSX is what we call syntactic sugar on top of the `React.createElement()` call. Under the hood, React transforms JSX into `React.createElement()` calls when rendering components.

```jsx
const element = <h1>Hello, world!</h1>;
```

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

## Why React is composable?

Can create easily reusable and interchangeable "pieces of the web" that can be combined in various ways to create complex systems.

```jsx
export const MainContent = () => {
    return (
        <h1>React is great!</h1>
    )
}
```

## Why React is Declarative?

Can lean on the library to handle the manual, tedious taks that we otherwise would have to worry about ourselves.

**Declarative** means we can write our code to simply "describe" **what** should show up on the page and allow the rool (React, e.g) to handle the details on **how** to put those things on the page.
**Imperative** means we need to give specific step-by-step instructions on how to accomplish a task.


### Declarative

"What should be done?"
- Just tell me what needs to happen. and I'll worry about how to do it."

```jsx
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"));

root.render(
    <h1 className="header">Hello, React!</h1>
)
```

### Imperative

"How should it be done?"
- Describe to me every step on how do something, and I'll do it."

```js
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"));
const h1 = document.createElement("h1")

h1.textContext = "This is imperative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)
```

## "Housekeeping"

Challange: set up a new React app from scratch!

```jsx
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"));

root.render(<h1>This is React!</h1>)
```

## Quiz
1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
Inside the root element, as children elements. 
All the elements I render get put inside the div with the id of "root" (or whatever other element I might select when calling createRoot)

2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
You will see an object. Unlike creating an HTML element in vanilla DOM JS, what gets created from the JSX we have in our React code is a plain JS object that React will use to fill in the view.
{
    type: "h1";
    props" {};
    "Hello world!"
}


3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
You can't return multiple adjacente JSX element without wrapping them in a single parent element. In this case, you could use a <div></div>.

4. What does it mean for something to be "declarative" instead of "imperative"?
Imagine that you are asking a waiter to bring you a glass of water. You don't need to tell him what kind of glass to use, where the water is stored, or how to take the order, he already knows how to do all of that whitout you have to explain every step. You simply say what you want, and he figures out how to make it happen. 

5. What does it mean for something to be "composable"?
It's mean that you are creating small pieces of "something" to make them reusable and interchangeable so it can be combined in various ways to create complex systems.


6. What is a React component?
A function that returns React elements. (UI).


7. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
You should use PascalCase to define react components.
MyComponent()

8. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
We don't call react components as a regular function `Header()` when we want to render it, instead we surround it in angle brackets similar to HTML syntax `<Header />`.


## Section 02

### Quiz

1. What do props help us accomplish?
Make a component more reusable to keep our code as dry as possible.


2. How do you pass a prop into a component?
The same way you pass attributes to html elements.
<img src="/path" />
<MyAwesomeHeader title="amazing title">



3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
No, because JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the html specification.
(Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}
The parameters to that component will receive a value called `props`, which we could name anything we want, but by convention will be props.


5. What data type is `props` when the component receives it?
An object within the defined parameters.


6. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback function provided is placed at the same index in the new array. Usually we take the items from the original array and modify them in some way.


7. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements that can be displayed on the page.


8. Critical thinking: why is using `.map()` better than just
   creating the components manually by typing them out?
- We often don't have the data ahead of time when we're building the app, so we simply can't manually type them out.
- It makes our code more "self-sustaining" - not requiring additional changes to the code whenever the data changes.


## Section 03

### React Props

Props refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above". A component receiving props is not allowed to modify those props. (l.e. they are "immutable.")

### React State

State refers to values that are managed by the component, similar to variabls declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be  using state.

#### View as a function of state

1. Render

Reacts runs your function and displays whatever gets retuned. The function will only be run again if (1) it receives new props from above, or (2) its internal state values changes.

2. setState

Changing a local, non-state variable doesn't cause React to re-render the component. Changing state with a built-in `setState` function does.

3. view = function(state)

Thus, when state changes and React re-runs (re-renders) your component, something new gets returned and replaces what used to be on the page.


#### setValue((prev) => prev + 1)

If you ever need the old value of state to help you determine the new value of state, you should pass a callback function to your state setter function instead of using state direcly. This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.


### Quiz

1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
    - Pass the new version of state that we want to use as the replacement for the old version of state.
    - Pass a callback function. Must return what we want the new value of state to be. Will receive the old version of state as a parameter so we can use it to help determine what we want the new value of state to be.

2. When would you want to pass the first option (from answer
   above) to the state setter function?
    Whenever we don't really care about (or need) the old value,
    we simply want to set a new value.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
    Whenever we do care about the previous value in state and need
    it to help us determine what the new value should be.


4. What is "conditional rendering"?
    When we want to only sometimes display something on the page
    based on some kind of condition.


5. When would you use &&?
    When you want to either display something or NOT display something.



6. When would you use a ternary?
    When you need to decide which of 2 things to display



7. What if you need to decide between > 2 options on
   what to display?
    if...else if...else conditional or maybe a `switch` statement.


## Section 04

### Why React can be compared to functional programming (FP)?

Because it shares several core principles of FP:

1) Components as Pure Functions

Pure functions are those that, given the same input, always produce the same output and have no side effects. In React, many components can be considered pure functions because:
- They rely solely on **props** to produce rendered output.

2) Immutability

Data is not directky modified, but instead transformed. React also adheres to this principle.
- **State** and **props** are treaded as immutable. Instead of modifying state or props directly, new values or new states are created to reflect changes.

3) Avoiding using side effects

A side effect in programming refers to any change in state or behavior that is observable outside of a function or component. For example:

- Modifying localStorage.
- Writing to files or databases.
- Changing external state (like DOM manipulation directly).
- Making API calls or sending data over the network.
- Changing something that affects other parts of the application outside the function or component.

### What are React's primary tasks?

- Work with the DOM (Document Object Model)/browser to render UI to the page.
- Manage state for us between render cycles (i.e. state values are "remembered" from one render to the next).
- Keep the UI updated whenever state or props changes occur.

### What can't React handle on its own?

- (Out)side effects!
  - localStorage.
  - API/database interactions.
  - Subscriptions (e.g. websocket connections).
  - Basically anything that React isn't in charge of.

### Quiz

1. In what way are React components meant to be "pure functions"
   - Given the same props or state, the component will always return the same content, or UI
   - Rendering or re-rendering a componenet will never have any kind of side effect on an outside system.


1. What is a "side effect" in React? What are some examples?
   - Any code that affects or interacts with an outside system.
   - local storage, API, websockets, DOM manipulation.

2. What is NOT a "side effect" in React? Examples?
    - Anything that React is in charge of.
    - Maintaining state, keeping the UI in sync with data, rendering DOM elements.

4. When does React run your useEffect function? When does it NOT run
   the effect function?
    - As soon as the component renders for the first time.
    - On every re-render of the componenet (assuming no dependencies array)
    - Will NOT run the effect when the values of the dependencies in the array stay the same between renders.

5. How would you explain what the "dependecies array" is?
    - Second parameter to the useEffect function.
    - A way for React to know wheter or not it should re-run the effect function.


### useEffect example with cleanning up

```jsx

import React from "react"

export default function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWindowWidth () {
            console.log("Resized")
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", watchWindowWidth)
        return function() {
            window.removeEventListener("resize", watchWindowWidth)
        }
    }, [])
    
    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
```

### useRef()

Refs are similar to state, except:
- You can mutate them directly.
- Changing them doesn't cause a re-render.

They're commonly used for accessing DOM nodes without needing to assign ids to elements.