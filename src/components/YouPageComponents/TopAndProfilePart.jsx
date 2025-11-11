/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Pencil } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../../contexts/Firebase/Firebase";
import emptyProfilePic from "../../assets/emptyProfilePic.jpg";
import { UploadToImgbb } from "../../utils/UploadToImgbb";
import { SetAuthData } from "../../contexts/Firebase/Firestore/SetAuthData";

export default function TopAndProfilePart({ userID, setUserData, userData, countData }) {
  async function handleFileChange(file) {
    if (!file || !file.type) return;
    let imgg = await UploadToImgbb(file);
    await SetAuthData({
      documentID: userID,
      data: { ...userData, photo: imgg },
    });
    setUserData({ ...userData, photo: imgg });
  }

  return (
    <section className="relative w-full flex flex-col sm:flex-row items-center justify-between p-5 gap-5 sm:gap-0 *:select-none">
      {/* ---- Left: Profile Info ---- */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div>
            <img
              className="w-20 h-20 rounded-full border-2 border-border/30 shadow-sm object-cover"
              src={userData?.photo || emptyProfilePic}
              alt={userData?.name}
            />
          </div>
          <input
            type="file"
            id="Edit"
            accept="image/png, image/jpeg, image/gif, .png, .jpg, .jpeg, .gif"
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
          <label
            htmlFor="Edit"
            className="flex items-center justify-center gap-1 absolute -bottom-2 -right-2 bg-bg-pecondary hover:bg-bg-Primary transition-all duration-300 border border-border px-2 py-1 rounded-xl"
          >
            <Pencil size={10} />
            <span className="text-xs">Edit</span>
          </label>
        </div>

        <div className="flex flex-col gap-0.5">
          <h1 className="text-xl md:text-2xl font-semibold text-text">
            {userData?.name}
          </h1>
          <small className="text-subtext/80">{userData?.userName}</small>
          <div className="flex items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-5 text-center text-sm text-subtext">
              <Link to={"/liked"} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text">
                  {countData?.liked}
                </span>
                <span className="text-xs text-subtext">Liked</span>
              </Link>
              <Link to={"/history"} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text">
                  {countData?.history}
                </span>
                <span className="text-xs text-subtext">History</span>
              </Link>
              <Link to={"/channel"} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text">
                  {countData?.subscribe}
                </span>
                <span className="text-xs text-subtext">Subscribe</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={async () => {
          await signOut(auth);
        }}
        className="absolute md:static -top-6 right-2 flex justify-center items-center gap-2 px-3 py-1 bg-surface rounded-lg"
      >
        <LogOut size={15} />
        <span className="text-sm">Log Out</span>
      </div>
    </section>
  );
}
