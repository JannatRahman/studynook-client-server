'use client';


import { authClient } from "@/lib/auth-client";
import { Button, Card, FieldError, Input, Label, TextArea, TextField } from "@heroui/react";
import { toast } from "react-toastify";


const AddRoomsPage = () => {

  const onSubmit =async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const roomData = Object.fromEntries(formData.entries());
   const { data: session } = await authClient.getSession();
    roomData.userId = session.user.id;
    // console.log(roomData);

     const {data:tokenData} =await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/studyrooms`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`
          },
          body: JSON.stringify(roomData)
        });

    
      const data = await res.json();
      // console.log(data);
      if (res.ok) {
        toast.success("Room added successfully");
        router.push("/my-listings");
      } else {
        toast.error(data?.message || "Something went wrong");
      }

   
  };
   // const roomData = {
    //   name: formData.get("destinationName"),
    //   description: formData.get("description"),
    //   floor: formData.get("floor"),
    //   capacity: Number(formData.get("capacity")),
    //   hourlyRate: Number(formData.get("hourlyRate")),
    //   image: formData.get("imageUrl"),
    //   amenities: formData.getAll("amenities"),
    // };

    // try {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD] px-3 sm:px-6 lg:px-10 py-10">

      <Card className="w-full max-w-5xl mx-auto p-6 rounded-2xl shadow-xl">

        <form
         onSubmit={onSubmit}
          className="space-y-6">

          {/* ROOM NAME */}
          <TextField name="name" isRequired>
            <Label>Room Name</Label>
            <Input
              className="bg-[#C7EABB] rounded-xl"
              placeholder="Enter room name"
            />
            <FieldError />
          </TextField>

          {/* DESCRIPTION */}
          <TextField name="description" isRequired>
            <Label>Description</Label>
            <TextArea
              className="bg-[#C7EABB] rounded-xl min-h-[120px]"
              placeholder="Describe the room"
            />
            <FieldError />
          </TextField>

          {/* AMENITIES */}
          <div>
            <Label>Amenities</Label>

            <div className="grid grid-cols-2 gap-3 mt-2">

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
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" name="amenities" value={item} />
                  {item}
                </label>
              ))}

            </div>
          </div>

          {/* FLOOR */}
          <TextField name="floor" isRequired>
            <Label>Floor</Label>
            <Input type="text" placeholder="e.g. 2nd Floor" />
            <FieldError />
          </TextField>

          {/* CAPACITY */}
          <TextField name="capacity" isRequired>
            <Label>Capacity</Label>
            <Input type="number" placeholder="e.g. 4" />
            <FieldError />
          </TextField>

          {/* HOURLY RATE */}
          <TextField name="hourlyRate" isRequired>
            <Label>Hourly Rate</Label>
            <Input type="number" placeholder="e.g. 50" />
            <FieldError />
          </TextField>

          {/* IMAGE */}
          <TextField name="image" isRequired>
            <Label>Image URL</Label>
            <Input type="url" placeholder="https://image.com/photo.jpg" />
            <FieldError />
          </TextField>

          {/* SUBMIT */}
          <Button
            type="submit"
            className="w-full bg-[#84B179] text-white font-semibold py-3 rounded-xl"
          >
            Add Room
          </Button>

        </form>

      </Card>

    </div>
  );
}

export default AddRoomsPage;