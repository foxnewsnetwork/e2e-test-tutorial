/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let guidesRouter = express.Router();

  guidesRouter.get('/', function(req, res) {
    res.send({
      'guides': []
    });
  });

  guidesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  guidesRouter.get('/:id', function(req, res) {
    res.send({
      'guides': {
        id: req.params.id
      }
    });
  });

  guidesRouter.put('/:id', function(req, res) {
    res.send({
      'guides': {
        id: req.params.id
      }
    });
  });

  guidesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

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
