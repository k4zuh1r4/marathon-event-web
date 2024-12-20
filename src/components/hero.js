import React from 'react'
import { Nav } from "@/components/Nav";
import { Typography } from "@material-tailwind/react";
export const HeroPage = () => {
  return (
    <div>
      <Nav />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 max-w-screen">
        <section className="py-16">
          <div className="container mx-auto mb-10 text-center lg:mb-20 text-brown-black">
            <Typography type="lead" className="font-semibold text-4xl">
              Hanoi Marathon System
            </Typography>
            <Typography
              as="h2"
              type="h3"
              color="default"
              className="my-4 max-w-lg [text-wrap:balance] mx-auto"
            >
              A web system to manage a marathon event in Hanoi, Vietnam.
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto text-foreground max-w-xl [text-wrap:balance]"
            >
              Hoang Duc Viet - 22110178
            </Typography>
          </div>
        </section>
      </div>
    </div>
  )
}
