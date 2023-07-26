import ContactsList from "@components/ContactsList/ContactsList"
import Filter from "@components/Filter/Filter"
import PhonebookForm from "@components/PhonebookForm/PhonebookForm"
import Section from "@components/Section/Section"
import ThemeToggler from "@components/ThemeToggler/ThemeToggler"





const App = () => {


  return (
    <main>
      <ThemeToggler />
      <Section>
        <PhonebookForm />
      </Section>
      <Section >
        <div className="max-w-lg m-auto mt-8">
          <Filter />
          <ContactsList />
        </div>
      </Section>
    </main>
  )
}

export default App
