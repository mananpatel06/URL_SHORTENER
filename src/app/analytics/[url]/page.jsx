"use client";
import Chart from "@/components/chart";
import { DataContext } from "@/context/DataProvider";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const UrlAnalytics = () => {
  const { url } = useParams();
  const { data, loading, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    <div className="w-screen bg-neutral-900 text-3xl text-white h-screen flex justify-center  overflow-hidden items-center">Loading...</div>;
  }

  return (
    <div className="w-screen bg-neutral-900 overflow-hidden min-h-screen text-white p-3">
      <div className="w-screen text-center text-2xl p-3 lg:text-5xl">Analytics</div>
      <hr />
      {data && (
        <div className="w-screen flex flex-col lg:flex-row lg:justify-between gap-5">
          <div className="p-3 flex sm:flex-col lg:flex-row text-2xl">
            <div className="flex flex-col justify-center gap-5">
              <h1>
                Original Url :<br/>
                <Link className="text-blue-600" href={data[url].full}>
                  {data[url].full}
                </Link>
              </h1>
              <h1>
                Short Url :<br/>
                <Link className="text-blue-600" href={`/${data[url].short}`}>
                  {data[url].short}
                </Link>
              </h1>
              {data[url].visitHistory.length > 0 && (
                <div className="w-ful">
                  <h3 className="mb-1">History :</h3>

                  <ul className="bg-neutral-800 p-3 text-xl rounded-lg w-fit">
                    {data[url].visitHistory.map((visit, index) => (
                      <li key={visit._id}>
                        <div className="flex gap-3">
                          <span>{index + 1}</span>
                          <span suppressHydrationWarning>
                            {new Date(visit.timestamp).toLocaleString()}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className=" h-[40%]  lg:w-[50%]    p-3 flex justify-center items-center">
            <Chart chartData={data[url]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlAnalytics;
