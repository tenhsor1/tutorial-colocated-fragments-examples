export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  posts?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<Post>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['String'];
  author: User;
  comments?: Maybe<Array<Maybe<Comment>>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  author: User;
  content: Scalars['String'];
  date: Scalars['String'];
};

export type AvatarFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'image'>
);

export type CommentFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'content' | 'date'>
  & { author: (
    { __typename?: 'User' }
    & AvatarFragment
  ) }
);

export type PostContentFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'content' | 'date'>
);

export type PostHeaderFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'title'>
  & { author: (
    { __typename?: 'User' }
    & AvatarFragment
  ) }
);

export type PostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & { comments?: Maybe<Array<Maybe<(
      { __typename?: 'Comment' }
      & CommentFragment
    )>>> }
    & PostHeaderFragment
    & PostContentFragment
  )> }
);

export type PostListQueryVariables = Exact<{ [key: string]: never; }>;


export type PostListQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & PostHeaderFragment
  )>>> }
);
