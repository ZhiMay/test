[Git 工具 - 使用 Git 调试](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E4%BD%BF%E7%94%A8-Git-%E8%B0%83%E8%AF%95)

```bash
git reset --hard v2.4.0
git pull
git bisect start
git bisect bad
git bisect good v2.4.0
git bisect good
git bisect bad //最后标记错误
git bisect good // 显示错误的原因，155d9937c963810b609c55f68341c668817f8b18 is the first bad commit
git bisect reset
````

##  实现git 下载单文件夹

```bash
mkdir project_folder
cd project_folder
git init
git remote add -f origin <url>
git config core.sparsecheckout true

```

// 接下来你需要告诉Git哪些文件或者文件夹是你真正想Check Out的，
// 你可以将它们作为一个列表保存在.git/info/sparse-checkout文件中。

```bash
$echo "wechat" >> .git/info/sparse-checkout
$echo "apps/register.go" >> .git/info/sparse-checkout
$echo "resource/css" >> .git/info/sparse-checkout
```

## git 撤销add

```bash
 git reset HEAD file
 ```

## 配置别名
[git 教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375234012342f90be1fc4d81446c967bbdc19e7c03d3000)
git st就表示git status,当然还有别的命令可以简写，很多人都用co表示checkout，ci表示commit，br表示branch：

```bash
 git config --global alias.st status // git status => git st
 ```
