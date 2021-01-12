function layout(type) {
  const obj = {
    graph: 12,
    news: 7,
    list: 5
  };
  return obj[type];
}

export { layout };