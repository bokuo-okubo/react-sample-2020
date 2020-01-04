import React from 'react'
import { ItemCard } from 'src/components/domain/ItemCard'
import { SingleLineGridList } from 'src/components/universal/GridList'

import { useRootQuery, ItemType } from 'src/gql.gen'

export const ItemList: React.FC = () => {
  const { loading, error, data: remoteData } = useRootQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const contents = remoteData
    ? [...remoteData.items].sort((a, b) => {
        console.log(a.updated, b.updated)
        return b.updated - a.updated
      })
    : []

  return (
    <>
      <SingleLineGridList<ItemType>
        contents={contents}
        renderRow={({ data }) => <ItemCard id={data.id} />}
      />
    </>
  )
}
