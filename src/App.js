import React, { Component } from "react";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import CyoaApp from "./CyoaApp";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/"
});

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <CssBaseline />
          <CyoaApp />
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
