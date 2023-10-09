import Image from 'next/image'
import { categories } from '../../constants'
import { fetchNews } from '../../lib/fetchNews'
import NewsList from './components/NewsList'
import response from '../../response.json'

export default async function Home() {

  const news: NewsResponse = (await fetchNews(categories.join(',')))
  
  
  return (
    <div>
      <NewsList news={news}/>
    </div>
  )
}
