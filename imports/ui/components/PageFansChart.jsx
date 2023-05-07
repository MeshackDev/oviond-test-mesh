import React from 'react';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ReportsCollection } from '../../api/ReportsCollection';

export const PageFansChart = ({ clientID }) => {
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
      const reports = ReportsCollection.find({ clientID: clientID }, { sort: { createdAt: 1 } }).fetch();
      console.log('reports in chart',reports[0]);

      const chartData = {
        name: reports[0].title,
        data: reports[0].values.map((value) => [Date.parse(value.end_time), value.value])
      }

      setChartOptions({
        title: {
          text: 'Page Fans Data'
        },
        credits: {
          enabled: false,
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
