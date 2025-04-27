"use client";
import React, { useState } from "react";

// Sample ride data
const rides = [
  {
    id: 11,
    start_destination_lat: 22.318812,
    start_destination_lng: 73.440857,
    end_destination_lat: 22.317875,
    end_destination_lng: 73.501282,
    from_location: "SH194, Waghodia, Vagodhia Taluka, Vadodara, Gujarat, India",
    to_location: "SH194, Waghodia, Vagodhia Taluka, Vadodara, Gujarat, India",
    pickup_time: "2024-12-05T13:00:53Z",
    price: 10.0,
    state: "b",
    vehicle: {
      id: 1,
      vehicle_number: "12345",
      seat_capacity: 4,
      mileage: 25.0,
      type: "Sedan",
    },
    payment: null,
    user_history: 4,
    driver_history: 1,
  },
  {
    id: 10,
    start_destination_lat: 22.312795,
    start_destination_lng: 73.407898,
    end_destination_lat: 22.325966,
    end_destination_lng: 73.401203,
    from_location: "SH194, Waghodia, Vagodhia Taluka, Vadodara, Gujarat, India",
    to_location: "Waghodia, Vagodhia Taluka, Vadodara, Gujarat, 391760, India",
    pickup_time: "2024-12-05T13:00:36Z",
    price: 10.0,
    state: "b",
    vehicle: {
      id: 1,
      vehicle_number: "12345",
      seat_capacity: 4,
      mileage: 25.0,
      type: "Sedan",
    },
    payment: {
      transaction_id: "64c54a79-1669-495c-9c1d-51b34bb5442b",
      amount: 10.0,
      date: "2024-12-05T07:42:41.072203Z",
      status: "s",
    },
    user_history: 4,
    driver_history: 1,
  },
  {
    id: 9,
    start_destination_lat: 22.290458,
    start_destination_lng: 73.36371,
    end_destination_lat: 22.307701,
    end_destination_lng: 73.446178,
    from_location: "Parking, Vagodhia Taluka, Vadodara, Gujarat, 391760, India",
    to_location: "Parking, Vagodhia Taluka, Vadodara, Gujarat, 391760, India",
    pickup_time: "2024-12-05T12:00:18Z",
    price: 10.0,
    state: "b",
    vehicle: {
      id: 2,
      vehicle_number: "55447",
      seat_capacity: 2,
      mileage: 25.0,
      type: "Sedan",
    },
    payment: {
      transaction_id: "c26da8b2-4006-4c21-8e87-b0cd3c4e824a",
      amount: 10.0,
      date: "2024-12-05T07:28:21.985740Z",
      status: "s",
    },
    user_history: 4,
    driver_history: 3,
  },
];

const RideList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // Show 2 items per page

  // Calculate the start and end index for pagination
  const indexOfLastRide = currentPage * itemsPerPage;
  const indexOfFirstRide = indexOfLastRide - itemsPerPage;
  const currentRides = rides.slice(indexOfFirstRide, indexOfLastRide);

  // Function to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total pages calculation
  const totalPages = Math.ceil(rides.length / itemsPerPage);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        Rides List
      </h2>
      <div className="overflow-x-auto  text-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-900">
            <tr>
              <th className="py-2 px-4 border-b text-left">Ride ID</th>
              <th className="py-2 px-4 border-b text-left">From Location</th>
              <th className="py-2 px-4 border-b text-left">To Location</th>
              <th className="py-2 px-4 border-b text-left">Pickup Time</th>
              <th className="py-2 px-4 border-b text-left">Price (₹)</th>
              <th className="py-2 px-4 border-b text-left">Vehicle</th>
              <th className="py-2 px-4 border-b text-left">Payment Status</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentRides.map((ride) => (
              <tr key={ride.id} className="hover:bg-gray-700">
                <td className="py-2 px-4 border-b">{ride.id}</td>
                <td className="py-2 px-4 border-b">{ride.from_location}</td>
                <td className="py-2 px-4 border-b">{ride.to_location}</td>
                <td className="py-2 px-4 border-b">{"ggggggggg"}</td>
                <td className="py-2 px-4 border-b">₹{ride.price}</td>
                <td className="py-2 px-4 border-b">
                  {ride.vehicle.type} (Number: {ride.vehicle.vehicle_number})
                </td>
                <td className="py-2 px-4 border-b">
                  {ride.payment
                    ? ride.payment.status === "s"
                      ? "Successful"
                      : "Failed"
                    : "Not Paid"}
                </td>
                <td className="py-2 px-4 border-b">
                  {ride.state === "b" ? "Booked" : "Completed"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 mx-1 bg-gray-600 text-white rounded-md hover:bg-gray-500"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2 mx-1 text-white">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-4 py-2 mx-1 bg-gray-600 text-white rounded-md hover:bg-gray-500"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RideList;
