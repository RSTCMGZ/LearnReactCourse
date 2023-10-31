import { useContext, userContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const { username } = useContext(AppContext)
    return <h1>Thıs ıs the Home Page and user is {username}</h1>
}