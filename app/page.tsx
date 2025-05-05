"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { BackgroundLines } from "@/components/ui/background-lines";

const TARGET_DATE = new Date("2025-05-05T11:00:00Z"); // 18:00 WIB = 11:00 UTC

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    if (!timeLeft) return;
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <BackgroundLines>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Logo SMKN 4 Kuningan"
          className="mb-8 w-50 md:w-10 xl:w-100 object-contain z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.h2
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 relative z-20 font-bold tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Pengumuman Kelulusan Kelas XII <br /> SMK Negeri 4 Kuningan
        </motion.h2>
        <motion.p
          className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-5 font-semibold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Tahun Pelajaran 2024/2025
        </motion.p>
        <motion.div
          className="relative w-full max-w-xl z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {timeLeft ? (
            <motion.div
              className="flex flex-col items-center gap-4 w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-base sm:text-lg text-gray-700 mb-1 font-medium">
                Pengumuman akan dibuka dalam:
              </p>
              <div className="flex gap-3 sm:gap-5 text-lg sm:text-2xl font-mono">
                {["hari", "jam", "menit", "detik"].map((label, idx) => {
                  const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][idx];
                  return (
                    <div key={label} className="flex flex-col items-center">
                      <span className="bg-gray-100 px-4 py-2 rounded-xl shadow-md text-gray-900 min-w-[48px] text-center font-bold transition-all duration-300 animate-pulse">
                        {value.toString().padStart(2, "0")}
                      </span>
                      <span className="text-xs text-gray-500 mt-1 font-medium">{label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Pukul 18.00 WIB, 05 Mei 2025
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center gap-4 mt-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Card className="ms-2 me-2 shadow-lg">
                <CardContent className="ms-2 me-2">
                  <ol className="list-decimal">
                    <li>Siapkan NISN (Nomor Induk Siswa Nasional)</li>
                    <li>Klik <b>"Lihat Pengumuman Kelulusan"</b> dibawah</li>
                    <li>Lalu masukan NISN kalian pada kolom <b>"Masukan nilai"</b>, lalu Enter, perhatikan pada kolom <b>Keterangan</b> yaa!</li>
                    <li><i>Good Luck!</i></li>
                  </ol>
                </CardContent>
                <CardFooter className="items-center justify-center">
                  <button className="p-4 lg:p-4 md:p-2 sm:p-2 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                    <a
                      href="https://lookerstudio.google.com/u/0/reporting/81d8b4b9-0a53-433f-bf25-5909e4ba1f80/page/AsAJF"
                      target="_blank"
                      rel="noopener noreferrer">
                      Lihat Pengumuman Kelulusan
                    </a>
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </motion.div>
        <footer className="mt-10 text-xs text-gray-400 text-center z-10">
          &copy; {new Date().getFullYear()} SMKN 4 Kuningan. All rights reserved.
        </footer>
        <style jsx global>{`
          @keyframes fadein {
            from { opacity: 0; transform: translateY(-20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}</style>
      </div>
    </BackgroundLines>
  );
}
