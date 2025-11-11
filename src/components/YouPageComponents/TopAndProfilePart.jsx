import React from "react";

export default function TopAndProfilePart({ userData, countData }) {
  console.log(userData);

  return (
    <section className="w-full flex flex-col sm:flex-row items-center justify-between bg-surface/50 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-border/20 gap-5 sm:gap-0 *:select-none">
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
          <p className="text-subtext text-sm">{userData?.email}</p>
        </div>
      </div>

      {/* ---- Right: Stats + Button ---- */}
      <div className="flex items-center gap-6 sm:gap-10">
        {/* ---- Stats ---- */}
        <div className="flex items-center gap-5 text-center text-sm text-subtext">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-text/80">
              {countData?.liked}
            </span>
            <span>Liked</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-text/80">
              {countData?.history}
            </span>
            <span>History</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-text/80">
              {countData?.subscribe}
            </span>
            <span>Subscribe</span>
          </div>
        </div>
      </div>
    </section>
  );
}
