"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function ValentineForBestFriend() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center px-6 py-16">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-200] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear",
            }}
            style={{
              left: `${10 + i * 4}%`,
              bottom: "-60px",
            }}
          >
            {i % 3 === 0 ? "❤️" : i % 3 === 1 ? "💋" : "🌸"}
          </motion.div>
        ))}
      </div>

      {/* Background music */}
      <audio ref={audioRef} src="/music/song.mp3" loop />

      {/* Valentine Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl px-10 md:px-14 py-14 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-4xl font-light text-rose-800 mb-2"
        >
          I love You Baby Girl
        </motion.h1>
        <p className="text-xl tracking-wide text-rose-800 mb-8">Tanisha</p>

        <button
          onClick={toggleMusic}
          className="mb-10 text-sm text-rose-500 underline hover:text-rose-600 transition"
        >
          {isPlaying ? "Pause music" : "Play music"}
        </button>

        <div className="space-y-6 text-lg text-rose-800 leading-relaxed">
          <p>
            Tanisha my beautiful baby girl i love you the most and i will always continue to do so. You mean the world to me and i will always be there for you taking care of you, loving you, being there beside you, mentallty emotinally sritually and physically as well.
          </p>
          <p>
            You have this calm warmth about you. Being around you feels easy,
            comforting, and real. You make moments lighter just by being
            yourself.
          </p>
          <p>
            You’re my best friend — someone I trust deeply, laugh with freely,
            and feel understood by. That kind of connection is rare, and I hold
            it close.
          </p>
          <p>
            This isn’t about expectations or labels. It’s just a gentle reminder
            that you matter to me, and these words will always fall short in expressing my love for you first as your best friend and then as your lover and i hope and i pray to spend my life with you and grow old with you as i love your company soo much i cant really explain, i can literally spend days with you without getting bored or aanything of that sort.
          </p>
          <p className="font-semibold">
            ALL I WANT TO SAY IS I REALLY LOVE YOU THE MOST AND I WILL ALWAYS LOVE YOU NO MATTER WHAT AND I AM ALWAYS THERE FOR YOU AVAILABLE AND PRESENT. I AM ALL YOURS TO HAVE AND YOUR TO KEEP I AM NOT GOING ANYWHERE ANYTIME SOON. I LOVE YOU BABY ❤️
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.img
              key={i}
              src={`/photos/photo${i}.jpg`}
              alt="Memory"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="h-56 w-full object-cover rounded-3xl shadow-lg"
            />
          ))}
        </div>

        <div className="mt-16">
 <p className="text-xl text-rose-800">Just a small gesture to tell you how much you mean to me❤️</p>
          <p className="text-xl text-rose-800">Your baby boy,</p>
          <p className="text-xl font-light text-rose-800">Tanay</p>
        </div>
      </motion.div>
    </div>
  );
}
