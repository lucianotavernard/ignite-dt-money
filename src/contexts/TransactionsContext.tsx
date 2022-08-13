import { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  ActionTypes,
  Transaction,
  transactionsReducer,
  initialState
} from '@/reducers/transactions'

type CreateTransactionInput = {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

type Summary = {
  total: number
  income: number
  outcome: number
}

type TransactionContextType = {
  items: Transaction[]
  summary: Summary
  totalItems: number
  fetchTransactions: (query?: string) => void
  createTransaction: (data: CreateTransactionInput) => void
}

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactionsState, dispatch] = useReducer(
    transactionsReducer,
    initialState,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-dt-money:transactions-state-1.0.0'
      )

      return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : initialState
    }
  )

  const { items } = transactionsState
  const totalItems = items?.length || 0

  const summary = items.reduce(
    (accumulated, transaction) => {
      if (transaction.type === 'income') {
        accumulated.income += transaction.price
        accumulated.total += transaction.price
      } else {
        accumulated.outcome += transaction.price
        accumulated.total -= transaction.price
      }

      return accumulated
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  function fetchTransactions(query?: string) {
    dispatch({
      type: ActionTypes.GET_TRANSACTIONS,
      payload: {
        query
      }
    })
  }

  function createTransaction(createTransactionInput: CreateTransactionInput) {
    dispatch({
      type: ActionTypes.CREATE_NEW_TRANSACTION,
      payload: createTransactionInput
    })
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        items,
        summary,
        totalItems,
        fetchTransactions,
        createTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
