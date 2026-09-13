# Tech Stack

Tech Stack is a responsive React application where developers can explore different technologies and build their own development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React-Toastify
- JSON

## Features

- Explore different frontend, backend, database, styling    
and DevOps technologies.
- Add and remove technologies from your personal stack.
- Responsive design for mobile, tablet and desktop.

## React Questions

### i. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes creating React UI easier and more readable.

### ii. What is the difference between props and state?

Props are data passed from a parent to a child. State is data managed inside a component that can change and cause the UI to update.

### iii. What does the useState hook do, and where did you use it in this project?

useState stores data that can change in a component. I used it for the technology list, selected technologies, and loading state.

### iv. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs side effects in a component. I used it to fetch the technology data from the JSON file when the component loads.

### v. Why does every item in a map() list need a unique key prop?

React uses the key to identify each item in a list. It helps React update the list correctly when items change.

### vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it to show "Loading technologies..." while the JSON data is loading and the technology cards after it loads.

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send something back by calling a callback function received through props.