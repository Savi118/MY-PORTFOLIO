"use client";

import { useTransition } from "react";
import { markCompleted, deleteRequest } from "./actions";

export default function RequestClient({ requests }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <h1 className='text-3xl font-bold text-green-900'>Service Requests</h1>
      <p className='text-green-700 mt-1'>
        View all customer service submissions
      </p>

      <div className='mt-8 grid grid-cols-1 gap-6'>
        {requests.map((req) => (
          <div
            key={req._id}
            className='bg-white p-6 rounded-xl border border-green-300 shadow'
          >
            <h2 className='text-xl font-bold text-green-900'>
              {req.customerName}
            </h2>
            <p className='text-green-700'>{req.email}</p>
            <p className='text-green-700'>{req.contact}</p>

            <div className='mt-4'>
              <p className='font-semibold text-green-900'>
                Service: {req.serviceId?.title}
              </p>

              {/* Pages */}
              {req.serviceId?.hasPages && (
                <p className='text-green-800'>
                  Pages:{" "}
                  {req.selectedPages === 99
                    ? `${req.customPages} (Custom)`
                    : req.selectedPages}
                </p>
              )}

              {/* Add-ons */}
              {req.addOns?.length > 0 && (
                <div className='mt-2'>
                  <p className='font-semibold text-green-900'>Add-ons:</p>
                  {(req.addOns ?? []).map((a, i) => (
                    <p key={i} className='text-green-700 text-sm'>
                      • {a.title} — ₹{a.price}
                    </p>
                  ))}
                </div>
              )}

              {/* Transaction */}
              <p className='mt-2 font-semibold text-green-900'>
                Transaction ID:{" "}
                <span className='text-green-700'>{req.transactionId}</span>
              </p>

              <p className='font-bold text-green-900 mt-2'>
                Total Paid: ₹{req.totalPrice}
              </p>
            </div>

            {/* Buttons */}
            <div className='mt-4 flex gap-3'>
              {req.status === "Pending" && (
                <form
                  action={() => startTransition(() => markCompleted(req._id))}
                >
                  <button className='px-4 py-2 bg-green-600 text-white rounded-lg'>
                    Mark Completed
                  </button>
                </form>
              )}

              <form action={() => deleteRequest(req._id)}>
                <button className='px-4 py-2 bg-red-500 text-white rounded-lg'>
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
