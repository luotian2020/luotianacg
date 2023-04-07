# Python 学习

参考教程：https://www.bilibili.com/video/BV1qW4y1a7fU

## 一.基础部分

### 1.字面量

常量

> python 中常用的6种数据类型：
>
> 数字(Number): 
>
> - 整数（int)
> - 浮点数（float)
> - 复数（complex)
> - 布尔（bool)
>
> 字符串（String)
>
> 列表(List)
>
> 元组（Tuple)
>
> 集合（Set)
>
> 字典（Dictionary)

### 2.注释

单行注释： # (其后带一个空格，再写注释内容，规范)

多行注释

```
"""
多行注释
多行注释
"""
```

### 3.变量

表示值或存储计算结果，

变量无类型

格式：

```
变量名称=变量的值
```

### 4.数据类型

type()可以查看数据类型信息

type(变量) 查看的是变量存储的数据的类型。

### 5.数据类型转换

| 语句     | 说明                |
| -------- | ------------------- |
| int(x)   | 将X转换为一个整数   |
| float(x) | 将X转换为一个浮点数 |
| str(x)   | 将X转换为字符串     |

任何类型都可以转换为字符串

浮点数转整数会丢失精度。（丢失小数部分）

### 6.标识符

规则：

- 内容限定

  只允许出现 英文、中文、数字、下划线，四类元素，数字不能用在开头。

- 大小写敏感

- 不可使用关键字

变量命令规范：

- 见名知意
- 下划线命名
- 英文字母全小写

### 7.运算符

算术运算符

| 运算符 | 描述                   |
| ------ | ---------------------- |
| +      | 加                     |
| -      | 减                     |
| *      | 乘                     |
| /      | 除                     |
| //     | 取整除                 |
| %      | 取余                   |
| **     | 指数（a**b为a的b次方） |

赋值运算符

标准赋值： =

复合赋值：+=、-=、*=、/=、//=、%=、**=

### 8.字符串

#### 8.1 字符串定义方式

1.单引号定义：

```python
name='sunyangbo'
```

2.双引号定义：

```python
name="sunyangbo"
```

3.三引号定义：

```python
name="""sunyangbo"""
```

和多行注释写法相同，支持换行操作

使用变量接收它，它就是字符串

不使用变量接收它，就可以作为多行注释使用。

**对于字符串的引号嵌套，单引号定义的可以使用双引号；双引号定义的可以内含单引号；可以使用转移字符（\）来将引号解除效用，变成普通字符串**

#### 8.2 字符串的拼接

可以使用"+"来完成字符串变量和字符串常量的拼接，但不可以直接与int、float类型的直接添加。

```python
name="sunyangbo"
print("我的名字是："+name)
# 以下为错误代码
name=1232
print("我的名字是："+name)
报错：TypeError: can only concatenate str (not "int") to str
```

#### 8.3 字符串的格式化

通过占位的方式进行字符串的格式化。

```python
name="sunyangbo"
message="我是%s" %name
print(message)
num=123
message="数字是%s,我是%s"%(num,name)
print(message)
```

常用的字符串占位

- 字符串： %s
- 整数： %d
- 浮点数： %f(%.2f表示保留两位小数)

##### 精度控制

可以使用m.n来控制数据的宽度和精度

- m,控制宽度，要求是数字，设置的宽度小于数字自身，不生效。小数点与小数部分计入宽度计算。不足部分为空格补充。比如%5d,11会补为[][][空格] [空格] [空格]11
- .n 控制小数点的精度，要求是数字，会进行小数的四舍五入。

##### 快速格式化

```python
f"{变量}{变量}"
eg:
name="sunyangbo"
money=13.44
print(f"我是{name},拥有{money}")
```

- 不理会数据类型
- 无精度控制

表达式：一个具有明确执行结果的代码语句。

格式化：

- f"{表达式}"
- "%s\%d\%f" %(表达式、表达式、表达式)

### 9.if判断语句

第一种类型：

```python
if 判断条件:
   （四个空格）条件成立时，要做的事
else:
   （四个空格）条件不成立时，要做的事 
```

第二种类型：

```python
if 条件1：
    （四个空格）条件1成立时，要做的事
elif 条件2：
    （四个空格）条件2成立时，要做的事
else:
    （四个空格）以上条件均不成立时，要做的事
```

第三种类型：

```python
if 条件1：
    （四个空格）条件1成立时，要做的事
    if 条件2：
        （八个空格）条件2成立时，要做的事
```

空格缩进来判断层次关系

### 10. 循环

##### while循环

```python
while 条件：
   （四个空格）条件成立时，要做的事
```

直到条件不满足时，退出循环。

**嵌套循环**

