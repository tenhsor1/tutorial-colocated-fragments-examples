import gql from 'graphql-tag';
import React from 'react';
import { AvatarMainFragment } from '../generated/graphql-types';
import { Image } from './Image';

const AVATAR_MAIN_FRAGMENT = gql`
	fragment AvatarMain on User {
			id
    	name
    	image
  	}
`;
export interface AvatarProps {
	data: AvatarMainFragment
}
export const Avatar = ({ data }: AvatarProps) => {
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