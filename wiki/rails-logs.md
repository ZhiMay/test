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
# 第 2 章
#### 1. User 数据模型

用户有一个唯一的标识 id（integer 类型）、一个公开的名字 name（string 类型）和一个电子邮件地址 email（也是 string 类型）

    
