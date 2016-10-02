/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/iconmap              ->  index
 * POST    /api/iconmap              ->  create
 * GET     /api/iconmap/:id          ->  show
 * PUT     /api/iconmap/:id          ->  upsert
 * PATCH   /api/iconmap/:id          ->  patch
 * DELETE  /api/iconmap/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import IconMap from './iconmap';

// Gets a list of Iconmaps
export function index(req, res) {
  res.send(IconMap());  
}
