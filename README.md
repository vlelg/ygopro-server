## ygopro-server
一个YGOPro服务器。

现用于[萌卡](https://mycard.moe/)和[YGOPRO 233服](http://mercury233.me/ygosrv233/)。

###支持功能
* Linux上运行
* Windows上运行
* 玩家输入同一房名约战
* 玩家不指定房间名，自动匹配在线玩家
* 房间列表json
* 广播消息
* 召唤台词
* 先行卡一键更新
* Windbot在线AI
* 萌卡用户登陆

###不支持功能
* 在线聊天室

###使用方法
* 可参考[wiki](https://github.com/mercury233/ygopro-server/wiki)安装
* 手动安装：
 * 安装修改后的YGOPro服务端：https://github.com/mycard/ygopro/tree/server
  * `git clone https://github.com/mycard/ygopro-server.git`
  * `cd ygopro-server`
  * `npm install`
* 将`config.json`复制为`config.user.json`并进行修改
 * `port`为你想要的端口
 * `modules.stop`为文本时，表示服务器关闭
 * ~~更多选项参见wiki~~
* `node ygopro-server.js`即可运行
* 简易的控制台在 http://mercury233.me/ygosrv233/dashboard.html

###高级功能
* 待补充说明
* 简易的先行卡更新控制台在 http://mercury233.me/ygosrv233/pre-dashboard.html

### 开发计划
* 重做CTOS和STOC部分
* 模块化附加功能
 * 房名代码
 * 随机对战
 * 召唤台词
 * WindBot
 * 云录像
 * 比赛模式
 * 先行卡更新
* 用户账号系统和管理员账号系统
* 云录像更换存储方式

### TODO
* refactoring CTOS and STOC
* change features to modules
 * room name parsing
 * random duel
 * summon dialogues
 * WindBot
 * cloud replay
 * tournament mode
 * expansions updater
* user and admin account system
* new database for cloud replay
