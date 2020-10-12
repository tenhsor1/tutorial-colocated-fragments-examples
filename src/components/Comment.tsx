import gql from 'graphql-tag';
import React from 'react';
import { Avatar } from './Avatar';

const COMMENT_MAIN_FRAGMENT = gql`
  fragment CommentMain on Comment {
    id
    author {
      ...AvatarMain
    }
    content
    date
  }
  ${Avatar.fragments.main}
`;

//@ts-ignore
export const Comment = ({ data }) => {
	return (
		<div>
			<Avatar data={data.author} />
      <p>{data.content}</p>
      <a href={`/comment/${data.id}`}>
        {data.date}
      </a>
		</div>
	);
};

Comment.fragments = {
	main: COMMENT_MAIN_FRAGMENT
};