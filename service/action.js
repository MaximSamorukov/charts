const changeMarket = (market) => {
  return ({
    type: 'CHANGE_MARKET',
    payload: {
      market,
    }
  })
}

const changeTicket = (ticket) => {
  return ({
    type: 'CHANGE_TICKET',
    payload: {
      ticket,
    }
  })
}

const addData = (news) => {
  return ({
    type: 'ADD_NEWS',
    payload: {
      news
    }
  })
}

const addChartData = (dataForCharts) => {
  return ({
    type: 'ADD_CHART_DATA',
    payload: {
      dataForCharts
    }
  })
}

const changeInterval = (interval) => {
  return ({
    type: 'CHANGE_INTERVAL',
    payload: {
      interval
    }
  })
}

const changeAmount = (amount) => {
  return ({
    type: 'CHANGE_AMOUNT',
    payload: {
      amount
    }
  })
}

const toggleIfAmount = () => {
  return ({
    type: 'TOGGLE_AMOUNT',
  })
}

const updateGraphOnOptions = (payload) => {
  return ({
    type: 'UPDATE_GRAPH_ON_OPTIONS',
    payload,
  })
}

export { updateGraphOnOptions, toggleIfAmount, changeMarket, changeTicket, addData, addChartData, changeInterval, changeAmount };