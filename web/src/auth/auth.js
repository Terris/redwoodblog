import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl: 'https://hungry-morse-d74a4b.netlify.com/.netlify/identity',
  audience: '',
  setCookie: true,
})

export { auth }
