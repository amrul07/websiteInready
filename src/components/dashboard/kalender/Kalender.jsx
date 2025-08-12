import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import "./kalender.css";
import { useRef, useState } from "react";
import { Typography } from "@mui/material";

const Kalender = () => {
  const colors = ["#DF8704", "#04DF76"];

  var color = colors[Math.floor(Math.random() * colors.length)];
  const [event, setEvent] = useState([]);

  const date = new Date();
  const tahun = date.getFullYear(); // ambil tahun (misalnya 2025)
  const bulan = date.getMonth() + 1; // ambil bulan (0-11), jadi tambahkan +1

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable
          droppable
          selectable
          headerToolbar={{
            left: "prev,next today",
            center: `title`,
            right: null,
          }}
          select={(arg) => {
            const title = prompt("Nama Event: ");
            const startDate = arg.startStr;
            const endDate = arg.endStr;

            const list = [...event];
            // const list = [...event];

            list.push({
              title: title,
              start: startDate,
              end: endDate,
              backgroundColor: color,
              borderColor: color,
              fontFamily: "Poppins",
            });
            setEvent(list);
          }}
          // eventBorderColor={color}
          height={350}
          // contentHeight={1900}
          // events={event}
          events={[
            {
              title: "Bootcamp",
              date: `${tahun}-0${bulan}-03`,
              end: `${tahun}-0${bulan}-08`,
              color: "#DF8704",
            },
            {
              title: "Open House",
              date: `${tahun}-0${bulan}-12`,
              end: `${tahun}-0${bulan}-15`,
              color: "#04DF76",
            },
          ]}
        />
        <div sx={{ fontFamily: "Poppins" }} className="custom-header-right">
          Tabel Kegiatan
        </div>
      </div>
    </>
  );
};

export default Kalender;
