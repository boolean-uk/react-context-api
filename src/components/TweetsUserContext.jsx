// TweetsUserThemeContext.js
import { createContext } from 'react';

// Create a context object that will be used to share state (tweets, theme, user) 
// across multiple components without passing props manually.
// This context object is stable and exported so that any child component can 
// access the values via useContext(TweetsUserThemeContext).
export const TweetsUserContext = createContext();
