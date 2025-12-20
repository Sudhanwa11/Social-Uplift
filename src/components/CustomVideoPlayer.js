import React, { useState, useRef, useEffect } from "react";
import "./CustomVideoPlayer.css";

const CustomVideoPlayer = ({ src, thumbnail, title = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume 100%
  const [isMuted, setIsMuted] = useState(false);
  const [orientation, setOrientation] = useState("landscape");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const playerContainerRef = useRef(null); // Ref for fullscreen

  // --- MODAL HANDLERS ---
  const openModal = () => {
    setIsModalOpen(true);
    setIsPlaying(true);
  };

  const closeModal = (e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setIsFullscreen(false);
  };

  // --- VIDEO LOGIC ---
  const togglePlay = (e) => {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;

    if (isPlaying) vid.pause();
    else vid.play();
    setIsPlaying(!isPlaying);
  };

  const handleLoadedMetadata = () => {
    const vid = videoRef.current;
    if (!vid) return;
    setDuration(vid.duration);
    
    // Detect orientation
    if (vid.videoHeight > vid.videoWidth) {
      setOrientation("portrait");
    } else {
      setOrientation("landscape");
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  // Seek Functionality
  const handleSeek = (e) => {
    e.stopPropagation();
    const vid = videoRef.current;
    const bar = progressRef.current;
    if (!vid || !bar) return;

    const rect = bar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    vid.currentTime = pos * vid.duration;
  };

  // Volume & Mute Logic
  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const vid = videoRef.current;
    vid.muted = !isMuted;
    setIsMuted(!isMuted);
    
    // If unmuting and volume was 0, set to 1
    if (isMuted && volume === 0) {
        setVolume(1);
        vid.volume = 1;
    }
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
        videoRef.current.volume = newVol;
        setIsMuted(newVol === 0);
    }
  };

  // Fullscreen Logic
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!playerContainerRef.current) return;

    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen for fullscreen change (ESC key)
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // Close modal on Escape key (if not in fullscreen)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && !document.fullscreenElement) closeModal();
    };
    if (isModalOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isModalOpen]);

  return (
    <>
      {/* 1. THUMBNAIL */}
      <div className="cvp-thumbnail-card" onClick={openModal}>
        <img src={thumbnail} alt={title} className="cvp-thumb-img" />
        <div className="cvp-play-overlay">
          <button className="cvp-play-btn">▶</button>
        </div>
      </div>

      {/* 2. POPUP MODAL */}
      {isModalOpen && (
        <div className="cvp-modal-backdrop" onClick={closeModal}>
          <div 
            className={`cvp-modal-content ${orientation}`} 
            onClick={(e) => e.stopPropagation()}
            ref={playerContainerRef} // Ref for Fullscreen API
          >
            {/* Close Button (Hidden in Fullscreen) */}
            {!isFullscreen && (
                <button className="cvp-close-btn" onClick={closeModal}>✕</button>
            )}

            {/* Video Player Wrapper */}
            <div className="cvp-player-wrapper" onClick={togglePlay}>
              <video
                ref={videoRef}
                src={src}
                autoPlay
                playsInline
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                className="cvp-video-element"
              />

              {/* Big Play Button Overlay */}
              {!isPlaying && (
                <div className="cvp-center-play">▶</div>
              )}

              {/* Controls Bar */}
              <div className="cvp-controls-bar" onClick={(e) => e.stopPropagation()}>
                
                {/* Play/Pause */}
                <button className="cvp-icon" onClick={togglePlay}>
                  {isPlaying ? "❚❚" : "▶"}
                </button>

                {/* Progress Bar */}
                <div className="cvp-progress-container" ref={progressRef} onClick={handleSeek}>
                  <div 
                    className="cvp-progress-fill" 
                    style={{ width: `${(currentTime / duration) * 100}%` }} 
                  >
                    {/* The Dot (Thumb) */}
                    <div className="cvp-progress-thumb"></div>
                  </div>
                </div>

                {/* Volume Group */}
                <div className="cvp-volume-group">
                    <button className="cvp-icon" onClick={toggleMute}>
                    {isMuted || volume === 0 ? "🔇" : "🔊"}
                    </button>
                    <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="cvp-volume-slider"
                    />
                </div>

                {/* Fullscreen Toggle */}
                <button className="cvp-icon" onClick={toggleFullscreen}>
                    {isFullscreen ? "⤓" : "⛶"}
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomVideoPlayer;