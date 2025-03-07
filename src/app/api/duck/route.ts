import { NextResponse } from 'next/server';

interface DuckApiResponse {
  url: string;
}

export async function GET() {
  try {
    const response = await fetch('https://random-d.uk/api/random');
    const data: DuckApiResponse = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
}
