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
export { changeMarket, changeTicket, addData };