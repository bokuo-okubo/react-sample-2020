import React from 'react'
import { ItemCard } from 'src/components/domain/ItemCard'
import { SingleLineGridList } from 'src/components/universal/GridList'

import { useRootQuery, ItemType } from 'src/gql.gen'

export const ItemList: React.FC = () => {
  const { loading, error, data: remoteData } = useRootQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <SingleLineGridList<ItemType>
        contents={remoteData ? remoteData.items : []}
        renderRow={({ data }) => <ItemCard id={data.id} />}
      />
    </>
  )
}
