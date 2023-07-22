import { deleteContact } from "@app/ContactsSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectContacts, selectFilter } from "@app/selectors"
import { Contact } from "@interface/contacts"
import { BiSolidContact, BiPhone } from "react-icons/bi"
import { RiDeleteBin6Line } from "react-icons/ri"

const ContactsList = () => {
  const dispatch = useAppDispatch()
  const { list } = useAppSelector(selectContacts)
  const filter = useAppSelector(selectFilter)

  const getVisibleContacts = (list: Contact[], filter: string) => {
    return list.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    )
  }

  const visibleContacts = getVisibleContacts(list, filter)

  return (
    <ul className="mt-4 flex flex-col gap-3 max-w-screen-md">
      {visibleContacts.map(({ id, name, number }) => (
        <li
          key={id}
          className=" w-full relative sm:w-2/4  border-2 border-orange-800 dark:border-orange-400  p-4 rounded-xl font-medium capitalize "
        >
          <ul className="w-full sm:w-2/4 ">
            <li className="flex  align-middle gap-2 mb-3 ">
              <BiSolidContact size={"1.5rem"} />
              <p className="">{name}</p>
            </li>
            <li className="flex  align-middle gap-2 ">
              <BiPhone size={"1.5rem"} />
              <p>{number}</p>
            </li>
          </ul>

          <button
            className="absolute top-2 right-2 hover:text-red-500 "
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            <RiDeleteBin6Line size={"1.5rem"} />
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ContactsList
