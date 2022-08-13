import { useMemo } from 'react'

import { generatePagesArray } from '@/utils/generate-pages-array'

type PaginationProps = {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {
  const lastPage = useMemo(
    () => Math.ceil(totalCountOfRegisters / registersPerPage),
    [totalCountOfRegisters, registersPerPage]
  )

  const previousPages = useMemo(
    () =>
      currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [],
    [currentPage]
  )

  const nextsPages = useMemo(
    () =>
      currentPage < lastPage
        ? generatePagesArray(
            currentPage,
            Math.min(currentPage + siblingsCount, lastPage)
          )
        : [],
    [currentPage, lastPage]
  )

  return (
    <nav className="flex justify-center gap-2 mt-3">
      {currentPage > 1 + siblingsCount && (
        <>
          <button
            type="button"
            className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#323238] hover:opacity-60 text-white"
            onClick={() => onPageChange(1)}
          >
            1
          </button>

          {currentPage > 2 + siblingsCount && (
            <span className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#29292E]/25">
              &nbsp;
            </span>
          )}
        </>
      )}

      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <button
            key={page}
            type="button"
            className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#323238] hover:opacity-60 text-white"
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

      <button
        type="button"
        className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#015F43] hover:bg-[#00875F] text-white"
      >
        {currentPage}
      </button>

      {nextsPages.length > 0 &&
        nextsPages.map((page) => (
          <button
            type="button"
            key={page}
            className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#323238] hover:opacity-60 text-white"
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <span className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#29292E]/25">
              &nbsp;
            </span>
          )}

          <button
            type="button"
            className="transition-colors flex justify-center items-center w-10 h-10 border-0 rounded bg-[#323238] hover:opacity-60 text-white"
            onClick={() => onPageChange(lastPage)}
          >
            {lastPage}
          </button>
        </>
      )}
    </nav>
  )
}
