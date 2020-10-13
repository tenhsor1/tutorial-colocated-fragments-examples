import gql from "graphql-tag";

export const POST_QUERY = gql`
  query Post($id: String!) {
    post(id: $id) {
      id
      title
      content
      date
      author {
        id
        name
        image
      }
      comments {
        id
        content
        date
        author {
          id
          name
          image
        }
      }
    }
  }
`;

export const POST_LIST_QUERY = gql`
  query PostList {
    posts {
      id
      title
      date
      author {
        id
        name
        image
      }
    }
  }
`;