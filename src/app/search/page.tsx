import { fetchNews } from "../../../lib/fetchNews"
import NewsList from "../components/NewsList"

type Props = {
    searchParams?: { term: string}
}

async function SearchPage({ searchParams }: Props) {
    const news: NewsResponse = await fetchNews("general", searchParams?.term, true)

  return (
    <div>
      <h1 className="font-bold font-serif headerTitle text-2xl text-zinc-700 dark:text-white pl-10 pt-3">Search For: {searchParams?.term}</h1>
      <NewsList news={news}/>
    </div>
  )
}

export default SearchPage
