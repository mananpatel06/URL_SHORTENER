"use server"
import Form from "@/components/form";
import Table from "@/components/table";

const Home =  () => {

  return (
    <div className=" w-full bg-neutral-800 h-screen flex flex-col items-center justify-center">
      <h1 className=" font-bold text-3xl m-3 text-blue-600">URL Shortener</h1>

      <Form />

      <div className="m-5 p-5 max-sm:max-h-[80%] h-[80%] overflow-y-auto">
        
        <Table />
      </div>
    </div>
  );
};

export default Home;
