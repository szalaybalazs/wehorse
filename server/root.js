const fs = require('fs');
const path = require('path');

const template = fs.readFileSync(
  path.resolve(__dirname, '../static/index.html'),
  'utf8'
).replace(/[\n\r\t]/gi, '');

module.exports = async (req, res) => {
  let variables = '';
  variables += `window.user = ${JSON.stringify(req.user)};`;

  const html = template
    .replace('__data__', variables);

  res.send(html);
}
