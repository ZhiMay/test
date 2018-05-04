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
