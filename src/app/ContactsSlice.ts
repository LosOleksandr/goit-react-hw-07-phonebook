import { Contact } from "@interface/contacts"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

const contactsInitialState: Contact[] = []

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { list: contactsInitialState },
  reducers: {
    addContact: {
      reducer(state, action: PayloadAction<Contact>) {
        state.list.push(action.payload)
      },
      prepare(contact: { name: string; number: string }) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        }
      },
    },
    deleteContact(state, action) {
      const index = state.list.findIndex(
        (contact) => contact.id === action.payload,
      )
      state.list.splice(index, 1)
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
}

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer,
)
