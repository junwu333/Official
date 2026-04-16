import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { icon: Target, label: "成功产品", value: "5+" },
  { icon: Users, label: "服务用户", value: "100万+" },
  { icon: TrendingUp, label: "增长率", value: "120%" },
  { icon: Award, label: "行业奖项", value: "2" },
];

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            关于我
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl opacity-20 blur-xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591201417943-d82df759897d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2MDU5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Product Manager Workspace"
                className="relative rounded-2xl border border-emerald-500/30 w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              拥有<span className="text-emerald-400">3+年</span>产品管理经验，专注于B2B SaaS和金融科技领域。
              擅长将复杂的业务需求转化为优雅的产品解决方案。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              通过数据分析和用户研究，成功推动多个产品从0到1，实现用户增长和商业价值的双赢。
              热衷于构建高效的产品团队，建立完善的产品管理流程。
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 border border-emerald-500/30 rounded-xl bg-emerald-500/5 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-emerald-400 mb-2" />
                  <div className="text-2xl text-emerald-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
