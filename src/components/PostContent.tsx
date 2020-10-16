import gql from 'graphql-tag';
import React from 'react';
import { PostContentFragment } from '../generated/graphql-types';

export interface PostContentProps {
	data: PostContentFragment
}
export const PostContent = ({ data }: PostContentProps) => {
	return (
		<div>
      <div>
        <div>{data.content}</div>
        <h4>{data.date}</h4>
      </div>
		</div>
	);
};

PostContent.fragments = {
	post: gql`
		fragment PostContent on Post {
			id
    	content
      date
  	}
	`
};