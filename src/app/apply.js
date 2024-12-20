import React from 'react'
import { SideBarCompetitor } from '@/components/sidebar'
import { Typography, Button } from '@material-tailwind/react'
import { useState, useEffect } from 'react';
import axios from 'axios';
export const ApplyComp = () => {
    const [profile, setProfile] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8081/getProfile', { withCredentials: true }).then((res) => {
            setProfile(res.data.Profile || []);
            console.log(res.data.Profile);
        })
            .catch((err) => console.log(err));
    }, []);
    const handleSubmit = () => {
        axios.post('http://localhost:8081/apply', profile, { withCredentials: true })
            .then((res) => {
                console.log('Profile added to greylist:');

            })
            .catch((err) => console.log(err));
    };
    return (
        <section className="flex place-items-start h-full w-full bg-gradient-to-br from-ice-blue to-misty-rose">
            <SideBarCompetitor />
            <section className="mx-auto mt-6 p-10 place-content-start bg-white rounded-lg shadow-md">
                <div className="container mx-auto text-left">
                    <div className="mb-14">
                        <Typography
                            variant="h1"
                            className="mb-4 text-4xl !leading-snug lg:text-[40px] text-rich-black"
                        >
                            Applicant Profile
                        </Typography>
                        <Typography
                            className="mx-auto font-normal text-[18px] !text-cadets-gray lg:max-w-3xl"
                        >
                            Check your profile and update your information before entering the event.
                        </Typography>
                    </div>
                    <hr className="p-2 border-paynes-gray" />
                    <div className="max-w-3xl mx-auto grid gap-4 text-rich-black font-montserrat text-sm">
                        <Typography className="text-sm font-montserrat font-bold">
                            Name:
                        </Typography>
                        <Typography className="text-sm font-montserrat">
                            {profile.name}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Email:
                        </Typography>
                        <Typography className="text-sm font-montserrat ">
                            {profile.email}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Nationality:
                        </Typography>
                        <Typography className="text-sm font-montserrat">
                            {profile.nationality}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Gender:
                        </Typography>
                        <Typography className="text-sm font-montserrat">
                            {profile.sex}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Age:
                        </Typography>
                        <Typography className="text-sm font-montserrat">
                            {profile.age}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Phone Number:
                        </Typography>
                        <Typography className="text-sm font-montserrat">
                            {profile.phone}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Passport Number:
                        </Typography>
                        <Typography className="text-sm font-montserrat">
                            {profile.passport_no}
                        </Typography>
                        <Typography className="text-sm font-montserrat font-bold">
                            Address:
                        </Typography>
                        <Typography className="mb-2 text-sm font-montserrat">
                            {profile.address}
                        </Typography>
                    </div>
                </div>
                <hr className="p-2 border-paynes-gray" />
                <Button className="bg-rich-black font-montserrat my-4" fullWidth onClick={handleSubmit}>Apply for event</Button>
            </section>
        </section>
    )
}
