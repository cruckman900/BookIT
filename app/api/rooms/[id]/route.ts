import dbConnect from '@/backend/config/dbConnect'
import { getRoomDetails } from '@/backend/controllers/roomControllers'
import { createEdgeRouter } from 'next-connect'
import { NextRequest } from 'next/server'

interface RequestContext {
    params: {
        id: string,
    };
};

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

await router.get(getRoomDetails);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
};