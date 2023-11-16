import { useState } from "react";
import { addDays } from "date-fns";

import { Button, ShortArrowIcon } from "commons";
import { Week } from "./Week";

export const Calendar = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const nextWeek = () => {
    setCurrentWeek(addDays(currentWeek, 7));
  };

  const prevWeek = () => {
    setCurrentWeek(addDays(currentWeek, -7));
  };

  return (
    <div className="flex items-center justify-around w-full p-4">
      <Button variant="secondary" onClick={prevWeek}>
        <ShortArrowIcon className="w-4     " />
      </Button>
      <Week currentWeek={currentWeek} />
      <Button variant="secondary" onClick={nextWeek}>
        <ShortArrowIcon className="w-4  rotate-180  " />
      </Button>
    </div>
  );
};
