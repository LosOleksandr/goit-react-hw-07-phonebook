import { setTheme } from "@app/ThemeSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"
import { BiSun, BiMoon } from "react-icons/bi"

const ThemeToggler = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const toggleTheme = () => {
    theme.mode === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"))
  }

  return (
    <button
      className="absolute top-4 left-4 border-2  dark:bg-orange-400 dark:hover:bg-orange-700 dark:hover:text-orange-200 bg-orange-500 text-orange-200 dark:text-orange-900 transition-colors hover:text-orange-700 hover:bg-orange-500/40 border-orange-700/50  p-2 rounded-full "
      onClick={toggleTheme}
      type="button"
    >
      {theme.mode === "light" ? (
        <BiSun size={"1.5rem"} />
      ) : (
        <BiMoon size={"1.5rem"} />
      )}
    </button>
  )
}

export default ThemeToggler
