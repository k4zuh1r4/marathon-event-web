import React from "react"
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  {
    head: "ID",
    customeStyle: "!text-left",
  },
  {
    head: "Name",
    customeStyle: "text-right",
  },
  {
    head: "Email",
    customeStyle: "text-right",
  },
  {
    head: "Nationality",
    customeStyle: "text-right",
  },
  {
    head: "Gender",
    customeStyle: "text-right",
  },
  {
    head: "Age",
    customeStyle: "text-right",
  },
  {
    head: "Contact Number",
    customeStyle: "text-right",
  },
  {
    head: "Passport/ID Number",
    customeStyle: "text-right",
  },
  {
    head: "Address",
    customeStyle: "text-right",
  }

];
export const ApproveTable = ({TABLE_ROW, onAdd}) => {
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
              Event Greylist/Wait list
            </Typography>
            <Typography
              variant="small"
              className="text-gray-600 font-normal mt-1"
            >
              Manage the list of applicants who are waiting for approval.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll !px-0 py-2">
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
                <td className="!p-4 border-b border-gray-300">
                    <div className="flex justify-end gap-4">
                        <Button className="bg-rich-black font-montserrat" onClick={() => onAdd(row.id)}>Approve
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