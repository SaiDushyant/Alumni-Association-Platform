import { useParams } from 'react-router-dom';
import './InstitutionHome.scss'; // Import SCSS for custom styling

function InstitutionHome() {
  const { institution } = useParams();

  return (
    <div className="app-container">
      <aside id="sidebar" className="sidebar break-point-lg has-bg-image">
        <div className="sidebar-layout">
          <div className="sidebar-header">
            <img
              src="https://imgs.search.brave.com/O6rLvO8-5IAjWakgOKrUpBMPRo2IDSw78luSsXhnQbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc"
              alt="Profile"
              className="mx-auto h-28 w-28 rounded-full border-2"
            />
          </div>
          <div className="sidebar-content">
            <nav className="menu">
              <ul>
                <li className="menu-item mt-2 rounded-3xl bg-orange-500 text-center font-bold text-white hover:bg-orange-600">
                  <a href="#">
                    <span className="menu-title">Success stories</span>
                  </a>
                </li>
                <li className="menu-item mt-2 rounded-3xl bg-orange-500 text-center font-bold text-white hover:bg-orange-600">
                  <a href="#">
                    <span className="menu-title">Network hub</span>
                  </a>
                </li>
                <li className="menu-item mt-2 rounded-3xl bg-orange-500 text-center font-bold text-white hover:bg-orange-600">
                  <a href="#">
                    <span className="menu-title">Job portal</span>
                  </a>
                </li>
                <li className="menu-item mt-2 rounded-3xl bg-orange-500 text-center font-bold text-white hover:bg-orange-600">
                  <a href="#">
                    <span className="menu-title">Events & Reunions</span>
                  </a>
                </li>
                <li className="menu-item mt-2 rounded-3xl bg-orange-500 text-center font-bold text-white hover:bg-orange-600">
                  <a href="#">
                    <span className="menu-title">Feedback & Survey</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
      <main className="main-content">
        <section className="flex h-16 w-full items-center justify-between bg-gray-500">
          <h1 className="ml-4 text-2xl capitalize text-white">{institution}</h1>
          <button className="flex items-center justify-center rounded bg-orange-500 p-2 text-white hover:bg-orange-600">
            <span className="material-symbols-outlined">logout</span> Log Out
          </button>
        </section>
      </main>
    </div>
  );
}

export default InstitutionHome;
