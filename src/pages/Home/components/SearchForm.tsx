import { MagnifyingGlass } from 'phosphor-react'

import { Input } from '@/components/Form/Input'

export function SearchForm() {
  return (
    <form className="flex gap-4 mt-16 mb-6">
      <Input
        type="text"
        placeholder="Busque por transações"
        className="flex-1 "
      />

      <button
        disabled
        type="submit"
        className="transition-colors flex items-center gap-3 py-2 px-5 border border-[#00B37E] rounded-md bg-transparent text-[#00B37E] text-base font-Roboto font-normal enabled:hover:bg-[#00875F] enabled:hover:border-[#00875F] enabled:hover:text-white disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </form>
  )
}
