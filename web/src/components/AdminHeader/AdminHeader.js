import { Link, routes } from '@redwoodjs/router'

const AdminHeader = () => {
  return (
    <header className="header-admin">
      <h1>Admin</h1>
      <nav>
        <Link to={routes.posts()}>Posts</Link>
      </nav>
    </header>
  )
}

export default AdminHeader
