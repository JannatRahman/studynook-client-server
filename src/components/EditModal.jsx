"use client";

import { editModal } from "@/lib/rooms/data";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export function EditModalForm({ room }) {
  const router = useRouter()
  const {
    capacity,
    name,
    image,
    description,
    amenities,
    floor,
    hourlyRate,
    _id
  } = room;
  // console.log(room);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const booking = {

      name: formData.get("name"),
      description: formData.get("description"),


      floor: Number(formData.get("floor")) || 0,
      capacity: Number(formData.get("capacity")) || 0,
      hourlyRate: Number(formData.get("hourlyRate")) || 0,

      image: formData.get("imageUrl"),

      amenities: formData.getAll("amenities"),
    };

    // console.log("UPDATED DATA:", booking);

    const result = await editModal(_id, booking);
    // console.log(result);
    if(result.modifiedCount > 0) {
     
      router.refresh()
      toast.success("Room updated successfully")
    }
  };

  return (
    <Modal>
      <Button className="bg-[#84B179] rounded-none font-semibold">
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Room</Modal.Heading>
            </Modal.Header>


            <Modal.Body className="p-6">
              <Surface>
                <form
                  onSubmit={onSubmit}
                  className="p-6 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                    <div className="md:col-span-2">
                      <TextField defaultValue={name} name="name" isRequired>
                        <Label>Room Name</Label>
                        <Input
                          className="bg-[#C7EABB] rounded-xl"
                          placeholder="Enter room name"
                        />
                        <FieldError />
                      </TextField>
                    </div>


                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          className="bg-[#C7EABB] rounded-xl min-h-[120px]"
                          placeholder="Describe the room..."
                        />
                        <FieldError />
                      </TextField>
                    </div>


                    <div className="md:col-span-2">
                      <Label className="block mb-3 font-semibold">
                        Amenities
                      </Label>

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
                            className="flex items-center gap-2 bg-[#C7EABB] p-3 rounded-xl"
                          >
                            <input
                              type="checkbox"
                              name="amenities"
                              value={item}
                              defaultChecked={amenities?.includes(item)}
                            />
                            <span className="text-sm">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>


                    <TextField
                      defaultValue={floor}
                      name="floor"
                      type="number"
                      isRequired
                    >
                      <Label>Floor</Label>
                      <Input
                        type="number"
                        className="bg-[#C7EABB] rounded-xl"
                        placeholder="e.g. 2"
                      />
                      <FieldError />
                    </TextField>


                    <TextField
                      defaultValue={capacity}
                      name="capacity"
                      type="number"
                      isRequired
                    >
                      <Label>Capacity</Label>
                      <Input
                        type="number"
                        className="bg-[#C7EABB] rounded-xl"
                      />
                      <FieldError />
                    </TextField>


                    <TextField
                      defaultValue={hourlyRate}
                      name="hourlyRate"
                      type="number"
                      isRequired
                    >
                      <Label>Hourly Rate</Label>
                      <Input
                        type="number"
                        className="bg-[#C7EABB] rounded-xl"
                      />
                      <FieldError />
                    </TextField>


                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={image}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          className="bg-[#C7EABB] rounded-xl"
                          placeholder="https://example.com/image.jpg"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>


                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      slot="close"
                      variant="secondary"
                      className="rounded-xl"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-xl bg-[#84B179] text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}