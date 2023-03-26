import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import React from "react";

import IfElse from "@/components/IfElse";
import NoteCard from "@/components/NoteCard";
import MainLayout from "@/layouts/MainLayout";

import { FiPlus, FiRotateCcw } from "react-icons/fi";

import { EDITOR } from "@/utils/locationPathName";
import Hook from "./Hook";

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
                          <div className="py-10 text-center border border-gray-500 border-dashed rounded-md">
                            <h3 className="mb-5 text-2xl">
                              Can't find note title{" "}
                              <span className="badge"> {keyword}</span>
                            </h3>
                            <button
                              onClick={handleCancelSearch}
                              className="gap-3 btn btn-sm btn-outline"
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
                            <React.Fragment key={note?.id}>
                              <NoteCard
                                onClick={() => handleRemoveSingleNote(note.id)}
                                note={note}
                              />
                            </React.Fragment>
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
                          <div className="py-10 text-center border border-gray-500 border-dashed rounded-md">
                            <h3 className="mb-5 text-2xl">
                              Start Taking New Notes
                            </h3>
                            <Link href={EDITOR}>
                              <button className="gap-3 btn btn-sm btn-outline">
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
                            <React.Fragment key={note?.id}>
                              <NoteCard
                                onClick={() => handleRemoveSingleNote(note.id)}
                                note={note}
                              />
                            </React.Fragment>
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
