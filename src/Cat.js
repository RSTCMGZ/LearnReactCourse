import { useGetCat } from "./useGetCat"
import { useQuery } from "@tanstack/react-query";

export const Cat = () => {
    const { data, isCatLoading, refetchData } = useGetCat()
    if (isCatLoading) return <h1>loading...</h1>

    return (
        <div>
            <button onClick={refetchData}>refetch</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}