import localforage from "localforage";
import findIndex from "lodash/findIndex";
import filter from "lodash/filter";
import cloneDeep from "lodash/cloneDeep";
import includes from "lodash/includes";
import { TINY_NOTE_SOTRAGE_KEY } from "./config";

const tinyNoteStorage = localforage.createInstance({
  name: "tiny-note",
  driver: localforage.INDEXEDDB,
});

export const insert = async (value) => {
  const originalData =
    (await tinyNoteStorage.getItem(TINY_NOTE_SOTRAGE_KEY)) || [];
  const newValue = [value, ...originalData];
  return await tinyNoteStorage.setItem(TINY_NOTE_SOTRAGE_KEY, newValue);
};

export const getOne = async (id) => {
  const orData = await tinyNoteStorage.getItem(TINY_NOTE_SOTRAGE_KEY);
  return orData?.find((data) => data.id === id);
};

export const getAll = async () => {
  return await tinyNoteStorage.getItem(TINY_NOTE_SOTRAGE_KEY);
};

export const removeOne = async (id) => {
  const orData = await tinyNoteStorage.getItem(TINY_NOTE_SOTRAGE_KEY);
  const idx = findIndex(orData.id === id);
  const newData = orData.splice(idx, 1);
  return await tinyNoteStorage.setItem(TINY_NOTE_SOTRAGE_KEY, newData);
};

export const clearStorage = async () => {
  return await tinyNoteStorage.clear();
};

export const searchByTitle = async (keyword) => {
  const orData = await tinyNoteStorage.getItem(TINY_NOTE_SOTRAGE_KEY);
  const filterData = filter(cloneDeep(orData), (o) =>
    includes(o.title, keyword)
  );
  return filterData;
};
