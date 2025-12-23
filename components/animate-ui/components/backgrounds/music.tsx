"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  useEffect(() => {
    const unmute = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      window.removeEventListener("click", unmute);
    };

    window.addEventListener("click", unmute);
    return () => window.removeEventListener("click", unmute);
  }, []);

  return <audio ref={audioRef} src="/audio.MP3" autoPlay loop muted />;
}
