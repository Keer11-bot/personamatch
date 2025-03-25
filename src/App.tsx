import React, { useState, useEffect } from 'react';
import { Users, Clock, Bell } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-08-14T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400/90 via-pink-500/90 to-purple-500/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center h-80 w-80">
                <svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 0 0 L 500 0 L 500 500 L 0 500 L 0 0 Z M 212 178 Q 202 180 196 184 L 184 198 L 181 210 L 181 218 L 184 230 L 194 246 L 199 251 Q 198 253 201 252 L 208 260 Q 210 259 209 262 L 221 271 Q 223 270 222 273 L 247 289 L 259 283 L 260 282 L 264 286 L 270 284 L 294 267 Q 306 258 311 243 L 311 233 L 310 232 L 313 219 L 312 204 L 306 193 Q 299 183 287 179 L 269 179 L 256 185 L 248 195 L 245 192 Q 236 177 212 178 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 211.5 178 L 223 178.5 L 211.5 179 L 211.5 178 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 225.5 179 Q 238.8 181.7 245 191.5 L 247.5 195 L 255.5 185 L 263.5 181 L 263.5 182 Q 255.1 185.6 250 192.5 L 247.5 197 Q 245.3 197.8 246 195.5 L 239 186 Q 234.1 181.6 225.5 180 L 225.5 179 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 268.5 179 L 272 179.5 L 268.5 180 L 268.5 179 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 283.5 179 L 287 179.5 L 283.5 180 L 283.5 179 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 203.5 180 L 205 180.5 L 201.5 182 L 201.5 181 L 203.5 180 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 288.5 180 Q 300.1 183.4 306 192.5 Q 311.3 197.7 312 207.5 L 311 207.5 L 308 197.5 L 298.5 186 L 289.5 182 L 288.5 180 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 199.5 182 L 197.5 185 L 189 192.5 L 184 200.5 L 182.5 208 L 182 203.5 Q 186 191 195.5 184 L 199.5 182 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 181.5 209 L 182 217.5 L 181 217.5 L 181.5 209 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 312.5 210 L 313 218.5 L 312 218.5 L 312.5 210 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 248.5 213 Q 262.1 214.4 268 223.5 L 269 228 Q 271.7 229.1 271 226.5 L 273 223 L 275 223 Q 273.9 220.3 276.5 221 Q 281.8 214.8 295.5 217 Q 302.7 218.8 306 224.5 L 308.5 228 Q 311.1 228.8 310 225.5 L 311.5 220 L 312 225.5 Q 309.4 226.9 310 231.5 L 311 232.5 L 311 242.5 Q 305.8 258.3 293.5 267 L 269.5 284 L 263.5 286 L 259.5 282 L 258.5 283 L 246.5 289 L 222 273 L 222.5 271 L 229.5 277 L 247.5 288 L 258 281.5 L 250.5 273 L 246 269.5 Q 236.5 260 230 247.5 Q 226.5 241 228 229.5 Q 229.8 221.8 235.5 218 L 242.5 214 Q 247.2 215.3 248.5 213 Z " /><path fill="rgb(252,210,207)" stroke="rgb(252,210,207)" stroke-width="1" opacity="0.9137254901960784" d="M 182.5 219 L 184 226.5 L 189 236.5 L 204 256 L 205.5 256 L 221 270.5 L 218.5 269 L 209 262 Q 210.1 259.3 207.5 260 L 201 252 Q 198.3 253.1 199 250.5 L 186 233.5 L 182 223.5 L 182.5 219 Z " /><path fill="rgb(245,111,148)" stroke="rgb(245,111,148)" stroke-width="1" opacity="0.9882352941176471" d="M 208.5 179 L 224.5 179 L 239 186 L 246 197 L 249 195.5 Q 250.6 188.6 256.5 186 Q 264.7 177.7 282.5 179 Q 295.7 181.8 303 190.5 L 311 204.5 L 312 219.5 L 310 228 L 306 225.5 L 300.5 219 Q 294.7 215.3 283.5 217 L 275 221 L 275 223 Q 272.3 221.9 273 224.5 L 271 228 Q 268.3 229.1 269 226.5 Q 267.6 220.4 262.5 218 L 255.5 214 L 248.5 213 L 240.5 215 L 231 222.5 Q 226.2 228.7 228 241.5 Q 235.2 260.8 249.5 273 L 258 280.5 L 256.5 283 L 246.5 288 L 221.5 271 L 205.5 256 L 204 256 L 191 239.5 L 184 226.5 L 182 218.5 L 182 208.5 L 185 198.5 L 196.5 185 L 208.5 179 Z " /></svg>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              PersonaMatch
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-12">
              Something amazing is coming your way
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-pink-200 text-sm md:text-base capitalize">
                    {unit}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-pink-200 mr-3" />
                <h2 className="text-2xl font-bold text-white">
                  Launch Date: August 14th, 2025
                </h2>
              </div>
              <p className="text-pink-100 text-lg">
                We're working hard to bring you a revolutionary matching experience.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white">
                <Bell className="w-5 h-5" />
                <span className="text-lg">Stay tuned for updates!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;