'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

function SearchBox() {
    const [input, setInput] = useState("")
    const router = useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!input) return;

        router.push(`/search?term=${input}`)
    }

  return (
    <form onSubmit={handleSearch} className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-zinc-700 outline-none bg-transparent dark:text-red-500" placeholder="Search News"/>
      <button className="dark:text-red-500 text-zinc-900 disabled:cursor-not-allowed disabled:text-gray-400" disabled={!input} type="submit">Search</button>
    </form>
  )
}

export default SearchBox
