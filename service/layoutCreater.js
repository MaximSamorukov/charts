function layout(type) {
  const obj = {
    graph: '12 graph-container',
    news: '5 news-container',
    list: '7 list-container'
  };
  return obj[type];
}

export { layout };