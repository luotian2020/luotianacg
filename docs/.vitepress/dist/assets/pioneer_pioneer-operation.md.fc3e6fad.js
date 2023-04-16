import{_ as a,c as s,o as e,N as p}from"./chunks/framework.5dab9c2c.js";const g=JSON.parse('{"title":"信学先锋部署流程","description":"","frontmatter":{},"headers":[],"relativePath":"pioneer/pioneer-operation.md"}'),n={name:"pioneer/pioneer-operation.md"},l=p(`<h1 id="信学先锋部署流程" tabindex="-1">信学先锋部署流程 <a class="header-anchor" href="#信学先锋部署流程" aria-label="Permalink to &quot;信学先锋部署流程&quot;">​</a></h1><h2 id="_1-镜像打包" tabindex="-1">1.镜像打包 <a class="header-anchor" href="#_1-镜像打包" aria-label="Permalink to &quot;1.镜像打包&quot;">​</a></h2><p>1.请确保自己本地的镜像中有java-pioneer:1.0，如果无，则执行在所给的Dockerfile下执行</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java-pioneer:</span><span style="color:#F78C6C;">1.0</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416102216112.png" alt="image-20230416102216112"></p><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416101955392.png" alt="image-20230416101955392"></p><p>2.代码打包成jar后在Terminal下进行镜像打包</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pioneer:1.0.0.2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre></div><p>其中pioneer:1.0.0.2 为镜像标签。</p><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416102653754.png" alt="image-20230416102653754"></p><p>查看新生成的镜像</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker images</span></span></code></pre></div><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416102804780.png" alt="image-20230416102804780"></p><p>进行镜像导出操作</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker save daebe4416c37 -o F:\\Users\\27317\\Desktop\\pioneer-1.0.0.2.tar pioneer:1.0.0.2</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">daebe4416c37：镜像id,</span></span>
<span class="line"><span style="color:#A6ACCD;">F:\\Users\\27317\\Desktop\\pioneer-1.0.0.2.tar: 导出位置</span></span>
<span class="line"><span style="color:#A6ACCD;">pioneer:1.0.0.2 ：导出镜像文件的标签</span></span></code></pre></div><h2 id="_2-服务器部署" tabindex="-1">2. 服务器部署 <a class="header-anchor" href="#_2-服务器部署" aria-label="Permalink to &quot;2. 服务器部署&quot;">​</a></h2><p>1.上传服务器至/tmp文件夹</p><p>2.加载镜像</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">load</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/pioneer-1.0.0.2.tar</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/tmp/pioneer-1.0.0.2.tar  为镜像上传位置</span></span></code></pre></div><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416104055401.png" alt="image-20230416104055401"></p><p>3.修改tmp文件夹下docker-compose.yml文件</p><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416104456723.png" alt="image-20230416104456723"></p><p>将文件复制到/dockerjar/pioneer文件夹下</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/dockerjar/pioneer/docker-compose.yml</span></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/docker-compose.yml</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/dockerjar/pioneer/docker-compose.yml</span></span></code></pre></div><p>之后进行更新</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cd /dockerjar/pioneer</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker-compose down</span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d</span></span></code></pre></div><p><img src="https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416105220743.png" alt="image-20230416105220743"></p><h2 id="_3-问题集锦" tabindex="-1">3.问题集锦 <a class="header-anchor" href="#_3-问题集锦" aria-label="Permalink to &quot;3.问题集锦&quot;">​</a></h2><h3 id="_3-1-在进行导出excel文件夹时日志报错-空指针" tabindex="-1">3.1 在进行导出excel文件夹时日志报错（空指针） <a class="header-anchor" href="#_3-1-在进行导出excel文件夹时日志报错-空指针" aria-label="Permalink to &quot;3.1 在进行导出excel文件夹时日志报错（空指针）&quot;">​</a></h3><p>解决方案：请将java替换为java-pioneer:1.0</p><p>java-pioneer:1.0 Dockerfile</p><div class="language-dockerfile"><button title="Copy Code" class="copy"></button><span class="lang">dockerfile</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">FROM java:8-jre-alpine</span></span>
<span class="line"><span style="color:#A6ACCD;"># Install cURL</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN echo -e &quot;https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/main\\n\\</span></span>
<span class="line"><span style="color:#A6ACCD;">https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/community&quot; &gt; /etc/apk/repositories</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">RUN apk --update add curl bash ttf-dejavu &amp;&amp; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">      rm -rf /var/cache/apk/*</span></span></code></pre></div><p>原因：</p><p>openjdk：8-jre-alpine中无java-font配置</p><h2 id="_3-2-内网可以来访问-外网不可以访问" tabindex="-1">3.2 内网可以来访问，外网不可以访问 <a class="header-anchor" href="#_3-2-内网可以来访问-外网不可以访问" aria-label="Permalink to &quot;3.2 内网可以来访问，外网不可以访问&quot;">​</a></h2><p>这个大概率问题为多个网卡导致的，需要禁用网卡。</p><p>使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ip addr</span></span></code></pre></div><p>命令查看网卡配置。</p><p>使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ifconfig 网卡名 down</span></span></code></pre></div><p>禁用网卡，需要试一下是哪个出问题了，不过一般都可以从当前up Group看出，注意不要down掉 ens18之类的网卡;也不要动iptables.</p>`,47),o=[l];function t(c,i,r,d,C,m){return e(),s("div",null,o)}const u=a(n,[["render",t]]);export{g as __pageData,u as default};
