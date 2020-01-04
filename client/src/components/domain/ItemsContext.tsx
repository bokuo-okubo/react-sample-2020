import React from 'react'
import { ItemType, useRootQuery } from 'src/gql.gen'

type StateShape = { items: ItemType[]; loading: boolean; error: boolean }

const initialStates: StateShape = {
  loading: false,
  error: false,
  items: []
}

type ActionTypes = 'START_LOADING' | 'END_LOADING' | 'ERROR' | 'ADD_ITEM'

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
      return {
        items: state.items.map(i => i.id).includes(action.payload?.id)
          ? state.items
          : [...state.items, action.payload].sort(
              (a, b) => b.updated - a.updated
            ),
        loading: false,
        error: false
      }
    case 'START_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'END_LOADING':
      return {
        ...state,
        loading: false
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
  dispatch: undefined | React.Dispatch<Action>
  refetchItems: undefined | (() => Promise<void>)
}>({ state: initialStates, refetchItems: undefined, dispatch: undefined })

export const ItemsContextProvider: React.FC = ({ children }) => {
  const { loading, error, data, refetch } = useRootQuery()
  const [state, dispatch] = React.useReducer(reducer, initialStates)

  React.useEffect(() => {
    if (error) return dispatch({ type: 'ERROR' })
    if (loading) {
      dispatch({ type: 'START_LOADING' })
    } else {
      dispatch({ type: 'END_LOADING' })
    }

    return data?.items.forEach(i => {
      return dispatch({ type: 'ADD_ITEM', payload: i })
    })
  }, [loading, error, data, state.items])

  const refetchItems = async () => {
    const rf = await refetch()
    if (rf.errors) return dispatch({ type: 'ERROR' })
    if (rf.loading) {
      dispatch({ type: 'START_LOADING' })
    } else {
      dispatch({ type: 'END_LOADING' })
    }

    return rf.data?.items.forEach(i => {
      return dispatch({ type: 'ADD_ITEM', payload: i })
    })
  }

  return (
    <ItemsContext.Provider value={{ state, refetchItems, dispatch }}>
      {children}
    </ItemsContext.Provider>
  )
}
