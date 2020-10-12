import gql from 'graphql-tag';
import React from 'react';
import { Image } from './Image';

const AVATAR_MAIN_FRAGMENT = gql`
	fragment AvatarMain on User {
			id
    	name
    	image
  	}
`;

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
	main: AVATAR_MAIN_FRAGMENT
};