import { ResultsTable, ResultsTableComp } from "@/components/resultsTable"
import { SideBarOrganizer, SideBarCompetitor } from "@/components/sidebar"
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
export const ResultOrg = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/results')
      .then((res) => {
        setData(res.data.Result || []);
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <section className="flex place-items-start h-full w-full bg-gradient-to-br from-ice-blue to-misty-rose">
      <SideBarOrganizer />
      <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
        <ResultsTable TABLE_ROW={Array.isArray(data) ? data : []} />
      </div>
    </section>
  )
}
export const ResultComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/results')
      .then((res) => {
        setData(res.data.Result || []);
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <section className="flex place-items-start bg-gradient-to-br from-ice-blue to-misty-rose">
      <SideBarCompetitor />
      <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
        <ResultsTableComp TABLE_ROW={Array.isArray(data) ? data : []} />
      </div>
    </section>
  )
}

