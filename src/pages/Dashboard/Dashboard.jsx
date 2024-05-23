import sendRequest from "../../utilities/send-request";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { useState, useEffect } from "react";

export default function Dashboard({ experiences }) {
  

  return (
    <>
      <ul className="Dashboard">{experiences.map((e, idx) =>  (
        <ExperienceItem experience={e} key={idx} />
      ))}</ul>
    </>
  );
}
