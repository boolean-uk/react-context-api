import { useState, useEffect } from 'react'
import defaultTweets from '../assets/data/tweets.js'
import user from '../assets/data/user.js'
import { TweetsUserContext } from './TweetsUserContext.jsx'

// This is the Provider component that wraps children and provides state
// It holds the actual state (tweets, theme) and any functions to update them
// The provider "fills" the context object (TweetsUserThemeContext) with these values
// so that any child component inside this provider can access them via useContext.
export function TweetsUserProvider({ children }) {
  const [tweets, setTweets] = useState(defaultTweets)  

  // The Provider component wraps children and passes down the state and setters
  // All children of this provider can access these attributes
  return (
    <TweetsUserContext.Provider value={{ tweets, setTweets, user }}>
      {children}
    </TweetsUserContext.Provider>
  )
}
