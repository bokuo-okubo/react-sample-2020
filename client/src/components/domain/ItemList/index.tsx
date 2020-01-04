import React, { useContext } from 'react'
import { ItemCard } from 'src/components/domain/ItemCard'
import { SingleLineGridList } from 'src/components/universal/GridList'

import { ItemType } from 'src/gql.gen'

import { ItemsContext } from 'src/components/domain/ItemsContext'

export const ItemList: React.FC = () => {
  const { state } = useContext(ItemsContext)

  if (state.loading) return <p>Loading...</p>
  if (state.error) return <p>Error :(</p>

  return (
    <>
      <SingleLineGridList<ItemType>
        contents={state.items}
        renderRow={({ data }) => <ItemCard id={data.id} />}
      />
    </>
  )
}
