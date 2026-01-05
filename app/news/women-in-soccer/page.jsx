import React from 'react';

const Imga = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#020617] mb-8 mt-16 lg:mt-1'>
                    Women in Soccer: Breaking Barriers and Inspiring Generations
                </h1>

                <div className='mb-4'>
                    <img 
                        src='https://images.unsplash.com/photo-1532290278496-3d29b25b691a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        alt='Women Soccer' 
                        className='w-full h-[400px] object-cover rounded-lg shadow-md'
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
                </div>

                <h2 className='text-3xl font-semibold text-[#020617] mb-12'>
                    The U.S. Women's National Team: A Legacy of Excellence
                </h2>
                <p className='mb-4'>
                    Soccer, the world's most beloved sport, has historically been dominated by men...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    The USWNT: A Legacy of Excellence
                </h3>
                <p className='mb-4'>
                    The USWNT has long been a powerhouse in women’s soccer...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    The NWSL: A Growing Hub for Talent
                </h3>
                <p className='mb-4'>
                    The National Women’s Soccer League (NWSL) has been instrumental in developing and showcasing female soccer talent in the U.S...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    Soccer Across the U.S.
                </h3>
                <p className='mb-4'>
                    Women’s soccer thrives at all levels in the United States...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-4'>
                    A Global Impact
                </h3>
                <p className='mb-4'>
                    The influence of U.S. women’s soccer extends far beyond national borders...
                </p>

                <h3 className='text-2xl font-semibold text-[#020617] mb-7'>
                    Conclusion
                </h3>
                <p className='mb-4'>
                    The story of women in soccer, particularly in the United States, is one of triumph over adversity...
                </p>
            </div>
        </div>
    );
};

export default Imga;
