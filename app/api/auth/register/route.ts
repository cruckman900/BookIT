import dbConnect from '@/app/backend/config/dbConnect'
import { registerUser } from '@/app/backend/controllers/authControllers';
import { createEdgeRouter } from 'next-connect'
import { NextRequest } from 'next/server'

interface RequestContext {};

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

await router.post(registerUser);

export async function POST(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
};