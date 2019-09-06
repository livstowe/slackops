const _ = require('lodash');
const baseUrl = 'https://http.cat';

exports.main = (req, res) => {
  const statusCode = _.get(req, 'body.text') || '404';
  const imageUrl = `${baseUrl}/${statusCode}.jpg`;

  res.json({
    attachments: [
      {
          title: 'catus',
          image_url: imageUrl,
          color: '#764FA5',
      }
    ]
  });
};