```python
while 条件1：
   （四个空格）条件1成立时，要做的事
    while 条件2：
       （八个空格）条件2成立时，要做的事
```

##### for循环

轮询机制，一个一个处理，无法无限循环

```python
for 临时变量 in 待处理数据集：
     处理代码
```

range语句:

range(num)：从0开始，到num结束的数字序列（不含num本身）

range(num1,num2):从num1开始，到num2结束的数字序列（不含num2本身）

range(num1,num2,step):从num1开始，到num2结束的数字序列，不含num2,步长为step.

**注意：for 循环的内部临时变量，在外循环是可以访问得到。**

**嵌套循环**

```python
for 临时变量 in 待处理数据集：
     处理代码
     for 临时变量 in 待处理数据集：
          处理代码
```

continue: 中断本次循环，进行下一次循环

break: 直接结束所在循环

### 11.函数

```python
def 函数名(传入参数):
    函数体
    return 返回值
```

调用：函数名(参数)

无返回值的函数返回的是None字面量，class 'NoneType'

在if判断时，None等同于False

None也可以用于声明无初始内容的变量。

#### 说明文档

```python
def func(x,y):
    """
    函数说明
    :param x:形参x的说明
    :param y:形参y的说明
    :return : 返回值的说明
    """
    函数体
    return 返回值
```

局部变量：**定义在函数内部的变量，只在函数体内生效。**

全局变量： 在函数体内外都有效的变量。

函数体内无法修改全局变量的值，若要修改则在函数体内使用**global  全局变量**。

#### 多返回值

```python
return 变量1，变量2，变量3，变量4
```

类型不受限，多个变量接收

#### 传入多个参数

- 位置参数

   根据参数位置进行传参

- 关键字参数

  通过键=值的形式穿入参数。

  如果有位置参数，位置参数必须在关键字参数的前面，但关键字参数不存在先后顺序。

  ```python
  def eg(name,age,gender):
        return 1
  eg("1",1,"1")#位置参数
  eg(name="1",gender="1",age=1)#关键字参数
  eg("1",gender="1",age=1)#位置参数、 关键字参数
  ```

  

- 缺省参数

  在定义时就给出了默认值（在参数最后），可以覆盖。

- 不定长参数

  位置传递： *args  args为元组类型

  关键字传递：**args args为字典

#### 函数作为参数传递

计算逻辑的传递。

#### 匿名函数 lambda

```python
lambda 传入参数:函数体（一行代码）
```

- lambda为关键字，表示定义匿名函数
- 传入参数表示匿名函数的参数值
- 函数体，函数的执行逻辑，只能写一行，无法写多行。

```python
lambda x,y:x+y
```

### 12.数据容器

#### 12.1 列表

```python
#字面量
[元素1，元素2，元素3，...]
#定义变量
变量名称=[元素1，元素2，元素3，...]
#定义空列表
变量名称=[]
变量名称=list()
```

列表可以存储不同数据类型。

##### 下标索引

正向：0，1，2，3，4.....

反向索引：-1，-2，-3，-4......

##### 常用方法

| 语法                          | 描述                                                   |
| ----------------------------- | ------------------------------------------------------ |
| list.index(元素)              | 查找指定元素在列表的下标，如果不存在，则报错ValueError |
| list[下标]=值                 | 修改特定下标的值                                       |
| list.insert(下标，元素)       | 在指定的下标位置，插入指定的元素                       |
| list.append(元素)             | 将指定元素追加到列表尾部                               |
| list.extend(其他数据容器)     | 将其他数据容器的内容依次取出，依次追加到列表尾部       |
| del list[下标]/list.pop(下标) | 删除指定下标的元素。pop方法返回该下标的值并删除。      |
| list.remove(元素)             | 删除指定元素的第一个匹配项                             |
| list.clear()                  | 清空列表                                               |
| list.count(元素)              | 统计某元素在list中的数量                               |
| len(list)                     | list的元素数量                                         |

#### 12.2 元组

元组定义完成不可修改。

```python
#定义元组字面量
(元素，元素，元素，元素，元素)
#定义元组变量
变量名称=(元素，元素，元素，元素，元素)
#定义空元组
变量名称=()
变量名称=tuple()
```

##### 常用操作

| 方法        | 描述                                 |
| ----------- | ------------------------------------ |
| index(元素) | 返回指定元素的下标，如果没有，则报错 |
| count(元素) | 返回在元组内该元素的数量             |
| len(元组)   | 返回元组的元素数量                   |



#### 12.3 字符串

字符串不能修改。

##### 常用方法

