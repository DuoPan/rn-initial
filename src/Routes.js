import React from "react";
import { URI } from "./uri";
import { Route, Switch, NativeRouter } from "react-router-native";
import SplashPage from "View/SplashPage/native";
import SecondPage from "View/SecondPage/native";

function Routes() {
  return (
    <NativeRouter>
      <Switch>
        <Route path={URI.SPLASH} exact component={SplashPage} />
        <Route path={URI.SECOND} exact component={SecondPage} />
      </Switch>
    </NativeRouter>
  );
}

export default Routes;
