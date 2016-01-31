//// <reference path="../typings/browser.d.ts"/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as geom from '../lib/geom';
import {AppView} from '../lib/views/app';

// Runs the app.
export function main() {
  console.log("> Main");

  let appElement = document.querySelector("#app");
  ReactDOM.render(<AppView/>, appElement);
}
