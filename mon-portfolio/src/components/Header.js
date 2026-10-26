"use client";

import {useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;

  }, []);

  function handleTheme(event) {
    const newTheme = event.target.checked ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  return (
    
    <header>
      <nav className="navbar bg-base-100 text-base-content px-8 shadow-lg">
        <div className="navbar-start">

          <details className="dropdown dropdown-start lg:hidden">
            <summary className="btn btn-circle btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd"
                  d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd">
                </path>
              </svg>
            </summary>

            <ul className="menu dropdown-content z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/project">Mes projets</Link></li>
              <li><Link href="/journey">Mon parcours</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="/MENGQI_CHEN_CV.pdf" download> Télécharger mon CV</a></li>
            </ul>

          </details>

          <Link className="btn btn-ghost text-xl" href="./">mengqi chen</Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link href="/about" className={`rounded-md px-3 py-2 transition-colors hover:text-base-content ${pathname === "/about" ? "nav-link-active" : "text-base-content hover:bg-base-200" }`}>A propos
              </Link>
            </li>

            <li>
              <Link href="/project" className={`rounded-md px-3 py-2 transition-colors hover:text-base-content ${pathname === "/project" ? "nav-link-active" : "text-base-content hover:bg-base-200" }`} >Mes projets
              </Link>
            </li>

            <li>
              <Link href="/journey" className={`rounded-md px-3 py-2 transition-colors hover:text-base-content ${pathname === "/journey" ? "nav-link-active" : "text-base-content hover:bg-base-200" }`}>Mon parcours
              </Link>
            </li>

            <li>
              <Link href="/contact" className={`rounded-md px-3 py-2 transition-colors hover:text-base-content ${pathname === "/contact" ? "nav-link-active" : "text-base-content hover:bg-base-200" }`} >Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">

          {/* toggle pour changer de thème */}

          <label className="toggle text-base-content">
            <input type="checkbox" checked={theme === "dark"} onChange={handleTheme}/>

            <svg aria-label="Soleil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                <path d="m4.93 4.93 1.41 1.41M17.66 17.66l1.41 1.41" />
                <path d="m6.34 17.66-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </g>
            </svg>

            <svg aria-label="Lune" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </g>
            </svg>
          </label>


          {/* télécharger le CV */}

          <div className="pl-5">
            <a href="/MENGQI_CHEN_CV.pdf" download className="btn btn-sm rounded-md py-4.5 border-base-content/30 bg-transparent text-lg font-normal text-base-content hover:bg-base-200 hidden lg:flex"> <span className="text-2xl">⭳</span>CV</a>
          </div>
          {/* selection de langue */}

          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <details>
                <summary>Langue</summary>
                <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-28 p-2 shadow-sm divide-y divide-base-200 text-base">
                  <li><a>FR</a></li>
                  <li><a>EN</a></li>
                </ul>
              </details>
            </li>
          </ul>

        </div>
      </nav>
    </header>
  );
}