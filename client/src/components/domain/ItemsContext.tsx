import React from 'react'
import { ItemType, useRootQuery } from 'src/gql.gen'

type StateShape = { items: ItemType[]; loading: boolean; error: boolean }

const initialStates: StateShape = {
  loading: false,
  error: false,
  items: []
}

type ActionTypes = 'LOADING' | 'ERROR' | 'ADD_ITEM'

interface Action {
  type: ActionTypes
  payload?: any
}

const reducer = (
  state = initialStates,
  action: Action
): typeof initialStates => {
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.map(i => i.id).includes(action.payload?.id)) {
        return {
          ...state,
          loading: false,
          error: false
        }
      } else {
        return {
          items: [...state.items, action.payload].sort(
            (a, b) => b.updated - a.updated
          ),
          loading: false,
          error: false
        }
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'ERROR':
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export const ItemsContext = React.createContext<{
  state: StateShape
  refetchItems: undefined | (() => Promise<void>)
}>({ state: initialStates, refetchItems: undefined })

export const ItemsContextProvider: React.FC = ({ children }) => {
  const rq = useRootQuery()
  const [state, dispatch] = React.useReducer(reducer, initialStates)

  React.useEffect(() => {
    if (rq.loading) return dispatch({ type: 'LOADING' })
    if (rq.error) return dispatch({ type: 'ERROR' })

    return rq.data?.items.forEach(i => {
      dispatch({ type: 'ADD_ITEM', payload: i })
    })
  }, [rq])

  const refetchItems = async () => {
    const rf = await rq.refetch()
    if (rf.loading) return dispatch({ type: 'LOADING' })
    if (rf.errors) return dispatch({ type: 'ERROR' })

    return rf.data?.items.forEach(i => {
      dispatch({ type: 'ADD_ITEM', payload: i })
    })
  }

  return (
    <ItemsContext.Provider value={{ state, refetchItems }}>
      {children}
    </ItemsContext.Provider>
  )
}
