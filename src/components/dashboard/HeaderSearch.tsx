import Image from "next/image";

export default function HeaderSearch() {
  return (
    <div className="w-full border-[1px] border-gray flex justify-between rounded-[6px]">
      <input
        type="text"
        className="p-[12px] poppins flex-1 border-0 outline-0 text-gray text-[1rem] font-[400]"
        name=""
        placeholder="search"
      />
      <button>
        <Image
          src="/DashboardIcons/searchIcon.svg"
          alt="search icon"
          height={18}
          width={18}
          className="mx-4 border-2"
        />
      </button>
    </div>
  );
}
