export function AppHeader({ onChangePage }) {
  return (
    <header className="main-header flex justify-between items-center">
      <h1 className="logo">
        Watch<span className="fw-bold clr-teal">Gram</span>
      </h1>
      <nav className="nav flex gap-2">
        <div onClick={() => onChangePage(null)} className="link">
          Home
        </div>
        <div onClick={() => onChangePage('contact')} className="link">
          Contacts
        </div>
        <div onClick={() => onChangePage('about')} className="link">
          About
        </div>
      </nav>
    </header>
  )
}
