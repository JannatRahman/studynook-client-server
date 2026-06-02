"use client";

import { Calendar } from "lucide-react";
import {
  Button,
  DateField,
  Description,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  TimeField,
} from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
// import { toast } from "sonner";

export function OpenModal({ room }) {
  const [bookingDate, setBookingDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [message, setMessage] = useState("");

  const { data: session } = useSession();
  const router = useRouter();
  // console.log(room);


  const handleBooking = async (e) => {

    e.preventDefault();


    try {
      const { data: jwtData } = await authClient.token();
      const token = jwtData?.token;

      if (!token) {
        toast.error("Authentication failed");
        return;
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        toast.error("NEXT_PUBLIC_API_URL is missing");
        return;
      }

      const start =
  startTime.hour + startTime.minute / 60;
const end =
  endTime.hour + endTime.minute / 60;

const totalHours = end - start;

const totalCost = totalHours * room.hourlyRate;

      const bookingData = {
        userId: session?.user?.id,
        studentName: session?.user?.name,
        studentEmail: session?.user?.email,
       

        roomId: room?._id,
        roomTitle: room?.name,
        roomPrice: room?.hourlyRate,
        image: room?.image,
        totalCost,
        status: 'active',

        bookingDate,
        startTime,
        endTime,
        message,
      };

    // console.log(totalCost);

      // console.log("Booking Data:", bookingData);

      const res = await fetch(
        `${ apiUrl }/booking/${ room?._id }`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ token }`,
          },
    body: JSON.stringify(bookingData),
        }
      );

  const data = await res.json();

  if (!res.ok) {
    toast.error(data?.message || "Booking failed");
    return;
  }

  toast.success("Booking successful!");
  router.push("/my-bookings");
} catch (error) {
  // console.error(error);
  toast.error("Something went wrong");
}
  };

return (
  <Modal>
    <Button className="bg-[#84B179] w-full font-bold shadow-lg mt-4">
      Book Now
    </Button>

    <Modal.Backdrop>
      <Modal.Container placement="auto">
        <Modal.Dialog className="sm:max-w-md">
          <Modal.CloseTrigger />

          <Modal.Body className="p-6">
            <Surface variant="default">
              <form
                onSubmit={handleBooking}
                className="flex flex-col gap-4"
              >
                <DateField
                  value={bookingDate}
                  onChange={setBookingDate}
                  className="w-full"
                >
                  <Label>Booking Date</Label>

                  <DateField.Group className="bg-[#C7EABB]">
                    <DateField.Prefix>
                      <Calendar className="size-4 text-muted" />
                    </DateField.Prefix>

                    <DateField.Input>
                      {(segment) => (
                        <DateField.Segment segment={segment} />
                      )}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>

                <TimeField
                  value={startTime}
                  onChange={setStartTime}
                >
                  <Label>Start Time</Label>

                  <TimeField.Group>
                    <TimeField.Input>
                      {(segment) => (
                        <TimeField.Segment segment={segment} />
                      )}
                    </TimeField.Input>
                  </TimeField.Group>

                  <Description>
                    Enter the start time
                  </Description>
                </TimeField>

                <TimeField
                  value={endTime}
                  onChange={setEndTime}
                >
                  <Label>End Time</Label>

                  <TimeField.Group>
                    <TimeField.Input>
                      {(segment) => (
                        <TimeField.Segment segment={segment} />
                      )}
                    </TimeField.Input>
                  </TimeField.Group>

                  <Description>
                    Enter the end time
                  </Description>
                </TimeField>

                <TextField variant="secondary">
                  <Label>Message</Label>

                  <Input
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    placeholder="Enter your message"
                    className="bg-[#C7EABB]"
                  />
                </TextField>

                <p className="bg-[#C7EABB] p-2 rounded-xl font-bold">
                  Total Cost: ${room?.hourlyRate
 || 0}
                </p>

                <Modal.Footer>
                  <Button
                    slot="close"
                    variant="secondary"
                  >
                    Cancel
                  </Button>

                  <Button type="submit">
                    Confirm Booking
                  </Button>
                </Modal.Footer>
              </form>
            </Surface>
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
)
}