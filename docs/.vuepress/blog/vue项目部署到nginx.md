# vue项目部署到nginx

## 一.vue项目打包

1.  **修改config/index.js（注意一定是**build**里面的，下面**dev**中也有这个配置）**

    ![image-20200617110222162](C:\Users\熙\AppData\Roaming\Typora\typora-user-images\image-20200617110222162.png)

    如果用到了图标还需更改

    ![image-20200617110451275](C:\Users\熙\AppData\Roaming\Typora\typora-user-images\image-20200617110451275.png)

![image-20200617110513000](C:\Users\熙\AppData\Roaming\Typora\typora-user-images\image-20200617110513000.png)

**2.打包成dist文件**

​		**1)命令行执行**

```shell
npm run build
```

​		**2)这时我们就可以把生成的dist文件扔到服务器就可以了**

​		**3)可以使用xshell进行远程连接，xftp进行文件传输**

**3.配置nginx**

​		**1)使用docker下载nginx的镜像来部署**

```shell
docker pull nginx:alpine
```

​		**2)先创建挂载目录**

```shell
mkdir -p /docker_volume/nginx/html
mkdir -p /docker_volume/nginx/conf
```

​		**3)运行容器**

```shell
docker run -id --name=nginx /docker nginx:alpine
```

​		**4)复制nginx的default.conf**

```shell
docker cp nginx:/etc/nginx/conf.d/default.conf /docker_volume/nginx/conf
```

​		**5)结束上面的nginx**

```shell
docker stop nginx
docker rm nginx
```

​		**6)重新创建nginx容器,并添加映射**

```shell
docker run -id --name=nginx -p 8080:80 -v /docker_volume/nginx/html:/usr/share/nginx/html -v /docker_volume/nginx/conf:/etc/nginx/conf.d nginx:alpine
```

​		**7)将dist文件夹放到挂载目录中**

​		**8)可以将dist文件夹改名**

​		**9)在浏览器访问**

```
http://宿主机IP地址/dist文件夹改名后的名称
```

