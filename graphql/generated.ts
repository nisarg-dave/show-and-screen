import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type FindUserInput = {
  email: Scalars['String']['input'];
};

export type Movie = {
  __typename?: 'Movie';
  backdropPath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  posterPath: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type MovieInput = {
  backdropPath: Scalars['String']['input'];
  posterPath: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToWatchedMovies: User;
};


export type MutationAddToWatchedMoviesArgs = {
  movie: MovieInput;
  user: FindUserInput;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  user: FindUserInput;
};

export type TvShow = {
  __typename?: 'TvShow';
  id: Scalars['ID']['output'];
  posterPath: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  toWatchMovies: Array<UserWantToWatchMovies>;
  toWatchTvShows: Array<UserWantToWatchTvShows>;
  topFiveMovies: Array<UserTopFiveMovies>;
  topFiveTvShows: Array<UserTopFiveTvShows>;
  watchedMovies: Array<UserWatchedMovies>;
  watchedTvShows: Array<UserWatchedTvShows>;
};

export type UserTopFiveMovies = {
  __typename?: 'UserTopFiveMovies';
  movie: Movie;
};

export type UserTopFiveTvShows = {
  __typename?: 'UserTopFiveTvShows';
  tvShow: TvShow;
};

export type UserWantToWatchMovies = {
  __typename?: 'UserWantToWatchMovies';
  movie: Movie;
};

export type UserWantToWatchTvShows = {
  __typename?: 'UserWantToWatchTvShows';
  tvShow: TvShow;
};

export type UserWatchedMovies = {
  __typename?: 'UserWatchedMovies';
  movie: Movie;
};

export type UserWatchedTvShows = {
  __typename?: 'UserWatchedTvShows';
  tvShow: TvShow;
};

export type AddToWatchedMoviesMutationMutationVariables = Exact<{
  user: FindUserInput;
  movie: MovieInput;
}>;


export type AddToWatchedMoviesMutationMutation = { __typename?: 'Mutation', addToWatchedMovies: { __typename?: 'User', id: string, name: string, email: string, topFiveMovies: Array<{ __typename?: 'UserTopFiveMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, topFiveTvShows: Array<{ __typename?: 'UserTopFiveTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, watchedMovies: Array<{ __typename?: 'UserWatchedMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, watchedTvShows: Array<{ __typename?: 'UserWatchedTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, toWatchMovies: Array<{ __typename?: 'UserWantToWatchMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, toWatchTvShows: Array<{ __typename?: 'UserWantToWatchTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }> } };

export type UserQueryQueryVariables = Exact<{
  user: FindUserInput;
}>;


export type UserQueryQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, topFiveMovies: Array<{ __typename?: 'UserTopFiveMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, topFiveTvShows: Array<{ __typename?: 'UserTopFiveTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, watchedMovies: Array<{ __typename?: 'UserWatchedMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, watchedTvShows: Array<{ __typename?: 'UserWatchedTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, toWatchMovies: Array<{ __typename?: 'UserWantToWatchMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, toWatchTvShows: Array<{ __typename?: 'UserWantToWatchTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }> } };


export const AddToWatchedMoviesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToWatchedMoviesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToWatchedMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"movie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"topFiveMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"topFiveTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWatchMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWatchTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddToWatchedMoviesMutationMutation, AddToWatchedMoviesMutationMutationVariables>;
export const UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"topFiveMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"topFiveTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWatchMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWatchTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserQueryQuery, UserQueryQueryVariables>;