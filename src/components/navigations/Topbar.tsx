import { useTheme } from "next-themes";
import { ButtonHTMLAttributes, FunctionComponent, forwardRef } from "react";

export const Topbar: FunctionComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <nav className="h-[4.5rem] bg-white flex items-center justify-between px-10 dark:bg-dark-primary py-2">
      <section className="text-gray-700 dark:text-zinc-100"></section>
      <section className="flex items-center gap-4">
        <ul className="flex items-center">
          <li role="menuitem">
            <TopbarMenuItemButton onClick={handleChangeTheme}>
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10a9.986 9.986 0 0 1-3.321-.564A8.973 8.973 0 0 1 8 18a8.97 8.97 0 0 1 2.138-5.824A6.493 6.493 0 0 0 15.5 15a6.496 6.496 0 0 0 5.567-3.143c.24-.396.933-.32.933.143Z"
                      clipRule="evenodd"
                      opacity=".5"
                    ></path>
                    <path d="M2 12c0 4.359 2.789 8.066 6.679 9.435A8.973 8.973 0 0 1 8 18c0-2.221.805-4.255 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.496 6.496 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12Z"></path>
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor">
                    <path d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z"></path>
                    <path
                      fillRule="evenodd"
                      d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      d="M3.67 3.716a.75.75 0 0 1 1.059-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.717 4.775a.75.75 0 0 1-.048-1.06Zm16.662 0a.75.75 0 0 1-.047 1.06l-2.223 2.03A.75.75 0 1 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048Zm-3.306 13.309a.75.75 0 0 1 1.06 0l2.223 2.222a.75.75 0 1 1-1.061 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06Zm-10.051 0a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0Z"
                      opacity=".5"
                    ></path>
                  </g>
                </svg>
              )}
            </TopbarMenuItemButton>
          </li>

          <li role="menuitem">
            <TopbarMenuItemButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1.25em"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path
                    d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12Z"
                    opacity=".5"
                  ></path>
                  <path d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></path>
                </g>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-gray-700 dark:text-zinc-100"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14 3v.29c2.892.86 5 3.539 5 6.71v7h1v2H4v-2h1v-7a7.003 7.003 0 0 1 5-6.71V3a2 2 0 1 1 4 0ZM7 17h10v-7a5 5 0 0 0-10 0v7Zm7 4v-1h-4v1a2 2 0 1 0 4 0Z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
            </TopbarMenuItemButton>
          </li>
        </ul>
        <button className="bg-indigo-500 h-10 w-10 flex items-center justify-center rounded-md">
          <span className="text-white font-bold">ES</span>
        </button>
      </section>
    </nav>
  );
};

const TopbarMenuItemButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`${className} h-10 w-10 flex items-center justify-center rounded-full border-2 border-transparent hover:border-gray-200 p-[0.4rem] focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 dark:ring-indigo-400 dark:focus:border-transparent dark:hover:border-gray-800 outline-none`}
    >
      {children}
    </button>
  );
});

TopbarMenuItemButton.displayName = "TopbarMenuItemButton";
