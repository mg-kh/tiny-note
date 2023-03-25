import React from "react";
import Link from "next/link";
import isEmpty from "lodash/isEmpty";

import MainLayout from "@/layouts/MainLayout";
import IfElse from "@/components/IfElse";

import { FiTrash2, FiPlus, FiRotateCcw } from "react-icons/fi";

import Hook from "./Hook";
import { EDITOR, MY_NOTES } from "@/utils/locationPathName";
import { key } from "localforage";

const MyNotes = () => {
  const {
    notes,
    keyword,
    //action
    handleRemoveSingleNote,
    handleSearchByTitle,
    handleCancelSearch,
  } = Hook();

  return (
    <>
      <MainLayout
        main={
          <>
            <div className="">
              <IfElse
                isTrue={keyword}
                ifBlock={
                  <>
                    <IfElse
                      isTrue={isEmpty(notes)}
                      ifBlock={
                        <>
                          <div className="text-center py-10 border border-dashed border-gray-500 rounded-md">
                            <h3 className="mb-5 text-2xl">
                              Can't find note title{" "}
                              <span className="badge"> {keyword}</span>
                            </h3>
                            <button
                              onClick={handleCancelSearch}
                              className="btn btn-sm gap-3 btn-outline"
                            >
                              <FiRotateCcw />
                              <span>Try again</span>
                            </button>
                          </div>
                        </>
                      }
                      elseBlock={
                        <>
                          <div className="">
                            <input
                              placeholder="Search Note"
                              className="input input-bordered input-sm"
                              onChange={(e) => {
                                handleSearchByTitle(e.target.value);
                              }}
                            />
                            <div className="py-3">
                              <span className="text-sm">Total : </span>
                              <span className="badge">{notes.length}</span>
                            </div>
                          </div>
                          {notes?.map((note) => (
                            <div
                              key={note?.id}
                              className="flex items-center gap-2"
                            >
                              <button
                                onClick={() => handleRemoveSingleNote(note.id)}
                                className="btn btn-ghost btn-sm"
                              >
                                <FiTrash2 />
                              </button>
                              <Link
                                href={`${MY_NOTES}/${note.id}`}
                                key={note.id}
                              >
                                <span>{note.title}</span>
                              </Link>
                            </div>
                          ))}
                        </>
                      }
                    />
                  </>
                }
                elseBlock={
                  <>
                    <IfElse
                      isTrue={isEmpty(notes)}
                      ifBlock={
                        <>
                          <div className="text-center py-10 border border-dashed border-gray-500 rounded-md">
                            <h3 className="mb-5 text-2xl">
                              Start Taking New Notes
                            </h3>
                            <Link href={EDITOR}>
                              <button className="btn btn-sm gap-3 btn-outline">
                                <FiPlus />
                                <span>Add New Note</span>
                              </button>
                            </Link>
                          </div>
                        </>
                      }
                      elseBlock={
                        <>
                          <div className="">
                            <input
                              placeholder="Search Note"
                              className="input input-bordered input-sm"
                              onChange={(e) => {
                                handleSearchByTitle(e.target.value);
                              }}
                            />
                            <div className="py-3">
                              <span className="text-sm">Total : </span>
                              <span className="badge">{notes.length}</span>
                            </div>
                          </div>
                          {notes?.map((note) => (
                            <div
                              key={note?.id}
                              className="flex items-center gap-2"
                            >
                              <button
                                onClick={() => handleRemoveSingleNote(note.id)}
                                className="btn btn-ghost btn-sm"
                              >
                                <FiTrash2 />
                              </button>
                              <Link
                                href={`${MY_NOTES}/${note.id}`}
                                key={note.id}
                              >
                                <span>{note.title}</span>
                              </Link>
                            </div>
                          ))}
                        </>
                      }
                    />
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
