> 起因:获得了腾讯云服务器,想尝试在服务器上部署项目

因为有过Ubuntu系统使用经验 所以选择了Ubuntu Server 16.04 (写这篇文的时候使用的就是Ubuntu 16.04LTS + VSCode的配置)

第一次用云服务器 都不知道账号密码需要供应商提供的...

登录一般是用浏览器(推荐谷歌chrome) 

    ubuntu@VM-0-7-ubuntu:~$

不过如果你是使用linux系统的话推荐

    ssh 主机名@ip

    ssh ubuntu@122.152.196.34

这样直接就可以在自己电脑的终端操作服务器了

>(不用忍受浏览器操作不能复制 粘贴麻烦 滚动下面看不到之前的信息 这些缺点了 )

主目录就叫Ubuntu 

习惯先建一个文件夹放项目

    sudo mkdir myspace

云服务器获取管理员权限貌似不用再输密码

## 最重要的node搞起来

    apt-get install nodejs //注意不是node
    apt-get install npm

版本太古老了...是4.10.X 而且命令是nodejs...

然后搞了半天(百度 Ubuntu server 装 nodejs) 下源代码编译 make 啦 加地址啦 基本都弄了一遍 

出了各种各样的问题 npm找不到啦 nodejs升不了级啦

npm 5.x.x版本的buffer.alloc以前版本的node不认识啦

最后一次一次删了重下 建软连接 蓝瘦 

解决方法 在npm好用的时候 全局安装 n 这个插件 

    sudo npm install n -g

然后通过n模块安装指定版本的nodejs
>n模块更多介绍请参考官方文档[https://www.npmjs.com/package/n]

    //安装官方最新版本
    sudo n latest
    //安装官方稳定版本
    sudo n stable
    //安装官方最新LTS版本
    sudo n lts

再升级npm

    sudo npm install npm@latest -g

避免了上述buffer.alloc这个问题

结果  

    ubuntu@VM-0-7-ubuntu:~$ node -v
    v8.4.0
    ubuntu@VM-0-7-ubuntu:~$ npm -v
    5.3.0
    //OK了

在下的项目是看的那本 Pro Angular 运动商店demo 自己略做了一些变化的 金品居点餐系统V1.0

大致是

    myspce
    -package.json
    -bower.json
    -.bowerrc //改变bower默认模块文件夹
    --node_modules //npm下载的依赖模块
    --theStore //项目代码
    
        admin.html  
        app.dpd  
        app.html  
        nohup.out  
        server.js

        --components:
        angular  angular-resource  angular-route  bootstrap  jquery

        --controllers:
        adminControllers.js        checkoutController.js      sportsStore.js
        adminProductController.js  customFilters.js
        cart.js                    productListControllers.js

        --data:
        -deployd.0  -deployd.ns  local.0  local.ns  mongod.lock

        --public:
        index.html

        --resources:
        orders  products  users

        --views:
        adminLogin.html   adminProducts.html    placeOrder.html
        adminMain.html
        adminOrders.html  checkoutSummary.html  
        thankYou.html    
            --cart                               productList.html
        
因为已经在自己的系统上运行与测试过 所以直接打包发到服务器上

    scp /home/shisi/full.tar.gz 主机名@ip:/home/ubuntu/mywork.tar.gz

解压

    tar -xzvf file.tar.gz 

然后就开始把需要的插件再装一装

    sudo npm install -d

主要是deployd这个 还需要把mongoDB装一哈

bower装的主要是前端用的 打包过来了..见前面的目录components文件夹

(感觉这操作有点蠢,压缩包那200M应该有好多是这个的)

基本就可以在服务端运行了

在自己的电脑上时候启动这个项目是要先 

    dpd -p 5500 ./theStore/app.dpd

然后启动服务器 node ./theStore/server.js

会开两个终端在弄 但服务器一般在浏览器里不让起好几个窗口的吧?(大概)

开始研究怎么让他们在后台运行

server.js比较简单 node的那个forever很好用

    $ sudo npm install forever -g   #安装
    $ forever start app.js          #启动
    $ forever stop app.js           #关闭
    $ forever start -l forever.log -o out.log -e err.log app.js   #输出日志和错误

bower的使用可以看看[https://segmentfault.com/a/1190000008697197]

关于项目里遇到的其他几个小问题 有时间再总结了