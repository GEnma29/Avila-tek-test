type OptionsType = {
  label: string;
  value: string;
};

export default function Select({
  name,

  options,
}: {
  name: string;
  options: OptionsType[];
}) {
  return (
    <div className="flex mr-4">
      <select
        id={`select-${name}`}
        name={name}
        className="select"
        // className="block  p-0  h-[20px]  w-full fill-inherit  bg-primary-300 text-white-500 border-0 after:  pl-2 pr-10 text-white  sm:text-[12px] sm:leading-6"
        defaultValue={options[0].value}
      >
        {options.map(({ value, label: optionLabel }) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>
    </div>
  );
}
