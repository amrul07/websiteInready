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


const colors = ["#DF8704", "#04DF76"]


var color = colors[Math.floor(Math.random()*colors.length)];
  const [event, setEvent] = useState([]);

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
          events={event}
        />
        <div sx={{fontFamily: "Poppins"}} className="custom-header-right">Tabel Kegiatan</div>
      </div>
    </>
  );
};

export default Kalender;
