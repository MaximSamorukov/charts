const initstate = {
  market: 'NYSE',
  company: 'Agilent Technologies Inc',
  ticket: 'A',
  news: [
    {
      author: "Sharon Wrobel",
      clean_url: "tipranks.com",
      country: "IS",
      language: "en",
      link: "https://blog.tipranks.com/google-nokia-partner-to-develop-cloud-based-5g-network/",
      published_date: "2021-01-14 16:35:51",
      rank: "64651",
      rights: "tipranks.com",
      summary: "Nokia has teamed up with Google Cloud to develop 5G core network infrastructure and enable business customers to offer a platform for smart retail, automated manufacturing, and other online consumer Read More... The post Google, Nokia Partner To Develop Cloud-Based 5G Network appeared first on TipRanks Financial Blog.",
      title: "Google, Nokia Partner To Develop Cloud-Based 5G Network",
      topic: "finance",
      _id: "20915dab2f369d8dbbe29b5a4efbf9a1",
    }
  ],
  interval: '15min',
  amount: 52,
  start: Date.now(),
  end: Date.now(),
  ifAmount: true,
  dataAvailable: 'not-available', // 'not-available', 'available' if data with quoutes is get from api
  dataForCharts: {},
}

export { initstate };