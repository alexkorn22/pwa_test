'use strict';
importScripts('sw-toolbox.js'); 
toolbox.precache(
    [
        'index.html',
        'css/main.css',
        'css/bootstrap.min.css',
        'js/bootstrap.min.js',
        'js/jquery-3.3.1.min.js',
        'js/popper.min.js',
    ]
); 
toolbox.router.get('/img/*', toolbox.cacheFirst); 
toolbox.router.get('/*',
 toolbox.networkFirst, 
{ networkTimeoutSeconds: 5}
);