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
  return await tinyNoteStorage.setItem(id, data);
};

export const getSingleNote = async (id) => {
  return await tinyNoteStorage.getItem(id);
};

export const removeSingleNote = async (id) => {
  return await tinyNoteStorage.removeItem(id);
};

export const clearNotes = async () => {
  return await tinyNoteStorage.clear();
};