| 方法                      | 描述                                           |
| ------------------------- | ---------------------------------------------- |
| index(字符串)             | 返回第一次出现的下标                           |
| replace(字符串1，字符串2) | 将字符串1替换为字符串2(生成新的字符串)         |
| split(分隔符字符串)       | 按照分割符将字符串分为多个字符串，返回列表对象 |
| strip(字符串)             | 去除前后字符串（无参数时去除空格）             |
| count(字符串1)            | 统计字符串1在字符串中出现的次数                |
| len(字符串)               | 返回字符串长度                                 |

#### 12.3.5 序列切片

序列：内容连续、有序，可以进行下标索引。

序列：列表、元组、字符串。

```
序列[起始下标:结束下标:步长]
起始下标为空：从头开始
结束下标为空：截取到结尾
```

切片不影响序列本身，返回新的序列。

#### 12.4 集合

- 不支持重复数据
- 无序的
- 无下标索引

```python
#定义集合字面量
{元素，元素，元素}
#定义集合变量
变量名称={元素，元素，元素}
#定义空集合
变量名称=set()
```

| 方法                     | 描述                                                       |
| ------------------------ | ---------------------------------------------------------- |
| add(元素)                | 添加新元素                                                 |
| remove(元素)             | 移除指定元素                                               |
| pop(元素)                | 随机取出元素，元素被移除容器                               |
| clear()                  | 清空元素                                                   |
| diffrerence(集合1)       | 取出集合与集合1的差集，集合有而集合1没有，得到的是新集合。 |
| difference_update(集合1) | 在集合内，删除和集合1相同的元素（集合被修改），无返回值。  |
| union(集合1)             | 将集合和集合1合并，得到新的集合                            |
| len(集合1)               | 返回集合1的元素个数                                        |

#### 12.5 字典

- 元素为键值对，key不允许重复
- 无下标索引
- 字典可以嵌套，字典的key和value可以是任意数据类型（key不可为字典）

```python
#定义字典字面量
{key:value,key:value,key:value}
#定义字典变量
变量名={key:value,key:value,key:value}
#定义空字典
变量名={}
变量名=dict()
```

| 方法            | 描述                            |
| --------------- | ------------------------------- |
| 字典[key]=value | 字典无key则新增，有则更新值     |
| 字典.pop(key)   | 取出key对应的value，此key被删除 |
| 字典.clear()    | 清空字典                        |
| 字典.keys()     | 返回字典全部的key               |
| len(字典)       | 统计字典的元素数量              |

for key in my_dict: 与for key in keys: 相同。（keys=my_dict.keys())

 #### 12.6 通用操作

| 方法                        | 描述                             |
| --------------------------- | -------------------------------- |
| max()                       | 容器内最大元素（字典比较key)     |
| min()                       | 容器内最小元素                   |
| len()                       | 容器元素个数                     |
| list()                      | 转换为列表                       |
| tuple()                     | 转换为元组                       |
| str()                       | 转换为字符串                     |
| set()                       | 转换为集合                       |
| sorted(序列,[reverse=True]) | 默认升序排列，reverse=True为降序 |

字符串比较基于ASCII码进行比较，按位比较。

###  13.文件

#### 13.1 读操作

```
open(name,mode,encoding)
```

name: 打开目标文件名的字符串（可包含文件所在具体路径）

mode: 设置打开文件的模式（访问模式）：只读、写入、追加等

- r :只读模式打开文件
- w: 打开文件只用于写入
- a :新的内容将被写入到已有内容之后，如果文件不存在，创建新的文件进行写入。

encoding:编码格式（推荐使用UTF-8),用关键字参数指定。

**读操作相关方法：**

- 文件对象.read(num)

  num表示要从文件读取的数据长度（单位字节），如果没有传入num,默认读取文件中的所有数据。

- 文件对象.readlines()

  按照行的方式把整个文件中的内容进行一次性读取，返回的是一个列表，其中每一行数据为一个元素。

- 文件对象.readline()

  读取一行数据。

- 循环读取：

  ```
  for line in 文件对象:
  ```

**文件对象关闭操作**

- 文件对象.close()  关闭文件。

- with open 

  ```python
  with open( ) as f:
    
  ```

  执行完之后自动关闭。

#### 13.2 写操作

w模式：

文件对象.write(内容): 内容写入到内存里，但close（内置flush)后会写入到硬盘。文件不存在，创建文件，文件存在，会清空内容后写入。

文件对象.flush()：内容刷新，写入硬盘。

a模式：

文件存在，则结尾写入

文件不存在，创建文件。

### 14.异常

捕获所有异常

```python
try:
  可能会发生异常的代码
except:
  如果异常出现执行的代码

try:
   可能会发生异常的代码
except  Exception as e:
    如果异常出现执行的代码
```

捕获指定异常：

```python
try:
   可能会发生异常的代码
except  NameError as e:
    如果特定异常出现执行的代码
```

