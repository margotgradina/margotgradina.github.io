import {useState} from "react";
import {Resume} from "../types/types";

export const useAbout = () => {
  const [resume, setResume] = useState<Resume | null>(null);

  const onLoad = () => {
    fetchResume();
  };

  const fetchResume = () => {
    fetch("data/resume.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const newResume: Resume = data.Resume;
        setResume(newResume);
        console.log(newResume);
      })
      .catch()
      .finally();
  };

  return {
    onLoad,
    resume,
  };
};
