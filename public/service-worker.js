const APP_PREFIX = "w19c-budget-tracker-";
const VERSION = "v01";
const CACHE_NAME = `${APP_PREFIX}${VERSION}`;

//list all files needed to cache
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./js/idb.js",
  "./js/index.js",
  "./icons/icon-72x72.png",
  "./icons/icon-96x96.png",
  "./icons/icon-128x128.png",
  "./icons/icon-144x144.png",
  "./icons/icon-152x152.png",
  "./icons/icon-192x192.png",
  "./icons/icon-384x384.png",
  "./icons/icon-512x512.png",
  "./css/styles.css",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log(`${CACHE_NAME} is installing cache`);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
