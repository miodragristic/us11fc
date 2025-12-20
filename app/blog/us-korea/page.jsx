'use client';

import React from 'react';

const USMNTKoreaRecap = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='max-w-3xl mx-auto py-8 px-4 md:px-0'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
          Warning for USMNT: Defeat to Korea Exposes Serious Problems Ahead of 2026 World Cup
        </h1>

        {/* Main Image */}
        <div className='w-full h-[400px] rounded-lg shadow-md overflow-hidden relative mb-4'>
          <img
            src='https://s.yimg.com/os/creatr-uploaded-images/2025-09/976007e0-8b6b-11f0-bfbb-b88058d464f7'
            alt='USMNT vs South Korea'
            className='w-full h-full object-cover object-center'
          />
        </div>

        {/* Copyright */}
        <div className='mb-6 text-xs text-gray-500'>
          Get this image on: <a href="https://www.gettyimages.com" target="_blank" className="underline">gettyimages.com</a> | License details  
          <br />
          Creator: Ira L. Black/USSF | Credit: Getty Images  
          <br />
          © 2025 Ira L. Black/USSF
        </div>

        {/* Article Content */}
        <div className='space-y-4 mb-15 text-[#020617] text-lg'>
          <p className='text-2xl font-semibold'>⚡ Son punishes U.S. mistakes</p>
          <p>
            In front of almost <strong>26,500 fans</strong> at Red Bull Arena in New Jersey — most cheering for South Korea — 
            the <strong>USMNT</strong> fell to a clear <strong>2–0 defeat</strong>.  
            Captain <strong>Son Heung-Min</strong>, now with <strong>LAFC</strong>, opened the scoring in the 18th minute with his 
            <strong> 52nd international goal</strong>, edging closer to Cha Bum-Kun’s legendary tally.  
          </p>
          <p>
            Just before halftime, it got worse. Son broke through again, drawing goalkeeper <strong>Matt Freese</strong> out. 
            As he went down, <strong>Lee Dong-Gyeong</strong> flicked the ball with his heel into the empty net for 2–0.
          </p>

          <h2 className='text-xl font-semibold mt-6'>🚨 Questions for Pochettino</h2>
          <p>
            This is the second time in 2025 that <strong>Mauricio Pochettino’s</strong> U.S. side has lost back-to-back games.  
            Against top-25 nations, the Americans are now winless in seven, losing six, with a miserable <strong>11–2 first-half 
            goal differential</strong>.  
          </p>
          <p>
            Even with the return of <strong>Christian Pulisic, Timothy Weah, and Sergiño Dest</strong>, the U.S. looked fragile. 
            Veteran <strong>Tim Ream (37)</strong> and debutant <strong>Tristan Blackmon</strong> struggled to contain Korea’s attack.
          </p>

          <h2 className='text-xl font-semibold mt-6'>📉 Injuries, droughts, and pressure</h2>
          <p>
            To make matters worse, <strong>Timothy Weah</strong> left the game injured. In attack, <strong>Josh Sargent</strong> extended his 
            goalless streak to <strong>17 international matches</strong> dating back to 2019. Returning striker 
            <strong> Folarin Balogun</strong> came closest late on, but couldn’t break through.
          </p>

          <h2 className='text-xl font-semibold mt-6'>📌 What’s next?</h2>
          <p>
            With just nine months before the <strong>2026 World Cup opener in Los Angeles</strong>, questions are growing louder: 
            does the USMNT have a real identity, or is it relying only on individual talent?  
          </p>
          <p>
            The next test comes quickly: <strong>Japan in Columbus, Ohio</strong>, on Tuesday. Pochettino needs answers fast, 
            or the hosts of the World Cup may lose momentum before the tournament even begins.
          </p>
        </div>

        {/* YouTube Embed */}
        <div className='w-full aspect-video rounded-lg overflow-hidden shadow-md mb-6'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/5Zwjyi8bdE4'
            title='USMNT vs South Korea highlights'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>

        <div className='text-center mt-10'>
          <p className='text-sm text-gray-600'>
            Follow US11 for more recaps, previews, and soccer stories from around the world.
          </p>
          <p className='text-sm text-gray-600'>#USMNT #SonHeungMin #SouthKorea #WorldCup2026 #US11</p>
        </div>
      </div>
    </div>
  );
};

export default USMNTKoreaRecap;
