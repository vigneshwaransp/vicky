import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Message transmitted successfully!', {
      description: 'I will respond to your transmission shortly.',
      duration: 4000,
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    { icon: Mail, label: 'vigneshwaransp.cs24@bitsathy.ac.in', color: '#00BFFF' },
    { icon: Phone, label: '+91 8667759274', color: '#FF0033' },
    { icon: MapPin, label: '24/36E Vasagasalai, Salem, India', color: '#00BFFF' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', color: '#00BFFF' },
    { icon: Linkedin, label: 'LinkedIn', color: '#FF0033' },
    { icon: Twitter, label: 'Twitter', color: '#00BFFF' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="text-[#00BFFF] font-['Share_Tech_Mono'] mb-4 tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {'> ESTABLISHING CONNECTION...'}
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl glow-blue text-[#00BFFF]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            CONTACT.interface
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="holographic p-8">
              <h3 className="text-2xl text-[#00BFFF] mb-6">
                Send Transmission
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-['Share_Tech_Mono'] text-[#00BFFF] mb-2">
                    NAME_INPUT
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-[#00BFFF]/30 rounded focus:border-[#00BFFF] focus:outline-none transition-all text-[#00BFFF] font-['Share_Tech_Mono']"
                    style={{ boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.1)' }}
                    placeholder="Enter your name..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-['Share_Tech_Mono'] text-[#00BFFF] mb-2">
                    EMAIL_INPUT
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border-2 border-[#00BFFF]/30 rounded focus:border-[#00BFFF] focus:outline-none transition-all text-[#00BFFF] font-['Share_Tech_Mono']"
                    style={{ boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.1)' }}
                    placeholder="Enter your email..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-['Share_Tech_Mono'] text-[#00BFFF] mb-2">
                    MESSAGE_INPUT
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border-2 border-[#00BFFF]/30 rounded focus:border-[#00BFFF] focus:outline-none transition-all text-[#00BFFF] font-['Share_Tech_Mono'] resize-none"
                    style={{ boxShadow: 'inset 0 0 10px rgba(0, 191, 255, 0.1)' }}
                    placeholder="Enter your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[#FF0033] text-black border-2 border-[#FF0033] hover:bg-transparent hover:text-[#FF0033] transition-all disabled:opacity-50 disabled:cursor-not-allowed box-glow-red"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="flex items-center justify-center gap-2 font-['Share_Tech_Mono']">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          ⟳
                        </motion.div>
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        SEND_MESSAGE
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact details */}
            <div className="holographic p-8 space-y-6">
              <h3 className="text-2xl text-[#00BFFF] mb-6">
                Direct Channels
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${info.color}20`,
                      border: `1px solid ${info.color}`,
                      boxShadow: `0 0 15px ${info.color}40`,
                    }}
                  >
                    <info.icon 
                      className="w-5 h-5"
                      style={{ color: info.color }}
                    />
                  </div>
                  <span 
                    className="font-['Share_Tech_Mono']"
                    style={{ color: info.color }}
                  >
                    {info.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="holographic p-8">
              <h3 className="text-2xl text-[#00BFFF] mb-6">
                Social Networks
              </h3>

              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${social.color}20`,
                      border: `1px solid ${social.color}`,
                      boxShadow: `0 0 15px ${social.color}40`,
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 25px ${social.color}60`,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon 
                      className="w-6 h-6"
                      style={{ color: social.color }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="holographic p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-['Share_Tech_Mono'] text-gray-400">
                  SYSTEM_STATUS
                </span>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2 text-[#00BFFF]"
                >
                  <div className="w-3 h-3 bg-[#00BFFF] rounded-full" />
                  <span className="font-['Share_Tech_Mono']">ONLINE</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 font-['Share_Tech_Mono'] text-sm">
            © 2050 VIGNESHWARAN SP. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-600 font-['Share_Tech_Mono'] text-xs mt-2">
            BUILT WITH QUANTUM PRECISION IN SALEM, INDIA
          </p>
          <motion.div
            className="mt-4 text-xs text-gray-700 font-['Share_Tech_Mono']"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            linkedin.com/in/vgvicky
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
