"use client";

import { useState, useTransition } from "react";
import { addSkill, deleteSkill, updateSkill } from "./actions";

export default function SkillsClient({ skills }) {
  const [isPending, startTransition] = useTransition();
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-900'>Skills</h1>
      <p className='text-green-700 mt-2'>Manage your technical skills</p>

      {/* ADD SKILL */}
      <form
        action={(formData) => startTransition(() => addSkill(formData))}
        className='mt-8 bg-white/80 backdrop-blur-md border border-green-200 
        p-6 rounded-xl shadow-lg max-w-xl'
      >
        <h2 className='text-xl font-semibold text-green-900 mb-4'>Add Skill</h2>

        <input
          type='text'
          name='name'
          placeholder='Skill Name'
          required
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='number'
          name='level'
          placeholder='Proficiency (0-100)'
          required
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <button
          type='submit'
          className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700'
        >
          {isPending ? "Saving..." : "Add Skill"}
        </button>
      </form>

      {/* SKILLS LIST */}
      <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((skill) => (
          <div
            key={skill._id}
            className='bg-white/80 p-5 rounded-xl border border-green-200 shadow-lg'
          >
            <h3 className='text-xl font-bold text-green-900'>{skill.name}</h3>
            <p className='text-green-700 text-sm'>{skill.level}%</p>

            <div className='mt-4 flex gap-3'>
              <button
                onClick={() => setEditing(skill)}
                className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
              >
                Edit
              </button>

              <form action={() => deleteSkill(skill._id)}>
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
          <div className='bg-white p-6 rounded-xl shadow-xl w-full max-w-md'>
            <h2 className='text-2xl font-bold text-green-900 mb-4'>
              Edit Skill
            </h2>

            <form
              action={(formData) => {
                startTransition(() => updateSkill(editing._id, formData));
                setEditing(null);
              }}
              className='flex flex-col gap-4'
            >
              <input
                type='text'
                name='name'
                defaultValue={editing.name}
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='number'
                name='level'
                defaultValue={editing.level}
                className='p-3 border border-green-300 rounded-lg'
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
    </div>
  );
}
