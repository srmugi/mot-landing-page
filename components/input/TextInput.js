export default function TextInput({ get, set, label, placeholder, err }) {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-4">
        <div>{label}</div>
        <div className="ml-4 text-3xl text-red-500">※</div>
      </div>
      <div>
        <input
          type="text"
          className={`bg-[#ececec] w-full rounded px-4 py-2 ${
            err ? "placeholder-red-500" : "placeholder-black"
          }`}
          value={get}
          onChange={(e) => set(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
