import React from "react";
import Link from "next/link";
import AccuracyGraph from "../Graph/Graph";

const UIModal = () => {
  return (
    <div className="max-w-7lg mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
        <div className="border border-color-[#F0F0ED] p-8 pb-14 rounded-md top-shadow">
          <div>
            <div className="text-xs font-jbMono border border-color-[#F0F0ED] size-fit text-[#8C8C89] rounded-md px-[.5rem] py-[.25rem] top-shadow bg-[#FFFFFFB3] mb-4">
              Why Spotter <span className="blinking-animation">_</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-6 leading-tight">
              The most <span className="spotter-1">accurate</span> <br />
              visitor identification on the internet.
            </h1>
            <p className="text-md font-normal text-gray-700 mb-8 leading-relaxed">
              Unmatched accuracy that lasts for months or even years,
              <br />
              <b>even after cookies are cleared.</b>
            </p>
            <Link
              href="/"
              className="bg-[#F8F8F6] inline-block py-[0.50rem] px-[0.75rem] border-color-[#D9D9D6] button-shadow text-xs font-medium rounded-md border border-gray-300 hover:bg-[#F0F0ED] transition-colors"
            >
              Learn More
            </Link>

            <AccuracyGraph />
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4 border rounded-lg px-[1rem] py-[1.5rem] card-shadow">
            <div className="p-2 bg-spotter-3 rounded-lg card-shadow">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#008081"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-base">
                Any browser, any device.
              </h3>
              <p className="text-[#484946] text-sm ">
                Identify returning web and mobile app visitors on all browsers,
                <br />
                iOS, and Android, with exceptional accuracy.
              </p>
            </div>
          </div>

          <div className="relative w-full rounded-lg border">
            <div className="relative inset-0 grid grid-cols-[repeat(40,1fr)] gap-1 mb-4">
              {Array(760)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-sm ${
                      Math.random() > 0.9 ? "bg-[#008081]" : "bg-[#cae2e4]"
                    }`}
                  />
                ))}
            </div>
            <div className="relative flex items-center gap-4 z-10 p-4">
              <div className="p-2 bg-spotter-3 rounded-lg card-shadow">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#008081"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C7.029 2 3 6.029 3 10s4.029 8 9 8 9-4.029 9-8-4.029-8-9-8zm0 14a6 6 0 100-12 6 6 0 000 12z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-base">
                  Identify all anonymous visitors.
                </h3>
                <p className="text-[#484946] text-sm">
                  Get details on suspicious visitors even when VPN,
                  <br />
                  incognito mode, or a tampered browser or device is used.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 border rounded-lg px-[1rem] py-[1.5rem] card-shadow">
            <div className="p-2 bg-spotter-3 rounded-lg card-shadow">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#008081"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-base">
                Delight your trusted users.
              </h3>
              <p className="text-[#484946] text-sm ">
                Personalize user experience and reduce 2FA and OTP requirements
                <br />
                by identifying logged-out users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIModal;
