import React from 'react';
import { Image } from './Image';

export interface AvatarProps {
	data: {
		id: string;
		name: string;
		image: string;
	}
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
