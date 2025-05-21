import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, Loader } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', form);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      
      // Auto-reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 800);
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: "PHONE", content: "+91 7209786220", color: "bg-purple-200" },
    { icon: <Mail className="w-6 h-6" />, title: "EMAIL", content: "shahnwajalam10@gmail.com", color: "bg-yellow-200" },
    { icon: <MapPin className="w-6 h-6" />, title: "LOCATION", content: "Bangalore, India", color: "bg-green-200" }
  ];

  return (
    <section id="contact" className="py-10 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase border-4 border-black px-6 py-3 inline-block mb-8 bg-blue-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 border-2 border-black rounded-full"></span>
          GET IN TOUCH
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="relative border-3 border-black p-4 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
              >
                <div className={`absolute -bottom-1.5 -right-1.5 h-full w-full border-2 border-black ${info.color} -z-10`}></div>
                <div className="flex items-center gap-4">
                  <div className="p-2 border-3 border-black bg-white">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{info.title}</h3>
                    <p className="text-base">{info.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative border-3 border-black p-5 bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="absolute -bottom-1.5 -right-1.5 h-full w-full border-2 border-black bg-blue-200 -z-10"></div>
            
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-6">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-4 border-3 border-black">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-base">Thanks for reaching out.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  { name: "name", label: "NAME", type: "text" },
                  { name: "email", label: "EMAIL", type: "email" }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-base font-bold mb-1 flex items-center gap-1">
                      {field.label}
                      {activeField === field.name && (
                        <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      )}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      onFocus={() => setActiveField(field.name)}
                      onBlur={() => setActiveField(null)}
                      required
                      className={`w-full border-3 ${activeField === field.name ? 'border-blue-500' : 'border-black'} p-2 text-base focus:outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-base font-bold mb-1 flex items-center gap-1">
                    MESSAGE
                    {activeField === 'message' && (
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    )}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    required
                    rows={4}
                    className={`w-full border-3 ${activeField === 'message' ? 'border-blue-500' : 'border-black'} p-2 text-base focus:outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex items-center justify-center gap-2 w-full uppercase bg-black text-white px-4 py-2 font-bold text-base border-3 border-black hover:bg-blue-500 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden group"
                >
                  <span className="absolute w-full h-full bg-blue-500 -right-full group-hover:right-0 transition-all duration-200 -z-10"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <>SENDING <Loader className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>SEND <Send className="w-4 h-4" /></>
                    )}
                  </span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;