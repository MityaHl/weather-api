// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.match(event.request)
//         .then(function(response) {
//           if (response) {
//             return response;
//           }
  
//           var fetchRequest = event.request.clone();
  
//           return fetch(fetchRequest).then(
//             function(response) {
//               if(!response || response.status !== 200 || response.type !== 'basic') {
//                 return response;
//               }
  
//               var responseToCache = response.clone('cache');
  
//               caches.open()
//                 .then(function(cache) {
//                   cache.put(event.request, responseToCache);
//                 });
  
//               return response;
//             }
//           );
//         })
//       );
//   });


self.addEventListener('fetch', (event) => {
  const time = new Date;
  event.request.time = time.toLocaleTimeString();
  console.log(event.request);
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});