'use client';
import React from "react";
import { MainPage } from "./MainPage";
import { LoginPage } from "./login";
import { SignUpPage } from "./signup";
import {
  BrowserRouter,
  Route, Routes
} from 'react-router-dom';
import { EventList, EventListComp } from "./EventList";
import { OrganizerMenu } from "@/components/dashboard";
import { Greylist } from "./greylist";
import { ApplyComp } from "./apply";
import { ResultOrg, ResultComp } from "./results";
import { UpdateForm } from "@/components/updateForm";
import { CourseInformation, CourseInformationComp } from "./gallery";
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SignUpPage />} />
        <Route path="manage" element={<EventList />} />
        <Route path="organizer" element={<OrganizerMenu />} />
        <Route path="list" element={<EventListComp />} />
        <Route path="greylist" element={<Greylist />} />
        <Route path="apply" element={<ApplyComp />} />
        <Route path="results" element={<ResultOrg />} />
        <Route path="resultsComp" element={<ResultComp />} />
        <Route path="gallery" element={<CourseInformation />} />
        <Route path="info" element={<CourseInformationComp />} />
        <Route path="update/:id" element={<UpdateForm />} />
        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}
