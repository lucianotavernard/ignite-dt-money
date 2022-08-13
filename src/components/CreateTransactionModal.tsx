// import { Container } from './styles';

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Input } from './Form/Input'
import { InputRadio } from './Form/InputRadio'
import { Modal } from './Modal'

type CreateTransactionModalProps = {
  visible?: boolean
  onClose: () => void
}

export function CreateTransactionModal({
  onClose,
  visible = false
}: CreateTransactionModalProps) {
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
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <Input type="text" placeholder="Descrição" required />
            <Input type="number" placeholder="Preço" required />
            <Input type="text" placeholder="Categoria" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#C4C4CC]">
            <InputRadio
              id="type"
              name="type"
              value="income"
              label={
                <span className="transition-colors flex justify-center items-center p-4 rounded-md bg-[#29292E] text-base select-none hover:cursor-pointer hover:bg-[#323238] peer-checked:bg-[#015F43] peer-checked:text-white">
                  <ArrowCircleUp size={24} color="#00b37e" className="mr-2" />
                  Entrada
                </span>
              }
            />

            <InputRadio
              id="type"
              name="type"
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
            disabled
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
