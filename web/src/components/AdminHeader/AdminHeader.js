import { Link, routes } from '@redwoodjs/router'
import { useIdentityContext } from 'react-netlify-identity'

const AdminHeader = () => {
  const { logoutUser } = useIdentityContext()
  return (
    <header className="header-admin">
      <h1>Admin</h1>
      <nav>
        <Link to={routes.posts()}>Posts</Link>
      </nav>
      <nav>
        <button onClick={logoutUser}>Sign Out</button>
      </nav>
    </header>
  )
}

export default AdminHeader
