import Link from "next/link";

import { MY_NOTES } from "@/utils/locationPathName";

import { FiTrash2 } from "react-icons/fi";

const NoteCard = ({ note, onClick }) => {
  return (
    <>
      <div
        className="mb-2 border-l-4 pl-2 flex items-center gap-2"
        style={{ borderColor: note?.color }}
      >
        <button onClick={onClick} className="btn btn-ghost btn-sm">
          <FiTrash2 />
        </button>
        <Link href={`${MY_NOTES}/${note.id}`}>
          <span>{note.title}</span>
        </Link>
      </div>
    </>
  );
};

export default NoteCard;
