type TwoLinePasswordProps = {
  id: string;
  placeholderTitle: string;
  mask: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function TwoLinePasswordInput({
  id,
  placeholderTitle,
  mask,
  value,
  onChange,
}: TwoLinePasswordProps) {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type="password"
        value={value}
        onChange={onChange}
        className="w-full border border-[#C9C0D4] rounded px-4 py-3.5 bg-transparent focus:outline-none placeholder:text-xs"
      />

      {!value && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-center px-4 py-3">
          <span className="block text-sm text-gray-500">
            {placeholderTitle}
          </span>
          <span className="block text-base text-gray-300">{mask}</span>
        </div>
      )}
    </div>
  );
}
