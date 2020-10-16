import gql from 'graphql-tag';
import React from 'react';
import { Image } from './Image';

//@ts-ignore
export const Avatar = ({ data }) => {
	return (
		<div>
			<a href={`/user/${data.id}`}>
				<h3>{data.name}</h3>
				<Image
					src={data.image}
				/>
			</a>
		</div>
	);
};

Avatar.fragments = {
	user: gql`
		fragment Avatar on User {
			id
    	name
    	image
  	}
	`
};