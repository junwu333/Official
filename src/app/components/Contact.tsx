import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "wind4162001@163.com",
    href: "mailto:wind4162001@163.com",
  },
  {
    icon: Phone,
    label: "电话",
    value: "15871321407",
    href: "tel:15871321407",
  },
  {
    icon: MapPin,
    label: "位置",
    value: "深圳 · 中国",
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            联系我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-emerald-400 mb-4">让我们一起创造价值</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                如果您正在寻找一位经验丰富的产品经理，或者想要讨论产品相关的话题，
                欢迎随时联系我。我很乐意与您交流，探讨如何通过产品创新为用户和业务创造价值。
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 border border-emerald-500/20 rounded-xl bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                    <info.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 border border-emerald-500/20 rounded-2xl bg-black/40 backdrop-blur-sm"
          >
            <h3 className="text-2xl text-emerald-400 mb-6">快速留言</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/60 border border-emerald-500/30 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">邮箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/60 border border-emerald-500/30 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">消息</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-black/60 border border-emerald-500/30 rounded-lg focus:border-emerald-500 focus:outline-none text-white transition-colors resize-none"
                  placeholder="请输入您想说的话..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg text-white hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                发送消息
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-28 pt-8 border-t border-emerald-500/20 text-center text-gray-400"
        >
          <p>© 2026 刘玉琴 · 产品经理. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
