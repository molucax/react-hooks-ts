import { createContext }from "react";

const initialState = {
  first: "Harry",
  last: "Potter"
}

export type UserState = typeof initialState;

const context = createContext<UserState>(initialState);

export default context;