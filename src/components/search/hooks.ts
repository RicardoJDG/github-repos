import { ChangeEvent, useState } from "react"
import { getUser } from "../../services/search"

export const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  return { searchValue, handleSearchChange }
}