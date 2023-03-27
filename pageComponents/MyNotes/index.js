import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import React from "react";
import { GithubPicker } from "react-color";
import cn from "classnames";

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
        addBtn={
          <Link href={EDITOR}>
            <button className="btn btn-sm btn-outline btn-square">
              <i className="w-4">
                <FiPlus className="w-full h-full" />
              </i>
            </button>
          </Link>
        }
        main={
          <>
            <IfElse
              isTrue={isEmpty(notes)}
              ifBlock={
                <>
                  <div className="">
                    <p className="text-3xl mb-5">My Notes</p>
                    <p className="">
                      You haven't create any note yet.{" "}
                      <Link href={EDITOR}>
                        <u className="text-blue-400">Create new note now.</u>
                      </Link>
                    </p>
                  </div>
                </>
              }
              elseBlock={
                <>
                  <div className="">
                    <div className="">
                      <div className="">
                        <label
                          className={cn({
                            "input-group": keyword,
                          })}
                        >
                          <input
                            type="text"
                            placeholder="Search notes ..."
                            className="input input-bordered focus:outline-none input-sm"
                            onChange={(e) => {
                              handleSearchByTitle(e.target.value);
                            }}
                          />

                          <span
                            className={cn(
                              { hidden: !keyword },
                              { static: keyword }
                            )}
                          >
                            <button onClick={handleCancelSearch}>
                              <FiX />
                            </button>
                          </span>
                        </label>
                      </div>
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
                              "#d9e3f0",
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
                      <button
                        className={cn({ hidden: !color })}
                        onClick={handleCancelSearch}
                      >
                        <FiX />
                      </button>
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
