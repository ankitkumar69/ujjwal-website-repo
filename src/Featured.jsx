
function Featured() {
  return (
     <div className="bg-[#161654] text-white">

    <div className="max-w-[1200px] mx-auto my-auto gap-3 py-10 flex flex-col md:flex-row justify-evenly items-center ">
      <div className="w-full md:w-1/3  text-center rounded-md  ">

        <h4 className="text-xl text-center font-semibold"> Customer Service</h4>
         we offer 24*7 customer support for any query regarding our work
      </div>
      <div className=" w-full md:w-1/3   text-center rounded-md">
      <h4 className="text-xl font-semibold">Site Visit</h4>
       <p> Proper site visit to see your self by Your own</p>
      </div>
      <div className="w-full md:w-1/3   text-center rounded-md ">
      <h4 className="text-xl font-semibold">Registered Properties</h4>
        <p>All the property are verifed and registered and have proper documentation</p>
      </div>
    </div>
    </div>
  )
}

export default Featured
