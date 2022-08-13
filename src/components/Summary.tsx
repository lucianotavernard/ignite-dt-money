import { useContext } from 'react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { TransactionsContext } from '@/contexts/TransactionsContext'
import { priceFormatter } from '@/utils/format'

export function Summary() {
  const { summary } = useContext(TransactionsContext)

  const { income, outcome, total } = summary

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl -mt-20 mx-auto px-6">
      <div className="p-8 rounded-md bg-[#323238] text-[#E1E1E6]">
        <header className="flex justify-between items-center">
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong className="block mt-4 text-3xl">
          {priceFormatter.format(income)}
        </strong>
      </div>

      <div className="p-8 rounded-md bg-[#323238] text-[#E1E1E6]">
        <header className="flex justify-between items-center">
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong className="block mt-4 text-3xl">
          {priceFormatter.format(outcome)}
        </strong>
      </div>

      <div className="p-8 rounded-md bg-[#015F43] text-[#E1E1E6]">
        <header className="flex justify-between items-center">
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>

        <strong className="block mt-4 text-3xl">
          {priceFormatter.format(total)}
        </strong>
      </div>
    </section>
  )
}
