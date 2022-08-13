import { useContext, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { TransactionsContext } from '@/contexts/TransactionsContext'

import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'
import { Pagination } from '@/components/Pagination'
import { SearchForm } from './components/SearchForm'
import { TransactionItem } from './components/TransactionItem'

const searchFormValidationSchema = zod.object({
  query: zod.string()
})

type SearchFormData = zod.infer<typeof searchFormValidationSchema>

export function Home() {
  const [page, setPage] = useState(1)

  const { items } = useContext(TransactionsContext)

  const searchForm = useForm<SearchFormData>({
    resolver: zodResolver(searchFormValidationSchema),
    defaultValues: {
      query: ''
    }
  })

  function handlePageChange(newPage: number) {
    setPage(newPage)
  }

  const { watch } = searchForm

  const query = watch('query')

  const filteredItems = items.filter((item) =>
    item.description.match(new RegExp(query, 'gi'))
  )

  const totalCount = filteredItems.length
  const totalPerPage = 5

  const pageStart = (Number(page) - 1) * Number(totalPerPage)
  const pageEnd = pageStart + Number(totalPerPage)

  const transactions = filteredItems.slice(pageStart, pageEnd)

  return (
    <main className="min-h-screen bg-[#202024] text-[#E1E1E6]">
      <Header />
      <Summary />

      <section className="w-full max-w-6xl mx-auto px-6">
        <FormProvider {...searchForm}>
          <SearchForm />
        </FormProvider>

        <table className="w-full mt-6 border-separate border-spacing-y-2 border-spacing-x-0 text-[#C4C4CC]">
          <tbody>
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>

        {totalCount > 5 && (
          <Pagination
            onPageChange={handlePageChange}
            totalCountOfRegisters={totalCount}
            registersPerPage={totalPerPage}
            currentPage={page}
          />
        )}
      </section>
    </main>
  )
}
