




function Footer() {
  const arr1 = [
    {
      title: "Get To Know Us",
      sublink: ["About Us", "Careers", "Press REleases", "Amazon Science"],
    },
    {
      title: "Connect with Us",
      sublink: ["Facebook", "Twitter", "Instagram"],
    },
   
    {
      title: "Let Us Help You",
      sublink: [
        "your Account",
        "100% Purchase Protection",
        "Help",
      ],
    },
  ];

 
  return (
    <div className="bg-gray-600">
      <div className="">
        <div className=" max-w-[1400px] mx-auto p-4 flex justify-between text-xs text-white">
          {arr1.map((item, index) => (
            <ul key={index}>
              {item.sublink.map((item, index) => (
                <li key={index} className="cursor-pointer hover:underline">{item}</li>
              ))}
            </ul>
          ))}
        </div>

        <div className="text-white text-xs">
          <hr className=" "></hr>
        
          </div>
        </div>
        <div className=" text-white text-center p-4 ">
          <p>Condition of Use &Sale Privacy Notice Interest-Based Ads</p>
          <p>C 2024, Amazon.com,inc.or its affiliates</p>
        </div>
      </div>
  
  );
}

export default Footer;
