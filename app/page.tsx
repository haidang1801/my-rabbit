"use client";

import { StarsBackgroundDemo } from "@/components/animate-ui/demo/components/backgrounds/stars";
import { useRef, useState } from "react";

export default function Page() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.muted = false;
      audio.volume = 0.5;
      await audio.play();
      setStarted(true);
    } catch (err) {
      console.log("Audio play blocked:", err);
    }
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Stars overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <StarsBackgroundDemo />
      </div>
      {/* Background image */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <img
          src="/tree_3.gif"
          alt="Christmas Tree"
          className="h-[90vh] object-contain"
        />
      </div>

      <div className="absolute inset-0 z-30">
        <img
          src="https://scontent.xx.fbcdn.net/v/t39.1997-6/193635477_4070786766301844_5918284918500265536_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ef9b6e&_nc_ohc=8CzK4q11VpwQ7kNvwHMPixo&_nc_oc=AdmfqUmrjV1qMumFfo452WxYvcQDUJqyHYhuypwt17Y9zgZt91sZgDwaHYn07i83dCTX0x31Hpb_yGieAcWJBHgi&_nc_zt=26&_nc_ht=scontent.xx&_nc_gid=2OiFQStNCFnXFX9V_Icdfw&oh=00_AfnYrUmDtiszn5erE-hybKJRVMETk5eCNTma_DPl7mz0Mg&oe=694EBF35"
          alt="Icon"
        />
      </div>
      {/* START BUTTON */}
      {!started && (
        <div className="absolute inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <button
            onClick={handleStart}
            className="px-6 py-3 text-lg font-semibold text-white rounded-xl
                       bg-red-500 hover:bg-red-600 active:scale-95 transition cursor-pointer"
          >
            🎵 Chạm để bắt đầu
          </button>
        </div>
      )}

      {/* AUDIO */}
      <audio ref={audioRef} src="/audio.MP3" loop />
    </div>
  );
}
