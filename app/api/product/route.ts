import { NextResponse } from 'next/server'

export const GET = async () => {
    const api = process.env.NASA_API_KEY;
    const data = await fetch("https://newsapi.org/v2/everything?q=ton-coin&language=en&apiKey=17afe42d180f45b6ba1c2f5e58e49057", { next: { revalidate: 500 } });
    const jsonData = await data.json();
    return NextResponse.json(jsonData, { status: 200 })

}