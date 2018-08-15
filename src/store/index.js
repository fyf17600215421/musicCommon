import React from "react";
import { createStore, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import reducer from "./reducer";

export default createStore(reducer, applyMiddleware(reduxLogger));