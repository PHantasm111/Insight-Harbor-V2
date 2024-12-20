"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
 
export function Footer() {

  const router = useRouter()

  return (
    <footer className="w-full bg-white py-2 px-16">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/assets/logo.svg" alt="logo-ct" className="w-16 h-16" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <p
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
              onClick={() => router.push("/about")}
            >
              About Us
            </p>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
            >
              Contribute
            </Typography>
          </li> */}
          <li>
            <p
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-800 cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </p>
          </li>
        </ul>
      </div>

      <hr className="my-2 border-blue-gray-50" />

      <p className="text-center italic">
        &copy; 2024 Made by PH
      </p>
    </footer>
  );
}

export default Footer