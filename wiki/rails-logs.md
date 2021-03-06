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
#### 5.创建用户对象

```
#不想修改数据库中的数据，所以要在沙盒（sandbox）模式中启动控制台：
$ rails console --sandbox 
user = User.new(name: "Michael Hartl", email: "mhartl@example.com")

user = User.new(name: "Michael Hartl", email: "mhartl@example.com")
user.save #如果保存成功，save 方法返回 true，否则返回 false

虽然一般习惯把创建和保存分成如上所示的两步完成，不过 Active Record 也允许我们使用 User.create 方法把这两步合成一步：
User.create(name: "A Nother", email: "another@example.org") 
#User.create 的返回值不是 true 或 false
#create 的逆操作是destroy：foo.destroy,返回值是对象,
User.find(3)
User.find_by(email: "mhartl@example.com")

```
#### 6.更新用户对象 

```
>> user           # 只是为了查看 user 对象的属性是什么
=> #<User id: 1, name: "Michael Hartl", email: "mhartl@example.com",
created_at: "2016-05-23 19:05:58", updated_at: "2016-05-23 19:05:58">
>> user.email = "mhartl@example.net"
=> "mhartl@example.net"
>> user.save
=> true
```
注意，如果想把改动写入数据库，必须执行最后一个方法。我们可以执行 reload 命令来看一下没保存的话是什么情况。reload 方法会使用数据库中的数据重新加载对象：

```
>> user.email
=> "mhartl@example.net"
>> user.email = "foo@bar.com"
=> "foo@bar.com"
>> user.reload.email
=> "mhartl@example.net"
```
更新数据的第二种常用方式是使用 update_attributes 方法

```
>> user.update_attributes(name: "The Dude", email: "dude@abides.org")
=> true
>> user.name
=> "The Dude"
>> user.email
=> "dude@abides.org"
```
#### 7.name 添加存在性验证

```
class User < ApplicationRecord
  validates :name, presence: true #validates(:name, presence: true)
end
#user.errors.full_messages
```

#### 8.计算密码哈希值

安全密码机制基本上用一个 Rails 方法即可实现，这个方法是 has_secure_password:

```
class User < ApplicationRecord
  .
  .
  .
  has_secure_password
end
```

#### 9.添加字段（迁移命名为add_password_digest_to_users）
要创建一个适当的迁移文件，添加 password_digest 列，迁移的名字随意，不过最好以 to_users 结尾，因为这样 Rails 会自动生成一个向 users 表添加列的迁移

```
rails g migration add_password_digest_to_users password_digest:string
```
#### 10.单独生成migration 文件


```
$ rails g migration CreateTestss name:string part_number:string
#生成migration文件
class CreateTestss < ActiveRecord::Migration[5.0]
  def change
    create_table :testsses do |t|
      t.string :name
      t.string :part_number
      ＃加上这个t.timestamps
    end
  end
end
＃运行rails db:migrate
```
# 第 7 章 注册

#### 1. 在网站布局中添加一些调试信息

app/views/layouts/application.html.erb

```
<%= render 'layouts/footer' %>
<%= debug(params) if Rails.env.development? %>
```
#### 2.在 Users 控制器中添加 debugger 方法:
Rails 服务器的输出中会显示 byebug 提示符,若想退出 byebug，继续执行应用，可以按 Ctrl-D 键。把 show 动作中的 debugger 方法删除

```
def show
  @user = User.find(params[:id])
  debugger
end
```
```
(byebug)
```
我们可以把它当成 Rails 制台，在其中执行命令，查看应用的状态：
```
(byebug) @user.name
"Example User"
```
# 第 8 章 基本登录功能

#### 1. Sessions 控制器

会话和 Users 资源不同，Users 资源（通过 User 模型）使用数据库存储数据，而会话使用 cookie。所以，登录功能的大部分工作是实现基于 cookie 的身份验证机制。

登录和退出功能由 Sessions 控制器中相应的 REST 动作处理：登录表单在 new 动作中处理（本节的内容），登录的过程是向 create 动作发送 POST 请求（8.2 节），退出则是向 destroy 动作发送 DELETE 请求（8.3 节）。（HTTP 请求与 REST 动作之间的对应关系参见表 7.1。）

Users 资源使用特殊的 resources 方法自动获得 REST 式路由（代码清单 7.3），而 Sessions 资源则只能使用具名路由，处理发给 /login 地址的 GET 和 POST 请求，以及发给 /logout 地址的 DELETE 请求，如代码清单 8.2 所示（删除了 rails generate controller 生成的无用路由）。

```
 rails generate controller Sessions new
```

```
=form_for(@user) do |f|

end
```

登录表单和注册表单之间的主要区别是，会话不是模型，因此不能创建类似 @user 的变量。所以，构建登录表单时，我们要为 form_for 稍微多提供一些信息。form_for(@user) 的作用是让表单向 /users 发起 POST 请求。对会话来说，我们需要指明资源的名称以及相应的 URL：[2]


```
form_for(:session, url: login_path)
```
提交登录表单后会生成一个 params 散列，其中 params[:session][:email] 和 params[:session][:password] 分别对应电子邮件地址和密码字段。

＊＊＊ 使用 render 方法）与redirect_to 的重定向不同，不算是一次新请求，

**  User.find(session[:user_id]) 与 User.find_by(id: session[:user_id])，如果用户 ID 不存在，find 方法会抛出异常。在用户的资料页面可以使用这种行为，因为必须有相应的用户才能显示他的信息。但 session[:user_id] 的值经常是 nil（表示用户未登录），所以我们要使用 create 动作中通过电子邮件地址查找用户的 find_by 方法，通过 id 查找用户：User.find_by(id: session[:user_id])，如果 ID 无效，find_by 方法返回 nil，而不会抛出异常。因此，我们可以按照下面的方式定义 current_user 方法：

```
def current_user
  User.find_by(id: session[:user_id])
end
```

* = link_to "Profile", current_user

* = link_to "Profile", user_path(current_user)

我们可以直接链接到用户对象，Rails 会自动把 current_user 转换成 user_path(current_user)

#### 2.在 application.js 中引入 Bootstrap JavaScript 库
app/assets/javascripts/application.js

```
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
```





























