import { ChangeEvent, useState } from "react"

export const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  return { searchValue, handleSearchChange }
}