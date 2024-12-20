import React from "react"
import { Typography, Input, Button } from '@material-tailwind/react'
import { Link } from "react-router-dom";
import { ListOption } from "@/components/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Nav } from "@/components/Nav";
export const SignUpPage = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    gender: 'M',
    age: '',
    email: '',
    number: '',
    address: '',
    passport: '',
    nationality: '',
    password: ''
  })
  const submitHandlerReg = (e) => {
    e.preventDefault();
    if (values.age < 18 || values.age > 60) {
      alert("Age must be between 18 and 60.")
      return
    }
    else {
      axios.post('http://localhost:8081/register', values).then((res) => {
        if (res.data.Status === "Succeed") {
          alert("Account registered. Please log in to continue.")
          navigate('/login')
        }
        else if (res.data.Error === "EmailExists") {
          alert("Email already exists. Please use a different email.");
        }
        else {
          alert("Failed to register account. Please try again.")
        }
      }).then((err) => console.log(err))
    }
  }
  return (
    <>
      <Nav />
      <section className="grid text-center h-full w-full items-center justify-center p-8 text-brown-black font-montserrat bg-gradient-to-tr from-orange-800 to-misty-rose">
        <div className="bg-white rounded-lg shadow-md p-8">
          <Typography variant="h3" className="mb-2">
            Register an account
          </Typography>
          <Typography className="mb-16 text-cadets-gray text-[18px]">
            Fill in the following information to create an account
          </Typography>
          <form onSubmit={submitHandlerReg} className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block">
                Name
              </label>
              <Input
                id="name"
                color="gray"
                size="lg"
                type="text"
                name="name"
                placeholder="Your full name or your organization name"
                className="w-full placeholder:opacity-100"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
              <div className="w-full max-w-sm min-w-[200px] mb-2">
                <label className="block mb-2 text-slate-800">
                  Gender
                </label>
                <div className="relative mb-6">
                  <select
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" onChange={(e) => setValues({ ...values, gender: e.target.value })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <ListOption />
                </div>
              </div>
              <div>
                <label htmlFor="age" className="mb-2 block">
                  Age
                </label>
                <Input
                  id="age"
                  color="gray"
                  size="lg"
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="w-full placeholder:opacity-100"
                  onChange={(e) => setValues({ ...values, age: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block">
                Email
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="Your email address"
                className="w-full placeholder:opacity-100"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="mb-2 block">
                Number
              </label>
              <Input
                id="phone"
                color="gray"
                size="lg"
                type="text"
                name="phone"
                placeholder="Phone number"
                className="w-full placeholder:opacity-100"
                onChange={(e) => setValues({ ...values, number: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="mb-2 block">
                Current Address
              </label>
              <Input
                id="address"
                color="gray"
                size="lg"
                type="text"
                name="address"
                placeholder="Current residential address"
                className="w-full placeholder:opacity-100"
                onChange={(e) => setValues({ ...values, address: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="passport_no" className="mb-2 block">
                Passport/ID number
              </label>
              <Input
                id="passport_no"
                color="gray"
                size="lg"
                type="text"
                name="passport_no"
                placeholder="Passport/ID number"
                className="w-full placeholder:opacity-100"
                onChange={(e) => setValues({ ...values, passport: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="nationality" className="mb-2 block">
                Nationality
              </label>
              <Input
                id="nationality"
                color="gray"
                size="lg"
                type="text"
                name="nationality"
                placeholder="Vietnam"
                className="w-full placeholder:opacity-100"
                onChange={(e) => setValues({ ...values, nationality: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="mb-2 block">
                Password
              </label>
              <Input
                size="lg"
                placeholder="Account password"
                className="w-full placeholder:opacity-100"
                type="password"
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
            </div>
            <Button size="lg" className="mt-6 bg-rich-black" fullWidth type="submit">
              Continue
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center"
            >
              If you&apos;ve already own an account, please {" "}
              <Link to="/login" className=" text-gray-900 hover:underline font-bold">
                log in.
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </>
  )
}