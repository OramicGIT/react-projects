export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100, mt-10">
      <h1 className="text-2x1 font-bold text-gray-800 mb-6 text-center">
        Приєднатися до Kool GNOMY Quest Board
      </h1>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-xl text-gray-700 mb-1">
            Email
          </label>
          <input
            type="text"
            className="w-full border border-gray-700 rounded-lg px-4 py-2"
          ></input>
        </div>
        <div>
          <label className="block text-sm font-xl text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-700 rounded-lg px-4 py-2"
          ></input>
        </div>
        <button
          type="button"
          className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition mt-2"
        >
          Увійти
        </button>
      </form>
    </div>
  );
}
