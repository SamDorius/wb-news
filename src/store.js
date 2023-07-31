import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/hackerNewsReducer.js";
import { mediumReducer } from "./reducers/mediumReducer.js";

const store = configureStore
(
    {
        reducer:
        {
            hackerNews: reducer,
            medium: mediumReducer
        }
    }
)

export default store