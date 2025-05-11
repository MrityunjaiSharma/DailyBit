import React from 'react';
import { useForm } from 'react-hook-form';

export default function AuthForm({ type, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row p-10 bg-back">
      {/* Form Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center px-20 bg-sec rounded-l-3xl">
        <h2 className="text-3xl font-bold text-txt mb-2">Welcome!</h2>
        <p className="text-gray-400 mb-6">
          {type === 'login' ? 'Login to your account' : 'Create your account'}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md space-y-4"
        >
          {type !== 'login' && (
            <div>
              <input
                type="text"
                placeholder="Enter username"
                {...register("username")}
                className="w-full px-4 py-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
              />
            </div>
          )}

          <div className=''>
            <input
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
            />
            {errors.email && (
              <span className="text-red-300 text-sm">*Email is mandatory</span>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password")}
              className="w-full px-4 py-2 border-b border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-main"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 mt-2 bg-back text-txt border rounded hover:bg-sec hover:border transition"
          >
            {type === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center bg-sec p-14 rounded-r-3xl overflow-hidden">
        <img
          src="https://img.freepik.com/free-vector/cartoon-business-person-meditating_23-2148909904.jpg?t=st=1746954155~exp=1746957755~hmac=b781a75e3e37f0b3216a829fbdc7b0815d20aefc2f954400f1bb8b864cb26291&w=900"
          alt="Auth"
          className="w-full h-full max-w-full rounded-3xl shadow-md object-cover"
        />
      </div>
    </div>
  );
}
