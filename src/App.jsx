import { useEffect, useState,  useRef } from "react";

export default function App() {


const videoRef = useRef(null);
const [videoplaying, videosetPlaying] = useState(false);


const targetDate = new Date("2026-06-12T17:00:00");

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

const [playing, setPlaying] = useState(false);

useEffect(() => {
  const startMusic = () => {
    const audio = document.getElementById("birthdayMusic");

    audio?.play().catch(() => {});

    setPlaying(true);

    document.removeEventListener("click", startMusic);
  };

  document.addEventListener("click", startMusic);

  return () => {
    document.removeEventListener("click", startMusic);
  };
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9FB] via-[#FDF7FF] to-[#F6EEFF] overflow-hidden">

      <audio id="birthdayMusic" loop>
        <source src="hbd-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Navbar */}
      <nav className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className=" flex items-center justify-between">

          <div className="flex items-center gap-2">

            <img
              src="/cupcake-nav.png"
              alt="Cupcake"
              className="w-17 h-17 object-contain"
            />

            <div className="flex flex-col justify-center items-center">

              <h2
                className="
                hero-script
                text-[42px]
                leading-[0.8]
                text-[#8D67E8]
                "
              >
                Saisha's
              </h2>

              <span
                className="
                uppercase
                tracking-[5px]
                text-[14px]
                font-bold
                text-[#7C4DFF]
                -mt-1
                "
              >
                Birthday
              </span>

            </div>

          </div>

            <div className="hidden md:flex gap-8 text-[#4A4760]">
              <a href="#">Home</a>
              <a href="#party">Party</a>
              <a href="#venue">Venue</a>
              <a href="#rsvp">RSVP</a>
            </div>

            <button
              onClick={() => {
                const audio = document.getElementById("birthdayMusic");

                if (audio) {
                  audio.volume = 0.1; // 20% volume
                }

                if (!playing) {
                  audio.volume = 0.1;
                  audio.play();
                } else {
                  audio.pause();
                }

                setPlaying(!playing);
              }}
              className="bg-[#F7F0FF] text-[#9B73F8] px-5 py-2 rounded-full hover:bg-[#EFE4FF] transition"
            >
              {playing ? "⏸ Pause Music" : "🎵 Play Music"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-2 pb-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

          {/* Left */}
          <div>

            <span className="bg-[#F4E9FF] text-[#9B73F8] px-5 py-2 rounded-full">
              💜 YOU'RE INVITED
            </span>

            <h1 className="hero-script text-[120px] md:text-[145px] leading-[0.7] text-[#A975FF] mt-10">
              Saisha is
            </h1>

            <h2 className="text-[50px] md:text-[50px] font-semibold text-[#F78BB7] leading-none">
              Officially turning 13! 🎉
            </h2>

            <p className="text-[#666] mt-8 text-lg max-w-lg">
              Saisha is officially stepping into her teenage years and would love to celebrate her 13th birthday with family and friends. Come join us for an evening filled with joy, fun, and sweet surprises.
            </p>

            <div className="bg-white/90 rounded-[15px] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,.09)] mt-10">

              <div className="flex flex-wrap gap-5">

                  {/* Date */}

                    <div className="flex items-center gap-7">

                      <div className="w-12 h-12 rounded-full bg-[#F4E9FF] flex items-center justify-center text-[#8B5CF6] text-lg">
                        <img className="w-6 h-6" src="/calendar.png"></img>
                      </div>

                      <div>
                        <div className="font-semibold text-[#4A4760]">
                          12th June 2026
                        </div>
                        <div className="text-sm text-gray-500">
                          Friday
                        </div>
                      </div>

                    </div>
                    

                    {/* Time */}
                    <div className="flex items-center gap-7">

                      <div className="w-12 h-12 rounded-full bg-[#F4E9FF] flex items-center justify-center text-[#8B5CF6] text-lg">
                        <img className="w-7 h-7" src="/on-time.png"></img>
                      </div>

                      <div>
                        <div className="font-semibold text-[#4A4760]">
                          6 PM
                        </div>
                        <div className="text-sm text-gray-500">
                          Onwards
                        </div>
                      </div>

                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-7">

                      <div className="w-12 h-12 rounded-full bg-[#F4E9FF] flex items-center justify-center text-[#8B5CF6] text-lg">
                        <img className="w-7 h-7" src="/location.png"></img>
                      </div>

                      <div>
                        <div className="font-semibold text-[#4A4760]">
                          The Party Place
                        </div>
                        <div className="text-sm text-gray-500">
                          Clover Greens, Bangalore
                        </div>
                      </div>

                    </div>

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 pointer-events-none">

              <span className="absolute top-10 left-20 text-pink-400">✦</span>
              <span className="absolute top-32 left-52 text-purple-400">✦</span>
              <span className="absolute top-16 right-32 text-pink-300">✦</span>
              <span className="absolute bottom-20 left-32 text-purple-300">✦</span>
              <span className="absolute bottom-12 right-20 text-pink-400">✦</span>

            </div>

            <img
              src="/saisha-bday.webp"
              alt="Cake"
              className="max-w-[760px] w-full translate-y-16 drop-shadow-[0_50px_90px_rgba(169,117,255,.15)]"
            />

          </div>

        </div>

      </section>

      {/* Countdown */}
      <section className="max-w-[1280px] mx-auto px-6 pb-20 mt-4">

        <div className="relative">

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF3FF] to-[#FFF8FB] rounded-[40px] blur-xl opacity-0"></div>

          <div
              className="
              bg-white
              rounded-[36px]
              px-8
              py-7
              shadow-[0_8px_30px_rgba(188,169,230,0.08),0_2px_8px_rgba(188,169,230,0.04)]
              "
            >

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Left Title */}
                <div className="flex items-center gap-5 min-w-[320px]">

                  <div className="flex flex-col gap-1 text-[#F5C97A]">
                    <img src="/left-bday.webp"></img>
                  </div>

                  <h2 className="text-[28px] font-bold tracking-wide text-[#A975FF]">
                    THE PARTY STARTS IN
                  </h2>

                  <div className="flex flex-col gap-1 text-[#F5C97A]">
                  <img src="/right-bday.webp"></img>
                </div>

                </div>

                {/* Countdown Boxes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                  {/* Days */}
                  <div className="bg-[#FBF6FD] rounded-[24px] px-5 py-5 text-center min-w-[150px]">

                    <div className="text-[40px] leading-none font-bold text-[#8B5CF6]">
                      {String(timeLeft.days).padStart(2, "0")}
                    </div>

                    <div className="mt-3 text-[18px] font-medium tracking-wide text-[#8B5CF6] uppercase">
                      Days
                    </div>

                  </div>

                  {/* Hours */}
                  <div className="bg-[#FFF5FA] rounded-[24px] px-5 py-5 text-center min-w-[150px]">

                    <div className="text-[40px] leading-none font-bold text-[#F78BB7]">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>

                    <div className="mt-3 text-[18px] font-medium tracking-wide text-[#F78BB7] uppercase">
                      Hours
                    </div>

                  </div>

                  {/* Minutes */}
                  <div className="bg-[#FBF6FD] rounded-[24px] px-5 py-5 text-center min-w-[150px]">

                    <div className="text-[40px] leading-none font-bold text-[#8B5CF6]">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>

                    <div className="mt-3 text-[18px] font-medium tracking-wide text-[#8B5CF6] uppercase">
                      Minutes
                    </div>

                  </div>

                  {/* Seconds */}
                  <div className="bg-[#FFF5FA] rounded-[24px] px-5 py-5 text-center min-w-[150px]">

                    <div className="text-[40px] leading-none font-bold text-[#F78BB7]">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>

                    <div className="mt-3 text-[18px] font-medium tracking-wide text-[#F78BB7] uppercase">
                      Seconds
                    </div>

                  </div>

                </div>

              </div>

            </div>

        </div>

      </section>

      {/* Video + About + Expect */}
      <section className="max-w-7xl mx-auto px-6 pb-17" id="party">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Video Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-6 shadow-xl border border-white">
               <h3 className="text-[#9B73F8] text-30px font-[600] mb-5">
                    💜 VIDEO INVITATION
                  </h3>
          
          <div className="relative overflow-hidden rounded-3xl shadow-xl">

  <video
    ref={videoRef}
    className="w-full h-[320px] object-cover"
    poster="/video-thumbnail.webp"
    controls={videoplaying}
  >
    <source
      src="/Invitation-video.mp4"
      type="video/mp4"
    />
  </video>

  {!videoplaying && (
    <button
      onClick={() => {
        videoRef.current?.play();
        videosetPlaying(true);
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition">

        <span className="text-3xl text-pink-500">
          ▶
        </span>

      </div>
    </button>
  )}

</div>



          </div>

          {/* About Party */}
          <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 shadow-xl border border-white">

            <h3 className="text-[#9B73F8] text-30px font-[600] mb-8 flex flex-row gap-3">
              <img className="w-7 h-7" src="/fireworks.png"></img>
              ABOUT THE PARTY
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">
                <div className="text-3xl">🎮</div>
                <div>
                  <h4>Fun Games</h4>
                  <p className="text-sm text-gray-500">
                    Exciting games and challenges
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🎵</div>
                <div>
                  <h4>Music & Dance</h4>
                  <p className="text-sm text-gray-500">
                    Dance, groove and celebrate
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🧁</div>
                <div>
                  <h4>Sweet Treats</h4>
                  <p className="text-sm text-gray-500">
                    Cake, snacks and desserts
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🎁</div>
                <div>
                  <h4>Surprises</h4>
                  <p className="text-sm text-gray-500">
                    Lots of fun surprises
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* What To Expect */}
          <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 shadow-xl border border-white">

            <h3 className="text-[#9B73F8] text-30px font-[600] mb-8 flex flex-row gap-3">
              <img className="w-6 h-6" src="/disco-ball.png"></img>
              WHAT TO EXPECT?
            </h3>


            <div className="space-y-6">

              <div className="flex justify-between border-b border-pink-100 pb-4">
                <span>🎂 Cake Cutting</span>
              </div>

              <div className="flex justify-between border-b border-pink-100 pb-4">
                <span>🍕 Yummy Food</span>
              </div>

              <div className="flex justify-between border-b border-pink-100 pb-4">
                <span>📸 Photo Booth</span>
              </div>

              <div className="flex justify-between border-b border-pink-100 pb-4">
                <span>🎁 Goodie Bags</span>
              </div>

              <div className="flex justify-between">
                <span>💜 Memories</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Venue Section */}
      <section id="venue" className="max-w-7xl mx-auto px-6 pb-17">

        <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-8 shadow-xl border border-white">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Venue Info */}
            <div className="flex flex-col justify-between">

              <div>

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-8 h-8 rounded-full bg-[#F4E9FF] flex items-center justify-center">
                    <img className="w-6 h-6" src="/location.png" alt="Location" />
                  </div>

                  <h3 className="text-[#9B73F8] text-30px font-normal">
                    PARTY LOCATION
                  </h3>

                </div>

                <h4 className="text-3xl font-bold text-[#000000]">
                  Clover Greens Gold Course & Resort
                </h4>

                <p className="mt-5 text-gray-500 leading-8">
                  Unit No. 05, <br />Off Sarjapur - Attibelle Road, <br />Sevaganapalli, Chichuraganapalli, <br />Tamil Nadu 635103
                </p>

              </div>

              <a href="https://www.google.com/maps/place/Clover+Greens+Golf+Course+and+Resort/@12.8351418,77.805253,685m/data=!3m2!1e3!4b1!4m9!3m8!1s0x3bae73a40e1da45b:0x4e6faa0858fcb5a5!5m2!4m1!1i2!8m2!3d12.8351366!4d77.8078279!16s%2Fg%2F1td46dsk?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D">
              <button className="mt-8 bg-gradient-to-r from-[#F78BB7] to-[#B38AE6] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">

                Get Directions →

              </button>
              </a>

            </div>

            {/* Map */}
            <div className="lg:col-span-2">

              <div className="overflow-hidden rounded-[30px] h-[420px] shadow-lg">

                <iframe
                  title="Party Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.442888841885!2d77.80525297362813!3d12.835141817858263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73a40e1da45b%3A0x4e6faa0858fcb5a5!2sClover%20Greens%20Golf%20Course%20and%20Resort!5e1!3m2!1sen!2sin!4v1781103971885!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />

              </div>

            </div>

          </div>

        </div>
          <div className="absolute top-32 right-20 w-3 h-8 bg-pink-300 rounded-full rotate-45"></div>
          <div className="absolute top-52 right-40 w-3 h-8 bg-purple-300 rounded-full -rotate-45"></div>
          <div className="absolute bottom-24 right-24 w-3 h-8 bg-blue-300 rounded-full rotate-12"></div>
      </section>

      {/* RSVP Section */}

      <section className="max-w-7xl mx-auto px-6 pb-24 items-center" id="rsvp">

          <div className="bg-gradient-to-r from-[#F8F0FF] via-[#FFF8FB] to-[#FDF4FF] rounded-[40px] p-12 text-center shadow-xl">

            <div className="text-6xl mb-4">
              🎂
            </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-[#4A4760] leading-tight">
                          Can't Wait To
                          <span className="block text-[#A975FF]">
                            Celebrate With You!
                          </span>
                        </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Thank you for being part of Saisha's special day.
              We can't wait to celebrate, laugh, make memories,
              and officially welcome her into the teen years!
            </p>

            <div className="mt-8 text-3xl">
              💜 ✨ 🎉 🧁 🎂 ✨ 💜
            </div>

            <div className="mt-10 flex flex-col items-center justify-center">

              <div className="w-12 h-12 rounded-full bg-[#F4E9FF] flex items-center justify-center mb-3">

                <img
                  className="w-6 h-6"
                  src="/telephone.png"
                  alt="Phone"
                />

              </div>

                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Contact
                  </p>

                  <p className="mt-2 text-xl font-semibold text-[#4A4760] text-center">
                    +91 9036082478
                  </p>

                  <p className="text-xl font-semibold text-[#4A4760] text-center">
                    +91 7019356771
                  </p>

                </div>

          </div>

      </section>

      <footer className="pb-16 text-center">

        <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-md px-8 py-4 rounded-full shadow-lg">

          <span>💜</span>

          <span className="text-[#6D6782]">
            Made with love for Saisha's 13th Birthday
          </span>

          <span>🎂</span>

        </div>

      </footer>

    </div>
  );
}