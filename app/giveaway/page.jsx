'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function GiveawayFC26() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
    instagramHandle: '',
    favoriteClub: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/myzeqejb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('❌ Došlo je do greške. Pokušaj ponovo.');
      }
    } catch (error) {
      console.error('❌ Greška:', error);
      alert('⚠️ Greška pri slanju.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>⚽ FC26 Giveaway | Win the Game | US11</title>
        <meta
          name="description"
          content="Enter the US11 FC25 Giveaway! Fill out the form and complete Instagram steps to enter the draw. Winner announced on November 10."
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 py-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center">
          {!submitted ? (
            <>
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                ⚽ FC26 GIVEAWAY
              </h1>
              <p className="text-gray-700 mb-4">
                Win a free copy of <strong>EA SPORTS FC 26</strong>!
              </p>
              <p className="text-gray-700 mb-6">
                📅 <strong>Winner announced: November 10</strong> <br />
                ✅ To participate, you must:
              </p>

              <ul className="text-left text-gray-700 mb-6 list-disc pl-5 space-y-2">
                <li>Fill out the entire form below</li>
                <li>
                  Follow <strong>@us11fc</strong> & <strong>@galaxyrunsla</strong> on Instagram
                </li>
                <li>Like the giveaway post</li>
                <li>Tag 2 friends in the comments</li>
                
              </ul>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Favorite MLS Club
                  </label>
                  <input
                    type="text"
                    name="favoriteClub"
                    value={formData.favoriteClub}
                    onChange={handleChange}
                    placeholder="e.g. LAFC, Inter Miami, Seattle Sounders..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1 font-medium">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    name="instagramHandle"
                    value={formData.instagramHandle}
                    onChange={handleChange}
                    placeholder="@yourusername"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 cursor-pointer ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800'
                  }`}
                >
                  {loading ? 'Submitting...' : 'Enter Giveaway'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-3">
                🎉 You're In!
              </h2>
              <p className="text-gray-700 mb-4">
                Thank you for entering the FC25 Giveaway.
                Make sure you’ve followed all Instagram steps to be eligible.
              </p>
              <a
                href="/"
                className="mt-6 inline-block bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition cursor-pointer"
              >
                Back to Home
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
