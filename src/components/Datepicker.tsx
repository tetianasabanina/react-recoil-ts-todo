import "flatpickr/dist/themes/material_green.css";
import { useRef, useState } from "react";

import Flatpickr from "react-flatpickr";
import { Dutch } from "flatpickr/dist/l10n/nl.js";

export const Datepicker = () => {
  const [date, setDate] = useState<Date[] | null>();

  const handleChange = (dateValue: Date[], dateStr: string) => {
    console.log(dateValue, dateStr);
    const newDate = new Date(dateStr);
    console.log(newDate);
    setDate([newDate]);
    console.log(date);
  };
  /*  const [isOpen, setIsOpen] = useState(false);
  const fp = useRef<any>(null);
 */
  return (
    <Flatpickr
      value={date}
      onChange={(date, dateStr) => {
        console.log(date, dateStr);
        /* setDate(date); */
        handleChange(date, dateStr);
      }}
      options={{
        errorHandler: (error) => {
          console.log("Error", error);
        },
        altInput: true,
        dateFormat: "d-m-Y",
        altFormat: "dmY",
        locale: Dutch,
        allowInput: true,
        /*  parseDate: (datestr, format) => {
          return moment(datestr, format, true).toDate();
        },
        formatDate: (date, format, locale) => {
          // locale can also be used
          return moment(date).format(format);
        }, */

        /*  disableMobile: true,
        clickOpens: false,
        inline: isOpen, */
      }}
      /*       ref={fp}
       */
    />
  );
};
