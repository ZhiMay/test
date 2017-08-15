# 步骤
#### 1.Rails 路由文件（config/routes.rb)(路由在控制器之前,决定浏览器发给应用的请求由哪个动作处理)
    ##定义跟路由,修改默认的首页
    root 'controller_name#action_name'
    
#### 2. 在 ApplicationController 中添加 hello 动作app/controllers/application_controller.rb
    class ApplicationController < ActionController::Base
      protect_from_forgery with: :exception
      def hello
        render html: "hello, world!"
      end
    end
    
