import Room, { IRoom } from "../backend/models/room";
import mongoose, { Model } from "mongoose";
import { rooms } from "./data";
// require("dotenv").config({ path: 'next.config.js });

const seedRooms = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/bookit");
    
        const RoomModel = Room as Model<IRoom >

        await RoomModel.deleteMany();
        console.log("Rooms are deleted.");

        await RoomModel.insertMany(rooms);
        console.log("Rooms are added.")

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

seedRooms();