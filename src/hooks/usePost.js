import {useMemo} from "react";

export function useSortedPosts(posts, sort) {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => {
                return a[sort].localeCompare(b[sort])
            })
        } else return posts
    }, [sort, posts])
    return sortedPosts
}

export default function usePost(posts, sort, query) {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.title.toLowerCase().includes(query.toLowerCase())
        })
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}
