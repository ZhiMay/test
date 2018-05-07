[Git 工具 - 使用 Git 调试](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E4%BD%BF%E7%94%A8-Git-%E8%B0%83%E8%AF%95)
```bash
git reset --hard v2.4.0
git pull
git bisect start
git bisect bad
git bisect good
git bisect good
git bisect bad //最后标记错误
git bisect good // 显示错误的原因，155d9937c963810b609c55f68341c668817f8b18 is the first bad commit
````
