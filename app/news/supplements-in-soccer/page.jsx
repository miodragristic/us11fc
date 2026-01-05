import React from 'react';
 

const SupplementsPage = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
           

            {/* Content */}
            <div className='max-w-4xl mx-auto py-8 px-4 md:px-0'>
                <h1 className='text-4xl sm:text-6xl font-bold text-[#020617] mb-8 mt-16'>
                   Top Supplements for soccer players 
                </h1>
                <div className='mb-4'>
                <img 
                    src='https://images.unsplash.com/photo-1662695086526-112d7959fab4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                    alt='San Diego' 
                    className='w-full h-[400px] object-cover rounded-lg shadow-md' 
                    style={{ maxHeight: '400px', objectFit: 'cover' }} 
                />
                    <div className="mt-2 text-sm text-gray-600">
                        <span>By Mio Ristic | Dec 24, 2024</span>
                    </div>
                    <div className='mt-4 text-center'>
                        <a href="/Supplements" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>
                            Go To Supplements
                        </a>
                    </div>
                </div>
                <p className='mb-4'>
                    In the world of football, where athletes face demanding training sessions, high-intensity matches, and physical challenges daily, optimizing physical performance is crucial. Supplements for football players can play a significant role in achieving this by improving strength, endurance, recovery speed, and reducing the risk of injuries.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-4'>Why Supplements for Football Players?</h2>
                <p className='mb-4'>
                    Football is a sport that requires high physical fitness. Supplements can help players achieve and maintain the physical capabilities needed for endurance, explosiveness, and quick recovery.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-6'>Which Supplements Can Help Football Players?</h2>
                <ul className='list-disc list-inside space-y-4 mb-8'>
                    <li><strong>Proteins</strong>: Essential for muscle recovery and maintenance.</li>
                    <li><strong>Creatine</strong>: Enhances strength and explosiveness.</li>
                    <li><strong>BCAAs</strong>: Reduces muscle fatigue and accelerates recovery.</li>
                    <li><strong>Omega-3 Fatty Acids</strong>: Supports joint health and reduces inflammation.</li>
                    <li><strong>Multivitamins</strong>: Strengthens the immune system and supports energy.</li>
                    <li><strong>Glucosamine and Chondroitin</strong>: Promotes joint health.</li>
                    <li><strong>Caffeine</strong>: Boosts energy and endurance.</li>
                    <li><strong>Electrolytes</strong>: Prevents dehydration and muscle cramps.</li>
                    <li><strong>L-Carnitine</strong>: Improves energy and endurance.</li>
                </ul>

                <h2 className='text-3xl font-semibold text-[#020617] mb-4'>Is Consulting a Doctor Necessary?</h2>
                <p className='mb-4'>
                    It is recommended to consult a doctor, nutritionist, or sports expert before starting supplements. They can guide you on the right types and dosages to suit your goals.
                </p>

                <h2 className='text-3xl font-semibold text-[#020617] mb-4'>Conclusion</h2>
                <p className='mb-4'>
                    Supplements for football players can enhance performance and recovery when used correctly. Always combine supplements with a healthy diet and proper training.
                </p>
            </div>

           
        </div>
    );
};

export default SupplementsPage;