捕获多个异常

```python
try:
   可能会发生异常的代码
except (异常，异常) as e:
    如果特定异常出现执行的代码
```

异常else

```python
try:
   可能会发生异常的代码
except  Exception as e:
    如果异常出现执行的代码
else:
    无异常执行
finally:
     有没有异常都执行
```

异常具有传递性。

### 15.模块

语法

```python
[from 模块名] import [模块|类|变量|函数|*] [as 别名]
```

```
__main__ :模块内有这个
if __name__='__main__'
则导入时不执行
__all__ :* 模块内有则导入all里的，无all,导入全部
__init__.py:区分包与普通文件夹
```

pip install -i  网址 包

pip install package==版本号

### 16.json

```python
import json
json_str=json.dumps(data,ensure_ascii=False)# 将数据转换为json数据，有中文可带ensure_ascii=False
json.loads(data)#将json数据转换为list或字典。

```

## 二 、进阶部分

### 1.对象

```python
class Student:
    name=None
    age=None
    gender=None
stu_1=Student()#实例化
stu_1.gender="nv"
stu_1.name="sunyangbo"
stu_1.age=13
print(stu_1.age)
```

语法：

```python
class 类名:
```

类的属性：成员变量

类的行为： 成员方法

传参时可以忽略self

```python
def 方法名(self,形参1，形参2):
     函数体
```

#### 构造方法

```
__init__():
```

- 创建类对象会自动执行

- 创建类对象时会将传入参数自动传递给

  ```
  __init__
  ```

  使用

#### 魔术方法

1.字符串方法

返回字符串

```
__str__
```

```python
class Student:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def __str__(self):
        return f"Student类对象，name={self.name},age={self.age}"
stu_1=Student("luotian",13)
print(stu_1)
"""
Student类对象，name=luotian,age=13
"""
```

2.小于

返回True或False

3.小于等于或大于等于

返回True或False

4.等于

返回False或True

```python
class Student:
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def __str__(self):
        return f"Student类对象，name={self.name},age={self.age}"
    def __eq__(self, other):
        return self.age==other.age
stu_1=Student("luotian",13)
stu_2=Student("luoyi",13)
print(stu_1==stu_2)
```

#### 封装

1. ”_“ 是私有的，一般不应该被调用
2. ”__“ 是为了避免子类重写某个函数而使用的
3. ”__ xx __“ 一般是用于Python调用

私有成员变量、私有成员方法都是以_(两个下划线开头)。

> 注意：
>
> 在外部给私有属性赋值成功的原因
>
> 这是因为给私有变量赋值的操作，其实是在实例中定义了一个名为与私有变量同名的变量（因为Python中的都是动态变量），而没有改变类中真正的属性。
>
> python的类中通过加双下划线来设置的“私有属性”其实是“伪私有属性”，原理是python编译器将加了双下划线的“属性名”自动转换成“类名属性名”。所以我们在外部用“属性名”访问私有属性的时候，会触发AttributeError，从而实现“私有属性”的特性。但通过“类名属性名”也可以访问这些属性。
>
> 如果在实例中给实例._类名____属性名赋值，则把原始值给覆盖掉了。（指只针对这一个实例）

```python
class Student:
    __name=None
    __age=10
    def __init__(self,name,age):
        self.name=name
        self.age=age
    def __str__(self):
        return f"Student类对象，name={self.name},age={self.age}"
    def __eq__(self, other):
        return self.age==other.age
    def getage(self):
        return self.__age
stu_1=Student("luotian",13)
stu_1.__age=12
stu_1._Student__age=14
stu_2=Student("luoyi",13)
print(stu_1.__age)
print(stu_1.getage())
print(stu_2.getage())
"""
12
14
10
"""
```

#### 继承

##### 单继承

语法：

```python
class 类名(类名):
```

##### 多继承

```python
class 类名(父类1，父类2，父类3，父类4):
    内容体
```

内容体为 pass关键字：什么都不写，语法不报错。

父类中如果有同名的变量，谁靠左，谁先来。

##### 复写

复写成员变量与成员方法直接在子类定义。

在子类中调用父类成员：

- 使用成员变量： 父类名.成员变量

  使用成员方法：父类名.成员方法

- 使用成员变量：super().成员变量

  使用成员方法：super().成员方法

#### 类型注解

##### 变量

语法：

```python
变量名: 类型 =值
```

在注释中进行类型注解

```python
# type:类型
```

只是提示性，如果写错，不报语法错误。

##### 函数

```python
def 方法名(形参名：类型，形参名：类型，形参名：类型)->返回值类型:
    pass
```

在类型中如果出现多种类型（联合型注解）

```python
from typing import Union
Union[类型，类型，类型]
```

