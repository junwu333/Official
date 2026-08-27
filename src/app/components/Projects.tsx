import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "哇超智能 · AI 数字人分身 + 智能体 AI Agent",
    company: "智变未来科技有限公司",
    period: "2025.8 - 2026.7",
    description:
      "面向 B 端企业客户提供低成本、高效率的数字人分身搭建及 C/B 端智能体服务，涵盖数字人形象生成、唇形驱动、语音克隆、知识库问答及多语言出海等场景，并探索东南亚市场商业化路径。",
    tags: ["AI 数字人", "AI Agent", "RAG", "多语言出海"],
    metrics: "训练成本节省 30%，累计创建 300+ 数字人，服务 10 家企业客户，响应准确率提升至 90%",
  },
  {
    title: "Yunboat · 智能 AI 翻译",
    company: "奇迅达科技有限公司",
    period: "2024.10 - 2025.7",
    description:
      "基于蓝牙设备资源与翻译市场前景，从翻译板块进行市场化布局。负责设备绑定、一键翻译、同声传译、AI 助手、面对面翻译、离线翻译等核心模块，支持定制化与多样化翻译场景。",
    tags: ["AI 翻译", "蓝牙设备", "同声传译", "0-1 落地"],
    metrics: "提供 200+ 种语言，3 家客户私有化定制，蓝牙翻译设备售卖 10w 台，场景准确率 90%",
  },
  {
    title: "KOLIBRI MALL · 电商系统",
    company: "祺祾科技有限公司",
    period: "2023.10 - 2024.10",
    description:
      "面向马来西亚市场打造的电商系统，通过盲盒抽奖、转盘抽奖、许愿抽奖等方式吸引用户。负责商品、订单、用户管理、抽奖管理、代理商等核心模块的整体规划与迭代。",
    tags: ["跨境电商", "抽奖营销", "代理商体系"],
    metrics: "优化用户体验提升转化率，改善代理商数据把控与用户管理能力",
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            精选项目
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-12" />
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-1 gap-8 items-center p-8 border border-emerald-500/20 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl text-emerald-400">{project.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                      <span>{project.company}</span>
                      <span className="text-emerald-500/70">{project.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm border border-emerald-500/30 rounded-full bg-emerald-500/5 text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-emerald-500/20">
                    <p className="text-sm text-gray-400 mb-4">
                      <span className="text-emerald-400">成果：</span>
                      {project.metrics}
                    </p>
                    
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 rounded-lg bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-400 transition-all duration-300">
                        <ExternalLink className="w-4 h-4" />
                        查看详情
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 rounded-lg bg-emerald-500/5 hover:bg-emerald-500/20 text-emerald-400 transition-all duration-300">
                        <Github className="w-4 h-4" />
                        案例分析
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
