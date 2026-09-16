import { useForm } from "react-hook-form";
import useUserStore from "../store/userStore";
import axios from "axios";
import { useNavigate } from "react-router";

export const AddUser = () => {
  const navigate = useNavigate();
  const addUser = useUserStore((state) => state.addUser);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.post(
        "https://fromlocallytoglobally.onrender.com/api/registerUser",
        {
          userName: data.name,
          userAge: data.age,
          userAmb: data.amb,
        },
      );

      addUser(res.data);

      navigate("/");
    } catch (error) {
      console.log("Error Adding In User", error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800">Add User</h2>
          <p className="mt-2 text-sm text-slate-500">
            Enter user details below
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="
            w-full rounded-xl border border-slate-300
            bg-slate-50 px-4 py-3
            text-slate-800
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-green-500
            focus:bg-white
            focus:ring-4
            focus:ring-green-100
          "
            />
          </div>

          {/* Age */}
          <div>
            <label
              htmlFor="age"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Age
            </label>

            <input
              id="age"
              type="number"
              placeholder="Enter your age"
              {...register("age", { required: true })}
              className="
            w-full rounded-xl border border-slate-300
            bg-slate-50 px-4 py-3
            text-slate-800
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-green-500
            focus:bg-white
            focus:ring-4
            focus:ring-green-100
          "
            />
          </div>

          {/* Ambition */}
          <div>
            <label
              htmlFor="amb"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Ambition
            </label>

            <input
              id="amb"
              type="text"
              placeholder="What is your ambition?"
              {...register("amb", { required: true })}
              className="
            w-full rounded-xl border border-slate-300
            bg-slate-50 px-4 py-3
            text-slate-800
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-green-500
            focus:bg-white
            focus:ring-4
            focus:ring-green-100
          "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
          mt-3 w-full rounded-xl
          bg-green-600 px-5 py-3
          font-semibold text-white
          shadow-lg shadow-green-200
          transition-all duration-200
          hover:bg-green-700
          hover:shadow-xl
          active:scale-[0.98]
        "
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
