import gql from 'graphql-tag';
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

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
	post: gql`
		fragment PostHeader on Post {
			id
    	title
    	author {
        ...Avatar
      }
  	}
    ${Avatar.fragments.user}
	`
};