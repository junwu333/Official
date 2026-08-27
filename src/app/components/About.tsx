import { motion } from "framer-motion";
import { Target, Users, Globe, Bot } from "lucide-react";

const stats = [
  { icon: Target, label: "产品经验", value: "3年+" },
  { icon: Users, label: "服务企业客户", value: "10+" },
  { icon: Globe, label: "语言适配", value: "10种" },
  { icon: Bot, label: "数字人创建", value: "300+" },
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

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              拥有<span className="text-emerald-400">3 年</span>互联网产品经理工作经验，能独立承担产品规划工作，
              善于项目分解、目标管理与资源调配。
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              近一年专注 <span className="text-emerald-400">AI 数字人平台与 AI Agent 产品方向</span>，
              覆盖大语言模型应用、知识库构建、智能体工作流编排等 AI 产品核心领域，具备 ToB/ToC 双端产品设计能力，
              能独立完成项目 0-1 开发落地。
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
