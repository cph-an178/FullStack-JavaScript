import React, { Component } from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
    uri: `https://nx9zvp49q7.lp.gql.zone/graphql`
});

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
    <Query query={GET_DOGS}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                <select name="dog" onChange={onDogSelected}>
                    {data.dogs.map(dog => (
                        <option key={dog.id} value={dog.breed}>
                            {dog.breed}
                        </option>
                    ))}
                </select>
            );
        }}
    </Query>
);

const DogPhoto = ({ breed }) => (
    <Query
        query={GET_DOG_PHOTO}
        variables={{ breed }}
        skip={!breed}
        notifyOnNetworkStatusChange
    >
        {({ loading, error, data, refetch, networkStatus }) => {
            if (networkStatus === 4) return "Refetching!";
            if (loading) return null;
            if (error) return `Error!: ${error}`;

            return (
                <div>
                    <img
                        src={data.dog.displayImage}
                        style={{ height: 100, width: 100 }}
                    />
                    <button onClick={() => refetch()}>Refetch!</button>
                </div>
            );
        }}
    </Query>
);

class Queries extends Component {
    state = { selectedDog: null };

    onDogSelected = ({ target }) => {
        this.setState(() => ({ selectedDog: target.value }));
    };
    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    <h2>Apollo Queries</h2>
                    <Dogs onDogSelected={this.onDogSelected} />
                    {this.state.selectedDog && (
                        <DogPhoto breed={this.state.selectedDog} />
                    )}
                </div>
            </ApolloProvider>
        );
    };
};

export default Queries;