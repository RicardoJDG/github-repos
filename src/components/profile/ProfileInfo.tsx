import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react"
import PeopleIcon from "../../icons/PeopleIcon"
import EmailIcon from "../../icons/EmailIcon"
import { useFetchedUser } from "../../context/fetchedUserHook"

const ProfileInfo = () => {
  const { fetchedUserData } = useFetchedUser()
  if (!fetchedUserData) {
    return
  }
  return (
    <div className="profile-column hidden sm:block">
      <Card className="flex flex-col items-center h-full px-4">
        <CardHeader className="flex flex-col items-center">
          <Image
            alt="Avatar"
            src={fetchedUserData.avatar_url}
            className="rounded-full w-1/2 m-auto mt-4"
          />
          {fetchedUserData.name && (
            <h1 className="pt-8 font-bold text-4xl">{fetchedUserData.name}</h1>
          )}
          <h2 className="pt-2">{fetchedUserData.login}</h2>
        </CardHeader>
        <CardBody>
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
          {fetchedUserData.organizations.length > 0 && (
            <>
              <h2 className="mb-2">Organizations</h2>
              <Divider />
              <div className="overflow-auto">
                {fetchedUserData.organizations.map((org) => (
                  <>
                    <div className="my-4">
                      <div className="flex">
                        <Card
                          className="border-none dark:bg-default-100/50 w-full"
                          shadow="sm"
                          isBlurred
                        >
                          <CardBody>
                            <div className="flex items-center">
                              <Image
                                alt={org.login}
                                src={org.avatar_url}
                                className="h-16 w-16"
                              />
                              <div className="flex flex-col mx-8 ">
                                <h2>{org.name}</h2>
                                <h4>{org.login}</h4>
                                <p>{org.description}</p>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </div>
  )
}

export default ProfileInfo
