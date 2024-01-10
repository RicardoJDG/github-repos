import {
  Modal,
  ModalContent,
  ModalHeader,
  Image,
  ModalBody,
  Divider,
  ModalFooter,
  Button
} from "@nextui-org/react"
import { useFetchedUser } from "../../context/fetchedUserHook"
import PeopleIcon from "../../icons/PeopleIcon"
import EmailIcon from "../../icons/ForkIcon"
import React from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const ModalProfile: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { fetchedUserData } = useFetchedUser()

  if (!fetchedUserData) {
    return
  }

  return (
    <Modal size="xs" isOpen={isOpen} onClose={onClose} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <Image
                alt="Avatar"
                src={fetchedUserData.avatar_url}
                className="rounded-full w-1/2 m-auto mt-4"
              />
            </ModalHeader>
            <ModalBody>
              <p className="py-4">{fetchedUserData.bio}</p>
              <div className="flex justify-between my-4">
                <PeopleIcon className="h-6 w-6" />
                <p>{fetchedUserData.followers} Followers</p>
                <Divider orientation="vertical" />
                <p>{fetchedUserData.following} Following</p>
              </div>
              {fetchedUserData.email && (
                <div className="flex my-4">
                  <EmailIcon className="w-6 h-6" />
                  <h4 className="ml-2">{fetchedUserData.email}</h4>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ModalProfile
