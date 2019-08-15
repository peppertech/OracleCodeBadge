/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/

'use strict';

const fs = require('fs-extra');
module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
    console.log("Running after_build hook.");
    // console.log('configObj: '+ JSON.stringify(configObj));
    if(configObj.buildType === 'release'){
      // do something here to copy production files to /dist folder
      // which can then be used with a dockerfile
      fs.copy('./web/index.html', './dist/app/index.html', (err) => {
        if (err) throw err;
        console.log('copied index.html');
      });
      fs.copy('./web/media/', './dist/app/media/', (err) => {
        if (err) throw err;
        console.log('copied media folder');
      });
      fs.copy('./web/img/', './dist/app/img/', (err) => {
        if (err) throw err;
        console.log('copied img folder');
      });
      fs.copy('./web/css/', './dist/app/css/', (err) => {
        if (err) throw err;
        console.log('copied css folder');
      });
      fs.copy('./web/js/main.js', './dist/app/js/main.js', (err) => {
        if (err) throw err;
        console.log('copied js/main.js file');
      });
      fs.copy('./web/js/libs/require/', './dist/app/js/libs/require/', (err) => {
        if (err) throw err;
        console.log('copied requirejs libraries');
      });
      fs.copy('./web/js/libs/oj/v7.1.0/resources/nls', './dist/app/js/libs/oj/v7.1.0/resources/nls', (err) => {
        if (err) throw err;
        console.log('copied jet nls resource files');
      });
      fs.copy('./web/js/libs/oj/v7.1.0/resources/root', './dist/app/js/libs/oj/v7.1.0/resources/root', (err) => {
        if (err) throw err;
        console.log('copied jet root resource files');
      });      
    }
  	resolve();
  });
};
