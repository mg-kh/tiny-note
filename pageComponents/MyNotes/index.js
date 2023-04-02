import isEmpty from "lodash/isEmpty";
import Link from "next/link";
import React from "react";
import { GithubPicker } from "react-color";
import cn from "classnames";

import IfElse from "@/components/IfElse";
import NoteCard from "@/components/NoteCard";
import MainLayout from "@/layouts/MainLayout";

import { FiX } from "react-icons/fi";

import { EDITOR } from "@/utils/locationPathName";
import Hook from "./Hook";

const MyNotes = () => {
  const {
    notes,
    keyword,
    color,
    isSearching,
    isShowConfirmBox,
    //action
    handleRemoveSingleNote,
    handleConfirmRemoveSingleNote,
    handleCancelColorSearch,
    handleCancelTitleSearch,
    setKeyword,
    setColor,
  } = Hook();

  return (
    <>
      <MainLayout
        main={
          <>
            <IfElse
              isTrue={isSearching}
              ifBlock={
                <>
                  <>
                    <div className="">
                      {/* ----- search notes ----- */}
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
                              value={keyword}
                              className="focus:outline-none input input-bordered border-primary input-sm"
                              onChange={(e) => {
                                setKeyword(e.target.value);
                              }}
                            />

                            <span
                              className={cn(
                                { hidden: !keyword },
                                { static: keyword }
                              )}
                            >
                              <button onClick={handleCancelTitleSearch}>
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
                            className="w-8 h-4 border rounded-md cursor-pointer border-primary"
                          ></div>
                          <div className="pt-2 border-none dropdown-content menu rounded-box w-52">
                            <GithubPicker
                              onChange={(color) => {
                                setColor(color.hex);
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
                        <button
                          className={cn({ hidden: !color })}
                          onClick={handleCancelColorSearch}
                        >
                          <FiX />
                        </button>
                      </div>

                      {/* ----- total ----- */}
                      <div className="pt-3">
                        <span className="text-sm">Total : </span>
                        <span className="badge border-primary badge-outline">
                          <span className="px-2 text-xs">{notes?.length}</span>
                        </span>
                      </div>
                    </div>
                    <div className="my-1 divider"></div>
                    <IfElse
                      isTrue={isEmpty(notes)}
                      ifBlock={
                        <>
                          <p>No result found</p>
                        </>
                      }
                      elseBlock={
                        <>
                          {notes?.map((note) => (
                            <React.Fragment key={note?.id}>
                              <NoteCard
                                onClick={() => handleRemoveSingleNote(note?.id)}
                                note={note?.value}
                              />
                            </React.Fragment>
                          ))}
                        </>
                      }
                    />
                  </>
                </>
              }
              elseBlock={
                <>
                  <IfElse
                    isTrue={isEmpty(notes)}
                    ifBlock={
                      <>
                        <div className="">
                          <p className="mb-5 text-3xl">My Notes</p>
                          <p className="">
                            You haven't create any note yet.{" "}
                            <Link href={EDITOR}>
                              <u className="text-blue-400">
                                Create new note now.
                              </u>
                            </Link>
                          </p>
                        </div>
                      </>
                    }
                    elseBlock={
                      <>
                        <div className="">
                          {/* ----- search notes ----- */}
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
                                  value={keyword}
                                  className="focus:outline-none input input-bordered border-primary input-sm"
                                  onChange={(e) => {
                                    setKeyword(e.target.value);
                                  }}
                                />

                                <span
                                  className={cn(
                                    { hidden: !keyword },
                                    { static: keyword }
                                  )}
                                >
                                  <button onClick={handleCancelTitleSearch}>
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
                                className="w-8 h-4 border rounded-md cursor-pointer border-primary"
                              ></div>
                              <div className="pt-2 border-none dropdown-content menu rounded-box w-52">
                                <GithubPicker
                                  onChange={(color) => {
                                    setColor(color.hex);
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
                            <button
                              className={cn({ hidden: !color })}
                              onClick={handleCancelColorSearch}
                            >
                              <FiX />
                            </button>
                          </div>

                          {/* ----- total ----- */}
                          <div className="pt-3">
                            <span className="text-sm">Total : </span>
                            <span className="badge border-primary badge-outline">
                              <span className="px-2 text-xs">
                                {notes?.length}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="my-1 divider"></div>
                        {/* {console.log({ notes })} */}
                        {notes?.map((note) => (
                          <React.Fragment key={note?.id}>
                            <NoteCard
                              onClick={() => handleRemoveSingleNote(note?.id)}
                              note={note?.value}
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
        }
      />

      {/* ----- delete confirm modal ----- */}
      <div className={cn("modal", { "modal-open": isShowConfirmBox })}>
        <div className="modal-box">
          <h3 className="text-lg font-bold">
            Are you sure to delete this note?
          </h3>
          <p className="py-4">
            Deleting process doesn't have <b>'undo'</b> process.
          </p>
          <div className="modal-action">
            <button className="btn" onClick={handleRemoveSingleNote}>
              Cancel
            </button>
            <button
              onClick={handleConfirmRemoveSingleNote}
              className="btn btn-primary btn-outline"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNotes;
