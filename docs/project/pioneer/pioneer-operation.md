# 信学先锋部署流程

## 1.镜像打包

1.请确保自己本地的镜像中有java-pioneer:1.0，如果无，则执行在所给的Dockerfile下执行

```shell
docker build -t java-pioneer:1.0 .
```

![image-20230416102216112](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416102216112.png)



![image-20230416101955392](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416101955392.png)

2.代码打包成jar后在Terminal下进行镜像打包

```shell
docker build  -t pioneer:1.0.0.2 . 
```

其中pioneer:1.0.0.2 为镜像标签。

![image-20230416102653754](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416102653754.png)

查看新生成的镜像

```
docker images
```

![image-20230416102804780](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416102804780.png)

进行镜像导出操作

```
docker save daebe4416c37 -o F:\Users\27317\Desktop\pioneer-1.0.0.2.tar pioneer:1.0.0.2
```

```
daebe4416c37：镜像id,
F:\Users\27317\Desktop\pioneer-1.0.0.2.tar: 导出位置
pioneer:1.0.0.2 ：导出镜像文件的标签
```

## 2. 服务器部署

1.上传服务器至/tmp文件夹

2.加载镜像

```shell
docker load -i /tmp/pioneer-1.0.0.2.tar
```

```
/tmp/pioneer-1.0.0.2.tar  为镜像上传位置
```

![image-20230416104055401](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416104055401.png)

3.修改tmp文件夹下docker-compose.yml文件

![image-20230416104456723](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416104456723.png)

将文件复制到/dockerjar/pioneer文件夹下

```shell
sudo rm /dockerjar/pioneer/docker-compose.yml
```

```shell
sudo cp /tmp/docker-compose.yml  /dockerjar/pioneer/docker-compose.yml
```

之后进行更新

```
cd /dockerjar/pioneer
```

```
docker-compose down
```

```
docker-compose up -d
```

![image-20230416105220743](https://gitee.com/luotian2020/luotianwiki-pic/raw/master/docs/image-20230416105220743.png)

## 3.问题集锦

### 3.1 在进行导出excel文件夹时日志报错（空指针）

解决方案：请将java替换为java-pioneer:1.0

java-pioneer:1.0 Dockerfile

```dockerfile
FROM java:8-jre-alpine
# Install cURL
RUN echo -e "https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/main\n\
https://mirror.tuna.tsinghua.edu.cn/alpine/v3.4/community" > /etc/apk/repositories

RUN apk --update add curl bash ttf-dejavu && \
      rm -rf /var/cache/apk/*
```

原因：

openjdk：8-jre-alpine中无java-font配置

## 3.2 内网可以来访问，外网不可以访问

这个大概率问题为多个网卡导致的，需要禁用网卡。

使用

```
ip addr
```

命令查看网卡配置。

使用

```
ifconfig 网卡名 down 
```

禁用网卡，需要试一下是哪个出问题了，不过一般都可以从当前up Group看出，注意不要down掉 ens18之类的网卡;也不要动iptables.