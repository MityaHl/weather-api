self.addEventListener('fetch', event => {
  const time = new Date()
  const SECONDS_IN_TWO_HOURS = 7200000
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        const responseTime = response.headers.get('time')
        if (Number(time.getTime() - responseTime) < SECONDS_IN_TWO_HOURS) {
          return response
        }
      }

      return fetch(event.request)
        .then(fetchResponse => {
          const requestInit = {
            status: fetchResponse.status,
            statusText: fetchResponse.statusText,
            headers: {
              time: time.getTime(),
            },
          }
          fetchResponse.headers.forEach((value, key) => {
            requestInit.headers[key] = value
          })
          return caches.open('v1').then(cache => {
            const responseCopy = fetchResponse.clone()
            responseCopy.blob()
              .then(body => {
                cache.put(event.request, new Response(body, requestInit))
              })
            return fetchResponse
          })
        })
    })
  )
})
