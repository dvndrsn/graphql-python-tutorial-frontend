import React from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const STORIES_QUERY = gql`
  query storiesWithAuthor {
    stories {
      id
      title
      authorName(display: FIRST_LAST)
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
            {data.stories.map(story => (
              <ListItem key={story.id}>
                <ListItemText
                  primary={`${story.title}`}
                  secondary={story.authorName}
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
