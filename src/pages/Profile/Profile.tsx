import { Link } from "react-router-dom";
import LeftArrowIcon from "../../assets/svgs/LeftArrowIcon";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import { toast } from "sonner";

export default function Profile() {
  const { user, updateUserName } = useUser();

  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function handleSave(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (name.trim().length <= 2) {
      toast.error("Please enter a name with a minimum length of 3 characters");

      return;
    }

    updateUserName(name);
    setIsEditing(false);
  }

  return (
    <div className="flex-1 pb-32">
      <div>
        <nav className="flex justify-start items-center pt-8 font-poppins relative">
          <Link to={"/"}>
            <LeftArrowIcon />
          </Link>

          <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl font-semibold">
            Profile
          </h1>
        </nav>
      </div>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="flex flex-col items-center gap-6">
            <div className="bg-gray-300 relative h-24 w-24 rounded-full">
              <span className="text-xl absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                {user?.userName
                  ? user.userName.length >= 2
                    ? `${user.userName[0]}${user.userName[1]}`
                    : user.userName
                  : "Avatar"}
              </span>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{user?.userName}</h2>
            </div>
            {isEditing ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  form="Name"
                  className="inline-flex justify-center items-center rounded-[3.125rem] bg-brand-orange-primary px-4 py-2 text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="inline-flex justify-center items-center rounded-[3.125rem] bg-brand-text-muted px-4 py-2 text-brand-white-primary hover:bg-brand-text-muted/85 focus:outline-none focus:ring"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="inline-flex justify-center items-center rounded-[3.125rem] bg-brand-orange-primary px-4 py-2 text-brand-white-primary hover:bg-brand-orange-primary/85 focus:outline-none focus:ring"
              >
                Edit Name
              </button>
            )}
          </div>
          {isEditing && (
            <form id="Name" className="py-12">
              <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:justify-between">
                <label htmlFor="name" className="text-xl">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your new name"
                  className="w-full"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
