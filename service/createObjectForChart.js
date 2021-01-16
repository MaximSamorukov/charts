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
      }
    },
    series: [{
      data
    }],
  }
  return options;
}