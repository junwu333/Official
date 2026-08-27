import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "智变未来科技有限公司",
    position: "AI 产品经理",
    period: "2025.8 - 2026.7",
    description:
      "负责哇超智能（AI 数字人分身 + 智能体 AI Agent）产品线，主导平台从 0 到 1 搭建，面向 B 端企业提供数字人分身搭建及智能体服务。",
    achievements: [
      "主导数字人分身搭建系统、智能体（AI Agent）平台两条核心产品线，完成目标客户需求调研与竞品分析",
      "协同算法团队建立模型效果评估体系，主导 Prompt 调优、知识库结构设计与 RAG 架构产品化落地，智能体响应准确率提升至 90%",
      "完成 10 种语言的产品适配，成功拿下缅甸合作企业，打开东南亚市场；训练成本较行业平均节省 30%，累计创建 300+ 数字人分身",
    ],
  },
  {
    company: "奇迅达科技有限公司",
    position: "产品经理",
    period: "2024.10 - 2025.7",
    description:
      "负责 Yunboat（智能 AI 翻译）产品，基于蓝牙设备资源进行市场化布局，从需求调研到功能迭代全流程把控。",
    achievements: [
      "负责设备绑定、一键翻译、同声传译、AI 助手、面对面翻译、离线翻译等核心模块，提供 200+ 种语言",
      "主导 0 到 1 的设计体系，制定颜色、字体、组件规范，编写项目需求文档",
      "功能上线后有 3 家客户进行私有化定制，蓝牙设备和翻译搭配售卖 10w 台，场景准确率提高 90%、延迟＜200ms",
    ],
  },
  {
    company: "祺祾科技有限公司",
    position: "产品经理",
    period: "2023.10 - 2024.10",
    description:
      "负责 KOLIBRI MALL（电商系统）项目，面向马来西亚市场打造跨境电商平台，同时参与医护平台、音频项目管理。",
    achievements: [
      "负责商品、订单、用户管理、抽奖管理、代理商等核心模块，通过盲盒/转盘/许愿抽奖方式吸引用户",
      "优化用户转化率与代理商仪表盘、用户管理功能，提高代理商对数据的把控和对用户的管理",
      "组织针对不同部门的使用手册培训，确保系统的稳定运行和良好的用户体验",
    ],
  },
  {
    company: "湖北耀天信息技术有限公司",
    position: "产品助理",
    period: "2022.2 - 2023.7",
    description:
      "负责数码 WMS（数码仓储管理系统）产品，自研替代租用系统旺店通，实现仓库的针对性自动化管理。",
    achievements: [
      "负责工作台、业务、入库、出库、库存等模块，完成需求调研、业务流程图绘制与项目立项书输出",
      "通过实时仓库作业、库存预警与采购功能实施降低库存管理成本，入库/出库发货效率提升 30%",
      "通过有效期预警与养护计划大屏面板提醒，将数码报损率在原有基础上降低 4%",
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
