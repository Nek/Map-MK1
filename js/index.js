import React from 'react';
//import component from 'omniscient';
import immstruct from 'immstruct';

//import SimpleExample from "./simple";

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
