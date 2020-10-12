import gql from 'graphql-tag';
import React from 'react';
import { Avatar, AvatarProps } from './Avatar';

const COMMENT_MAIN_FRAGMENT = gql`
  fragment CommentMain on Comment {
    id
    author {
      ...AvatarMain
    }
    content
    date
  }
`;

export interface CommentProps {
	data: {
    id: string;
    content: string;
    date: string;
    author: AvatarProps['data']
  }
}
export const Comment = ({ data }: CommentProps) => {
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