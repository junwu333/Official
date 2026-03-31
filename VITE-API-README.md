# Vite JavaScript API 使用指南

Vite 的 JavaScript API 是完全类型化的，推荐使用 TypeScript 或者在 VS Code 中启用 JS 类型检查来利用智能提示和类型签名。

## 基本用法

### 创建开发服务器

```typescript
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
```

## 重要注意事项

1. **环境变量**：当在同一个 Node.js 进程中使用 `createServer` 和 `build` 时，两个函数都依赖于 `process.env.NODE_ENV` 才可正常工作，而这个环境变量又依赖于 `mode` 配置项。为了避免行为冲突，请在使用这两个 API 时为 `process.env.NODE_ENV` 或者 `mode` 配置字段设置参数值 `development`，或者你也可以生成另一个子进程，分别运行这两个 API。

2. **中间件模式与 WebSocket 代理配置**：当使用中间件模式与 WebSocket 代理配置时，父 http 服务器应该在 `middlewareMode` 中提供，以正确绑定代理。

## 示例文件

本项目中包含一个示例文件 `src/vite-server-example.ts`，展示了如何使用 Vite 的 JavaScript API 来创建和启动开发服务器。

### 运行示例

```bash
# 安装依赖
pnpm install

# 运行示例
node --loader ts-node/esm src/vite-server-example.ts
```

## 配置选项

`createServer` 函数接受一个 `InlineConfig` 类型的参数，其中包含以下主要配置选项：

- `configFile`：是否使用配置文件，默认为 `true`
- `root`：项目根目录
- `server`：服务器相关配置，如端口、主机等
- `plugins`：自定义插件
- `mode`：运行模式，如 `development`、`production` 等

## 服务器方法

创建的服务器实例具有以下主要方法：

- `listen()`：启动服务器
- `printUrls()`：打印服务器 URL
- `bindCLIShortcuts()`：绑定 CLI 快捷键
- `close()`：关闭服务器

## 类型签名

```typescript
async function createServer(inlineConfig?: InlineConfig): Promise<ViteDevServer>
```

## 更多信息

- [Vite 官方文档](https://vite.dev/)
- [Vite JavaScript API 文档](https://vite.dev/guide/api-javascript.html)
