import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ListingsBrowser from "./components/ListingsBrowser";
import ListingDetails from "./components/ListingDetails";
import ListingForm from "./components/ListingForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path={'/'}>
            <ListingsBrowser />
          </Route>
          <Route path={'/listings/:id'}>
            <ListingDetails />
          </Route>
          <Route path={'/listings'}>
            <ListingForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;