#### 多态

同一行为，不同状态。

父类引用指向子类对象。

父类确定有哪些方法，具体的方法由子类进行具体实现。

```python
class Animal:
    def make_noise(self):
        pass
class Dog(Animal):
    def make_noise(self):
        print("我是一只狗：汪汪汪！日他狗的！")
class Cat(Animal):
    def make_noise(self):
        print("我是一只猫：喵喵喵!他喵的！")
def make_noise(animal:Animal):
    animal.make_noise()
dog=Dog()
cat=Cat()
make_noise(dog)
make_noise(cat)
"""
我是一只狗：汪汪汪！日他狗的！
我是一只猫：喵喵喵!他喵的！
"""
```

### 2.SQL

#### 导包

```python
from pymysql import Connection
```

#### 创建连接对象

```python
conn=Connection(
    host=ip地址,
    port=端口号,
    user=用户名,
    password=密码,
    autocommit=True # 设置自动提交
)
```

#### 获取游标对象

```python
cursor=conn.cursor()
```

#### 选择数据库

```python
conn.select_db("lifecollege")
```

#### 执行sql语句

```python
cursor.execute("select * from sys_usr")
```

注意：如果在进行数据修改操作时尚未有自动提交设置，则需进行手动提交确认（事务)

```python
conn.commit()
```

#### 获取查询结果

```python
results: tuple=cursor.fetchall()
```

#### 关闭连接

```python
conn.close()
```

## 三、高阶部分

### 1.闭包

#### 定义：

定义双层嵌套函数，内层函数可以访问外层函数的变量。

将内部函数作为外层函数的返回，此内层函数就是闭包函数。

#### 优缺点

优点：

不定义全局变量，也可以让函数持续访问和修改一个外部变量。

闭包函数引用的外部变量，是外层函数的内部变量。作用域封闭难以被操作修改。

缺点：额外的内存占用。

#### nonlocal 关键字作用

在闭包函数（内层函数）想要修改外部函数的变量值

需要用nonlocal声明这个外部变量。

```python
def outer(num=0):
    def inner(atm):
        nonlocal num
        num+=atm
        print(num)
    return inner
fn=outer(10)
fn(10)
fn(20)
"""
20
40
"""

```

### 2.装饰器

装饰器就是使用创建一个闭包函数，在闭包函数内调用目标函数，

可以达到不改动目标函数的同时，增加额外的功能。

#### 写法

```python
def outer(func):
    def inner():
        print("starting")
        func()
        print("ending")
    return inner

@outer
def getnum():
    print("123")

getnum()
# 底层： =
# fu=outer(getnum)
# fu()
```

### 3.设计模式

- 单例模式

  对一个类只获取其唯一的类实例对象，持续复用它。

  以节省内存和创建对象的开销

  test.py

  ```python
  class StrTools:
      pass
  
  strTool=StrTools()
  ```

  main.py

  ```python
  from test import strTool
  
  s1=strTool
  s2=strTool
  print(s1)
  print(s2)
  """
  <test.StrTools object at 0x000001FFF880DFA0>
  <test.StrTools object at 0x000001FFF880DFA0>
  """
  ```

- 工厂模式

​    类对象由原来的类自身初始化转为由工厂方法获得。

  

```
class Person:
    pass
class Teacher(Person):
    pass
class Worker(Person):
    pass
class Student(Person):
    pass

class Factory:
    def getPerson(self,type):
        if type=='w':
            return Worker()
        elif type=='t':
            return Teacher()
        elif type=='s':
            return Student()
pf=Factory()
teacher=pf.getPerson('t')
wor=pf.getPerson('w')
stu=pf.getPerson('s')
```

### 4. 多线程

```python
import threading

thread_obj=threading.Thread([group [,target[,name[,args[,kwargs]]]]])
- group: 暂时无用，未来的功能预留参数
- target: 执行的目标任务名
- args: 以元组的方式给执行任务传参（注意：如果有一个参数，则要有逗号,）
- kwargs: 以字典的方式给执行任务传参
- name: 线程名，一般不设置

#启动线程，让线程开始工作
thread_obj.start()
```

例子

```python
import threading

def sing(msg):
    while True:
        print(msg)

def dance(msg):
    while True:
        print(msg)

if __name__=='__main__':
    sing_thread=threading.Thread(target=sing,args=("sing sing sing",))
    dance_thread=threading.Thread(target=dance,kwargs={"msg":"dance dance dance"})
    
    sing_thread.start()
    dance_thread.start()
```

### 5.numpy包

导包

```python
import numpy as np
```

#### 1.属性

np数组

```python
array=np.array([[1,2,3],[3,4,5]])
```

array.ndim:数组的维度

