import NewsList from "@/app/components/NewsList"
import { fetchNews } from "../../../../lib/fetchNews"
import { categories } from "../../../../constants"

type Props = {
    params: {categoryId: Category}
}

async function NewsCategory({params: { categoryId } }: Props) {
    const news: NewsResponse = await fetchNews( categoryId )

  return (
    <div>
      <h1 className="headerTitle pl-10 pt-5 text-xl">{categoryId}</h1>
      <NewsList news={news}/>
    </div>
  )
}

export default NewsCategory

export async function generateStaticParams() {
 return categories.map(category =>
    ({categoryId: category}) 
 )
}