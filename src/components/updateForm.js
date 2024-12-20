import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Typography, Input } from "@material-tailwind/react";
import { SideBarOrganizer } from "@/components/sidebar";
export const UpdateForm = () => {
    const { id } = useParams();
    const [record, setRecord] = useState('');
    const [standings, setStanding] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/updateRecord", { id, record, standings })
            .then((res) => {
                console.log(res);
                if (res.data.Status === "Succeed") {
                    alert("Record updated successfully.");
                } else {
                    alert("Failed to update record.");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Failed to update record.");
            });
    };

    return (
        <section className="flex place-items-start bg-gradient-to-br from-ice-blue to-misty-rose">
            <SideBarOrganizer />
            <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
                <section className="p-3 mt-5 mx-auto bg-white rounded-lg shadow-md w-full max-w-[50rem]">
                    <Typography variant="h4" className=' block mb-6 font-montserrat text-rich-black'>
                        Update Event Record
                    </Typography>
                    <form className="mx-auto max-w-[24rem] text-left" onSubmit={handleSubmit}>
                        <div className="mb-6 font-montserrat text-rich-black">
                            <label htmlFor="record" className="mb-2 block">
                                Time Record
                            </label>
                            <Input
                                id="record"
                                name='record'
                                color="gray"
                                size="lg"
                                type="time"
                                step="1"
                                placeholder="Finishing time"
                                className="w-full placeholder:opacity-100"
                                labelProps={{
                                    className: "hidden",
                                }}
                                value={record}
                                onChange={(e) => setRecord(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 font-montserrat">
                            <label htmlFor="standings" className="mb-2 block">
                                Finishing Position
                            </label>
                            <Input
                                id="standings"
                                name='standings'
                                color="gray"
                                size="lg"
                                type="number"
                                placeholder="Finishing position"
                                className="w-full placeholder:opacity-100"
                                labelProps={{
                                    className: "hidden",
                                }}
                                value={standings}
                                onChange={(e) => setStanding(e.target.value)}
                            />
                        </div>
                        <Button type="submit" className="bg-rich-black font-montserrat">
                            Update
                        </Button>
                    </form>
                </section>
            </div>
        </section>
    );
};