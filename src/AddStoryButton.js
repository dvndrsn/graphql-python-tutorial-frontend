import React from "react";
import gql from "graphql-tag";
import faker from "faker";
import { Mutation } from "react-apollo";

// Exercise 6.
// Modifiy the addStory operation so that the list of stories ID's for an Author is refetched
// Try using GraphiQL to prototype the query with the correct response
// Remember that Apollo caches values by ID, so all fetched objects should have ID
// Also remember that createStory mutation returns both story and author objects.

// BONUS! Use `refetchQueries` or `update` function to ensure that the list of stories is refetched
// on our other page.

const ADD_STORY = gql`
  mutation addStory(
    $title: String
    $subtitle: String
    $description: String
    $publishedYear: String
    $authorId: ID
  ) {
    createStory(
      input: {
        title: $title
        subtitle: $subtitle
        description: $description
        publishedYear: $publishedYear
        authorId: $authorId
      }
    ) {
      story {
        id
        title
        subtitle
        description
        publishedYear
      }
    }
  }
`;

const AddStoryButton = ({ authorId }) => {
  return (
    <Mutation mutation={ADD_STORY}>
      {addStory => {
        return (
          <div
            onClick={() =>
              addStory({
                variables: {
                  title: faker.company.companyName(),
                  subtitle: faker.company.catchPhrase(),
                  description: faker.company.bs(),
                  publishedYear: faker.date.past().getFullYear(),
                  authorId: authorId
                }
              })
            }
          >
            Add story
          </div>
        );
      }}
    </Mutation>
  );
};

export default AddStoryButton;
