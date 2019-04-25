import React from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const STORIES_QUERY = gql`
  query storiesWithAuthor {
    stories {
      edges {
        node {
          id
          title
          publishedYear
          author {
            fullName(display: FIRST_LAST)
          }
        }
      }
    }
  }
`;

const Stories = () => {
  return (
    <Query query={STORIES_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <List dense button>
            {data.stories.edges.map(({ node: story }) => (
              <ListItem key={story.id}>
                <ListItemText
                  primary={`${story.title} (${story.publishedYear})`}
                  secondary={story.author.fullName}
                />
              </ListItem>
            ))}
          </List>
        );
      }}
    </Query>
  );
};

export default Stories;
