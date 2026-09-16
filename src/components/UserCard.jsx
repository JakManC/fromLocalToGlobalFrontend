import { useNavigate } from "react-router";

export const UserCard = ({ users }) => {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/addUser");
  };
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Our Users
          </h1>

          <p className="mt-2 text-slate-400">Meet our amazing community</p>

          <button
            onClick={handleAdd}
            className="bg-green-700 text-white text-center p-2 m-2 rounded-full"
          >
            AddUser
          </button>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              {/* Decorative circle */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-2xl transition duration-300 group-hover:bg-blue-500/20" />

              {/* Avatar */}
              <div className="relative mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white shadow-lg">
                  {user.userName?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {user.userName}
                  </h2>

                  <span className="text-sm text-slate-400">
                    User #{user.id}
                  </span>
                </div>
              </div>

              {/* User Information */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-slate-800/70 px-4 py-3">
                  <span className="text-sm text-slate-400">Age</span>

                  <span className="font-medium text-white">{user.userAge}</span>
                </div>

                <div className="rounded-xl bg-slate-800/70 px-4 py-3">
                  <p className="mb-1 text-sm text-slate-400">Ambition</p>

                  <p className="font-medium text-blue-400">{user.userAmb}</p>
                </div>
              </div>

              {/* Bottom line */}
              <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
