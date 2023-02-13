import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Components/Home/Home";
import Deck from "../Components/Deck/Deck";
import EditDeck from "../Components/Edit Deck/EditDeck";
import CreateDeck from "../Components/NewDeck/CreateDeck";
import AddCard from "../Components/Cards/AddCard";
import EditCard from "../Components/Cards/EditCard";
import Study from "../Components/Study/Study";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container card">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study />
          </Route>

          <Route path="/decks/:deckId">
            <Deck />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;