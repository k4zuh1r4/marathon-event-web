import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
export const CompDashboardCard1 = () => {
  return (
    <section className="place-items-center p-1">
      <Card className="w-auto max-w-[24rem]">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <Typography
            className="mt-1 mb-2 text-[20px] font-bold font-montserrat text-rich-black"
          >
            Getting started?
          </Typography>
        </CardHeader>
        <CardBody className="px-4 pt-0">
          <Typography className="font-roboto text-cadets-gray">
            Apply for the current marathon now!
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 px-4">
          <Button fullWidth className="bg-rich-black">Apply</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
export const CompDashboardCard2 = () => {
    return (
      <section className="place-items-center p-1">
        <Card className="w-auto max-w-[24rem]">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <Typography
              className="mt-1 mb-2 text-[20px] font-bold font-montserrat text-rich-black"
            >
              Participating?
            </Typography>
          </CardHeader>
          <CardBody className="px-4 pt-0">
            <Typography className="font-roboto text-cadets-gray">
              See the details of the race!
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 px-4">
            <Button fullWidth className="bg-rich-black">Details</Button>
          </CardFooter>
        </Card>
      </section>
    )
  }