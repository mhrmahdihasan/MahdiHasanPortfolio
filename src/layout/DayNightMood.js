import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
const DayNightMood = () => {
  const [night, setNight] = useState(true);
  const changeMood = () => {
    document.querySelector("body").classList.toggle("theme-light");
  };
  return (
    <label className="color_switch" onClick={() => changeMood()}>
      <BsFillMoonStarsFill />
    </label>
  );
};
export default DayNightMood;
