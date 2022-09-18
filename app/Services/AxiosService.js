// @ts-ignore
export const SandboxServer = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 2500
})

// @ts-ignore
export const SandboxImage = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images',
  timeout: 2500
})

// @ts-ignore
export const SandboxWeather = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 2500
})

// @ts-ignore
export const SandboxTodo = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/samw/todos',
  timeout: 2500
})

// @ts-ignore
export const SandboxQuote = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 1500
})