import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Divider, Image } from "@nextui-org/react"
import { useFetchedUser } from "../../context/fetchedUserHook"
import EmailIcon from "../../icons/EmailIcon"
import PeopleIcon from "../../icons/PeopleIcon"

const GithubProfile = () => {
  const { fetchedUserData } = useFetchedUser()
  if (typeof fetchedUserData === "string" || !fetchedUserData) {
    return
  }
  return (
    <>
      <div className="profile-column">
        <Card className="flex flex-col items-center h-full px-4">
          <CardHeader className="flex flex-col items-center">
            <Image
              alt="Avatar"
              src={fetchedUserData.avatar_url}
              className="rounded-full w-1/2 m-auto mt-4"
            />
            <h1 className="pt-8">{fetchedUserData.login}</h1>
          </CardHeader>
          <CardBody>
            <p className="py-4">{fetchedUserData.bio}</p>
            <div className="flex justify-between">
              <PeopleIcon className="h-6 w-6" />
              <p>{fetchedUserData.followers} Followers</p>
              <Divider orientation="vertical" />
              <p>{fetchedUserData.following} Following</p>
            </div>
            <div className="flex mt-4">
              <EmailIcon className="w-6 h-6" />
              <h4 className="ml-2">
                {fetchedUserData?.email ?? "ricardojdg13@gmail.com"}
              </h4>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="repos-column">Repos</div>
    </>
  )
}

export default GithubProfile
