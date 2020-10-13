import { useQuery } from '@apollo/client';
import React from 'react';
import { PostHeader } from '../components/PostHeader';
import { POST_LIST_QUERY } from '../queries';

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
          data?.posts?.map((post) => (
            <PostHeader data={post!} />
          ))
        }
      </div>
		</div>
	);
};