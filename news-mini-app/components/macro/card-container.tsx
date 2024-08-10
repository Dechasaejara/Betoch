'use client'
import { fetchNews } from "@/backened/actions/fetch-news"
import { Article, ArticleRequest } from "@/backened/types/article-type";
import { getLastmonthDate } from "@/lib/utils";
import Card from "./card";
import { useEffect, useState } from "react";
import UrlSearch from "./url-search";

interface CardContainerProps {
    articles: Article[]
}

export const CardContainer = ({ articles }: CardContainerProps) => {
    articles = articles.filter(article => article.urlToImage !== '');
    articles = articles.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
    return <div className='flex flex-col p-4 container' >
        <UrlSearch placeholder="Search anything ...." />
        <article className="blog-grid-container">
            {articles && articles.map((article, index) => (
                <Card key={index} article={article} />
            ))}
        </article>

    </div>
}