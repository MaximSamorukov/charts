export default ({ item, store: { interval, market, ticket, company, amount, ifAmount } }) => {
  // console.log(item);
  const data = item.map(({ open, high, low, close, date }) => {
    return {
      x: `${date.getUTCMonth() + 1}/${date.getUTCDate()} / ${date.getUTCHours()}:${date.getUTCMinutes()}`,
      y: [open, high, low, close]
    }
  }).reverse();
  console.log(data);

  const options = {
    chart: {
      type: 'candlestick',
      width: '100%',
      parentHeightOffset: 0
    },
    title: {
      text: `${company}, ${ticket}, ${market}, ${interval}, ${ifAmount && amount}`,
      align: 'center',
    },
    xaxis: {
      type: 'category',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    series: [{
      data
    }],
    grid: {
      show: true,
      borderColor: '#111',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        }
      },
      yaxis: {
        lines: {
          show: true,
        }
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    }
  }
  return options;
}