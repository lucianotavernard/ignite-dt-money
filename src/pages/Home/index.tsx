import { Header } from '@/components/Header'
import { Pagination } from '@/components/Pagination'
import { Summary } from '@/components/Summary'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import { SearchForm } from './components/SearchForm'

export function Home() {
  return (
    <main className="min-h-screen bg-[#202024] text-[#E1E1E6]">
      <Header />
      <Summary />

      <section className="w-full max-w-6xl mx-auto px-6">
        <SearchForm />

        <table className="w-full mt-6 border-separate border-spacing-y-2 border-spacing-x-0 text-[#C4C4CC]">
          <tbody>
            <tr>
              <td
                className="py-5 px-8 rounded-tl-lg rounded-bl-lg bg-[#29292E]"
                width="50%"
              >
                Desenvolvimento de site
              </td>
              <td className="py-5 px-8 bg-[#29292E]">
                <span className="flex items-center text-[#00B37E]">
                  <ArrowCircleUp size={20} color="#00b37e" className="mr-2" />
                  R$ 12.000,00
                </span>
              </td>
              <td className="py-5 px-8 bg-[#29292E]">Venda</td>
              <td className="py-5 px-8 rounded-tr-lg rounded-br-lg bg-[#29292E]">
                13/04/2022
              </td>
            </tr>

            <tr>
              <td
                className="py-5 px-8 rounded-tl-lg rounded-bl-lg bg-[#29292E]"
                width="50%"
              >
                Hamburguer
              </td>
              <td className="py-5 px-8 bg-[#29292E]">
                <span className="flex items-center text-[#F75A68]">
                  <ArrowCircleDown size={20} color="#f75a68" className="mr-2" />{' '}
                  - R$ 59,00
                </span>
              </td>
              <td className="py-5 px-8 bg-[#29292E]">Alimentação</td>
              <td className="py-5 px-8 rounded-tr-lg rounded-br-lg bg-[#29292E]">
                13/04/2022
              </td>
            </tr>

            <tr>
              <td
                className="py-5 px-8 rounded-tl-lg rounded-bl-lg bg-[#29292E]"
                width="50%"
              >
                Aluguel do apartamento
              </td>
              <td className="py-5 px-8 bg-[#29292E]">
                <span className="flex items-center text-[#F75A68]">
                  <ArrowCircleDown size={20} color="#f75a68" className="mr-2" />{' '}
                  - R$ 1.200,00
                </span>
              </td>
              <td className="py-5 px-8 bg-[#29292E]">Casa</td>
              <td className="py-5 px-8 rounded-tr-lg rounded-br-lg bg-[#29292E]">
                13/04/2022
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination totalCountOfRegisters={100} onPageChange={console.log} />
      </section>
    </main>
  )
}
