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

export type MovieIdInput = {
  id: Scalars['String']['input'];
};

export type MovieInput = {
  backdropPath: Scalars['String']['input'];
  posterPath: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addToTopFiveMovies: UserTopFiveMovies;
  addToTopFiveTvShows: UserTopFiveTvShows;
  addToWatchMovies: User;
  addToWatchTvShows: User;
  addToWatchedMovies: User;
  addToWatchedTvShows: User;
  removeFromTopFiveMovies: UserTopFiveMovies;
  removeFromTopFiveTvShows: UserTopFiveTvShows;
};


export type MutationAddToTopFiveMoviesArgs = {
  movie: MovieIdInput;
  user: FindUserInput;
};


export type MutationAddToTopFiveTvShowsArgs = {
  tvShow: TvShowIdInput;
  user: FindUserInput;
};


export type MutationAddToWatchMoviesArgs = {
  movie: MovieInput;
  user: FindUserInput;
};


export type MutationAddToWatchTvShowsArgs = {
  tvShow: TvShowInput;
  user: FindUserInput;
};


export type MutationAddToWatchedMoviesArgs = {
  movie: MovieInput;
  user: FindUserInput;
};


export type MutationAddToWatchedTvShowsArgs = {
  tvShow: TvShowInput;
  user: FindUserInput;
};


export type MutationRemoveFromTopFiveMoviesArgs = {
  movie: MovieIdInput;
  user: FindUserInput;
};


