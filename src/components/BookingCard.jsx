import Image from "next/image";
import { Chip } from '@heroui/react';
import CancelBookingButton from "./CancelBookingButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const BookingCard =async () => {
  const {token} = await auth.api.getToken({
    headers: await headers()
  }) 

  
    return (
        <div

            className="flex gap-4 p-4 bg-white border rounded-xl"
        >
            <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
                alt="course"
                width={120}
                height={90}
                className="rounded-lg"
            />

            <div className="flex flex-col grow justify-between">
                <div>
                    <h3 className="font-bold">
                        Mastering React - From Beginner to Pro
                    </h3>
                    <p className="text-sm text-slate-500">
                        Enrolled On:
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <Chip
                        color="success"
                        size="sm"
                    >
                        Active
                    </Chip>

                   <CancelBookingButton/>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;