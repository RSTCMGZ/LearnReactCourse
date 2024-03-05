import { useState } from "react"
import { login, logout } from "../store.ts"
import { useDispatch, useSelector } from "react-redux"
export const Login = () => {
    const [newUsername, setnewUsername] = useState("")
    const Dispatch = useDispatch();
    const username = useSelector((state: any) => state.value.username)
    return (
        <h1>
            {username}
            <input onChange={(e) => { setnewUsername(e.target.value) }} />
            <button onClick={() => Dispatch(login({ username: newUsername }))}>Submit Login</button>
            <button>Logout</button>
        </h1>adasd
    )
}

export default Login