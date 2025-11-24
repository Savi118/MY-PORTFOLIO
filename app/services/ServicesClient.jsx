"use client";

import { useState, useEffect, useTransition } from "react";
import { submitServiceRequest } from "./actions";
import QRCode from "react-qr-code";

export default function ServicesClient({ services, settings }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedPages, setSelectedPages] = useState(1);
  const [customPages, setCustomPages] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [upiString, setUpiString] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (!selectedService) return;

    const base = selectedService.basePrice;
    let pageCost = 0;

    if (selectedService.hasPages) {
      if (selectedPages === 99) {
        // Custom selected → use ONLY customPages
        pageCost =
          customPages > 1
            ? (customPages - 1) * selectedService.pricePerPage
            : 0;
      } else {
        // Fixed options like 1/3/5/7/9/10
        pageCost =
          selectedPages > 1
            ? (selectedPages - 1) * selectedService.pricePerPage
            : 0;
      }
    }

    const addOnCost = selectedAddOns.reduce((acc, a) => acc + a.price, 0);

    setTotalPrice(base + pageCost + addOnCost);
  }, [selectedService, selectedPages, customPages, selectedAddOns]);

  const generateUPI = () => {
    const upi = `upi://pay?pa=${settings.upiId}&pn=Saksham&am=${totalPrice}&cu=INR`;
    setUpiString(upi);
  };

  return (
    <section className='w-full py-16 px-6 bg-green-50/40 min-h-screen'>
      <h1 className='text-4xl font-extrabold text-green-900 text-center mb-12'>
        Services & Pricing
      </h1>

      {/* SERVICES LIST */}
      <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-16'>
        {services.map((service) => (
          <div
            key={service._id}
            onClick={() => {
              setSelectedService(service);
              setSelectedPages(1);
              setCustomPages(0);
              setSelectedAddOns([]);
            }}
            className={`p-5 bg-white rounded-xl shadow border cursor-pointer transition ${
              selectedService?._id === service._id
                ? "border-green-600 bg-green-100/40"
                : "border-green-200"
            }`}
          >
            <h2 className='text-xl font-bold text-green-900'>
              {service.title}
            </h2>
            <p className='text-green-700'>{service.category}</p>
            <p className='text-green-900 font-semibold mt-2'>
              Starts at ₹{service.basePrice}
            </p>
          </div>
        ))}
      </div>

      {/* PRICE CALCULATOR PANEL */}
      {selectedService && (
        <div className='max-w-4xl mx-auto bg-white p-8 rounded-xl shadow border border-green-300'>
          <h2 className='text-2xl font-bold text-green-900 mb-4'>
            {selectedService.title}
          </h2>

          {/* PAGE OPTIONS */}
          {selectedService.hasPages && (
            <div className='mb-6'>
              <label className='font-semibold text-green-800'>Pages:</label>
              <select
                value={selectedPages}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setSelectedPages(value);

                  if (value !== 99) setCustomPages(0); // Reset custom
                }}
                className='p-3 border border-green-300 rounded-lg ml-3'
              >
                {[1, 3, 5, 7, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} Pages
                  </option>
                ))}
                <option value={99}>Custom</option>
              </select>

              {selectedPages === 99 && (
                <input
                  type='number'
                  className='ml-3 p-3 border rounded-lg'
                  placeholder='Enter pages'
                  value={customPages}
                  onChange={(e) => setCustomPages(Number(e.target.value))}
                />
              )}
            </div>
          )}

          {/* ADD ONS */}
          <div>
            <h3 className='font-semibold text-green-800 mb-3'>Add-ons</h3>
            <div className='flex flex-wrap gap-3'>
              {selectedService.addOns.map((add) => (
                <button
                  key={add.title}
                  onClick={() =>
                    setSelectedAddOns((prev) =>
                      prev.includes(add)
                        ? prev.filter((a) => a !== add)
                        : [...prev, add]
                    )
                  }
                  className={`px-4 py-2 rounded-full border ${
                    selectedAddOns.includes(add)
                      ? "bg-green-600 text-white border-green-700"
                      : "bg-green-100 text-green-800 border-green-300"
                  }`}
                >
                  {add.title} — ₹{add.price}
                </button>
              ))}
            </div>
          </div>

          {/* PRICE */}
          <h2 className='text-3xl font-bold text-green-900 mt-8'>
            Total: ₹{totalPrice}
          </h2>

          {/* UPI GENERATOR */}
          <button
            onClick={generateUPI}
            className='mt-4 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800'
          >
            Generate UPI QR
          </button>

          {upiString && (
            <div className='mt-6 flex justify-center'>
              <div className='bg-white p-4 rounded-xl shadow border border-green-200'>
                <QRCode value={upiString} size={180} />
              </div>
            </div>
          )}

          {/* FORM SUBMISSION */}
          <form
            action={(formData) =>
              startTransition(() => submitServiceRequest(formData))
            }
            className='mt-10 flex flex-col gap-4'
          >
            <input type='hidden' name='serviceId' value={selectedService._id} />
            <input type='hidden' name='selectedPages' value={selectedPages} />
            <input type='hidden' name='customPages' value={customPages} />
            <input
              type='hidden'
              name='selectedAddOnsJson'
              value={JSON.stringify(selectedAddOns)}
            />

            <input
              name='customerName'
              placeholder='Your Name'
              required
              className='p-3 border border-green-300 rounded-lg'
            />
            <input
              name='email'
              placeholder='Email'
              required
              className='p-3 border border-green-300 rounded-lg'
            />
            <input
              name='contact'
              placeholder='Contact Number'
              required
              className='p-3 border border-green-300 rounded-lg'
            />

            {upiString && (
              <input
                required
                name='transactionId'
                placeholder='Enter UPI Transaction ID : TXN12345XXXXXXXX'
                onChange={(e) => setTransactionId(e.target.value)}
                className='p-3 border border-green-300 rounded-lg'
              />
            )}

            <textarea
              name='projectDetails'
              placeholder='Describe what you want...'
              rows={4}
              className='p-3 border border-green-300 rounded-lg'
            />

            <button className='px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800'>
              {isPending ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
