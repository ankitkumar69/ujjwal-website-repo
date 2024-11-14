function TextInput(props) {
  return (
    <div className="w-full mx-auto px-5 gap-3 flex flex-col  ">
      <label className="font-semibold  text-lg">{props.label}</label>
      <input
        className="border-2 border-solid border-grey w-[100%] p-2  rounded-sm"
        type={props?.type}
        name={props?.name}
        onChange={props?.onChange}
      ></input>
    </div>
  );
}

export default TextInput;
