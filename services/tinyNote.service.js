import { GENERAL_ERROR_MESSAGE } from "@/utils/infoMessages";
import { ClearNotes, GetAllNotes, InsertNotes } from "@/utils/storage";
import { cloneDeep, filter, findIndex, includes, lowerCase } from "lodash";

export const insertNote = async (data) => {
  try {
    const allNotes = (await GetAllNotes()) || [];
    const combineAllNotes = [data, ...allNotes];
    return await InsertNotes(combineAllNotes);
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};

export const getAllNotes = async () => {
  try {
    const allNotes = await GetAllNotes();
    return allNotes;
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
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

export const searchByTitle = async (keyword) => {
  try {
    const allNotes = await GetAllNotes();
    const filterNotes = filter(cloneDeep(allNotes), (note) =>
      includes(lowerCase(note.title), lowerCase(keyword))
    );
    return filterNotes;
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};
export const searchByColor = async (color) => {
  try {
    const allNotes = await GetAllNotes();
    const filterNotes = filter(
      cloneDeep(allNotes),
      (note) => note?.color === color
    );
    return filterNotes;
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};

export const removeSingleNote = async (id) => {
  try {
    const allNotes = await GetAllNotes();
    const filteredNotes = filter(allNotes, (note) => note.id !== id);
    await InsertNotes(filteredNotes);
    return filteredNotes;
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};

export const clearNotes = async (id) => {
  try {
    await ClearNotes();
    return [];
  } catch (error) {
    return GENERAL_ERROR_MESSAGE;
  }
};
