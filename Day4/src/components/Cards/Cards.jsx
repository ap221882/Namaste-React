import React from "react";
// import Data from "../../pages/HomePage/AvengersData";
import Card from "../Card/Card";
import * as classes from "./Cards.styles.module.css";

const Data = [
  {
    id: "1",
    imageSrc: "https://avatars.githubusercontent.com/ap221882",
    name: "Ajay Pathak",
    place: "Gurugram, Haryana",
    company: "Naehas Inc",
    designation: "Frontend Developer",
  },
  {
    id: "2",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C5603AQFduDQLvm9ScQ/profile-displayphoto-shrink_800_800/0/1628189039224?e=1675296000&v=beta&t=9dupjGLiOYkcHu1tKL7mrbkar9Krf8Lle94irOZvZ_I",
    name: "Balaji Gaikwad",
    place: "Pune, Maharashtra",
    company: "Nice Ltd",
    designation: "Senior Software Engineer",
  },
  {
    id: "3",
    imageSrc:
      "https://rukminim1.flixcart.com/image/416/416/kyq62kw0/poster/c/r/q/small-avenger-girl-poster-sticker-self-adhesive-poster-12-inch-x-original-imagaw6kupaxxf8g.jpeg?q=70",
    name: "Chaitra J",
    place: "Bengaluru, Karnataka",
    company: "Wells Fargo",
    designation: "Senior Software Engineer",
  },
  {
    id: "4",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C5103AQHrXtciTzzg2Q/profile-displayphoto-shrink_200_200/0/1575514541283?e=1675296000&v=beta&t=ynm9fTVfYwx0h_cSw0DLH-LtOgVH27MUxCRkpnMnqYw",
    name: "Gourav Goswami",
    place: "Madhya Pradesh",
    company: "Toschi Infotech",
    designation: "Frontend Developer",
  },
  {
    id: "5",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEIMW92SXoaHQ/profile-displayphoto-shrink_200_200/0/1652780332652?e=1675296000&v=beta&t=9ylQBTdCAYCNfDmiy_v3nlJ-CiyMuEBgHTNTk-XXRoA",
    name: "Kirti Sahai",
    place: "New Delhi",
    company: "Kongsberg Digital",
    designation: "Senior Frontend Developer",
  },
  {
    id: "6",
    imageSrc:
      "https://media.vanityfair.com/photos/573393ff6107999878ec3f08/16:9/w_1280,c_limit/black-widow-marvel-movie.jpg",
    name: "Laxmi Waghmore",
    place: "Mumbai, Maharashtra",
    company: "Cognizant",
    designation: "Frontend Developer",
  },
  {
    id: "7",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C5603AQHLz05JIYvCLg/profile-displayphoto-shrink_200_200/0/1617691765547?e=1675296000&v=beta&t=QTKh4GcSkMkrQxO_uJrxDmIyNEHSAxFWQJhFbIk6oZw",
    name: "Mallikarjun K Basavanagowdra",
    place: "Bengaluru, Karnataka",
    company: "William O'Neil India",
    designation: "Software Engineer",
  },
  {
    id: "8",
    imageSrc: "https://avatars.githubusercontent.com/u/34391629?v=4",
    name: "Pujarini Jena",
    place: "Gurugram, Haryana",
    company: "CARS24",
    designation: "Software Engineer",
  },
  {
    id: "9",
    imageSrc: "https://avatars.githubusercontent.com/u/42265351?v=4",
    name: "Roshan Trivedi",
    place: "Muzaffarpur, Bihar",
    company: "Infosys",
    designation: "",
  },
  {
    id: "10",
    imageSrc:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFBZVxZtfTJGA/profile-displayphoto-shrink_200_200/0/1659379579611?e=1675296000&v=beta&t=7tiHsZ6C32ZMLms4h6aE3vXHprB7Xt5M8niXsmbjVJg",
    name: "Vijesh N K",
    place: "Mangalore, Karnataka",
    company: "Pace wisdom solutions",
    designation: "",
  },
];

const Cards = () => {
  return (
    <div className={classes.card__container}>
      {Data.map((singleData) => {
        return <Card singleData={singleData} key={singleData.id} />;
      })}
    </div>
  );
};

export default Cards;
