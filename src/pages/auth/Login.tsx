export const LoginPage = () => (
  <div className="m-auto border-solid border-2 border-black p-10 rounded-lg ">
    <h1>Login </h1>
    <div className="flex flex-col mt-10">
      <label htmlFor="email" className="block text-sm font-medium">
        Email/UserName
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder="name@flowbite.com"
      />

      <label htmlFor="password" className="block  text-sm font-medium ">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
      />
    </div>
  </div>
);
