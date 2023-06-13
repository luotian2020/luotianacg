# Git

## 常用代码

 初始化：

```git
git init
```



设定全局用户名

```git
git config --global user.name "用户名"
```



设定全局用户邮箱

```
git config --global user.email "用户邮箱"
```



### 1.查看信息

查看版本信息

```git
git --version
```

查看日志,显示所有提交过的版本信息

```git
git log
```

查看项目状态

```git
git status
```

查看所有配置

```git
git config --list
```

### 2.文件的创建,修改与提交

1.添加文件到暂存区

```git
git add 文件名
```

2.提交文件到版本库

```git
git commit -m '声明提交信息（随意命名）版本信息等'
```

一次完成暂存并提交到版本库

```git
git commit -a -m '声明提交信息（随意命名）版本信息等'
```

### 3.暂存区提交与撤销

提交后可以查看版本前后差异

```git
git diff HEAD --文件名
```

将文件添加到暂存区，可以撤销：

```git
git reset HEAD 文件
```

### 4.版本回退

回退几个就有几个角标

```git
git reset --hard HEAD^
```

回退n个

```git
git reset --hard HEAD~n
```

查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）

```git
git reflog
```

恢复到指定版本

```git
git reset --hard 提交记录ID
```

简化输出

```
git ...(log) --pretty=oneline
```

### 5.文件删除

恢复删除的文件

```git
git restore 已删除的文件名
```

检验是否有文件

```git
git checkout 文件名
```

文件删除一种方法是删除本地文件后，把文件添加到暂存区并提交，文件就得到了删除。

二是用

```git
git rm 文件名
```

删除本地文件和版本库的文件。

### 6.远程仓库

显示index和工作区的文件的信息。

```git
git ls-files
```

输入命令

```git
git remote add origin 自己的code
git push -u origin "分支名"(一般为main/master)
```

绑定SSH自行搜

```git
ssh-keygen -t rsa -C "your_email@youremail.com"
```

远程下载

```git
git clone SSH或http链接
```

### 7. 本地分支操作

查看分支

```git
git branch
```

新建分支并切换到新建分支

```git
git checkout -b 新建分支名
```

切换到指定分支

```git
git checkout 分支名
```

重命名分支

```git
git branch -m 老分支名 新分支名
```

在主干上合并分支

```git
git merge 分支名
```

删除分支

```git
git branch -d 分支名
```

### 8. 远程分支

查看本地与远程分支

```git
git branch -a
```

推送本地分支到远程（在该分支下）

```git
git push origin 分支名
```

删除远程分支（本地分支还在保留）

```git
git push origin :分支名
```

拉取远程指定分支并在本地创建分支

```git
git checkout -b 本地分支 origin/远程分支
```

### 9.多人协同冲突解决

先

```git
git pull
```

再

```git
git push
```

### 10.标签管理

基本命令git tag

|               命令                |              描述              |
| :-------------------------------: | :----------------------------: |
|         git tag   标签名          |            新建标签            |
|    git tag -a 标签名 -m 'xxxx'    |     添加标签并指定描述信息     |
|              git tag              |          查看所有标签          |
|        git tag -d  标签名         |          删除本地标签          |
|      git push origin  标签名      |       推送本地标签到远程       |
|      git push origin --tags       | 推送全部未推送的本地标签到远程 |
| git push origin :refs/tags/标签名 |        删除一个远程标签        |

## 11.推送本地项目到远程仓库

1.执行指令

```git
git init
git add .
git commit -m '提交名称'
git remote add origin SSh链接
git push -u origin master//第一次推送
git push origin master//第二次及之后
```

## 12.常见问题

12.1

执行git命令， fatal: detected dubious ownership in repository at 'D:/study/vue/project/galligalli'
'D:/study/vue/project/galligalli' is owned by:

解决方法：

```shell
git config --global --add safe.directory "*"
```

12.2 

在执行git pull 命令时遇到fatal: refusing to merge unrelated histories

```shell
git pull origin master --allow-unrelated-histories
```

12.3 

如果缓冲区存在误放进的文件，可以进行清除

```shell
git reset 文件夹/文件名
```
12.4 
重置本地分支与远程分支的映射关系

切入到要取消映射关系的分支

撤销本地分支与远程分支的映射关系

```shell
git branch --unset-upstream
```

重新设置映射关系

```shell
git branch -u 远程分支名
```

或者

```shell
git branch --set-upstream-to 远程分支名
```

12.5

在切换分支时现有的修改不需要进行commit时，可以使用stash命令进行贮藏

```shell
git stash save '注释'
```

如果使用

```shell
git stash 
```

会自动生成注释。

需要用时，则可以通过

```shell
git stash pop
```

将当前stash中的最近添加的内容弹出，因为是栈，所以遵循先进后出的原则

如果列表中有多个stash，可以用以下命令弹出指定的行, 其中 stash@{0} 就相当于是索引

```shell
git stash pop stash@{0}
```

此种恢复会导致list中的该存储删除

如果不想删除，则可以使用

```shell
git stash apply
```

将当前stash中的最近添加的内容恢复

恢复至指定存储·

```shell
git stash apply stash@{0}
```

清除指定存储

```shell
git stash drop stash@{0}
```

清除全部存储

```shell
git stash clear
```

查看存储列表

```shell
git stash list
```

查看改动

默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 `git stash show stash@{1}`

```shell
git stash show
```

显示第一个存储的改动，如果想显示其他存存储，命令：`git stash show  stash@{$num}  -p` ，比如第二个：`git stash show  stash@{1}  -p`

```shell
git stash show -p
```

应当注意，git stash 存储的内容与分支独立，不受分支影响。
