import gql from 'graphql-tag';
import React from 'react';
import { Avatar } from './Avatar';

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