array.shape:返回一个元组（a，b),表示a行b列。

array.size:返回数组的元素个数。

#### 2.创建array

- np.array

```python
array=np.array([[1,2,3],[3,4,5]],dtype=np.int64)
```

dtype: 定义元素数据类型

- np.zeros

生成元素全为0的数组,形参数表示几行几列,注意为元组

```
array=np.zeros((2,3)，dtype=np.int64)
```

- np.ones()

生成元素全为1的数组，形参表示几行几列，注意为元组。

```python
array=np.ones((2,3)，dtype=np.int64)
```

- np.arange

np.arange(开始，结束，步长)，根据步长生成一维数组，不包括结束。

可以通过reshape(a,b)来规定数组为a行b列；

```python
array=np.arange(0,12,1,dtype=np.int64).reshape((3,4))
```

- np.linspace

生成等间距的数组

np.linspace(start,stop,num,endpoint,restep,dtype)

```
start: array_like
	序列的起始值
stop: array_like
	序列的结束值
num: int, optional
	要生成的样本数，默认值为50，必须为非负数
endpoint: bool, optional
	如果为True，则包含stop
	如果为False，则不包含stop
retstep: bool, optional
	如果为True，返回('samples', 'step')，其中step是samples之间的间隔
dtype: dtype, optional
	输出数组的类型
	如果没有给出，将通过start和stop进行推断
	永远不会推断为int，即使给定的参数会生成整数数组，也将被推断成float
```

```python
array=np.linspace(1,6,10).reshape((2,5))
```

#### 3.基础运算

```python
import numpy as np
a=np.array([10,20,30,40])
b=np.arange(4)
print(a+b)# 相加
print(a-b)# 相减
print(b**2)# 平方
"""
[10 21 32 43]
[10 19 28 37]
[0 1 4 9]
"""
```

a*b: 对应的行列乘以对应的数

np.dot(a,b):矩阵乘法（也可以用a.dot(b)表示）

```python
import numpy as np
a=np.array([[1,2],
            [3,4]])
b=np.array([[0,1],
            [0,2]])
c=a*b
d=np.dot(a,b)
print(c)
print(d)
"""
[[0 2]
 [0 8]]
[[ 0  5]
 [ 0 11]]
"""
```

np.random.random((元组))：根据元组获取对应行列的随机数列。

np.sum(数组，axis):求数组某一维度的和。axis=0为行，axis=1为列。

np.max(array,axis):求数组某一维度最大值，默认为整个数组。

np.max(array,axis):求数组某一维度最小值，默认为整个数组。

```python
import numpy as np
a=np.random.random((2,4))
print(a)
print(np.sum(a,axis=0))
print(np.min(a,axis=1))
print(np.max(a,axis=1))
"""
[[0.22528116 0.65037738 0.72089134 0.44363399]
 [0.21283793 0.02099331 0.94222611 0.98682096]]
[0.43811909 0.67137068 1.66311745 1.43045495]
[0.22528116 0.02099331]
[0.72089134 0.98682096]
"""
```

np.argmax(array): 求数组的最大值索引

np.argmin(array):求数组的最小值索引

```python
import numpy as np
a=np.arange(2,14).reshape((3,4))
print(a)
print(np.argmax(a))
print(np.argmin(a))
"""
[[ 2  3  4  5]
 [ 6  7  8  9]
 [10 11 12 13]]
11
0
"""
```

np.average(array)、np.mean(array)、array.mean()：求数组的均值

np.median(array):求数组的中位数

np.cumsum(array):数组的每个元素均为前n项和。

np.diff(array):数组的相邻两元素的差。

```python
import numpy as np
a=np.arange(2,14).reshape((3,4))
print(a)
# 求均值
print(np.mean(a))
print(a.mean())
print(np.average(a))
# 求中位数
print(np.median(a))
# 其他
print(np.cumsum(a))
print(np.diff(a))
"""
[[ 2  3  4  5]
 [ 6  7  8  9]
 [10 11 12 13]]
7.5
7.5
7.5
7.5
[ 2  5  9 14 20 27 35 44 54 65 77 90]
[[1 1 1]
 [1 1 1]
 [1 1 1]]
"""
```

np.nonzero(array): 输出数组表示不为0的索引值。

np.transpose(array)、array.T:表示array的逆矩阵

np.sort(array):按行排序(升序)

np.clip(array,min,max):数组中大于max的设定为max,小于min的设定为min.

