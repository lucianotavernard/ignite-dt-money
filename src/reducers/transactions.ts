/* eslint-disable @typescript-eslint/no-explicit-any */

import { initialTransactions } from '@/contexts/data/transactions'

export type Transaction = {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

type TransactionsState = {
  items: Transaction[]
}

export enum ActionTypes {
  GET_TRANSACTIONS = 'GET_TRANSACTIONS',
  CREATE_NEW_TRANSACTION = 'CREATE_NEW_TRANSACTION'
}

export const initialState: TransactionsState = {
  items: []
}

export function transactionsReducer(
  state: TransactionsState,
  action: any
): TransactionsState {
  switch (action.type) {
    case ActionTypes.GET_TRANSACTIONS: {
      const transactions = initialTransactions as Transaction[]

      return {
        ...state,
        items: transactions.sort(
          (transactionA, transactionB) => transactionB.id - transactionA.id
        )
      }
    }
    case ActionTypes.CREATE_NEW_TRANSACTION: {
      const { description, price, category, type } = action.payload

      const id = state.items.length + 1

      const newTransaction = {
        id,
        description,
        price,
        category,
        type,
        createdAt: new Date().toDateString()
      } as Transaction

      return {
        ...state,
        items: [newTransaction, ...state.items]
      }
    }
    default:
      return state
  }
}
