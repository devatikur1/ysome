import React from "react";

export default function TopAndProfilePart({ userData }) {
  return (
    <section className="w-full flex flex-col sm:flex-row items-center justify-between bg-surface/50 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-border/20 gap-5 sm:gap-0">
      {/* ---- Left: Profile Info ---- */}
      <div className="flex items-center gap-5">
        <img
          className="w-20 h-20 rounded-full border-2 border-border/30 shadow-sm object-cover"
          src={userData?.photo}
          alt={userData?.name}
        />

        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold text-text">{userData?.name}</h1>
          <p className="text-subtext text-sm">{userData?.email}</p>
        </div>
      </div>

      {/* ---- Right: Stats + Button ---- */}
      <div className="flex items-center gap-6 sm:gap-10">
        {/* ---- Stats ---- */}
        <div className="flex items-center gap-5 text-center text-sm text-subtext">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-text/80">0</span>
            <span>Liked</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-text/80">0</span>
            <span>History</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-text/80">0</span>
            <span>Subscribe</span>
          </div>
        </div>

        {/* ---- Button ---- */}
        <button className="px-5 py-2 rounded-full border border-border text-primary font-medium text-sm bg-primary/10 hover:bg-primary/20 active:scale-[0.97] transition-all">
          Edit Profile
        </button>
      </div>
    </section>
  );
}
