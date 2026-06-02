"use client";

import { editModal } from "@/lib/rooms/data";
import {
  Button,
  FieldError,
  Form,
  input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { Edit } from "lucide-react";
// import { Edit } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

export function EditModalForm({ room }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    capacity,
    name,
    image,
    description,
    amenities,
    floor,
    hourlyRate,
    _id,
  } = room;

  // console.log(room, name);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData(e.currentTarget);

      const updatedRoom = {
        name: formData.get("name"),
        description: formData.get("description"),

        floor: Number(formData.get("floor")) || 0,
        capacity: Number(formData.get("capacity")) || 0,
        hourlyRate: Number(formData.get("hourlyRate")) || 0,

        image: formData.get("imageUrl"),

        amenities: formData.getAll("amenities"),
      };

      console.log("UPDATED ROOM:", updatedRoom);

      const result = await editModal(_id, updatedRoom);

      console.log("UPDATE RESULT:", result);

      if (result?.modifiedCount > 0) {
        toast.success("Room updated successfully!");
        router.refresh();
        return;
      }

      toast.info("No changes were made.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update room");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <Button className="bg-[#84B179] rounded-none font-semibold">Edit</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Edit Room</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Form onSubmit={onSubmit} className="space-y-6 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <TextField
                      // defaultValue={name}
                      isRequired
                    >
                      <Label>Room Name</Label>

                      <input
                        className="bg-[#C7EABB] rounded-xl px-3 py-2"
                        placeholder="Enter room name"
                        name="name"
                        defaultValue={name}
                      />

                      <FieldError />
                    </TextField>
                  </div>

                  <div className="md:col-span-2">
                    <TextField
                      name="description"
                      defaultValue={description}
                      isRequired
                    >
                      <Label>Description</Label>

                      <TextArea
                        className="bg-[#C7EABB] rounded-xl min-h-[120px]"
                        placeholder="Describe the room"
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

                  <TextField isRequired>
                    <Label>Floor</Label>

                    <select
                      name="floor"
                      defaultValue={String(floor)}
                      className="w-full bg-[#C7EABB] rounded-xl px-3 py-2 border"
                    >
                      <option value="1">1st Floor</option>
                      <option value="2">2nd Floor</option>
                      <option value="3">3rd Floor</option>
                    </select>

                    <FieldError />
                  </TextField>

                  <TextField type="number" isRequired>
                    <Label>Capacity</Label>

                    <input
                      name="capacity"
                      type="number"
                      defaultValue={String(capacity)}
                      className="bg-[#C7EABB] rounded-xl px-3 py-2"
                    />

                    <FieldError />
                  </TextField>

                  <TextField type="number" isRequired>
                    <Label>Hourly Rate</Label>

                    <input
                      name="hourlyRate"
                      type="number"
                      defaultValue={String(hourlyRate)}
                      className="bg-[#C7EABB] rounded-xl px-3 py-2"
                    />

                    <FieldError />
                  </TextField>

                  <div className="md:col-span-2">
                    <TextField isRequired>
                      <Label>Image URL</Label>

                      <input
                        type="url"
                        name="imageUrl"
                        defaultValue={image}
                        className="bg-[#C7EABB] rounded-xl px-3 py-2"
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
                    isDisabled={loading}
                    className="rounded-xl bg-[#84B179] text-white px-3 py-2"
                  >
                    {loading ? "Updating..." : "Update Room"}
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}