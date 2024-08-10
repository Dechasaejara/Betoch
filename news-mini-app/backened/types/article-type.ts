export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ArticleRequest {
    q: string;
    searchIn?: 'title' | 'content' | 'title,content' | undefined;
    sources?: string;
    domains?: string;
    excludeDomains?: string;
    from?: string;
    to?: string;
    language?: 'en' | 'fr' | 'de' | undefined;
    sortBy?: 'relevancy' | 'popularity' | 'publishedAt' | undefined;
    pageSize?: number;
    page?: number;
    apiKey: string;
}