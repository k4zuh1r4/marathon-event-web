import { ApproveTable } from "@/components/greylistTable";
import { useState, useEffect } from "react";
import axios from "axios";
import { SideBarOrganizer } from "@/components/sidebar";
export const Greylist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/getGreylist')
      .then((res) => {
        setData(res.data.List || []);
      })
      .catch((err) => console.log(err));
  }, [])
  const handleAdd = (id) => {
    const selectedRow = data.find(row => row.id === id)
    console.log(selectedRow)
    if (selectedRow) {
      axios.post('http://localhost:8081/approve', selectedRow)
        .then((res) => {
          if (res.data.Status === "Succeed") {
            alert("Approved successfully.")
            setData(prevData => prevData.filter(row => row.id !== id))
            axios.post('http://localhost:8081/updateResults', {
              id: selectedRow.id,
              name: selectedRow.name,
              email: selectedRow.email
            }).catch((err) => console.log(err))
            axios.delete(`http://localhost:8081/deleteGreylist/${id}`).catch((err) => console.log(err))
          } else {
            alert("Failed to add.")
          }
        })
        .catch((err) => console.log(err))
    }
  }
  return (
    <section className="flex place-items-start w-full bg-gradient-to-br from-ice-blue to-misty-rose">
      <SideBarOrganizer />
      <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
        <ApproveTable TABLE_ROW={Array.isArray(data) ? data : []} onAdd={handleAdd} />
      </div>
    </section>
  )
}