```python
import numpy as np
a=np.arange(14,2,-1).reshape((3,4))
print(a)
print(np.nonzero(a))
print(np.transpose(a))
print(a.T)
print(np.sort(a))
print(np.clip(a,5,8))
"""
[[14 13 12 11]
 [10  9  8  7]
 [ 6  5  4  3]]
(array([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2], dtype=int64), array([0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], dtype=int64))
[[14 10  6]
 [13  9  5]
 [12  8  4]
 [11  7  3]]
[[14 10  6]
 [13  9  5]
 [12  8  4]
 [11  7  3]]
[[11 12 13 14]
 [ 7  8  9 10]
 [ 3  4  5  6]]
[[8 8 8 8]
 [8 8 8 7]
 [6 5 5 5]]
"""
```

array.flatten():返回折叠成一维的数组

array.flat:数组的迭代器

```python
import numpy as np
a=np.arange(3,15).reshape((3,4))
print(a.flatten())
for item in a.flat:
    print(item)
"""
[ 3  4  5  6  7  8  9 10 11 12 13 14]
3
4
5
6
7
8
9
10
11
12
13
14
"""
```

np.vstack(a,b): 两个数组垂直合并

np.hstack(a,b):两个数组水平合并

np.concatenate((a,b,b,a)):多个数组进行合并，默认水平，可指定axis

```python
import numpy as np
a=np.array([1,1,1])
b=np.array([2,2,2])
print(np.vstack((a,b)))
print(np.hstack((a,b)))
print(a[np.newaxis,:])
print(a[:,np.newaxis])
print(np.concatenate((a,b,b,a),axis=0))
"""
E:\ProgramData\Anaconda3\envs\work\python.exe "F:\python project\pythonProject2\main.py" 
[[1 1 1]
 [2 2 2]]
[1 1 1 2 2 2]
[[1 1 1]]
[[1]
 [1]
 [1]]
[1 1 1 2 2 2 2 2 2 1 1 1]
"""
```

np.split(array,num,axis):根据维度进行分割，均分。

np.array_split(array,num,axis):根据维度进行分割，可不均等分。
np.vsplit(array,num):按行分割，均分。

np.hsplit(array,num):按列分割，均分。

```python
import numpy as np
a=np.arange(12).reshape((3,4))
print(a)
print(np.split(a,3,axis=0))
print(np.split(a,4,axis=1))
print(np.array_split(a,3,axis=1))
print(np.vsplit(a,3))
print(np.hsplit(a,4))
"""
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]]
[array([[0, 1, 2, 3]]), array([[4, 5, 6, 7]]), array([[ 8,  9, 10, 11]])]
[array([[0],
       [4],
       [8]]), array([[1],
       [5],
       [9]]), array([[ 2],
       [ 6],
       [10]]), array([[ 3],
       [ 7],
       [11]])]
[array([[0, 1],
       [4, 5],
       [8, 9]]), array([[ 2],
       [ 6],
       [10]]), array([[ 3],
       [ 7],
       [11]])]
[array([[0, 1, 2, 3]]), array([[4, 5, 6, 7]]), array([[ 8,  9, 10, 11]])]
[array([[0],
       [4],
       [8]]), array([[1],
       [5],
       [9]]), array([[ 2],
       [ 6],
       [10]]), array([[ 3],
       [ 7],
       [11]])]
"""

```

.copy():进行深拷贝

```python
import numpy as np
a=np.arange(12).reshape((3,4))
b=a
print(b is a)
c=a.copy()
print(c is a)
"""
True
False
"""
```

### 6.pandas包

```python
import pandas as pd
```

pandas.Series( data, index, dtype, name, copy)

- data : np数组.
- index: 数据索引，如果未指定，则从0开始
- dtype: 数据类型，未指定则会进行判断。
- name: 设置名称
- copy:复制，默认为False

```python
import numpy as np
import pandas as pd
a=pd.Series([1,2,4,np.nan,5,6])
dates=pd.date_range("20220101",periods=6)
b=pd.DataFrame(np.random.random((6,4)),index=dates,columns=["A","B","C","D"])
print(b)
print(a)
print(dates)
"""
                  A         B         C         D
2022-01-01  0.928967  0.190768  0.601276  0.882929
2022-01-02  0.169511  0.649842  0.100637  0.111511
2022-01-03  0.662555  0.042417  0.828315  0.577315
2022-01-04  0.915924  0.898657  0.759235  0.465533
2022-01-05  0.862355  0.060444  0.236953  0.628383
2022-01-06  0.209536  0.723977  0.542888  0.851696
0    1.0
1    2.0
2    4.0
3    NaN
4    5.0
5    6.0
dtype: float64
DatetimeIndex(['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04',
               '2022-01-05', '2022-01-06'],
              dtype='datetime64[ns]', freq='D')
"""
```

descripe()

仅对数值型数据做计算

