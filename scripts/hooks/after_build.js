/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/

'use strict';

module.exports = function (configObj) {
  return new Promise((resolve, reject) => {
    console.log("Running after_build hook.");
    // console.log('configObj: '+ JSON.stringify(configObj));
    if(configObj.buildType === 'release'){
      // do something here to copy production files to /dist folder
      // which can then be used with a dockerfile
    }
  	resolve();
  });
};
