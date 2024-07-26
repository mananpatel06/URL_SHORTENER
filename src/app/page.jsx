"use server"
import Form from "@/components/form";
import Table from "@/components/table";
import DataProvider from "@/context/DataProvider";

const Home = () => {
  return (
    <>
    
      <div className=" w-screen overflow-hidden bg-neutral-900 h-screen flex flex-col items-center justify-center">
        <h1 className=" font-bold text-3xl p-2 my-3 text-blue-600">URL Shortener</h1>

        <Form />

        <div className="m-5 p-5 w-screen h-[80%] flex justify-center overflow-y-auto">
          <Table/>
        </div>
      </div>

    </>
  );
};

export default Home;
