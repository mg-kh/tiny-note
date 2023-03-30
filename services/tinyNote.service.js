import { tinyNoteStorage } from "@/utils/config";
import { GENERAL_ERROR_MESSAGE } from "@/utils/infoMessages";
import { includes } from "lodash";
import cloneDeep from "lodash/cloneDeep";
import filter from "lodash/filter";
import findIndex from "lodash/findIndex";
import lowerCase from "lodash/lowerCase";

export const insertNote = async (id, data) => {
  return await tinyNoteStorage.setItem(id, data);
};

export const getAllNotes = async () => {
  return await tinyNoteStorage.getItems();
};

export const replaceNote = async (id, data) => {
  try {
    let allNotes = (await GetAllNotes()) || [];
    let idx = findIndex(allNotes, (note) => note.id === id);
    allNotes.splice(idx, 1, data);
    return await InsertNotes(allNotes);
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};

export const getSingleNote = async (id) => {
  try {
    const allNotes = await GetAllNotes();
    const filteredData = allNotes.find((note) => note.id === id);
    return filteredData;
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};

export const removeSingleNote = async (id) => {
  return await tinyNoteStorage.removeItem(id);
};

export const clearNotes = async () => {
  return await tinyNoteStorage.clear();
};
