import { useEffect, useState } from "react"
import { getSuggestions } from "../../services/search"
import { FetchedUser } from "../../context/types"

export const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState('')
  const [suggestions, setSuggestions] = useState<Array<FetchedUser>>([])

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
  }

  useEffect(() => {
    if (searchValue.length > 0) {
      getSuggestions(searchValue).then((suggestions) => suggestions && setSuggestions(suggestions.items))
    }
  }, [searchValue])

  const resetInput = () => setSearchValue('')

  return { searchValue, handleSearchChange, resetInput, suggestions }
}