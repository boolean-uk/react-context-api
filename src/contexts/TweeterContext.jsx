import { createContext, useState } from "react";
import defaultTweets from "../assets/data/tweets.js";
import  user from "../assets/data/user.js";

export const TweeterContext = createContext();

export const TweeterProvider = ({ children }) => {
  const [tweets, setTweets] = useState(defaultTweets);

  return (
    <TweeterContext.Provider value={{ tweets, setTweets, user }}>
      {children}
    </TweeterContext.Provider>
  );
};
