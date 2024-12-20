
import { Typography, Input, Button } from '@material-tailwind/react'
import { ListOption } from "@/components/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "@/components/Nav";
import axios from 'axios';

export const LoginPage = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
    type: 'competitor'
  });
  axios.defaults.withCredentials = true;
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/login", values).then((res) => {
      if (values.type === "competitor") {
        if (res.data.Status === "Succeed") {
          alert("Login succeed.")
          navigate('/')
        } else {
          alert("Your email or password is incorrect. Please try again.")
        }
      }
      else if (values.type === "organizer") {
        console.log("Organizer login attempt:", res.data, values)
        if (res.data.Status === "Succeed") {
          alert("Login succeed.")
          navigate('/organizer')
        } else {
          alert("Nope.")
        }
        /*alert("Login succeed.")
        navigate('/organizer')*/
      }
      else {
        alert("Invalid.")
      }
    }).then((err) => console.log(err))
  }

  return (
    <>
      <Nav />
      <section className="grid text-center h-screen items-center justify-center p-8 text-brown-black font-montserrat bg-gradient-to-tr from-cyan-800 to-ice-blue">
        <div className=" bg-white rounded-lg shadow-md p-8">
          <Typography variant="h3" className="mb-2">
            Login
          </Typography>
          <Typography className="mb-16 text-cadets-gray text-[18px]">
            Sign in to your account to continue
          </Typography>
          <form onSubmit={submitHandler} className="mx-auto max-w-[24rem] text-left">
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
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="mb-2 block">
                Password
              </label>
              <Input
                size="lg"
                placeholder="Account password"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100"
                type="password"
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
            </div>
            <div className="relative">
              <select className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer" onChange={(e) => setValues({ ...values, type: e.target.value })}>
                <option value="competitor">Competitor</option>
                <option value="organizer">Tournament Organizer</option>
              </select>
              <ListOption />
            </div>
            <Button size="lg" className="mt-6 bg-rich-black" fullWidth type="submit">
              Continue
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center"
            >
              If you&apos;re new to the website, please {" "}
              <Link to="/register" className=" text-gray-900 hover:underline font-bold items-center">
                create an account.
              </Link>
            </Typography>
          </form>
        </div>
      </section>
    </>
  )
}
