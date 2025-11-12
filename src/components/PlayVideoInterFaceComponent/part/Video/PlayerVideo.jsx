import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Expand, Shrink } from "lucide-react";

export default function PlayerVideo({ videoDetails }) {
  console.log(videoDetails);
  
  let videoData = videoDetails;
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // ----------------------------
  // Pick best quality video
  // ----------------------------
  const videoUrl =
    videoData?.video?.items?.find((v) => v.quality === "720p" || v.hasAudio)
      ?.url || videoData?.video?.items?.[0]?.url;

  // ----------------------------
  // Play/Pause Toggle
  // ----------------------------
  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // ----------------------------
  // Time Updates
  // ----------------------------
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
    setCurrentTime(video.currentTime);
    setDuration(video.duration);
  };

  // ----------------------------
  // Format time
  // ----------------------------
  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // ----------------------------
  // Volume control
  // ----------------------------
  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    videoRef.current.volume = val;
  };

  // ----------------------------
  // Seek control
  // ----------------------------
  const handleSeek = (e) => {
    const val = parseFloat(e.target.value);
    const newTime = (val / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    setProgress(val);
  };

  // ----------------------------
  // Fullscreen toggle
  // ----------------------------
  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // ----------------------------
  // Auto-hide controls
  // ----------------------------
  useEffect(() => {
    let timeout;
    const show = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowControls(false), 2000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", show);
      container.addEventListener("mouseleave", () => setShowControls(false));
    }
    show();

    return () => {
      container?.removeEventListener("mousemove", show);
      container?.removeEventListener("mouseleave", () =>
        setShowControls(false)
      );
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black rounded-xl overflow-hidden"
    >
      {/* 🎥 VIDEO */}
      <div className="relative flex justify-center items-center w-full h-full">
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-auto cursor-pointer"
          preload="metadata"
          onClick={togglePlay}
          onTimeUpdate={handleTimeUpdate}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      {/* 🎛️ Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col-reverse md:flex-col p-3 gap-2">
          {/* Seekbar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full accent-red-500 cursor-pointer"
          />

          <div className="flex justify-between items-center text-white text-sm">
            {/* Left Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="hidden md:flex p-2 rounded-full hover:bg-white/20 transition"
              >
                {isPlaying ? (
                  <Pause size={20} strokeWidth={3} />
                ) : (
                  <Play size={20} strokeWidth={3} />
                )}
              </button>

              <span className="text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="hidden md:flex items-center gap-3">
                {volume > 0 ? <Volume2 size={18} /> : <VolumeX size={18} />}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={handleVolume}
                  className="w-20 accent-white cursor-pointer"
                />
              </div>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-full hover:bg-white/20 transition"
              >
                {isFullscreen ? <Shrink size={20} /> : <Expand size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
