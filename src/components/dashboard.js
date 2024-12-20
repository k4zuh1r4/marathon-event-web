'use client';
import { SideBarCompetitor, SideBarOrganizer } from '@/components/sidebar'
import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CompDashboardCard1, CompDashboardCard2 } from '@/components/cards'
export const CompetitorMainMenu = () => {
    return (
        <section className="grid place-items-baseline h-full w-full bg-gradient-to-br from-ice-blue to-misty-rose">
            <div className="grid gap-1 md:grid-cols-2 grid-cols-1">
                <SideBarCompetitor />
                <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
                    <div className="container mx-auto px-4 text-center place-content-center">
                        <Typography
                            variant="h1"
                            className="mx-auto my-6 w-full leading-snug text-rich-black !text-2xl lg:max-w-3xl lg:!text-5xl"
                        >
                            Welcome to Hanoi Marathon Events System! You are currently logged in as a{" "}
                            <span className="text-auburn leading-snug ">
                                Competitor
                            </span>{""}
                            .
                        </Typography>
                        <div className="flex-row gap-4 grid grid-cols-1 h-full w-full md:grid-cols-2">
                            <CompDashboardCard1 />
                            <CompDashboardCard2 />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export const OrganizerMenu = () => {
    return (
        <section className="grid place-items-baseline bg-gradient-to-br from-ice-blue to-misty-rose">
            <div className="grid gap-1 md:grid-cols-2 grid-cols-1">
                <SideBarOrganizer />
                <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
                    <div className="container mx-auto px-4 text-center place-content-center">
                        <Typography
                            variant="h1"
                            className="mx-auto my-6 w-full leading-snug text-rich-black !text-2xl lg:max-w-3xl lg:!text-5xl"
                        >
                            Welcome to Hanoi Marathon Events System! You are currently logged in as a{" "}
                            <span className="text-light-blue-800 leading-snug ">
                                Tournament Organizer
                            </span>{""}
                            .
                        </Typography>
                        <div className="flex-row gap-4 grid grid-cols-1 md:grid-cols-2">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
