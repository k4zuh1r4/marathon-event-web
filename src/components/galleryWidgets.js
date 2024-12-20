import { Typography, Card, CardBody } from "@material-tailwind/react";

export const ContentCard = ({ img, title, desc }) => {
    return (
        <Card
            className="relative grid min-h-[15rem] items-end overflow-hidden rounded-xl"
        >
            <img
                src={img}
                alt="bg"
                className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0" />
            <CardBody className="relative flex flex-col justify-end">
                <Typography variant="h4" className="font-roboto shadow-lg text-white">
                    {title}
                </Typography>
                <Typography
                    variant="paragraph"
                    className="my-2 font-roboto shadow-lg text-white"
                >
                    {desc}
                </Typography>
            </CardBody>
        </Card>
    );
}