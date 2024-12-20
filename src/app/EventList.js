import React, { useEffect } from 'react'
import { SideBarOrganizer, SideBarCompetitor } from "@/components/sidebar";
import { EventTable, EventTableComp } from '@/components/eventTable';
import axios from 'axios';
import { useState } from 'react';
export const EventList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getEvents')
      .then((res) => {
        setData(res.data.List || []);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleDelete = (entry_id) => {
    setData(data.filter(row => row.entry_id !== entry_id));
  };

  return (
    <section className="flex place-items-start h-full w-full bg-gradient-to-br from-ice-blue to-misty-rose">
      <SideBarOrganizer />
      <div className="flex-1 mt-2 min-h-[82vh] w-screen lg:h-[54rem] md:h-[34rem] place-items-start">
        <EventTable TABLE_ROW={Array.isArray(data) ? data : []} onDelete={handleDelete} />
      </div>
    </section>
  )
}
export const EventListComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/getEvents')
      .then((res) => {
        setData(res.data.List || []);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="flex place-items-start h-full w-full  bg-gradient-to-br from-ice-blue to-misty-rose">
      <SideBarCompetitor />
      <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
        <EventTableComp TABLE_ROW={Array.isArray(data) ? data : []} />
      </div>
    </section>
  )
}
