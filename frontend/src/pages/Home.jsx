import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Header/>

      {/* Hero Section */}
      <div className="relative h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=A%20modern%203D%20rendered%20fitness%20scene%20with%20abstract%20geometric%20shapes%2C%20floating%20dumbbells%20and%20exercise%20equipment%20in%20a%20dark%20space%20with%20orange%20accent%20lighting%2C%20futuristic%20design%20elements%20and%20dynamic%20composition%20creating%20depth%20and%20dimension&width=1440&height=800&seq=1&orientation=landscape"
            alt="Fitness Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>
        
        {/* Orange X Shape Overlay */}
        <div className="absolute right-0 top-0 w-full h-full opacity-40 z-10">
          <div className="relative w-full h-full">
            <div className="absolute top-0 right-0 w-[120%] h-[120%] bg-orange-600 transform rotate-15 translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-orange-600"></div>
              <div className="w-2 h-1 bg-orange-600"></div>
              <div className="w-1 h-1 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">OBTAIN</h2>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-2">FITNESS</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">ON THE GO</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Transform your body and mind with our expert trainers and state-of-the-art facilities. Start your fitness journey today.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="SignUp" className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 font-medium transition-colors duration-300 rounded-button cursor-pointer whitespace-nowrap">
                GET STARTED
              </a>
              <a href="#" className="border border-white hover:border-orange-600 hover:text-orange-600 text-white py-3 px-8 font-medium transition-colors duration-300 rounded-button cursor-pointer whitespace-nowrap">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-black py-0 -mt-20 relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Group Training Card */}
            <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20dynamic%20group%20fitness%20class%20with%20diverse%20participants%20working%20out%20together%20in%20a%20modern%20gym%20with%20orange%20lighting%20accents%2C%20high%20energy%20atmosphere%20with%20professional%20equipment%20visible%20in%20background&width=600&height=400&seq=2&orientation=landscape"
                  alt="Group Training"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-1 bg-orange-600 mb-4"></div>
                <h3 className="text-2xl font-bold mb-3">GROUP</h3>
                <p className="text-gray-400 mb-4">Join our high-energy group sessions designed to motivate and challenge you in a supportive community environment.</p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-500 font-medium">
                  EXPLORE <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            
            {/* Personal Training Card */}
            <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20personal%20trainer%20guiding%20a%20client%20through%20a%20workout%20with%20focused%20attention%2C%20in%20a%20premium%20gym%20setting%20with%20orange%20accent%20lighting%2C%20professional%20fitness%20equipment%20visible%20in%20background&width=600&height=400&seq=3&orientation=landscape"
                  alt="Personal Training"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-1 bg-orange-600 mb-4"></div>
                <h3 className="text-2xl font-bold mb-3">PERSONAL</h3>
                <p className="text-gray-400 mb-4">Experience customized one-on-one training sessions tailored to your specific goals and fitness level.</p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-500 font-medium">
                  EXPLORE <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            
            {/* Muscle Building Card */}
            <div className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20muscular%20athlete%20performing%20strength%20training%20with%20heavy%20weights%20in%20a%20professional%20gym%20environment%20with%20orange%20accent%20lighting%2C%20focusing%20on%20muscle%20definition%20and%20proper%20form&width=600&height=400&seq=4&orientation=landscape"
                  alt="Muscle Building"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-1 bg-orange-600 mb-4"></div>
                <h3 className="text-2xl font-bold mb-3">MUSCLE</h3>
                <p className="text-gray-400 mb-4">Build strength and definition with our specialized muscle training programs designed for maximum results.</p>
                <a href="#" className="inline-flex items-center text-orange-600 hover:text-orange-500 font-medium">
                  EXPLORE <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-1 bg-orange-600"></div>
                <div className="w-2 h-1 bg-orange-600"></div>
                <div className="w-1 h-1 bg-orange-600"></div>
              </div>
              <h2 className="text-4xl font-bold mb-6">ABOUT <span className="text-orange-600">IRONPULSE</span></h2>
              <p className="text-gray-300 mb-6">
                Founded in 2015, IronPulse has grown to become the premier fitness destination for those serious about their health and physical performance. Our state-of-the-art facilities and expert trainers are dedicated to helping you achieve extraordinary results.
              </p>
              <p className="text-gray-300 mb-8">
                We believe fitness is more than just exercise—it's a lifestyle that empowers you to be your best self. Whether you're just starting your fitness journey or looking to reach new heights, we're here to guide you every step of the way.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="text-orange-600 mr-3 mt-1">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Expert Trainers</h4>
                    <p className="text-gray-400 text-sm">Certified professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-orange-600 mr-3 mt-1">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Modern Equipment</h4>
                    <p className="text-gray-400 text-sm">Latest fitness technology and premium gear</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-orange-600 mr-3 mt-1">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Flexible Programs</h4>
                    <p className="text-gray-400 text-sm">Customized plans to fit your schedule</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-orange-600 mr-3 mt-1">
                    <i className="fas fa-check-circle text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Proven Results</h4>
                    <p className="text-gray-400 text-sm">Thousands of success stories and transformations</p>
                  </div>
                </div>
              </div>
              <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 font-medium transition-colors duration-300 rounded-button cursor-pointer whitespace-nowrap inline-block">
                LEARN MORE
              </a>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=A%20modern%20fitness%20facility%20interior%20with%20premium%20equipment%2C%20stylish%20design%20with%20orange%20accent%20lighting%2C%20showing%20various%20workout%20stations%20and%20a%20clean%2C%20professional%20environment%20with%20high-end%20amenities&width=700&height=800&seq=5&orientation=portrait"
                alt="Our Gym"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 p-6 rounded-lg">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium">YEARS OF EXCELLENCE</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classes Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-orange-600"></div>
              <div className="w-2 h-1 bg-orange-600"></div>
              <div className="w-1 h-1 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">OUR <span className="text-orange-600">CLASSES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Choose from our wide range of specialized fitness classes designed to help you achieve your goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "HIIT Training", icon: "fa-bolt", members: "24", duration: "45 min" },
              { title: "Strength & Conditioning", icon: "fa-dumbbell", members: "20", duration: "60 min" },
              { title: "Yoga Flow", icon: "fa-spa", members: "18", duration: "50 min" },
              { title: "Boxing", icon: "fa-fist-raised", members: "16", duration: "55 min" }
            ].map((cls, index) => (
              <div key={index} className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-all duration-300">
                <div className="text-orange-600 text-3xl mb-4">
                  <i className={`fas ${cls.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{cls.title}</h3>
                <div className="flex items-center text-gray-400 mb-2">
                  <i className="fas fa-users mr-2"></i>
                  <span>{cls.members} members max</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <i className="fas fa-clock mr-2"></i>
                  <span>{cls.duration}</span>
                </div>
                <a href="#" className="text-orange-600 hover:text-orange-500 font-medium flex items-center">
                  BOOK NOW <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trainers Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-orange-600"></div>
              <div className="w-2 h-1 bg-orange-600"></div>
              <div className="w-1 h-1 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">EXPERT <span className="text-orange-600">TRAINERS</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet our team of certified fitness professionals dedicated to helping you reach your goals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Alex Thompson", role: "Head Trainer", image: "https://readdy.ai/api/search-image?query=Professional%20male%20fitness%20trainer%20in%20athletic%20wear%20standing%20confidently%20in%20a%20modern%20gym%20with%20orange%20accent%20lighting%2C%20muscular%20build%20showing%20expertise%20in%20fitness%20training&width=400&height=500&seq=6&orientation=portrait" },
              { name: "Sarah Martinez", role: "Yoga Specialist", image: "https://readdy.ai/api/search-image?query=Professional%20female%20yoga%20instructor%20in%20athletic%20wear%20demonstrating%20yoga%20pose%20in%20a%20modern%20gym%20with%20orange%20accent%20lighting%2C%20showing%20grace%20and%20expertise&width=400&height=500&seq=7&orientation=portrait" },
              { name: "Mike Johnson", role: "Strength Coach", image: "https://readdy.ai/api/search-image?query=Professional%20male%20strength%20coach%20in%20athletic%20wear%20demonstrating%20proper%20form%20with%20weights%20in%20a%20modern%20gym%20with%20orange%20accent%20lighting&width=400&height=500&seq=8&orientation=portrait" }
            ].map((trainer, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <img src={trainer.image} alt={trainer.name} className="w-full h-[500px] object-cover object-top transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-orange-600 mb-4">{trainer.role}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-orange-600 transition-colors">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-white hover:text-orange-600 transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-white hover:text-orange-600 transition-colors">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-orange-600"></div>
              <div className="w-2 h-1 bg-orange-600"></div>
              <div className="w-1 h-1 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4">SUCCESS <span className="text-orange-600">STORIES</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Hear what our members have to say about their transformation journey with IronPulse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John D.", quote: "IronPulse completely transformed my approach to fitness. The trainers here are exceptional!", rating: 5 },
              { name: "Emily R.", quote: "The community and support system here is incredible. I've never felt stronger or more confident.", rating: 5 },
              { name: "David M.", quote: "Best decision I've made for my health. The results speak for themselves!", rating: 5 }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black p-8 rounded-lg relative">
                <div className="text-orange-600 text-4xl absolute -top-5 left-8">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-gray-300 mb-6 mt-4">{testimonial.quote}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="text-orange-600">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
   <Footer/>
      
    </div>
  );
};

export default App;  