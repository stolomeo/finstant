type Props = {
  isNewUser?: boolean;
};

export const AuthForm = ({ isNewUser }: Props) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full max-w-md bg-white rounded-lg shadow dark:border md:mb-20 xl:p-0 dark:bg-gray-900 dark:border-gray-700">
          <div className="p-8 space-y-4 md:space-y-6 md:p-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {isNewUser
                ? "Sign up for a new account"
                : "Sign in to your account"}
            </h1>
            <form className="space-y-4 md:space-y-6">
              {isNewUser && (
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {!isNewUser && (
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:underline dark:text-white"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign {isNewUser ? "up" : "in"}
              </button>

              <p className="text-sm font-light text-center text-gray-500 dark:text-gray-400">
                {isNewUser
                  ? "Already have an account? "
                  : "Don't have an account yet? "}
                <a
                  href="#"
                  className="font-medium text-gray-300 hover:underline"
                >
                  Sign {isNewUser ? "in" : "up"}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
