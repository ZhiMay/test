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

#### 7. 限制微博的长度(app/models/micropost.rb,140 个字符)
    class Micropost < ApplicationRecord
      validates :content, length: { maximum:  140 }
    end
#### 8. 一个用户拥有多篇微博(User与Microposts)
    class User < ApplicationRecord
      has_many :microposts
    end
#### 9. 一篇微博属于一个用户(User与Microposts)
    class Micropost < ApplicationRecord
      belongs_to :user
      validates :content, length: { maximum: 140 }
    end
#### 10. 关系
    first_user = User.first
    first_user.microposts
    micropost = first_user.microposts.first
    micropost.user
#### 11. 验证微博内容存在性的代码
    class Micropost < ApplicationRecord
      belongs_to :user
      validates :content, length: { maximum: 140 },
                          presence: true
    end
#### 12. 为 User 模型添加存在性验证
    class User < ApplicationRecord
      has_many :microposts
      validates FILL_IN, presence: true # 把 FILL_IN 换成正确的代码
      validates FILL_IN, presence: true # 把 FILL_IN 换成正确的代码
    end
#### 13. 继承体系

User 和 Micropost 都（通过 < 符号）继承自ApplicationRecord 类，而这个类继承自 ActiveRecord::Base 类,继承 ActiveRecord::Base 类，模型对象才能与数据库通讯，才能把数据库中的列看做 Ruby 中的属性，等等.

UsersController 和 MicropostsController 都继承自 ApplicationController,通过继承ActionController::Base，Users 控制器和 Microposts控制器获得了很多功能。例如，处理模型对象的能力、过滤入站 HTTP 请求，以及把视图渲染成 HTML 的能力。Rails 应用中的所有控制器都继承自 ApplicationController，所以其中定义的规则会自动运用于应用中的每个动作。

#### 14.命名规则

脚手架中使用的名称与模型一样，是单数；而资源和控制器使用复数。因此，这里要使用 User，而不是 Users。

# 第 3 章(生成静态页面)

#### 1.生成 StaticPages 控制器

```
$rails generate controller StaticPages home help
```

**controller 命名**,StaticPages,使用驼峰式命名法,，创建的控制器文件名则是蛇底式static_pages_controller.rb,其实在命令行中也可以使用蛇底式：

```
$ rails generate controller static_pages ...
```
**撤销操作**,rails generate 命令还会自动修改routes.rb 文件,rails destroy 命令完成撤销操作.

    $ rails generate controller StaticPages home help
    $ rails destroy  controller StaticPages home help

会使用下面的命令生成模型：

    $ rails generate model User name:string email:string

这个操作可以使用下面的命令撤销：

    $ rails destroy model User

对模型来说，还涉及到撤销迁移，迁移通过下面的命令改变数据库的状态：

    $ rails db:migrate

我们可以使用下面的命令撤销前一个迁移操作：

    $ rails db:rollback

如果要回到最开始的状态，可以使用

    $ rails db:migrate VERSION=0

如下的规则(原理)

    get 'static_pages/home'

把发给 /static_pages/home 的请求映射到 StaticPages 控制器的 home 动作上,get 表明这个路由响应的是 GET 请求,GET 是最常用的 HTTP 操作，用于读取网络中的数据。它的意思是“读取一个网页”,访问 /static_pages/home 时，Rails 会在 StaticPages 控制器中寻找 home 动作，然后执行该动作，再渲染相应的视图,这里，home 动作是空的，所以访问 /static_pages/home 后只会渲染视图。

##### 2.  添加about pages

step 1: 添加 about 路由

    Rails.application.routes.draw do
      get  'static_pages/home'
      get  'static_pages/help'
      get  'static_pages/about'
      root 'application#hello'
    end

step 2: 在 StaticPages 控制器中添加 about 动作

    class StaticPagesController < ApplicationController

      def home
      end

      def help
      end

      def about
      end
    end

step 3: 添加about.html.haml 页面

# 第 5 章 完善布局

#### 1. 局部视图

    = render 'layouts/header'

这行代码会寻找一个名为 app/views/layouts/_header.html.haml的文件，执行其中的代码，然后把结果插入视图

#### 2. URL 和 具名路由

具名路由定义：

get 规则由

    get 'static_pages/help'

改成
    get  '/help', to: 'static_pages#help'

这种新形式把发给 /help 的 GET 请求交给StaticPages 控制器中的 help 动作处理。help_path -> '/help'(static_pages_help_path ->  '/static_pages/help')


   |  页面    |  URL  |   具名路由     |
   |  ---    | ----  |    ------     |
   |  首页    |  /    |  root_path    |
   |  关于    | /about |  about_path  |

#### 3.用户注册（Users 控制器）
```
$ rails generate controller Users new
```

# 第 6 章 用户建模

#### 1. Active Record 

Rails 为解决数据持久化提供的默认解决方案是，使用数据库存储需要长期使用的数据。与数据库交互默认使用的是Active Record。Active Record 提供了一系列方法，无需使用关系数据库所用的结构化查询语言（Structured Query Language，简称 SQL），[2]就能创建、保存和查询数据对象。Rails 还支持迁移（migration）功能，允许我们使用纯 Ruby 代码定义数据结构，而不用学习 SQL 数据定义语言（Data Definition Language，简称 DDL）。
[创建migration](http://blog.csdn.net/kucss/article/details/7252388)
[创建migration2](http://wiki.jikexueyuan.com/project/rails-practice/Chapter_4/4.1.html)

#### 2. 生成 User 模型
```
$ rails generate model User name:string email:string 

#注意，控制器名是复数，模型名是单数：控制器是 Users，而模型是 User，执行 rails g model 时，Rails就会顺便新增对应的 Migration 档案，
```
#### 3. User 模型的迁移文件（创建 users 表）

db/migrate/[timestamp]_create_users.rb
```
class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end

```
迁移文件中有一个名为 change的方法，定义要对数据库做什么操作。在代码清单 6.2 中，change 方法使用 Rails 提供的 create_table 方法在数据库中新建一个表，用于存储用户。create_table 方法可以接受一个块，有一个块变量 t（“table”）。在块中，create_table 方法通过 t 对象在数据库中创建 name 和 email 两个列，二者均为 string 类型。[4]表名是复数形式（users），不过模型名是单数形式（User），这是 Rails 在用词上的一个约定：模型表示单个用户，而数据库表中存储了很多用户。块中最后一行 t.timestamps 是个特殊的方法，它会自动创建 created_at 和 updated_at 两个列，分别记录创建用户的时间戳和更新用户的时间戳。Migrations（数据库迁移）可以让你用 Ruby 程序来修改数据库结构。
常用命令:
｀｀｀
rails g migrattion add #新增字段
rake db:migrate  #生成数据表
｀｀｀

#### 4.执行这个迁移
```
$ rails db:migrate
```
第一次运行 db:migrate 命令时会创建 db/development.sqlite3 文件，这是 SQLite [5]数据库文件,Rails 使用 db/ 目录中的 schema.rb 文件记录数据库的结构

```
rails g migration add_description_to_categories

rails db:migrate
```



















