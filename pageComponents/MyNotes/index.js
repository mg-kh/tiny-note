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
    handleCancelColorSearch,
    handleCancelTitleSearch,
    setKeyword,
    setColor,
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
                    <p className="mb-5 text-3xl">My Notes</p>
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
                            className="focus:outline-none input input-bordered input-sm"
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
                          className="w-8 h-4 border rounded-md cursor-pointer"
                        ></div>
                        <div className="pt-2 border-none dropdown-content menu rounded-box w-52">
                          <GithubPicker
                            onChange={(color) => {
                              setColor(color.hex);
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
                        onClick={handleCancelColorSearch}
                      >
                        <FiX />
                      </button>
                    </div>

                    {/* ----- total ----- */}
                    <div className="pt-3">
                      <span className="text-sm">Total : </span>
                      <span className="badge badge-outline">
                        <span className="px-2 text-xs">{notes?.length}</span>
                      </span>
                    </div>
                  </div>
                  <div className="my-1 divider"></div>
                  {/* {console.log({ notes })} */}
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
