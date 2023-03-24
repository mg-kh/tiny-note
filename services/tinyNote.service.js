import { GENERAL } from "@/utils/errorMessages";
import { ClearNotes, GetAllNotes, InsertNotes } from "@/utils/storage";
import { cloneDeep, filter, findIndex, includes } from "lodash";

export const insertNote = async (data) => {
  try {
    const allNotes = (await GetAllNotes()) || [];
    const combineAllNotes = [data, ...allNotes];
    return await InsertNotes(combineAllNotes);
  } catch (error) {
    return GENERAL;
  }
};

export const getAllNotes = async () => {
  try {
    const allNotes = await GetAllNotes();
    return allNotes;
  } catch (error) {
    return GENERAL;
  }
};

export const getSingleNote = async (id) => {
  try {
    const allNotes = await GetAllNotes();
    const filteredData = allNotes.find((note) => note.id === id);
    return filteredData;
  } catch (error) {
    return GENERAL;
  }
};

export const searchByTitle = async (keyword) => {
  try {
    const allNotes = await GetAllNotes();
    const filterNotes = filter(cloneDeep(allNotes), (note) =>
      includes(note.title, keyword)
    );
    return filterNotes;
  } catch (error) {
    return GENERAL;
  }
};

export const removeSingleNote = async (id) => {
  try {
    const allNotes = await GetAllNotes();
    const filteredNotes = filter(allNotes, (note) => note.id !== id);
    await InsertNotes(filteredNotes);
    return filteredNotes;
  } catch (error) {
    return GENERAL;
  }
};

export const clearNotes = async (id) => {
  try {
    await ClearNotes();
    return [];
  } catch (error) {
    return GENERAL;
  }
};
