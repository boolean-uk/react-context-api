# React Context API

## Learning Objectives
- Remove prop drilling by implementing the React Context API
- Improve the maintainability of an app by reducing the complexity of state management

## Setup

- Fork and clone the repository
- Run `npm ci` to install dependencies
- `npm run dev` to run the app

## Instructions
Inside this project you'll find a Twitter clone react app. The tweets are loaded from an array into some state in 
the `App.jsx` component, which are then passed down as props to multiple components. The logged in user is also 
passed down to a number of components.

### Part 1 - Your First Context
Your task is to completely remove the prop drilling of the `user` state, the `tweets` state, and the `setTweets`
function. You wil be replacing them with "application-level state" by using **Context**.
1. In the **App** component, import `createContext` and use it to create a new Context Component.
   1. This Context Component must be defined OUTSIDE of the App function.
   2. You can give this Context Component any name - make it descriptive/meaningful.
2. Wrap this Context Component around the child components of the App component. Update it to use the
   `<Context.Provider>` Component and pass the relevant data into the `value` attribute.
3. Remove the props from the child components (both where they are used in App, and in their respective component
   files).
4. In the child components, import the `useContext` hook and use this to get the state values/functions that were
   passed into the `<Context.Provider>` in the App component.
5. Use these values in the child components as necessary (they replace the values we originally got from the props).

> ⛔ Do not move onto Part 2 until your teacher has covered the material on Local Storage!

### Part 2 - Context and Local Storage
Your second task is to combine Context and Local Storage together.
1. In the **App** component, create a new **Context** which will provide an object containing the `theme` state and its 
   setter function (`setTheme`). 
    1. Like any other variable or component, be sure to give it an appropriate name to distinguish it from the other 
       Context.
2. For each of the components in the `/components` directory, remove the prop-drilling approach used for `theme` (and 
   `setTheme` if applicable) and instead use the value provided by your **Context**.
    1. There MUST be a variable called `theme` in each component!
    2. There MUST be a function called `setTheme` where it is used.
    3. You do NOT need to change any other code to make the Dark Mode work!
3. Once you have correctly applied the `theme` to all the components, you will see that the app design will 
   dynamically update to reflect the selected theme. However, whenever you refresh the page, the `theme` state gets 
   reset. Let's prevent this by storing the value of `theme` in our Local Storage!
   1. Look in the Header component.
   2. When you toggle the "Enable Dark Mode" checkbox, save the `theme` value to local storage.
   3. When we refresh the app, how could we use the local storage value to set the theme state's default value?
      1. The expected outcome here is that if you check the Enable Dark Mode checkbox, then refreshing the app will 
         keep it in dark mode.
4. We also want to allow users to clear their locally saved settings. 
   1. Look in the Header component.
   2. When you click the "Clear Locally Saved Settings" button, delete the `theme` value to local storage.
   3. At the same time, we want the app to reset back to its default theme of `"light"`. How might you do this 
      within the same button click handler?
