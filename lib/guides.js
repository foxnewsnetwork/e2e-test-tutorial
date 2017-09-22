const fs = require('fs');
const path = require('path');
const Showdown = require('showdown');
require('showdown-highlightjs-extension');

Showdown.setFlavor('github');
Showdown.setOption('parseImgDimensions', true);
Showdown.setOption('simplifiedAutoLink', true);
Showdown.setOption('strikethrough', true);
Showdown.setOption('ghMentions', true);

const converter = new Showdown.Converter({
  extensions: ['highlightjs']
});
const guidePath = (id) => path.resolve(__dirname, `../server/guides/${id}/index.md`);
const GUIDES_DIR = path.resolve(__dirname, '../server/guides');
const isDirectory = (source) => fs.lstatSync(path.join(GUIDES_DIR, source)).isDirectory();
const GUIDE_IDS = fs.readdirSync(GUIDES_DIR).filter(isDirectory);
const GUIDES_DATA_ARRAY = GUIDE_IDS.map(id => ({ type: 'guides', id }));
const GUIDE_FIXTURES = GUIDE_IDS.map((id) => {
  const body = converter.makeHtml(fs.readFileSync(guidePath(id), 'utf8'));
  return { id, body };
})

module.exports = {
  GUIDES_DATA_ARRAY,
  GUIDE_IDS,
  GUIDE_FIXTURES
};
