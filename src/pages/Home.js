// // import { useContext } from "react"
// // import { AppContext } from "../App"
// import { useQuery } from "@tanstack/react-query"
// import Axios from "axios"
// // export const Home = () => {
// //     const { username } = useContext(AppContext)
// //     return <h1>Thıs ıs the Home Page and user is {username}</h1>
// // }

// export const Home = () => {
//     const { data: catData,
//         isLoading,
//         isError,
//         refetch } = useQuery(["cat"], () => {
//             return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
//         })
//     if (isError) {
//         return <h1>Sorry, there was an error</h1>
//     }
//     if (isLoading) {
//         return <h1>Loading ...</h1>
//     }
//     return <h1>Thıs ıs the Home Page <p>{catData?.fact}</p>
//         <button onClick={refetch}>Update Data</button>

//     </h1>
// }