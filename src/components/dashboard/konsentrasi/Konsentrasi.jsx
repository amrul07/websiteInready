// import { Block, Margin, Style } from "@mui/icons-material";
import {} from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Konsentrasi.css";

const Konsentrasi = (props) => {
  // const web = 90;
  // const mobile = 35;
  // const desain = 45;
  // const total = web + mobile + desain;

  const options = {
    labels: ["website", "desain", "mobile"],

    chart: {
      fontFamily: "Inter",
      fontWeight: 400,
      marginLeft: "10px",
      color: "red",
    },
    colors: ["#11E54C", "#FFC400", "#11A5E5", "#000"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "40px",
          labels: {
            show: false,
            showAlways: true,
            fontSize: "20px",
            color: "#2728",
          },
        },
      },
    },
    legend: {
      offsetX: -15,
      offsetY: -5,
      fontWeight: 400,
      labels: {
        colors: "black",

        // useSeriesColors: false
      },
      markers: {
        width: 14,
        height: 14,
        offsetX: -5,
        offsetY: 3,
      },
      itemMargin: {
        // horizontal: 15,
        vertical: 8,
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        height={500}
        width={"100%"}
        options={options}
        series={props.series}
        total={options.total}
        type="donut"
      />
    </div>
  );
};
export default Konsentrasi;
