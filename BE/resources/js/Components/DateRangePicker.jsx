import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { isEmpty } from "../Utils";

export const CalendarRange = ({ onChange, value, minDate }) => {
    const newValue = isEmpty(value)
        ? {
              startDate: new Date(),
              endDate: new Date(),
              key: "selection",
          }
        : value;

    return (
        <DateRange
            onChange={(item) => onChange(item.selection)}
            className="w-full"
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={[newValue]}
            minDate={minDate}
        />
    );
};
