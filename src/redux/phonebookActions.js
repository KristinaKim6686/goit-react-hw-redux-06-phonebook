import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("phonebook/addContact");
export const deleteContact = createAction("phonebook/deleteContact");
export const filterContacts = createAction("phonebook/filterContact");
