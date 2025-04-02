import dbConnect from '@/app/backend/config/dbConnect'
import { getRoomDetails, updateRoom } from '@/app/backend/controllers/roomControllers'
import { createEdgeRouter } from 'next-connect'
import { NextRequest } from 'next/server'

interface RequestContext {
    params: {
        id: string,
    };
};

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.get(getRoomDetails);
router.put(updateRoom);

export async function GET(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
};

export async function PUT(request: NextRequest, ctx: RequestContext) {
    return router.run(request, ctx);
};