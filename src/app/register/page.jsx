'use client'
import React, { useState } from 'react';
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { Check, EyeClosed } from 'lucide-react';
import { FaEye } from 'react-icons/fa';

const RegisterPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-10 bg-gradient-to-b from-[#C7EABB] to-[#E8F5BD]">

      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl border shadow-xl rounded-2xl p-6 sm:p-8 ">
        <h3 className="font-black text-4xl text-center">Join Study <span className="text-[#84B179]">Nook</span></h3>
      <h1 className="text-center text-md font-semibold mb-6">
          Register Your Account
        </h1>

      
 <Form className=" flex w-96 flex-col gap-4 space-y-3" >
      <TextField
        isRequired
        name="name"
        type="text"
        
      >
        <Label>Name</Label>
        <Input placeholder="Enter Your Name" 
        className="w-full" />
        <FieldError />
        
      </TextField>

      <TextField
        isRequired
        name="image"
        type="text"
        
      >
        <Label>ImageUrl</Label>
        <Input placeholder="Paste image URL" 
        className="w-full" />
        <FieldError />

      </TextField>

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError 
        className="w-full" />
      </TextField>

      <TextField
        isRequired
        minLength={8}
        name="password"

         type={isShowPassword ? "text" : "password"}
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
       <div className="relative">
              <Input
                placeholder="Enter your password"
                className="w-full pr-10"
              />

              <span
                onClick={() =>
                  setIsShowPassword(!isShowPassword)
                }
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
              >
                {isShowPassword ? <FaEye /> : <EyeClosed />}
              </span>
            </div>
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex items-center gap-2">
        <Button className="bg-[#84B179] px-6 md:px-4 py-5 rounded-lg font-bold text-white hover:opacity-90 transition text-sm md:text-base" type="submit">
  Register
        </Button>
        <Button className="border border-[#84B179] text-[#84B179] px-6 md:px-4 py-5 rounded-lg font-bold hover:bg-[#84B179] hover:text-white transition text-sm md:text-base" type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    </Card>
    </div>
  );
};

export default RegisterPage;