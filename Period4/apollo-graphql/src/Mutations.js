import React, { Component } from 'react';
import { ApolloProvider, Mutation, Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: `https://8v9r9kpn7q.lp.gql.zone/graphql`
});


const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

const UPDATE_TODO = gql`
  mutation updateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

const GET_TODOS = gql`
  {
    todos{
      id
      type
    }
  }
`;

const AddTodo = () => {
  let input;

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([addTodo]) }
        });
      }}
    >
      {addTodo => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: input.value } });
              input.value = "";
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.todos.map(({ id, type }) => {
        let input;

        return (
          <Mutation mutation={UPDATE_TODO} key={id}>
            {(updateTodo, { loading, error }) => (
              <div>
                <p>{type}</p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    updateTodo({ variables: { id, type: input.value } });

                    input.value = "";
                  }}
                >
                  <input
                    ref={node => {
                      input = node;
                    }}
                  />
                  <button type="submit">Update Todo</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
              </div>
            )}
          </Mutation>
        );
      });
    }}
  </Query>
)

class Mutations extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Mutations</h2>
          <AddTodo />
          <Todos />
        </div>
      </ApolloProvider>
    )
  }
};

export default Mutations;