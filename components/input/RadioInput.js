export default function RadioInput({ get, set, label, options, err }) {
  return (
    <div className="mb-8">
      <div className="block md:flex items-center mb-4">
        <div className="flex items-center">
          <div>{label}</div>
          <div className="ml-4 text-3xl text-red-500">※</div>
        </div>
        {err ? (
          <div className="md:ml-4 text-red-500">
            チェックボックスにチェックを入れてください。
          </div>
        ) : null}
      </div>
      <div className="block md:flex items-center">
        {options.map((item, idx) => {
          return (
            <div className="flex items-center mr-6" key={idx}>
              <input
                type="radio"
                id={item}
                value={item}
                checked={item === get}
                onChange={(e) => set(e.target.value)}
                className="cursor-pointer"
              />
              <label htmlFor={item} className="ml-2 cursor-pointer">
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
