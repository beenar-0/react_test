import {useState} from "react";

export default function useFetching (callback) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetching(type) {
        try {
            setIsLoading(true)
            await callback(type)
        } catch (e) {
            setError(e.message)
        } finally {
            setTimeout(()=>{
                setIsLoading(false)
            },1000)

        }
    }

    return [fetching, isLoading, error]
}