# Oracle

### 存储过程

创建存储过程

有参

```sql
create or replace procedure test_pro(param_1 in varchar2,
                                 param_2 in varchar2,
                                 param_3 out varchar2) as
                                 //声明使用的变量
    tets_id VARCHAR2(64);
    begin 
    .....
    end test_pro;
```

无参

```sql
create or replace procedure test_pro() as
//变量声明
begin
end test_pro;
```

### 常用函数：

sys_guid(): 32位序列号，具有世界唯一性。（同一数据）

sysdate: 获取当日日期，一般与to_char 连用，即to_char(sysdate,'yyyy-MM-dd')

replace(org_str,sub_str, val):将org_str中含有的sub_str进行替换为val. 

instr(org_str,sub_str): 判断字符串在那个位置，返回该字符串的索引（字符串默认索引从1开始）。

regexp_count(source_str,pattern)：返回pattern在字符串出现的次数，如果未找到，返回0。

decode(expression,condition_1,result_1.condition_2,result_2,...,result_default) :如果expression符合condition_1,则返回result_1，符合condition_2,则返回result_2,如果都不符合，则返回result_default,如果result_defsault不存在，则返回null.

### 场景

3.1 字段是否为空

-  某个字段不为空：

```sql
select * from test_table from clumn_name IS NOT NULL
```

- ISNULL函数

```sql
SELECT ISNULL(value,’default’) FROM table_name
```

如果为NULL，返回default,否则返回value.

- isblank函数

如果为NULL,返回true，不为NULL，返回false

```sql
SELECT IsBlank(value) FROM table_name
```

- COALESCE函数

判断一个或多个参数是否为空，并返回第一个不为NULL参数的值，如果全部为NULL,则返回NULL

```sql
SELECT COALESCE (value1, value2, value3) FROM table_name
```

- NVL函数

检测值是否为NULL。如果value为NULL,返回default,否则返回value

```
SELECT NVL(value,’default’) FROM table_name
```

3.2 根据分隔符将某一字段分割为多行

仅针对一行数据

chr(10)---oracle的回车符

```sql
select 
 regexp_substr(m.NOTE, '[^'||chr(10)||']+', 1, rownum, 'i') AS NOTENAME
 from 
  m
 CONNECT BY  regexp_substr(m.NOTE, '[^'||chr(10)||']+', 1, rownum, 'i') is not NULL
```

3.3 在select 语句中根据不同的值进行映射为其他的值

可以使用：

```sql
case when condition1 then val1
     when condition2 then val2
     end as tablefieid,
```

3.4 oracle中没有limit用法，可以根据 rownum进行实现

```sql
select * from table where rownum<100
```

3.5 动态执行sql语句可以用

```sql
EXECUTE IMMEDIATE 'sqlt语句' using 参数
```

eg:

```sql
execute immediate 'insert into dept values   (:1, :2, :3)'   
     using 50, l_depnam, l_loc;
```

3.5  mybatis #{}与${}的区别

- #{}将传入的值处理为字符串，${} 将传入的值只是进行替换。
- #{}可以防止sql注入，${}常用于传表的字段名，表名。

3.6  mybatis 转义字符

| 原符号 | mybatis |
| ------ | ------- |
| <      | \&lt;   |
| \>     | \&gt;   |
| &      | \&amp;  |
| ’      | \&apos; |
| "      | \&quot; |

3.7 mybatis  

动态sql foreach

collection 参数值一般为list与array

Mybatis中对于多个参数则封装为Map,以@Param注解的值为key,否则默认统一使用数据序号,从1开始。

```sql
and PK_ID IN 
<foreach item="item" index="index" collection="array" open="(" separator="," close=")">
            #{item}
</foreach>
```

foreach 参数

foreach元素的属性主要有item，index，collection，open，separator，close。

