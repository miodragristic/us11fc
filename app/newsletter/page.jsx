'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
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
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await fetch('https://formspree.io/f/xeorwale', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
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
        <title>Subscribe to US11 Newsletter | MLS News & Updates</title>
        <meta
          name="description"
          content="Join the US11 newsletter for exclusive MLS news, match previews, transfer updates, and player insights. Subscribe today and stay connected with U.S. soccer!"
        />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 py-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg text-center">
          {!submitted ? (
            <>
              <h1 className="text-4xl font-bold text-blue-800 mb-4">
                Subscribe to US11 Newsletter
              </h1>
              <p className="text-gray-700 mb-6">
                Stay ahead with the latest MLS news, player stats, and exclusive stories — straight to your inbox.
              </p>

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
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
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

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 cursor-pointer ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-800'
                  }`}
                >
                  {loading ? 'Submitting...' : 'Subscribe Now'}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-3">
                Thank You for Subscribing!
              </h2>
              <p className="text-gray-700">
                Welcome to the US11 community. Check your inbox for confirmation and start receiving MLS insights soon!
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
