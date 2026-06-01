'use client';



import { useSession } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
  const { data: session} = useSession();
  return (
    <div className='bg-gradient-to-br from-[#84B179] via-[#C7EABB] to-[#E8F5BD]'>
      <h3 className="font-black text-4xl text-center mt-10">Welcome to 
              Study <span className="text-white">Nook</span>
            </h3>
            <p className=' text-center font-bold pt-3'>Update you profile here</p>
      <Card className='max-w-96 mx-auto flex flex-col items-center p-10 mt-10 mb-10 animate__animated animate__bounce'>
        <Image
          referrerPolicy="no-referrer"
          width={100}
          height={100}
          src={
            session?.user?.image ||
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
          }
          alt="avatar"
          className=" rounded-full object-cover"
        />
        <p className='font-bold text-2xl'>{session?.user?.name}</p>
        <p className='text-muted'>{session?.user?.email}</p>
        {/* <UpdateUSerModal/> */}
      </Card>
    </div>
  );
};

export default ProfilePage;