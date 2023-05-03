import React from 'react';
// import { Meteor } from 'meteor/meteor';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ReportsCollection } from '../../api/ReportsCollection';

export const PageFansChart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const handle = Meteor.subscribe('reports', {
      onReady: () => setIsLoading(false),
      onStop: (error) => console.error(error)
    });

    return () => handle.stop();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const reports = ReportsCollection.find({}, { sort: { createdAt: 1 } }).fetch();
      const chartData = reports.map((report) => ({
        name: report.title,
        data: report.values.map((value) => [Date.parse(value.end_time), value.value])
      }));

      setChartOptions({
        title: {
          text: 'Page Fans Data'
        },
        xAxis: {
          type: 'datetime',
          title: {
            text: 'Date'
          }
        },
        yAxis: {
          title: {
            text: 'Number of Fans'
          }
        },
        series: chartData
      });
    }
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <HighchartsReact 
            highcharts={Highcharts} 
            options={chartOptions} 
          />
        </div>
      )}
    </div>
  );
};
