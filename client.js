// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  
  r360.renderToLocation(
    r360.createRoot('map', { /* initial props */ }),
    r360.getDefaultLocation()
  );

  

  r360.renderToLocation(
    r360.createRoot('immersionImagery', { /* initial props */ }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('immersionSection', { /* initial props */ }),
    r360.getDefaultLocation()
  );

  r360.renderToLocation(
    r360.createRoot('postHumanism', { /* initial props */ }),
    r360.getDefaultLocation()
  );
  r360.renderToLocation(
    r360.createRoot('selfAutomation', { /* initial props */ }),
    r360.getDefaultLocation()
  );


  console.log(r360.getDefaultLocation());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
