import { NavLink } from "react-router-dom";



function Nav(){
    
      const menu = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'LinkedIn', path: 'https://www.linkedin.com/in/damiano-maugeri-a15b5336b', external: true, icon: true }
  ]

  return <nav>
            <ul className='d-flex justify-content-center gap-4  align-items-center'>
                {
                    menu.map(({ path, label, external, icon }, i) => (
                    <li key={i}>
                        {
                        external ? (
                            <a href={path} target="_blank" rel="noopener noreferrer" className='py-2 px-3'>
                            {icon ? <i className="bi bi-linkedin fs-4 text-white"></i> : label}
                            </a>
                        ) : (
                            <NavLink className='py-2 px-3 hover:text-blue-950' to={path}>
                            {({ isActive }) => (
                                <span className={isActive ? 'text-warning' : ''}>{label}</span>
                            )}
                            </NavLink>
                        )
                        }
                    </li>
                    ))
                }
            </ul>
  </nav>
};

export default Nav;