// src/app/api/duck/route.ts
import { NextResponse } from 'next/server';

interface DuckApiResponse {
  url: string;
}

export async function GET() {
    console.log("Fetching duck image...");
  try {
    const response = await fetch('https://random-d.uk/api/random');
    const data: DuckApiResponse = await response.json();
    console.log("Duck image fetched:", data.url);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
