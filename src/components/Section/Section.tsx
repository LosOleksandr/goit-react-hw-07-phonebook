import React, { FC, ReactNode } from "react"

type SectionType = {
  title?: string
  children: ReactNode
}

const Section: FC<SectionType> = ({ title, children }) => {
  return (
    <section className="w-full py-10">
      <div className="w-full px-4">
        {title && <h2 className="font-bold text-center text-3xl">{title}</h2>}
        {children}
      </div>
    </section>
  )
}

export default Section
