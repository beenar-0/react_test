import {useMemo} from "react";

export function useSortedPosts(posts, sort) {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => {
                if (sort === 'price' ) {
                    if (+a.price > +b.price) return 1
                    else return -1
                } else return a[sort].localeCompare(b[sort])
            })
        } else return posts
    }, [sort, posts])
    return sortedPosts
}

export default function usePost(posts, sort, query) {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => {
            return post.name.toLowerCase().includes(query.toLowerCase())
        })
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}
