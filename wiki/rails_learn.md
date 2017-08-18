## sequel pro 数据库软件 
 [sequel pro]( https://www.sequelpro.com/)
[rails list](http://noobonrails.blogspot.jp/2007/02/actsaslist-makes-lists-drop-dead-easy.html)
[rails list 2](https://c9.io/tek_knowledge/acts_as_list)
[acts_as_list](https://github.com/swanandp/acts_as_list)

gco Gemfile.lock
bi
＃ 安装gem 包
  1.  在对应的gemfile 填写对应的gem 包
  2.  bundle install
  3.  重启server

## ruby block

[ruby中的block和yield](https://haoluobo.com/2011/07/ruby-block-yield/)

代码块(Blocks)是指一块代码，用大括号({})或者do…end来标明起始和结束，代码块只能跟在方法调用后边。
yield语句：在方法内部使用yield语句来占位，当方法执行到yield时，实际执行的是调用方法时跟在后边的的代码块。
|x|：变量用一对’|’包裹，在代码块中使用，用于接受yield传递的参数。yield后跟的参数会传递给代码块中用| |标志的变量。
    def x
      p "=start"
      yield 'a'
      yield 'b'
      p "=end"
    end
     
    x do |a|
      p "hello", a
    end

程序的运行结果为：

    "=start"
    "hello"
    "a"
    "hello"
    "b"
    "=end"

# ruby hash 数据类型
    >> user = {}                          # {} 是一个空散列
    => {}
    >> user["first_name"] = "Michael"     # 键为 "first_name"，值为 "Michael"
    => "Michael"
    >> user["last_name"] = "Hartl"        # 键为 "last_name"，值为 "Hartl"
    => "Hartl"
    >> user["first_name"]                 # 获取元素的方式与数组类似
    => "Michael"
    >> user                               # 散列的字面量形式
    => {"last_name"=>"Hartl","first_name"=>"Michael"}

  hash 字面量形式：
  ```
  ##1.使用 => 分隔的键值对这种字面量形式定义散列
  user = { "first_name" => "Michael", "last_name" => "Hartl" }
  => {"last_name"=>"Hartl", "first_name"=>"Michael"}

  #2.目前为止散列的键都使用字符串，在 Rails 中用符号（Symbol）做键很常见,字符串前面加一个冒号,如 :name 
  user = { :name => "Michael Hartl", :email => "michael@example.com" }
  => {:name=>"Michael Hartl", :email=>"michael@example.com"}
  >> user[:name]    # 获取 :name 键对应的值
  => "Michael Hartl"
  ＃3.“符号 ⇒”变成了“键的名字:”形式：
  >> user={ name: "Michael Hartl", email: "michael@example.com" }
  => {:name=>"Michael Hartl", :email=>"michael@example.com"}
  #:name 本身是一种数据类型（符号），但 name: 却没有意义。不过在散列字面量中，:name => 和 name: 作用一样。因此，{ :name => "Michael Hartl" } 和 { name: "Michael Hartl" } 是等效的。如果要表示符号，只能使用 :name（冒号在前面）。
  ```
## inspect方法，它的作用是返回被调用对象的字符串字面量表示形式
    >> puts (1..5).to_a            # 把数组以字符串的形式打印出来
    1
    2
    3
    4
    5
    >> puts (1..5).to_a.inspect    # 输出数组的字面量形式
    [1, 2, 3, 4, 5]
    >> puts :name, :name.inspect
    name
    :name
    >> puts "It worked!", "It worked!".inspect
    It worked!
    "It worked!"

顺便说一下，因为使用 inspect打印对象的方式经常使用，为此还有一个专门的快捷方式，p 方法:
    >> p :name         #等价于puts:name.inspect'
    :name

## Ruby 中，括号是可以省略的

    # 如果最后一个参数是散列，可以省略花括号
    stylesheet_link_tag 'application', { media: 'all','data-turbolinks-track': 'reload' }
    stylesheet_link_tag 'application', media: 'all','data-turbolinks-track': 'reload'

## rails blank 方法

    >> "".blank?
    => true
    >> "      ".empty?
    => false
    >> "      ".blank?
    => true
    >> nil.blank?
    => true

可以看出，一个包含空格的字符串不是空的（empty），却是空白的（blank）。还要注意，nil 也是空白的

## 实例变量

在 Rails 中，实例变量的意义在于，它们自动在视图中可用。而通常实例变量的作用是在 Ruby 类中不同的方法之间传递值。

## 重复的表

 解决方法1:执行的db:migrate前,已经有表了，会出现重复，删除表rm -rf db/development.sqlite3

 ［博客](https://stackoverflow.com/questions/32296380/rake-dbmigrate-error-table-already-exists)
 [博客2](https://stackoverflow.com/questions/7874330/rake-aborted-table-users-already-exists)

 解决方法2（修改迁移文件）
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
 ### 修改后
 class CreateUsers < ActiveRecord::Migration[5.0]
  def self.up
    drop_table :users
    def change
      create_table :users do |t|
        t.string :name
        t.string :email

        t.timestamps
      end
    end
  end
  def self.down
    drop_table :votes
  end
end
 ```










