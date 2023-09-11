'use client'

import { useRouter } from "next/navigation"

type Props = { 
    article: Article
}

function ReadMoreButton({ article } : Props) {
    const router = useRouter()

    const handleClick = () => {
        const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join('&')
        const url = `/articles?${queryString}`
        router.push(url)
    }

  return (
    <button onClick={handleClick} className="bg-red-400 h-10 w-full rounded-b-lg dark:text-zinc-700 font-serif hover:bg-red-500">
      Read More
    </button>
  )
}

export default ReadMoreButton
