import React from "react";

export default function TopAndProfilePart({ userData, countData }) {
  console.log(userData?.photo);

  return (
    <section className="w-full flex flex-col sm:flex-row items-center justify-between p-5 gap-5 sm:gap-0 *:select-none">
      {/* ---- Left: Profile Info ---- */}
      <div className="flex items-center gap-5">
        <img
          className="w-20 h-20 rounded-full border-2 border-border/30 shadow-sm object-cover"
          src={userData?.photo}
          alt={userData?.name}
        />

        <div className="flex flex-col gap-0.5">
          <h1 className="text-2xl font-semibold text-text">{userData?.name}</h1>
          <small className="text-subtext/80">{userData?.userName}</small>
          <div className="flex items-center gap-6 sm:gap-10">
            {/* ---- Stats ---- */}
            <div className="flex items-center gap-5 text-center text-sm text-subtext">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text">
                  {countData?.liked}
                </span>
                <span className="text-xs text-subtext">Liked</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text">
                  {countData?.history}
                </span>
                <span className="text-xs text-subtext">History</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-text">
                  {countData?.subscribe}
                </span>
                <span className="text-xs text-subtext">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Right: Stats + Button ---- */}
    </section>
  );
}