export type MutationRemoveFromTopFiveTvShowsArgs = {
  tvShow: TvShowIdInput;
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

export type TvShowIdInput = {
  id: Scalars['String']['input'];
};

export type TvShowInput = {
  posterPath: Scalars['String']['input'];
  title: Scalars['String']['input'];
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


export type AddToWatchedMoviesMutationMutation = { __typename?: 'Mutation', addToWatchedMovies: { __typename?: 'User', id: string, name: string, email: string, topFiveMovies: Array<{ __typename?: 'UserTopFiveMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, watchedMovies: Array<{ __typename?: 'UserWatchedMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }> } };

export type AddToWatchMoviesMutationMutationVariables = Exact<{
  user: FindUserInput;
  movie: MovieInput;
}>;


export type AddToWatchMoviesMutationMutation = { __typename?: 'Mutation', addToWatchMovies: { __typename?: 'User', id: string, name: string, email: string, toWatchMovies: Array<{ __typename?: 'UserWantToWatchMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }> } };

export type AddToWatchedTvShowsMutationMutationVariables = Exact<{
  user: FindUserInput;
  tvShow: TvShowInput;
}>;


export type AddToWatchedTvShowsMutationMutation = { __typename?: 'Mutation', addToWatchedTvShows: { __typename?: 'User', id: string, name: string, email: string, topFiveTvShows: Array<{ __typename?: 'UserTopFiveTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, watchedTvShows: Array<{ __typename?: 'UserWatchedTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }> } };

export type AddToWatchTvShowsMutationMutationVariables = Exact<{
  user: FindUserInput;
  tvShow: TvShowInput;
}>;


export type AddToWatchTvShowsMutationMutation = { __typename?: 'Mutation', addToWatchTvShows: { __typename?: 'User', id: string, name: string, email: string, toWatchTvShows: Array<{ __typename?: 'UserWantToWatchTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }> } };

export type RemoveFromTopFiveMoviesMutationMutationVariables = Exact<{
  user: FindUserInput;
  movie: MovieIdInput;
}>;


export type RemoveFromTopFiveMoviesMutationMutation = { __typename?: 'Mutation', removeFromTopFiveMovies: { __typename?: 'UserTopFiveMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } } };

export type AddToTopFiveMoviesMutationMutationVariables = Exact<{
  user: FindUserInput;
  movie: MovieIdInput;
}>;


export type AddToTopFiveMoviesMutationMutation = { __typename?: 'Mutation', addToTopFiveMovies: { __typename?: 'UserTopFiveMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } } };

export type RemoveFromTopFiveTvShowsMutationMutationVariables = Exact<{
  user: FindUserInput;
  tvShow: TvShowIdInput;
}>;


export type RemoveFromTopFiveTvShowsMutationMutation = { __typename?: 'Mutation', removeFromTopFiveTvShows: { __typename?: 'UserTopFiveTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } } };

export type AddToTopFiveTvShowsMutationMutationVariables = Exact<{
  user: FindUserInput;
  tvShow: TvShowIdInput;
}>;


export type AddToTopFiveTvShowsMutationMutation = { __typename?: 'Mutation', addToTopFiveTvShows: { __typename?: 'UserTopFiveTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } } };

export type UserQueryQueryVariables = Exact<{
  user: FindUserInput;
}>;


export type UserQueryQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, email: string, topFiveMovies: Array<{ __typename?: 'UserTopFiveMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, topFiveTvShows: Array<{ __typename?: 'UserTopFiveTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, watchedMovies: Array<{ __typename?: 'UserWatchedMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, watchedTvShows: Array<{ __typename?: 'UserWatchedTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }>, toWatchMovies: Array<{ __typename?: 'UserWantToWatchMovies', movie: { __typename?: 'Movie', id: string, title: string, posterPath: string, backdropPath: string } }>, toWatchTvShows: Array<{ __typename?: 'UserWantToWatchTvShows', tvShow: { __typename?: 'TvShow', id: string, title: string, posterPath: string } }> } };


export const AddToWatchedMoviesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToWatchedMoviesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToWatchedMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"movie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"topFiveMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddToWatchedMoviesMutationMutation, AddToWatchedMoviesMutationMutationVariables>;
export const AddToWatchMoviesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToWatchMoviesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToWatchMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"movie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"toWatchMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddToWatchMoviesMutationMutation, AddToWatchMoviesMutationMutationVariables>;
export const AddToWatchedTvShowsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToWatchedTvShowsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TvShowInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToWatchedTvShows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tvShow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"topFiveTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddToWatchedTvShowsMutationMutation, AddToWatchedTvShowsMutationMutationVariables>;
export const AddToWatchTvShowsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToWatchTvShowsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TvShowInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToWatchTvShows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tvShow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"toWatchTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddToWatchTvShowsMutationMutation, AddToWatchTvShowsMutationMutationVariables>;
export const RemoveFromTopFiveMoviesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFromTopFiveMoviesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFromTopFiveMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"movie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFromTopFiveMoviesMutationMutation, RemoveFromTopFiveMoviesMutationMutationVariables>;
export const AddToTopFiveMoviesMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToTopFiveMoviesMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"movie"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MovieIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToTopFiveMovies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"movie"},"value":{"kind":"Variable","name":{"kind":"Name","value":"movie"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}}]}}]} as unknown as DocumentNode<AddToTopFiveMoviesMutationMutation, AddToTopFiveMoviesMutationMutationVariables>;
export const RemoveFromTopFiveTvShowsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveFromTopFiveTvShowsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TvShowIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeFromTopFiveTvShows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tvShow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveFromTopFiveTvShowsMutationMutation, RemoveFromTopFiveTvShowsMutationMutationVariables>;
export const AddToTopFiveTvShowsMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddToTopFiveTvShowsMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TvShowIdInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addToTopFiveTvShows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}},{"kind":"Argument","name":{"kind":"Name","value":"tvShow"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tvShow"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]} as unknown as DocumentNode<AddToTopFiveTvShowsMutationMutation, AddToTopFiveTvShowsMutationMutationVariables>;
export const UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FindUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"topFiveMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"topFiveTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"watchedTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWatchMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}},{"kind":"Field","name":{"kind":"Name","value":"backdropPath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"toWatchTvShows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tvShow"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"posterPath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserQueryQuery, UserQueryQueryVariables>;