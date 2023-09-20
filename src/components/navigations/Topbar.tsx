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
        <ul className="flex items-center gap-2">
          <li role="menuitem">
            <TopbarMenuItemButton onClick={handleChangeTheme}>
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="text-gray-700 dark:text-zinc-100"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.226 2.003a9.971 9.971 0 0 0-7.297 2.926c-3.905 3.905-3.905 10.237 0 14.142c3.905 3.905 10.237 3.905 14.142 0a9.972 9.972 0 0 0 2.926-7.297a10.037 10.037 0 0 0-.337-2.368a14.87 14.87 0 0 1-1.744 1.436c-1.351.949-2.733 1.563-3.986 1.842c-1.906.423-3.214.032-3.93-.684c-.716-.716-1.107-2.024-.684-3.93c.279-1.253.893-2.635 1.841-3.986c.415-.592.894-1.177 1.437-1.744a10.017 10.017 0 0 0-2.368-.337Zm5.43 15.654a7.964 7.964 0 0 0 2.251-4.438c-3.546 2.045-7.269 2.247-9.321.195c-2.052-2.052-1.85-5.775.195-9.321a8 8 0 1 0 6.876 13.564Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className="text-gray-700 dark:text-zinc-100"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12ZM11 0h2v4.062a8.079 8.079 0 0 0-2 0V0ZM7.094 5.68L4.222 2.808L2.808 4.222L5.68 7.094A8.048 8.048 0 0 1 7.094 5.68ZM4.062 11H0v2h4.062a8.079 8.079 0 0 1 0-2Zm1.618 5.906l-2.872 2.872l1.414 1.414l2.872-2.872a8.048 8.048 0 0 1-1.414-1.414ZM11 19.938V24h2v-4.062a8.069 8.069 0 0 1-2 0Zm5.906-1.618l2.872 2.872l1.414-1.414l-2.872-2.872a8.048 8.048 0 0 1-1.414 1.414ZM19.938 13H24v-2h-4.062a8.069 8.069 0 0 1 0 2ZM18.32 7.094l2.872-2.872l-1.414-1.414l-2.872 2.872c.528.41 1.003.886 1.414 1.414Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </TopbarMenuItemButton>
          </li>

          <li role="menuitem">
            <TopbarMenuItemButton>
              <svg
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
              </svg>
            </TopbarMenuItemButton>
          </li>
        </ul>
        <button className="bg-indigo-500 h-10 w-10 flex items-center justify-center rounded-full">
          <span className="text-white font-bold">ES</span>
        </button>
      </section>
    </nav>
  );
};

const TopbarMenuItemButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`${className} h-12 w-12 flex items-center justify-center rounded-full border-2 border-transparent hover:border-gray-200 p-[0.4rem] focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 dark:ring-indigo-400 dark:focus:border-transparent dark:hover:border-gray-800 outline-none`}
      >
        {children}
      </button>
    );
  }
);

TopbarMenuItemButton.displayName = "TopbarMenuItemButton";
