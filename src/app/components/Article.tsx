import Image from "next/image"
import ReadMoreButton from "./ReadMoreButton"
import LiveTimestamp from "./LiveTimestamp"

type Props ={
    article: Article
}

function Article({ article }: Props) {
  return (
    <article className=" dark:bg-slate-900 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out">
        {article.image && (
            <img src={article.image} alt={article.title} className="h-56 w-full object-cover rounded-t-lg shadow-md"/>
        )}

        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col p-5">
            <h2 className="font-bold font-serif text-zinc-700 dark:text-gray-200">
                {article.title}
            </h2>
            <section className="flex-1 mt-5">
                <p className="line-clamp-2 dark:text-gray-400 text-zinc-800 text-sm font-serif">{article.description}</p>
            </section>

            <footer className="text-sm text-right ml-auto flex space-x-1 pt-5 italic text-gray-500">
                <p>{article.source} -</p>
                <p><LiveTimestamp time={article.published_at}/></p>
            </footer>
            </div> 

            {/* Read More button */}
            <ReadMoreButton article={article}/>
        </div>
    </article>
  )
}

export default Article
