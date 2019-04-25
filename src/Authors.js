import React from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const AUTHORS_QUERY = gql`
  query authorsWithStories {
    authors {
      edges {
        node {
          id
          fullName(display: FIRST_LAST)
          twitterAccount
        }
      }
    }
  }
`;

const Authors = () => {
  return (
    <Query query={AUTHORS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <List dense button>
            {data.authors.edges.map(({ node: author }) => (
              <ListItem key={author.id}>
                <ListItemText
                  primary={`${author.fullName} (@${author.twitterAccount})`}
                />
              </ListItem>
            ))}
          </List>
        );
      }}
    </Query>
  );
};

export default Authors;