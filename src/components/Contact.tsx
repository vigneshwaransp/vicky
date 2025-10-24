import { useState } from 'react';
import { motion } from 'framer-motion';
import { ThumbsUp, ThumbsDown, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

// Example LeetCode icon as custom SVG
function LeetCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 50 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 25 L20 15 L30 25 L20 35 Z" />
    </svg>
  );
}

export function Contact() {
  const [likes, setLikes] = useState(0);
  const [unlikes, setUnlikes] = useState(0);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
    toast.success('You liked this interface!', { duration: 3000 });
  };

  const handleUnlike = () => {
    setUnlikes((prev) => prev + 1);
    toast.error('You disliked this interface!', { duration: 3000 });
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', color: '#00BFFF', url: 'https://github.com/vigneshwaransp' },
    { icon: Linkedin, label: 'LinkedIn', color: '#FF0033', url: 'https://www.linkedin.com/in/your-linkedin-username' },
    { icon: LeetCodeIcon, label: 'LeetCode', color: '#FFA116', url: 'https://leetcode.com/u/vigneshwaransp/' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 relative bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="text-[#00BFFF] font-mono mb-4 tracking-wider">
            {'> CONNECTIVITY_PORTAL...'}
          </div>
          <h2 className="text-4xl md:text-6xl text-[#00BFFF] glow-blue">INTERFACE.LIKE_UNLIKE</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Like/Unlike Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-6 p-12 border border-[#00BFFF]/20 rounded-lg bg-[#000000]/50 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.button
                onClick={handleLike}
                className="flex items-center gap-2 px-8 py-4 bg-[#00BFFF] text-black border-2 border-[#00BFFF] hover:bg-transparent hover:text-[#00BFFF] transition-all box-glow-blue font-mono"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #00BFFF' }}
                whileTap={{ scale: 0.95 }}
              >
                <ThumbsUp className="w-5 h-5" />
                LIKE
              </motion.button>
              <span className="text-[#00BFFF] font-mono tracking-wider">{likes} Likes</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <motion.button
                onClick={handleUnlike}
                className="flex items-center gap-2 px-8 py-4 bg-[#FF0033] text-black border-2 border-[#FF0033] hover:bg-transparent hover:text-[#FF0033] transition-all box-glow-red font-mono"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #FF0033' }}
                whileTap={{ scale: 0.95 }}
              >
                <ThumbsDown className="w-5 h-5" />
                UNLIKE
              </motion.button>
              <span className="text-[#FF0033] font-mono tracking-wider">{unlikes} Unlikes</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center space-y-6 p-12 border border-[#00BFFF]/20 rounded-lg bg-[#000000]/50 backdrop-blur-md"
          >
            <h3 className="text-2xl text-[#00BFFF] mb-6">SOCIAL_NODES</h3>
            <div className="flex gap-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="w-14 h-14 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: `${social.color}20`,
                    border: `1px solid ${social.color}`,
                    boxShadow: `0 0 15px ${social.color}40`,
                  }}
                  whileHover={{ scale: 1.1, boxShadow: `0 0 25px ${social.color}60` }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center text-gray-500 font-mono text-sm"
        >
          <p>© 2050 VIGNESHWARAN SP. ALL RIGHTS RESERVED.</p>
          <p className="text-gray-600 text-xs mt-2">BUILT WITH CYBERNETIC PRECISION IN SALEM, INDIA</p>
        </motion.div>
      </div>
    </section>
  );
}
