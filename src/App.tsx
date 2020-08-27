import React from 'react'
import styled from '@emotion/styled'
import { useGetCharactersQuery } from 'generated/graphql'

const Container = styled.div`
  max-width: 1000px;
`

const App = () => {
  const { loading, error, data } = useGetCharactersQuery()

  if (loading || !data) return <p>Loading ...</p>

  if (error) return <p>There was an error loading the characters.</p>

  return (
    <Container>
      <h1>Rick and Morty</h1>
      <ul>
        {data.characters?.results?.map((character) => {
          return <li key={character?.name}>{character?.name}</li>
        })}
      </ul>
    </Container>
  )
}

export default App
