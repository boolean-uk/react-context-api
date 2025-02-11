import { createContext } from "react";
import React from "react";
import user from "./assets/data/user";
import tweets from "./assets/data/tweets";

export const ThemeContext = createContext('light');
export const UserContext = createContext(user);
export const TweetsContext = createContext(tweets);