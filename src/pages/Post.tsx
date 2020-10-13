import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Comment } from '../components/Comment';
import { PostContent } from '../components/PostContent';
import { PostHeader } from '../components/PostHeader';
import { POST_QUERY } from '../queries';

export const Post = () => {
  //@ts-ignore
  const { id } = useParams();
  const { loading, error, data } = useQuery(POST_QUERY, { variables: { id }});
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !data) {
    return <div>An error occurred</div>;
  }
	return (
		<div>
      <PostHeader data={data.post} />
      <PostContent data={data.post} />
      <div>
        
        {
        //@ts-ignore
        data.post.comments.map((comment) => (
          <Comment data={comment} />
        ))}
      </div>
		</div>
	);
};