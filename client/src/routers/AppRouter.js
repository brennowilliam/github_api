import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import App from "../components/App"
import Bookmarks from "../components/Bookmarks"
import Header from "../components/Header"

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    color: '#fff',
    marginTop: 0,
    fontFamily: 'Helvetica, Arial, sans-serif'
  },
}

const AppRouter = props => {
  return (
    <BrowserRouter>
      <div style={styles.container}>
        <Header />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/bookmarks" component={Bookmarks} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter