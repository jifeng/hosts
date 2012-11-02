hosts
=====

##概况

对各个服务进行心跳监控，看那些可以调用


##安装

    npm install hosts
     
##使用
    var hosts = require('hosts');
    var client  = hosts.create({
      'heartbeat'   : 5,//心跳检测时间间隔
      'pingurl'   : '/'//检查页面
    });
    client.bind('127.0.0.1', 33748).bind('127.0.0.1', 33749).bind('127.0.0.1');

    ......
    var onlineHost = client.getOnlineHosts();//得到当时的可用的服务地址
    //数据类型：[ { host: '127.0.0.1', port: 33748 } ]
    


##to do
现仅支持http协议，之后会慢慢增加其他协议的支持