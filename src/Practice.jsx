function Practice() {
  return (
    <div className="w-full bg-green-400 md:max-w-7xl mx-auto ">
      hello world
      <button className="animate-wiggle">click kar bsdk</button>
      <button className="hover:translate-x-8 hover:skew-x-6  hover:rotate-6 hover:scale-x-150 bg-red-50 text-primarybuttoncolor">
        Hello brahmand
      </button>
      <div className="w-64 h-64 bg-primarybgcolor">hello</div>
      <div className=" w-80 h-72 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ..."></div>
      <button
        type="button"
        className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 w-36 h-10 rounded-md text-white font-semibold"
      >
        Hover me
      </button>

      <ul className="list-image-[url(checkmark.png)]">
      <li>5 cups chopped Porcini mushrooms</li>

      </ul>

      {/* list-inside	list-style-position: inside; */}
{/* list-outside	list-style-position: outside; */}

<p className="underline decoration-red-500">The quick brown fox ...</p>
<p className="overline ">The quick brown fox ...</p>
<p className="line-through decoration-red-500 ">The quick brown fox ...</p>
<p className="no-underline ">The quick brown fox ...</p>

 {/* TEXT-TRANSFORM */}
<p className="normal-case ...">The quick brown fox ...</p>
<p className="uppercase ...">The quick brown fox ...</p>
<p className="lowercase ...">The quick brown fox ...</p>
<p className="capitalize ...">The quick brown fox ...</p>

{/* OVERFLOW */}
<p className="text-clip"> THIS ACTUALLY HIDE CLIP TEXT</p>


      <span className="before:content-[Hello]">Ankit kumar</span>

      <div className="flex  flex-col  md:flex-row border-2 border-solid border-red-600">
              <div className="basis-60 border-4 border-solid border-yellow-600">1 loved it</div>
              <div className="basis-60 border-4 border-solid border-yellow-600">1</div>
              <div className="basis-60 border-4 border-solid border-yellow-600">1</div>
              <div className="basis-60 border-4 border-solid border-yellow-600">1</div>
      </div>

  <div className=""></div>

 </div>
  );
}

export default Practice;
