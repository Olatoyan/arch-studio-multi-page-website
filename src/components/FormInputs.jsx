function FormInputs({ type, placeholder, value, onChange, error }) {
  return (
    <div>
      <div className="flex pb-4 border-b-very-dark-blue border-b px-12 mb-12">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border-0 outline-none bg-transparent placeholder:text-light-grey text-[2rem] font-bold tracking-[-0.0312rem] text-very-dark-blue w-[80%]"
        />
        {error && (
          <p className="text-error text-[1.8rem] font-bold tracking-[-0.0281rem] ml-auto mid:text-[1.5rem]">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default FormInputs;
