import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaEye, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaFire } from 'react-icons/fa';

const GithubStatistics = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryKey, setRetryKey] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: true
    });

    // Safety timeout to prevent infinite loading
    const safetyTimeout = setTimeout(() => {
      if (loading) {
        console.warn('GitHub API request taking too long, setting error state');
        setError('Request timeout. The GitHub API may be slow or unavailable.');
        setLoading(false);
      }
    }, 15000); // 15 second safety timeout

    const fetchData = async (retryCount = 0) => {
      const maxRetries = 2;
      try {
        // Create axios instance with timeout and better error handling
        const axiosInstance = axios.create({
          timeout: 10000, // 10 second timeout
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          }
        });

        console.log('Fetching GitHub data...');
        const [userResponse, reposResponse] = await Promise.all([
          axiosInstance.get('https://api.github.com/users/shahnwajalam10'),
          axiosInstance.get('https://api.github.com/users/shahnwajalam10/repos?sort=updated&per_page=6')
        ]);
        
        console.log('GitHub data fetched successfully');
        
        if (userResponse.data && reposResponse.data) {
          setUserData(userResponse.data);
          setRepos(reposResponse.data);
          setLoading(false);
          clearTimeout(safetyTimeout);
        } else {
          throw new Error('Invalid response data from GitHub API');
        }
      } catch (err) {
        console.error('GitHub API Error:', err);
        clearTimeout(safetyTimeout);
        
        // Better error messages
        let errorMessage = 'Failed to load GitHub statistics';
        
        if (err.code === 'ECONNABORTED' || err.message.includes('timeout')) {
          errorMessage = 'Request timeout. Please check your internet connection.';
        } else if (err.response) {
          // Server responded with error status
          const status = err.response.status;
          if (status === 403) {
            errorMessage = 'GitHub API rate limit exceeded. Please try again later.';
          } else if (status === 404) {
            errorMessage = 'GitHub user not found.';
          } else if (status >= 500) {
            errorMessage = 'GitHub API server error. Please try again later.';
          } else {
            errorMessage = `GitHub API error: ${status}`;
          }
        } else if (err.request) {
          // Request made but no response
          errorMessage = 'No response from GitHub API. Please check your internet connection.';
        } else {
          errorMessage = err.message || 'An unexpected error occurred';
        }

        // Retry logic for network errors
        if (retryCount < maxRetries && (err.code === 'ECONNABORTED' || err.code === 'ERR_NETWORK' || !err.response)) {
          console.log(`Retrying... Attempt ${retryCount + 1}/${maxRetries}`);
          setTimeout(() => {
            fetchData(retryCount + 1);
          }, 2000 * (retryCount + 1)); // Exponential backoff
        } else {
          setError(errorMessage);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      clearTimeout(safetyTimeout);
    };
  }, [retryKey]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Enhanced Loading State - Show loading but also render the section structure
  if (loading && !userData) {
    return (
      <section id="github" className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 md:px-12 lg:px-24 border-b-4 border-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-black border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight"
          >
            LOADING GITHUB STATS...
          </motion.h2>
        </motion.div>
      </section>
    );
  }

  // Enhanced Error State
  if (error) {
    const handleRetry = () => {
      setError(null);
      setLoading(true);
      setRetryKey(prev => prev + 1); // Trigger re-fetch
    };

    return (
      <section id="github" className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 md:px-12 lg:px-24 border-b-4 border-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full mx-4 p-6 sm:p-8 border-4 border-black bg-red-100 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="text-4xl sm:text-6xl mb-4 text-center">⚠️</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center uppercase tracking-tight">ERROR</h2>
          <p className="font-mono bg-black text-red-300 px-3 sm:px-4 py-2 text-center text-sm sm:text-base break-words mb-4">{error}</p>
          <motion.button
            onClick={handleRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-black text-white font-bold border-4 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            RETRY
          </motion.button>
        </motion.div>
      </section>
    );
  }

  // Calculate total stars and forks (with safety check)
  const totalStars = repos && repos.length > 0 ? repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0) : 0;
  const totalForks = repos && repos.length > 0 ? repos.reduce((sum, repo) => sum + (repo.forks_count || 0), 0) : 0;

  // Safety check - if no userData but also no error and not loading, show a fallback
  if (!userData && !loading && !error) {
    return (
      <section id="github" className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 md:px-12 lg:px-24 border-b-4 border-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase mb-4">GITHUB STATS</h2>
          <p className="text-gray-600">Unable to load GitHub statistics. Please try refreshing the page.</p>
        </div>
      </section>
    );
  }

  // Main Content
  return (
    <section id="github" className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 md:px-12 md:py-20 lg:px-24 border-b-4 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated background elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 -right-20 w-48 h-48 md:w-64 md:h-64 border-4 border-black bg-[#F7DF1E] rotate-45 -z-10 hidden lg:block"
        />
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-1/4 -left-16 w-24 h-24 md:w-32 md:h-32 border-4 border-black bg-[#61DAFB] -z-10 hidden lg:block"
        />

        {/* Page Header */}
        <div className="mb-12 sm:mb-16 md:mb-20" data-aos="fade-down" data-aos-delay="100">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold uppercase mb-3 sm:mb-4 text-black leading-tight"
          >
            GITHUB STATS
          </motion.h1>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-full bg-black mb-4 sm:mb-6 origin-left"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-800 font-lg max-w-2xl font-mono"
          >
            MY CODING JOURNEY ON GITHUB
          </motion.p>
        </div>

        {/* Profile Card */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div
            variants={item}
            whileHover={{ 
              y: -8,
              boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
              transition: { type: "spring", stiffness: 300 }
            }}
            className="p-4 sm:p-6 md:p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative"
          >
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, -5, 0], scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative flex-shrink-0"
              >
                <img 
                  src={userData.avatar_url} 
                  alt={`${userData.login}'s avatar`}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border-4 border-black object-cover shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-black text-white px-2 py-1 sm:px-3 text-[10px] sm:text-xs font-bold border-2 border-black"
                >
                  <FaFire className="inline mr-1" /> DEV
                </motion.div>
              </motion.div>
              
              <div className="flex-1 text-center md:text-left w-full">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 uppercase tracking-tight break-words"
                >
                  {userData.name || userData.login}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-800 mb-3 sm:mb-4 font-mono text-base sm:text-lg"
                >
                  @{userData.login}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-md mx-auto md:mx-0"
                >
                  {userData.bio || "Passionate developer building amazing things"}
                </motion.p>
                
                <motion.a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-black text-white text-sm sm:text-base font-bold border-4 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  <FaGithub className="text-sm sm:text-base" /> <span className="whitespace-nowrap">VISIT PROFILE →</span>
                </motion.a>
              </div>
            </div>

            {/* Main Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { 
                  title: "REPOS", 
                  value: userData.public_repos, 
                  bg: "bg-amber-100", 
                  icon: <FaCodeBranch className="text-xl sm:text-2xl" />,
                  delay: 0.1 
                },
                { 
                  title: "FOLLOWERS", 
                  value: userData.followers, 
                  bg: "bg-green-100", 
                  icon: <FaEye className="text-xl sm:text-2xl" />,
                  delay: 0.2 
                },
                { 
                  title: "FOLLOWING", 
                  value: userData.following, 
                  bg: "bg-blue-100", 
                  icon: <FaStar className="text-xl sm:text-2xl" />,
                  delay: 0.3 
                },
                { 
                  title: "GISTS", 
                  value: userData.public_gists, 
                  bg: "bg-purple-100", 
                  icon: <FaGithub className="text-xl sm:text-2xl" />,
                  delay: 0.4 
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 sm:p-5 md:p-6 border-4 border-black ${stat.bg} text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-black" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white" />
                  <div className="mb-2 sm:mb-3 flex justify-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-widest mb-1 sm:mb-2">{stat.title}</h3>
                  <motion.p 
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: stat.delay, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div
                variants={item}
                whileHover={{ x: 4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                className="p-3 sm:p-4 border-4 border-black bg-white flex items-center gap-3 sm:gap-4 md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="p-2 sm:p-3 bg-black text-white flex-shrink-0">
                  <FaStar className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">TOTAL STARS</p>
                  <p className="text-xl sm:text-2xl font-extrabold">{totalStars}</p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ x: 4, boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)" }}
                className="p-3 sm:p-4 border-4 border-black bg-white flex items-center gap-3 sm:gap-4 md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="p-2 sm:p-3 bg-black text-white flex-shrink-0">
                  <FaCodeBranch className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">TOTAL FORKS</p>
                  <p className="text-xl sm:text-2xl font-extrabold">{totalForks}</p>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <div className="space-y-2 sm:space-y-3">
              <motion.div
                variants={item}
                whileHover={{ x: 4 }}
                className="p-3 sm:p-4 border-4 border-black bg-white flex items-center gap-3 sm:gap-4"
              >
                <div className="p-2 sm:p-3 bg-black text-white flex-shrink-0">
                  <FaCalendarAlt className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">JOINED GITHUB</p>
                  <p className="font-bold text-sm sm:text-base md:text-lg break-words">{new Date(userData.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </motion.div>
              
              {userData.location && (
                <motion.div
                  variants={item}
                  whileHover={{ x: 4 }}
                  className="p-3 sm:p-4 border-4 border-black bg-white flex items-center gap-3 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 bg-black text-white flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">LOCATION</p>
                    <p className="font-bold text-sm sm:text-base md:text-lg break-words">{userData.location}</p>
                  </div>
                </motion.div>
              )}
              
              {userData.blog && (
                <motion.a
                  href={userData.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={item}
                  whileHover={{ x: 4, backgroundColor: "#000", color: "#fff" }}
                  className="p-3 sm:p-4 border-4 border-black bg-white flex items-center gap-3 sm:gap-4 transition-colors"
                >
                  <div className="p-2 sm:p-3 bg-black text-white flex-shrink-0">
                    <FaGlobe className="text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">WEBSITE</p>
                    <p className="font-bold text-sm sm:text-base md:text-lg underline break-all">{userData.blog.replace(/https?:\/\//, '')}</p>
                  </div>
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Top Repositories */}
        {repos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase mb-6 sm:mb-8"
            >
              TOP REPOSITORIES
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {repos.map((repo, index) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 sm:p-5 md:p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50 transition-colors relative group"
                >
                  <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-black" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white" />
                  
                  <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold uppercase tracking-tight flex-1 group-hover:underline break-words">
                      {repo.name}
                    </h3>
                    <FaGithub className="text-xl sm:text-2xl ml-2 flex-shrink-0" />
                  </div>
                  
                  {repo.description && (
                    <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm flex-wrap">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-amber-500" />
                      <span className="font-bold">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCodeBranch className="text-blue-500" />
                      <span className="font-bold">{repo.forks_count}</span>
                    </div>
                    {repo.language && (
                      <div className="ml-auto">
                        <span className="px-2 py-1 bg-black text-white text-[10px] sm:text-xs font-bold">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center px-4"
        >
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest mb-2">
            DATA FETCHED FROM GITHUB API
          </p>
          <p className="text-[10px] sm:text-xs text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default GithubStatistics;
