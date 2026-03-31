import { createServer } from 'vite'

async function startViteServer() {
  // 创建 Vite 开发服务器
  const server = await createServer({
    // 任何合法的用户配置选项，加上 'mode' 和 'configFile'
    configFile: false,
    root: import.meta.dirname,
    server: {
      port: 3000,
      open: true,
    },
    plugins: [
      // 可以在这里添加自定义插件
    ],
  })

  // 启动服务器
  await server.listen()

  // 打印服务器 URL
  server.printUrls()

  // 绑定 CLI 快捷键
  server.bindCLIShortcuts({ print: true })

  // 监听服务器关闭事件
  server.on('close', () => {
    console.log('Vite server closed')
  })

  return server
}

// 启动服务器
startViteServer().catch((err) => {
  console.error('Failed to start Vite server:', err)
  process.exit(1)
})
