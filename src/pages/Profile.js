import ChangeProfile from "../components/ChangeProfile"
import { useContext, userContext } from "react"
import { AppContext } from "../App"
export const Profile = () => {
    const { username } = useContext(AppContext)
    return <div>PROFILE, user is: {username}
        {/* <ChangeProfile setUsername={props.setUsername} /> */}
    </div>
}