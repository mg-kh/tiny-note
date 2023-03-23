import { insert } from "@/utils/storage";
import { TINY_NOTE_SOTRAGE_KEY } from "@/utils/config";

export const insertNote = async (data) => {
  return await insert(data);
};
