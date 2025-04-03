import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";

// Get all rooms  =>  //api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {
    const resPerPage: number = 8;

    const rooms = await Room.find();

    return NextResponse.json({
        success: true,
        resPerPage,
        rooms,
    });
});

// Create new room  =>  /api/admin/rooms
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {
    const body = await req.json();

    const room = await Room.create(body);

    return NextResponse.json({
        success: true,
        room,
    });
});

// Get room details  =>  /api/rooms/:id
export const getRoomDetails = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = await params;

    const room = await Room.findById(id);

    if (!room) {
        throw new ErrorHandler('Room not found', 404);
    }

    return NextResponse.json({
        success: true,
        room,
    });
});

// Update room details  =>  /api/admin/rooms/:id
export const updateRoom = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = await params;

    let room = await Room.findById(id);
    const body = await req.json();

    if (!room) {
        throw new ErrorHandler('Room not found', 404);
    }

    room = await Room.findByIdAndUpdate(id, body, {
        new: true,
    });

    return NextResponse.json({
        success: true,
        room,
    });
});

// Delete room details  =>  /api/admin/rooms/:id
export const deleteRoom = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = await params;

    let room = await Room.findById(id);

    if (!room) {
        throw new ErrorHandler('Room not found', 404);
    }

    // TODO - Delete images associated with the room

    await Room.deleteOne()

    return NextResponse.json({
        success: true,
    });
});