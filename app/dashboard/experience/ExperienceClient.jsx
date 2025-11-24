"use client";

import { useState, useTransition, useEffect } from "react";
import { addExperience, deleteExperience, updateExperience } from "./actions";

export default function ExperienceClient({ experiences }) {
  const [isPending, startTransition] = useTransition();
  const [editing, setEditing] = useState(null);

  const [hasEnd, setHasEnd] = useState(false);
  const [hasEndEdit, setHasEndEdit] = useState(false);

  const [viewerUrl, setViewerUrl] = useState(null); // modal viewer

  // When editing changes, update hasEndEdit
  useEffect(() => {
    if (editing) {
      setHasEndEdit(editing.end !== "Present");
    }
  }, [editing]);

  // Open File Handler (image modal or PDF new tab)
  function openFile(url) {
    if (!url) return;

    const isImage = url.match(/\.(jpg|jpeg|png|webp)$/);

    if (isImage) {
      setViewerUrl(url); // open modal
    } else {
      window.open(url, "_blank"); // open PDF
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-900'>Experience</h1>
      <p className='text-green-700 mt-2'>Manage your work timeline</p>

      {/* ADD EXPERIENCE */}
      <form
        action={addExperience}
        formEncType='multipart/form-data'
        className='mt-8 bg-white/80 backdrop-blur-md border border-green-200 
        p-6 rounded-xl shadow-lg max-w-xl'
      >
        <h2 className='text-xl font-semibold text-green-900 mb-4'>
          Add Experience
        </h2>

        <input
          type='text'
          name='role'
          placeholder='Role'
          required
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='text'
          name='company'
          placeholder='Company'
          required
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='text'
          name='start'
          placeholder='Start (e.g., Jan 2024)'
          required
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        {/* Checkbox */}
        <div className='flex items-center gap-3 mb-2'>
          <input
            type='checkbox'
            id='hasEnd'
            onChange={(e) => setHasEnd(e.target.checked)}
          />
          <label htmlFor='hasEnd' className='text-green-800'>
            This experience has an end date
          </label>
        </div>

        {/* End Date */}
        <input
          type='text'
          name='end'
          disabled={!hasEnd}
          placeholder={hasEnd ? "End (e.g., Dec 2024)" : "Present"}
          className={`p-3 w-full border border-green-300 rounded-lg mb-4 ${
            !hasEnd ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        />

        <textarea
          name='description'
          rows={3}
          placeholder='Work description'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <label className='font-semibold text-green-900'>Offer Letter</label>
        <input
          type='file'
          name='offerLetter'
          accept='image/*,application/pdf'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <label className='font-semibold text-green-900'>Certificate</label>
        <input
          type='file'
          name='certificate'
          accept='image/*,application/pdf'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <button
          type='submit'
          className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700'
        >
          {isPending ? "Saving..." : "Add Experience"}
        </button>
      </form>

      {/* EXPERIENCE LIST */}
      <div className='mt-12 flex flex-col gap-6'>
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className='bg-white/80 p-6 rounded-xl border border-green-200 shadow-lg'
          >
            <h3 className='text-xl font-bold text-green-900'>{exp.role}</h3>
            <p className='text-green-700 font-medium'>{exp.company}</p>
            <p className='text-green-600 text-sm'>
              {exp.start} — {exp.end ?? "Present"}
            </p>

            <p className='text-green-800 mt-3 text-sm'>{exp.description}</p>

            <div className='mt-4 flex gap-3'>
              {exp.offerLetterUrl && (
                <button
                  onClick={() => openFile(exp.offerLetterUrl)}
                  className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
                >
                  Offer Letter
                </button>
              )}

              {exp.certificateUrl && (
                <button
                  onClick={() => openFile(exp.certificateUrl)}
                  className='px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800'
                >
                  Certificate
                </button>
              )}
            </div>

            <div className='mt-4 flex gap-3'>
              <button
                onClick={() => setEditing(exp)}
                className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
              >
                Edit
              </button>

              <form action={() => deleteExperience(exp._id)}>
                <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-xl shadow-xl w-full max-w-xl'>
            <h2 className='text-2xl font-bold text-green-900 mb-4'>
              Edit Experience
            </h2>

            <form
              action={async (formData) => {
                await updateExperience(editing._id, formData);
                setEditing(null);
              }}
              formEncType='multipart/form-data'
              className='flex flex-col gap-4'
            >
              <input
                type='text'
                name='role'
                defaultValue={editing.role}
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='text'
                name='company'
                defaultValue={editing.company}
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='text'
                name='start'
                defaultValue={editing.start}
                className='p-3 border border-green-300 rounded-lg'
              />

              {/* Checkbox */}
              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  id='hasEndEdit'
                  checked={hasEndEdit}
                  onChange={(e) => setHasEndEdit(e.target.checked)}
                />
                <label htmlFor='hasEndEdit' className='text-green-800'>
                  This experience has an end date
                </label>
              </div>

              {/* End date */}
              <input
                type='text'
                name='end'
                disabled={!hasEndEdit}
                defaultValue={hasEndEdit ? editing?.end : ""}
                placeholder={hasEndEdit ? "End Date" : "Present"}
                className={`p-3 border border-green-300 rounded-lg ${
                  !hasEndEdit ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
              />

              <textarea
                name='description'
                rows={3}
                defaultValue={editing.description}
                className='p-3 border border-green-300 rounded-lg'
              />

              <label>Offer Letter</label>
              <input
                type='file'
                name='offerLetter'
                accept='image/*,application/pdf'
                className='p-3 border border-green-300 rounded-lg'
              />

              <label>Certificate</label>
              <input
                type='file'
                name='certificate'
                accept='image/*,application/pdf'
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='hidden'
                name='existingOffer'
                value={editing.offerLetterUrl}
              />

              <input
                type='hidden'
                name='existingCertificate'
                value={editing.certificateUrl}
              />

              <div className='flex justify-between mt-4'>
                <button
                  type='button'
                  onClick={() => setEditing(null)}
                  className='px-4 py-2 bg-gray-300 rounded-lg'
                >
                  Cancel
                </button>

                <button
                  type='submit'
                  className='px-4 py-2 bg-green-600 text-white rounded-lg'
                >
                  {isPending ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* IMAGE VIEWER MODAL */}
      {viewerUrl && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
          <div className='bg-white p-4 rounded-xl shadow-xl'>
            <img
              src={viewerUrl}
              className='max-w-[90vw] max-h-[80vh] rounded-lg'
            />
            <button
              onClick={() => setViewerUrl(null)}
              className='mt-4 px-4 py-2 bg-red-500 text-white rounded-lg'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
