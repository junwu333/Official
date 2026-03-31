import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "智能数据分析平台",
    description: "为企业提供实时数据分析和可视化解决方案，帮助决策者快速洞察业务趋势。",
    tags: ["SaaS", "数据分析", "AI"],
    image: "https://images.unsplash.com/photo-1708577907839-1240466aee53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9kdWN0JTIwZGVzaWdufGVufDF8fHx8MTc3NDYwNTk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: "用户增长 200%，客单价提升 150%",
  },
  {
    title: "企业协作工具",
    description: "一站式团队协作平台，整合项目管理、文档协作和即时通讯功能。",
    tags: ["协作工具", "B2B", "项目管理"],
    image: "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDU2NDM3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: "日活用户 10万+，付费转化率 25%",
  },
  {
    title: "金融风控系统",
    description: "基于机器学习的智能风控平台，实时监测交易风险，保障资金安全。",
    tags: ["金融科技", "风控", "机器学习"],
    image: "https://images.unsplash.com/photo-1591201417943-d82df759897d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2MDU5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    metrics: "风险识别准确率 98.5%",
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
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 border border-emerald-500/20 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-xl border border-emerald-500/30"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl text-emerald-400">{project.title}</h3>
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
