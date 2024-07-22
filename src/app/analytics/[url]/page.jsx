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

      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>

  }

  return (
    <div className="w-full bg-neutral-900 min-h-screen text-white p-3">
      {
        data && (
          <div className="flex flex-col gap-5">
            <h1 className="w-full text-center text-5xl">Analytics</h1>
            <hr />
            <div className="p-3 flex justify-between text-2xl">
              <div className="flex flex-col justify-center w-[40%] gap-5">
                <h1>
                  Original Url :{" "}
                  <Link className="text-blue-600" href={data[url].full}>
                    {data[url].full}
                  </Link>
                </h1>
                <h1>
                  Short Url :{" "}
                  <Link className="text-blue-600" href={`/${data[url].short}`}>
                    {data[url].short}
                  </Link>
                </h1>
                {data[url].visitHistory.length > 0 && (
                  <div>
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
              <div className=" h-[40%] w-[50%] flex justify-center items-center">
                <Chart chartData={data[url]} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default UrlAnalytics;
