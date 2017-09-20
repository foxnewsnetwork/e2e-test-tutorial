/* eslint-env node */
'use strict';
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
const guidePath = (id) => path.resolve(__dirname, `../guides/${id}/index.md`);
const GUIDES_DIR = path.resolve(__dirname, '../guides');
const isDirectory = (source) => fs.lstatSync(path.join(GUIDES_DIR, source)).isDirectory();
const GUIDE_IDS = fs.readdirSync(GUIDES_DIR).filter(isDirectory);
const GUIDES_DATA_ARRAY = GUIDE_IDS.map(id => ({ type: 'guides', id }));
const fsDB = {
  find(id) {
    const body = fs.readFileSync(guidePath(id), 'utf8');

    return body;
  }
}

module.exports = function(app) {
  const express = require('express');
  let guidesRouter = express.Router();

  guidesRouter.get('/', function(req, res) {
    res.send({
      data: GUIDES_DATA_ARRAY
    });
  });

  // guidesRouter.post('/', function(req, res) {
  //   res.status(201).end();
  // });

  guidesRouter.get('/:id', function(req, res) {
    const { params: { id } } = req;
    res.send({
      data: {
        type: 'guides',
        id,
        attributes: {
          body: converter.makeHtml(fsDB.find(id))
        }
      }
    });
  });

  // guidesRouter.put('/:id', function(req, res) {
  //   res.send({
  //     'guides': {
  //       id: req.params.id
  //     }
  //   });
  // });

  // guidesRouter.delete('/:id', function(req, res) {
  //   res.status(204).end();
  // });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/guides', require('body-parser').json());
  app.use('/api/guides', guidesRouter);
};
