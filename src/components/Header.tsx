import { useState } from 'react'

import faviconImg from '@/assets/favicon.png'

import { CreateTransactionModal } from './CreateTransactionModal'

export function Header() {
  const [modalVisibility, setModalVisibility] = useState(false)

  function handleOpenModal() {
    setModalVisibility(true)
  }

  function handleCloseModal() {
    setModalVisibility(false)
  }

  return (
    <>
      <header className="flex justify-center items-start w-full min-h-[14rem] py-8 bg-[#121214]">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl px-6">
          <picture className="flex">
            <img src={faviconImg} alt="" />
          </picture>

          <button
            type="button"
            onClick={handleOpenModal}
            className="transition-colors px-5 py-2 mt-2 rounded-md bg-[#00875F] hover:bg-emerald-600 text-white text-base font-Roboto font-normal"
          >
            Nova transação
          </button>
        </div>
      </header>

      <CreateTransactionModal
        visible={modalVisibility}
        onClose={handleCloseModal}
      />
    </>
  )
}
