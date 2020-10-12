import React from 'react';

export interface PostContentProps {
	data: {
		id: string;
		content: string;
		date: string;
	}
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
