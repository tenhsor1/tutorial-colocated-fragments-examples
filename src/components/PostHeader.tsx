import gql from 'graphql-tag';
import React from 'react';
import { Link } from 'react-router-dom';
import { PostHeaderFragment } from '../generated/graphql-types';
import { Avatar } from './Avatar';
export interface PostHeaderProps {
	data: PostHeaderFragment
}
export const PostHeader = ({ data }: PostHeaderProps) => {
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