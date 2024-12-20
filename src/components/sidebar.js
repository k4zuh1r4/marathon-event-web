import React, { use } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  List,
  Card,
  ListItem,
  Accordion,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router-dom';
export const SideBarCompetitor = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    axios.get('http://localhost:8081/logout').then((res) => {
      navigate('/')

    }).catch((err) => console.log(err))
  }
  const LIST_ITEM_STYLES =
    "font-montserrat text-cadets-gray hover:text-white focus:text-white active:text-white hover:bg-opacity-20 focus:bg-opacity-20 active:bg-opacity-20"
  return (
    <Card
      className="h-[calc(100vh)] w-full max-w-[20rem] mx-3 my-3 p-6 bg-rich-black shadow-md"
    >
      <div className="mb-2 flex items-center gap-4 p-4 font-montserrat text-white">
        <Typography type="lead" className="text-lg font-roboto">
          Hanoi Marathon Dashboard
        </Typography>
      </div>
      <hr className="my-2 border-paynes-gray font-montserrat" />`
      <List>
        <Link to="/info">
          <ListItem className={LIST_ITEM_STYLES}>
            Course Information
          </ListItem>
        </Link>
        <Link to="/apply">
          <ListItem className={LIST_ITEM_STYLES}>
            Apply for Event
          </ListItem>
        </Link>
        <Link to="/list">
          <ListItem className={LIST_ITEM_STYLES}>
            Participant List
          </ListItem>
        </Link>
        <Link to="/resultsComp">
          <ListItem className={LIST_ITEM_STYLES}>
            Event Results
          </ListItem>
        </Link>
      </List>
      <hr className="my-2 border-paynes-gray" />
      <List>
        <ListItem className={LIST_ITEM_STYLES} onClick={handleLogout}>
          Sign Out
        </ListItem>
      </List>
      <Typography
        variant="small"
        className="mt-5 font-montserrat text-cadets-gray flex justify-center"
      >
        22110178 - Hoang Duc Viet
      </Typography>
    </Card>
  )
}
export const SideBarOrganizer = () => {
  const LIST_ITEM_STYLES =
    "font-montserrat text-cadets-gray hover:text-white focus:text-white active:text-white hover:bg-opacity-20 focus:bg-opacity-20 active:bg-opacity-20"
  return (
    <Card
      className="h-[calc(100vh)] w-full max-w-[20rem] mx-3 my-3 p-6 bg-rich-black shadow-md"
    >
      <div className="mb-2 flex items-center gap-4 p-4 font-montserrat text-white">
        <Typography type="lead" className="text-lg font-roboto">
          Hanoi Marathon Dashboard
        </Typography>
      </div>
      <hr className="my-2 border-paynes-gray font-montserrat" />
      <List>
        <Link to="/gallery">
          <ListItem className={LIST_ITEM_STYLES}>
            Course Information
          </ListItem>
        </Link>
        <Link to="/manage">
          <ListItem className={LIST_ITEM_STYLES}>
            Manage Participants
          </ListItem>
        </Link>
        <Link to="/greylist">
          <ListItem className={LIST_ITEM_STYLES}>
            Greylist
          </ListItem>
        </Link>
        <Link to="/results">
          <ListItem className={LIST_ITEM_STYLES}>
            Update Results
          </ListItem>
        </Link>
      </List>
      <hr className="my-2 border-paynes-gray" />
      <List>
        <Link to="/">
          <ListItem className={LIST_ITEM_STYLES}>
            Sign Out
          </ListItem>
        </Link>
      </List>
      <Typography
        variant="small"
        className="mt-5 font-montserrat text-cadets-gray flex justify-center"
      >
        22110178 - Hoang Duc Viet
      </Typography>
    </Card>
  )
}
