import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const LineGraph = ({data}) => {
  console.log(data,"datadatadatadatadata");
  const categories = data.map((entry) => entry.category);
  const amounts = data.map((entry) => entry.amount);
  return (
    <LineChart
      xAxis={[{ data: amounts }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, ],
        },
      ]}
      width={500}
      height={300}
    />

  )
}

export default LineGraph