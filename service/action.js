const changeMarket = (market) => {
  return ({
    type: 'CHANGE_MARKET',
    payload: {
      market,
    }
  })
}

export { changeMarket };