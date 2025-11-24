"use client";

import { useState, useTransition } from "react";
import {
  addService,
  deleteService,
  addAddOn as addAddOnServer,
} from "./actions";

export default function ServiceClient({ services }) {
  const [isPending, startTransition] = useTransition();

  // Local state for Add Service form
  const [addOns, setAddOns] = useState([]);
  const [showPages, setShowPages] = useState(false);

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-900'>Services</h1>
      <p className='text-green-700 mt-1'>Create and manage service offerings</p>

      {/* ADD SERVICE FORM */}
      <form
        action={(formData) => {
          formData.set("addOnsJson", JSON.stringify(addOns));
          startTransition(() => addService(formData));
          setAddOns([]);
        }}
        className='mt-8 bg-white/80 p-6 border border-green-300 rounded-xl max-w-xl shadow'
      >
        <h2 className='text-xl font-bold text-green-900 mb-4'>
          Add New Service
        </h2>

        {/* Title */}
        <input
          type='text'
          name='title'
          placeholder='Service Title (e.g., Landing Page Website)'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
          required
        />

        {/* Category */}
        <input
          type='text'
          name='category'
          placeholder='Category (e.g., Web Development)'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
          required
        />

        {/* Description */}
        <textarea
          name='description'
          placeholder='Service Description'
          rows={4}
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
        />

        {/* Base Price */}
        <input
          type='number'
          name='basePrice'
          placeholder='Base Price (₹)'
          className='p-3 w-full border border-green-300 rounded-lg mb-4'
          required
        />

        {/* Checkbox */}
        <div className='flex items-center gap-3 mb-4'>
          <input
            type='checkbox'
            name='hasPages'
            id='hasPages'
            onChange={(e) => setShowPages(e.target.checked)}
          />
          <label htmlFor='hasPages' className='text-green-700'>
            This service includes multiple pages?
          </label>
        </div>

        {/* Price Per Page */}
        {showPages && (
          <input
            type='number'
            name='pricePerPage'
            placeholder='Price Per Extra Page (₹)'
            className='p-3 w-full border border-green-300 rounded-lg mb-4'
            required
          />
        )}

        {/* ADD-ONS MANAGER */}
        <div className='bg-green-50 p-4 rounded-lg border border-green-200 mb-4'>
          <h3 className='font-semibold text-green-800 mb-3'>
            Add-Ons (optional)
          </h3>

          {addOns.map((addOn, index) => (
            <div
              key={index}
              className='flex items-center gap-3 mb-3 bg-white p-3 rounded-lg border border-green-200'
            >
              <input
                type='text'
                placeholder='Add-on Title'
                value={addOn.title}
                onChange={(e) => {
                  const updated = [...addOns];
                  updated[index].title = e.target.value;
                  setAddOns(updated);
                }}
                className='p-2 border border-green-300 rounded-lg flex-1'
              />

              <input
                type='number'
                placeholder='Price (₹)'
                value={addOn.price}
                onChange={(e) => {
                  const updated = [...addOns];
                  updated[index].price = Number(e.target.value);
                  setAddOns(updated);
                }}
                className='p-2 w-28 border border-green-300 rounded-lg'
              />

              <button
                type='button'
                onClick={() => setAddOns(addOns.filter((_, i) => i !== index))}
                className='text-red-500 font-bold'
              >
                ×
              </button>
            </div>
          ))}

          {/* Add new row */}
          <button
            type='button'
            onClick={() => setAddOns([...addOns, { title: "", price: "" }])}
            className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700'
          >
            + Add Add-On
          </button>
        </div>

        {/* Hidden input */}
        <input type='hidden' name='addOnsJson' value={JSON.stringify(addOns)} />

        <button
          type='submit'
          className='w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800'
        >
          {isPending ? "Saving..." : "Add Service"}
        </button>
      </form>

      {/* SERVICE LIST */}
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {services.map((service) => (
          <div
            key={service._id}
            className='bg-white p-6 rounded-xl shadow border border-green-200'
          >
            <h2 className='text-xl font-bold text-green-900'>
              {service.title}
            </h2>
            <p className='text-green-700'>{service.category}</p>
            <p className='text-green-800 text-sm mt-2'>{service.description}</p>

            <p className='font-semibold text-green-900 mt-3'>
              Base Price: ₹{service.basePrice}
            </p>

            {service.hasPages && (
              <p className='text-green-700 text-sm'>
                + ₹{service.pricePerPage}/page
              </p>
            )}

            <div className='mt-4'>
              <h3 className='font-bold text-green-900 mb-2'>Add-Ons</h3>

              {service.addOns?.length === 0 && (
                <p className='text-sm text-green-600'>No add-ons yet.</p>
              )}

              {service.addOns?.map((add, i) => (
                <p key={i} className='text-green-700 text-sm'>
                  • {add.title} — ₹{add.price}
                </p>
              ))}

              {/* Server-side add-on for existing service */}
              <form
                action={(formData) => addAddOnServer(service._id, formData)}
                className='mt-4 flex flex-col gap-2 bg-green-50 p-3 rounded-lg border border-green-200'
              >
                <input
                  type='text'
                  name='addOnTitle'
                  placeholder='Add-on Title'
                  className='p-2 border border-green-300 rounded-lg'
                  required
                />
                <input
                  type='number'
                  name='addOnPrice'
                  placeholder='Add-on Price (₹)'
                  className='p-2 border border-green-300 rounded-lg'
                  required
                />
                <button className='bg-green-600 text-white py-2 rounded-lg hover:bg-green-700'>
                  Add Add-On
                </button>
              </form>
            </div>

            {/* DELETE */}
            <form action={() => deleteService(service._id)} className='mt-4'>
              <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'>
                Delete Service
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
