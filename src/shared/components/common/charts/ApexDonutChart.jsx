import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {
        labels: ['GCP', 'AWS', 'OCI', 'DOC'],
        legend: {
          position: 'bottom',
        },
        theme: {
          monochrome: {
            enabled: false,
          },
        },
        chart: {
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log(config.w.config.labels[config.dataPointIndex]);
            },
          },
        },
      },
      series: [44, 55, 13, 43],
    };
  }

  render() {
    return (
      <div id='chart' className='flex-1'>
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.series}
          type='pie'
          width='100%'
        />
      </div>
    );
  }
}

export default PieChart;
