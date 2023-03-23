import localforage from "localforage";
import { TINY_NOTE_SOTRAGE_KEY } from "./config";

const tinyNoteStorage = localforage.createInstance({
  name: "tiny-note",
  driver: localforage.INDEXEDDB,
});

export const InsertNotes = async (value) => {
  return await tinyNoteStorage.setItem(TINY_NOTE_SOTRAGE_KEY, value);
};

export const GetAllNotes = async () => {
  return await tinyNoteStorage.getItem(TINY_NOTE_SOTRAGE_KEY);
};

export const ClearNotes = async () => {
  return await tinyNoteStorage.clear();
};
