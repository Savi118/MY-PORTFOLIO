"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { addProject, deleteProject, updateProject } from "./actions";

export default function ProjectsClient({ projects }) {
  const [isPending, startTransition] = useTransition();
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-900'>Projects</h1>
      <p className='text-green-700 mt-2'>Manage your portfolio projects</p>

      {/* CREATE PROJECT */}
      <form
        action={(formData) => startTransition(() => addProject(formData))}
        className='mt-8 bg-white/80 backdrop-blur-md border border-green-200 
          p-6 rounded-xl shadow-lg max-w-xl'
      >
        <h2 className='text-xl font-semibold text-green-900 mb-4'>
          Add New Project
        </h2>

        <input
          type='text'
          name='title'
          required
          placeholder='Project Title'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <textarea
          name='description'
          placeholder='Short Description'
          rows={3}
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='text'
          name='techStack'
          placeholder='Tech Stack (comma separated)'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='file'
          name='image'
          accept='image/*'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='text'
          name='github'
          placeholder='GitHub Link'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <input
          type='text'
          name='live'
          placeholder='Live Demo Link'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        <div className='flex items-center gap-3 mb-4'>
          <input type='checkbox' name='highlight' id='highlight' />
          <label htmlFor='highlight' className='text-green-800'>
            Highlight this project
          </label>
        </div>

        <button
          type='submit'
          className='w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700'
        >
          {isPending ? "Saving..." : "Add Project"}
        </button>
      </form>

      {/* LIST PROJECTS */}
      <div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='bg-white/80 p-5 rounded-xl border border-green-200 shadow-lg'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-40 object-cover rounded-lg mb-4'
            />

            <h3 className='text-xl font-bold text-green-900'>
              {project.title}
            </h3>

            <p className='text-green-700 text-sm mt-2'>{project.description}</p>

            <div className='mt-3 flex flex-wrap gap-2'>
              {project.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className='px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs'
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.highlight && (
              <p className='mt-2 text-green-700 font-semibold text-sm'>
                ⭐ Highlighted
              </p>
            )}

            <div className='mt-4 flex gap-3'>
              <button
                onClick={() => setEditing(project)}
                className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
              >
                Edit
              </button>

              <form action={() => deleteProject(project._id)}>
                <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600'>
                  Delete
                </button>
              </form>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className='fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-xl shadow-xl w-full max-w-xl'>
            <h2 className='text-2xl font-bold text-green-900 mb-4'>
              Edit Project
            </h2>

            <form
              action={(formData) => {
                startTransition(() => updateProject(editing._id, formData));
                setEditing(null);
              }}
              className='flex flex-col gap-4'
            >
              <input
                type='text'
                name='title'
                defaultValue={editing.title}
                className='p-3 border border-green-300 rounded-lg'
              />

              <textarea
                name='description'
                rows={3}
                defaultValue={editing.description}
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='text'
                name='techStack'
                defaultValue={editing.techStack.join(", ")}
                className='p-3 border border-green-300 rounded-lg'
              />

              <input type='hidden' name='existingImage' value={editing.image} />

              <input
                type='file'
                name='image'
                accept='image/*'
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='text'
                name='github'
                defaultValue={editing.github}
                className='p-3 border border-green-300 rounded-lg'
              />

              <input
                type='text'
                name='live'
                defaultValue={editing.live}
                className='p-3 border border-green-300 rounded-lg'
              />

              <div className='flex items-center gap-3'>
                <input
                  type='checkbox'
                  name='highlight'
                  defaultChecked={editing.highlight}
                />
                <label className='text-green-800'>Highlight</label>
              </div>

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
