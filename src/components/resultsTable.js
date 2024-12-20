import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const TABLE_HEAD = [
  {
    head: "Entry ID",
    customStyle: "!text-left",
  },
  {
    head: "Name",
    customStyle: "text-left",
  },
  {
    head: "Email",
    customStyle: "text-left",
  },
  {
    head: "Time Record",
    customStyle: "text-left",
  },
  {
    head: "Standing",
    customStyle: "text-left",
  },
]
export const ResultsTable = ({ TABLE_ROW }) => {
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
              Event Results
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              Manage and update the results of the event.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="!px-0 py-2">
          <table className="w-full min-w-max table-row-border table-row-even:bg-gray-100">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, customStyle }) => (
                  <th
                    key={head}
                    className={`border-b border-cadets-gray !p-4 pb-8 ${customStyle}`}
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
                <tr key={row.id} className="font-montserrat">
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
                      >{row.record}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.standings}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div className="flex justify-end gap-4">
                      <Link to={`/update/${row.id}`}>
                        <Button className="bg-rich-black font-montserrat">
                          Update
                        </Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </section>
  )
}
export const ResultsTableComp = ({ TABLE_ROW }) => {
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
              Event Results
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              See the results of the event, updated by the organizers.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="!px-0 py-2">
          <table className="w-full min-w-max table-row-border table-row-even:bg-gray-100">
            <thead>
              <tr>
                {TABLE_HEAD.map(({ head, customStyle }) => (
                  <th
                    key={head}
                    className={`border-b border-cadets-gray !p-4 pb-8 ${customStyle}`}
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
                <tr key={row.id} className="font-montserrat">
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
                      >{row.record}
                      </Typography>
                    </div>
                  </td>
                  <td className="!p-4 border-b border-gray-300">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-rich-black"
                      >{row.standings}
                      </Typography>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </section>
  )
}
