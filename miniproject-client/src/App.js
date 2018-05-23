import React, { Component } from 'react';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import { Query } from "react-apollo";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const AllUsers = () => (
  <Query
    query={gql`
        {
          findAllUsers{
            firstName
            lastName
          }
        }
      `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.findAllUsers.map(({ firstName, lastName }) => (
        <div key={firstName}>
          <p>{`${firstName}`} {`${lastName}`}</p>
        </div>
      ));
    }}
  </Query>
);

class App extends Component {
  render() {
    return(
      <ApolloProvider client={client}>
      <div><AllUsers/></div>
      </ApolloProvider>
    );
  }
}

export default App;