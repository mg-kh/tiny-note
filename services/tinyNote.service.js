import { ClearNotes, GetAllNotes, InsertNotes } from "@/utils/storage";
import { cloneDeep, filter, findIndex, includes } from "lodash";

export const insertNote = async (data) => {
  try {
    const allNotes = (await GetAllNotes()) || [];
    const combineAllNotes = [data, ...allNotes];
    return await InsertNotes(combineAllNotes);
  } catch (error) {
    console.error(error);
  }
};

export const getAllNotes = async () => {
  try {
    const allNotes = await GetAllNotes();
    return allNotes;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleNote = async (id) => {
  try {
    const allNotes = await GetAllNotes();
    const filteredData = allNotes.find((note) => note.id === id);
    return filteredData;
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
};

export const removeSingleNote = async (id) => {
  try {
    const allNotes = await GetAllNotes();
    const idx = findIndex(allNotes, (note) => note.id === id);
    const spliceNotes = allNotes.splice(idx, 1);
    return await InsertNotes(spliceNotes);
  } catch (error) {
    console.error(error);
  }
};

export const clearNotes = async (id) => {
  try {
    return await ClearNotes();
  } catch (error) {
    console.error(error);
  }
};
