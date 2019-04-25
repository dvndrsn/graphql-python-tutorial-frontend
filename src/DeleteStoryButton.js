import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const DELETE_STORY = gql`
  mutation deleteStory($storyId: ID) {
    deleteStory(input: { storyId: $storyId }) {
      story {
        id
        title
        subtitle
        description
        publishedYear
      }
      author {
        id
        stories {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
`;

const DeleteStoryButton = ({ storyId }) => {
  return (
    <Mutation mutation={DELETE_STORY} refetchQueries={["storiesWithAuthor"]}>
      {deleteStory => {
        return (
          <div
            onClick={() =>
              deleteStory({
                variables: {
                  storyId: storyId
                }
              })
            }
          >
            Delete story
          </div>
        );
      }}
    </Mutation>
  );
};

export default DeleteStoryButton;
