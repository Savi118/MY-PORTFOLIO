"use client";

import { useState, useTransition } from "react";
import { updateSettings } from "./actions";

export default function SettingsClient({ settings, projects }) {
  const [isPending, startTransition] = useTransition();

  const [profilePreview, setProfilePreview] = useState(
    settings.profileImage || ""
  );

  return (
    <section className='max-w-3xl'>
      <h1 className='text-3xl font-bold text-green-900'>Settings</h1>
      <p className='text-green-700 mb-6'>
        Manage profile info, image, socials & preferences
      </p>

      <form
        action={(formData) => startTransition(() => updateSettings(formData))}
        className='bg-white p-6 rounded-xl border border-green-300 shadow'
      >
        {/* ================= PERSONAL INFO ================= */}
        <h2 className='text-xl font-semibold text-green-900 mb-3'>
          Personal Information
        </h2>

        <label className='font-semibold text-green-800'>Admin Name</label>
        <input
          name='adminName'
          defaultValue={settings.adminName}
          className='p-3 border rounded-lg w-full mb-4'
        />

        <label className='font-semibold text-green-800'>Email</label>
        <input
          name='email'
          defaultValue={settings.email}
          className='p-3 border rounded-lg w-full mb-4'
        />

        <label className='font-semibold text-green-800'>Contact Number</label>
        <input
          name='contact'
          defaultValue={settings.contact}
          className='p-3 border rounded-lg w-full mb-4'
        />

        <label className='font-semibold text-green-800'>Bio</label>
        <textarea
          name='bio'
          defaultValue={settings.bio}
          rows={3}
          className='p-3 border rounded-lg w-full mb-4'
        />

        {/* ================= PROFILE IMAGE ================= */}
        <h2 className='text-xl font-semibold text-green-900 mt-6 mb-3'>
          Profile Image
        </h2>

        {profilePreview && (
          <img
            src={profilePreview}
            className='w-24 h-24 rounded-full object-cover mb-4 border'
          />
        )}

        <input
          type='file'
          name='profileImage'
          accept='image/*'
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) setProfilePreview(URL.createObjectURL(file));
          }}
          className='p-3 border rounded-lg w-full mb-4'
        />

        <input
          type='hidden'
          name='existingProfileImage'
          value={settings.profileImage || ""}
        />

        {/* ================= SOCIAL LINKS ================= */}
        <h2 className='text-xl font-semibold text-green-900 mt-6 mb-3'>
          Social Links
        </h2>

        <input
          name='github'
          placeholder='GitHub'
          defaultValue={settings.github}
          className='p-3 border rounded-lg w-full mb-4'
        />
        <input
          name='linkedin'
          placeholder='LinkedIn'
          defaultValue={settings.linkedin}
          className='p-3 border rounded-lg w-full mb-4'
        />
        <input
          name='instagram'
          placeholder='Instagram'
          defaultValue={settings.instagram}
          className='p-3 border rounded-lg w-full mb-4'
        />
        <input
          name='twitter'
          placeholder='Twitter'
          defaultValue={settings.twitter}
          className='p-3 border rounded-lg w-full mb-4'
        />
        <input
          name='portfolio'
          placeholder='Portfolio Website'
          defaultValue={settings.portfolio}
          className='p-3 border rounded-lg w-full mb-4'
        />

        {/* ================= PAYMENT ================= */}
        <h2 className='text-xl font-semibold text-green-900 mt-6 mb-3'>
          Payment Info
        </h2>

        <label className='font-semibold text-green-800'>UPI ID</label>
        <input
          name='upiId'
          defaultValue={settings.upiId}
          className='p-3 border rounded-lg w-full mb-4'
        />

        {/* ================= HIGHLIGHT PROJECT ================= */}
        <h2 className='text-xl font-semibold text-green-900 mt-6 mb-3'>
          Highlight Project
        </h2>

        <select
          name='highlightProjectId'
          defaultValue={settings.highlightProjectId}
          className='p-3 border rounded-lg w-full mb-4'
        >
          <option value=''>None</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.title}
            </option>
          ))}
        </select>

        {/* ================= SERVICE REQUEST TOGGLE ================= */}
        <div className='flex items-center gap-3 mb-6'>
          <input
            type='checkbox'
            name='allowServiceRequests'
            defaultChecked={settings.allowServiceRequests}
          />
          <label className='text-green-800'>Allow Service Requests</label>
        </div>

        {/* ================= SAVE BUTTON ================= */}
        <button
          type='submit'
          className='w-full py-3 bg-green-700 text-white rounded-lg hover:bg-green-800'
        >
          {isPending ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </section>
  );
}
