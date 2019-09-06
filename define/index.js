const _ = require('lodash');
const axios = require('axios');
const baseUrl = 'http://api.urbandictionary.com/v0';

exports.main = (req, res) => {
  const term = _.get(req, 'body.text');
  const url = _.isNil(term) ?
    `${baseUrl}/random` :
    `${baseUrl}/define?term=${term}`;

  axios.get(url)
  .then((response) => {
    const def = _.get(response, 'data.list[0].definition') ||
    'no definition found';

    res.json({ text: `:book: Define [ *${term || '???'}* ] \n ${def}` });
  })
  .catch(() => {
    res.json({ text: 'problem getting definition' });
  });
};
