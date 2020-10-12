import gql from 'graphql-tag';
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

const postHeaderFragment = gql`
	fragment PostHeader on Post {
			id
    	title
    	author {
        ...AvatarMain
      }
  	}
    ${Avatar.fragments.main}
`;

//@ts-ignore
export const PostHeader = ({ data }) => {
	return (
		<div>
			<Avatar data={data.author} />
      <Link to={`/post/${data.id}`}>
        <h1>{data.title}</h1>
      </Link>
		</div>
	);
};

PostHeader.fragments = {
	main: postHeaderFragment
};