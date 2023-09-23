import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchData } from "../../../service/api";

const Agenta = (props) => {
  const data = {
    // series: seriesData,

    options: {
      chart: {
        toolbar: {
          show: false,
          autoSelected: "selection",
        },

        height: 350,
        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        labels: {
          show: true,
          align: "left",
          minWidth: 90,
          maxWidth: 170,
          style: {
            colors: "black",
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: 400,
            cssClass: "apexcharts-yaxis-label",
          },
          offsetX: -10,
          offsetY: 0,
          rotate: 0,
          // formatter: (value) => { return val },
        },
      },
    },
  };

  return (
    <div>
      <Stack sx={{ ml: 3, pt: 2 }}>
        <Typography
          sx={{ fontFamily: "Poppins", fontSize: "14px", fontWeight: 500 }}
        >
          Agenda yang akan datang
        </Typography>
      </Stack>
      <ReactApexChart
        options={data.options}
        series={props.series}
        type="rangeBar"
        height={270}
      />
    </div>
  );
};

export default Agenta;