- **item**：集合中元素迭代时的别名，该参数为必选。
- **index**：在list和数组中,index是元素的序号，在map中，index是元素的key，该参数可选
- **open**：foreach代码的开始符号，一般是(和close=")"合用。常用在in(),values()时。该参数可选
- **separator**：元素之间的分隔符，例如在in()的时候，separator=","会自动在元素中间用“,“隔开，避免手动输入逗号导致sql错误，如in(1,2,)这样。该参数可选。
- **close:** foreach代码的关闭符号，一般是)和open="("合用。常用在in(),values()时。该参数可选。
- **collection:** 要做foreach的对象，作为入参时，List对象默认用"list"代替作为键，数组对象有"array"代替作为键，Map对象没有默认的键。当然在作为入参时可以使用@Param("keyName")来设置键，设置keyName后，list,array将会失效。 除了入参这种情况外，还有一种作为参数对象的某个字段的时候。举个例子：如果User有属性List ids。入参是User对象，那么这个collection = "ids".如果User有属性Ids ids;其中Ids是个对象，Ids有个属性List id;入参是User对象，那么collection = "ids.id"



在使用foreach的时候最关键的也是最容易出错的就是collection属性，该属性是必须指定的，但是在不同情况下，该属性的值是不一样的，主要有一下3种情况： 

- 如果传入的是单参数且参数类型是一个List的时候，collection属性值为list .
- 如果传入的是单参数且参数类型是一个array数组的时候，collection的属性值为array .
- 如果传入的参数是多个的时候，我们就需要把它们封装成一个Map了，当然单参数也可以封装成map，实际上如果你在传入参数的时候，在MyBatis里面也是会把它封装成一个Map的，map的key就是参数名，所以这个时候collection属性值就是传入的List或array对象在自己封装的map里面的key.

3.8 排序

sql中进行排序

```sql
order by 字段一 ASC,字段二 desc
```

对于数字型的字符串，如果要进行排序，可以通过利用to_number函数将字符串转为数字，然后再进行排序，否则出来的结果为乱序。

```sql
order by to_number(数字型字符串) desc
```

3.9 oracle 中 varchar与varchar2 的区别

varchar 为定长的字符数据，最长可为2000字符；varchar2 为可变长字符数据，最大长度为4000，二者并无本质的区别；varchar2是oracle提供的独特的数据类型oracle保证在任何版本中该数据类型向上和向下兼容但不保证varchar,这是因为varchar是标准sql提供的数据类型有可能随着sql标准的变化而改变.char对于不够位数的用空格添补，varchar2不用.varchar2把所有字符都占两字节处理(一般情况下)，varchar只对汉字和全角等字符占两字节，数字，英文字符等都是一个字节； VARCHAR2把空串等同于null处理，而varchar仍按照空串处理； VARCHAR2字符要用几个字节存储，要看数据库使用的字符集.

3.10 创建同义词：

```sql
create synonym 别名 for 数据库表名或dblink
```

创建oracle db link

```sql
create  database link db_1
connect to	db_2_user identified by "db_2_user_password"
using '
demo=
(description=
(ADDRESS_LIST=
(ADDRESS=(PROTOCOL=TCP)(HOST=db_2_ip)(PORT=1521)))
(CONNNECT_DATA=
(SERVICE_NAME=db_2_server)
)
)
'
```

 db_1是db link的名称；
    db_2_user是DB2这台机器上源数据库的用户名；
    db_2_user_password是密码；
    db_2_ip是DB2数据库地址，
    db_2_server是DB2数据库服务名。

3.11 oracle 数据库更新数据

根据一个表更新另一个表的内容（需要进行连接的）

更新方式一：

```sql
update (
  select t1.name name1, t2.name name2
  from table1 t1
    left join table2 t2 on t1.id = t2.id
  where t1.age > 20
) tmp
set tmp.name1 = tmp.name2;
```

如果报如下错误：无法修改与非键值保存表对应的列。

则可以选择更新方式：

```sql
UPDATE table1 t1 
SET t1.name = (SELECT t2.name
               FROM table2 t2
               WHERE t1.id = t2.id)
WHERE t1.age > 20
AND EXISTS (SELECT t2.name
            FROM table2 t2
            WHERE t1.id = t2.id);
```

如果报如下错误：单行子查询返回多个结果

则可以选择下一步更新方式：

```sql
UPDATE table1 t1 
SET t1.name = (SELECT max(t2.name)
               FROM table2 t2
               WHERE t1.id = t2.id)
WHERE t1.age > 20
AND EXISTS (SELECT t2.name
            FROM table2 t2
            WHERE t1.id = t2.id);
```

注意：在plSql中更新完数据记得提交。
