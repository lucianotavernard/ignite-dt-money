import { useContext } from 'react'
import { MagnifyingGlass } from 'phosphor-react'

import { useFormContext } from 'react-hook-form'
import * as zod from 'zod'

import { TransactionsContext } from '@/contexts/TransactionsContext'

import { Input } from '@/components/Form/Input'

const searchFormValidationSchema = zod.object({
  query: zod.string()
})

type SearchFormData = zod.infer<typeof searchFormValidationSchema>

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext)
  const { register, handleSubmit, watch } = useFormContext<SearchFormData>()

  function handleSearchQuery(data: SearchFormData) {
    fetchTransactions(data.query)
  }

  const query = watch('query')
  const isSubmitDisable = !query

  return (
    <form
      className="flex gap-4 mt-16 mb-6"
      onSubmit={handleSubmit(handleSearchQuery)}
    >
      <Input
        className="flex-1"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button
        type="submit"
        disabled={isSubmitDisable}
        className="transition-colors flex items-center gap-3 py-2 px-5 border border-[#00B37E] rounded-md bg-transparent text-[#00B37E] text-base font-Roboto font-normal enabled:hover:bg-[#00875F] enabled:hover:border-[#00875F] enabled:hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
