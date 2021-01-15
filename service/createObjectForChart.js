export default (item) => {
  console.log(item);
  const data = item.map(({ open, high, low, close, date }) => {
    return {
      x: date,
      y: [open, high, low, close]
    }
  });
  console.log(data);

  const options = {
    chart: {
      type: 'candlestick',
    },
    title: {
      text: 'Experimental data',
      align: 'center',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      }
    },
    series: [{
      data
    }],
  }
  return options;
}