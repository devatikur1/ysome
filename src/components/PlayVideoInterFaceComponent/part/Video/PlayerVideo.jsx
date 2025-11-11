import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Expand,
  Shrink,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function PlayerVideo({ videoDetails }) {
  console.log(videoDetails);
  

  const [data] = useState(videoDetails);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // -------------------------
  // Best video/audio selection
  // -------------------------

  const audioUrl =
    data?.audios?.items?.find((item) => item.isDrc === true) ||
    data?.audios?.items?.[0];

  const videoUrl =
    data?.video?.items?.[3]?.url || data?.videos?.items?.[0]?.url;

  // -------------------------
  // Video-Audio sync
  // -------------------------

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (!video || !audio) return;

    const handlePlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.warn("Autoplay blocked");
      }
    };

    const handlePause = () => {
      audio.pause();
      setIsPlaying(false);
    };

    const handleSeek = () => {
      audio.currentTime = video.currentTime;
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("seeked", handleSeek);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("seeked", handleSeek);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // -------------------------
  // Format time helper
  // -------------------------

  const formatTime = (sec) => {
    if (isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  // -------------------------
  // Volume control
  // -------------------------

  const handleVolume = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value;
  };

  // -------------------------
  // Seek control
  // -------------------------

  const handleSeek = (e) => {
    const value = parseFloat(e.target.value);
    const newTime = (value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
    audioRef.current.currentTime = newTime;
    setProgress(value);
  };

  // -------------------------
  // Play/Pause toggle
  // -------------------------

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) video.play();
    else video.pause();
  };

  // -------------------------
  // Fullscreen toggle
  // -------------------------

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // -------------------------
  // Auto-hide overlay controls
  // -------------------------

  useEffect(() => {
    let timer;
    const show = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowControls(false), 2500);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", show);
      container.addEventListener("mouseleave", () => setShowControls(false));
    }
    show(); // initial show

    return () => {
      container?.removeEventListener("mousemove", show);
      container?.removeEventListener("mouseleave", () =>
        setShowControls(false)
      );
      clearTimeout(timer);
    };
  }, []);

  // -------------------------
  // Video click and Spacebar toggle
  // -------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-black rounded-xl overflow-hidden"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-auto  cursor-pointer"
        preload="metadata"
        onClick={togglePlay}
      />
      {/* Hidden Audio */}
      <audio ref={audioRef} src={audioUrl?.url} preload="auto" />

      {/* Overlay */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pt-10 pb-3 flex flex-col gap-1 transition-opacity duration-300">
          {/* Seek bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer accent-red-500"
          />

          {/* Controls */}
          <div className="flex justify-between items-center text-white text-sm mt-2">
            {/* Left controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full hover:bg-white/20 transition"
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

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-white/20 transition">
                <Settings size={20} />
              </button>
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
