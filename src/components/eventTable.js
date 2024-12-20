import React from "react"
import axios from "axios"
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  {
    head: "Entry ID",
    customeStyle: "!text-left",
  },
  {
    head: "Competitor ID",
    customeStyle: "text-left",
  },
  {
    head: "Name",
    customeStyle: "text-left",
  },
  {
    head: "Email",
    customeStyle: "text-left",
  },
  {
    head: "Nationality",
    customeStyle: "text-left",
  },
  {
    head: "Gender",
    customeStyle: "text-left",
  },
  {
    head: "Age",
    customeStyle: "text-left",
  },
  {
    head: "Contact Number",
    customeStyle: "text-left",
  },
  {
    head: "Passport/ID Number",
    customeStyle: "text-left",
  },
  {
    head: "Address",
    customeStyle: "text-left",
  },

];

export const EventTable = ({ TABLE_ROW, onDelete }) => {
  const handleDelete = (entry_id) => {
    axios.delete(`http://localhost:8081/deleteEvent/${entry_id}`)
      .then((res) => {
        if (res.data.Status === "Succeed") {
          onDelete(entry_id);
        } else {
          console.log(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="p-3 mx-auto">
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap gap-4 justify-between mb-4"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Event Participants
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              See and manage the list of current participants.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="!px-0 py-2">
          <table className="w-auto min-w-max table-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, customeStyle }) => (
                  <th
                    key={head}
                    className={`border-b border-gray-300 !p-4 pb-8 ${customeStyle}`}
                  >
                    <Typography
                      color="blue-gray"
                      variant="small"
                      className="!font-bold"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROW.map((row) => (
                <tr key={row.entry_id} className="font-montserrat">
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.entry_id}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.id}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.name}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.email}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.nationality}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.sex}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.age}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.phone_no}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.passport_no}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black text-wrap"
                      >{row.address}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div className="flex justify-start gap-1">
                      <Button className="bg-rich-black font-montserrat" onClick={() => handleDelete(row.entry_id)}>Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </section>
  );
}
export const EventTableComp = ({ TABLE_ROW }) => {
  return (
    <section className="p-3 mx-auto">
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none flex flex-wrap gap-4 justify-between mb-4"
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Event Participants
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              View the current list of participating competitors.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="!px-0 py-2">
          <table className="w-full min-w-max table-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, customeStyle }) => (
                  <th
                    key={head}
                    className={`border-b border-gray-300 !p-4 pb-8 ${customeStyle}`}
                  >
                    <Typography
                      color="blue-gray"
                      variant="small"
                      className="!font-bold"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROW.map((row) => (
                <tr key={row.entry_id} className="font-montserrat">
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.entry_id}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.id}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.name}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.email}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        className="text-rich-black"
                      >{row.nationality}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.sex}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.age}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.phone_no}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.passport_no}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.address}
                      </Typography>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </section>)
}
