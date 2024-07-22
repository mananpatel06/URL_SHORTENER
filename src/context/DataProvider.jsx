"use client"
import { getAllUrl } from '@/lib/action';
import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [Loading, setLoading] = useState(false);

    const fetchData = async () => {
      setLoading(true);
      const data = JSON.parse(await getAllUrl());
      setData(data);
      setLoading(false);
    }
  return (
    <DataContext.Provider value={{data,Loading,fetchData}}>{ children }</DataContext.Provider>
  )
}

export default DataProvider