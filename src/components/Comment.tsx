import gql from 'graphql-tag';
import React from 'react';
import { CommentFragment } from '../generated/graphql-types';
import { Avatar } from './Avatar';

export interface AvatarProps {
	data: CommentFragment
}
export const Comment = ({ data }: AvatarProps) => {
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
	comment: gql`
    fragment Comment on Comment {
      id
      author {
        ...Avatar
      }
      content
      date
    }
    ${Avatar.fragments.user}
  `
};