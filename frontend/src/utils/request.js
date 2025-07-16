export function request(path, method, data) {
  return fetch('/api' + path, {
    headers: {
     'content-type': 'application/json',
    },
    method: method || 'GET',
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res.json());
}
