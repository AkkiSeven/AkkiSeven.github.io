self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(["./", "./style.css", "./images/January.jpg"]);
    })
  );
});

self.addEventListener("fetch", e => {
  console.log(`Intercepting fetch request for: ${e.request.url}`);
})