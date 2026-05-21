'use client'


import {  signIn } from "@/lib/auth-client";
import {
  Check,
  EyeClosed,
} from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function LoginPage() {
 

  const [isShowPassword, setIsShowPassword] = useState(false);
  

const handleLogin = async (e) => {
   
    e.preventDefault();
  
    const formData = new FormData(e.currentTarget)

    const LoginData = Object.fromEntries(formData.entries())

    const { data, error } = await signIn.email({
      ...LoginData,
      callbackURL: "/"
    })
       

    if(error){
      toast.warning('Registration Failed')
      return;
    }
    {
        toast.success("Login successful 🎉");

       
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      }
    // router.push('/')
    
  }
  // const handleGoogleSignin = async () => {
  //   try {
  //     toast.success("Redirecting to Google...");

  //     setTimeout(async () => {
  //       await authClient.signIn.social({
  //         provider: "google",
  //       });
  //     }, 1000);
  //   } catch (error) {
  //     toast.error("Google sign in failed.");
  //   }
  // };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center px-4 py-10 bg-gradient-to-b from-[#C7EABB] to-[#E8F5BD]">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl border shadow-xl rounded-2xl p-6 sm:p-8">

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-3xl font-bold mb-6 ">
          Login
        </h1>

        <Form
        onSubmit={handleLogin}
          className="flex flex-col gap-5 w-full space-y-3"
         
        >
          {/* Email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              placeholder="john@example.com"
              className="w-full"
            />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField
            isRequired
            name="password"
            type={isShowPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Minimum 8 characters required";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must include uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must include a number";
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

            <Description className="text-sm mt-2 ">
              Don’t have an account?{" "}
              <Link
                href="/register"
                className="text-red-500 font-medium"
              >
                Register
              </Link>
            </Description>

            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex items-center gap-2">
                  <Button className="bg-[#84B179] px-6 md:px-4 py-5 rounded-lg font-bold w-full text-white hover:opacity-90 transition text-sm md:text-base" type="submit">
            Login
                  </Button>
                  
                </div>
        </Form>

        {/* Divider */}
        <p className="text-center my-2 text-sm text-gray-500">
          Or
        </p>

        {/* Google */}
        <Button
          
          variant="outline"
          className="w-full flex items-center justify-center text-lg gap-2 hover:bg-[#84B179] hover:text-white "
        >
          <GrGoogle className= "text-blue-500 " />
          Sign in with Google
        </Button>
      </Card>
    </div>
  );
}