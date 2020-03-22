import { Link, routes } from '@redwoodjs/router'
import { useIdentityContext } from 'react-netlify-identity'
import AdminHeader from 'src/components/AdminHeader'

const AdminLayout = ({ children }) => {
  const { user } = useIdentityContext()
  console.log(user)
  return user ? (
    <>
      <AdminHeader />
      {children}
    </>
  ) : (
    <div>
      <h3>
        You are not authorized to view that page.{' '}
        <Link to={routes.signin()}>Please sign in.</Link>
      </h3>
    </div>
  )
}

export default AdminLayout
