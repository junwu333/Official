import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "科技独角兽公司",
    position: "高级产品经理",
    period: "2021 - 至今",
    description: "负责企业级SaaS产品线，带领8人产品团队，推动产品从0到1实现百万级用户规模。",
    achievements: [
      "主导产品战略规划，实现年度营收目标150%",
      "优化产品架构，将用户留存率提升40%",
      "建立数据驱动的产品决策体系，提高团队效率30%",
    ],
  },
  {
    company: "领先互联网公司",
    position: "产品经理",
    period: "2019 - 2021",
    description: "负责B端协作工具产品，从功能设计到上线全流程把控，成功打造行业标杆产品。",
    achievements: [
      "设计并上线10+核心功能模块，获得业界好评",
      "推动产品付费转化率从15%提升至25%",
      "协调跨部门资源，确保项目按时交付",
    ],
  },
  {
    company: "创业公司",
    position: "产品经理 / 产品负责人",
    period: "2017 - 2019",
    description: "作为首位产品经理，参与公司从0到1的产品建设，完成多轮融资。",
    achievements: [
      "独立完成产品从概念到MVP的全流程设计",
      "在有限资源下实现产品快速迭代和验证",
      "帮助公司获得A轮融资，估值达1亿",
    ],
  },
  {
    company: "大型互联网公司",
    position: "产品助理",
    period: "2016 - 2017",
    description: "参与多个产品线的需求分析和设计工作，快速成长为独当一面的产品经理。",
    achievements: [
      "协助完成5+产品功能模块的设计和落地",
      "学习并掌握完整的产品管理方法论",
      "获得年度优秀新人奖",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
            工作经历
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-green-500 to-emerald-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 top-6 w-5 h-5 bg-emerald-500 rounded-full border-4 border-black"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />

                <div className="p-8 border border-emerald-500/20 rounded-2xl bg-black/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl text-emerald-400 mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm text-emerald-400 mb-3">主要成就：</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-gray-300">
                          <span className="text-emerald-500 mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
