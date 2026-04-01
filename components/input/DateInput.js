import { useEffect, useState } from "react";

export default function DateInput({ set, label, err }) {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    if (year && month && day) set(`${year}-${month}-${day}`);
    else set(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, day]);

  return (
    <div className="mb-8">
      <div className="block md:flex items-center mb-4">
        <div className="flex items-center">
          <div>{label}</div>
          <div className="ml-4 text-3xl text-red-500">※</div>
        </div>
        {err ? (
          <div className="md:ml-4 text-red-500">生年月日をご記入ください</div>
        ) : null}
      </div>
      <div className="block md:flex items-center">
        <input
          type="text"
          className={`block bg-[#ececec] rounded px-4 py-2 w-40 md:mr-5 mb-5 md:mb-0 ${
            err ? "placeholder-red-500" : "placeholder-black"
          }`}
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="1111"
        />
        <input
          type="text"
          className={`block bg-[#ececec] rounded px-4 py-2 w-40 md:mr-5 mb-5 md:mb-0 ${
            err ? "placeholder-red-500" : "placeholder-black"
          }`}
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          placeholder="01"
        />
        <input
          type="text"
          className={`block bg-[#ececec] rounded px-4 py-2 w-40 md:mr-5 mb-5 md:mb-0 ${
            err ? "placeholder-red-500" : "placeholder-black"
          }`}
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="01"
        />
      </div>
    </div>
  );
}
