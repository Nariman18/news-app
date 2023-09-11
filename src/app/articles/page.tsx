import { notFound } from "next/navigation"
import LiveTimestamp from "../components/LiveTimestamp";

type Props = {
  searchParams?: Article
}

function ArticlePage({ searchParams }: Props) {

  if (searchParams && Object.entries(searchParams).length === 0 || !searchParams) {
    return notFound()
  }  {

  }

 

  const article: Article = searchParams;
  
 

  return (
    <article>
      <section className="flex flex-col pt-7 pb-7 lg:px-10">
        {article.image && (
          <img src={article.image} alt={article.title} className="h-50 w-50 md:h-[300px] md:w-[500px] max-w-md mx-auto md:max-w-lg object-cover rounded-lg shadow-md"/>
        )}

        <div className="px-10 pt-10">
          <h1 className="headerTitle text-lg md:text-3xl pb-5 font-serif">&quot;{article.title}&quot;</h1>

          <div className="pb-5 text-xs md:text-sm flex divide-x-2 space-x-4 divide-zinc-700 dark:divide-gray-400">
            <h2 className="font-bold font-serif">By: {article.author}</h2>
            <h2 className="font-bold font-serif pl-4 ">Source: {article.source}</h2>
            <p className="pl-4 font-serif"><LiveTimestamp time={article.published_at}/></p>
          </div>

          <p className="pt-4 font-serif md:text-lg">{article.description}</p>
        </div>
      </section>
    </article>
  )
}

export default ArticlePage
