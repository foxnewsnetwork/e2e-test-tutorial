const fs = require('fs');
const path = require('path');

const GUIDES_DIR = path.resolve(__dirname, 'server/guides');
const isDirectory = (source) => fs.lstatSync(path.join(GUIDES_DIR, source)).isDirectory();
const GUIDE_IDS = fs.readdirSync(GUIDES_DIR).filter(isDirectory).map(id => `/guide/${id}`);
// Here's your chance to specify what routes will be statically pre-rendered
module.exports = ["/"].concat(GUIDE_IDS);
