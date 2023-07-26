import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from "react"

type ModalProps = {
  children: ReactNode
  isModalShown: boolean
  showModal: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ children, showModal, isModalShown }) => {
  useEffect(() => {
    window.addEventListener(
      "keydown",
      (evt) => evt.code === "Escape" && showModal(false),
    )

    return window.removeEventListener(
      "keydown",
      (evt) => evt.code === "Escape" && showModal(false),
    )
  })

  return (
    <>
      {isModalShown && (
        <div className="h-full grid place-items-center w-full absolute top-0 left-0 bg-black/50">
          <div className="px-4 w-full sm:max-w-lg">{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
