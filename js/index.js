import React from 'react';
import immstruct from 'immstruct';
import PouchDB from 'pouchdb';
import auth from 'pouchdb-authentication';

const db = new PouchDB('https://couchdb-eff310.smileupps.com/kittens');
db.info().then(function (info) {
  console.log(info);
});

import App from './app';

import LiveMap from './live-map';

let data = immstruct({
    latlng: [0,
             27.566666700000040000]
});

const render = () =>
  React.render(
      LiveMap(data.cursor('latlng')),
    document.body);

render();
data.on('swap', render);
