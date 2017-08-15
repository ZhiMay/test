# 第 1 章
#### 1.Rails 路由文件（config/routes.rb)(路由在控制器之前,决定浏览器发给应用的请求由哪个动作处理)
    ##定义跟路由,修改默认的首页
    ##root 'application#hello'
    root 'controller_name#action_name'

#### 2. 在 ApplicationController 中添加 hello 动作app/controllers/application_controller.rb
    class ApplicationController < ActionController::Base
      protect_from_forgery with: :exception
      def hello
        render html: "hello, world!"
      end
    end
# 第 2 章(用脚手架创建应用)
#### 1. User 数据模型

用户有一个唯一的标识 id（integer 类型）、一个公开的名字 name（string 类型）和一个电子邮件地址 email（也是 string 类型）

#### 2. Users 资源

要实现设定的 User 数据模型，还会为它创建Web界面。二者结合起来就是一个Users资源。“资源”的意思是把用户设想为对象，可以通过 HTTP 协议在网页中创建（create）、读取（read）、更新（update）和删除（delete）。

#### 3. rails generate 命令就可以使用 Rails 的脚手架

传给 scaffold 的参数是资源名的单数形式（这里是User),后面可以再跟着一些可选参数，指定数据模型中的字段：
    rails generate scaffold User name:string email:string

#### 4. 迁移数据库(使用新的 User 数据模型更新数据库)
    rails db:migrate
#### 5. Micropost 模型

只要一个 id 和表示微博内容的 content（text 类型）字段,user_id 存储微博的属主(这个字段把微博和用户关联（associate）起来),即可
#### 6. Microposts 资源(脚手架创建)
    rails generate scaffold Micropost content:text user_id:integer
    rails db:migrate





