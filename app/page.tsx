"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="sm:flex bg-amber-100">
        <div className="sm:w-1/2 p-10">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore
            <span className="bg-linear-to-r from-blue-500 to-teal-900 px-2 py-1 rounded-lg text-clip text-transparent bg-clip-text">
              voluptatibus libero maxime doloremque illum,
            </span>{" "}
            amet, ea mollitia cumque commodi id assumenda reiciendis vitae
            adipisci consequuntur delectus doloribus similique deserunt?
          </p>
        </div>

        <div className="relative right-0 top-0 sm:w-1/2 h-160">
          <Image src="/soly.jpg" alt="Picture of the author" fill={true} />
        </div>
      </div>
      <section>
        <div className="flex flex-col items-center justify-center py-10">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-center mb-6">
            We offer a wide range of services to meet your needs. Whether youre
            looking for web development, graphic design, or digital marketing,
            we have you covered.
          </p>
          <div className="flex gap-4">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
              Learn More
            </button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <h2 className="text-2xl font-bold mb-4 justify-center items-center flex">
        Our Plans
      </h2>
      <div className="bg-indigo-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        <div className="p-10">
          <div className="bg-white shadow-2xl rounded-2xl ring-blue-500 p-6">
            <p className="text-center mb-6">
              We have different plans to suit your needs. Whether youre a small
              business or a large corporation, we have a plan that will work for
              you.
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
              View Plans
            </button>
          </div>
        </div>
        <div className="p-10">
          <div className="bg-white shadow-2xl rounded-2xl ring-blue-500 p-6">
            <p className="text-center mb-6">
              We have different plans to suit your needs. Whether youre a small
              business or a large corporation, we have a plan that will work for
              you.
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
              View Plans
            </button>
          </div>
        </div>

        <div className="p-10">
          <div className="bg-white shadow-2xl rounded-2xl ring-blue-500 p-6">
            <p className="text-center mb-6">
              We have different plans to suit your needs. Whether youre a small
              business or a large corporation, we have a plan that will work for
              you.
            </p>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
              View Plans
            </button>
          </div>
        </div>
      </div>

      <section>
        <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-center mb-6">
            We are a team of passionate professionals dedicated to providing top
            quality services to our clients. Our mission is to help businesses
            grow and succeed in the digital world.
          </p>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition">
            Read More
          </button>
        </div>
      </section>
    </motion.div>
  );
}
