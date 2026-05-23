"use client";


import { Calendar, Edit } from "lucide-react";
import {Button, DateField, Description, FieldError, Input, Label, Modal, Surface, TextField, TimeField} from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";



export function OpenModal({room}) {
   



  const [bookingDate, setBookingDate] = useState(null);
  console.log(new Date(bookingDate));
    const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);


  
  

  const { data: session } = useSession()
    const router = useRouter();


    

  const handleBooking = async () => {
          const { data: jwtData } = await authClient.token();
          const token = jwtData?.token;
          if (!token) {
              toast.error("authentication failed. Booking not done.")
              return;
          }
          const updatedData = {
              userId: session?.user?.id,
              studentName: session?.user?.name,
              studentEmail: session?.user?.email,
              RoomTitle: room?.name,
              
          }
  
  
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${room?._id}`, {
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`
              },
              body: JSON.stringify(updatedData)
          })
  
          const data = await res.json();
          if (!data) {
              toast.error("Something went wrong")
              return
          }
          router.push("/my-bookings")
  
      }
  // const onSubmit = async (e) => {
  //     e.preventDefault();
  
  //     const formData = new FormData(e.currentTarget);
  
  //     const booking = {
  //       name: formData.get("name"),
  //       description: formData.get("description"),
  
       
  //       floor: Number(formData.get("floor")) || 0,
  //       capacity: Number(formData.get("capacity")) || 0,
  //       hourlyRate: Number(formData.get("hourlyRate")) || 0,
  
  //       image: formData.get("imageUrl"),
  
  //       amenities: formData.getAll("amenities"),
  //     };
  
  //     console.log("UPDATED DATA:", booking);
  
  //     try {
        
  //       toast.success("Room updated successfully!");
  //     } catch (error) {
  //       console.log(error);
  //       toast.error("Failed to update room");
  //     }
  //   };
  return (
     <Modal>
       <Button
            
            className="bg-[#84B179] w-full font-bold shadow-lg mt-4"
           
        >
            Book Now
        </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                {/* <Envelope className="size-5" /> */}
              </Modal.Icon>
              
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                   <DateField
                   onChange={setBookingDate}
                   className="w-[256px]" name="date">
      <Label>Booking Date</Label>
      <DateField.Group className='bg-[#C7EABB]'>
        <DateField.Prefix>
          <Calendar
           className=" size-4 text-muted" />
        </DateField.Prefix>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment}  />}</DateField.Input>
      </DateField.Group>
    </DateField>

     <div className="flex flex-col gap-4">
      <TimeField className="w-[256px]" name="time"
      value={startTime}
      onChange={setStartTime}>
        <Label>Start time</Label>
        <TimeField.Group>
          <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        <Description>Enter the start time</Description>
      </TimeField>

      <TimeField className="w-[256px]" name="end-time"
      value={endTime}
      onChange={setEndTime}
      >
        <Label>End time</Label>
        <TimeField.Group>
          <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        <Description>Enter the end time</Description>
      </TimeField>
    </div>
               
                  
                    
                  <TextField className="w-full " name="message" variant="secondary">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message"
                    className='bg-[#C7EABB]' />
                  </TextField>
                  <p className="bg-[#C7EABB] p-2 rounded-xl  font-bold">Total Cost: {session?.room?.price}</p>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button  onPress={handleBooking}slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}