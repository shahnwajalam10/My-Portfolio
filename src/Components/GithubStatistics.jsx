import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GithubStatistics = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/shahnwajalam10');
        setUserData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading State
  if (loading) {
    return (
      <section className="flex justify-center items-center p-8 border-4 border-black bg-amber-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" data-aos="zoom-in">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-black animate-bounce"></div>
          <span className="text-xl font-bold tracking-tight">LOADING GITHUB STATS...</span>
        </div>
      </section>
    );
  }

  // Error State
  if (error) {
    return (
      <section className="flex justify-center items-center p-8 border-4 border-black bg-red-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" data-aos="shake">
        <div className="text-center">
          <div className="text-4xl mb-2">⚠️</div>
          <h2 className="text-2xl font-bold mb-2 tracking-tighter">ERROR</h2>
          <p className="font-mono bg-black text-red-300 px-2 py-1">{error}</p>
        </div>
      </section>
    );
  }

  // Main Content
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1
          data-aos="fade-down"
          className="inline-block text-5xl md:text-6xl font-extrabold uppercase border-4 border-black px-8 py-4 mb-8 bg-purple-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          GitHub Statistics
        </h1>
      </header>

      {/* User Profile Card */}
      <section 
        className="max-w-2xl mx-auto p-6 border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        data-aos="fade-up"
      >
        {/* Profile Header */}
        <header className="flex flex-col items-center mb-8 group" data-aos="fade-right" data-aos-delay="100">
          <div className="relative mb-4 group-hover:rotate-2 transition-transform duration-300">
            <img 
              src={userData.avatar_url} 
              alt={`${userData.login}'s avatar`}
              className="w-32 h-32 border-4 border-black rounded-full object-cover shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              data-aos="zoom-in"
              data-aos-delay="200"
            />
            <div 
              className="absolute -bottom-3 -right-3 bg-black text-white px-2 py-1 text-xs font-bold border-2 border-black rotate-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              DEV
            </div>
          </div>
          
          <h2 
            className="text-3xl font-extrabold mb-1 underline decoration-wavy decoration-2 underline-offset-4 tracking-tight"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {userData.name || userData.login}
          </h2>
          
          <p 
            className="text-gray-800 mb-4 text-center max-w-md font-mono"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {userData.bio || "No bio available"}
          </p>
          
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-bold border-4 border-black hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            → VISIT PROFILE
          </a>
        </header>

        {/* Statistics Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: "REPOS", value: userData.public_repos, bg: "bg-amber-100", emoji: "💻", delay: 100 },
            { title: "FOLLOWERS", value: userData.followers, bg: "bg-green-100", emoji: "👥", delay: 200 },
            { title: "FOLLOWING", value: userData.following, bg: "bg-blue-100", emoji: "👀", delay: 300 },
            { title: "GISTS", value: userData.public_gists, bg: "bg-purple-100", emoji: "📝", delay: 400 },
          ].map((stat, index) => (
            <article 
              key={index}
              className={`p-4 border-4 border-black ${stat.bg} text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all`}
              data-aos="flip-up"
              data-aos-delay={stat.delay}
            >
              <div className="text-2xl mb-1" data-aos="zoom-in">{stat.emoji}</div>
              <h3 className="text-xs font-black uppercase tracking-widest">{stat.title}</h3>
              <p className="text-3xl font-extrabold mt-2">{stat.value}</p>
            </article>
          ))}
        </section>

        {/* Additional Info */}
        <section className="space-y-3">
          <article 
            className="p-3 border-4 border-black bg-white flex items-center gap-3"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="text-2xl">📅</span>
            <div>
              <p className="text-xs font-black uppercase tracking-widest">Joined</p>
              <p className="font-bold">{new Date(userData.created_at).toLocaleDateString()}</p>
            </div>
          </article>
          
          {userData.location && (
            <article 
              className="p-3 border-4 border-black bg-white flex items-center gap-3"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest">Location</p>
                <p className="font-bold">{userData.location}</p>
              </div>
            </article>
          )}
          
          {userData.blog && (
            <a 
              href={userData.blog} 
              target="_blank" 
              rel="noopener noreferrer"
              className=" p-3 border-4 border-black bg-white hover:bg-black hover:text-white transition-all flex items-center gap-3"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <span className="text-2xl">🌐</span>
              <div>
                <p className="text-xs font-black uppercase tracking-widest">Website</p>
                <p className="font-bold underline">{userData.blog.replace(/https?:\/\//, '')}</p>
              </div>
            </a>
          )}
        </section>

        {/* Footer */}
        <footer 
          className="mt-6 text-center text-xs font-mono"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p>DATA FETCHED FROM GITHUB API</p>
          <p className="mt-1 text-gray-500">@{new Date().getFullYear()}</p>
        </footer>
      </section>
    </main>
  );
};

export default GithubStatistics;