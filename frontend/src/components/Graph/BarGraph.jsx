import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BarGraph = ({ data }) => {
  const categories = data.map(entry => entry.category);
  const amounts = data.map(entry => entry.amount);

  return (
    <div className='justify-center'>
      <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: categories, // Use category names as x-axis labels
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: amounts, // Use amounts as the data for the bars
        },
      ]}
      width={1000}
      height={300}
    />
    </div>
  );
};

export default BarGraph;
