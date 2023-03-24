import React from "react";
import Link from "next/link";

import MainLayout from "@/layouts/MainLayout";

import { FiTrash2 } from "react-icons/fi";

import Hook from "./Hook";
import { MY_NOTES } from "@/utils/locationPathName";

const MyNotes = () => {
  const {
    notes,
    //action
    handleRemoveSingleNote,
  } = Hook();

  return (
    <>
      <MainLayout
        main={
          <>
            <div className="">
              <h3 className="text-3xl mb-3">All Notes</h3>
              {notes.map((note) => (
                <Link href={`${MY_NOTES}/${note.id}`} key={note.id}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRemoveSingleNote(note.id)}
                      className="btn btn-ghost btn-sm"
                    >
                      <FiTrash2 />
                    </button>
                    <span>{note.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        }
      />
    </>
  );
};

export default MyNotes;
