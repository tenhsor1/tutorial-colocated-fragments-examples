import gql from 'graphql-tag';
import React from 'react';
import { AvatarFragment } from '../generated/graphql-types';
import { Image } from './Image';
export interface AvatarProps {
	data: AvatarFragment
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
	user: gql`
		fragment Avatar on User {
			id
    	name
    	image
  	}
	`
};