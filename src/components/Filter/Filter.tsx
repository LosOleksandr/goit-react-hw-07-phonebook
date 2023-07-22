import { setFilter } from "@app/FilterSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectFilter } from "@app/selectors"
import { ChangeEvent } from "react"

const Filter = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectFilter)

  return (
    <>
      <h3 className="font-medium text-xl mb-3">Filter your contacts by name</h3>
      <input
        className=" w-full sm:w-2/4 border-2 border-orange-700/50 dark:border-orange-400 placeholder-orange-900/40 dark:placeholder-orange-300/60 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-orange-200/40 dark:focus:bg-orange-400/40 focus:border-orange-700 dark:focus:border-orange-600  transition-colors "
        type="text"
        value={value}
        placeholder="Filter here..."
        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
          dispatch(setFilter(evt.target.value))
        }
      />
    </>
  )
}

export default Filter
