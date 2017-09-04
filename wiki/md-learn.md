[为知笔记 Markdown 新手指南](http://www.wiz.cn/feature-markdown.html)
[献给写作者的 Markdown 新手指南](http://www.jianshu.com/p/q81RER)
# 标题
# 这是 H1

## 这是 H2

### 这是 H3

#### 这是 H4

##### 这是 H5

###### 这是 H6
# 区块引用 Blockquotes
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
> ## 这是一个标题。

# 列表
## 无序列表使用星号、加号或是减号作为列表标记：
*   Red
*   Green
*   Blue
+   Red
+   Green
+   Blue
-   Red
-   Green
-   Blue

# 有序列表则使用数字接着一个英文句点：
1.  Bird
2.  McHale
3.  Parish


[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)

## cookies 方法

一个 cookie 有两部分信息，一个是 value（值），一个是可选的 expires（过期日期），
我们可以创建一个值为记忆令牌，20 年后过期的 cookie，实现持久会话：
```
cookies[:remember_token] = { value:   remember_token,
                             expires: 20.years.from_now.utc }
```
ails 应用经常使用 20 年后过期的 cookie，所以 Rails 提供了一个特殊的方法 permanent，用于创建这种 cookie，所以上述代码可以简写为,Rails 会自动把过期时间设为 20.years.from_now：

```
cookies.permanent[:remember_token] = remember_token
```

使用下面的方式把用户的 ID 存入 cookie：
```
cookies[:user_id] = user.id
```
但是这种方式存储的是纯文本，攻击者很容易窃取用户的账户。为了避免这种情况发生，我们要对 cookie 签名，存入浏览器之前安全加密 cookie：
```
cookies.signed[:user_id] = user.id
```
因为我们想让用户 ID 和持久记忆令牌配对，所以也要持久存储用户 ID。为此，我们可以串联调用 signed 和 permanent 方法：

```
cookies.permanent.signed[:user_id] = user.id
```
存储 cookie 后，再访问页面时可以使用下面的代码检索用户：
```
User.find_by(id: cookies.signed[:user_id])
```

其中，cookies.signed[:user_id] 会自动解密 cookie 中的用户 ID。然后，再使用 bcrypt 确认 cookies[:remember_token] 与代码清单 9.3 生成的 remember_digest 是否匹配。

最后一步是，确认记忆令牌与用户的记忆摘要匹配。对现在这种情况来说，使用 bcrypt 确认是否匹配有很多等效的方法。如果查看安全密码的源码，你会发现下面这个比较语句：[9]

```
BCrypt::Password.new(password_digest) == unencrypted_password
```
这里，我们需要的代码如下：

```
BCrypt::Password.new(remember_digest) == remember_token
```

仔细一想，这行代码有点儿奇怪：看起来是直接比较 bcrypt 计算得到的密码哈希和令牌，那么，要使用 == 就得解密摘要。可是，使用 bcrypt 的目的是为了得到不可逆的哈希值，所以这么想是不对的。研究 bcrypt gem 的源码后你会发现，bcrypt 重新定义了 ==，上述代码其实等效于：

    BCrypt::Password.new(remember_digest).is_password?(remember_token)

我们可以在 User 模型中定义 authenticated? 方法，比较摘要和令牌。这个方法的作用类似于 has_secure_password 提供用来认证用户的 authenticate 方法