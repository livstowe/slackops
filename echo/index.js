const _ = require('lodash');

exports.main = (req, res) => {
  const text = _.get(req, 'body.text') || 'echo echo echo';
  res.json({ text: `> :speaker: ${text}` });
};
