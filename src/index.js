import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "./App"
import rootReducer from "./reducers/manageAuthorsAndBooks"

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById("root")
)
