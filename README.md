
<p align="center">
  <b>网址导航</b>
  <p align="center">一个纯静态、支持SEO、在线编辑的强大导航网站，希望您会喜欢</p>
  <p align="center">内置收录多达 800+ 优质网站， 助您工作、学习和生活</p>
</p>

<br />
<br />

## 预览
**主题**

- [Sim 在线预览](https://imagine-nav.vercel.app/#/sim)
- [Light 在线预览](https://imagine-nav.vercel.app/#/light)
- [Side 在线预览](https://imagine-nav.vercel.app/#/side)
- [App 在线预览](https://imagine-nav.vercel.app/#/app)

## 特性
`导航站` 的理念就是做一款无需依赖后端服务既简单又方便，没有繁杂的配置和数据库等配置概念, 做到开箱即用。

- 🍰 内置 `800+` 实用网站。
- 🍰 支持 SEO。
- 🍰 完全纯静态, 提供自动化部署功能。
- 🍰 三叉树分类、结构清晰、分类清晰。
- 🍰 支持一个网站关联多个网址
- 🍰 颜值与简约并存，不再是杀马特时代。
- 🍰 完全开源，轻松定制化。
- 🍰 支持多种浏览模式，创新。
- 🍰 支持足迹记忆。
- 🍰 支持移动端浏览。
- 🍰 支持搜索查询。
- 🍰 支持自定义引擎搜索。
- 🍰 多款主题切换。
- 🍰 支持暗黑模式。
- 🍰 支持后台管理, 无需部署。
- 🍰 支持从Chrome书签导入


## 部署
#### 方式一(gh-pages免费)
1、Fork 当前项目。

2、[https://github.com/settings/tokens](https://github.com/settings/tokens) 申请 token, 勾选相应的权限, 如果不懂就全部选中，复制并保存Token。

3、https://github.com/用户名/nav/settings/secrets/actions/new  添加申请的token， name填写 `TOKEN` 大写。

4、打开 https://github.com/用户名/nav/actions 点击 `绿色按钮`

5、务必修改项目配置文件 [nav.config.ts](nav.config.ts)

6、5分钟后打开 https://用户名.github.io/nav 就能看到一个非常强大的导航网站了。

### 推荐方式二(Vercel免费)
和方式一的步骤一样，除了第4步不用。

具体使用跟着步骤走即可 [https://github.com/apps/vercel](https://github.com/apps/vercel)


注：如果想部署到自己的域名，那么以上教程同样适合，因为它提供了自动化部署， 之后可以通过 `CNAME` 或 `反向代理` 实现：

```conf
# nginx

server {
    listen       80;
    server_name  www.nav3.cn nav3.cn;

    location / {
        proxy_pass https://username.github.io/nav/;
    }
}
```

## 书签导入
支持从 Chrome 书签导入（WebKit内核应该都是支持的~），会自动检测满足三级分类的导航，其他一律设为未分类：

![](https://raw.githubusercontent.com/xjh22222228/public/gh-pages/nav/import.png)

浏览器打开 [chrome://bookmarks/](chrome://bookmarks/) 导出书签得到 html 文件, 接着从导航网站后台导入即可。

## 升级
在升级之前请备份根目录下的 `data` 文件夹和 `nav.config.ts`, 升级完后替换即可。

点击右上角 `Watch` 按钮第一时间跟踪版本升级。

## 开发构建
``` bash
# 下载
git clone --depth=1 https://github.com/xjh22222228/nav.git

cd nav

# 安装依赖
yarn

# 启动
yarn start

# 打包
yarn build
```

