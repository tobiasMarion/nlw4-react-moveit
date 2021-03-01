import styles from "../styles/components/NavBar.module.css";

interface NavBarProps {
  page: number;
}

export function NavBar({ page }: NavBarProps) {
  return (
    <aside className={styles.NavBarContainer}>
      <a href="/">
        <img src="/logo.svg" alt="MoveIt" />
      </a>

      <nav>
        {page === 0 ? (
          <ul>
            <li className={styles.active}>
              <a href="#">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 29.3333V16H20V29.3333"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M15.9998 20C21.1545 20 25.3332 15.8214 25.3332 10.6667C25.3332 5.51205 21.1545 1.33337 15.9998 1.33337C10.8452 1.33337 6.6665 5.51205 6.6665 10.6667C6.6665 15.8214 10.8452 20 15.9998 20Z"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9468 18.52L9.3335 30.6667L16.0002 26.6667L22.6668 30.6667L21.0535 18.5067"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="#">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 29.3333V16H20V29.3333"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.active}>
              <a href="#">
                <svg
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M15.9998 20C21.1545 20 25.3332 15.8214 25.3332 10.6667C25.3332 5.51205 21.1545 1.33337 15.9998 1.33337C10.8452 1.33337 6.6665 5.51205 6.6665 10.6667C6.6665 15.8214 10.8452 20 15.9998 20Z"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.9468 18.52L9.3335 30.6667L16.0002 26.6667L22.6668 30.6667L21.0535 18.5067"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </aside>
  );
}
