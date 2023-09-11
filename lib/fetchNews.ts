import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage"

export const fetchNews = async (category?: Category | string, keywords?: string, isDynamic?: boolean) => {
    //GraphQl query
    const query = gql`
    query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
        ){
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "us, gb, az, ru"
            sort: "published_desc"
            keywords: $keywords
            ){
            data{
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination{
                count
                limit
                offset
                total
            }
        }
    }
    `
    
    //Fetch function with Next js 13 caching
const res = await fetch('https://albox.stepzen.net/api/intent-fish/__graphql', {
    method: 'POST',
    cache: isDynamic ? "no-cache" : "default",
    next: isDynamic ? {revalidate: 0} : {revalidate: 20},
    headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
        query,
        variables: {
            access_key: process.env.MEADIASTACK_API_KEY,
            categories: category,
            keywords: keywords
        }
    })
})



const newsResponse = await res.json()

    //Sort function by images vs not images present

    const news = sortNewsByImage(newsResponse.data.myQuery)
    
    //return result 

    return news

}