'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

function DownloadSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: 100, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const badgeHover = {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  };

  return (
    <Element  name="download-app">
      <div className="relative  overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-100 rounded-full opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Content */}
            <motion.div
              className="flex-1 text-center lg:text-left max-w-xl"
              variants={itemVariants}
            >
              <motion.h1
                className="font-bold mb-4 text-2xl md:text-4xl leading-none tracking-normal"
                variants={itemVariants}
              >
                Download <span className="text-[#E5B92E]">BetWise</span> & Start
                Your Winning Journey Today!
              </motion.h1>

              <motion.p
                className="text-[#64748B]  text-sm md:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Unlock expert betting tips from top cappers and bet smarter, not
                harder. Available now on Google Play and App Store.
              </motion.p>

              <motion.div
                className="flex  items-center md:items-start gap-4 justify-center lg:justify-start"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={badgeHover}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                  onClick={() => alert('coming soon')}
                >
                  <Image
                    src="/icons/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={60}
                    className="w-auto h-8 md:h-10 lg:h-12"
                    priority
                  />
                </motion.div>

                <motion.div
                  whileHover={badgeHover}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                  onClick={() => alert('coming soon')}
                >
                  <Image
                    src="/icons/apple-play-badge.svg"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="w-auto h-8 md:h-10 lg:h-12"
                    priority
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="flex-1 flex justify-center lg:justify-end relative"
              variants={phoneVariants}
            >
              <div className="relative">
                {/* Dotted pattern overlay */}
                <motion.div
                  className="absolute top-4 right-4 w-32 h-32 opacity-30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.3 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="grid grid-cols-8 gap-1">
                    {[...Array(64)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-green-300 rounded-full"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 1.2 + i * 0.01, duration: 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Phone mockup */}
                <motion.div animate={floatAnimation} className="relative z-10">
                  <Image
                    src="/dowload-mobile.png"
                    alt="BetWise Mobile App"
                    width={400}
                    height={500}
                    className="w-full h-full drop-shadow-2xl"
                    priority
                  />
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-4 h-4 bg-yellow-400 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    x: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full opacity-80"
                  animate={{
                    y: [5, -5, 5],
                    x: [2, -2, 2],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default DownloadSection;
