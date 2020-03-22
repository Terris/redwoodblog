import { auth } from '../../auth'

const AdminLayout = ({ children }) => {
  const user = auth.currentUser()
  console.log(user)
  if (!user) {
    auth
      .login('terris.kremer@gmail.com', 'squeeza')
      .then((response) => {
        console.log('Success! Response: ' + JSON.stringify({ response }))
      })
      .catch((error) => console.log('Failed :( ' + JSON.stringify(error)))

    return <p>Not authorized</p>
  }
  return <>{children}</>
}

export default AdminLayout
