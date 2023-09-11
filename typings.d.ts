type Article = {
    author: string | null,
    category: string,
    title: string,
    url: string,
    image: string | null,
    published_at: string,
    country: string,
    description: string,
    language: string,
    source: string
}



type Pagination = {
    count: Int
    limit: Int
    offset: Int
    total: Int
}

type NewsResponse = {
    pagination: Pagination;
    data: Article[]
}

type Category = | "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology"