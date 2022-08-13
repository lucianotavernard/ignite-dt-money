import { useContext } from 'react'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { TransactionsContext } from '@/contexts/TransactionsContext'

import { Modal } from './Modal'
import { Input } from './Form/Input'
import { InputRadio } from './Form/InputRadio'

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  category: zod.string(),
  price: zod.number(),
  type: zod.enum(['income', 'outcome'])
})

type CreateTransactionFormData = zod.infer<typeof newTransactionFormSchema>

type CreateTransactionModalProps = {
  visible?: boolean
  onClose: () => void
}

type ErrorsType = {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function CreateTransactionModal({
  onClose,
  visible = false
}: CreateTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext)

  const { reset, register, handleSubmit, formState } =
    useForm<CreateTransactionFormData>({
      resolver: zodResolver(newTransactionFormSchema)
    })

  function handleCreateNewTransaction(data: CreateTransactionFormData) {
    const { description, price, category, type } = data

    createTransaction({
      description,
      price,
      category,
      type
    })

    reset()
  }

  const { errors } = formState as unknown as ErrorsType
  const { isSubmitting } = formState

  return (
    <Modal visible={visible}>
      <header className="flex justify-between items-center w-full mb-8">
        <strong className="text-2xl text-[#E1E1E6]">Nova Transação</strong>

        <button
          type="button"
          onClick={onClose}
          className=" border-0 bg-transparent text-[#7C7C8A] text-base font-Roboto font-normal cursor-pointer"
        >
          <X size={24} />
        </button>
      </header>

      <section className="w-full">
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleCreateNewTransaction)}
        >
          <div className="flex flex-col gap-4">
            <Input
              required
              type="text"
              placeholder="Descrição"
              error={errors.description?.message}
              {...register('description')}
            />
            <Input
              required
              type="number"
              placeholder="Preço"
              error={errors.price?.message}
              {...register('price', { valueAsNumber: true })}
            />
            <Input
              required
              type="text"
              placeholder="Categoria"
              error={errors.category?.message}
              {...register('category')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#C4C4CC]">
            <InputRadio
              id="income"
              {...register('type')}
              value="income"
              label={
                <span className="transition-colors flex justify-center items-center p-4 rounded-md bg-[#29292E] text-base select-none hover:cursor-pointer hover:bg-[#323238] peer-checked:bg-[#015F43] peer-checked:text-white">
                  <ArrowCircleUp size={24} color="#00b37e" className="mr-2" />
                  Entrada
                </span>
              }
            />

            <InputRadio
              id="outcome"
              {...register('type')}
              value="outcome"
              label={
                <span className="transition-colors flex justify-center items-center p-4 rounded-md bg-[#29292E] text-base select-none hover:cursor-pointer hover:bg-[#323238] peer-checked:bg-[#AA2834] peer-checked:text-white">
                  <ArrowCircleDown size={24} color="#f75a68" className="mr-2" />
                  Saída
                </span>
              }
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="transition-colors w-full p-4 rounded-md bg-[#00875F] text-white text-base font-Roboto font-normal hover:bg-emerald-600 hover:cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
      </section>
    </Modal>
  )
}
