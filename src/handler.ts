const CURRENT_EVENT = '/2021/'
const CURRENT_EVENT_HOST = '2021.kaigionrails.org'
const PAST_EVENT_HOST = 'past.kaigionrails.org'

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)

  if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
    url.pathname = url.pathname + '/'
  }

  if (url.pathname === '/') {
    url.pathname = CURRENT_EVENT
    return Response.redirect(url.toString(), 302)
  }
  if (url.pathname.startsWith(CURRENT_EVENT)) {
    url.hostname = CURRENT_EVENT_HOST
    console.log(url.pathname)
    return fetch(url.toString())
  } else {
    url.hostname = PAST_EVENT_HOST
    console.log(url.toString())
    return fetch(url.toString())
  }
  return new Response(`request method: ${request.method}`)
}