```python
import numpy as np
import pandas as pd
a=pd.Series([1,2,4,np.nan,5,6])
dates=pd.date_range("20220101",periods=6)
b=pd.DataFrame(np.random.random((6,4)),index=dates,columns=["A","B","C","D"])
print(b.describe())
"""
              A         B         C         D
count  6.000000  6.000000  6.000000  6.000000
mean   0.462060  0.508619  0.388292  0.512927
std    0.303072  0.394182  0.327500  0.144343
min    0.096478  0.152827  0.001574  0.284452
25%    0.265013  0.175496  0.202824  0.435041
50%    0.450428  0.389177  0.289202  0.542832
75%    0.576589  0.873414  0.612046  0.619670
max    0.953175  0.981441  0.856081  0.663052
"""
```

pandas.DataFrame( data, index, columns, dtype, copy)

- data: 一组数据(ndarray、series, map, lists, dict 等类型)。
- index: 索引值
- columns: 列
- dtype: 数据类型
- copy: 拷贝数据，默认为 False

属性loc 可以返回某一索引。

```python
import numpy as np
import pandas as pd
a=pd.Series([1,2,4,np.nan,5,6])
dates=pd.date_range("20220101",periods=6)
b=pd.DataFrame(np.random.random((6,4)),index=dates,columns=["A","B","C","D"])
print(b.loc["20220101"])
"""
A    0.013434
B    0.848160
C    0.024464
D    0.579111
Name: 2022-01-01 00:00:00, dtype: float64
"""
print(b.loc[["20220101","20220102"]])
"""
                   A         B         C         D
2022-01-01  0.684341  0.098019  0.654066  0.872857
2022-01-02  0.235770  0.221142  0.491138  0.520970
"""
```

数据筛选

假设df为DataFrame类型数据

- 单列值：df["name"]

  多列值：df[["name1","name2"]]

- loc

  loc按照标签或者索引、布尔值或者条件进行选择数据

  df.loc [row selection, column selection]

  df.loc["name"]

  df.loc[["name1","name2"]]

- iloc 

  df.iloc[1,2]


### Pandas

#### 读取数据

- read_csv()
- read_

#### 新增数据列

- 直接赋值

df.loc[:,列名]=值

- apply方法

  df.loc[index,column]=df.apply(func,axis)

  - func: 函数
  - axis 行或列 axis=0->行（index)；axis=1->列(column)

- assign方法

  分配多个列,返回一个新的DataFrame

  df.assign(

  key1=func,

  key2=func)

- 按条件分组赋值

  先创建空列，然后根据条件分组赋值。

  df.loc[:,key]='"";

  df.loc[条件，key]=值

#### 数据统计

- describe()

针对数据列

返回最大值，最小值等之类的计数。

- mean()

平均值

- min() 

最小值

- max() 

最大值

- unique()

  一般用于枚举、分类列。

- value_counts()

按值计数

- cov()

协方差：为正，X,Y同向运动越大；为负，X,Y反向运动越小。

df.cov()

- corr()

相关系数，用来衡量相似度

如果为1，则X,Y正向相似度越大；为-1，X,Y反向相似度越大。

df.corr()

df[key1].corr(df[key2])

#### 缺失值的处理

- 检测是否为空值

isnull或notnull ：可用于df或Series

- dropna:丢弃、删除空值

axis :删除行还是列。axis=0 index;axis=1 column

how: any，任何值为空都删除；all,所有值都为空才删除

inplace:True,修改当前df；False返回一个新的df.

- fillna:填充空值。

value: 填充的值，可以是单个值，或者字典（key是列名，value是值）

method:ffill 使用前一个不为空的值填充forwardfill；bfill 使用后一个不为空的值填充backwordfill

axis: 0,index;1 columns

inplace: True 修改当前df;False 返回一个新的df.

#### SettingWithCopyWarning

pandas的修改写操作只能在源程序上进行，一步到位。

#### 数据排序

- df.sort_values()

  by:column或columns,单个值或列表

  ascending:True 升序；False 降序；可以为单个值或列表

  inplace: 是否修改原df

#### 字符串处理

df无str属性，Series有，不是Python的，而是pandas自己实现的，仅能用于字符串列。

#### axis参数

- axis=0 或者index
  - 单行操作，指的是某一行。
  - 聚合操作，指的是跨行cros srows

- axis=1 或者column
  - 单列操作 指的是某一列
  - 聚合操作，指的是跨列cross columns

按哪个axis,就是这个axis要动起来(类似被for遍历)，其它的axis保持不动。

#### MultiIndex

多级索引

df.loc[(key1,key2),:]:k1->k2->

df.loc[[k1,k2],:]:k1->,k2->

df.loc[(slice(None),k1),:]:slice(None)表示这一级索引的全部内容。

## test_transformation

np.log():计算对数

pd.concat:连接pandas 对象
