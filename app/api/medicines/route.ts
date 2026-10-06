import {NextResponse} from 'next/server';import {medicines} from '@/lib/data';export async function GET(){return NextResponse.json({data:medicines,updatedAt:new Date().toISOString()})}
