import { ChangeEvent, useState } from "react"
import { RepositoryType } from "../../context/types"

export const useFilter = (repositories?: RepositoryType[]) => {
  const [filterValue, setFilterValue] = useState('')

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value)
  }

  const filteredRepositories = repositories && repositories.filter((repository) =>
    repository.name.toLocaleLowerCase().startsWith(filterValue.toLocaleLowerCase()) || repository.language.toLocaleLowerCase().startsWith(filterValue.toLocaleLowerCase())
  )

  const clearFilter = () => setFilterValue('')

  return { filterValue, handleFilterChange, filteredRepositories, clearFilter }
}