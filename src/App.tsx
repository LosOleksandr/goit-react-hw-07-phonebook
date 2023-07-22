import { useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"
import ContactsList from "@components/ContactsList/ContactsList"
import Filter from "@components/Filter/Filter"
import PhonebookForm from "@components/PhonebookForm/PhonebookForm"
import Section from "@components/Section/Section"
import ThemeToggler from "@components/ThemeToggler/ThemeToggler"
import { useEffect, useRef } from "react"

const App = () => {
  const theme = useAppSelector(selectTheme)
  const HTMLRef = useRef(document.querySelector("html"))

  useEffect(() => {
    theme.mode === "light"
      ? HTMLRef.current?.classList.remove("dark")
      : HTMLRef.current?.classList.add("dark")
  }, [theme])

  return (
    <main>
      <ThemeToggler />
      <Section>
        <PhonebookForm />
      </Section>
      <Section title="Contacts List">
        <div className="max-w-lg m-auto mt-8">
          <Filter />
          <ContactsList />
        </div>
      </Section>
    </main>
  )
}

export default App
