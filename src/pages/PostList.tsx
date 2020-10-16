import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { PostHeader } from '../components/PostHeader';

const POST_LIST_QUERY = gql`
  query PostList {
    posts {
      ...PostHeader,
    }
  }
  ${PostHeader.fragments.post}
`;

export const PostList = () => {
  const { loading, error, data } = useQuery(POST_LIST_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>An error occurred</div>;
  }
	return (
		<div>
      <div>
        {
          //@ts-ignore
          data.posts.map((post) => (
            <PostHeader data={post} />
          ))
        }
      </div>
		</div>
	);
};