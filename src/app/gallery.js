import React from "react";
import { Typography } from "@material-tailwind/react";
import { SideBarOrganizer, SideBarCompetitor } from "@/components/sidebar";
import { ContentCard } from "@/components/galleryWidgets";
export const CourseInformation = () => {
    return (
        <section className="flex place-items-start h-full w-full bg-gradient-to-br from-ice-blue to-misty-rose bg-no-repeat bg-contain">
            <SideBarOrganizer />
            <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
                <section className="container mx-auto px-8 py-10 lg:py-28">
                    <Typography
                        className="text-xl font-bold !leading-snug font-montserrat text-rich-black"
                    >
                        Course Information
                    </Typography>
                    <Typography
                        className="mt-2 mb-3 max-w-lg !text-cadets-gray font-montserrat"
                    >
                        Short Description: A marathon event in Hanoi, Vietnam.
                    </Typography>
                    <Typography
                        className="text-xl font-bold !leading-snug font-montserrat text-rich-black"
                    >
                        Locations
                    </Typography>
                    <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3">
                        <ContentCard img="/gallery1.png" title="Hanoi" desc="Location 1" />
                        <ContentCard img="/gallery2.png" title="Thanh Hoa" desc="Location 2" />
                        <ContentCard img="/gallery3.png" title="Hai Phong" desc="Location 3" />
                        <ContentCard img="/gallery4.png" title="Da Nang" desc="Location 4" />
                        <ContentCard img="/gallery5.png" title="Hue" desc="Location 5" />
                        <ContentCard img="/gallery6.jpg" title="Quang Nam" desc="Location 6" />
                    </div>
                </section>
            </div>
        </section>
    );
}
export const CourseInformationComp = () => {
    return (
        <section className="flex place-items-start h-screen w-screen bg-gradient-to-br from-ice-blue to-misty-rose bg-no-repeat bg-contain">
            <SideBarCompetitor />
            <div className="flex-1 mt-2 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-start">
                <section className="container mx-auto px-8 py-10 lg:py-28">
                    <Typography
                        className="text-xl font-bold !leading-snug font-montserrat text-rich-black"
                    >
                        Course Information
                    </Typography>
                    <Typography
                        className="mt-2 mb-3 max-w-lg !text-cadets-gray font-montserrat"
                    >
                        Short Description: A marathon event in Hanoi, Vietnam.
                    </Typography>
                    <Typography
                        className="text-xl font-bold !leading-snug font-montserrat text-rich-black"
                    >
                        Locations
                    </Typography>
                    <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-3">
                        <ContentCard img="/gallery1.png" title="Hanoi" desc="Location 1" />
                        <ContentCard img="/gallery2.png" title="Thanh Hoa" desc="Location 2" />
                        <ContentCard img="/gallery3.png" title="Hai Phong" desc="Location 3" />
                        <ContentCard img="/gallery4.png" title="Da Nang" desc="Location 4" />
                        <ContentCard img="/gallery5.png" title="Hue" desc="Location 5" />
                        <ContentCard img="/gallery6.jpg" title="Quang Nam" desc="Location 6" />
                    </div>
                </section>
            </div>
        </section>
    );
}