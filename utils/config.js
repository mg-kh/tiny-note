import localforage from "localforage";
import { extendPrototype } from "localforage-getitems";
import addFind from "localforage-find";
extendPrototype(localforage);
addFind(localforage);

export const tinyNoteStorage = localforage.createInstance({
  name: "tiny-note",
  driver: localforage.INDEXEDDB,
});

export const APP_NAME = "tiny-note";
export const APP_DESCRIPTION = "Easy and effective note taking app";
