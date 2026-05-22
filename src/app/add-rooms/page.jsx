'use client'

import {
  FieldError,
  Input,
  Label,
  TextField,
  TextArea,
  Button,
  Card
} from "@heroui/react";

import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddRoomsPage = () => {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const booking = {
      Name: formData.get("name"),
      description: formData.get("description"),
      floor: Number(formData.get("floor")),
      capacity: Number(formData.get("capacity")),
      hourlyRate: Number(formData.get("hourlyRate")),
      image: formData.get("image"),

      // multiple selected amenities
      amenities: formData.getAll("amenities"),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/studyrooms`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(booking),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Room has been added successfully");

        // redirect
        router.push("/my-listings");
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to add room");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] px-3 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">

      <Card className="w-full max-w-5xl mx-auto rounded-2xl shadow-xl">

        <form
          onSubmit={onSubmit}
          className="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8"
        >

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

            {/* Room Name */}
            <div className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Room Name</Label>
                <Input
                  className="bg-[#C7EABB] rounded-xl w-full"
                  placeholder="Enter room name"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Describe the room details..."
                  className="bg-[#C7EABB] rounded-xl w-full min-h-[120px]"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Amenities */}
            <div className="md:col-span-2">
              <label className="block mb-3 font-semibold text-sm text-gray-700">
                Amenities
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                {[
                  "Projector",
                  "Conference Table",
                  "WiFi",
                  "AC",
                  "Whiteboard",
                  "Snacks",
                  "Library Access",
                  "Smart TV",
                  "Desk Lamp",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 bg-[#C7EABB] p-3 rounded-xl cursor-pointer hover:scale-[1.02] transition"
                  >
                    <input
                      type="checkbox"
                      name="amenities"
                      value={item}
                      className="w-4 h-4 accent-[#84B179]"
                    />

                    <span className="text-sm font-medium">
                      {item}
                    </span>
                  </label>
                ))}

              </div>
            </div>

            {/* Floor */}
            <TextField name="floor" type="number" isRequired>
              <Label>Floor</Label>
              <Input
                type="number"
                placeholder="e.g. 3"
                className="bg-[#C7EABB] rounded-xl w-full"
              />
              <FieldError />
            </TextField>

            {/* Capacity */}
            <TextField name="capacity" type="number" isRequired>
              <Label>Capacity</Label>
              <Input
                type="number"
                placeholder="e.g. 4"
                className="bg-[#C7EABB] rounded-xl w-full"
              />
              <FieldError />
            </TextField>

            {/* Hourly Rate */}
            <TextField name="hourlyRate" type="number" isRequired>
              <Label>Hourly Rate (per hour)</Label>
              <Input
                type="number"
                min="0"
                step="1"
                placeholder="e.g. 50"
                className="bg-[#C7EABB] rounded-xl w-full"
              />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="bg-[#C7EABB] rounded-xl w-full"
                />
                <FieldError />
              </TextField>
            </div>

          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full rounded-xl bg-[#84B179] text-white font-semibold text-base sm:text-lg py-3 hover:opacity-90 transition"
          >
            Add Room
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default AddRoomsPage;