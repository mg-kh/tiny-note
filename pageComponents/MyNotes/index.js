import React from "react";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";

import MainLayout from "@/layouts/MainLayout";
import IfElse from "@/components/IfElse";

import { FiTrash2, FiPlus } from "react-icons/fi";

import Hook from "./Hook";
import { EDITOR, MY_NOTES } from "@/utils/locationPathName";

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
              <IfElse
                isTrue={!isEmpty(notes)}
                ifBlock={
                  <>
                    <h3 className="mb-3 text-3xl">All Notes</h3>
                    {notes?.map((note) => (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleRemoveSingleNote(note.id)}
                          className="btn btn-ghost btn-sm"
                        >
                          <FiTrash2 />
                        </button>
                        <Link href={`${MY_NOTES}/${note.id}`} key={note.id}>
                          <span>{note.title}</span>
                        </Link>
                      </div>
                    ))}
                  </>
                }
                elseBlock={
                  <>
                    <div className="text-center py-10 border border-dashed border-gray-500 rounded-md">
                      <h3 className="mb-5 text-2xl">Start Taking New Notes</h3>
                      <Link href={EDITOR}>
                        <button className="btn btn-sm gap-3 btn-outline">
                          <FiPlus />
                          <span>Add New Note</span>
                        </button>
                      </Link>
                    </div>
                  </>
                }
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default MyNotes;
