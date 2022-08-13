import { dateFormatter, priceFormatter } from '@/utils/format'

type TransactionItemProps = {
  transaction: {
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    createdAt: string
  }
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  return (
    <tr>
      <td
        className="py-5 px-8 rounded-tl-lg rounded-bl-lg bg-[#29292E]"
        width="50%"
      >
        {transaction.description}
      </td>
      <td className="py-5 px-8 bg-[#29292E]">
        {transaction.type === 'income' ? (
          <span className="flex items-center text-[#00B37E]">
            {priceFormatter.format(transaction.price)}
          </span>
        ) : (
          <span className="flex items-center text-[#F75A68]">
            {priceFormatter.format(transaction.price * -1)}
          </span>
        )}
      </td>
      <td className="py-5 px-8 bg-[#29292E]">{transaction.category}</td>
      <td className="py-5 px-8 rounded-tr-lg rounded-br-lg bg-[#29292E]">
        {dateFormatter.format(new Date(transaction.createdAt))}
      </td>
    </tr>
  )
}
