import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Button,
  Spinner,
  useDisclosure
} from "@nextui-org/react"
import { useSearchValue } from "./hooks"
import React, { FormEvent, useState } from "react"
import { getUser } from "../../services/search"
import { useFetchedUser } from "../../context/fetchedUserHook"
import ModalProfile from "../profile/ModalProfile"

interface SearchInputProps {
  isInHeader?: boolean
  caughtError?: boolean
  errorMsg?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  isInHeader = false,
  caughtError = false,
  errorMsg
}) => {
  const { searchValue, handleSearchChange, resetInput, suggestions } =
    useSearchValue()
  const { fetchedUserData, setFetchedUserData } = useFetchedUser()
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [loading, setLoading] = useState(false)

  const handleSearchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      const userData = await getUser(searchValue)
      setFetchedUserData(userData)
    } catch (error) {
      console.error(error)
    } finally {
      resetInput()
      setLoading(false)
    }
  }

  return (
    <>
      <form
        className="search-input items-center flex"
        onSubmit={handleSearchUser}
      >
        {fetchedUserData && isInHeader && (
          <Avatar
            src={fetchedUserData.avatar_url}
            isBordered
            isFocusable
            className="sm:hidden block cursor-pointer"
            onClick={onOpen}
          />
        )}
        <Autocomplete
          label="Search any Github user"
          className="min-w-[250px] sm:px-0 px-4"
          inputValue={searchValue}
          onInputChange={handleSearchChange}
          items={suggestions}
          data-test-id="search-bar"
          errorMessage={errorMsg}
          isInvalid={caughtError && searchValue.length === 0}
        >
          {(item) => (
            <AutocompleteItem data-test-id={item.login} key={item.id}>
              {item.login}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Button
          type="submit"
          className="w-1/6 mx-4"
          size="lg"
          color="primary"
          disabled={searchValue.length === 0}
        >
          Search
        </Button>
      </form>
      <div className="loading-spinner">{loading && <Spinner />}</div>
      <ModalProfile isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default SearchInput
