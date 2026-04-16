import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 border border-emerald-500/30 rounded-full bg-emerald-500/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-emerald-400 text-sm tracking-wide">产品经理 · 用户体验设计师</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-500 bg-clip-text text-transparent">
            刘玉琴
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            用数据驱动决策，以用户为中心设计产品
            <br />
            <span className="text-emerald-400">打造有影响力的数字体验</span>
          </p>
          
          <motion.div
            className="flex gap-6 justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="mailto:wind4162001@163.com"
              className="p-3 border border-emerald-500/30 rounded-lg bg-emerald-500/5 hover:bg-emerald-500/20 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
          
          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-full text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解更多
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
