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
export { changeMarket, changeTicket };