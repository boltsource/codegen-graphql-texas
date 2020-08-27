import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export type Query = {
  __typename?: 'Query'
  /** Get a specific character by ID */
  character?: Maybe<Character>
  /** Get the list of all characters */
  characters?: Maybe<Characters>
  /** Get a list of characters selected by ids */
  charactersByIds?: Maybe<Array<Maybe<Character>>>
  /** Get a specific locations by ID */
  location?: Maybe<Location>
  /** Get the list of all locations */
  locations?: Maybe<Locations>
  /** Get a list of locations selected by ids */
  locationsByIds?: Maybe<Array<Maybe<Location>>>
  /** Get a specific episode by ID */
  episode?: Maybe<Episode>
  /** Get the list of all episodes */
  episodes?: Maybe<Episodes>
  /** Get a list of episodes selected by ids */
  episodesByIds?: Maybe<Array<Maybe<Episode>>>
}

export type QueryCharacterArgs = {
  id: Scalars['ID']
}

export type QueryCharactersArgs = {
  page?: Maybe<Scalars['Int']>
  filter?: Maybe<FilterCharacter>
}

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryLocationArgs = {
  id: Scalars['ID']
}

export type QueryLocationsArgs = {
  page?: Maybe<Scalars['Int']>
  filter?: Maybe<FilterLocation>
}

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryEpisodeArgs = {
  id: Scalars['ID']
}

export type QueryEpisodesArgs = {
  page?: Maybe<Scalars['Int']>
  filter?: Maybe<FilterEpisode>
}

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type Character = {
  __typename?: 'Character'
  /** The id of the character. */
  id?: Maybe<Scalars['ID']>
  /** The name of the character. */
  name?: Maybe<Scalars['String']>
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status?: Maybe<Scalars['String']>
  /** The species of the character. */
  species?: Maybe<Scalars['String']>
  /** The type or subspecies of the character. */
  type?: Maybe<Scalars['String']>
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender?: Maybe<Scalars['String']>
  /** The character's origin location */
  origin?: Maybe<Location>
  /** The character's last known location */
  location?: Maybe<Location>
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image?: Maybe<Scalars['String']>
  /** Episodes in which this character appeared. */
  episode?: Maybe<Array<Maybe<Episode>>>
  /** Time at which the character was created in the database. */
  created?: Maybe<Scalars['String']>
}

export type Location = {
  __typename?: 'Location'
  /** The id of the location. */
  id?: Maybe<Scalars['ID']>
  /** The name of the location. */
  name?: Maybe<Scalars['String']>
  /** The type of the location. */
  type?: Maybe<Scalars['String']>
  /** The dimension in which the location is located. */
  dimension?: Maybe<Scalars['String']>
  /** List of characters who have been last seen in the location. */
  residents?: Maybe<Array<Maybe<Character>>>
  /** Time at which the location was created in the database. */
  created?: Maybe<Scalars['String']>
}

export type Episode = {
  __typename?: 'Episode'
  /** The id of the episode. */
  id?: Maybe<Scalars['ID']>
  /** The name of the episode. */
  name?: Maybe<Scalars['String']>
  /** The air date of the episode. */
  air_date?: Maybe<Scalars['String']>
  /** The code of the episode. */
  episode?: Maybe<Scalars['String']>
  /** List of characters who have been seen in the episode. */
  characters?: Maybe<Array<Maybe<Character>>>
  /** Time at which the episode was created in the database. */
  created?: Maybe<Scalars['String']>
}

export type FilterCharacter = {
  name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  species?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  gender?: Maybe<Scalars['String']>
}

export type Characters = {
  __typename?: 'Characters'
  info?: Maybe<Info>
  results?: Maybe<Array<Maybe<Character>>>
}

export type Info = {
  __typename?: 'Info'
  /** The length of the response. */
  count?: Maybe<Scalars['Int']>
  /** The amount of pages. */
  pages?: Maybe<Scalars['Int']>
  /** Number of the next page (if it exists) */
  next?: Maybe<Scalars['Int']>
  /** Number of the previous page (if it exists) */
  prev?: Maybe<Scalars['Int']>
}

export type FilterLocation = {
  name?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  dimension?: Maybe<Scalars['String']>
}

export type Locations = {
  __typename?: 'Locations'
  info?: Maybe<Info>
  results?: Maybe<Array<Maybe<Location>>>
}

export type FilterEpisode = {
  name?: Maybe<Scalars['String']>
  episode?: Maybe<Scalars['String']>
}

export type Episodes = {
  __typename?: 'Episodes'
  info?: Maybe<Info>
  results?: Maybe<Array<Maybe<Episode>>>
}

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE',
}

export type GetCharactersQueryVariables = Exact<{ [key: string]: never }>

export type GetCharactersQuery = { __typename?: 'Query' } & {
  characters?: Maybe<
    { __typename?: 'Characters' } & {
      info?: Maybe<{ __typename?: 'Info' } & Pick<Info, 'count'>>
      results?: Maybe<
        Array<Maybe<{ __typename?: 'Character' } & Pick<Character, 'name'>>>
      >
    }
  >
}

export const GetCharactersDocument = gql`
  query GetCharacters {
    characters {
      info {
        count
      }
      results {
        name
      }
    }
  }
`

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
) {
  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    baseOptions,
  )
}
export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    baseOptions,
  )
}
export type GetCharactersQueryHookResult = ReturnType<
  typeof useGetCharactersQuery
>
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>
