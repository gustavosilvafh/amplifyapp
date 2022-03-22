import React from "react";
import { withAuthenticator, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <>
      <Authenticator />; tests
    </>
  );
}

export default withAuthenticator(App);
