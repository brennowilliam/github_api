import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from "../components/App"
import Bookmarks from "../components/Bookmarks"
import Header from "../components/Header"

const AppRouter = props => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/bookmarks" component={Bookmarks} exact />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default AppRouter