
// import React, { useState } from 'react';
// import { Mail, MapPin, Phone } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="py-10 mb-12">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">
//           Contact
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           {/* Contact Info */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <Mail size={18} className="text-gray-400" />
//               <span className="text-gray-600">dattadevc@gmail.com</span>
//             </div>
            
//             {/* <div className="flex items-center gap-3">
//               <Phone size={18} className="text-gray-400" />
//               <span className="text-gray-600">+91</span>
//             </div> */}
            
//             <div className="flex items-center gap-3">
//               <MapPin size={18} className="text-gray-400" />
//               <span className="text-gray-600">Pune ,India</span>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
//                   required
//                 />
//               </div>
              
//               <div>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 resize-none"
//                   required
//                 ></textarea>
//               </div>
              
//               <button
//                 type="submit"
//                 className="w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-200"></div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full max-w-3xl p-10 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg overflow-hidden text-white">
        {/* Background Rings */}
        <div className="absolute right-[-25%] top-[-25%] w-[300px] h-[300px] bg-[radial-gradient(closest-side,white,transparent)] opacity-20 scale-[2] pointer-events-none" />

        {/* Header */}
        <h2 className="text-4xl font-bold mb-2 z-10 relative">Let’s Get In Touch.</h2>
        <p className="mb-6 text-white/90 text-lg z-10 relative">
          For business, partnership and work inquiries,<br /> feel free to reach out below.
        </p>

        {/* Contact Buttons (instead of form) */}
        <div className="flex flex-wrap gap-4 z-10 relative">
          <a
            href="mailto:dattadevc@gmail.com"
            className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-all"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/dattadev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-800 transition-all"
          >
            LinkedIn
          </a>
          

         
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Pune, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

