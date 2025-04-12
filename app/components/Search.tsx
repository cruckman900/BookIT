"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Search = () => {
    const [location, setLocation] = useState("");

    const router = useRouter();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        router.push(`/?location=${location}`)
    }

    return (
        <div className="row wrapper mt-5">
            <div className="col-10 col-lg-5">
                <form className="shadow rounded" onSubmit={submitHandler}>
                    <h2 className="mb-3">Search Rooms</h2>
                    <div className="form-group mt-3">
                        <label htmlFor="location_field" className="mb-1">
                            {" "}
                            Location{" "}
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="location_field"
                            placeholder="new york"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>


                    <div className="form-group mt-3">
                        <label htmlFor="guest_field" className="mb-1"> No. of Guests </label>
                        <select className="form-select" id="guest_field">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>


                    <div className="form-group mt-3">
                        <label htmlFor="room_type_field" className="mb-1"> Room Type </label>
                        <select className="form-select" id="room_type_field">
                            <option value="King">King</option>
                            <option value="Single">Single</option>
                            <option value="Twins">Twins</option>
                        </select>
                    </div>


                    <button type="submit" className="btn form-btn w-100 py-2">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search