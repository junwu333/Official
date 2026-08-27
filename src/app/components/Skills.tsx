import { motion } from "framer-motion";
import { 
  Bot, 
  LineChart, 
  PenTool, 
  Cpu, 
  Presentation, 
  Target,
  Lightbulb,
  Users
} from "lucide-react";

const skillCategories = [
  {
    title: "AI 产品专项",
    icon: Bot,
    skills: [
      { name: "AI 数字人平台", level: 95 },
      { name: "大语言模型应用", level: 90 },
      { name: "RAG 架构设计", level: 88 },
      { name: "Prompt 调优", level: 92 },
    ],
  },
  {
    title: "产品通用能力",
    icon: Target,
    skills: [
      { name: "市场调研", level: 93 },
      { name: "竞品分析", level: 91 },
      { name: "PRD 撰写", level: 94 },
      { name: "数据分析", level: 89 },
    ],
  },
  {
    title: "设计能力",
    icon: PenTool,
    skills: [
      { name: "高保真原型", level: 92 },
      { name: "Mastergo", level: 90 },
      { name: "Figma / Axure", level: 91 },
      { name: "UI 设计规范", level: 88 },
    ],
  },
  {
    title: "技术理解",
    icon: Cpu,
    skills: [
      { name: "大模型原理", level: 85 },
      { name: "API 调用逻辑", level: 87 },
      { name: "AIGC 工具应用", level: 90 },
      { name: "vibe coding", level: 88 },
    ],
  },
];

const tools = [
  { name: "Mastergo", icon: PenTool },
  { name: "Axure", icon: Target },
  { name: "Figma", icon: Lightbulb },
  { name: "Visio", icon: LineChart },
  { name: "XMind", icon: Users },
  { name: "ProcessOn", icon: Presentation },
  { name: "墨刀", icon: PenTool },
  { name: "AI 编程工具", icon: Cpu },
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            专业技能
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border border-emerald-500/20 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl text-emerald-400">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-8 text-emerald-400 text-center">常用工具</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 border border-emerald-500/20 rounded-xl bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 flex flex-col items-center gap-3"
              >
                <tool.icon className="w-8 h-8 text-emerald-400" />
                <span className="text-gray-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
