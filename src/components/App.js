import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// importing below custom hook (useState + localStorage):
import { GameContext } from "./GameContext";
import useInterval from "../hooks/use-interval.hook";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";

function App(props) {
  const { numCookies, setNumCookies, cookiesPerSecond } = React.useContext(
    GameContext
  );

  useInterval(() => {
    setNumCookies(numCookies + cookiesPerSecond);
  }, 1000);
  //const [numCookies, setNumCookies] = React.useState(1000);
  //moved below to context
  // const [numCookies, setNumCookies] = usePersistedState("numCookies", 1000)
  //   const [purchasedItems, setPurchasedItems] = React.useState({
  //     cursor: 0,
  //     grandma: 0,
  //     farm: 0
  //   });

  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
      </Router>
    </>
  );
}

export default App;
