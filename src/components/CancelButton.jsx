'use client'
import { Button } from "@heroui/react";
import { useState } from "react";

const CancelButton = ({ item }) => {
  console.log(item);
  const [update, setUpdate] = useState(false);

  const handleCancel = async (id) => {
    
    if (!id) return console.error("No room ID provided");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookingUpdate/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        
        }
      });

      console.log(res);
      const data = await res.json();
      // console.log(data);

      if (data.modifiedCount > 0) {
        setUpdate(true); 
        alert("Booking cancelled successfully!");
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  return (
    <div>
   
      <Button onClick={() => handleCancel(item?._id || item?.roomId)}>
        {item?.status === 'active' ? "Cancelled" : "Cancel Booking"}
      </Button>
    </div>
  );
};

export default CancelButton;
