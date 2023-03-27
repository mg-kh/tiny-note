import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import React from "react";
import { GithubPicker } from "react-color";

import IfElse from "@/components/IfElse";
import NoteCard from "@/components/NoteCard";
import MainLayout from "@/layouts/MainLayout";

import { FiPlus, FiRotateCcw, FiX } from "react-icons/fi";

import { EDITOR } from "@/utils/locationPathName";
import Hook from "./Hook";

const MyNotes = () => {
  const {
    notes,
    keyword,
    color,
    //action
    handleRemoveSingleNote,
    handleSearchByTitle,
    handleCancelSearch,
    handleSearchByColor,
  } = Hook();

  return (
    <>
      <MainLayout
        main={
          <>
            <IfElse
              isTrue={isEmpty(notes)}
              ifBlock={
                <>
                  <div className="w-full h-[50vh]  flex items-center justify-center">
                    <div className="">
                      <p className="text-center text-3xl text-gray-600">
                        Add New Notes
                      </p>
                      <p className="text-center text-gray-600">
                        You haven't take any note yet!.
                      </p>
                    </div>
                  </div>
                </>
              }
              elseBlock={
                <>
                  <div className="">
                    <div className="flex gap-2 border border-gray-200 rounded-md w-fit px-2">
                      <input
                        type="text"
                        placeholder="Search Note"
                        className="input input-sm focus:outline-none"
                        onChange={(e) => {
                          handleSearchByTitle(e.target.value);
                        }}
                      />
                      {keyword && (
                        <button onClick={handleCancelSearch}>
                          <FiX />
                        </button>
                      )}
                    </div>

                    {/* ----- color picker ----- */}
                    <div className="flex items-center gap-3 pt-3">
                      <div className="dropdown">
                        <div
                          tabIndex={0}
                          style={{ backgroundColor: color }}
                          className="w-8 h-4 rounded-md border cursor-pointer"
                        ></div>
                        <div className="dropdown-content menu pt-2 border-none rounded-box w-52">
                          <GithubPicker
                            onChange={(color) => {
                              handleSearchByColor(color.hex);
                            }}
                            colors={[
                              "#22c55e",
                              "#ea580c",
                              "#1d4ed8",
                              "#d926aa",
                              "#1fb2a5",
                            ]}
                          />
                        </div>
                      </div>
                      <p className="text-xs">Filter By Color</p>
                      {color && (
                        <button onClick={handleCancelSearch}>
                          <FiX />
                        </button>
                      )}
                    </div>

                    {/* ----- total ----- */}
                    <div className="pt-3">
                      <span className="text-sm">Total : </span>
                      <span className="badge badge-outline">
                        <span className="text-xs px-2">{notes?.length}</span>
                      </span>
                    </div>
                  </div>
                  <div className="divider my-1"></div>
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
    </>
  );
};

export default MyNotes;
