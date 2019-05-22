const fetch = require('node-fetch')

exports.grabIt = (req, res) => {
  console.log(req)
  fetch('http://quotes.rest/qod.json?category=inspire')
    .then(response => response.json())
    .then(data => {
      let quote = data.contents.quotes[0]
      console.log(`${quote.quote}\n-${quote.author}`)
      res.status(200).send(`${quote.quote}\n-${quote.author}`)
    })
    .catch(error => {
      console.log(error)
      res.status(400).send(error)
    })
}
