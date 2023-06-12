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

