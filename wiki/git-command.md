//init project
echo "# assemble-demo" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:ZhiMay/assemble-demo.git
git push -u origin master

test.git

## 切换到远程分支(origin/task/50521)
 
 1.  git fetch

 2.  git chekout task/50521

## svn 

[SVN子命令add用法浅析](http://developer.51cto.com/art/201005/201633.htm)

svn add . --no-ignore --force

[svn 命令行下常用的几个命令](http://blog.csdn.net/yangzhongxuan/article/details/7018168)

## npm 
  nrm add vuenpm http://192.168.1.108:4873

## vue cli
vue init webpack  ranking-list