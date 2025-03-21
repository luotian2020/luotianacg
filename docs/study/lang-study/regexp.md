#  正则表达式
## 一.入门使用
**匹配单个字符的元字符**

|       | 元字符       | 匹配对象                                                     |
|-------| ------------ | ------------------------------------------------------------ |
| \.    | 点号         | 匹配任意单个字符                                             |
| [...] | 字符组       | 匹配单个列出的字符                                           |
| [^...] | 排除型字符组 | 匹配单个未列出的字符                                         |
| \char | 转义字符     | 如果char为元字符或转义字符无特殊含义时，匹配char对应的普通字符 |

**提供计数功能的元字符**

| ？        | 问号     | 容许匹配一次但非必须               |
| --------- | -------- | ---------------------------------- |
| *         | 星号     | 可以匹配任意多次，也可能不匹配     |
| +         | 加号     | 至少需要匹配一次，至多可能任意多次 |
| {min,max} | 区间量词 | 至少需要min次，至多容许max次       |

**匹配位置的元字符**

| ^    | 脱字符     | 匹配一行的开头位置 |
| ---- | ---------- | ------------------ |
| $    | 美元符     | 匹配一行的结束位置 |
| \\<  | 单词分界符 | 匹配单词开始的位置 |
| \\>  | 单词分界符 | 匹配单词结束的位置 |

**其他元字符**

| \|           | alternation(选择) | 匹配任意分隔的表达式                                         |
| ------------ | ----------------- | ------------------------------------------------------------ |
| (...)        | 括号              | 限定多选结构的范围，标注量词作用的元素                       |
| \\1,\\2,.... | 反向引用          | 匹配之前的第一、第二组括号内的字表达式匹配的文本。（并非所有的语言都支持） |

