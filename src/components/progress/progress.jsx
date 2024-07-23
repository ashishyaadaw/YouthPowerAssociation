import React from "react";

function Progress() {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bona-nova-sc-bold font-bold text-red-600 sm:text-4xl">
            Youth Power Association
          </h2>

          <p className="mt-4 font-playwrite-de-grund  text-gray-500 sm:text-xl">
            YPA is a Youth - Run & Lead Non – Government Organization.
            (Channelizing the Youth Power)
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Events
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                100+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Direct Benifeciaries
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                7K+
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Voluteer
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                50+
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Progress;
