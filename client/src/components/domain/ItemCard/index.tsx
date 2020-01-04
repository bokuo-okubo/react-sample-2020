import React from 'react'
import { ItemCard as BaseComponent } from 'src/components/universal/ItemCard'

import { useGetSingleItemQuery } from 'src/gql.gen'

interface Props {
  id: string
}

export const ItemCard: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useGetSingleItemQuery({ variables: { id } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <BaseComponent
      title={data?.item.title}
      body={data?.item.description}
      imageUrl={data?.item.imageUrl}
    />
  )
}
