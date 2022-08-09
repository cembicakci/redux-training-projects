import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
//entityAdapter ile item ları tek tek aramak yerine direk istenilen id ye ulaşabiliyoruz. 
//performs arttırıyor.

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contact)

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactAdaptor.getInitialState(),
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
        deleteContact: contactAdaptor.removeOne,
        removeAllContact: contactAdaptor.removeAll
    }
})

export const { addContact, addContacts, deleteContact, removeAllContact } = contactSlice.actions
export default contactSlice.reducer