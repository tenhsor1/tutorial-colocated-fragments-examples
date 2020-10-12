import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarProps } from './Avatar';

export interface PostHeaderProps {
	data: {
		id: string,
		title: string,
		author: AvatarProps['data']
	}
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
