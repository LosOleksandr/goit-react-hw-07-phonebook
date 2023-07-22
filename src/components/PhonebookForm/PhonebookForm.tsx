import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import validationSchema from "./validationSchema"
import { useAppDispatch } from "@app/hooks"
import { addContact } from "@app/ContactsSlice"
import { useRef } from "react"

type PhonebookFormFields = {
  name: string
  number: string
}

const PhonebookForm = () => {
  const dispatch = useAppDispatch()
  const InputReF = useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PhonebookFormFields>({ resolver: yupResolver(validationSchema) })

  const onSubmit = (data: PhonebookFormFields) => {
    dispatch(addContact(data))
    reset()
  }

  return (
    <div className="border-2 rounded-xl m-auto max-w-md   border-orange-700 dark:border-orange-400 px-4 py-8">
      <h2 className="text-center mb-4 font-semibold text-xl ">
        Add your contact!{" "}
      </h2>
      <form
        className="flex flex-col gap-5 justify-center align-middle"
        action=""
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="font-medium">
          Name
          <input
            className="border-2 border-orange-700/50 dark:border-orange-400 placeholder-orange-900/40 dark:placeholder-orange-300/60 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-orange-200/40 dark:focus:bg-orange-400/40 focus:border-orange-700 dark:focus:border-orange-600 w-full transition-colors"
            type="text"
            {...register("name")}
            placeholder="Type name here..."
          />
          <ErrorMessage
            name="name"
            errors={errors}
            render={({ message }) => (
              <small className="text-red-500">{message}</small>
            )}
          />
        </label>
        <label className="font-medium">
          Phone
          <input
            {...register("number")}
            className="border-2 border-orange-700/50 dark:border-orange-400 placeholder-orange-900/40 dark:placeholder-orange-300/60 rounded-lg mt-1 px-2 py-2 outline-none bg-transparent focus:bg-orange-200/40 dark:focus:bg-orange-400/40 focus:border-orange-700 dark:focus:border-orange-600 w-full
          transition-colors"
            type="tel"
            placeholder="Type phone here..."
          />
          <ErrorMessage
            name="number"
            errors={errors}
            render={({ message }) => (
              <small className="text-red-500">{message}</small>
            )}
          />
        </label>
        <button
          className="border-2 font-medium rounded-2xl py-1 mt-4 dark:bg-orange-400 dark:hover:bg-orange-700 dark:hover:text-orange-200 bg-orange-500 text-orange-200 dark:text-orange-900 transition-colors hover:text-orange-700 hover:bg-orange-500/40 border-orange-700/50 w-2/4 m-auto"
          type="submit"
        >
          Add Contact
        </button>
      </form>
    </div>
  )
}

export default PhonebookForm
