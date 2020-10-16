import gql from 'graphql-tag';
import React from 'react';

//@ts-ignore
export const PostContent = (props) => {
	return (
		<div>
      <div>
        <div>{props.content}</div>
        <h4>{props.date}</h4>
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