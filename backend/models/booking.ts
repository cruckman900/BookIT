import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
    room: mongoose.Schema.Types.ObjectId,
    user: mongoose.Schema.Types.ObjectId,
    checkInDate: Date,
    checkOutDate: Date,
    amountPaid: number,
    daysOfStay: number,
    paymentInfo: {
        id: string,
        status: string,
    },
    paidAt: Date,
    createdAt: Date,
};

const bookingSchema: Schema<IBooking> = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Room",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    amountPaid: {
        type: Number,
        required: true,
    },
    daysOfStay: {
        type: Number,
        required: true,
    },
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    paidAt: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Booking || mongoose.model<IBooking>("Booking", bookingSchema);