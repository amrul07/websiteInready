import { Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import "./Kegiatan.css"

const Kegiatan = (props) => {
  const options = {
    options: {
      plotOptions: {
        bar: {
          horizontal: false,
          distributed: false,
          dataLabels: {
            hideOverflowingLabels: false
          }
        }
      },
      colors: ["#FFC400"],
      chart: {
        toolbar: {
              show: false,
              autoSelected: "selection",
            },
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
        
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      // labels: series.monthDataSeries1.dates,
      xaxis: {
        show: false,
        // type: 'datetime',
      },
      yaxis: {
        show: false,
        opposite: false
      },
      legend: {
        horizontalAlign: 'left'
      },
      tooltip:{
        show: false
      },
      grid: {
        show: false
    }
    },
  
  

  };

  return (
    <div>
      <Typography
        sx={{
          width: "80%",
          paddingTop: "20px",
          paddingBottom: "60px",
          pl: 3,
          fontWeight: 500,
          fontFamily: "Poppins"
        }}
      >
        Peningkatan kegiatan terlaksana tiap tahunnya
      </Typography>
      <ReactApexChart
        options={options.options}
        series={props.series}
        type="area"
        height={330}
        // width={200}
      />
    </div>
  );
};

export default Kegiatan;
