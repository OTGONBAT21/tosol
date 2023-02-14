export default function Zuun_tal() {
  return (
    <div
      class="flex w-full
    gi h-full bg-white items-center justify-center rounded-l-2xl"
    >
      <div class="w-96 h-auto ">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p className=" leading-10 text-gray-500 mt-2">
          Welcome back! Please enter your details
        </p>
        <h5 className="mt-2">Email</h5>

        <input
          className="w-96 h-10 border-2 border-gray-200 rounded-md  "
          type="email"
          placeholder="Enter your email"
          name="enter your email"
          vabel=""
        />

        <p className="mt-2">Password</p>
        <input
          className="w-96 h-10 border-2 border-gray-200 rounded-md"
          type="password"
          name="enter your email"
          value=""
        />
        <div className="flex h-10 items-center justify-between mt-2">
          <div className="flex">
            <input
              type="checkbox"
              name="Remember for 30 days"
              value=""
              className="accent-blue-500"
            />
            <p className="m-2">Remember for 30 days</p>
          </div>
          <a className="text-blue-500 hover:text-blue-700" href="#">
            Forgot password
          </a>
        </div>

        <button
          type="resert"
          className="w-96 h-10 bg-blue-500 rounded-lg mt-2 mb-1 text-white hover:bg-blue-600"
        >
          Log in
        </button>
        <button
          type="resert"
          className=" flex w-96 h-10 bg-white border-2 border-gray-200 rounded-md mt-4 items-center justify-center"
        >
          <img src="./img/google-logo.png" alt="" className="h-6 w-6 mr-2" />
          Sign in with Google
        </button>

        <div className="flex h-10 items-center justify-center mt-2">
          <p class="text-gray-500 ">Don't have an account? </p>
          <a className="text-blue-500 m-1 hover:text-blue-700" href="#">
            Sing up
          </a>
        </div>
      </div>
    </div>
  );
}
