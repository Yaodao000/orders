| 指令                          | 描述
|-------------------------------|----------------------------------------------------------------------------------|
| git init                      | 初始化本地 Git 倉庫
| git clone <repo-url>          | 從遠端倉庫克隆（下載）一個 Git 倉庫
| git add <file>                | 將指定的文件添加到暫存區，準備提交
| git add .                     | 添加當前目錄下的所有變更（新增、修改）文件到暫存區
| git status                    | 查看當前倉庫的狀態，列出已修改、未跟蹤或待提交的文件
| git commit -m "<message>"     | 提交暫存區的變更，並附上提交訊息
| git log                       | 查看提交歷史記錄
| git push -u origin <branch>   | 將本地的提交推送到遠端倉庫的指定分支
| git pull origin <branch>      | 從遠端倉庫拉取指定分支的最新更新並合併到本地分支
| git remote add origin <url>   | 設置遠端倉庫，將其指定為 `origin`
| git branch                    | 查看本地分支列表，並顯示當前分支。
| git checkout <branch>         | 切換到指定的分支。
| git merge <branch>            | 合併指定分支的更改到當前分支。
| git pull                      | 拉取遠端倉庫的最新變更，並合併到當前分支（等同於 `git fetch` + `git merge`）
| git reset <file>              | 撤銷某個文件的暫存區變更（不刪除文件，只是將其從暫存區移除
| git reset --hard              | 撤銷所有本地變更，恢復到最近一次提交的狀態
| git fetch                     | 從遠端倉庫拉取最新的提交和分支，但不自動合併到當前分支
| git rm <file>                 | 刪除文件並將刪除操作記錄到 Git
| git diff                      | 顯示自上次提交以來的變更差異
| git stash                     | 暫存當前變更，讓工作區恢復到上次提交的狀態
| git stash pop                 | 恢復暫存的變更。
