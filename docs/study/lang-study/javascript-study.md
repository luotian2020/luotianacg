# javascript

## 1.script标签特性

1.type :

```
<script type='text/javascript'></script>
```

在老的 HTML4 标准中，要求 script 标签有 `type` 特性。通常是 `type="text/javascript"`

2.language:

```
<script language='javascript'></script>
```

显示脚本使用的语言。这个特性现在已经没有任何意义，因为语言默认就是 JavaScript。不再需要使用它了。

3.src:

```
<script src="/path/to/script.js"></script>
```

如果你有大量的 JavaScript 代码，我们可以将它放入一个单独的文件。脚本文件可以通过 `src` 特性（attribute）添加到 HTML 文件中。`/path/to/script.js` 是脚本文件从网站根目录开始的绝对路径。当然也可以提供当前页面的相对路径。例如，`src ="script.js"` 表示当前文件夹中的 `"script.js"` 文件

注意：**如果设置了** `src` **特性，**`script` **标签内容将会被忽略**！！

```
<script src="file.js">
  alert(1); // 此内容会被忽略，因为设定了 src
</script>
```

## 2.代码结构

1.分号

当存在换行符（line break）时，在大多数情况下可以省略分号。JavaScript 将换行符理解成“隐式”的分号。这也被称为 [自动分号插入](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)**在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！**

```
alert('Hello')
alert('World')
```

**存在 JavaScript 无法确定是否真的需要自动插入分号的情况。**

**一个错误的例子**

如果你好奇地想知道一个这种错误的具体例子，那你可以看看下面这段代码：

```javascript
[1, 2].forEach(alert)
```

你不需要考虑方括号 `[]` 和 `forEach` 的含义，现在它们并不重要，之后我们会学习它们。让我们先记住这段代码的运行结果：先显示 `1`，然后显示 `2`。

现在我们在代码前面插入一个 `alert` 语句，并且不加分号：

```javascript
alert("There will be an error")

[1, 2].forEach(alert)
```

现在，如果我们运行代码，只有第一个 `alert` 语句的内容被显示了出来，随后我们收到了一个错误！

但是，如果我们在第一个 `alert` 语句末尾加上一个分号，就工作正常了：

```javascript
alert("All fine now");

[1, 2].forEach(alert)
```

现在，我们能得到 “All fine now”，然后是 `1` 和 `2`。

无分号的变体（variant）会出现报错，是因为 JavaScript 并不会在方括号 `[...]` 前添加一个隐式的分号。

所以，因为没有自动插入分号，第一个例子中的代码被视为了一条简单的语句，我们从引擎看到的是这样的：

```javascript
alert("There will be an error")[1, 2].forEach(alert)
```

但它应该是两条语句，而不是一条。这种情况下的合并是不对的，所以才会造成错误。诸如此类，还有很多。

2.注释

**单行注释以两个正斜杠字符 `//` 开始。**

**多行注释以一个正斜杠和星号开始 `“/\*”` 并以一个星号和正斜杠结束 `“\*/”`。**

**不支持注释嵌套！**

不要在 `/*...*/` 内嵌套另一个 `/*...*/`。（会报错无法执行）

3."use strict"

一个字符串 `"use strict"` 或者 `'use strict'`。当它处于脚本文件的顶部时，则整个脚本文件都将以“现代”模式进行工作。

比如：

```javascript
"use strict";

// 代码以现代模式工作
...
```

**确保 “use strict” 出现在最顶部**

## 3.变量

在 JavaScript 中创建一个变量，我们需要用到 `let` 关键字。

下面的语句创建（也可以称为 **声明** 或者 **定义**）了一个名称为 “message” 的变量：

```javascript
let message;
```

现在，我们可以通过赋值运算符 `=` 为变量添加一些数据：

```javascript
let message;

message = 'Hello'; // 保存字符串
```

现在这个字符串已经保存到与该变量相关联的内存区域了。

在较旧的脚本中，你也可能发现另一个关键字 `var`，而不是 `let`：

```javascript
var message = 'Hello';
```

`var` 关键字与 `let` **大体** 相同，也用来声明变量，但稍微有些不同，也有点“老派”。

**声明两次会触发 error**

一个变量应该只被声明一次。

### [变量命名](https://zh.javascript.info/variables#variable-naming)

JavaScript 的变量命名有两个限制：

1. 变量名称必须仅包含字母，数字，符号 `$` 和 `_`。

2. 首字符必须非数字。

命名包括多个单词，通常采用驼峰式命名法（camelCase）。也就是，单词一个接一个，除了第一个单词，其他的每个单词都以大写字母开头：myVeryLongName。

有一张 [保留字列表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)，这张表中的保留字无法用作变量命名，因为它们被用于编程语言本身了。

比如，`let`、`class`、`return`、`function` 都被保留了。

### [常量](https://zh.javascript.info/variables#chang-liang)

声明一个常数（不变）变量，可以使用 `const` 而非 `let`：

```javascript
const myBirthday = '18.04.1982';
```

使用 `const` 声明的变量称为“常量”。它们不能被修改，如果你尝试修改就会发现报错：

```javascript
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // 错误，不能对常量重新赋值
```

当程序员能确定这个变量永远不会改变的时候，就可以使用 `const` 来确保这种行为，并且清楚地向别人传递这一事实。

### [大写形式的常数](https://zh.javascript.info/variables#da-xie-xing-shi-de-chang-shu)

一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

使用大写字母和下划线来命名这些常量。

## 4.数据类型

在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）。

### [Number 类型](https://zh.javascript.info/types#number-lei-xing)

```javascript
let n = 123;
n = 12.345;
```

*number* 类型代表整数和浮点数。

数字可以有很多操作，比如，乘法 `*`、除法 `/`、加法 `+`、减法 `-` 等等。

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：`Infinity`、`-Infinity` 和 `NaN`。

> `Infinity` 代表数学概念中的 [无穷大](https://en.wikipedia.org/wiki/Infinity) ∞。是一个比任何数字都大的特殊值.
>
> `NaN` 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果

在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。

脚本永远不会因为一个致命的错误（“死亡”）而停止。

### [BigInt 类型](https://zh.javascript.info/types#bigint-lei-xing)

在 JavaScript 中，“number” 类型无法表示大于 `(253-1)`（即 `9007199254740991`），或小于 `-(253-1)` 的整数。这是其内部表示形式导致的技术限制。

在大多数情况下，这个范围就足够了，但有时我们需要很大的数字，例如用于加密或微秒精度的时间戳。

`BigInt` 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

可以通过将 `n` 附加到整数字段的末尾来创建 `BigInt` 值。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

很少需要 `BigInt` 类型的数字.

### [String 类型](https://zh.javascript.info/types#string-lei-xing)

JavaScript 中的字符串必须被括在引号里。

```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

在 JavaScript 中，有三种包含字符串的方式。

1. 双引号：`"Hello"`.
2. 单引号：`'Hello'`.
3. 反引号：``Hello``.

双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中。例如：

```javascript
let name = "John";

// 嵌入一个变量
alert( `Hello, ${name}!` ); // Hello, John!

// 嵌入一个表达式
alert( `the result is ${1 + 2}` ); // the result is 3
```

`${…}` 内的表达式会被计算，计算结果会成为字符串的一部分。可以在 `${…}` 内放置任何东西：诸如名为 `name` 的变量，或者诸如 `1 + 2` 的算数表达式，或者其他一些更复杂的。

需要注意的是，这仅仅在反引号内有效，其他引号不允许这种嵌入。

```javascript
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2}（使用双引号则不会计算 ${…} 中的内容）
```

在一些语言中，单个字符有一个特殊的 “character” 类型，在 C 语言和 Java 语言中被称为 “char”。

在 JavaScript 中没有这种类型。只有一种 `string` 类型，一个字符串可以包含零个（为空）、一个或多个字符。

### [Boolean 类型（逻辑类型）](https://zh.javascript.info/types#boolean-lei-xing-luo-ji-lei-xing)

boolean 类型仅包含两个值：`true` 和 `false`。

这种类型通常用于存储表示 yes 或 no 的值：`true` 意味着 “yes，正确”，`false` 意味着 “no，不正确”。

比如：

```javascript
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
```

布尔值也可作为比较的结果：

```javascript
let isGreater = 4 > 1;

alert( isGreater ); // true（比较的结果是 "yes"）
```



### [“null” 值](https://zh.javascript.info/types#null-zhi)

特殊的 `null` 值不属于上述任何一种类型。

它构成了一个独立的类型，只包含 `null` 值：

```javascript
let age = null;
```

相比较于其他编程语言，JavaScript 中的 `null` 不是一个“对不存在的 `object` 的引用”或者 “null 指针”。

JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

上面的代码表示 `age` 是未知的。

### [“undefined” 值](https://zh.javascript.info/types#undefined-zhi)

特殊值 `undefined` 和 `null` 一样自成类型。

`undefined` 的含义是 `未被赋值`。

如果一个变量已被声明，但未被赋值，那么它的值就是 `undefined`：

```javascript
let age;

alert(age); // 弹出 "undefined"
```

从技术上讲，可以显式地将 `undefined` 赋值给变量：

```javascript
let age = 100;

// 将值修改为 undefined
age = undefined;

alert(age); // "undefined"
```

……但是不建议这样做。通常，使用 `null` 将一个“空”或者“未知”的值写入变量中，而 `undefined` 则保留作为未进行初始化的事物的默认初始值。

### [object 类型和 symbol 类型](https://zh.javascript.info/types#object-lei-xing-he-symbol-lei-xing)

`object` 类型是一个特殊的类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，`object` 则用于储存数据集合和更复杂的实体。

因为它非常重要，所以我们对其进行单独讲解。在充分学习了原始类型后，我们将会在 [对象](https://zh.javascript.info/object) 一章中介绍 `object`。

`symbol` 类型用于创建对象的唯一标识符。我们在这里提到 `symbol` 类型是为了完整性，但我们要在学完 `object` 类型后再学习它。

### [typeof 运算符](https://zh.javascript.info/types#type-typeof)

`typeof` 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

它支持两种语法形式：

1. 作为运算符：`typeof x`。
2. 函数形式：`typeof(x)`。

换言之，有括号和没有括号，得到的结果是一样的。

对 `typeof x` 的调用会以字符串的形式返回数据类型：

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

最后三行可能需要额外的说明：

1. `Math` 是一个提供数学运算的内建 `object`。我们会在 [数字类型](https://zh.javascript.info/number) 一节中学习它。此处仅作为一个 `object` 的示例。
2. `typeof null` 的结果是 `"object"`。这是官方承认的 `typeof` 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。`null` 绝对不是一个 `object`。`null` 有自己的类型，它是一个特殊值。
3. `typeof alert` 的结果是 `"function"`，因为 `alert` 在 JavaScript 语言中是一个函数。我们会在下一章学习函数，那时我们会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待，并返回 `"function"`。这也是来自于 JavaScript 语言早期的问题。从技术上讲，这种行为是不正确的，但在实际编程中却非常方便。

### [总结](https://zh.javascript.info/types#zong-jie)

JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 `object` 为复杂数据类型）。

- `number` 用于任何类型的数字：整数或浮点数，在 `±(253-1)` 范围内的整数。
- `bigint` 用于任意长度的整数。
- `string` 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。
- `boolean` 用于 `true` 和 `false`。
- `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
- `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
- `symbol` 用于唯一的标识符。
- `object` 用于更复杂的数据结构。

我们可以通过 `typeof` 运算符查看存储在变量中的数据类型。

- 两种形式：`typeof x` 或者 `typeof(x)`。

- 以字符串的形式返回类型名称，例如 `"string"`。

- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`。

## 5.交互

### [alert](https://zh.javascript.info/alert-prompt-confirm#alert)

这个我们前面已经看到过了。它会显示一条信息，并等待用户按下 “OK”。

例如：

```javascript
alert("Hello");
```

弹出的这个带有信息的小窗口被称为 **模态窗**。“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口。在上面示例这种情况下 —— 直到用户点击“确定”按钮。

### [prompt](https://zh.javascript.info/alert-prompt-confirm#prompt)

`prompt` 函数接收两个参数：

```javascript
result = prompt(title, [default]);
```

浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。

- `title`

  显示给用户的文本

- `default`

  可选的第二个参数，指定 input 框的初始值。

上述语法中 `default` 周围的方括号表示该参数是可选的，不是必需的。

### [confirm](https://zh.javascript.info/alert-prompt-confirm#confirm)

语法：

```javascript
result = confirm(question);
```

`confirm` 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。

点击确定返回 `true`，点击取消返回 `false`。

例如：

```javascript
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
```

### [总结](https://zh.javascript.info/alert-prompt-confirm#zong-jie)

我们学习了与用户交互的 3 个浏览器的特定函数：

- `alert`

  显示信息。

- `prompt`

  显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 `null`。

- `confirm`

  显示信息等待用户点击确定或取消。点击确定返回 `true`，点击取消或按下 Esc 键返回 `false`。

这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。

上述所有方法共有两个限制：

1. 模态窗口的确切位置由浏览器决定。通常在页面中心。
2. 窗口的确切外观也取决于浏览器。我们不能修改它。

## 6.类型转换

大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型。

### 字符串转换

调用 `String(value)` 来将 `value` 转换为字符串类型

我们也可以显式地调用 `String(value)` 来将 `value` 转换为字符串类型：

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
alert(typeof value); // string
```

字符串转换最明显。`false` 变成 `"false"`，`null` 变成 `"null"` 等。

### 数字型转换

在算术函数和表达式中，会自动进行 number 类型转换。

使用 `Number(value)` 显式地将这个 `value` 转换为 number 类型。

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

当我们从 string 类型源（如文本表单）中读取一个值，但期望输入一个数字时，通常需要进行显式转换。

如果该字符串不是一个有效的数字，转换的结果会是 `NaN`。例如：

```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN，转换失败
```

number 类型转换规则：

| 值              | 变成……                                                       |
| :-------------- | :----------------------------------------------------------- |
| `undefined`     | `NaN`                                                        |
| `null`          | `0`                                                          |
| `true 和 false` | `1` and `0`                                                  |
| `string`        | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`。

### 布尔型转换

调用 Boolean(value) 显式地进行转换。

转换规则如下：

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。

比如：

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

**请注意：包含 0 的字符串 `"0"` 是 `true`**

一些编程语言（比如 PHP）视 `"0"` 为 `false`。但在 JavaScript 中，非空的字符串总是 `true`。

```javascript
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 空白，也是 true（任何非空字符串都是 true）
```

## 7.基础运算符，数学

### 术语

常用术语：

- **运算元** —— 运算符应用的对象。比如说乘法运算 `5 * 2`，有两个运算元：左运算元 `5` 和右运算元 `2`。有时候人们也称其为“参数”而不是“运算元”。

- 如果一个运算符对应的只有一个运算元，那么它是 **一元运算符**。比如说一元负号运算符（unary negation）`-`，它的作用是对数字进行正负转换：

  ```javascript
  let x = 1;
  
  x = -x;
  alert( x ); // -1，一元负号运算符生效
  ```

- 如果一个运算符拥有两个运算元，那么它是 **二元运算符**。减号还存在二元运算符形式：

  ```javascript
  let x = 1, y = 3;
  alert( y - x ); // 2，二元运算符减号做减运算
  ```

  严格地说，在上面的示例中，我们使用一个相同的符号表征了两个不同的运算符：负号运算符，即反转符号的一元运算符，减法运算符，是从另一个数减去一个数的二元运算符。

  ### 数学运算

  支持以下数学运算：

  - 加法 `+`,
  - 减法 `-`,
  - 乘法 `*`,
  - 除法 `/`,
  - 取余 `%`,
  - 求幂 `**`.

  前四个都很简单，而 `%` 和 `**` 则需要说一说。

  取余-- %

  取余运算符是 `%`，尽管它看起来很像百分数，但实际并无关联。

  `a % b` 的结果是 `a` 整除 `b` 的 [余数](https://zh.wikipedia.org/zh-hans/余数))。

  例如：

  ```javascript
  alert( 5 % 2 ); // 1，5 除以 2 的余数
  alert( 8 % 3 ); // 2，8 除以 3 的余数
  ```

  求幂**

  求幂运算 `a ** b` 是 `a` 乘以自身 `b` 次。

  例如：

  ```javascript
  alert( 2 ** 2 ); // 4  (2 * 2，自乘 2 次)
  alert( 2 ** 3 ); // 8  (2 * 2 * 2，自乘 3 次)
  alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2，自乘 4 次)
  ```

  在数学上，求幂的定义也适用于非整数。例如，平方根是以 `1/2` 为单位的求幂：

  ```javascript
  alert( 4 ** (1/2) ); // 2（1/2 次方与平方根相同)
  alert( 8 ** (1/3) ); // 2（1/3 次方与立方根相同)
  ```

  ### 用二元字符串·+号连接字符串

  通常，加号 `+` 用于求和。

  但是如果加号 `+` 被应用于字符串，它将合并（连接）各个字符串：

  ```javascript
  let s = "my" + "string";
  alert(s); // mystring
  ```

  注意：只要任意一个运算元是字符串，那么另一个运算元也将被转化为字符串。

```javascript
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

下面是一个更复杂的例子：

```javascript
alert(2 + 2 + '1' ); // "41"，不是 "221"
```

在这里，运算符是按顺序工作。第一个 `+` 将两个数字相加，所以返回 `4`，然后下一个 `+` 将字符串 `1` 加入其中，所以就是 `4 + '1' = 41`。

二元 `+` 是唯一一个以这种方式支持字符串的运算符。其他算术运算符只对数字起作用，并且总是将其运算元转换为数字。

### 数字转化，一元运算符 +

一元运算符加号，或者说，加号 `+` 应用于单个值，对数字没有任何作用。但是如果运算元不是数字，加号 `+` 则会将其转化为数字。

```javascript
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// 转化非数字
alert( +true ); // 1
alert( +"" );   // 0
```

它的效果和 `Number(...)` 相同，但是更加简短。

对字符串求和，该怎么办？

二元运算符加号会把它们合并成字符串：

```javascript
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23"，二元运算符加号合并字符串
```

如果我们想把它们当做数字对待，我们需要转化它们，然后再求和：

```javascript
let apples = "2";
let oranges = "3";

// 在二元运算符加号起作用之前，所有的值都被转化为了数字
alert( +apples + +oranges ); // 5

// 更长的写法
// alert( Number(apples) + Number(oranges) ); // 5
```

从一个数学家的视角来看，大量的加号可能很奇怪。但是从一个程序员的视角

### 运算符优先级

在 JavaScript 中有众多运算符。每个运算符都有对应的优先级数字。数字越大，越先执行。如果优先级相同，则按照由左至右的顺序执行。

这是一个摘抄自 Mozilla 的 [优先级表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)（你没有必要把这全记住，但要记住一元运算符优先级高于二元运算符）：

| 优先级 | 名称     | 符号 |
| :----- | :------- | :--- |
| …      | …        | …    |
| 17     | 一元加号 | `+`  |
| 17     | 一元负号 | `-`  |
| 16     | 求幂     | `**` |
| 15     | 乘号     | `*`  |
| 15     | 除号     | `/`  |
| 13     | 加号     | `+`  |
| 13     | 减号     | `-`  |
| …      | …        | …    |
| 3      | 赋值符   | `=`  |
| …      | …        | …    |

我们可以看到，“一元加号运算符”的优先级是 `17`，高于“二元加号运算符”的优先级 `13`。这也是为什么表达式 `"+apples + +oranges"` 中的一元加号先生效，然后才是二元加法。

### 赋值运算符 =

当我们赋值时，比如 `x = 2 * 2 + 1`，所有的计算先执行，然后 `=` 才执行，将计算结果存储到 `x`。

赋值 =返回一个值

在 JavaScript 中，大多数运算符都会返回一个值。这对于 `+` 和 `-` 来说是显而易见的，但对于 `=` 来说也是如此。

语句 `x = value` 将值 `value` 写入 `x` **然后返回 x**。

下面是一个在复杂语句中使用赋值的例子：

```javascript
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

上面这个例子，`(a = b + 1)` 的结果是赋给 `a` 的值（也就是 `3`）。然后该值被用于进一步的运算。

（不建议这样用）

链式赋值

链式赋值：

```javascript
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

链式赋值从右到左进行计算。首先，对最右边的表达式 `2 + 2` 求值，然后将其赋给左边的变量：`c`、`b` 和 `a`。最后，所有的变量共享一个值。

### 原地修改

对一个变量做运算，并将新的结果存储在同一个变量中。

例如：

```javascript
let n = 2;
n = n + 5;
n = n * 2;
```

可以使用运算符 `+=` 和 `*=` 来缩写这种表示。

```javascript
let n = 2;
n += 5; // 现在 n = 7（等同于 n = n + 5）
n *= 2; // 现在 n = 14（等同于 n = n * 2）

alert( n ); // 14
```

所有算术和位运算符都有简短的“修改并赋值”运算符：`/=` 和 `-=` 等。

这类运算符的优先级与普通赋值运算符的优先级相同，所以它们在大多数其他运算之后执行：

```javascript
let n = 2;

n *= 3 + 5;

alert( n ); // 16
```

### 自增自减 ++/--

有一些专门的运算符：

- **自增** `++` 将变量与 1 相加：

  ```javascript
  let counter = 2;
  counter++;      // 和 counter = counter + 1 效果一样，但是更简洁
  alert( counter ); // 3
  ```

- **自减** `--` 将变量与 1 相减：

  ```javascript
  let counter = 2;
  counter--;      // 和 counter = counter - 1 效果一样，但是更简洁
  alert( counter ); // 1
  ```

**重要：**

自增/自减只能应用于变量。试一下，将其应用于数值（比如 `5++`）则会报错。

运算符 `++` 和 `--` 可以置于变量前，也可以置于变量后。

- 当运算符置于变量后，被称为“后置形式”：`counter++`。
- 当运算符置于变量前，被称为“前置形式”：`++counter`。

两者都做同一件事：将变量 `counter` 与 `1` 相加。

总结：

- 如果自增/自减的值不会被使用，那么两者形式没有区别：

  ```javascript
  let counter = 0;
  counter++;
  ++counter;
  alert( counter ); // 2，以上两行作用相同
  ```

- 如果我们想要对变量进行自增操作，**并且** 需要立刻使用自增后的值，那么我们需要使用前置形式：

  ```javascript
  let counter = 0;
  alert( ++counter ); // 1
  ```

- 如果我们想要将一个数加一，但是我们想使用其自增之前的值，那么我们需要使用后置形式：

  ```javascript
  let counter = 0;
  alert( counter++ ); // 0
  ```

### 位运算符

位运算符把运算元当做 32 位整数，并在它们的二进制表现形式上操作。

这些运算符不是 JavaScript 特有的。大部分的编程语言都支持这些运算符。

下面是位运算符：

- 按位与 ( `&` )
- 按位或 ( `|` )
- 按位异或 ( `^` )
- 按位非 ( `~` )
- 左移 ( `<<` )
- 右移 ( `>>` )
- 无符号右移 ( `>>>` )

这些运算符很少被使用，一般是我们需要在最低级别（位）上操作数字时才使用。

### 逗号运算符

逗号运算符 `,` 是最少见最不常使用的运算符之一。有时候它会被用来写更简短的代码，因此为了能够理解代码，我们需要了解它。

逗号运算符能让我们处理多个语句，使用 `,` 将它们分开。每个语句都运行了，但是只有最后的语句的结果会被返回。

举个例子：

```javascript
let a = (1 + 2, 3 + 4);

alert( a ); // 7（3 + 4 的结果）
```

这里，第一个语句 `1 + 2` 运行了，但是它的结果被丢弃了。随后计算 `3 + 4`，并且该计算结果被返回。

请注意逗号运算符的优先级非常低，比 `=` 还要低，因此上面你的例子中圆括号非常重要。

如果没有圆括号：`a = 1 + 2, 3 + 4` 会先执行 `+`，将数值相加得到 `a = 3, 7`，然后赋值运算符 `=` 执行 `a = 3`，然后逗号之后的数值 `7` 不会再执行，它被忽略掉了。相当于 `(a = 1 + 2), 3 + 4`

## 8.值的比较

在 JavaScript 中，它们的编写方式如下：

- 大于 / 小于：`a > b`，`a < b`。
- 大于等于 / 小于等于：`a >= b`，`a <= b`。
- 检查两个值的相等：`a == b`，请注意双等号 `==` 表示相等性检查，而单等号 `a = b` 表示赋值。
- 检查两个值不相等。不相等在数学中的符号是 `≠`，但在 JavaScript 中写成 `a != b`。

### 比较结果为Boolean类型

所有比较运算符均返回布尔值：

- `true` —— 表示“yes（是）”，“correct（正确）”或“the truth（真）”。
- `false` —— 表示“no（否）”，“wrong（错误）”或“not the truth（非真）”。

示例：

```javascript
alert( 2 > 1 );  // true（正确）
alert( 2 == 1 ); // false（错误）
alert( 2 != 1 ); // true（正确）
```

和其他类型的值一样，比较的结果可以被赋值给任意变量。

### 字符串比较

在比较字符串的大小时，JavaScript 会使用“字典（dictionary）”或“词典（lexicographical）”顺序进行判定。

字符串是按字符（母）逐个进行比较的。

字符串的比较算法非常简单：

1. 首先比较两个字符串的首位字符大小。
2. 如果一方字符较大（或较小），则该字符串大于（或小于）另一个字符串。算法结束。
3. 否则，如果两个字符串的首位字符相等，则继续取出两个字符串各自的后一位字符进行比较。
4. 重复上述步骤进行比较，直到比较完成某字符串的所有字符为止。
5. 如果两个字符串的字符同时用完，那么则判定它们相等，否则未结束（还有未比较的字符）的字符串更大。

**非真正的字典顺序，而是 Unicode 编码顺序**

在上面的算法中，比较大小的逻辑与字典或电话簿中的排序很像，但也不完全相同。

比如说，字符串比较对字母大小写是敏感的。大写的 `"A"` 并不等于小写的 `"a"`。哪一个更大呢？实际上小写的 `"a"` 更大。这是因为在 JavaScript 使用的内部编码表中（Unicode），小写字母的字符索引值更大。我们会在 [字符串](https://zh.javascript.info/string) 这章讨论更多关于字符串的细节。

### 不同类型间的比较

当对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小。

例如：

```javascript
alert( '2' > 1 ); // true，字符串 '2' 会被转化为数字 2
alert( '01' == 1 ); // true，字符串 '01' 会被转化为数字 1
```

对于布尔类型值，`true` 会被转化为 `1`、`false` 转化为 `0`。

有时候，以下两种情况会同时发生：

- 若直接比较两个值，其结果是相等的。
- 若把两个值转为布尔值，它们可能得出完全相反的结果，即一个是 `true`，一个是 `false`。

例如：

```javascript
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

对于 JavaScript 而言，这种现象其实挺正常的。因为 JavaScript 会把待比较的值转化为数字后再做比较（因此 `"0"` 变成了 `0`）。若只是将一个变量转化为 `Boolean` 值，则会使用其他的类型转换规则。

### 严格相等

普通的相等性检查 `==` 存在一个问题，它不能区分出 `0` 和 `false`：

```javascript
alert( 0 == false ); // true
```

也同样无法区分空字符串和 `false`：

```javascript
alert( '' == false ); // true
```

这是因为在比较不同类型的值时，处于相等判断符号 `==` 两侧的值会先被转化为数字。空字符串和 `false` 也是如此，转化后它们都为数字 0。

如果我们需要区分 `0` 和 `false`，该怎么办？

**严格相等运算符 `===` 在进行比较时不会做任何的类型转换。**

换句话说，如果 `a` 和 `b` 属于不同的数据类型，那么 `a === b` 不会做任何的类型转换而立刻返回 `false`。

让我们试试：

```javascript
alert( 0 === false ); // false，因为被比较值的数据类型不同
```

同样的，与“不相等”符号 `!=` 类似，“严格不相等”表示为 `!==`。

严格相等的运算符虽然写起来稍微长一些，但是它能够很清楚地显示代码意图，降低你犯错的可能性。

### 对null和undefined进行比较

当使用 `null` 或 `undefined` 与其他值进行比较时，其返回结果常常出乎你的意料。

- 当使用严格相等 `===` 比较二者时

  它们不相等，因为它们属于不同的类型。`alert( null === undefined ); // false`

- 当使用非严格相等 `==` 比较二者时

  JavaScript 存在一个特殊的规则，会判定它们相等。它们俩就像“一对恋人”，仅仅等于对方而不等于其他任何的值（只在非严格相等下成立）。`alert( null == undefined ); // true`

- 当使用数学式或其他比较方法 `< > <= >=` 时：

  `null/undefined` 会被转化为数字：`null` 被转化为 `0`，`undefined` 被转化为 `NaN`。

下面让我们看看，这些规则会带来什么有趣的现象。同时更重要的是，我们需要从中学会如何远离这些特性带来的“陷阱”。

 [奇怪的结果：null vs 0](https://zh.javascript.info/comparison#qi-guai-de-jie-guo-nullvs0)

通过比较 `null` 和 0 可得：

```javascript
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

是的，上面的结果完全打破了你对数学的认识。在最后一行代码显示“`null` 大于等于 0”的情况下，前两行代码中一定会有一个是正确的，然而事实表明它们的结果都是 false。

为什么会出现这种反常结果，这是因为相等性检查 `==` 和普通比较符 `> < >= <=` 的代码逻辑是相互独立的。进行值的比较时，`null` 会被转化为数字，因此它被转化为了 `0`。这就是为什么（3）中 `null >= 0` 返回值是 true，（1）中 `null > 0` 返回值是 false。

另一方面，`undefined` 和 `null` 在相等性检查 `==` 中不会进行任何的类型转换，它们有自己独立的比较规则，所以除了它们之间互等外，不会等于任何其他的值。这就解释了为什么（2）中 `null == 0` 会返回 false。

特立独行的 undefined

`undefined` 不应该被与其他值进行比较：

```javascript
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

为何它看起来如此厌恶 0？返回值都是 false！

原因如下：

- `(1)` 和 `(2)` 都返回 `false` 是因为 `undefined` 在比较中被转换为了 `NaN`，而 `NaN` 是一个特殊的数值型值，它与任何值进行比较都会返回 `false`。
- `(3)` 返回 `false` 是因为这是一个相等性检查，而 `undefined` 只与 `null` 相等，不会与其他值相等。

## 9.条件分支：if 和？

根据不同条件执行不同的操作，使用 `if` 语句和条件运算符 `?`（也称为“问号”运算符）来实现。

### if 语句

`if(...)` 语句计算括号里的条件表达式，如果计算结果是 `true`，就会执行对应的代码块

如果有多个语句要执行，我们必须将要执行的代码块封装在大括号内。

建议每次使用 if 语句都用大括号 `{}` 来包装代码块，即使只有一条语句。这样可以提高代码可读性。

### 布尔转换

`if (…)` 语句会计算圆括号内的表达式，并将计算结果转换为布尔型。

### else 语句

`if` 语句有时会包含一个可选的 “else” 块。如果判断条件不成立，就会执行它内部的代码。

### 多个 else  if 语句

测试一个条件的几个变体。我们可以通过使用 `else if` 子句实现。

例如：

```javascript
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactl!' );
}
```

可以有更多的 `else if` 块。结尾的 `else` 是可选的。

### 条件运算符 ？

运算符通过问号 `?` 表示。有时它被称为三元运算符，被称为“三元”是因为该运算符中有三个操作数。实际上它是 JavaScript 中唯一一个有这么多操作数的运算符。

语法：

```javascript
let result = condition ? value1 : value2;
```

计算条件结果，如果结果为真，则返回 `value1`，否则返回 `value2`

### 多个？

使用一系列问号 `?` 运算符可以返回一个取决于多个条件的值。

例如：

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

可能很难一下子看出发生了什么。但经过仔细观察，我们可以看到它只是一个普通的检查序列。

1. 第一个问号检查 `age < 3`。
2. 如果为真 — 返回 `'Hi, baby!'`。否则，会继续执行冒号 `":"` 后的表达式，检查 `age < 18`。
3. 如果为真 — 返回 `'Hello!'`。否则，会继续执行下一个冒号 `":"` 后的表达式，检查 `age < 100`。
4. 如果为真 — 返回 `'Greetings!'`。否则，会继续执行最后一个冒号 `":"` 后面的表达式，返回 `'What an unusual age!'`。

### ？的非常规使用

可以使用问号 `?` 来代替 `if` 语句：

```javascript
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```

根据条件 `company =='Netscape'`，要么执行 `?` 后面的第一个表达式并显示对应内容，要么执行第二个表达式并显示对应内容。

在这里我们不是把结果赋值给变量。而是根据条件执行不同的代码。

**不建议这样使用问号运算符。**

这种写法比 `if` 语句更短，对一些程序员很有吸引力。但它的可读性差。

## 10.逻辑运算符

JavaScript 中有三个逻辑运算符：`||`（或），`&&`（与），`!`（非）。

这些运算符却可以被应用于任意类型的值，而不仅仅是布尔值。它们的结果也同样可以是任意类型。

### 或（||）

在传统的编程中，逻辑或仅能够操作布尔值。如果参与运算的任意一个参数为 `true`，返回的结果就为 `true`，否则返回 `false`

附加特性：

给定多个参与或运算的值：

```javascript
result = value1 || value2 || value3;
```

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数。
- 处理每一个操作数时，都将其转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），则返回最后一个操作数。

返回的值是操作数的初始形式，不会做布尔转换。

一个或运算 `||` 的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

例如：

```javascript
alert( 1 || 0 ); // 1（1 是真值）

alert( null || 1 ); // 1（1 是第一个真值）
alert( null || 0 || 1 ); // 1（第一个真值）

alert( undefined || null || 0 ); // 0（都是假值，返回最后一个值）
```

与“纯粹的、传统的、仅仅处理布尔值的或运算”相比，这个规则就引起了一些很有趣的用法

1. **获取变量列表或者表达式中的第一个真值。**

   例如，我们有变量 `firstName`、`lastName` 和 `nickName`，都是可选的（即可以是 undefined，也可以是假值）。

   我们用或运算 `||` 来选择有数据的那一个，并显示出来（如果没有设置，则用 `"Anonymous"`）：

   ```javascript
   let firstName = "";
   let lastName = "";
   let nickName = "SuperCoder";
   
   alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
   ```

   如果所有变量的值都为假，结果就是 `"Anonymous"`。

   2.**短路求值（Short-circuit evaluation）。**

   或运算符 `||` 的另一个用途是所谓的“短路求值”。

   这指的是，`||` 对其参数进行处理，直到达到第一个真值，然后立即返回该值，而无需处理其他参数。

   如果操作数不仅仅是一个值，而是一个有副作用的表达式，例如变量赋值或函数调用，那么这一特性的重要性就变得显而易见了。

   在下面这个例子中，只会打印第二条信息：

   ```javascript
   true || alert("not printed");
   false || alert("printed");
   ```

   在第一行中，或运算符 `||` 在遇到 `true` 时立即停止运算，所以 `alert` 没有运行。

   有时，人们利用这个特性，只在左侧的条件为假时才执行命令。

   ### 与（&&）

   在传统的编程中，当两个操作数都是真值时，与运算返回 `true`，否则返回 `false`。

   **与运算寻找第一个假值**

   给出多个参加与运算的值：

   ```javascript
   result = value1 && value2 && value3;
   ```

   与运算 `&&` 做了如下的事：

   - 从左到右依次计算操作数。
   - 在处理每一个操作数时，都将其转化为布尔值。如果结果是 `false`，就停止计算，并返回这个操作数的初始值--假值。
   - 如果所有的操作数都被计算过（例如都是真值），则返回最后一个操作数。

   换句话说，与运算返回第一个假值，如果没有假值就返回最后一个值。

   如果所有的值都是真值，最后一个值将会被返回。

   与运算 `&&` 的优先级比或运算 `||` 要高。

   ## 非（!）

   `!` 表示布尔非运算符。

   逻辑非运算符接受一个参数，并按如下运作：

   1. 将操作数转化为布尔类型：`true/false`。

   2. 返回相反的值。

   3. 两个非运算 `!!` 有时候用来将某个值转化为布尔类型：

      ```javascript
      alert( !!"non-empty string" ); // true
      alert( !!null ); // false
      ```

      也就是，第一个非运算将该值转化为布尔类型并取反，第二个非运算再次取反。最后我们就得到了一个任意值到布尔值的转化。

   非运算符 `!` 的优先级在所有逻辑运算符里面最高，所以它总是在 `&&` 和 `||` 之前执行。

## 11.空值运算符  ‘？？’

空值合并运算符（nullish coalescing operator）的写法为两个问号 `??`。

`a ?? b` 的结果是：

- 如果 `a` 是已定义的，则结果为 `a`，
- 如果 `a` 不是已定义的，则结果为 `b`

换句话说，如果第一个参数不是 `null/undefined`，则 `??` 返回第一个参数。否则，返回第二个参数。

通常 `??` 的使用场景是，为可能是未定义的变量提供一个默认值。

在这里，如果 `user` 是未定义的，我们则显示 `Anonymous`：

```javascript
let user;

alert(user ?? "Anonymous"); // Anonymous
```

当然，如果 `user` 的值为除 `null/undefined` 外的任意值，那么我们看到的将是它：

```javascript
let user = "John";

alert(user ?? "Anonymous"); // John
```

我们还可以使用 `??` 序列从一系列的值中选择出第一个非 `null/undefined` 的值。

|| 与？？之间重要的区别是：

- `||` 返回第一个 **真** 值。
- `??` 返回第一个 **已定义的** 值。

`??` 运算符的优先级相当低：在 [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table) 中为 `5`。因此，`??` 在 `=` 和 `?` 之前计算，但在大多数其他运算符（例如，`+` 和 `*`）之后计算。

JavaScript 禁止将 `??` 运算符与 `&&` 和 `||` 运算符一起使用，除非使用括号明确指定了优先级。

## 12.循环

### while

**循环** 是一种重复运行同一代码的方法。

`while` 循环的语法如下：

```javascript
while (condition) {
  // 代码
  // 所谓的“循环体”
}
```

当 `condition` 为真时，执行循环体的 `code`。

**单行循环体不需要大括号**

如果循环体只有一条语句，则可以省略大括号 `{…}`。

### do.... while

使用 `do..while` 语法可以将条件检查移至循环体 **下面**：

```javascript
do {
  // 循环体
} while (condition);
```

循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体.

### for

`for` 循环更加复杂，但它是最常使用的循环形式。

`for` 循环看起来就像这样：

```javascript
for (begin; condition; step) {
  // ……循环体……
}
```

| 语句段         |            |                                                  |
| :------------- | :--------- | :----------------------------------------------- |
| begin          | `i = 0`    | 进入循环时执行一次。                             |
| condition      | `i < 3`    | 在每次循环迭代之前检查，如果为 false，停止循环。 |
| body（循环体） | `alert(i)` | 条件为真时，重复运行。                           |
| step           | `i++`      | 在每次循环体迭代后执行。                         |

### 跳出循环

通常条件为假时，循环会终止。

但我们随时都可以使用 `break` 指令强制退出。

面这个循环要求用户输入一系列数字，在输入的内容不是数字时“终止”循环。

```javascript
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

如果用户输入空行或取消输入，在 `(*)` 行的 `break` 指令会被激活。它立刻终止循环，将控制权传递给循环后的第一行，即，`alert`。

### 继续下一次循环

`continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。

如果我们完成了当前的迭代，并且希望继续执行下一次迭代，我们就可以使用它。

**禁止 `break/continue` 在 ‘?’ 的右边**

请注意非表达式的语法结构不能与三元运算符 `?` 一起使用。特别是 `break/continue` 这样的指令是不允许这样使用的。

我们使用如下代码：

```javascript
if (i > 5) {
  alert(i);
} else {
  continue;
}
```

……用问号重写：

```javascript
(i > 5) ? alert(i) : continue; // continue 不允许在这个位置
```

……代码会停止运行，并显示有语法错误。

这是不（建议）使用问号 `?` 运算符替代 `if` 语句的另一个原因

### break/continue 标签

**标签** 是在循环之前带有冒号的标识符：

```javascript
labelName: for (...) {
  ...
}
```

`break <labelName>` 语句跳出循环至标签处。

```javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer; // (*)

    // 用得到的值做些事……
  }
}
alert('Done!');//这里主要实现的是跳出多重循环执行alert();
```

上述代码中，`break outer` 向上寻找名为 `outer` 的标签并跳出当前循环。

因此，控制权直接从 `(*)` 转至 `alert('Done!')`。

我们还可以将标签移至单独一行：

```javascript
outer:
for (let i = 0; i < 3; i++) { ... }
```

`continue` 指令也可以与标签一起使用。在这种情况下，执行跳转到标记循环的下一次迭代。

**标签并不允许“跳到”所有位置**

标签不允许我们跳到代码的任意位置。

例如，这样做是不可能的：

```javascript
break label;  // 无法跳转到这个标签

label: for (...)
```

只有在**循环内部**才能调用 `break/continue`，并且**标签必须位于指令上方的某个位置**。

## 13.Switch语句

`switch` 语句可以替代多个 `if` 判断。

`switch` 语句为多分支选择的情况提供了一个更具描述性的方式。

### 语法

`switch` 语句有至少一个 `case` 代码块和一个可选的 `default` 代码块。

就像这样：

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

- 比较 `x` 值与第一个 `case`（也就是 `value1`）是否严格相等，然后比较第二个 `case`（`value2`）以此类推。
- 如果相等，`switch` 语句就执行相应 `case` 下的代码块，直到遇到最靠近的 `break` 语句（或者直到 `switch` 语句末尾）。
- 如果没有符合的 case，则执行 `default` 代码块（如果 `default` 存在）。

**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`。**

`switch` 的例子（高亮的部分是执行的 `case` 部分）：

```javascript
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```

这里的 `switch` 从第一个 `case` 分支开始将 `a` 的值与 `case` 后的值进行比较，第一个 `case` 后的值为 `3` 匹配失败。

**任何表达式都可以成为 `switch/case` 的参数**

`switch` 和 `case` 都允许任意表达式。

比如：

```javascript
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
```

这里 `+a` 返回 `1`，这个值跟 `case` 中 `b + 1` 相比较，然后执行对应的代码。

### case 分组

共享同一段代码的几个 `case` 分支可以被分为一组：

，如果我们想让 `case 3` 和 `case 5` 执行同样的代码：

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

现在 `3` 和 `5` 都显示相同的信息。

`switch/case` 有通过 case 进行“分组”的能力，其实是 switch 语句没有 `break` 时的副作用。因为没有 `break`，`case 3` 会从 `(*)` 行执行到 `case 5`。

**注意**：强调一下，这里的相等是严格相等。被比较的值必须是相同的类型才能进行匹配

## 14.函数

函数是程序的主要“构建模块”。函数使该段代码可以被调用很多次，而不需要写重复的代码。

### 函数声明

使用 **函数声明** 创建函数。

看起来就像这样：

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}
```

`function` 关键字首先出现，然后是 **函数名**，然后是括号之间的 **参数** 列表（用逗号分隔，在上述示例中为空），最后是花括号之间的代码（即“函数体”）。

```javascript
function name(parameters) {
  ...body...
}
```

我们的新函数可以通过名称调用：`showMessage()`。

### 局部变量

在函数中声明的变量只在该函数内部可见。

### 外部变量

函数也可以访问外部变量。

```javascript
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```

函数对外部变量拥有全部的访问权限。函数也可以修改外部变量。

函数对外部变量拥有全部的访问权限。函数也可以修改外部变量

只有在没有局部变量的情况下才会使用外部变量。

如果在函数内部声明了同名变量，那么函数会 **遮蔽** 外部变量。

在下面的代码中，函数使用局部的 `userName`，而外部变量被忽略：

```javascript
let userName = 'John';

function showMessage() {
  let userName = "Bob"; // 声明一个局部变量

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// 函数会创建并使用它自己的 userName
showMessage();

alert( userName ); // John，未被更改，函数没有访问外部变量。
```

**全局变量**

任何函数之外声明的变量，例如上述代码中的外部变量 `userName`，都被称为 **全局** 变量。

全局变量在任意函数中都是可见的（除非被局部变量遮蔽）。

减少全局变量的使用是一种很好的做法。现代的代码有很少甚至没有全局变量。大多数变量存在于它们的函数中。但是有时候，全局变量能够用于存储项目级别的数据。

### 参数

我们可以使用参数（也称“函数参数”）来将任意数据传递给函数。

示例中，函数有两个参数：`from` 和 `text`。

```javascript
function showMessage(from, text) { // 参数：from 和 text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

当函数在 `(*)` 和 `(**)` 行中被调用时，给定值被**复制**到了局部变量 `from` 和 `text`。然后函数使用它们进行计算。

**注意**：例子：我们有一个变量 `from`，并将它传递给函数。请注意：函数会修改 `from`，但在函数外部看不到更改，因为函数修改的是复制的**变量值副本**：

```javascript
function showMessage(from, text) {

  from = '*' + from + '*'; // 让 "from" 看起来更优雅

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// "from" 值相同，函数修改了一个局部的副本。
alert( from ); // Ann
```

### 默认值

如果未提供参数，那么其默认值则是 `undefined`。之前提到的函数 `showMessage(from, text)` 可以只使用一个参数调用：

```javascript
showMessage("Ann");
```

那不是错误，这样调用将输出 `"*Ann*: undefined"`。这里没有参数 `text`，所以程序假定 `text === undefined`。

如果我们想在本示例中设定“默认”的 `text`，那么我们可以在 `=` 之后指定它：

```javascript
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

现在如果 `text` 参数未被传递，它将会得到值 `"no text given"`。

**默认参数的计算**

在 JavaScript 中，每次函数在没带个别参数的情况下被调用，默认参数会被计算出来。

在上面的例子中，每次 `showMessage()` 不带 `text` 参数被调用时，`anotherFunction()` 就会被调用。

**后备的默认参数**

有些时候，将参数默认值的设置放在函数执行（相较更后期）而不是函数声明的时候，也能行得通。

为了判断参数是否被省略掉，我们可以拿它跟 `undefined` 做比较：

```javascript
function showMessage(text) {
  if (text === undefined) {
    text = 'empty message';
  }

  alert(text);
}

showMessage(); // empty message
```

……或者我们可以使用 `||` 运算符：

```javascript
// 如果 "text" 参数被省略或者被传入空字符串，则赋值为 'empty'
function showMessage(text) {
  text = text || 'empty';
  ...
}
```

现代 JavaScript 引擎支持 [空值合并运算符](https://zh.javascript.info/nullish-coalescing-operator) `??`，当可能遇到其他假值时它更有优势，如 `0` 会被视为正常值不被合并：

```javascript
// 如果没有传入 "count" 参数，则显示 "unknown"
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
```

### 返回值

函数可以将一个值返回到调用代码中作为结果。

最简单的例子是将两个值相加的函数：

```javascript
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述代码中的 `result`）。

只使用 `return` 但没有返回值也是可行的。但这会导致函数立即退出。

**空值的 `return` 或没有 `return` 的函数返回值为 `undefined`**

如果函数无返回值，它就会像返回 `undefined` 一样：

```javascript
function doNothing() { /* 没有代码 */ }

alert( doNothing() === undefined ); // true
```

空值的 `return` 和 `return undefined` 等效。

**不要在 `return` 与返回值之间添加新行**

对于 `return` 的长表达式，可能你会很想将其放在单独一行，如下所示：

```javascript
return
 (some + long + expression + or + whatever * f(a) + f(b))
```

但这不行，因为 JavaScript 默认会在 `return` 之后加上分号。上面这段代码和下面这段代码运行流程相同：

```javascript
return;
 (some + long + expression + or + whatever * f(a) + f(b))
```

因此，实际上它的返回值变成了空值。

如果我们想要将返回的表达式写成跨多行的形式，那么应该在 `return` 的同一行开始写此表达式。或者至少按照如下的方式放上左括号：

```javascript
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```

然后它就能像我们预想的那样正常运行了。

### 函数命名

函数就是行为（action）。所以它们的名字通常是动词。它应该简短且尽可能准确地描述函数的作用。这样读代码的人就能清楚地知道这个函数的功能。

一种普遍的做法是用动词前缀来开始一个函数，这个前缀模糊地描述了这个行为。团队内部必须就前缀的含义达成一致。

### 函数==注释

尽量把一个执行复杂功能的函数分解成一些小函数来执行。

函数应该简短且只有一个功能。如果这个函数功能复杂，那么把该函数拆分成几个小的函数是值得的。有时候遵循这个规则并不是那么容易，但这绝对是件好事

## 15.函数表达式

在前面章节使用的语法称为 **函数声明**：

```javascript
function sayHi() {
  alert( "Hello" );
}
```

另一种创建函数的语法称为 **函数表达式**。

通常会写成这样：

```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

在这里，函数被创建并像其他赋值一样，被明确地分配给了一个变量。不管函数是被怎样定义的，都只是一个存储在变量 `sayHi` 中的值。

两段示例代码的意思是一样的：“创建一个函数，并把它存进变量 `sayHi`”。

在 JavaScript 中，函数是一个值，所以我们可以把它当成值对待。

用 `alert` 打印这个变量值：

```javascript
function sayHi() {
  alert( "Hello" );
}

alert( sayHi ); // 显示函数代码
```

上面代码显示了一段字符串值，即函数的源码。

复制函数到其他变量：

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

解释一下上段代码发生的细节：

1. `(1)` 行声明创建了函数，并把它放入到变量 `sayHi`。
2. `(2)` 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。
3. 现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。

**为什么这里末尾会有个分号？**

你可能想知道，为什么函数表达式结尾有一个分号 `;`，而函数声明没有：

```javascript
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
```

答案很简单：

- 在代码块的结尾不需要加分号 `;`，像 `if { ... }`，`for { }`，`function f { }` 等语法结构后面都不用加。
- 函数表达式是在语句内部的：`let sayHi = ...;`，作为一个值。它不是代码块而是一个赋值语句。不管值是什么，都建议在语句末尾添加分号 `;`。所以这里的分号与函数表达式本身没有任何关系，它只是用于终止语句。

###  回调函数

我们写一个包含三个参数的函数 `ask(question, yes, no)`：

- `question`

  关于问题的文本

- `yes`

  当回答为 “Yes” 时，要运行的脚本

- `no`

  当回答为 “No” 时，要运行的脚本

函数需要提出 `question`（问题），并根据用户的回答，调用 `yes()` 或 `no()`：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

在实际开发中，这样的函数是非常有用的。实际开发与上述示例最大的区别是，实际开发中的函数会通过更加复杂的方式与用户进行交互，而不是通过简单的 `confirm`。在浏览器中，这样的函数通常会绘制一个漂亮的提问窗口。但这是另外一件事了。

`ask` 的两个参数值 `showOk` 和 `showCancel` 可以被称为 **回调函数** 或简称 **回调**。

主要思想是我们传递一个函数，并期望在稍后必要时将其“回调”。在我们的例子中，`showOk` 是回答 “yes” 的回调，`showCancel` 是回答 “no” 的回调。

用函数表达式对同样的函数进行大幅简写：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

这里直接在 `ask(...)` 调用内进行函数声明。这两个函数没有名字，所以叫 **匿名函数**。

**一个函数是表示一个“行为”的值**

字符串或数字等常规值代表 **数据**。

函数可以被视为一个 **行为（action）**。

我们可以在变量之间传递它们，并在需要时运行。

### 函数声明 vs 函数表达式

让我们来总结一下函数声明和函数表达式之间的主要区别。

首先是语法：如何通过代码对它们进行区分。

- **函数声明**：在主代码流中声明为单独的语句的函数。

  ```javascript
  // 函数声明
  function sum(a, b) {
    return a + b;
  }
  ```

- **函数表达式**：在一个表达式中或另一个语法结构中创建的函数。下面这个函数是在赋值表达式 `=` 右侧创建的：

  ```javascript
  // 函数表达式
  let sum = function(a, b) {
    return a + b;
  };
  ```

更细微的差别是，JavaScript 引擎会在 **什么时候** 创建函数。

**函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。**

一旦代码执行到赋值表达式 `let sum = function…` 的右侧，此时就会开始创建该函数，并且可以从现在开始使用（分配，调用等）。

函数声明则不同。

**在函数声明被定义之前，它就可以被调用。**

例如，一个全局函数声明对整个脚本来说都是可见的，无论它被写在这个脚本的哪个位置。

这是内部算法的原故。当 JavaScript **准备** 运行脚本时，首先会在脚本中寻找全局函数声明，并创建这些函数。我们可以将其视为“初始化阶段”。

在处理完所有函数声明后，代码才被执行。所以运行时能够使用这些函数。

例如下面的代码会正常工作：

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

函数声明 `sayHi` 是在 JavaScript 准备运行脚本时被创建的，在这个脚本的任何位置都可见。

……如果它是一个函数表达式，它就不会工作：

```javascript
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```

函数表达式在代码执行到它时才会被创建。只会发生在 `(*)` 行。为时已晚。

函数声明的另外一个特殊的功能是它们的块级作用域。

**严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。**

例如，想象一下我们需要依赖于在代码运行过程中获得的变量 `age` 声明一个函数 `welcome()`。并且我们计划在之后的某个时间使用它。

如果我们使用函数声明，则以下代码无法像预期那样工作：

```javascript
let age = prompt("What is your age?", 18);

// 有条件地声明一个函数
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ……稍后使用
welcome(); // Error: welcome is not defined
```

这是因为函数声明只在它所在的代码块中可见。

下面是另一个例子：

```javascript
let age = 16; // 拿 16 作为例子

if (age < 18) {
  welcome();               // \   (运行)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  函数声明在声明它的代码块内任意位置都可用
  }                        //  |
                           //  |
  welcome();               // /   (运行)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// 在这里，我们在花括号外部调用函数，我们看不到它们内部的函数声明。


welcome(); // Error: welcome is not defined
```

我们怎么才能让 `welcome` 在 `if` 外可见呢？

正确的做法是使用函数表达式，并将 `welcome` 赋值给在 `if` 外声明的变量，并具有正确的可见性。

下面的代码可以如愿运行：

```javascript
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // 现在可以了
```

或者我们可以使用问号运算符 `?` 来进一步对代码进行简化：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // 现在可以了
```

**什么时候选择函数声明与函数表达式？**

根据经验，当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。

这对代码可读性也更好，因为在代码中查找 `function f(…) {…}` 比 `let f = function(…) {…}` 更容易。函数声明更“醒目”。

……但是，如果由于某种原因而导致函数声明不适合我们（我们刚刚看过上面的例子），那么应该使用函数表达式。

## 16.箭头函数--基础

创建函数还有另外一种非常简单的语法，并且这种方法通常比函数表达式更好。

它被称为“箭头函数”，因为它看起来像这样：

```javascript
let func = (arg1, arg2, ...argN) => expression
```

……这里创建了一个函数 `func`，它接受参数 `arg1..argN`，然后使用参数对右侧的 `expression` 求值并返回其结果。

换句话说，它是下面这段代码的更短的版本：

```javascript
let func = function(arg1, arg2, ...argN) {
  return expression;
};
```

一个具体的例子：

```javascript
let sum = (a, b) => a + b;

/* 这个箭头函数是下面这个函数的更短的版本：

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

可以看到 `(a, b) => a + b` 表示一个函数接受两个名为 `a` 和 `b` 的参数。在执行时，它将对表达式 `a + b` 求值，并返回计算结果。

- 
  如果我们只有一个参数，还可以省略掉参数外的圆括号，使代码更短。

  例如：

  ```javascript
  let double = n => n * 2;
  // 差不多等同于：let double = function(n) { return n * 2 }
  
  alert( double(3) ); // 6
  ```

- 如果没有参数，括号将是空的（但括号应该保留）：

  ```javascript
  let sayHi = () => alert("Hello!");
  
  sayHi();
  ```

箭头函数可以像函数表达式一样使用。

例如，动态创建一个函数：

```javascript
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();
```

一开始，箭头函数可能看起来并不熟悉，也不容易读懂，但一旦我们看习惯了之后，这种情况很快就会改变

上面的例子从 `=>` 的左侧获取参数，然后使用参数计算右侧表达式的值。

但有时我们需要更复杂一点的东西，比如多行的表达式或语句。这也是可以做到的，但是我们应该用花括号括起来。然后使用一个普通的 `return` 将需要返回的值进行返回。

就像这样：

```javascript
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert( sum(1, 2) ); // 3
```

## 17.对象

对象则用来存储键值对和更复杂的实体。

我们可以通过使用带有可选 **属性列表** 的花括号 `{…}` 来创建对象。一个属性就是一个键值对（“key: value”），其中键（`key`）是一个**字符串**（也叫做属性名），值（`value`）可以是**任何值**。

创建一个空的对象：

```javascript
let user = new Object(); // “构造函数” 的语法
let user = {};  // “字面量” 的语法
```

### 文本和属性

创建对象的时候，立即将一些属性以键值对的形式放到 `{...}` 中。

```javascript
let user = {     // 一个对象
  name: "John",  // 键 "name"，值 "John"
  age: 30        // 键 "age"，值 30
};
```

属性有键（或者也可以叫做“名字”或“标识符”），位于冒号 `":"` 的前面，值在冒号的右边。

在 `user` 对象中，有两个属性：

1. 第一个的键是 `"name"`，值是 `"John"`。
2. 第二个的键是 `"age"`，值是 `30`。

可以使用点符号访问属性值：

```javascript
// 读取文件的属性：
alert( user.name ); // John
alert( user.age ); // 30
```

属性的值可以是任意类型，让我们加个布尔类型：

```javascript
user.isAdmin = true;
```

用 `delete` 操作符移除属性：

```javascript
delete user.age;
```

列表中的最后一个属性应以逗号结尾：

```javascript
let user = {
  name: "John",
  age: 30,
}
```

这叫做尾随（trailing）或悬挂（hanging）逗号。这样便于我们添加、删除和移动属性，因为所有的行都是相似的。

**使用 const 声明的对象是可以被修改的**

请注意：用 `const` 声明的对象 **能** 被修改。

例如：

```javascript
const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete
```

`(*)` 行似乎会触发一个错误，但实际并没有。`const` 声明仅固定了 `user` 的值，而不是值（该对象）里面的内容。

仅当我们尝试将 `user=...` 作为一个整体进行赋值时，`const` 会抛出错误

### 方括号

对于多词属性，点操作就不能用了。点符号要求 `key` 是有效的变量标识符。这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 `$` 和 `_`）。

另一种方法，就是使用方括号，可用于任何字符串：

```javascript
let user = {};

// 设置
user["likes birds"] = true;

// 读取
alert(user["likes birds"]); // true

// 删除
delete user["likes birds"];
```

现在一切都可行了。请注意方括号中的字符串要放在引号中，单引号或双引号都可以。

方括号同样提供了一种可以通过任意表达式来获取属性名的方法 —— 跟语义上的字符串不同 —— 比如像类似于下面的变量：

```javascript
let key = "likes birds";

// 跟 user["likes birds"] = true; 一样
user[key] = true;
```

在这里，变量 `key` 可以是程序运行时计算得到的，也可以是根据用户的输入得到的。点符号不能以类似的方式使用。

### 计算属性

当创建一个对象时，我们可以在对象字面量中使用方括号。这叫做 **计算属性**。

例如：

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"
```

计算属性的含义很简单：`[fruit]` 含义是属性名应该从 `fruit` 变量中获取。

所以，如果一个用户输入 `"apple"`，`bag` 将变为 `{apple: 5}`。

在方括号中使用更复杂的表达式：

```javascript
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```

方括号比点符号更强大。它允许任何属性名和变量。

### 属性值简写

在实际开发中，我们通常用已存在的变量当做属性名。

例如：

```javascript
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ……其他的属性
  };
}

let user = makeUser("John", 30);
alert(user.name); // John
```

在上面的例子中，属性名跟变量名一样。这种通过变量生成属性的应用场景很常见，在这有一种特殊的 **属性值缩写** 方法，使属性名变得更短。

可以用 `name` 来代替 `name:name` 像下面那样：

```javascript
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
    // ...
  };
}
```

我们可以把属性名简写方式和正常方式混用：

```javascript
let user = {
  name,  // 与 name:name 相同
  age: 30
};
```

### 属性名称限制

变量名不能是编程语言的某个保留字，如 “for”、“let”、“return” 等……

但对象的属性名并不受此限制：

```javascript
// 这些属性都没问题
let obj = {
  for: 1,
  let: 2,
  return: 3
};

alert( obj.for + obj.let + obj.return );  // 6
```

简而言之，属性命名没有限制。属性名可以是任何字符串或者 symbol（一种特殊的标志符类型，将在后面介绍）。

其他类型会被自动地转换为字符串。

当数字 `0` 被用作对象的属性的键时，会被转换为字符串 `"0"`

一个名为 `__proto__` 的属性。我们不能将它设置为一个非对象的值。

### 检查属性是否存在

JavaScript 的对象有一个需要注意的特性：能够被访问任何属性。即使属性不存在也不会报错！

读取不存在的属性只会得到 `undefined`。所以我们可以很容易地判断一个属性是否存在：

```javascript
let user = {};

alert( user.noSuchProperty === undefined ); // true 意思是没有这个属性
```

这里还有一个特别的，检查属性是否存在的操作符 `"in"`。

语法是：

```javascript
"key" in object
```

例如：

```javascript
let user = { name: "John", age: 30 };

alert( "age" in user ); // true，user.age 存在
alert( "blabla" in user ); // false，user.blabla 不存在。
```

请注意，`in` 的左边必须是 **属性名**。通常是一个带引号的字符串。

如果我们省略引号，就意味着左边是一个变量，它应该包含要判断的实际属性名。

```javascript
let user = { age: 30 };

let key = "age";
alert( key in user ); // true，属性 "age" 存在
```

为何会有 `in` 运算符呢？与 `undefined` 进行比较来判断还不够吗？

确实，大部分情况下与 `undefined` 进行比较来判断就可以了。但有一个例外情况，这种比对方式会有问题，但 `in` 运算符的判断结果仍是对的。

那就是属性存在，但存储的值是 `undefined` 的时候。

### for .... in  

为了遍历一个对象的所有键（key），可以使用一个特殊形式的循环：`for..in`。这跟我们在前面学到的 `for(;;)` 循环是完全不一样的东西。

语法：

```javascript
for (key in object) {
  // 对此对象属性中的每个键执行的代码
}
```

例如，让我们列出 `user` 所有的属性：

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // 属性键的值
  alert( user[key] ); // John, 30, true
}
```

注意，所有的 “for” 结构体都允许我们在循环中定义变量，像这里的 `let key`。

同样，我们可以用其他属性名来替代 `key`。例如 `"for(let prop in obj)"` 也很常用。

### 像对象一样排序

如果我们遍历一个对象，我们获取属性的顺序是和属性添加时的顺序相同吗？这靠谱吗？

简短的回答是：“有特别的顺序”：整数属性会被进行排序，其他属性则按照创建的顺序显示。详情如下：

例如，让我们考虑一个带有电话号码的对象：

```javascript
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```

对象可用于面向用户的建议选项列表。如果我们的网站主要面向德国观众，那么我们可能希望 `49` 排在第一。

但如果我们执行代码，会看到完全不同的现象：

- USA (1) 排在了最前面
- 然后是 Switzerland (41) 及其它。

因为这些电话号码是整数，所以它们以升序排列。所以我们看到的是 `1, 41, 44, 49`。

**整数属性？那是什么？**

这里的“整数属性”指的是一个可以在不做任何更改的情况下与一个整数进行相互转换的字符串。

所以，“49” 是一个整数属性名，因为我们把它转换成整数，再转换回来，它还是一样的。但是 “+49” 和 “1.2” 就不行了：

```javascript
// Math.trunc 是内置的去除小数部分的方法。
alert( String(Math.trunc(Number("49"))) ); // "49"，相同，整数属性
alert( String(Math.trunc(Number("+49"))) ); // "49"，不同于 "+49" ⇒ 不是整数属性
alert( String(Math.trunc(Number("1.2"))) ); // "1"，不同于 "1.2" ⇒ 不是整数属性
```

……此外，如果属性名不是整数，那它们就按照创建时的顺序来排序，例如：

```javascript
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // 增加一个

// 非整数属性是按照创建的顺序来排列的
for (let prop in user) {
  alert( prop ); // name, surname, age
}
```

所以，为了解决电话号码的问题，我们可以使用非整数属性名来 **欺骗** 程序。只需要给每个键名加一个加号 `"+"` 前缀就行了。

像这样：

```javascript
let codes = 
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}
```

现在跟预想的一样了。

## 18.对象的引用和复制

与原始类型相比，对象的根本区别之一是对象是“通过引用”被存储和复制的，与原始类型值相反：字符串，数字，布尔值等 —— 始终是以“整体值”的形式被复制的。

如果我们稍微看一下复制值时发生了什么，就很容易理解了。

让我们从原始类型开始，例如一个字符串。

这里我们将 `message` 复制到 `phrase`：

```javascript
let message = "Hello!";
let phrase = message;
```

结果我们就有了两个独立的变量，每个都存储着字符串 `"Hello!"`。

显而易见的结果，对吧？

但是，对象不是这样的。

**赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址”，换句话说就是对该对象的“引用”。**

让我们看一个这样的变量的例子：

```javascript
let user = {
  name: "John"
};
```

这是它实际存储在内存中的方式：

该对象被存储在内存中的某个位置（在图片的右侧），而变量 `user`（在左侧）保存的是对其的“引用”。

我们可以将对象变量（例如 `user`）想象成一张带有地址的纸。

当我们对对象执行操作时，例如获取一个属性 `user.name`，JavaScript 引擎将对该地址进行搜索，并在实际对象上执行操作。

现在，这就是为什么它很重要。

**当一个对象变量被复制 —— 引用则被复制，而该对象并没有被复制。**

例如：

```javascript
let user = { name: "John" };

let admin = user; // 复制引用
```

现在我们有了两个变量，它们保存的都是对同一个对象的引用：

正如你所看到的，这里仍然只有一个对象，现在有两个引用它的变量。

我们可以通过其中任意一个变量来访问该对象并修改它的内容：

```javascript
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // 通过 "admin" 引用来修改

alert(user.name); // 'Pete'，修改能通过 "user" 引用看到
```

这就像我们有个带两把钥匙的柜子，并使用其中一把钥匙（`admin`）来打开它。那么，我们如果之后用另外一把钥匙（`user`），则也能看到更改。

### 通过引用来比较

仅当两个对象为同一对象时，两者才相等。

例如，这里 `a` 和 `b` 两个变量都引用同一个对象，所以它们相等：

```javascript
let a = {};
let b = a; // 复制引用

alert( a == b ); // true，都引用同一对象
alert( a === b ); // true
```

而这里两个独立的对象则并不相等，即使它们看起来很像（都为空）：

```javascript
let a = {};
let b = {}; // 两个独立的对象

alert( a == b ); // false
```

对于类似 `obj1 > obj2` 的比较，或者跟一个原始类型值的比较 `obj == 5`，对象都会被转换为原始值。我们很快就会学到对象是如何转换的，但是说实话，很少需要进行这样的比较，通常是在编程错误的时候才会出现这种情况。

### 克隆与合并，Object.assign

那么，拷贝一个对象变量会又创建一个对相同对象的引用。

但是，如果我们想要复制一个对象，那该怎么做呢？创建一个独立的拷贝，克隆？

这也是可行的，但稍微有点困难，因为 JavaScript 没有提供对此操作的内建的方法。实际上，也很少需要这样做。通过引用进行拷贝在大多数情况下已经很好了。

但是，如果我们真的想要这样做，那么就需要创建一个新对象，并通过遍历现有属性的结构，在原始类型值的层面，将其复制到新对象，以复制已有对象的结构。

就像这样：

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 现在 clone 是带有相同内容的完全独立的对象
clone.name = "Pete"; // 改变了其中的数据

alert( user.name ); // 原来的对象中的 name 属性依然是 John
```

我们也可以使用 [Object.assign](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 方法来达成同样的效果。

语法是：

```javascript
Object.assign(dest, [src1, src2, src3...])
```

- 第一个参数 `dest` 是指目标对象。
- 更后面的参数 `src1, ..., srcN`（可按需传递多个参数）是源对象。
- 该方法将所有源对象的属性拷贝到目标对象 `dest` 中。换句话说，从第二个开始的所有参数的属性都被拷贝到第一个参数的对象中。
- 调用结果返回 `dest`。

例如，我们可以用它来合并多个对象：

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// 现在 user = { name: "John", canView: true, canEdit: true }
```

如果被拷贝的属性的属性名已经存在，那么它会被覆盖：

```javascript
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // 现在 user = { name: "Pete" }
```

我们也可以用 `Object.assign` 代替 `for..in` 循环来进行简单克隆：

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```

它将 `user` 中的所有属性拷贝到了一个空对象中，并返回这个新的对象。

### 深层克隆

到现在为止，我们都假设 `user` 的所有属性均为原始类型。但属性可以是对其他对象的引用。那应该怎样处理它们呢？

例如：

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182
```

现在这样拷贝 `clone.sizes = user.sizes` 已经不足够了，因为 `user.sizes` 是个对象，它会以引用形式被拷贝。因此 `clone` 和 `user` 会共用一个 sizes：

就像这样：

```javascript
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象

// user 和 clone 分享同一个 sizes
user.sizes.width++;       // 通过其中一个改变属性值
alert(clone.sizes.width); // 51，能从另外一个看到变更的结果
```

为了解决此问题，我们应该使用会检查每个 `user[key]` 的值的克隆循环，如果值是一个对象，那么也要复制它的结构。这就叫“深拷贝”。

我们可以用递归来实现。或者不自己造轮子，使用现成的实现，例如 JavaScript 库 [lodash](https://lodash.com/) 中的 [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep)。

## 19.垃圾回收

链接：https://zh.javascript.info/garbage-collection

对于开发者来说，JavaScript 的内存管理是自动的、无形的。我们创建的原始值、对象、函数……这一切都会占用内存。

当我们不再需要某个东西时会发生什么？JavaScript 引擎如何发现它并清理它？

### [可达性（Reachability）](https://zh.javascript.info/garbage-collection#ke-da-xing-reachability)

JavaScript 中主要的内存管理概念是 **可达性**。

简而言之，“可达”值是那些以某种方式可访问或可用的值。它们一定是存储在内存中的。

1. 这里列出固有的可达值的基本集合，这些值明显不能被释放。

   比方说：

   - 当前函数的局部变量和参数。
   - 嵌套调用时，当前调用链上所有函数的变量与参数。
   - 全局变量。
   - （还有一些内部的）

   这些值被称作 **根（roots）**。

2. 如果一个值可以通过引用或引用链从根访问任何其他值，则认为该值是可达的。

   比方说，如果全局变量中有一个对象，并且该对象有一个属性引用了另一个对象，则 **该** 对象被认为是可达的。而且它引用的内容也是可达的。下面是详细的例子。

在 JavaScript 引擎中有一个被称作 [垃圾回收器](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)) 的东西在后台执行。它监控着所有对象的状态，并删除掉那些已经不可达的。

### [一个简单的例子](https://zh.javascript.info/garbage-collection#yi-ge-jian-dan-de-li-zi)

这里是一个最简单的例子：

```javascript
// user 具有对这个对象的引用
let user = {
  name: "John"
};
```

这里的箭头描述了一个对象引用。全局变量 `"user"` 引用了对象 `{name："John"}`（为简洁起见，我们称它为 John）。John 的 `"name"` 属性存储一个原始值，所以它被写在对象内部。

如果 `user` 的值被重写了，这个引用就没了：

```javascript
user = null;
```

现在 John 变成不可达的了。因为没有引用了，就不能访问到它了。垃圾回收器会认为它是垃圾数据并进行回收，然后释放内存。

### [两个引用](https://zh.javascript.info/garbage-collection#liang-ge-yin-yong)

现在让我们想象下，我们把 `user` 的引用复制给 `admin`：

```javascript
// user 具有对这个对象的引用
let user = {
  name: "John"
};

let admin = user;
```

现在如果执行刚刚的那个操作：

```javascript
user = null;
```

……然后对象仍然可以被通过 `admin` 这个全局变量访问到，所以对象还在内存中。如果我们又重写了 `admin`，对象就会被删除。

### [相互关联的对象](https://zh.javascript.info/garbage-collection#xiang-hu-guan-lian-de-dui-xiang)

现在来看一个更复杂的例子。这是个家庭：

```javascript
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});
```

`marry` 函数通过让两个对象相互引用使它们“结婚”了，并返回了一个包含这两个对象的新对象。

由此产生的内存结构：

到目前为止，所有对象都是可达的。

现在让我们移除两个引用：

```javascript
delete family.father;
delete family.mother.husband;
```

仅删除这两个引用中的一个是不够的，因为所有的对象仍然都是可达的。

但是，如果我们把这两个都删除，那么我们可以看到再也没有对 John 的引用了：

对外引用不重要，只有传入引用才可以使对象可达。所以，John 现在是不可达的，并且将被从内存中删除，同时 John 的所有数据也将变得不可达。

经过垃圾回收：

### [无法到达的岛屿](https://zh.javascript.info/garbage-collection#wu-fa-dao-da-de-dao-yu)

几个对象相互引用，但外部没有对其任意对象的引用，这些对象也可能是不可达的，并被从内存中删除。

源对象与上面相同。然后：

```javascript
family = null;
```

内存内部状态将变成：

这个例子展示了可达性概念的重要性。

显而易见，John 和 Ann 仍然连着，都有传入的引用。但是，这样还不够。

前面说的 `"family"` 对象已经不再与根相连，没有了外部对其的引用，所以它变成了一座“孤岛”，并且将被从内存中删除。

### [内部算法](https://zh.javascript.info/garbage-collection#nei-bu-suan-fa)

垃圾回收的基本算法被称为 “mark-and-sweep”。

定期执行以下“垃圾回收”步骤：

- 垃圾收集器找到所有的根，并“标记”（记住）它们。
- 然后它遍历并“标记”来自它们的所有引用。
- 然后它遍历标记的对象并标记 **它们的** 引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。
- ……如此操作，直到所有可达的（从根部）引用都被访问到。
- 没有被标记的对象都会被删除。

例如，使我们的对象有如下的结构：

我们可以清楚地看到右侧有一个“无法到达的岛屿”。现在我们来看看“标记和清除”垃圾收集器如何处理它。

第一步标记所有的根：

然后它们的引用被标记了：

……如果还有引用的话，继续标记：

现在，无法通过这个过程访问到的对象被认为是不可达的，并且会被删除。

我们还可以将这个过程想象成从根溢出一个巨大的油漆桶，它流经所有引用并标记所有可到达的对象。然后移除未标记的。

这是垃圾收集工作的概念。JavaScript 引擎做了许多优化，使垃圾回收运行速度更快，并且不影响正常代码运行。

一些优化建议：

- **分代收集（Generational collection）**—— 对象被分成两组：“新的”和“旧的”。许多对象出现，完成它们的工作并很快死去，它们可以很快被清理。那些长期存活的对象会变得“老旧”，而且被检查的频次也会减少。
- **增量收集（Incremental collection）**—— 如果有许多对象，并且我们试图一次遍历并标记整个对象集，则可能需要一些时间，并在执行过程中带来明显的延迟。所以引擎试图将垃圾收集工作分成几部分来做。然后将这几部分会逐一进行处理。这需要它们之间有额外的标记来追踪变化，但是这样会有许多微小的延迟而不是一个大的延迟。
- **闲时收集（Idle-time collection）**—— 垃圾收集器只会在 CPU 空闲时尝试运行，以减少可能对代码执行的影响。

还有其他垃圾回收算法的优化和风格。尽管我想在这里描述它们，但我必须打住了，因为不同的引擎会有不同的调整和技巧。而且，更重要的是，随着引擎的发展，情况会发生变化，所以在没有真实需求的时候，“提前”学习这些内容是不值得的。当然，除非你纯粹是出于兴趣。我在下面给你提供了一些相关链接

主要需要掌握的内容：

- 垃圾回收是自动完成的，我们不能强制执行或是阻止执行。
- 当对象是可达状态时，它一定是存在于内存中的。
- 被引用与可访问（从一个根）不同：一组相互连接的对象可能整体都不可达。

现代引擎实现了垃圾回收的高级算法。

《The Garbage Collection Handbook: The Art of Automatic Memory Management》（R. Jones 等人著）这本书涵盖了其中一些内容。

如果你熟悉底层（low-level）编程，关于 V8 引擎垃圾回收器的更详细信息请参阅文章 [V8 之旅：垃圾回收](http://jayconrod.com/posts/55/a-tour-of-v8-garbage-collection)。

[V8 博客](http://v8project.blogspot.com/) 还不时发布关于内存管理变化的文章。当然，为了学习垃圾收集，你最好通过学习 V8 引擎内部知识来进行准备，并阅读一个名为 [Vyacheslav Egorov](http://mrale.ph/) 的 V8 引擎工程师的博客。我之所以说 “V8”，因为网上关于它的文章最丰富的。对于其他引擎，许多方法是相似的，但在垃圾收集上许多方面有所不同。

当你需要底层的优化时，对引擎有深入了解将很有帮助。在熟悉了这门编程语言之后，把熟悉引擎作为下一步计划是明智之选。

## 20.对象方法   “this"

通常创建对象来表示真实世界中的实体，如用户和订单等：

```javascript
let user = {
  name: "John",
  age: 30
};
```

并且，在现实世界中，用户可以进行 **操作**：从购物车中挑选某物、登录和注销等。

在 JavaScript 中，行为（action）由属性中的函数来表示。

###  方法示例

刚开始，我们来教 `user` 说 hello：

```javascript
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

这里我们使用函数表达式创建了一个函数，并将其指定给对象的 `user.sayHi` 属性。

随后我们像这样 `user.sayHi()` 调用它。用户现在可以说话了！

作为对象属性的函数被称为 **方法**。

所以，在这我们得到了 `user` 对象的 `sayHi` 方法。

当然，我们也可以使用预先声明的函数作为方法，就像这样：

```javascript
let user = {
  // ...
};

// 首先，声明函数
function sayHi() {
  alert("Hello!");
};

// 然后将其作为一个方法添加
user.sayHi = sayHi;

user.sayHi(); // Hello!
```

**面向对象编程**

当我们在代码中用对象表示实体时，就是所谓的 [面向对象编程](https://en.wikipedia.org/wiki/Object-oriented_programming)，简称为 “OOP”。

OOP 是一门大学问，本身就是一门有趣的科学。怎样选择合适的实体？如何组织它们之间的交互？这就是架构，有很多关于这方面的书，例如 E. Gamma、R. Helm、R. Johnson 和 J. Vissides 所著的《设计模式：可复用面向对象软件的基础》，G. Booch 所著的《面向对象分析与设计》等。

方法简写

在对象字面量中，有一种更短的（声明）方法的语法：

```javascript
// 这些对象作用一样

user = {
  sayHi: function() {
    alert("Hello");
  }
};

// 方法简写看起来更好，对吧？
let user = {
  sayHi() { // 与 "sayHi: function()" 一样
    alert("Hello");
  }
};
```

如上所示，我们可以省略 `"function"`，只写 `sayHi()`。

说实话，这种表示法还是有些不同。在对象继承方面有一些细微的差别（稍后将会介绍），但目前它们并不重要。在几乎所有的情况下，较短的语法是首选的。

### 方法中的this

通常，对象方法需要访问对象中存储的信息才能完成其工作。

例如，`user.sayHi()` 中的代码可能需要用到 `user` 的 name 属性。

**为了访问该对象，方法中可以使用 `this` 关键字。**

`this` 的值就是在点之前的这个对象，即调用该方法的对象。

举个例子：

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" 指的是“当前的对象”
    alert(this.name);
  }

};

user.sayHi(); // John
```

在这里 `user.sayHi()` 执行过程中，`this` 的值是 `user`。

技术上讲，也可以在不使用 `this` 的情况下，通过外部变量名来引用它：

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" 替代 "this"
  }

};
```

……但这样的代码是不可靠的。如果我们决定将 `user` 复制给另一个变量，例如 `admin = user`，并赋另外的值给 `user`，那么它将访问到错误的对象。

下面这个示例证实了这一点：

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // 导致错误
  }

};


let admin = user;
user = null; // 重写让其更明显

admin.sayHi(); // TypeError: Cannot read property 'name' of null
```

如果我们在 `alert` 中以 `this.name` 替换 `user.name`，那么代码就会正常运行。

### this 不受限制

在 JavaScript 中，`this` 关键字与其他大多数编程语言中的不同。JavaScript 中的 `this` 可以用于任何函数，即使它不是对象的方法。

下面这样的代码没有语法错误：

```javascript
function sayHi() {
  alert( this.name );
}
```

`this` 的值是在代码运行时计算出来的，它取决于代码上下文。

例如，这里相同的函数被分配给两个不同的对象，在调用中有着不同的 “this” 值：

```javascript
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// 在两个对象中使用相同的函数
user.f = sayHi;
admin.f = sayHi;

// 这两个调用有不同的 this 值
// 函数内部的 "this" 是“点符号前面”的那个对象
user.f(); // John（this == user）
admin.f(); // Admin（this == admin）

admin['f'](); // Admin（使用点符号或方括号语法来访问这个方法，都没有关系。）
```

这个规则很简单：如果 `obj.f()` 被调用了，则 `this` 在 `f` 函数调用期间是 `obj`。所以在上面的例子中 this 先是 `user`，之后是 `admin`。

**在没有对象的情况下调用：`this == undefined`**

我们甚至可以在没有对象的情况下调用函数：

```javascript
function sayHi() {
  alert(this);
}

sayHi(); // undefined
```

在这种情况下，严格模式下的 `this` 值为 `undefined`。如果我们尝试访问 `this.name`，将会报错。

在非严格模式的情况下，`this` 将会是 **全局对象**（浏览器中的 `window`，我们稍后会在 [全局对象](https://zh.javascript.info/global-object) 一章中学习它）。这是一个历史行为，`"use strict"` 已经将其修复了。

通常这种调用是程序出错了。如果在一个函数内部有 `this`，那么通常意味着它是在对象上下文环境中被调用的。

**解除 `this` 绑定的后果**

如果你经常使用其他的编程语言，那么你可能已经习惯了“绑定 `this`”的概念，即在对象中定义的方法总是有指向该对象的 `this`。

在 JavaScript 中，`this` 是“自由”的，它的值是在调用时计算出来的，它的值并不取决于方法声明的位置，而是取决于在“点符号前”的是什么对象。

在运行时对 `this` 求值的这个概念既有优点也有缺点。一方面，函数可以被重用于不同的对象。另一方面，更大的灵活性造成了更大的出错的可能。

这里我们的立场并不是要评判编程语言的这个设计是好是坏。而是要了解怎样使用它，如何趋利避害

### 箭头函数没有自己的this

箭头函数有些特别：它们没有自己的 `this`。如果我们在这样的函数中引用 `this`，`this` 值取决于外部“正常的”函数。

举个例子，这里的 `arrow()` 使用的 `this` 来自于外部的 `user.sayHi()` 方法：

```javascript
let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```

这是箭头函数的一个特性，当我们并不想要一个独立的 `this`，反而想从外部上下文中获取时，它很有用。在后面的 [深入理解箭头函数](https://zh.javascript.info/arrow-functions) 一章中，我们将深入介绍箭头函数。

## 21.构造器和操作符 new

规的 `{...}` 语法允许创建一个对象。但是我们经常需要创建许多类似的对象，例如多个用户或菜单项等。

这可以使用构造函数和 `"new"` 操作符来实现。

### 构造函数

构造函数在技术上是常规函数。不过有两个约定：

1. 它们的命名以大写字母开头。
2. 它们只能由 `"new"` 操作符来执行

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

当一个函数被使用 `new` 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 `this`。
2. 函数体执行。通常它会修改 `this`，为其添加新的属性。
3. 返回 `this` 的值。

换句话说，`new User(...)` 做的就是类似的事情：

```javascript
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

所以 `new User("Jack")` 的结果是相同的对象：

```javascript
let user = {
  name: "Jack",
  isAdmin: false
};
```

现在，如果我们想创建其他用户，我们可以调用 `new User("Ann")`，`new User("Alice")` 等。比每次都使用字面量创建要短得多，而且更易于阅读。

这是构造器的主要目的 —— 实现可重用的对象创建代码。

**new function() { … }**

如果我们有许多行用于创建单个复杂对象的代码，我们可以将它们封装在一个立即调用的构造函数中，像这样：

```javascript
// 创建一个函数并立即使用 new 调用它
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ……用于用户创建的其他代码
  // 也许是复杂的逻辑和语句
  // 局部变量等
};
```

这个构造函数不能被再次调用，因为它不保存在任何地方，只是被创建和调用。因此，这个技巧旨在封装构建单个对象的代码，而无需将来重用。

### 构造器模式测试：new.target

在一个函数内部，我们可以使用 `new.target` 属性来检查它是否被使用 `new` 进行调用了。

对于常规调用，它为 undefined，对于使用 `new` 的调用，则等于该函数：

```javascript
function User() {
  alert(new.target);
}

// 不带 "new"：
User(); // undefined

// 带 "new"：
new User(); // function User { ... }
```

它可以被用在函数内部，来判断该函数是被通过 `new` 调用的“构造器模式”，还是没被通过 `new` 调用的“常规模式”。

我们也可以让 `new` 调用和常规调用做相同的工作，像这样：

```javascript
function User(name) {
  if (!new.target) { // 如果你没有通过 new 运行我
    return new User(name); // ……我会给你添加 new
  }

  this.name = name;
}

let john = User("John"); // 将调用重定向到新用户
alert(john.name); // John
```

这种方法有时被用在库中以使语法更加灵活。这样人们在调用函数时，无论是否使用了 `new`，程序都能工作。

不过，到处都使用它并不是一件好事，因为省略了 `new` 使得很难观察到代码中正在发生什么。而通过 `new` 我们都可以知道这创建了一个新对象。

### 构造器中的返回 return

通常，构造器没有 `return` 语句。它们的任务是将所有必要的东西写入 `this`，并自动转换为结果。

但是，如果这有一个 `return` 语句，那么规则就简单了：

- 如果 `return` 返回的是一个对象，则返回这个对象，而不是 `this`。
- 如果 `return` 返回的是一个原始类型，则忽略。

换句话说，带有对象的 `return` 返回该对象，在所有其他情况下返回 `this`。

例如，这里 `return` 通过返回一个对象覆盖 `this`：

```javascript
function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- 返回这个对象
}

alert( new BigUser().name );  // Godzilla，得到了那个对象
```

这里有一个 `return` 为空的例子（或者我们可以在它之后放置一个原始类型，没有什么影响）：

```javascript
function SmallUser() {

  this.name = "John";

  return; // <-- 返回 this
}

alert( new SmallUser().name );  // John
```

通常构造器没有 `return` 语句。这里我们主要为了完整性而提及返回对象的特殊行为。

**省略括号**

顺便说一下，如果没有参数，我们可以省略 `new` 后的括号：

```javascript
let user = new User; // <-- 没有参数
// 等同于
let user = new User();
```

这里省略括号不被认为是一种“好风格”，但是规范允许使用该语法。

### 构造器中的方法

使用构造函数来创建对象会带来很大的灵活性。构造函数可能有一些参数，这些参数定义了如何构造对象以及要放入什么。

当然，我们不仅可以将属性添加到 `this` 中，还可以添加方法。

例如，下面的 `new User(name)` 用给定的 `name` 和方法 `sayHi` 创建了一个对象：

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

[类](https://zh.javascript.info/classes) 是用于创建复杂对象的一个更高级的语法，我们稍后会讲到。

## 22.可选链 ---？.

可选链 `?.` 是一种访问嵌套对象属性的安全的方式。即使中间的属性不存在，也不会出现错误

### 不存在的属性 的问题

如果你才刚开始读此教程并学习 JavaScript，那可能还没接触到这个问题，但它却相当常见。

举个例子，假设我们有很多个 `user` 对象，其中存储了我们的用户数据。

我们大多数用户的地址都存储在 `user.address` 中，街道地址存储在 `user.address.street` 中，但有些用户没有提供这些信息。

在这种情况下，当我们尝试获取 `user.address.street`，而该用户恰好没提供地址信息，我们则会收到一个错误：

```javascript
let user = {}; // 一个没有 "address" 属性的 user 对象

alert(user.address.street); // Error!
```

这是预期的结果。JavaScript 的工作原理就是这样的。因为 `user.address` 为 `undefined`，尝试读取 `user.address.street` 会失败，并收到一个错误。

但是在很多实际场景中，我们更希望得到的是 `undefined`（表示没有 `street` 属性）而不是一个错误。

……还有另一个例子。在 Web 开发中，我们可以使用特殊的方法调用（例如 `document.querySelector('.elem')`）以对象的形式获取一个网页元素，如果没有这种对象，则返回 `null`。

```javascript
// 如果 document.querySelector('.elem') 的结果为 null，则这里不存在这个元素
let html = document.querySelector('.elem').innerHTML; // 如果 document.querySelector('.elem') 的结果为 null，则会出现错误
```

同样，如果该元素不存在，则访问 `null` 的 `.innerHTML` 时会出错。在某些情况下，当元素的缺失是没问题的时候，我们希望避免出现这种错误，而是接受 `html = null` 作为结果。

我们如何实现这一点呢？

可能最先想到的方案是在访问该值的属性之前，使用 `if` 或条件运算符 `?` 对该值进行检查，像这样：

```javascript
let user = {};

alert(user.address ? user.address.street : undefined);
```

这样可以，这里就不会出现错误了……但是不够优雅。就像你所看到的，`"user.address"` 在代码中出现了两次。对于嵌套层次更深的属性就会出现更多次这样的重复，这就是问题了。

例如，让我们尝试获取 `user.address.street.name`。

我们既需要检查 `user.address`，又需要检查 `user.address.street`：

```javascript
let user = {}; // user 没有 address 属性

alert(user.address ? user.address.street ? user.address.street.name : null : null);
```

这样就太扯淡了，并且这可能导致写出来的代码很难让别人理解。

甚至我们可以先忽略这个问题，因为我们有一种更好的实现方式，就是使用 `&&` 运算符：

```javascript
let user = {}; // user 没有 address 属性

alert( user.address && user.address.street && user.address.street.name ); // undefined（不报错）
```

依次对整条路径上的属性使用与运算进行判断，以确保所有节点是存在的（如果不存在，则停止计算），但仍然不够优雅。

就像你所看到的，在代码中我们仍然重复写了好几遍对象属性名。例如在上面的代码中，`user.address` 被重复写了三遍。

这就是为什么可选链 `?.` 被加入到了 JavaScript 这门编程语言中。那就是彻底地解决以上所有问题！

### 可选链 ？.

如果可选链 `?.` 前面的值为 `undefined` 或者 `null`，它会停止运算并返回 `undefined`。

**为了简明起见，在本文接下来的内容中，我们会说如果一个属性既不是 `null` 也不是 `undefined`，那么它就“存在”。**

换句话说，例如 `value?.prop`：

- 如果 `value` 存在，则结果与 `value.prop` 相同，
- 否则（当 `value` 为 `undefined/null` 时）则返回 `undefined`。

下面这是一种使用 `?.` 安全地访问 `user.address.street` 的方式：

```javascript
let user = {}; // user 没有 address 属性

alert( user?.address?.street ); // undefined（不报错）
```

代码简洁明了，也不用重复写好几遍属性名。

即使 对象 `user` 不存在，使用 `user?.address` 来读取地址也没问题：

```javascript
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

请注意：`?.` 语法使其前面的值成为可选值，但不会对其后面的起作用。

例如，在 `user?.address.street.name` 中，`?.` 允许 `user` 为 `null/undefined`（在这种情况下会返回 `undefined`）也不会报错，但这仅对于 `user`。更深层次的属性是通过常规方式访问的。如果我们希望它们中的一些也是可选的，那么我们需要使用更多的 `?.` 来替换 `.`。

**不要过度使用可选链**

我们应该只将 `?.` 使用在一些东西可以不存在的地方。

例如，如果根据我们的代码逻辑，`user` 对象必须存在，但 `address` 是可选的，那么我们应该这样写 `user.address?.street`，而不是这样 `user?.address?.street`。

所以，如果 `user` 恰巧因为失误变为 undefined，我们会看到一个编程错误并修复它。否则，代码中的错误在不恰当的地方被消除了，这会导致调试更加困难。

**`?.` 前的变量必须已声明**

如果未声明变量 `user`，那么 `user?.anything` 会触发一个错误：

```javascript
// ReferenceError: user is not defined
user?.address;
```

`?.` 前的变量必须已声明（例如 `let/const/var user` 或作为一个函数参数）。可选链仅适用于已声明的变量。

### 短路效应

正如前面所说的，如果 `?.` 左边部分不存在，就会立即停止运算（“短路效应”）。

所以，如果后面有任何函数调用或者副作用，它们均不会执行。

例如：

```javascript
let user = null;
let x = 0;

user?.sayHi(x++); // 没有 "sayHi"，因此代码执行没有触达 x++

alert(x); // 0，值没有增加
```

### 其他变体

可选链 `?.` 不是一个运算符，而是一个特殊的语法结构。它还可以与函数和方括号一起使用。

例如，将 `?.()` 用于调用一个可能不存在的函数。

在下面这段代码中，有些用户具有 `admin` 方法，而有些没有：

```javascript
let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // 啥都没有（没有这样的方法）
```

在这两行代码中，我们首先使用点符号（`userAdmin.admin`）来获取 `admin` 属性，因为我们假定对象 `userAdmain` 存在，因此可以安全地读取它。

然后 `?.()` 会检查它左边的部分：如果 `admin` 函数存在，那么就调用运行它（对于 `userAdmin`）。否则（对于 `userGuest`）运算停止，没有报错。

如果我们想使用方括号 `[]` 而不是点符号 `.` 来访问属性，语法 `?.[]` 也可以使用。跟前面的例子类似，它允许从一个可能不存在的对象上安全地读取属性。

```javascript
let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
```

此外，我们还可以将 `?.` 跟 `delete` 一起使用：

```javascript
delete user?.name; // 如果 user 存在，则删除 user.name
```

**我们可以使用 `?.` 来安全地读取或删除，但不能写入**

可选链 `?.` 不能用在赋值语句的左侧。

例如：

```javascript
let user = null;

user?.name = "John"; // Error，不起作用
// 因为它在计算的是 undefined = "John"
```

这还不是那么智能。

### 总结（重要）

可选链 `?.` 语法有三种形式：

1. `obj?.prop` —— 如果 `obj` 存在则返回 `obj.prop`，否则返回 `undefined`。
2. `obj?.[prop]` —— 如果 `obj` 存在则返回 `obj[prop]`，否则返回 `undefined`。
3. `obj.method?.()` —— 如果 `obj.method` 存在则调用 `obj.method()`，否则返回 `undefined`。

正如我们所看到的，这些语法形式用起来都很简单直接。`?.` 检查左边部分是否为 `null/undefined`，如果不是则继续运算。

`?.` 链使我们能够安全地访问嵌套属性。

但是，我们应该谨慎地使用 `?.`，仅在当左边部分不存在也没问题的情况下使用为宜。以保证在代码中有编程上的错误出现时，也不会对我们隐藏。

## 23.Symbol类型

根据规范，对象的属性键只能是字符串类型或者 Symbol 类型。不是 Number，也不是 Boolean，只有字符串或 Symbol 这两种类型。

### Symbol

Symbol” 值表示唯一的标识符。

可以使用 `Symbol()` 来创建这种类型的值：

```javascript
// id 是 symbol 的一个实例化对象
let id = Symbol();
```

创建时，我们可以给 Symbol 一个描述（也称为 Symbol 名），这在代码调试时非常有用：

```javascript
// id 是描述为 "id" 的 Symbol
let id = Symbol("id");
```

Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。

例如，这里有两个描述相同的 Symbol —— 它们不相等：

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```

如果你熟悉 Ruby 或者其他有 “Symbol” 的语言 —— 别被误导。JavaScript 的 Symbol 是不同的。

**Symbol 不会被自动转换为字符串**

JavaScript 中的大多数值都支持字符串的隐式转换。例如，我们可以 `alert` 任何值，都可以生效。Symbol 比较特殊，它不会被自动转换。

例如，这个 `alert` 将会提示出错：

```javascript
let id = Symbol("id");
alert(id); // 类型错误：无法将 Symbol 值转换为字符串。
```

这是一种防止混乱的“语言保护”，因为字符串和 Symbol 有本质上的不同，不应该意外地将它们转换成另一个。

如果我们真的想显示一个 Symbol，我们需要在它上面调用 `.toString()`，如下所示：

```javascript
let id = Symbol("id");
alert(id.toString()); // Symbol(id)，现在它有效了
```

或者获取 `symbol.description` 属性，只显示描述（description）：

```javascript
let id = Symbol("id");
alert(id.description); // id
```

### "隐藏"属性

Symbol 允许我们创建对象的“隐藏”属性，代码的任何其他部分都不能意外访问或重写这些属性。

例如，如果我们使用的是属于第三方代码的 `user` 对象，我们想要给它们添加一些标识符。

我们可以给它们使用 Symbol 键：

```javascript
let user = { // 属于另一个代码
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // 我们可以使用 Symbol 作为键来访问数据
```

使用 `Symbol("id")` 作为键，比起用字符串 `"id"` 来有什么好处呢？

因为 `user` 对象属于其他的代码，那些代码也会使用这个对象，所以我们不应该在它上面直接添加任何字段，这样很不安全。但是你添加的 Symbol 属性不会被意外访问到，第三方代码根本不会看到它，所以使用 Symbol 基本上不会有问题。

另外，假设另一个脚本希望在 `user` 中有自己的标识符，以实现自己的目的。这可能是另一个 JavaScript 库，因此脚本之间完全不了解彼此。

然后该脚本可以创建自己的 `Symbol("id")`，像这样：

```javascript
// ...
let id = Symbol("id");

user[id] = "Their id value";
```

我们的标识符和它们的标识符之间不会有冲突，因为 Symbol 总是不同的，即使它们有相同的名字。

……但如果我们处于同样的目的，使用字符串 `"id"` 而不是用 symbol，那么 **就会** 出现冲突：

```javascript
let user = { name: "John" };

// 我们的脚本使用了 "id" 属性。
user.id = "Our id value";

// ……另一个脚本也想将 "id" 用于它的目的……

user.id = "Their id value"
// 砰！无意中被另一个脚本重写了 id！
```

### 对象字面量中的Symbol

如果我们要在对象字面量 `{...}` 中使用 Symbol，则需要使用方括号把它括起来。

就像这样：

```javascript
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // 而不是 "id"：123
};
```

这是因为我们需要变量 `id` 的值作为键，而不是字符串 “id”。

### Symbol在for...in 中跳过

Symbol 属性不参与 `for..in` 循环。

例如：

```javascript
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// 使用 Symbol 任务直接访问
alert( "Direct: " + user[id] );
```

`Object.keys(user)` 也会忽略它们。这是一般“隐藏符号属性”原则的一部分。如果另一个脚本或库遍历我们的对象，它不会意外地访问到符号属性。

相反，[Object.assign](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 会同时复制字符串和 symbol 属性：

```javascript
let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123
```

这里并不矛盾，就是这样设计的。这里的想法是当我们克隆或者合并一个 object 时，通常希望 **所有** 属性被复制（包括像 `id` 这样的 Symbol）。

### 全局symbol

正如我们所看到的，通常所有的 Symbol 都是不同的，即使它们有相同的名字。但有时我们想要名字相同的 Symbol 具有相同的实体。例如，应用程序的不同部分想要访问的 Symbol `"id"` 指的是完全相同的属性。

为了实现这一点，这里有一个 **全局 Symbol 注册表**。我们可以在其中创建 Symbol 并在稍后访问它们，它可以确保每次访问相同名字的 Symbol 时，返回的都是相同的 Symbol。

要从注册表中读取（不存在则创建）Symbol，请使用 `Symbol.for(key)`。

该调用会检查全局注册表，如果有一个描述为 `key` 的 Symbol，则返回该 Symbol，否则将创建一个新 Symbol（`Symbol(key)`），并通过给定的 `key` 将其存储在注册表中。

例如：

```javascript
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 Symbol
alert( id === idAgain ); // true
```

注册表内的 Symbol 被称为 **全局 Symbol**。如果我们想要一个应用程序范围内的 Symbol，可以在代码中随处访问 —— 这就是它们的用途。

**这听起来像 Ruby**

在一些编程语言中，例如 Ruby，每个名字都有一个 Symbol。

正如我们所看到的，在 JavaScript 中，全局 Symbol 也是这样的。

### Symbol.keyFor()

对于全局 Symbol，不仅有 `Symbol.for(key)` 按名字返回一个 Symbol，还有一个反向调用：`Symbol.keyFor(sym)`，它的作用完全反过来：通过全局 Symbol 返回一个名字。

例如：

```javascript
// 通过 name 获取 Symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 Symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

`Symbol.keyFor` 内部使用全局 Symbol 注册表来查找 Symbol 的键。所以它不适用于非全局 Symbol。如果 Symbol 不是全局的，它将无法找到它并返回 `undefined`。

也就是说，任何 Symbol 都具有 `description` 属性。

例如：

```javascript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name，全局 Symbol
alert( Symbol.keyFor(localSymbol) ); // undefined，非全局

alert( localSymbol.description ); // name
```

### 系统Symbol

JavaScript 内部有很多“系统” Symbol，我们可以使用它们来微调对象的各个方面。

它们都被列在了 [众所周知的 Symbol](https://tc39.github.io/ecma262/#sec-well-known-symbols) 表的规范中：

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- ……等等。

例如，`Symbol.toPrimitive` 允许我们将对象描述为原始值转换。我们很快就会看到它的使用。

当我们研究相应的语言特征时，我们对其他的 Symbol 也会慢慢熟悉起来。

### 总结

`Symbol` 是唯一标识符的基本类型

Symbol 是使用带有可选描述（name）的 `Symbol()` 调用创建的。

Symbol 总是不同的值，即使它们有相同的名字。如果我们希望同名的 Symbol 相等，那么我们应该使用全局注册表：`Symbol.for(key)` 返回（如果需要的话则创建）一个以 `key` 作为名字的全局 Symbol。使用 `Symbol.for` 多次调用 `key` 相同的 Symbol 时，返回的就是同一个 Symbol。

Symbol 有两个主要的使用场景：

1. “隐藏” 对象属性。 如果我们想要向“属于”另一个脚本或者库的对象添加一个属性，我们可以创建一个 Symbol 并使用它作为属性的键。Symbol 属性不会出现在 `for..in` 中，因此它不会意外地被与其他属性一起处理。并且，它不会被直接访问，因为另一个脚本没有我们的 symbol。因此，该属性将受到保护，防止被意外使用或重写。

   因此我们可以使用 Symbol 属性“秘密地”将一些东西隐藏到我们需要的对象中，但其他地方看不到它。

2. JavaScript 使用了许多系统 Symbol，这些 Symbol 可以作为 `Symbol.*` 访问。我们可以使用它们来改变一些内建行为。例如，在本教程的后面部分，我们将使用 `Symbol.iterator` 来进行 [迭代](https://zh.javascript.info/iterable) 操作，使用 `Symbol.toPrimitive` 来设置 [对象原始值的转换](https://zh.javascript.info/object-toprimitive) 等等。

从技术上说，Symbol 不是 100% 隐藏的。有一个内建方法 [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) 允许我们获取所有的 Symbol。还有一个名为 [Reflect.ownKeys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) 的方法可以返回一个对象的 **所有** 键，包括 Symbol。所以它们并不是真正的隐藏。但是大多数库、内建方法和语法结构都没有使用这些方法。

## 24.对象--原始值的转换

当对象相加 `obj1 + obj2`，相减 `obj1 - obj2`，或者使用 `alert(obj)` 打印时会发生什么？

在这种情况下，对象会被自动转换为原始值，然后执行操作。

在 [类型转换](https://zh.javascript.info/type-conversions) 一章中，我们已经看到了数值，字符串和布尔转换的规则。但是我们没有讲对象的转换规则。现在我们已经掌握了方法（method）和 symbol 的相关知识，可以开始学习对象原始值转换了。

1. 所有的对象在布尔上下文（context）中均为 `true`。所以对于对象，不存在 to-boolean 转换，只有字符串和数值转换。
2. 数值转换发生在对象相减或应用数学函数时。例如，`Date` 对象（将在 [日期和时间](https://zh.javascript.info/date) 一章中介绍）可以相减，`date1 - date2` 的结果是两个日期之间的差值。
3. 至于字符串转换 —— 通常发生在我们像 `alert(obj)` 这样输出一个对象和类似的上下文中。

### ToPrimitive

我们可以使用特殊的对象方法，对字符串和数值转换进行微调。

下面是三个类型转换的变体，被称为 “hint”，在 [规范](https://tc39.github.io/ecma262/#sec-toprimitive) 中有详细介绍（译注：当一个对象被用在需要原始值的上下文中时，例如，在 `alert` 或数学运算中，对象会被转换为原始值）：

- `"string"`

  对象到字符串的转换，当我们对期望一个字符串的对象执行操作时，如 “alert”：`// 输出 alert(obj); // 将对象作为属性键 anotherObj[obj] = 123;`

- `"number"`

  对象到数字的转换，例如当我们进行数学运算时：`// 显式转换 let num = Number(obj); // 数学运算（除了二元加法） let n = +obj; // 一元加法 let delta = date1 - date2; // 小于/大于的比较 let greater = user1 > user2;`

- `"default"`

  在少数情况下发生，当运算符“不确定”期望值的类型时。例如，二元加法 `+` 可用于字符串（连接），也可以用于数字（相加），所以字符串和数字这两种类型都可以。因此，当二元加法得到对象类型的参数时，它将依据 `"default"` hint 来对其进行转换。此外，如果对象被用于与字符串、数字或 symbol 进行 `==` 比较，这时到底应该进行哪种转换也不是很明确，因此使用 `"default"` hint。`// 二元加法使用默认 hint let total = obj1 + obj2; // obj == number 使用默认 hint if (user == 1) { ... };`像 `<` 和 `>` 这样的小于/大于比较运算符，也可以同时用于字符串和数字。不过，它们使用 “number” hint，而不是 “default”。这是历史原因。实际上，我们没有必要记住这些奇特的细节，除了一种情况（`Date` 对象，我们稍后会学到它）之外，所有内建对象都以和 `"number"` 相同的方式实现 `"default"` 转换。我们也可以这样做。

**没有 `"boolean"` hint**

请注意 —— 只有三种 hint。就这么简单。

没有 “boolean” hint（在布尔上下文中所有对象都是 `true`）或其他任何东西。如果我们将 `"default"` 和 `"number"` 视为相同，就像大多数内建函数一样，那么就只有两种转换了。

**为了进行转换，JavaScript 尝试查找并调用三个对象方法：**

1. 调用 `obj[Symbol.toPrimitive](hint)` —— 带有 symbol 键 `Symbol.toPrimitive`（系统 symbol）的方法，如果这个方法存在的话，
2. 否则，如果 hint 是 `"string"` —— 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在。
3. 否则，如果 hint 是 `"number"` 或 `"default"` —— 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在。

### Symbol.toPrimitive

我们从第一个方法开始。有一个名为 `Symbol.toPrimitive` 的内建 symbol，它被用来给转换方法命名，像这样：

```javascript
obj[Symbol.toPrimitive] = function(hint) {
  // 返回一个原始值
  // hint = "string"、"number" 和 "default" 中的一个
}
```

例如，这里 `user` 对象实现了它：

```javascript
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// 转换演示：
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

从代码中我们可以看到，根据转换的不同，`user` 变成一个自描述字符串或者一个金额。单个方法 `user[Symbol.toPrimitive]` 处理了所有的转换情况。

### toString/valueOf

方法 `toString` 和 `valueOf` 来自上古时代。它们不是 symbol（那时候还没有 symbol 这个概念），而是“常规的”字符串命名的方法。它们提供了一种可选的“老派”的实现转换的方法。

如果没有 `Symbol.toPrimitive`，那么 JavaScript 将尝试找到它们，并且按照下面的顺序进行尝试：

- 对于 “string” hint，`toString -> valueOf`。
- 其他情况，`valueOf -> toString`。

这些方法必须返回一个原始值。如果 `toString` 或 `valueOf` 返回了一个对象，那么返回值会被忽略（和这里没有方法的时候相同）。

默认情况下，普通对象具有 `toString` 和 `valueOf` 方法：

- `toString` 方法返回一个字符串 `"[object Object]"`。
- `valueOf` 方法返回对象自身。

下面是一个示例：

```javascript
let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

所以，如果我们尝试将一个对象当做字符串来使用，例如在 `alert` 中，那么在默认情况下我们会看到 `[object Object]`。

这里提到默认值 `valueOf` 只是为了完整起见，以避免混淆。正如你看到的，它返回对象本身，因此被忽略。别问我为什么，那是历史原因。所以我们可以假设它根本就不存在。

让我们实现一下这些方法。

例如，这里的 `user` 执行和前面提到的那个 `user` 一样的操作，使用 `toString` 和 `valueOf` 的组合（而不是 `Symbol.toPrimitive`）：

```javascript
let user = {
  name: "John",
  money: 1000,

  // 对于 hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // 对于 hint="number" 或 "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

我们可以看到，执行的动作和前面使用 `Symbol.toPrimitive` 的那个例子相同。

通常我们希望有一个“全能”的地方来处理所有原始转换。在这种情况下，我们可以只实现 `toString`，就像这样：

```javascript
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
```

如果没有 `Symbol.toPrimitive` 和 `valueOf`，`toString` 将处理所有原始转换。

### 返回类型

关于所有原始转换方法，有一个重要的点需要知道，就是它们不一定会返回 “hint” 的原始值。

没有限制 `toString()` 是否返回字符串，或 `Symbol.toPrimitive` 方法是否为 hint “number” 返回数字。

唯一强制性的事情是：这些方法必须返回一个原始值，而不是对象。

**历史原因**

由于历史原因，如果 `toString` 或 `valueOf` 返回一个对象，则不会出现 error，但是这种值会被忽略（就像这种方法根本不存在）。这是因为在 JavaScript 语言发展初期，没有很好的 “error” 的概念。

相反，`Symbol.toPrimitive` **必须** 返回一个原始值，否则就会出现 error。

### 进一步的转换

我们已经知道，许多运算符和函数执行类型转换，例如乘法 `*` 将操作数转换为数字。

如果我们将对象作为参数传递，则会出现两个阶段：

1. 对象被转换为原始值（通过前面我们描述的规则）。
2. 如果生成的原始值的类型不正确，则继续进行转换。

例如：

```javascript
let obj = {
  // toString 在没有其他方法的情况下处理所有转换
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4，对象被转换为原始值字符串 "2"，之后它被乘法转换为数字 2。
```

1. 乘法 `obj * 2` 首先将对象转换为原始值（字符串 “2”）。
2. 之后 `"2" * 2` 变为 `2 * 2`（字符串被转换为数字）。

二元加法在同样的情况下会将其连接成字符串，因为它更愿意接受字符串：

```javascript
let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2); // 22（"2" + 2）被转换为原始值字符串 => 级联
```

### 总结

对象到原始值的转换，是由许多期望以原始值作为值的内建函数和运算符自动调用的。

这里有三种类型（hint）：

- `"string"`（对于 `alert` 和其他需要字符串的操作）
- `"number"`（对于数学运算）
- `"default"`（少数运算符）

规范明确描述了哪个运算符使用哪个 hint。很少有运算符“不知道期望什么”并使用 `"default"` hint。通常对于内建对象，`"default"` hint 的处理方式与 `"number"` 相同，因此在实践中，最后两个 hint 常常合并在一起。

转换算法是：

1. 调用 `obj[Symbol.toPrimitive](hint)` 如果这个方法存在，

2. 否则，如果 hint 是

   ```
   "string"
   ```

   - 尝试 `obj.toString()` 和 `obj.valueOf()`，无论哪个存在。

3. 否则，如果 hint 是

   ```
   "number"
   ```

   或者

   ```
   "default"
   ```

   - 尝试 `obj.valueOf()` 和 `obj.toString()`，无论哪个存在。

在实践中，为了便于进行日志记录或调试，对于所有能够返回一种“可读性好”的对象的表达形式的转换，只实现以 `obj.toString()` 作为全能转换的方法就够了。

## 25.数据类型

JavaScript 允许我们像使用对象一样使用原始类型（字符串，数字等）。JavaScript 还提供了这样的调用方法。我们很快就会学习它们，但是首先我们将了解它的工作原理，毕竟原始类型不是对象（在这里我们会分析地更加清楚）。

我们来看看原始类型和对象之间的关键区别。

一个原始值：

- 是原始类型中的一种值。
- 在 JavaScript 中有 7 种原始类型：`string`，`number`，`bigint`，`boolean`，`symbol`，`null` 和 `undefined`。

一个对象：

- 能够存储多个值作为属性。
- 可以使用大括号 `{}` 创建对象，例如：`{name: "John", age: 30}`。JavaScript 中还有其他种类的对象，例如函数就是对象。

关于对象的最好的事儿之一是，我们可以把一个函数作为对象的属性存储到对象中。

```javascript
let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!
```

所以我们在这里创建了一个包含 `sayHi` 方法的对象 `john`。

许多内建对象已经存在，例如那些处理日期、错误、HTML 元素等的内建对象。它们具有不同的属性和方法。

但是，这些特性（feature）都是有成本的！

对象比原始类型“更重”。它们需要额外的资源来支持运作。

###  当作对象的原始类型

以下是 JavaScript 创建者面临的悖论：

- 人们可能想对诸如字符串或数字之类的原始类型执行很多操作。最好将它们作为方法来访问。
- 原始类型必须尽可能的简单轻量。

而解决方案看起来多少有点尴尬，如下：

1. 原始类型仍然是原始的。与预期相同，提供单个值
2. JavaScript 允许访问字符串，数字，布尔值和 symbol 的方法和属性。
3. 为了使它们起作用，创建了提供额外功能的特殊“对象包装器”，使用后即被销毁。

“对象包装器”对于每种原始类型都是不同的，它们被称为 `String`、`Number`、`Boolean` 和 `Symbol`。因此，它们提供了不同的方法。

例如，字符串方法 [str.toUpperCase()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 返回一个大写化处理的字符串。

用法演示如下：

```javascript
let str = "Hello";

alert( str.toUpperCase() ); // HELLO
```

很简单，对吧？以下是 `str.toUpperCase()` 中实际发生的情况：

1. 字符串 `str` 是一个原始值。因此，在访问其属性时，会创建一个包含字符串字面值的特殊对象，并且具有有用的方法，例如 `toUpperCase()`。
2. 该方法运行并返回一个新的字符串（由 `alert` 显示）。
3. 特殊对象被销毁，只留下原始值 `str`。

所以原始类型可以提供方法，但它们依然是轻量级的。

JavaScript 引擎高度优化了这个过程。它甚至可能跳过创建额外的对象。但是它仍然必须遵守规范，并且表现得好像它创建了一样。

数字有其自己的方法，例如，[toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 将数字舍入到给定的精度：

```javascript
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
```

我们将在后面 [数字类型](https://zh.javascript.info/number) 和 [字符串](https://zh.javascript.info/string) 章节中看到更多具体的方法。

**构造器 `String/Number/Boolean` 仅供内部使用**

像 Java 这样的一些语言允许我们使用 `new Number(1)` 或 `new Boolean(false)` 等语法，明确地为原始类型创建“对象包装器”。

在 JavaScript 中，由于历史原因，这也是可以的，但极其 **不推荐**。因为这样会出问题。

例如：

```javascript
alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
```

对象在 `if` 中始终为真，因此此处的 alert 将显示：

```javascript
let zero = new Number(0);

if (zero) { // zero 为 true，因为它是一个对象
  alert( "zero is truthy?!?" );
}
```

另一方面，调用不带 `new`（关键字）的 `String/Number/Boolean` 函数是完全理智和有用的。它们将一个值转换为相应的类型：转成字符串、数字或布尔值（原始类型）。

例如，下面完全是有效的：

```javascript
let num = Number("123"); // 将字符串转成数字
```

**null/undefined 没有任何方法**

特殊的原始类型 `null` 和 `undefined` 是例外。它们没有对应的“对象包装器”，也没有提供任何方法。从某种意义上说，它们是“最原始的”。

尝试访问这种值的属性会导致错误：

```javascript
alert(null.test); // error
```

### [总结](https://zh.javascript.info/primitives-methods#zong-jie)

- 除 `null` 和 `undefined` 以外的原始类型都提供了许多有用的方法。我们后面的章节中学习这些内容。

- 从形式上讲，这些方法通过临时对象工作，但 JavaScript 引擎可以很好地调整，以在内部对其进行优化，因此调用它们并不需要太高的成本。

## 26.数字类型

  在现代 JavaScript 中，数字（number）有两种类型：

  1. JavaScript 中的常规数字以 64 位的格式 [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754-2008_revision) 存储，也被称为“双精度浮点数”。这是我们大多数时候所使用的数字，我们将在本章中学习它们。
  2. BigInt 数字，用于表示任意长度的整数。有时会需要它们，因为常规数字不能超过 `253` 或小于 `-253`。由于仅在少数特殊领域才会用到 BigInt，因此我们在特殊的章节 [BigInt](https://zh.javascript.info/bigint) 中对其进行了介绍。

  所以，在这里我们将讨论常规数字类型。现在让我们开始学习吧。

  ### 编写数字的更多方法

  假如我们需要表示 10 亿。显然，我们可以这样写：

  ```javascript
  let billion = 1000000000;
  ```

  但在现实生活中，我们通常避免写一长串零，因为它很容易打错。另外，我们很懒。我们通常会将 10 亿写成 `"1bn"`，或将 73 亿写成 `"7.3bn"`。对于大多数大的数字来说都是如此。

  在 JavaScript 中，我们通过在数字后附加字母 “e”，并指定零的数量来缩短数字：

  ```javascript
  let billion = 1e9;  // 10 亿，字面意思：数字 1 后面跟 9 个 0
  
  alert( 7.3e9 );  // 73 亿（7,300,000,000）
  ```

  换句话说，`"e"` 把数字乘以 `1` 后面跟着给定数量的 0 的数字。

  ```javascript
  1e3 = 1 * 1000
  1.23e6 = 1.23 * 1000000
  ```

  现在让我们写一些非常小的数字。例如，1 微秒（百万分之一秒）：

  ```javascript
  let ms = 0.000001;
  ```

  就像以前一样，可以使用 `"e"` 来完成。如果我们想避免显式地写零，我们可以这样写：

  ```javascript
  let ms = 1e-6; // 1 的左边有 6 个 0
  ```

  如果我们数一下 `0.000001` 中的 0 的个数，是 6 个。所以自然是 `1e-6`。

  换句话说，`e` 后面的负数表示除以 1 后面跟着给定数量的 0 的数字：

  ```javascript
  // -3 除以 1 后面跟着 3 个 0 的数字
  1e-3 = 1 / 1000 (=0.001)
  
  // -6 除以 1 后面跟着 6 个 0 的数字
  1.23e-6 = 1.23 / 1000000 (=0.00000123)
  ```

### toString(base)

方法 `num.toString(base)` 返回在给定 `base` 进制数字系统中 `num` 的字符串表示形式。

举个例子：

```javascript
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

`base` 的范围可以从 `2` 到 `36`。默认情况下是 `10`。

常见的用例如下：

- **base=16** 用于十六进制颜色，字符编码等，数字可以是 `0..9` 或 `A..F`。

- **base=2** 主要用于调试按位操作，数字可以是 `0` 或 `1`。

- **base=36** 是最大进制，数字可以是 `0..9` 或 `A..Z`。所有拉丁字母都被用于了表示数字。对于 `36` 进制来说，一个有趣且有用的例子是，当我们需要将一个较长的数字标识符转换成较短的时候，例如做一个短的 URL。可以简单地使用基数为 `36` 的数字系统表示：

  ```javascript
  alert( 123456..toString(36) ); // 2n9c
  ```

**使用两个点来调用一个方法**

请注意 `123456..toString(36)` 中的两个点不是打错了。如果我们想直接在一个数字上调用一个方法，比如上面例子中的 `toString`，那么我们需要在它后面放置两个点 `..`。

如果我们放置一个点：`123456.toString(36)`，那么就会出现一个 error，因为 JavaScript 语法隐含了第一个点之后的部分为小数部分。如果我们再放一个点，那么 JavaScript 就知道小数部分为空，现在使用该方法。

也可以写成 `(123456).toString(36)`。

### 舍入

舍入（rounding）是使用数字时最常用的操作之一。

这里有几个对数字进行舍入的内建函数：

- `Math.floor`

  向下舍入：`3.1` 变成 `3`，`-1.1` 变成 `-2`。

- `Math.ceil`

  向上舍入：`3.1` 变成 `4`，`-1.1` 变成 `-1`。

- `Math.round`

  向最近的整数舍入：`3.1` 变成 `3`，`3.6` 变成 `4`，`-1.1` 变成 `-1`。

- `Math.trunc`（IE 浏览器不支持这个方法）

  移除小数点后的所有内容而没有舍入：`3.1` 变成 `3`，`-1.1` 变成 `-1`。

这个是总结它们之间差异的表格：

|        | `Math.floor` | `Math.ceil` | `Math.round` | `Math.trunc` |
| :----- | :----------- | :---------- | :----------- | :----------- |
| `3.1`  | `3`          | `4`         | `3`          | `3`          |
| `3.6`  | `3`          | `4`         | `4`          | `3`          |
| `-1.1` | `-2`         | `-1`        | `-1`         | `-1`         |
| `-1.6` | `-2`         | `-1`        | `-2`         | `-1`         |

这些函数涵盖了处理数字小数部分的所有可能方法。但是，如果我们想将数字舍入到小数点后 `n` 位，该怎么办？

例如，我们有 `1.2345`，并且想把它舍入到小数点后两位，仅得到 `1.23`。

有两种方式可以实现这个需求：

1. 乘除法

   例如，要将数字舍入到小数点后两位，我们可以将数字乘以 `100`（或更大的 10 的整数次幂），调用舍入函数，然后再将其除回。

   ```javascript
   let num = 1.23456;
   
   alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
   ```

2. 函数 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 将数字舍入到小数点后 `n` 位，并以字符串形式返回结果。

   ```javascript
   let num = 12.34;
   alert( num.toFixed(1) ); // "12.3"
   ```

   这会向上或向下舍入到最接近的值，类似于 `Math.round`：

   ```javascript
   let num = 12.36;
   alert( num.toFixed(1) ); // "12.4"
   ```

   请注意 `toFixed` 的结果是一个字符串。如果小数部分比所需要的短，则在结尾添加零：

   ```javascript
   let num = 12.34;
   alert( num.toFixed(5) ); // "12.34000"，在结尾添加了 0，以达到小数点后五位
   ```

   我们可以使用一元加号或 `Number()` 调用，将其转换为数字：`+ num.toFixed(5)`。

### 不精确的计算

   在内部，数字是以 64 位格式 [IEEE-754](http://en.wikipedia.org/wiki/IEEE_754-1985) 表示的，所以正好有 64 位可以存储一个数字：其中 52 位被用于存储这些数字，其中 11 位用于存储小数点的位置（对于整数，它们为零），而 1 位用于符号。

   如果一个数字太大，则会溢出 64 位存储，并可能会导致无穷大：

   ```javascript
   alert( 1e500 ); // Infinity
   ```

   这可能不那么明显，但经常会发生的是，精度的损失。

   考虑下这个（falsy！）测试：

   ```javascript
   alert( 0.1 + 0.2 == 0.3 ); // false
   ```

   没错，如果我们检查 `0.1` 和 `0.2` 的总和是否为 `0.3`，我们会得到 `false`。

   奇了怪了！如果不是 `0.3`，那能是啥？

   ```javascript
   alert( 0.1 + 0.2 ); // 0.30000000000000004
   ```

   哎哟！这个错误比不正确的比较的后果更严重。想象一下，你创建了一个电子购物网站，如果访问者将价格为 `¥ 0.10` 和 `¥ 0.20` 的商品放入了他的购物车。订单总额将是 `¥ 0.30000000000000004`。这会让任何人感到惊讶。

   但为什么会这样呢？

   一个数字以其二进制的形式存储在内存中，一个 1 和 0 的序列。但是在十进制数字系统中看起来很简单的 `0.1`，`0.2` 这样的小数，实际上在二进制形式中是无限循环小数。

   换句话说，什么是 `0.1`？`0.1` 就是 `1` 除以 `10`，`1/10`，即十分之一。在十进制数字系统中，这样的数字表示起来很容易。将其与三分之一进行比较：`1/3`。三分之一变成了无限循环小数 `0.33333(3)`。

   在十进制数字系统中，可以保证以 `10` 的整数次幂作为除数能够正常工作，但是以 `3` 作为除数则不能。也是同样的原因，在二进制数字系统中，可以保证以 `2` 的整数次幂作为除数时能够正常工作，但 `1/10` 就变成了一个无限循环的二进制小数。

   使用二进制数字系统无法 **精确** 存储 *0.1* 或 *0.2*，就像没有办法将三分之一存储为十进制小数一样。

   IEEE-754 数字格式通过将数字舍入到最接近的可能数字来解决此问题。这些舍入规则通常不允许我们看到“极小的精度损失”，但是它确实存在。

   我们可以看到：

   ```javascript
   alert( 0.1.toFixed(20) ); // 0.10000000000000000555
   ```

   当我们对两个数字进行求和时，它们的“精度损失”会叠加起来。

   这就是为什么 `0.1 + 0.2` 不等于 `0.3`。

   **不仅仅是 JavaScript**

   许多其他编程语言也存在同样的问题。

   PHP，Java，C，Perl，Ruby 给出的也是完全相同的结果，因为它们基于的是相同的数字格式。

   我们能解决这个问题吗？当然，最可靠的方法是借助方法 [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) 对结果进行舍入：

   ```javascript
   let sum = 0.1 + 0.2;
   alert( sum.toFixed(2) ); // 0.30
   ```

   请注意，`toFixed` 总是返回一个字符串。它确保小数点后有 2 位数字。如果我们有一个电子购物网站，并需要显示 `¥ 0.30`，这实际上很方便。对于其他情况，我们可以使用一元加号将其强制转换为一个数字：

   ```javascript
   let sum = 0.1 + 0.2;
   alert( +sum.toFixed(2) ); // 0.3
   ```

   我们可以将数字临时乘以 100（或更大的数字），将其转换为整数，进行数学运算，然后再除回。当我们使用整数进行数学运算时，误差会有所减少，但仍然可以在除法中得到：

   ```javascript
   alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
   alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
   ```

   因此，乘/除法可以减少误差，但不能完全消除误差。

   有时候我们可以尝试完全避免小数。例如，我们正在创建一个电子购物网站，那么我们可以用角而不是元来存储价格。但是，如果我们要打 30% 的折扣呢？实际上，完全避免小数处理几乎是不可能的。只需要在必要时剪掉其“尾巴”来对其进行舍入即可。

   **有趣的事儿**

   尝试运行下面这段代码：

   ```javascript
   // Hello！我是一个会自我增加的数字！
   alert( 9999999999999999 ); // 显示 10000000000000000
   ```

   出现了同样的问题：精度损失。有 64 位来表示该数字，其中 52 位可用于存储数字，但这还不够。所以最不重要的数字就消失了。

   JavaScript 不会在此类事件中触发 error。它会尽最大努力使数字符合所需的格式，但不幸的是，这种格式不够大到满足需求。

   **两个零**

   数字内部表示的另一个有趣结果是存在两个零：`0` 和 `-0`。

   这是因为在存储时，使用一位来存储符号，因此对于包括零在内的任何数字，可以设置这一位或者不设置。

   在大多数情况下，这种区别并不明显，因为运算符将它们视为相同的值。
### 测试 isFinite和isNaN

   还记得这两个特殊的数值吗？

   - `Infinity`（和 `-Infinity`）是一个特殊的数值，比任何数值都大（小）。
   - `NaN` 代表一个 error。

   它们属于 `number` 类型，但不是“普通”数字，因此，这里有用于检查它们的特殊函数：

   - `isNaN(value)` 将其参数转换为数字，然后测试它是否为 `NaN`：

     ```javascript
     alert( isNaN(NaN) ); // true
     alert( isNaN("str") ); // true
     ```

     但是我们需要这个函数吗？我们不能只使用 `=== NaN` 比较吗？不好意思，这不行。值 “NaN” 是独一无二的，它不等于任何东西，包括它自身：

     ```javascript
     alert( NaN === NaN ); // false
     ```

   - `isFinite(value)` 将其参数转换为数字，如果是常规数字，则返回 `true`，而不是 `NaN/Infinity/-Infinity`：

     ```javascript
     alert( isFinite("15") ); // true
     alert( isFinite("str") ); // false，因为是一个特殊的值：NaN
     alert( isFinite(Infinity) ); // false，因为是一个特殊的值：Infinity
     ```

   有时 `isFinite` 被用于验证字符串值是否为常规数字：

   ```javascript
   let num = +prompt("Enter a number", '');
   
   // 结果会是 true，除非你输入的是 Infinity、-Infinity 或不是数字
   alert( isFinite(num) );
   ```

   请注意，在所有数字函数中，包括 `isFinite`，空字符串或仅有空格的字符串均被视为 `0`。

   **与 `Object.is` 进行比较**

   有一个特殊的内建方法 [`Object.is`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/is)，它类似于 `===` 一样对值进行比较，但它对于两种边缘情况更可靠：

   1. 它适用于 `NaN`：`Object.is(NaN，NaN) === true`，这是件好事。
   2. 值 `0` 和 `-0` 是不同的：`Object.is(0，-0) === false`，从技术上讲这是对的，因为在内部，数字的符号位可能会不同，即使其他所有位均为零。

   在所有其他情况下，`Object.is(a，b)` 与 `a === b` 相同。

   这种比较方式经常被用在 JavaScript 规范中。当内部算法需要比较两个值是否完全相同时，它使用 `Object.is`（内部称为 [SameValue](https://tc39.github.io/ecma262/#sec-samevalue)）。

### parseInt 和 parseFloat

使用加号 `+` 或 `Number()` 的数字转换是严格的。如果一个值不完全是一个数字，就会失败：

```javascript
alert( +"100px" ); // NaN
```

唯一的例外是字符串开头或结尾的空格，因为它们会被忽略。

但在现实生活中，我们经常会有带有单位的值，例如 CSS 中的 `"100px"` 或 `"12pt"`。并且，在很多国家，货币符号是紧随金额之后的，所以我们有 `"19€"`，并希望从中提取出一个数值。

这就是 `parseInt` 和 `parseFloat` 的作用。

它们可以从字符串中“读取”数字，直到无法读取为止。如果发生 error，则返回收集到的数字。函数 `parseInt` 返回一个整数，而 `parseFloat` 返回一个浮点数：

```javascript
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12，只有整数部分被返回了
alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取
```

某些情况下，`parseInt/parseFloat` 会返回 `NaN`。当没有数字可读时会发生这种情况：

```javascript
alert( parseInt('a123') ); // NaN，第一个符号停止了读取
```

**parseInt(str, radix)` 的第二个参数**

`parseInt()` 函数具有可选的第二个参数。它指定了数字系统的基数，因此 `parseInt` 还可以解析十六进制数字、二进制数字等的字符串：

```javascript
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255，没有 0x 仍然有效

alert( parseInt('2n9c', 36) ); // 123456
```

### 其他数学函数

JavaScript 有一个内建的 [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象，它包含了一个小型的数学函数和常量库。

几个例子：

- `Math.random()`

  返回一个从 0 到 1 的随机数（不包括 1）`alert( Math.random() ); // 0.1234567894322 alert( Math.random() ); // 0.5435252343232 alert( Math.random() ); // ... (任何随机数)`

- `Math.max(a, b, c...)` / `Math.min(a, b, c...)`

  从任意数量的参数中返回最大/最小值。`alert( Math.max(3, 5, -10, 0, 1) ); // 5 alert( Math.min(1, 2) ); // 1`

- `Math.pow(n, power)`

  返回 `n` 的给定（power）次幂`alert( Math.pow(2, 10) ); // 2 的 10 次幂 = 1024`

`Math` 对象中还有更多函数和常量，包括三角函数，你可以在 [Math 对象文档](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) 中找到这些内容。

### 总结

要写有很多零的数字：

- 将 `"e"` 和 0 的数量附加到数字后。就像：`123e6` 与 `123` 后面接 6 个 0 相同。
- `"e"` 后面的负数将使数字除以 1 后面接着给定数量的零的数字。例如 `123e-6` 表示 `0.000123`（`123` 的百万分之一）。

对于不同的数字系统：

- 可以直接在十六进制（`0x`），八进制（`0o`）和二进制（`0b`）系统中写入数字。
- `parseInt(str，base)` 将字符串 `str` 解析为在给定的 `base` 数字系统中的整数，`2 ≤ base ≤ 36`。
- `num.toString(base)` 将数字转换为在给定的 `base` 数字系统中的字符串。

要将 `12pt` 和 `100px` 之类的值转换为数字：

- 使用 `parseInt/parseFloat` 进行“软”转换，它从字符串中读取数字，然后返回在发生 error 前可以读取到的值。

小数：

- 使用 `Math.floor`，`Math.ceil`，`Math.trunc`，`Math.round` 或 `num.toFixed(precision)` 进行舍入。
- 请确保记住使用小数时会损失精度。

更多数学函数：

- 需要时请查看 [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) 对象。这个库很小，但是可以满足基本的需求。

## 27.字符串

### 引号

让我们回忆一下引号的种类。

字符串可以包含在单引号、双引号或反引号中：

```javascript
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
```

单引号和双引号基本相同。但是，反引号允许我们通过 `${…}` 将任何表达式嵌入到字符串中：

```javascript
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

使用反引号的另一个优点是它们允许字符串跨行：

```javascript
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // 客人清单，多行
```

看起来很自然，不是吗？但是单引号和双引号可不能这样做。

如果我们使用单引号或双引号来实现字符串跨行的话，则会出现错误：

```javascript
let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";
```

当不考虑多行字符串的需要时，单引号和双引号来自语言创建的古时代。反引号出现较晚，因此更通用。

反引号还允许我们在第一个反引号之前指定一个“模版函数”。语法是：`func`string``。函数 `func` 被自动调用，接收字符串和嵌入式表达式，并处理它们。你可以在 [docs](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals) 中阅读更多关于它们的信息。这叫做 “tagged templates”。此功能可以更轻松地将字符串包装到自定义模版或其他函数中，但这很少使用。

### [特殊字符](https://zh.javascript.info/string#te-shu-zi-fu)

我们仍然可以通过使用“换行符（newline character）”，以支持使用单引号和双引号来创建跨行字符串。换行符写作 `\n`，用来表示换行：

```javascript
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // 一个多行的客人列表
```

例如，这两行描述的是一样的，只是书写方式不同：

```javascript
let str1 = "Hello\nWorld"; // 使用“换行符”创建的两行字符串

// 使用反引号和普通的换行创建的两行字符串
let str2 = `Hello
World`;

alert(str1 == str2); // true
```

还有其他不常见的“特殊”字符。

这是完整列表：

| 字符                                    | 描述                                                         |
| :-------------------------------------- | :----------------------------------------------------------- |
| `\n`                                    | 换行                                                         |
| `\r`                                    | 回车：不单独使用。Windows 文本文件使用两个字符 `\r\n` 的组合来表示换行。 |
| `\'`, `\"`                              | 引号                                                         |
| `\\`                                    | 反斜线                                                       |
| `\t`                                    | 制表符                                                       |
| `\b`, `\f`, `\v`                        | 退格，换页，垂直标签 —— 为了兼容性，现在已经不使用了。       |
| `\xXX`                                  | 具有给定十六进制 Unicode `XX` 的 Unicode 字符，例如：`'\x7A'` 和 `'z'` 相同。 |
| `\uXXXX`                                | 以 UTF-16 编码的十六进制代码 `XXXX` 的 unicode 字符，例如 `\u00A9` —— 是版权符号 `©` 的 unicode。它必须正好是 4 个十六进制数字。 |
| `\u{X…XXXXXX}`（1 到 6 个十六进制字符） | 具有给定 UTF-32 编码的 unicode 符号。一些罕见的字符用两个 unicode 符号编码，占用 4 个字节。这样我们就可以插入长代码了。 |

unicode 示例：

```javascript
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫，罕见的中国象形文字（长 unicode）
alert( "\u{1F60D}" ); // 😍，笑脸符号（另一个长 unicode）
```

所有的特殊字符都以反斜杠字符 `\` 开始。它也被称为“转义字符”。

如果我们想要在字符串中插入一个引号，我们也会使用它。

例如：

```javascript
alert( 'I\'m the Walrus!' ); // I'm the Walrus!
```

正如你所看到的，我们必须在内部引号前加上反斜杠 `\'`，否则它将表示字符串结束。

当然，只有与外部闭合引号相同的引号才需要转义。因此，作为一个更优雅的解决方案，我们可以改用双引号或者反引号：

```javascript
alert( `I'm the Walrus!` ); // I'm the Walrus!
```

注意反斜杠 `\` 在 JavaScript 中用于正确读取字符串，然后消失。内存中的字符串没有 `\`。你从上述示例中的 `alert` 可以清楚地看到这一点。

但是如果我们需要在字符串中显示一个实际的反斜杠 `\` 应该怎么做？

我们可以这样做，只需要将其书写两次 `\\`：

```javascript
alert( `The backslash: \\` ); // The backslash: \
```

### [字符串长度](https://zh.javascript.info/string#zi-fu-chuan-chang-du)

`length` 属性表示字符串长度：

```javascript
alert( `My\n`.length ); // 3
```

注意 `\n` 是一个单独的“特殊”字符，所以长度确实是 `3`。

**`length` 是一个属性**

掌握其他编程语言的人，有时会错误地调用 `str.length()` 而不是 `str.length`。这是行不通的。

请注意 `str.length` 是一个数字属性，而不是函数。后面不需要添加括号。

### [访问字符](https://zh.javascript.info/string#fang-wen-zi-fu)

要获取在 `pos` 位置的一个字符，可以使用方括号 `[pos]` 或者调用 [str.charAt(pos)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) 方法。第一个字符从零位置开始：

```javascript
let str = `Hello`;

// 第一个字符
alert( str[0] ); // H
alert( str.charAt(0) ); // H

// 最后一个字符
alert( str[str.length - 1] ); // o
```

方括号是获取字符的一种现代化方法，而 `charAt` 是历史原因才存在的。

它们之间的唯一区别是，如果没有找到字符，`[]` 返回 `undefined`，而 `charAt` 返回一个空字符串：

```javascript
let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // ''（空字符串）
```

我们也可以使用 `for..of` 遍历字符：

```javascript
for (let char of "Hello") {
  alert(char); // H,e,l,l,o（char 变为 "H"，然后是 "e"，然后是 "l" 等）
}
```

### [字符串是不可变的](https://zh.javascript.info/string#zi-fu-chuan-shi-bu-ke-bian-de)

在 JavaScript 中，字符串不可更改。改变字符是不可能的。

我们证明一下为什么不可能：

```javascript
let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // 无法运行
```

通常的解决方法是创建一个新的字符串，并将其分配给 `str` 而不是以前的字符串。

例如：

```javascript
let str = 'Hi';

str = 'h' + str[1];  // 替换字符串

alert( str ); // hi
```

在接下来的章节，我们将看到更多相关示例。

### [改变大小写](https://zh.javascript.info/string#gai-bian-da-xiao-xie)

[toLowerCase()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) 和 [toUpperCase()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) 方法可以改变大小写：

```javascript
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
```

或者我们想要使一个字符变成小写：

```javascript
alert( 'Interface'[0].toLowerCase() ); // 'i'
```

### [查找子字符串](https://zh.javascript.info/string#cha-zhao-zi-zi-fu-chuan)

在字符串中查找子字符串有很多种方法。

#### [str.indexOf](https://zh.javascript.info/string#strindexof)

第一个方法是 [str.indexOf(substr, pos)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)。

它从给定位置 `pos` 开始，在 `str` 中查找 `substr`，如果没有找到，则返回 `-1`，否则返回匹配成功的位置。

例如：

```javascript
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0，因为 'Widget' 一开始就被找到
alert( str.indexOf('widget') ); // -1，没有找到，检索是大小写敏感的

alert( str.indexOf("id") ); // 1，"id" 在位置 1 处（……idget 和 id）
```

可选的第二个参数允许我们从给定的起始位置开始检索。

例如，`"id"` 第一次出现的位置是 `1`。查询下一个存在位置时，我们从 `2` 开始检索：

```javascript
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
```

如果我们对所有存在位置都感兴趣，可以在一个循环中使用 `indexOf`。每一次新的调用都发生在上一匹配位置之后：

```javascript
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // 这是我们要查找的目标

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // 继续从下一个位置查找
}
```

相同的算法可以简写：

```javascript
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
```

**`str.lastIndexOf(substr, pos)`**

还有一个类似的方法 [str.lastIndexOf(substr, position)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)，它从字符串的末尾开始搜索到开头。

它会以相反的顺序列出这些事件。

在 `if` 测试中 `indexOf` 有一点不方便。我们不能像这样把它放在 `if` 中：

```javascript
let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // 不工作！
}
```

上述示例中的 `alert` 不会显示，因为 `str.indexOf("Widget")` 返回 `0`（意思是它在起始位置就查找到了匹配项）。是的，但是 `if` 认为 `0` 表示 `false`。

因此我们应该检查 `-1`，像这样：

```javascript
let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // 现在工作了！
}
```

##### [按位（bitwise）NOT 技巧](https://zh.javascript.info/string#an-wei-bitwisenot-ji-qiao)

这里使用的一个老技巧是 [bitwise NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) `~` 运算符。它将数字转换为 32-bit 整数（如果存在小数部分，则删除小数部分），然后对其二进制表示形式中的所有位均取反。

实际上，这意味着一件很简单的事儿：对于 32-bit 整数，`~n` 等于 `-(n+1)`。

例如：

```javascript
alert( ~2 ); // -3，和 -(2+1) 相同
alert( ~1 ); // -2，和 -(1+1) 相同
alert( ~0 ); // -1，和 -(0+1) 相同
alert( ~-1 ); // 0，和 -(-1+1) 相同
```

正如我们看到这样，只有当 `n == -1` 时，`~n` 才为零（适用于任何 32-bit 带符号的整数 `n`）。

因此，仅当 `indexOf` 的结果不是 `-1` 时，检查 `if ( ~str.indexOf("...") )` 才为真。换句话说，当有匹配时。

人们用它来简写 `indexOf` 检查：

```javascript
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // 正常运行
}
```

通常不建议以非显而易见的方式使用语言特性，但这种特殊技巧在旧代码中仍被广泛使用，所以我们应该理解它。

只要记住：`if (~str.indexOf(...))` 读作 “if found”。

确切地说，由于 `~` 运算符将大数字截断为 32 位，因此存在给出 `0` 的其他数字，最小的数字是 `~4294967295=0`。这使得这种检查只有在字符串没有那么长的情况下才是正确的。

现在我们只会在旧的代码中看到这个技巧，因为现代 JavaScript 提供了 `.includes` 方法（见下文）。

### [includes，startsWith，endsWith](https://zh.javascript.info/string#includesstartswithendswith)

更现代的方法 [str.includes(substr, pos)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/includes) 根据 `str` 中是否包含 `substr` 来返回 `true/false`。

如果我们需要检测匹配，但不需要它的位置，那么这是正确的选择：

```javascript
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
```

`str.includes` 的第二个可选参数是开始搜索的起始位置：

```javascript
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, 从位置 3 开始没有 "id"
```

方法 [str.startsWith](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith) 和 [str.endsWith](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith) 的功能与其名称所表示的意思相同：

```javascript
alert( "Widget".startsWith("Wid") ); // true，"Widget" 以 "Wid" 开始
alert( "Widget".endsWith("get") ); // true，"Widget" 以 "get" 结束
```

### [获取子字符串](https://zh.javascript.info/string#huo-qu-zi-zi-fu-chuan)

JavaScript 中有三种获取字符串的方法：`substring`、`substr` 和 `slice`。

- `str.slice(start [, end])`

  返回字符串从 `start` 到（但不包括）`end` 的部分。例如：`let str = "stringify"; alert( str.slice(0, 5) ); // 'strin'，从 0 到 5 的子字符串（不包括 5） alert( str.slice(0, 1) ); // 's'，从 0 到 1，但不包括 1，所以只有在 0 处的字符`如果没有第二个参数，`slice` 会一直运行到字符串末尾：`let str = "st*ringify*"; alert( str.slice(2) ); // 从第二个位置直到结束``start/end` 也有可能是负值。它们的意思是起始位置从字符串结尾计算：`let str = "strin*gif*y"; // 从右边的第四个位置开始，在右边的第一个位置结束 alert( str.slice(-4, -1) ); // 'gif'`

- `str.substring(start [, end])`

  返回字符串在 `start` 和 `end` **之间** 的部分。这与 `slice` 几乎相同，但它允许 `start` 大于 `end`。例如：`let str = "st*ring*ify"; // 这些对于 substring 是相同的 alert( str.substring(2, 6) ); // "ring" alert( str.substring(6, 2) ); // "ring" // ……但对 slice 是不同的： alert( str.slice(2, 6) ); // "ring"（一样） alert( str.slice(6, 2) ); // ""（空字符串）`不支持负参数（不像 slice），它们被视为 `0`。

- `str.substr(start [, length])`

  返回字符串从 `start` 开始的给定 `length` 的部分。与以前的方法相比，这个允许我们指定 `length` 而不是结束位置：`let str = "st*ring*ify"; alert( str.substr(2, 4) ); // 'ring'，从位置 2 开始，获取 4 个字符`第一个参数可能是负数，从结尾算起：`let str = "strin*gi*fy"; alert( str.substr(-4, 2) ); // 'gi'，从第 4 位获取 2 个字符`

我们回顾一下这些方法，以免混淆：

| 方法                    | 选择方式……                                            | 负值参数            |
| :---------------------- | :---------------------------------------------------- | :------------------ |
| `slice(start, end)`     | 从 `start` 到 `end`（不含 `end`）                     | 允许                |
| `substring(start, end)` | `start` 与 `end` 之间（包括 `start`，但不包括 `end`） | 负值代表 `0`        |
| `substr(start, length)` | 从 `start` 开始获取长为 `length` 的字符串             | 允许 `start` 为负数 |

**使用哪一个？**

它们可以完成这项工作。形式上，`substr` 有一个小缺点：它不是在 JavaScript 核心规范中描述的，而是在附录 B 中，它涵盖了主要由于历史原因而存在的仅浏览器特性。因此，非浏览器环境可能无法支持它。但实际上它在任何地方都有效。

相较于其他两个变体，`slice` 稍微灵活一些，它允许以负值作为参数并且写法更简短。因此仅仅记住这三种方法中的 `slice` 就足够了。

### [比较字符串](https://zh.javascript.info/string#bi-jiao-zi-fu-chuan)

正如我们从 [值的比较](https://zh.javascript.info/comparison) 一章中了解到的，字符串按字母顺序逐字比较。

不过，也有一些奇怪的地方。

1. 小写字母总是大于大写字母：

   ```javascript
   alert( 'a' > 'Z' ); // true
   ```

2. 带变音符号的字母存在“乱序”的情况：

   ```javascript
   alert( 'Österreich' > 'Zealand' ); // true
   ```

   如果我们对这些国家名进行排序，可能会导致奇怪的结果。通常，人们会期望 `Zealand` 在名单中的 `Österreich` 之后出现。

为了明白发生了什么，我们回顾一下在 JavaScript 中字符串的内部表示。

所有的字符串都使用 [UTF-16](https://en.wikipedia.org/wiki/UTF-16) 编码。即：每个字符都有对应的数字代码。有特殊的方法可以获取代码表示的字符，以及字符对应的代码。

- `str.codePointAt(pos)`

  返回在 `pos` 位置的字符代码 :`// 不同的字母有不同的代码 alert( "z".codePointAt(0) ); // 122 alert( "Z".codePointAt(0) ); // 90`

- `String.fromCodePoint(code)`

  通过数字 `code` 创建字符`alert( String.fromCodePoint(90) ); // Z`我们还可以用 `\u` 后跟十六进制代码，通过这些代码添加 unicode 字符：`// 在十六进制系统中 90 为 5a alert( '\u005a' ); // Z`

现在我们看一下代码为 `65..220` 的字符（拉丁字母和一些额外的字符），方法是创建一个字符串：

```javascript
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
```

看到没？先是大写字符，然后是一些特殊字符，然后是小写字符，而 `Ö` 几乎是最后输出。

现在很明显为什么 `a > Z`。

字符通过数字代码进行比较。越大的代码意味着字符越大。`a`（97）的代码大于 `Z`（90）的代码。

- 所有小写字母追随在大写字母之后，因为它们的代码更大。
- 一些像 `Ö` 的字母与主要字母表不同。这里，它的代码比任何从 `a` 到 `z` 的代码都要大。

#### [正确的比较](https://zh.javascript.info/string#zheng-que-de-bi-jiao)

执行字符串比较的“正确”算法比看起来更复杂，因为不同语言的字母都不相同。

因此浏览器需要知道要比较的语言。

幸运的是，所有现代浏览器（IE10- 需要额外的库 [Intl.JS](https://github.com/andyearnshaw/Intl.js/)) 都支持国际化标准 [ECMA-402](http://www.ecma-international.org/ecma-402/1.0/ECMA-402.pdf)。

它提供了一种特殊的方法来比较不同语言的字符串，遵循它们的规则。

调用 [str.localeCompare(str2)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 会根据语言规则返回一个整数，这个整数能指示字符串 `str` 在排序顺序中排在字符串 `str2` 前面、后面、还是相同：

- 如果 `str` 排在 `str2` 前面，则返回负数。
- 如果 `str` 排在 `str2` 后面，则返回正数。
- 如果它们在相同位置，则返回 `0`。

例如：

```javascript
alert( 'Österreich'.localeCompare('Zealand') ); // -1
```

这个方法实际上在 [文档](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare) 中指定了两个额外的参数，这两个参数允许它指定语言（默认语言从环境中获取，字符顺序视语言不同而不同）并设置诸如区分大小写，或应该将 `"a"` 和 `"á"` 作相同处理等附加的规则。

### [内部，Unicode](https://zh.javascript.info/string#nei-bu-unicode)

**进阶内容**

这部分会深入字符串内部。如果你计划处理 emoji、罕见的数学或象形文字或其他罕见的符号，这些知识会对你有用。

如果你不打算支持它们，你可以跳过这一部分。

#### [代理对](https://zh.javascript.info/string#dai-li-dui)

所有常用的字符都是一个 2 字节的代码。大多数欧洲语言，数字甚至大多数象形文字中的字母都有 2 字节的表示形式。

但 2 字节只允许 65536 个组合，这对于表示每个可能的符号是不够的。所以稀有的符号被称为“代理对”的一对 2 字节的符号编码。

这些符号的长度是 `2`：

```javascript
alert( '𝒳'.length ); // 2，大写数学符号 X
alert( '😂'.length ); // 2，笑哭表情
alert( '𩷶'.length ); // 2，罕见的中国象形文字
```

注意，代理对在 JavaScript 被创建时并不存在，因此无法被编程语言正确处理！

我们实际上在上面的每个字符串中都有一个符号，但 `length` 显示长度为 `2`。

`String.fromCodePoint` 和 `str.codePointAt` 是几种处理代理对的少数方法。它们最近才出现在编程语言中。在它们之前，只有 [String.fromCharCode](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) 和 [str.charCodeAt](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)。这些方法实际上与 `fromCodePoint/codePointAt` 相同，但是不适用于代理对。

获取符号可能会非常麻烦，因为代理对被认为是两个字符：

```javascript
alert( '𝒳'[0] ); // 奇怪的符号……
alert( '𝒳'[1] ); // ……代理对的一块
```

请注意，代理对的各部分没有任何意义。因此，上述示例中的 alert 显示的实际上是垃圾信息。

技术角度来说，代理对也是可以通过它们的代码检测到的：如果一个字符的代码在 `0xd800..0xdbff` 范围内，那么它是代理对的第一部分。下一个字符（第二部分）必须在 `0xdc00..0xdfff` 范围中。这些范围是按照标准专门为代理对保留的。

在上述示例中：

```javascript
// charCodeAt 不理解代理对，所以它给出了代理对的代码

alert( '𝒳'.charCodeAt(0).toString(16) ); // d835，在 0xd800 和 0xdbff 之间
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, 在 0xdc00 和 0xdfff 之间
```

本章节后面的 [Iterable object（可迭代对象）](https://zh.javascript.info/iterable) 章节中，你可以找到更多处理代理对的方法。可能也专门的库，这里没有什么足够好的建议了。

#### [变音符号与规范化](https://zh.javascript.info/string#bian-yin-fu-hao-yu-gui-fan-hua)

在许多语言中，都有一些由基本字符组成的符号，在其上方/下方有一个标记。

例如，字母 `a` 可以是 `àáâäãåā` 的基本字符。最常见的“复合”字符在 UTF-16 表中都有自己的代码。但不是全部，因为可能的组合太多。

为了支持任意组合，UTF-16 允许我们使用多个 unicode 字符：基本字符紧跟“装饰”它的一个或多个“标记”字符。

例如，如果我们 `S` 后跟有特殊的 “dot above” 字符（代码 `\u0307`），则显示 Ṡ。

```javascript
alert( 'S\u0307' ); // Ṡ
```

如果我们需要在字母上方（或下方）添加额外的标记 —— 没问题，只需要添加必要的标记字符即可。

例如，如果我们追加一个字符 “dot below”（代码 `\u0323`），那么我们将得到“S 上面和下面都有点”的字符：`Ṩ`。

例如：

```javascript
alert( 'S\u0307\u0323' ); // Ṩ
```

这在提供良好灵活性的同时，也存在一个有趣的问题：两个视觉上看起来相同的字符，可以用不同的 unicode 组合表示。

例如：

```javascript
let s1 = 'S\u0307\u0323'; // Ṩ，S + 上点 + 下点
let s2 = 'S\u0323\u0307'; // Ṩ，S + 下点 + 上点

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 == s2 ); // false，尽管字符看起来相同（?!）
```

为了解决这个问题，有一个 “unicode 规范化”算法，它将每个字符串都转化成单个“通用”格式。

它由 [str.normalize()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/normalize) 实现。

```javascript
alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
```

有趣的是，在实际情况下，`normalize()` 实际上将一个由 3 个字符组成的序列合并为一个：`\u1e68`（S 有两个点）。

```javascript
alert( "S\u0307\u0323".normalize().length ); // 1

alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true
```

事实上，情况并非总是如此，因为符号 `Ṩ` 是“常用”的，所以 UTF-16 创建者把它包含在主表中并给它了对应的代码。

如果你想了解更多关于规范化规则和变体的信息 —— 它们在 Unicode 标准附录中有详细描述：[Unicode 规范化形式](http://www.unicode.org/reports/tr15/)，但对于大多数实际目的来说，本文的内容就已经足够了。

### [总结](https://zh.javascript.info/string#zong-jie)

- 有 3 种类型的引号。反引号允许字符串跨越多行并可以使用 `${…}` 在字符串中嵌入表达式。
- JavaScript 中的字符串使用的是 UTF-16 编码。
- 我们可以使用像 `\n` 这样的特殊字符或通过使用 `\u...` 来操作它们的 unicode 进行字符插入。
- 获取字符时，使用 `[]`。
- 获取子字符串，使用 `slice` 或 `substring`。
- 字符串的大/小写转换，使用：`toLowerCase/toUpperCase`。
- 查找子字符串时，使用 `indexOf` 或 `includes/startsWith/endsWith` 进行简单检查。
- 根据语言比较字符串时使用 `localeCompare`，否则将按字符代码进行比较。

还有其他几种有用的字符串方法：

- `str.trim()` —— 删除字符串前后的空格 (“trims”)。
- `str.repeat(n)` —— 重复字符串 `n` 次。
- ……更多内容细节请参见 [手册](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String)。

字符串还具有使用正则表达式进行搜索/替换的方法。但这个话题很大，因此我们将在本教程中单独的 [正则表达式](https://zh.javascript.info/regular-expressions) 章节中进行讨论。

## 28.数组

对象允许存储键值集合，这很好。

但很多时候我们发现还需要 **有序集合**，里面的元素都是按顺序排列的。例如，我们可能需要存储一些列表，比如用户、商品以及 HTML 元素等。

这里使用对象就不是很方便了，因为对象不能提供能够管理元素顺序的方法。我们不能在已有的元素“之间”插入一个新的属性。这种场景下对象就不太适用了。

这时一个特殊的数据结构数组（`Array`）就派上用场了，它能存储有序的集合。

### [声明](https://zh.javascript.info/array#sheng-ming)

创建一个空数组有两种语法：

```javascript
let arr = new Array();
let arr = [];
```

绝大多数情况下使用的都是第二种语法。我们可以在方括号中添加初始元素：

```javascript
let fruits = ["Apple", "Orange", "Plum"];
```

数组元素从 0 开始编号。

我们可以通过方括号中的数字获取元素：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

可以替换元素：

```javascript
fruits[2] = 'Pear'; // 现在变成了 ["Apple", "Orange", "Pear"]
```

……或者向数组新加一个元素：

```javascript
fruits[3] = 'Lemon'; // 现在变成 ["Apple", "Orange", "Pear", "Lemon"]
```

`length` 属性的值是数组中元素的总个数：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3
```

也可以用 `alert` 来显示整个数组。

```javascript
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum
```

数组可以存储任何类型的元素。

例如:

```javascript
// 混合值
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// 获取索引为 1 的对象然后显示它的 name
alert( arr[1].name ); // John

// 获取索引为 3 的函数并执行
arr[3](); // hello
```

**以逗号结尾**

数组就像对象一样，可以以逗号结尾：

```javascript
let fruits = [
  "Apple",
  "Orange",
  "Plum",
];
```

因为每一行都是相似的，所以这种以“逗号结尾”的方式使得插入/移除项变得更加简单。

### [pop/push, shift/unshift 方法](https://zh.javascript.info/array#poppushshiftunshift-fang-fa)

[队列（queue）](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))是最常见的使用数组的方法之一。在计算机科学中，这表示支持两个操作的一个有序元素的集合：

- `push` 在末端添加一个元素.
- `shift` 取出队列首端的一个元素，整个队列往前移，这样原先排第二的元素现在排在了第一。

这两种操作数组都支持。

队列的应用在实践中经常会碰到。例如需要在屏幕上显示消息队列。

数组还有另一个用例，就是数据结构 [栈](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))。

它支持两种操作：

- `push` 在末端添加一个元素.
- `pop` 从末端取出一个元素.

所以新元素的添加和取出都是从“末端”开始的。

栈通常被被形容成一叠卡片：要么在最上面添加卡片，要么从最上面拿走卡片：

对于栈来说，最后放进去的内容是最先接收的，也叫做 LIFO（Last-In-First-Out），即后进先出法则。而与队列相对应的叫做 FIFO（First-In-First-Out），即先进先出。

JavaScript 中的数组既可以用作队列，也可以用作栈。它们允许你从首端/末端来添加/删除元素。

这在计算机科学中，允许这样的操作的数据结构被称为 [双端队列（deque）](https://en.wikipedia.org/wiki/Double-ended_queue)。

**作用于数组末端的方法：**

- `pop`

  取出并返回数组的最后一个元素：`let fruits = ["Apple", "Orange", "Pear"]; alert( fruits.pop() ); // 移除 "Pear" 然后 alert 显示出来 alert( fruits ); // Apple, Orange`

- `push`

  在数组末端添加元素：`let fruits = ["Apple", "Orange"]; fruits.push("Pear"); alert( fruits ); // Apple, Orange, Pear`调用 `fruits.push(...)` 与 `fruits[fruits.length] = ...` 是一样的。

**作用于数组首端的方法：**

- `shift`

  取出数组的第一个元素并返回它：`let fruits = ["Apple", "Orange", "Pear"]; alert( fruits.shift() ); // 移除 Apple 然后 alert 显示出来 alert( fruits ); // Orange, Pear`

- `unshift`

  在数组的首端添加元素：`let fruits = ["Orange", "Pear"]; fruits.unshift('Apple'); alert( fruits ); // Apple, Orange, Pear`

`push` 和 `unshift` 方法都可以一次添加多个元素：

```javascript
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
```

### [内部](https://zh.javascript.info/array#nei-bu)

数组是一种特殊的对象。使用方括号来访问属性 `arr[0]` 实际上是来自于对象的语法。它其实与 `obj[key]` 相同，其中 `arr` 是对象，而数字用作键（key）。

它们扩展了对象，提供了特殊的方法来处理有序的数据集合以及 `length` 属性。但从本质上讲，它仍然是一个对象。

记住，在 JavaScript 中只有 8 种基本的数据类型（详见 [数据类型](https://zh.javascript.info/types) 一章）。数组是一个对象，因此其行为也像一个对象。

例如，它是通过引用来复制的：

```javascript
let fruits = ["Banana"]

let arr = fruits; // 通过引用复制 (两个变量引用的是相同的数组)

alert( arr === fruits ); // true

arr.push("Pear"); // 通过引用修改数组

alert( fruits ); // Banana, Pear — 现在有 2 项了
```

……但是数组真正特殊的是它们的内部实现。JavaScript 引擎尝试把这些元素一个接一个地存储在连续的内存区域，就像本章的插图显示的一样，而且还有一些其它的优化，以使数组运行得非常快。

但是，如果我们不像“有序集合”那样使用数组，而是像常规对象那样使用数组，这些就都不生效了。

例如，从技术上讲，我们可以这样做:

```javascript
let fruits = []; // 创建一个数组

fruits[99999] = 5; // 分配索引远大于数组长度的属性

fruits.age = 25; // 创建一个具有任意名称的属性
```

这是可以的，因为数组是基于对象的。我们可以给它们添加任何属性。

但是 Javascript 引擎会发现，我们在像使用常规对象一样使用数组，那么针对数组的优化就不再适用了，然后对应的优化就会被关闭，这些优化所带来的优势也就荡然无存了。

数组误用的几种方式:

- 添加一个非数字的属性，比如 `arr.test = 5`。
- 制造空洞，比如：添加 `arr[0]`，然后添加 `arr[1000]` (它们中间什么都没有)。
- 以倒序填充数组，比如 `arr[1000]`，`arr[999]` 等等。

请将数组视为作用于 **有序数据** 的特殊结构。它们为此提供了特殊的方法。数组在 JavaScript 引擎内部是经过特殊调整的，使得更好地作用于连续的有序数据，所以请以正确的方式使用数组。如果你需要任意键值，那很有可能实际上你需要的是常规对象 `{}`。

### [性能](https://zh.javascript.info/array#xing-neng)

`push/pop` 方法运行的比较快，而 `shift/unshift` 比较慢。

为什么作用于数组的末端会比首端快呢？让我们看看在执行期间都发生了什么：

```javascript
fruits.shift(); // 从首端取出一个元素
```

只获取并移除数字 `0` 对应的元素是不够的。其它元素也需要被重新编号。

`shift` 操作必须做三件事:

1. 移除索引为 `0` 的元素。
2. 把所有的元素向左移动，把索引 `1` 改成 `0`，`2` 改成 `1` 以此类推，对其重新编号。
3. 更新 `length` 属性。

**数组里的元素越多，移动它们就要花越多的时间，也就意味着越多的内存操作。**

`unshift` 也是一样：为了在数组的首端添加元素，我们首先需要将现有的元素向右移动，增加它们的索引值。

那 `push/pop` 是什么样的呢？它们不需要移动任何东西。如果从末端移除一个元素，`pop` 方法只需要清理索引值并缩短 `length` 就可以了。

`pop` 操作的行为：

```javascript
fruits.pop(); // 从末端取走一个元素
```

**`pop` 方法不需要移动任何东西，因为其它元素都保留了各自的索引。这就是为什么 `pop` 会特别快。**

`push` 方法也是一样的。

### [循环](https://zh.javascript.info/array#xun-huan)

遍历数组最古老的方式就是 `for` 循环：

```javascript
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
```

但对于数组来说还有另一种循环方式，`for..of`：

```javascript
let fruits = ["Apple", "Orange", "Plum"];

// 遍历数组元素
for (let fruit of fruits) {
  alert( fruit );
}
```

`for..of` 不能获取当前元素的索引，只是获取元素值，但大多数情况是够用的。而且这样写更短。

技术上来讲，因为数组也是对象，所以使用 `for..in` 也是可以的：

```javascript
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}
```

但这其实是一个很不好的想法。会有一些潜在问题存在：

1. `for..in` 循环会遍历 **所有属性**，不仅仅是这些数字属性。

   在浏览器和其它环境中有一种称为“类数组”的对象，它们 **看似是数组**。也就是说，它们有 `length` 和索引属性，但是也可能有其它的非数字的属性和方法，这通常是我们不需要的。`for..in` 循环会把它们都列出来。所以如果我们需要处理类数组对象，这些“额外”的属性就会存在问题。

2. `for..in` 循环适用于普通对象，并且做了对应的优化。但是不适用于数组，因此速度要慢 10-100 倍。当然即使是这样也依然非常快。只有在遇到瓶颈时可能会有问题。但是我们仍然应该了解这其中的不同。

通常来说，我们不应该用 `for..in` 来处理数组。

### [关于 “length”](https://zh.javascript.info/array#guan-yu-length)

当我们修改数组的时候，`length` 属性会自动更新。准确来说，它实际上不是数组里元素的个数，而是最大的数字索引值加一。

例如，一个数组只有一个元素，但是这个元素的索引值很大，那么这个数组的 `length` 也会很大：

```javascript
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124
```

要知道的是我们通常不会这样使用数组。

`length` 属性的另一个有意思的点是它是可写的。

如果我们手动增加它，则不会发生任何有趣的事儿。但是如果我们减少它，数组就会被截断。该过程是不可逆的，下面是例子：

```javascript
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 截断到只剩 2 个元素
alert( arr ); // [1, 2]

arr.length = 5; // 又把 length 加回来
alert( arr[3] ); // undefined：被截断的那些数值并没有回来
```

所以，清空数组最简单的方法就是：`arr.length = 0;`。

### [new Array()](https://zh.javascript.info/array#new-array)

这是创建数组的另一种语法：

```javascript
let arr = new Array("Apple", "Pear", "etc");
```

它很少被使用，因为方括号 `[]` 更短更简洁。而且，这种语法还有一个棘手的特性。

如果使用单个参数（即数字）调用 `new Array`，那么它会创建一个 **指定了长度，却没有任何项** 的数组。

让我们看看如何搬起石头砸自己的脚:

```javascript
let arr = new Array(2); // 会创建一个 [2] 的数组吗？

alert( arr[0] ); // undefined！没有元素。

alert( arr.length ); // length 2
```

在上面的代码中，`new Array(number)` 创建的数组的所有元素都是 `undefined`。

为了避免这种乌龙事件，我们通常都是使用方括号的，除非我们清楚地知道自己正在做什么。

### [多维数组](https://zh.javascript.info/array#duo-wei-shu-zu)

数组里的项也可以是数组。我们可以将其用于多维数组，例如存储矩阵：

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 最中间的那个数
```

### [toString](https://zh.javascript.info/array#tostring)

数组有自己的 `toString` 方法的实现，会返回以逗号隔开的元素列表。

例如：

```javascript
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
```

此外，我们试试运行一下这个：

```javascript
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
```

数组没有 `Symbol.toPrimitive`，也没有 `valueOf`，它们只能执行 `toString` 进行转换，所以这里 `[]` 就变成了一个空字符串，`[1]` 变成了 `"1"`，`[1,2]` 变成了 `"1,2"`。

当 `"+"` 运算符把一些项加到字符串后面时，加号后面的项也会被转换成字符串，所以下一步就会是这样：

```javascript
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"
```

### [不要使用 == 比较数组](https://zh.javascript.info/array#bu-yao-shi-yong-bi-jiao-shu-zu)

JavaScript 中的数组与其它一些编程语言的不同，不应该使用 `==` 运算符比较 JavaScript 中的数组。

该运算符不会对数组进行特殊处理，它会像处理任意对象那样处理数组。

让我们回顾一下规则：

- 仅当两个对象引用的是同一个对象时，它们才相等 `==`。
- 如果 `==` 左右两个参数之中有一个参数是对象，另一个参数是原始类型，那么该对象将会被转换为原始类型，转换规则如 [对象 — 原始值转换](https://zh.javascript.info/object-toprimitive) 一章所述。
- ……`null` 和 `undefined` 相等 `==`，且各自不等于任何其他的值。

严格比较 `===` 更简单，因为它不会进行类型转换。

所以，如果我们使用 `==` 来比较数组，除非我们比较的是两个引用同一数组的变量，否则它们永远不相等。

例如：

```javascript
alert( [] == [] ); // false
alert( [0] == [0] ); // false
```

从技术上讲，这些数组是不同的对象。所以它们不相等。`==` 运算符不会进行逐项比较。

与原始类型的比较也可能会产生看似很奇怪的结果：

```javascript
alert( 0 == [] ); // true

alert('0' == [] ); // false
```

在这里的两个例子中，我们将原始类型和数组对象进行比较。因此，数组 `[]` 被转换为原始类型以进行比较，被转换成了一个空字符串 `''`。

然后，接下来的比较就是原始类型之间的比较，如 [类型转换](https://zh.javascript.info/type-conversions) 一章所述：

```javascript
// 在 [] 被转换为 '' 后
alert( 0 == '' ); // true，因为 '' 被转换成了数字 0

alert('0' == '' ); // false，没有进一步的类型转换，是不同的字符串
```

那么，我们应该如何对数组进行比较呢？

很简单，不要使用 `==` 运算符。而是，可以在循环中或者使用下一章中我们将介绍的迭代方法逐项地比较它们。

### [总结](https://zh.javascript.info/array#zong-jie)

数组是一种特殊的对象，适用于存储和管理有序的数据项。

- 声明:

  ```javascript
  // 方括号 (常见用法)
  let arr = [item1, item2...];
  
  // new Array (极其少见)
  let arr = new Array(item1, item2...);
  ```

  调用 `new Array(number)` 会创建一个给定长度的数组，但不含有任何项。

- `length` 属性是数组的长度，准确地说，它是数组最后一个数字索引值加一。它由数组方法自动调整。

- 如果我们手动缩短 `length`，那么数组就会被截断。

我们可以通过下列操作以双端队列的方式使用数组：

- `push(...items)` 在末端添加 `items` 项。
- `pop()` 从末端移除并返回该元素。
- `shift()` 从首端移除并返回该元素。
- `unshift(...items)` 从首端添加 `items` 项。

遍历数组的元素：

- `for (let i=0; i<arr.length; i++)` — 运行得最快，可兼容旧版本浏览器。
- `for (let item of arr)` — 现代语法，只能访问 items。
- `for (let i in arr)` — 永远不要用这个。

比较数组时，不要使用 `==` 运算符（当然也不要使用 `>` 和 `<` 等运算符），因为它们不会对数组进行特殊处理。它们通常会像处理任意对象那样处理数组，这通常不是我们想要的。

但是，我们可以使用 `for..of` 循环来逐项比较数组。

## 29.数组方法

数组提供的方法有很多。为了方便起见，在本章中，我们将按组讲解。

### [添加/移除数组元素](https://zh.javascript.info/array-methods#tian-jia-yi-chu-shu-zu-yuan-su)

我们已经学了从数组的首端或尾端添加和删除元素的方法：

- `arr.push(...items)` —— 从尾端添加元素，
- `arr.pop()` —— 从尾端提取元素，
- `arr.shift()` —— 从首端提取元素，
- `arr.unshift(...items)` —— 从首端添加元素。

这里还有其他几种方法。

#### [splice](https://zh.javascript.info/array-methods#splice)

如何从数组中删除元素？

数组是对象，所以我们可以尝试使用 `delete`：

```javascript
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3
```

元素被删除了，但数组仍然有 3 个元素，我们可以看到 `arr.length == 3`。

这很正常，因为 `delete obj.key` 是通过 `key` 来移除对应的值。对于对象来说是可以的。但是对于数组来说，我们通常希望剩下的元素能够移动并占据被释放的位置。我们希望得到一个更短的数组。

所以应该使用特殊的方法。

[arr.splice](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 方法可以说是处理数组的瑞士军刀。它可以做所有事情：添加，删除和插入元素。

语法是：

```javascript
arr.splice(start[, deleteCount, elem1, ..., elemN])
```

它从索引 `start` 开始修改 `arr`：删除 `deleteCount` 个元素并在当前位置插入 `elem1, ..., elemN`。最后返回已被删除元素的数组。

通过例子我们可以很容易地掌握这个方法。

让我们从删除开始：

```javascript
let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // 从索引 1 开始删除 1 个元素

alert( arr ); // ["I", "JavaScript"]
```

简单，对吧？从索引 `1` 开始删除 `1` 个元素。（译注：当只填写了 `splice` 的 `start` 参数时，将删除从索引 `start` 开始的所有数组项）

在下一个例子中，我们删除了 3 个元素，并用另外两个元素替换它们：

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// 删除数组的前三项，并使用其他内容代替它们
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // 现在 ["Let's", "dance", "right", "now"]
```

在这里我们可以看到 `splice` 返回了已删除元素的数组：

```javascript
let arr = ["I", "study", "JavaScript", "right", "now"];

// 删除前两个元素
let removed = arr.splice(0, 2);

alert( removed ); // "I", "study" <-- 被从数组中删除了的元素
```

我们可以将 `deleteCount` 设置为 `0`，`splice` 方法就能够插入元素而不用删除任何元素：

```javascript
let arr = ["I", "study", "JavaScript"];

// 从索引 2 开始
// 删除 0 个元素
// 然后插入 "complex" 和 "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"
```

**允许负向索引**

在这里和其他数组方法中，负向索引都是被允许的。它们从数组末尾计算位置，如下所示：

```javascript
let arr = [1, 2, 5];

// 从索引 -1（尾端前一位）
// 删除 0 个元素，
// 然后插入 3 和 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
```

#### [slice](https://zh.javascript.info/array-methods#slice)

[arr.slice](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 方法比 `arr.splice` 简单得多。

语法是：

```javascript
arr.slice([start], [end])
```

它会返回一个新数组，将所有从索引 `start` 到 `end`（不包括 `end`）的数组项复制到一个新的数组。`start` 和 `end` 都可以是负数，在这种情况下，从末尾计算索引。

它和字符串的 `str.slice` 方法有点像，就是把子字符串替换成子数组。

例如：

```javascript
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s（复制从位置 1 到位置 3 的元素）

alert( arr.slice(-2) ); // s,t（复制从位置 -2 到尾端的元素）
```

我们也可以不带参数地调用它：`arr.slice()` 会创建一个 `arr` 的副本。其通常用于获取副本，以进行不影响原始数组的进一步转换。

#### [concat](https://zh.javascript.info/array-methods#concat)

[arr.concat](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 创建一个新数组，其中包含来自于其他数组和其他项的值。

语法：

```javascript
arr.concat(arg1, arg2...)
```

它接受任意数量的参数 —— 数组或值都可以。

结果是一个包含来自于 `arr`，然后是 `arg1`，`arg2` 的元素的新数组。

如果参数 `argN` 是一个数组，那么其中的所有元素都会被复制。否则，将复制参数本身。

例如：

```javascript
let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

通常，它只复制数组中的元素。其他对象，即使它们看起来像数组一样，但仍然会被作为一个整体添加：

```javascript
let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
```

……但是，如果类似数组的对象具有 `Symbol.isConcatSpreadable` 属性，那么它就会被 `concat` 当作一个数组来处理：此对象中的元素将被添加：

```javascript
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else
```

### [遍历：forEach](https://zh.javascript.info/array-methods#bian-li-foreach)

[arr.forEach](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 方法允许为数组的每个元素都运行一个函数。

语法：

```javascript
arr.forEach(function(item, index, array) {
  // ... do something with item
});
```

例如，下面这个程序显示了数组的每个元素：

```javascript
// 对每个元素调用 alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
```

而这段代码更详细地介绍了它们在目标数组中的位置：

```javascript
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});
```

该函数的结果（如果它有返回）会被抛弃和忽略。

### [在数组中搜索](https://zh.javascript.info/array-methods#zai-shu-zu-zhong-sou-suo)

现在，让我们介绍在数组中进行搜索的方法。

#### [indexOf/lastIndexOf 和 includes](https://zh.javascript.info/array-methods#indexoflastindexof-he-includes)

[arr.indexOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)、[arr.lastIndexOf](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) 和 [arr.includes](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 方法与字符串操作具有相同的语法，并且作用基本上也与字符串的方法相同，只不过这里是对数组元素而不是字符进行操作：

- `arr.indexOf(item, from)` 从索引 `from` 开始搜索 `item`，如果找到则返回索引，否则返回 `-1`。
- `arr.lastIndexOf(item, from)` —— 和上面相同，只是从右向左搜索。
- `arr.includes(item, from)` —— 从索引 `from` 开始搜索 `item`，如果找到则返回 `true`（译注：如果没找到，则返回 `false`）。

例如：

```javascript
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
```

请注意，这些方法使用的是严格相等 `===` 比较。所以如果我们搜索 `false`，会精确到的确是 `false` 而不是数字 `0`。

如果我们想检查是否包含某个元素，并且不想知道确切的索引，那么 `arr.includes` 是首选。

此外，`includes` 的一个非常小的差别是它能正确处理`NaN`，而不像 `indexOf/lastIndexOf`：

```javascript
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1（应该为 0，但是严格相等 === equality 对 NaN 无效）
alert( arr.includes(NaN) );// true（这个结果是对的）
```

#### [find 和 findIndex](https://zh.javascript.info/array-methods#find-he-findindex)

想象一下，我们有一个对象数组。我们如何找到具有特定条件的对象？

这时可以用 [arr.find](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 方法。

语法如下：

```javascript
let result = arr.find(function(item, index, array) {
  // 如果返回 true，则返回 item 并停止迭代
  // 对于假值（falsy）的情况，则返回 undefined
});
```

依次对数组中的每个元素调用该函数：

- `item` 是元素。
- `index` 是它的索引。
- `array` 是数组本身。

如果它返回 `true`，则搜索停止，并返回 `item`。如果没有搜索到，则返回 `undefined`。

例如，我们有一个存储用户的数组，每个用户都有 `id` 和 `name` 字段。让我们找到 `id == 1` 的那个用户：

```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);

alert(user.name); // John
```

在现实生活中，对象数组是很常见的，所以 `find` 方法非常有用。

注意在这个例子中，我们传给了 `find` 一个单参数函数 `item => item.id == 1`。这很典型，并且 `find` 方法的其他参数很少使用。

[arr.findIndex](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 方法（与 `arr.find` 方法）基本上是一样的，但它返回找到元素的索引，而不是元素本身。并且在未找到任何内容时返回 `-1`。

#### [filter](https://zh.javascript.info/array-methods#filter)

`find` 方法搜索的是使函数返回 `true` 的第一个（单个）元素。

如果需要匹配的有很多，我们可以使用 [arr.filter(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)。

语法与 `find` 大致相同，但是 `filter` 返回的是所有匹配元素组成的数组：

```javascript
let results = arr.filter(function(item, index, array) {
  // 如果 true item 被 push 到 results，迭代继续
  // 如果什么都没找到，则返回空数组
});
```

例如：

```javascript
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// 返回前两个用户的数组
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```

### [转换数组](https://zh.javascript.info/array-methods#zhuan-huan-shu-zu)

让我们继续学习进行数组转换和重新排序的方法。

#### [map](https://zh.javascript.info/array-methods#map)

[arr.map](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 方法是最有用和经常使用的方法之一。

它对数组的每个元素都调用函数，并返回结果数组。

语法：

```javascript
let result = arr.map(function(item, index, array) {
  // 返回新值而不是当前元素
})
```

例如，在这里我们将每个元素转换为它的字符串长度：

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```

#### [sort(fn)](https://zh.javascript.info/array-methods#sortfn)

[arr.sort](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 方法对数组进行 **原位（in-place）** 排序，更改元素的顺序。(译注：原位是指在此数组内，而非生成一个新数组。)

它还返回排序后的数组，但是返回值通常会被忽略，因为修改了 `arr` 本身。

语法：

```javascript
let arr = [ 1, 2, 15 ];

// 该方法重新排列 arr 的内容
arr.sort();

alert( arr );  // 1, 15, 2
```

你有没有注意到结果有什么奇怪的地方？

顺序变成了 `1, 15, 2`。不对，但为什么呢？

**这些元素默认情况下被按字符串进行排序。**

从字面上看，所有元素都被转换为字符串，然后进行比较。对于字符串，按照词典顺序进行排序，实际上应该是 `"2" > "15"`。

要使用我们自己的排序顺序，我们需要提供一个函数作为 `arr.sort()` 的参数。

该函数应该比较两个任意值并返回：

```javascript
function compare(a, b) {
  if (a > b) return 1; // 如果第一个值比第二个值大
  if (a == b) return 0; // 如果两个值相等
  if (a < b) return -1; // 如果第一个值比第二个值小
}
```

例如，按数字进行排序：

```javascript
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
```

现在结果符合预期了。

我们思考一下这儿发生了什么。`arr` 可以是由任何内容组成的数组，对吗？它可能包含数字、字符串、对象或其他任何内容。我们有一组 **一些元素**。要对其进行排序，我们需要一个 **排序函数** 来确认如何比较这些元素。默认是按字符串进行排序的。

`arr.sort(fn)` 方法实现了通用的排序算法。我们不需要关心它的内部工作原理（大多数情况下都是经过 [快速排序](https://en.wikipedia.org/wiki/Quicksort) 或 [Timsort](https://en.wikipedia.org/wiki/Timsort) 算法优化的）。它将遍历数组，使用提供的函数比较其元素并对其重新排序，我们所需要的就是提供执行比较的函数 `fn`。

顺便说一句，如果我们想知道要比较哪些元素 —— 那么什么都不会阻止 alert 它们：

```javascript
[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  alert( a + " <> " + b );
  return a - b;
});
```

该算法可以在此过程中，将一个元素与多个其他元素进行比较，但是它会尝试进行尽可能少的比较。

**比较函数可以返回任何数字**

实际上，比较函数只需要返回一个正数表示“大于”，一个负数表示“小于”。

通过这个原理我们可以编写更短的函数：

```javascript
let arr = [ 1, 2, 15 ];

arr.sort(function(a, b) { return a - b; });

alert(arr);  // 1, 2, 15
```

**箭头函数最好**

你还记得 [箭头函数](https://zh.javascript.info/arrow-functions-basics) 吗？这里使用箭头函数会更加简洁：

```javascript
arr.sort( (a, b) => a - b );
```

这与上面更长的版本完全相同。

**使用 `localeCompare` for strings**

你记得 [字符串比较](https://zh.javascript.info/string#correct-comparisons) 算法吗？默认情况下，它通过字母的代码比较字母。

对于许多字母，最好使用 `str.localeCompare` 方法正确地对字母进行排序，例如 `Ö`。

例如，让我们用德语对几个国家/地区进行排序：

```javascript
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich（错的）

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam（对的！）
```

#### [reverse](https://zh.javascript.info/array-methods#reverse)

[arr.reverse](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) 方法用于颠倒 `arr` 中元素的顺序。

例如：

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5,4,3,2,1
```

它也会返回颠倒后的数组 `arr`。

#### [split 和 join](https://zh.javascript.info/array-methods#split-he-join)

举一个现实生活场景的例子。我们正在编写一个消息应用程序，并且该人员输入以逗号分隔的接收者列表：`John, Pete, Mary`。但对我们来说，名字数组比单个字符串舒适得多。怎么做才能获得这样的数组呢？

[str.split(delim)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/String/split) 方法可以做到。它通过给定的分隔符 `delim` 将字符串分割成一个数组。

在下面的例子中，我们用“逗号后跟着一个空格”作为分隔符：

```javascript
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo（和其他名字）
}
```

`split` 方法有一个可选的第二个数字参数 —— 对数组长度的限制。如果提供了，那么额外的元素会被忽略。但实际上它很少使用：

```javascript
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf
```

**拆分为字母**

调用带有空参数 `s` 的 `split(s)`，会将字符串拆分为字母数组：

```javascript
let str = "test";

alert( str.split('') ); // t,e,s,t
```

[arr.join(glue)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 与 `split` 相反。它会在它们之间创建一串由 `glue` 粘合的 `arr` 项。

例如：

```javascript
let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // 使用分号 ; 将数组粘合成字符串

alert( str ); // Bilbo;Gandalf;Nazgul
```

#### [reduce/reduceRight](https://zh.javascript.info/array-methods#reducereduceright)

当我们需要遍历一个数组时 —— 我们可以使用 `forEach`，`for` 或 `for..of`。

当我们需要遍历并返回每个元素的数据时 —— 我们可以使用 `map`。

[arr.reduce](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 方法和 [arr.reduceRight](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 方法和上面的种类差不多，但稍微复杂一点。它们用于根据数组计算单个值。

语法是：

```javascript
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

该函数一个接一个地应用于所有数组元素，并将其结果“搬运（carry on）”到下一个调用。

参数：

- `accumulator` —— 是上一个函数调用的结果，第一次等于 `initial`（如果提供了 `initial` 的话）。
- `item` —— 当前的数组元素。
- `index` —— 当前索引。
- `arr` —— 数组本身。

应用函数时，上一个函数调用的结果将作为第一个参数传递给下一个函数。

因此，第一个参数本质上是累加器，用于存储所有先前执行的组合结果。最后，它成为 `reduce` 的结果。

听起来复杂吗？

掌握这个知识点的最简单的方法就是通过示例。

在这里，我们通过一行代码得到一个数组的总和：

```javascript
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```

传递给 `reduce` 的函数仅使用了 2 个参数，通常这就足够了。

让我们看看细节，到底发生了什么。

1. 在第一次运行时，`sum` 的值为初始值 `initial`（`reduce` 的最后一个参数），等于 0，`current` 是第一个数组元素，等于 `1`。所以函数运行的结果是 `1`。
2. 在第二次运行时，`sum = 1`，我们将第二个数组元素（`2`）与其相加并返回。
3. 在第三次运行中，`sum = 3`，我们继续把下一个元素与其相加，以此类推……

计算流程：

或者以表格的形式表示，每一行代表的是对下一个数组元素的函数调用：

|             | `sum` | `current` | `result` |
| :---------- | :---- | :-------- | :------- |
| 第 1 次调用 | `0`   | `1`       | `1`      |
| 第 2 次调用 | `1`   | `2`       | `3`      |
| 第 3 次调用 | `3`   | `3`       | `6`      |
| 第 4 次调用 | `6`   | `4`       | `10`     |
| 第 5 次调用 | `10`  | `5`       | `15`     |

在这里，我们可以清楚地看到上一个调用的结果如何成为下一个调用的第一个参数。

我们也可以省略初始值：

```javascript
let arr = [1, 2, 3, 4, 5];

// 删除 reduce 的初始值（没有 0）
let result = arr.reduce((sum, current) => sum + current);

alert( result ); // 15
```

结果是一样的。这是因为如果没有初始值，那么 `reduce` 会将数组的第一个元素作为初始值，并从第二个元素开始迭代。

计算表与上面相同，只是去掉第一行。

但是这种使用需要非常小心。如果数组为空，那么在没有初始值的情况下调用 `reduce` 会导致错误。

例如：

```javascript
let arr = [];

// Error: Reduce of empty array with no initial value
// 如果初始值存在，则 reduce 将为空 arr 返回它（即这个初始值）。
arr.reduce((sum, current) => sum + current);
```

所以建议始终指定初始值。

[arr.reduceRight](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 和 [arr.reduce](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 方法的功能一样，只是遍历为从右到左。

### [Array.isArray](https://zh.javascript.info/array-methods#arrayisarray)

数组是基于对象的，不构成单独的语言类型。

所以 `typeof` 不能帮助从数组中区分出普通对象：

```javascript
alert(typeof {}); // object
alert(typeof []); // same
```

……但是数组经常被使用，因此有一种特殊的方法用于判断：[Array.isArray(value)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)。如果 `value` 是一个数组，则返回 `true`；否则返回 `false`。

```javascript
alert(Array.isArray({})); // false

alert(Array.isArray([])); // true
```

### [大多数方法都支持 “thisArg”](https://zh.javascript.info/array-methods#da-duo-shu-fang-fa-du-zhi-chi-thisarg)

几乎所有调用函数的数组方法 —— 比如 `find`，`filter`，`map`，除了 `sort` 是一个特例，都接受一个可选的附加参数 `thisArg`。

上面的部分中没有解释该参数，因为该参数很少使用。但是为了完整性，我们需要讲讲它。

以下是这些方法的完整语法：

```javascript
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg 是可选的最后一个参数
```

`thisArg` 参数的值在 `func` 中变为 `this`。

例如，在这里我们使用 `army` 对象方法作为过滤器，`thisArg` 用于传递上下文（passes the context）：

```javascript
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// 找到 army.canJoin 返回 true 的 user
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
```

如果在上面的示例中我们使用了 `users.filter(army.canJoin)`，那么 `army.canJoin` 将被作为独立函数调用，并且这时 `this=undefined`，从而会导致即时错误。

可以用 `users.filter(user => army.canJoin(user))` 替换对 `users.filter(army.canJoin, army)` 的调用。前者的使用频率更高，因为对于大多数人来说，它更容易理解。

### [总结](https://zh.javascript.info/array-methods#zong-jie)

数组方法备忘单：

- 添加/删除元素：
  - `push(...items)` —— 向尾端添加元素，
  - `pop()` —— 从尾端提取一个元素，
  - `shift()` —— 从首端提取一个元素，
  - `unshift(...items)` —— 向首端添加元素，
  - `splice(pos, deleteCount, ...items)` —— 从 `pos` 开始删除 `deleteCount` 个元素，并插入 `items`。
  - `slice(start, end)` —— 创建一个新数组，将从索引 `start` 到索引 `end`（但不包括 `end`）的元素复制进去。
  - `concat(...items)` —— 返回一个新数组：复制当前数组的所有元素，并向其中添加 `items`。如果 `items` 中的任意一项是一个数组，那么就取其元素。
- 搜索元素：
  - `indexOf/lastIndexOf(item, pos)` —— 从索引 `pos` 开始搜索 `item`，搜索到则返回该项的索引，否则返回 `-1`。
  - `includes(value)` —— 如果数组有 `value`，则返回 `true`，否则返回 `false`。
  - `find/filter(func)` —— 通过 `func` 过滤元素，返回使 `func` 返回 `true` 的第一个值/所有值。
  - `findIndex` 和 `find` 类似，但返回索引而不是值。
- 遍历元素：
  - `forEach(func)` —— 对每个元素都调用 `func`，不返回任何内容。
- 转换数组：
  - `map(func)` —— 根据对每个元素调用 `func` 的结果创建一个新数组。
  - `sort(func)` —— 对数组进行原位（in-place）排序，然后返回它。
  - `reverse()` —— 原位（in-place）反转数组，然后返回它。
  - `split/join` —— 将字符串转换为数组并返回。
  - `reduce/reduceRight(func, initial)` —— 通过对每个元素调用 `func` 计算数组上的单个值，并在调用之间传递中间结果。
- 其他：
  - `Array.isArray(arr)` 检查 `arr` 是否是一个数组。

请注意，`sort`，`reverse` 和 `splice` 方法修改的是数组本身。

这些是最常用的方法，它们覆盖 99％ 的用例。但是还有其他几个：

- [arr.some(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/some)/[arr.every(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 检查数组。

  与 `map` 类似，对数组的每个元素调用函数 `fn`。如果任何/所有结果为 `true`，则返回 `true`，否则返回 `false`。

  这两个方法的行为类似于 `||` 和 `&&` 运算符：如果 `fn` 返回一个真值，`arr.some()` 立即返回 `true` 并停止迭代其余数组项；如果 `fn` 返回一个假值，`arr.every()` 立即返回 `false` 并停止对其余数组项的迭代。

  我们可以使用 `every` 来比较数组：

  ```javascript
  function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }
  
  alert( arraysEqual([1, 2], [1, 2])); // true
  ```

- [arr.fill(value, start, end)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) —— 从索引 `start` 到 `end`，用重复的 `value` 填充数组。

- [arr.copyWithin(target, start, end)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin) —— 将从位置 `start` 到 `end` 的所有元素复制到 **自身** 的 `target` 位置（覆盖现有元素）。

- [arr.flat(depth)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)/[arr.flatMap(fn)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap) 从多维数组创建一个新的扁平数组。

- [Array.of(element0[, element1[, …[, elementN\]]])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/of) 基于可变数量的参数创建一个新的 `Array` 实例，而不需要考虑参数的数量或类型。

有关完整列表，请参阅 [手册](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array)。

乍看起来，似乎有很多方法，很难记住。但实际上这比看起来要容易得多。

浏览这个备忘单，以了解这些方法。然后解决本章中的习题来进行练习，以便让你有数组方法的使用经验。

然后，每当你需要对数组进行某些操作，而又不知道怎么做的时候，请回到这儿，查看这个备忘单，然后找到正确的方法。示例将帮助你正确编写它。用不了多久，你就自然而然地记住这些方法了，根本不需要你死记硬背。

## 30.Iterable object

**可迭代（Iterable）** 对象是数组的泛化。这个概念是说任何对象都可以被定制为可在 `for..of` 循环中使用的对象。

数组是可迭代的。但不仅仅是数组。很多其他内建对象也都是可迭代的。例如字符串也是可迭代的。

如果从技术上讲，对象不是数组，而是表示某物的集合（列表，集合），`for..of` 是一个能够遍历它的很好的语法，因此，让我们来看看如何使其发挥作用。

### [Symbol.iterator](https://zh.javascript.info/iterable#symboliterator)

通过自己创建一个对象，我们就可以轻松地掌握可迭代的概念。

例如，我们有一个对象，它并不是数组，但是看上去很适合使用 `for..of` 循环。

比如一个 `range` 对象，它代表了一个数字区间：

```javascript
let range = {
  from: 1,
  to: 5
};

// 我们希望 for..of 这样运行：
// for(let num of range) ... num=1,2,3,4,5
```

为了让 `range` 对象可迭代（也就让 `for..of` 可以运行）我们需要为对象添加一个名为 `Symbol.iterator` 的方法（一个专门用于使对象可迭代的内建 symbol）。

1. 当 `for..of` 循环启动时，它会调用这个方法（如果没找到，就会报错）。这个方法必须返回一个 **迭代器（iterator）** —— 一个有 `next` 方法的对象。
2. 从此开始，`for..of` **仅适用于这个被返回的对象**。
3. 当 `for..of` 循环希望取得下一个数值，它就调用这个对象的 `next()` 方法。
4. `next()` 方法返回的结果的格式必须是 `{done: Boolean, value: any}`，当 `done=true` 时，表示迭代结束，否则 `value` 是下一个值。

这是带有注释的 `range` 的完整实现：

```javascript
let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与此迭代器一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// 现在它可以运行了！
for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
```

请注意可迭代对象的核心功能：关注点分离。

- `range` 自身没有 `next()` 方法。
- 相反，是通过调用 `range[Symbol.iterator]()` 创建了另一个对象，即所谓的“迭代器”对象，并且它的 `next` 会为迭代生成值。

因此，迭代器对象和与其进行迭代的对象是分开的。

从技术上说，我们可以将它们合并，并使用 `range` 自身作为迭代器来简化代码。

就像这样：

```javascript
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}
```

现在 `range[Symbol.iterator]()` 返回的是 `range` 对象自身：它包括了必需的 `next()` 方法，并通过 `this.current` 记忆了当前的迭代进程。这样更短，对吗？是的。有时这样也可以。

但缺点是，现在不可能同时在对象上运行两个 `for..of` 循环了：它们将共享迭代状态，因为只有一个迭代器，即对象本身。但是两个并行的 `for..of` 是很罕见的，即使在异步情况下。

**无穷迭代器（iterator）**

无穷迭代器也是可能的。例如，将 `range` 设置为 `range.to = Infinity`，这时 `range` 则成为了无穷迭代器。或者我们可以创建一个可迭代对象，它生成一个无穷伪随机数序列。也是可能的。

`next` 没有什么限制，它可以返回越来越多的值，这是正常的。

当然，迭代这种对象的 `for..of` 循环将不会停止。但是我们可以通过使用 `break` 来停止它。

### [字符串是可迭代的](https://zh.javascript.info/iterable#zi-fu-chuan-shi-ke-die-dai-de)

数组和字符串是使用最广泛的内建可迭代对象。

对于一个字符串，`for..of` 遍历它的每个字符：

```javascript
for (let char of "test") {
  // 触发 4 次，每个字符一次
  alert( char ); // t, then e, then s, then t
}
```

对于代理对（surrogate pairs），它也能正常工作！（译注：这里的代理对也就指的是 UTF-16 的扩展字符）

```javascript
let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳，然后是 😂
}
```

### [显式调用迭代器](https://zh.javascript.info/iterable#xian-shi-tiao-yong-die-dai-qi)

为了更深层地了解底层知识，让我们来看看如何显式地使用迭代器。

我们将会采用与 `for..of` 完全相同的方式遍历字符串，但使用的是直接调用。这段代码创建了一个字符串迭代器，并“手动”从中获取值。

```javascript
let str = "Hello";

// 和 for..of 做相同的事
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // 一个接一个地输出字符
}
```

很少需要我们这样做，但是比 `for..of` 给了我们更多的控制权。例如，我们可以拆分迭代过程：迭代一部分，然后停止，做一些其他处理，然后再恢复迭代。

### [可迭代（iterable）和类数组（array-like）](https://zh.javascript.info/iterable#array-like)

有两个看起来很相似，但又有很大不同的正式术语。请你确保正确地掌握它们，以免造成混淆。

- **Iterable** 如上所述，是实现了 `Symbol.iterator` 方法的对象。
- **Array-like** 是有索引和 `length` 属性的对象，所以它们看起来很像数组。

当我们将 JavaScript 用于编写在浏览器或其他环境中的实际任务时，我们可能会遇到可迭代对象或类数组对象，或两者兼有。

例如，字符串即是可迭代的（`for..of` 对它们有效），又是类数组的（它们有数值索引和 `length` 属性）。

但是一个可迭代对象也许不是类数组对象。反之亦然，类数组对象可能不可迭代。

例如，上面例子中的 `range` 是可迭代的，但并非类数组对象，因为它没有索引属性，也没有 `length` 属性。

下面这个对象则是类数组的，但是不可迭代：

```javascript
let arrayLike = { // 有索引和 length 属性 => 类数组对象
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
for (let item of arrayLike) {}
```

可迭代对象和类数组对象通常都 **不是数组**，它们没有 `push` 和 `pop` 等方法。如果我们有一个这样的对象，并想像数组那样操作它，那就非常不方便。例如，我们想使用数组方法操作 `range`，应该如何实现呢？

### [Array.from](https://zh.javascript.info/iterable#arrayfrom)

有一个全局方法 [Array.from](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组。然后我们就可以对其调用数组方法了。

例如：

```javascript
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World（pop 方法有效）
```

在 `(*)` 行的 `Array.from` 方法接受对象，检查它是一个可迭代对象或类数组对象，然后创建一个新数组，并将该对象的所有元素复制到这个新数组。

如果是可迭代对象，也是同样：

```javascript
// 假设 range 来自上文的例子中
let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 （数组的 toString 转化方法生效）
```

`Array.from` 的完整语法允许我们提供一个可选的“映射（mapping）”函数：

```javascript
Array.from(obj[, mapFn, thisArg])
```

可选的第二个参数 `mapFn` 可以是一个函数，该函数会在对象中的元素被添加到数组前，被应用于每个元素，此外 `thisArg` 允许我们为该函数设置 `this`。

例如：

```javascript
// 假设 range 来自上文例子中

// 求每个数的平方
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25
```

现在我们用 `Array.from` 将一个字符串转换为单个字符的数组：

```javascript
let str = '𝒳😂';

// 将 str 拆分为字符数组
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2
```

与 `str.split` 方法不同，它依赖于字符串的可迭代特性。因此，就像 `for..of` 一样，可以正确地处理代理对（surrogate pair）。（译注：代理对也就是 UTF-16 扩展字符。）

技术上来讲，它和下面这段代码做的是相同的事：

```javascript
let str = '𝒳😂';

let chars = []; // Array.from 内部执行相同的循环
for (let char of str) {
  chars.push(char);
}

alert(chars);
```

……但 `Array.from` 精简很多。

我们甚至可以基于 `Array.from` 创建代理感知（surrogate-aware）的`slice` 方法（译注：也就是能够处理 UTF-16 扩展字符的 `slice` 方法）：

```javascript
function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// 原生方法不支持识别代理对（译注：UTF-16 扩展字符）
alert( str.slice(1, 3) ); // 乱码（两个不同 UTF-16 扩展字符碎片拼接的结果）
```

### [总结](https://zh.javascript.info/iterable#zong-jie)

可以应用 `for..of` 的对象被称为 **可迭代的**。

- 技术上来说，可迭代对象必须实现

   

  ```
  Symbol.iterator
  ```

   

  方法。

  - `obj[Symbol.iterator]()` 的结果被称为 **迭代器（iterator）**。由它处理进一步的迭代过程。
  - 一个迭代器必须有 `next()` 方法，它返回一个 `{done: Boolean, value: any}` 对象，这里 `done:true` 表明迭代结束，否则 `value` 就是下一个值。

- `Symbol.iterator` 方法会被 `for..of` 自动调用，但我们也可以直接调用它。

- 内建的可迭代对象例如字符串和数组，都实现了 `Symbol.iterator`。

- 字符串迭代器能够识别代理对（surrogate pair）。（译注：代理对也就是 UTF-16 扩展字符。）

有索引属性和 `length` 属性的对象被称为 **类数组对象**。这种对象可能还具有其他属性和方法，但是没有数组的内建方法。

如果我们仔细研究一下规范 —— 就会发现大多数内建方法都假设它们需要处理的是可迭代对象或者类数组对象，而不是“真正的”数组，因为这样抽象度更高。

`Array.from(obj[, mapFn, thisArg])` 将可迭代对象或类数组对象 `obj` 转化为真正的数组 `Array`，然后我们就可以对它应用数组的方法。可选参数 `mapFn` 和 `thisArg` 允许我们将函数应用到每个元素。

## 31.Map and Set

我们已经了解了以下复杂的数据结构：

- 存储带键的数据（keyed）集合的对象。
- 存储有序集合的数组。

但这还不足以应对现实情况。这就是为什么存在 `Map` 和 `Set`。

### [Map](https://zh.javascript.info/map-set#map)

[Map](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Map) 是一个带键的数据项的集合，就像一个 `Object` 一样。 但是它们最大的差别是 `Map` 允许任何类型的键（key）。

它的方法和属性如下：

- `new Map()` —— 创建 map。
- `map.set(key, value)` —— 根据键存储值。
- `map.get(key)` —— 根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`。
- `map.has(key)` —— 如果 `key` 存在则返回 `true`，否则返回 `false`。
- `map.delete(key)` —— 删除指定键的值。
- `map.clear()` —— 清空 map。
- `map.size` —— 返回当前元素个数。

举个例子：

```javascript
let map = new Map();

map.set('1', 'str1');   // 字符串键
map.set(1, 'num1');     // 数字键
map.set(true, 'bool1'); // 布尔值键

// 还记得普通的 Object 吗? 它会将键转化为字符串
// Map 则会保留键的类型，所以下面这两个结果不同：
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3
```

如我们所见，与对象不同，键不会被转换成字符串。键可以是任何类型。

**`map[key]` 不是使用 `Map` 的正确方式**

虽然 `map[key]` 也有效，例如我们可以设置 `map[key] = 2`，这样会将 `map` 视为 JavaScript 的 plain object，因此它暗含了所有相应的限制（没有对象键等）。

所以我们应该使用 `map` 方法：`set` 和 `get` 等。

**Map 还可以使用对象作为键。**

例如：

```javascript
let john = { name: "John" };

// 存储每个用户的来访次数
let visitsCountMap = new Map();

// john 是 Map 中的键
visitsCountMap.set(john, 123);

alert( visitsCountMap.get(john) ); // 123
```

使用对象作为键是 `Map` 最值得注意和重要的功能之一。对于字符串键，`Object`（普通对象）也能正常使用，但对于对象键则不行。

我们来尝试一下：

```javascript
let john = { name: "John" };

let visitsCountObj = {}; // 尝试使用对象

visitsCountObj[john] = 123; // 尝试将 john 对象作为键

// 是写成了这样!
alert( visitsCountObj["[object Object]"] ); // 123
```

因为 `visitsCountObj` 是一个对象，它会将所有的键如 `john` 转换为字符串，所以我们得到字符串键 `"[object Object]"`。这显然不是我们想要的结果。

**`Map` 是怎么比较键的？**

`Map` 使用 [SameValueZero](https://tc39.github.io/ecma262/#sec-samevaluezero) 算法来比较键是否相等。它和严格等于 `===` 差不多，但区别是 `NaN` 被看成是等于 `NaN`。所以 `NaN` 也可以被用作键。

这个算法不能被改变或者自定义。

**链式调用**

每一次 `map.set` 调用都会返回 map 本身，所以我们可以进行“链式”调用：

```javascript
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

### [Map 迭代](https://zh.javascript.info/map-set#map-die-dai)

如果要在 `map` 里使用循环，可以使用以下三个方法：

- `map.keys()` —— 遍历并返回所有的键（returns an iterable for keys），
- `map.values()` —— 遍历并返回所有的值（returns an iterable for values），
- `map.entries()` —— 遍历并返回所有的实体（returns an iterable for entries）`[key, value]`，`for..of` 在默认情况下使用的就是这个。

例如：

```javascript
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}
```

**使用插入顺序**

迭代的顺序与插入值的顺序相同。与普通的 `Object` 不同，`Map` 保留了此顺序。

除此之外，`Map` 有内建的 `forEach` 方法，与 `Array` 类似：

```javascript
// 对每个键值对 (key, value) 运行 forEach 函数
recipeMap.forEach( (value, key, map) => {
  alert(`${key}: ${value}`); // cucumber: 500 etc
});
```

### [Object.entries：从对象创建 Map](https://zh.javascript.info/map-set#objectentries-cong-dui-xiang-chuang-jian-map)

当创建一个 `Map` 后，我们可以传入一个带有键值对的数组（或其它可迭代对象）来进行初始化，如下所示：

```javascript
// 键值对 [key, value] 数组
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
```

如果我们想从一个已有的普通对象（plain object）来创建一个 `Map`，那么我们可以使用内建方法 [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)，该方法返回对象的键/值对数组，该数组格式完全按照 `Map` 所需的格式。

所以可以像下面这样从一个对象创建一个 Map：

```javascript
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

这里，`Object.entries` 返回键/值对数组：`[ ["name","John"], ["age", 30] ]`。这就是 `Map` 所需要的格式。

### [Object.fromEntries：从 Map 创建对象](https://zh.javascript.info/map-set#objectfromentries-cong-map-chuang-jian-dui-xiang)

我们刚刚已经学习了如何使用 `Object.entries(obj)` 从普通对象（plain object）创建 `Map`。

`Object.fromEntries` 方法的作用是相反的：给定一个具有 `[key, value]` 键值对的数组，它会根据给定数组创建一个对象：

```javascript
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```

我们可以使用 `Object.fromEntries` 从 `Map` 得到一个普通对象（plain object）。

例如，我们在 `Map` 中存储了一些数据，但是我们需要把这些数据传给需要普通对象（plain object）的第三方代码。

我们来开始：

```javascript
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // 创建一个普通对象（plain object）(*)

// 完成了！
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

调用 `map.entries()` 将返回一个可迭代的键/值对，这刚好是 `Object.fromEntries` 所需要的格式。

我们可以把带 `(*)` 这一行写得更短：

```javascript
let obj = Object.fromEntries(map); // 省掉 .entries()
```

上面的代码作用也是一样的，因为 `Object.fromEntries` 期望得到一个可迭代对象作为参数，而不一定是数组。并且 `map` 的标准迭代会返回跟 `map.entries()` 一样的键/值对。因此，我们可以获得一个普通对象（plain object），其键/值对与 `map` 相同。

### [Set](https://zh.javascript.info/map-set#set)

`Set` 是一个特殊的类型集合 —— “值的集合”（没有键），它的每一个值只能出现一次。

它的主要方法如下：

- `new Set(iterable)` —— 创建一个 `set`，如果提供了一个 `iterable` 对象（通常是数组），将会从数组里面复制值到 `set` 中。
- `set.add(value)` —— 添加一个值，返回 set 本身
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`。
- `set.clear()` —— 清空 set。
- `set.size` —— 返回元素个数。

它的主要特点是，重复使用同一个值调用 `set.add(value)` 并不会发生什么改变。这就是 `Set` 里面的每一个值只出现一次的原因。

例如，我们有客人来访，我们想记住他们每一个人。但是已经来访过的客人再次来访，不应造成重复记录。每个访客必须只被“计数”一次。

`Set` 可以帮助我们解决这个问题：

```javascript
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits，一些访客来访好几次
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set 只保留不重复的值
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John（然后 Pete 和 Mary）
}
```

`Set` 的替代方法可以是一个用户数组，用 [arr.find](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 在每次插入值时检查是否重复。但是这样性能会很差，因为这个方法会遍历整个数组来检查每个元素。`Set` 内部对唯一性检查进行了更好的优化。

### [Set 迭代（iteration）](https://zh.javascript.info/map-set#set-die-dai-iteration)

我们可以使用 `for..of` 或 `forEach` 来遍历 Set：

```javascript
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// 与 forEach 相同：
set.forEach((value, valueAgain, set) => {
  alert(value);
});
```

注意一件有趣的事儿。`forEach` 的回调函数有三个参数：一个 `value`，然后是 **同一个值** `valueAgain`，最后是目标对象。没错，同一个值在参数里出现了两次。

`forEach` 的回调函数有三个参数，是为了与 `Map` 兼容。当然，这看起来确实有些奇怪。但是这对在特定情况下轻松地用 `Set` 代替 `Map` 很有帮助，反之亦然。

`Map` 中用于迭代的方法在 `Set` 中也同样支持：

- `set.keys()` —— 遍历并返回所有的值（returns an iterable object for values），
- `set.values()` —— 与 `set.keys()` 作用相同，这是为了兼容 `Map`，
- `set.entries()` —— 遍历并返回所有的实体（returns an iterable object for entries）`[value, value]`，它的存在也是为了兼容 `Map`。

### [总结](https://zh.javascript.info/map-set#zong-jie)

`Map` —— 是一个带键的数据项的集合。

方法和属性如下：

- `new Map([iterable])` —— 创建 map，可选择带有 `[key,value]` 对的 `iterable`（例如数组）来进行初始化。
- `map.set(key, value)` —— 根据键存储值。
- `map.get(key)` —— 根据键来返回值，如果 `map` 中不存在对应的 `key`，则返回 `undefined`。
- `map.has(key)` —— 如果 `key` 存在则返回 `true`，否则返回 `false`。
- `map.delete(key)` —— 删除指定键的值。
- `map.clear()` —— 清空 map 。
- `map.size` —— 返回当前元素个数。

与普通对象 `Object` 的不同点：

- 任何键、对象都可以作为键。
- 有其他的便捷方法，如 `size` 属性。

`Set` —— 是一组唯一值的集合。

方法和属性：

- `new Set([iterable])` —— 创建 set，可选择带有 `iterable`（例如数组）来进行初始化。
- `set.add(value)` —— 添加一个值（如果 `value` 存在则不做任何修改），返回 set 本身。
- `set.delete(value)` —— 删除值，如果 `value` 在这个方法调用的时候存在则返回 `true` ，否则返回 `false`。
- `set.has(value)` —— 如果 `value` 在 set 中，返回 `true`，否则返回 `false`。
- `set.clear()` —— 清空 set。
- `set.size` —— 元素的个数。

在 `Map` 和 `Set` 中迭代总是按照值插入的顺序进行的，所以我们不能说这些集合是无序的，但是我们不能对元素进行重新排序，也不能直接按其编号来获取元素。

## 32.WeakMap 和WeakSet(弱映射和弱集合)

我们从前面的 [垃圾回收](https://zh.javascript.info/garbage-collection) 章节中知道，JavaScript 引擎在值可访问（并可能被使用）时将其存储在内存中。

例如:

```javascript
let john = { name: "John" };

// 该对象能被访问，john 是它的引用

// 覆盖引用
john = null;

// 该对象将会被从内存中清除
```

通常，当对象、数组这类数据结构在内存中时，它们的子元素，如对象的属性、数组的元素都是可以访问的。

例如，如果把一个对象放入到数组中，那么只要这个数组存在，那么这个对象也就存在，即使没有其他对该对象的引用。

就像这样:

```javascript
let john = { name: "John" };

let array = [ john ];

john = null; // 覆盖引用

// 前面由 john 所引用的那个对象被存储在了 array 中
// 所以它不会被垃圾回收机制回收
```

类似的，如果我们使用对象作为常规 `Map` 的键，那么当 `Map` 存在时，该对象也将存在。它会占用内存，并且应该不会被（垃圾回收机制）回收。

例如：

```javascript
let john = { name: "John" };

let map = new Map();
map.set(john, "...");

john = null; // 覆盖引用

// john 被存储在了 map 中，
// 我们可以使用 map.keys() 来获取它
```

`WeakMap` 在这方面有着根本上的不同。它不会阻止垃圾回收机制对作为键的对象（key object）的回收。

让我们通过例子来看看这指的到底是什么。

### [WeakMap](https://zh.javascript.info/weakmap-weakset#weakmap)

`WeakMap` 和 `Map` 的第一个不同点就是，`WeakMap` 的键必须是对象，不能是原始值：

```javascript
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // 正常工作（以对象作为键）

// 不能使用字符串作为键
weakMap.set("test", "Whoops"); // Error，因为 "test" 不是一个对象
```

现在，如果我们在 weakMap 中使用一个对象作为键，并且没有其他对这个对象的引用 —— 该对象将会被从内存（和map）中自动清除。

```javascript
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 覆盖引用

// john 被从内存中删除了！
```

与上面常规的 `Map` 的例子相比，现在如果 `john` 仅仅是作为 `WeakMap` 的键而存在 —— 它将会被从 map（和内存）中自动删除。

`WeakMap` 不支持迭代以及 `keys()`，`values()` 和 `entries()` 方法。所以没有办法获取 `WeakMap` 的所有键或值。

`WeakMap` 只有以下的方法：

- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key)`
- `weakMap.has(key)`

为什么会有这种限制呢？这是技术的原因。如果一个对象丢失了其它所有引用（就像上面示例中的 `john`），那么它就会被垃圾回收机制自动回收。但是在从技术的角度并不能准确知道 **何时会被回收**。

这些都是由 JavaScript 引擎决定的。JavaScript 引擎可能会选择立即执行内存清理，如果现在正在发生很多删除操作，那么 JavaScript 引擎可能就会选择等一等，稍后再进行内存清理。因此，从技术上讲，`WeakMap` 的当前元素的数量是未知的。JavaScript 引擎可能清理了其中的垃圾，可能没清理，也可能清理了一部分。因此，暂不支持访问 `WeakMap` 的所有键/值的方法。

那么，在哪里我们会需要这样的数据结构呢？

### [使用案例：额外的数据](https://zh.javascript.info/weakmap-weakset#shi-yong-an-li-ewai-de-shu-ju)

`WeakMap` 的主要应用场景是 **额外数据的存储**。

假如我们正在处理一个“属于”另一个代码的一个对象，也可能是第三方库，并想存储一些与之相关的数据，那么这些数据就应该与这个对象共存亡 —— 这时候 `WeakMap` 正是我们所需要的利器。

我们将这些数据放到 `WeakMap` 中，并使用该对象作为这些数据的键，那么当该对象被垃圾回收机制回收后，这些数据也会被自动清除。

```javascript
weakMap.set(john, "secret documents");
// 如果 john 消失，secret documents 将会被自动清除
```

让我们来看一个例子。

例如，我们有用于处理用户访问计数的代码。收集到的信息被存储在 map 中：一个用户对象作为键，其访问次数为值。当一个用户离开时（该用户对象将被垃圾回收机制回收），这时我们就不再需要他的访问次数了。

下面是一个使用 `Map` 的计数函数的例子：

```javascript
// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count

// 递增用户来访次数
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

下面是其他部分的代码，可能是使用它的其它代码：

```javascript
// 📁 main.js
let john = { name: "John" };

countUser(john); // count his visits

// 不久之后，john 离开了
john = null;
```

现在 `john` 这个对象应该被垃圾回收，但他仍在内存中，因为它是 `visitsCountMap` 中的一个键。

当我们移除用户时，我们需要清理 `visitsCountMap`，否则它将在内存中无限增大。在复杂的架构中，这种清理会成为一项繁重的任务。

我们可以通过使用 `WeakMap` 来避免这样的问题：

```javascript
// 📁 visitsCount.js
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// 递增用户来访次数
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```

现在我们不需要去清理 `visitsCountMap` 了。当 `john` 对象变成不可访问时，即便它是 `WeakMap` 里的一个键，它也会连同它作为 `WeakMap` 里的键所对应的信息一同被从内存中删除。

### [使用案例：缓存](https://zh.javascript.info/weakmap-weakset#shi-yong-an-li-huan-cun)

另外一个普遍的例子是缓存：当一个函数的结果需要被记住（“缓存”），这样在后续的对同一个对象的调用时，就可以重用这个被缓存的结果。

我们可以使用 `Map` 来存储结果，就像这样：

```javascript
// 📁 cache.js
let cache = new Map();

// 计算并记住结果
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 现在我们在其它文件中使用 process()

// 📁 main.js
let obj = {/* 假设我们有个对象 */};

let result1 = process(obj); // 计算完成

// ……稍后，来自代码的另外一个地方……
let result2 = process(obj); // 取自缓存的被记忆的结果

// ……稍后，我们不再需要这个对象时：
obj = null;

alert(cache.size); // 1（啊！该对象依然在 cache 中，并占据着内存！）
```

对于多次调用同一个对象，它只需在第一次调用时计算出结果，之后的调用可以直接从 `cache` 中获取。这样做的缺点是，当我们不再需要这个对象的时候需要清理 `cache`。

如果我们用 `WeakMap` 替代 `Map`，这个问题便会消失：当对象被垃圾回收时，对应的缓存的结果也会被自动地从内存中清除。

```javascript
// 📁 cache.js
let cache = new WeakMap();

// 计算并记结果
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ……稍后，我们不再需要这个对象时：
obj = null;

// 无法获取 cache.size，因为它是一个 WeakMap，
// 要么是 0，或即将变为 0
// 当 obj 被垃圾回收，缓存的数据也会被清除
```

### [WeakSet](https://zh.javascript.info/weakmap-weakset#weakset)

`WeakSet` 的表现类似：

- 与 `Set` 类似，但是我们只能向 `WeakSet` 添加对象（而不能是原始值）。
- 对象只有在其它某个（些）地方能被访问的时候，才能留在 set 中。
- 跟 `Set` 一样，`WeakSet` 支持 `add`，`has` 和 `delete` 方法，但不支持 `size` 和 `keys()`，并且不可迭代。

变“弱（weak）”的同时，它也可以作为额外的存储空间。但并非针对任意数据，而是针对“是/否”的事实。`WeakSet` 的元素可能代表着有关该对象的某些信息。

例如，我们可以将用户添加到 `WeakSet` 中，以追踪访问过我们网站的用户：

```javascript
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John 访问了我们
visitedSet.add(pete); // 然后是 Pete
visitedSet.add(john); // John 再次访问

// visitedSet 现在有两个用户了

// 检查 John 是否来访过？
alert(visitedSet.has(john)); // true

// 检查 Mary 是否来访过？
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet 将被自动清理(即自动清除其中已失效的值 john)
```

`WeakMap` 和 `WeakSet` 最明显的局限性就是不能迭代，并且无法获取所有当前内容。那样可能会造成不便，但是并不会阻止 `WeakMap/WeakSet` 完成其主要工作 — 成为在其它地方管理/存储“额外”的对象数据。

### [总结](https://zh.javascript.info/weakmap-weakset#zong-jie)

`WeakMap` 是类似于 `Map` 的集合，它仅允许对象作为键，并且一旦通过其他方式无法访问它们，便会将它们与其关联值一同删除。

`WeakSet` 是类似于 `Set` 的集合，它仅存储对象，并且一旦通过其他方式无法访问它们，便会将其删除。

它们都不支持引用所有键或其计数的方法和属性。仅允许单个操作。

`WeakMap` 和 `WeakSet` 被用作“主要”对象存储之外的“辅助”数据结构。一旦将对象从主存储器中删除，如果该对象仅被用作 `WeakMap` 或 `WeakSet` 的键，那么它将被自动清除。

## 33.Object.keys,values,entries

对各个数据结构的学习至此告一段落，下面让我们讨论一下如何迭代它们。

在前面的章节中，我们认识了 `map.keys()`，`map.values()` 和 `map.entries()` 方法。

这些方法是通用的，有一个共同的约定来将它们用于各种数据结构。如果我们创建一个我们自己的数据结构，我们也应该实现这些方法。

它们支持：

- `Map`
- `Set`
- `Array`

普通对象也支持类似的方法，但是语法上有一些不同。

### [Object.keys，values，entries](https://zh.javascript.info/keys-values-entries#objectkeysvaluesentries)

对于普通对象，下列这些方法是可用的：

- [Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) —— 返回一个包含该对象所有的键的数组。
- [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) —— 返回一个包含该对象所有的值的数组。
- [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回一个包含该对象所有 [key, value] 键值对的数组。

……但是请注意区别（比如说跟 map 的区别）：

|          | Map          | Object                                  |
| :------- | :----------- | :-------------------------------------- |
| 调用语法 | `map.keys()` | `Object.keys(obj)`，而不是 `obj.keys()` |
| 返回值   | 可迭代项     | “真正的”数组                            |

第一个区别是，对于对象我们使用的调用语法是 `Object.keys(obj)`，而不是 `obj.keys()`。

为什么会这样？主要原因是灵活性。请记住，在 JavaScript 中，对象是所有复杂结构的基础。因此，我们可能有一个自己创建的对象，比如 `data`，并实现了它自己的 `data.values()` 方法。同时，我们依然可以对它调用 `Object.values(data)` 方法。

第二个区别是 `Object.*` 方法返回的是“真正的”数组对象，而不只是一个可迭代项。这主要是历史原因。

举个例子：

```javascript
let user = {
  name: "John",
  age: 30
};
```

- `Object.keys(user) = ["name", "age"]`
- `Object.values(user) = ["John", 30]`
- `Object.entries(user) = [ ["name","John"], ["age",30] ]`

这里有一个使用 `Object.values` 来遍历属性值的例子：

```javascript
let user = {
  name: "John",
  age: 30
};

// 遍历所有的值
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}
```

**Object.keys/values/entries 会忽略 symbol 属性**

就像 `for..in` 循环一样，这些方法会忽略使用 `Symbol(...)` 作为键的属性。

通常这很方便。但是，如果我们也想要 Symbol 类型的键，那么这儿有一个单独的方法 [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)，它会返回一个只包含 Symbol 类型的键的数组。另外，还有一种方法 [Reflect.ownKeys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)，它会返回 **所有** 键。

### [转换对象](https://zh.javascript.info/keys-values-entries#zhuan-huan-dui-xiang)

对象缺少数组存在的许多方法，例如 `map` 和 `filter` 等。

如果我们想应用它们，那么我们可以使用 `Object.entries`，然后使用 `Object.fromEntries`：

1. 使用 `Object.entries(obj)` 从 `obj` 获取由键/值对组成的数组。
2. 对该数组使用数组方法，例如 `map`。
3. 对结果数组使用 `Object.fromEntries(array)` 方法，将结果转回成对象。

例如，我们有一个带有价格的对象，并想将它们加倍：

```javascript
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```

乍一看，可能看起来很困难，但是使用一次或两次后，就很容易理解了。我们可以通过这种方式建立强大的转换链。

## 34.解构赋值

JavaScript 中最常用的两种数据结构是 `Object` 和 `Array`。

对象让我们能够创建通过键来存储数据项的单个实体，数组则让我们能够将数据收集到一个有序的集合中。

但是，当我们把它们传递给函数时，它可能不需要一个整体的对象/数组，而是需要单个块。

**解构赋值** 是一种特殊的语法，它使我们可以将数组或对象“拆包”为到一系列变量中，因为有时候使用变量更加方便。解构操作对那些具有很多参数和默认值等的函数也很奏效。

### [数组解构](https://zh.javascript.info/destructuring-assignment#shu-zu-jie-gou)

下面是一个将数组解构到变量中的例子：

```javascript
// 我们有一个存放了名字和姓氏的数组
let arr = ["Ilya", "Kantor"]

// 解构赋值
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor
```

现在我们就可以针对这些变量进行操作，而不是针对原来的数组元素。

当与 `split` 函数（或其他返回值是数组的函数）结合使用时，看起来就更优雅了：

```javascript
let [firstName, surname] = "Ilya Kantor".split(' ');
```

**“解构”并不意味着“破坏”**

这种语法叫做“解构赋值”，因为它通过将结构中的各元素复制到变量中来达到“解构”的目的。但数组本身是没有被修改的。

这只是下面这些代码的更精简的写法而已：

```javascript
// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
```

**忽略使用逗号的元素**

数组中不想要的元素也可以通过添加额外的逗号来把它丢弃：

```javascript
// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
```

在上面的代码中，数组的第二个元素被跳过了，第三个元素被赋值给了 `title` 变量，数组中剩下的元素也都被跳过了（因为在这没有对应给它们的变量）。

**等号右侧可以是任何可迭代对象**

……实际上，我们可以将其与任何可迭代对象一起使用，而不仅限于数组：

```javascript
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
```

**赋值给等号左侧的任何内容**

我们可以在等号左侧使用任何“可以被赋值的”东西。

例如，一个对象的属性：

```javascript
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
```

**与 .entries() 方法进行循环操作**

在前面的章节中我们已经见过了 [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) 方法。

我们可以将 .entries() 方法与解构语法一同使用，来遍历一个对象的“键—值”对：

```javascript
let user = {
  name: "John",
  age: 30
};

// 循环遍历键—值对
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

……对于 map 对象也类似：

```javascript
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```

**交换变量值的技巧**

一个用于交换变量值的典型技巧：

```javascript
let guest = "Jane";
let admin = "Pete";

// 交换值：让 guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane（成功交换！）
```

这里我们创建了一个由两个变量组成的临时数组，并且立即以交换了的顺序对其进行了解构。

我们可以用这种方式交换两个以上的变量。

#### [剩余的 ‘…’](https://zh.javascript.info/destructuring-assignment#sheng-yu-de)

如果我们不只是要获得第一个值，还要将后续的所有元素都收集起来 — 我们可以使用三个点 `"..."` 来再加一个参数来接收“剩余的”元素：

```javascript
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// 请注意，`rest` 的类型是数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

`rest` 的值就是数组中剩下的元素组成的数组。不一定要使用变量名 `rest`，我们也可以使用其他的变量名，只要确保它前面有三个点，并且在解构赋值的最后一个参数位置上就行了。

#### [默认值](https://zh.javascript.info/destructuring-assignment#mo-ren-zhi)

如果赋值语句中，变量的数量多于数组中实际元素的数量，赋值不会报错。未赋值的变量被认为是 `undefined`：

```javascript
let [firstName, surname] = [];

alert(firstName); // undefined
alert(surname); // undefined
```

如果我们想要一个“默认”值给未赋值的变量，我们可以使用 `=` 来提供：

```javascript
// 默认值
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius（来自数组的值）
alert(surname); // Anonymous（默认值被使用了）
```

默认值可以是更加复杂的表达式甚至可以是函数调用，这些表达式或函数只会在这个变量未被赋值的时候才会被计算。

举个例子，我们使用了 `prompt` 函数来提供两个默认值，但它只会在未被赋值的那个变量上进行调用：

```javascript
// 只会提示输入姓氏
let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

alert(name);    // Julius（来自数组）
alert(surname); // 你输入的值
```

### [对象解构](https://zh.javascript.info/destructuring-assignment#dui-xiang-jie-gou)

解构赋值同样适用于对象。

基本语法是：

```javascript
let {var1, var2} = {var1:…, var2:…}
```

在等号右侧有一个已经存在的对象，我们想把它拆开到变量中。等号左侧包含了对象相应属性的一个“模式（pattern）”。在简单的情况下，等号左侧的就是 `{...}` 中的变量名列表。

举个例子：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

属性 `options.title`、`options.width` 和 `options.height` 值被赋给了对应的变量。变量的顺序并不重要，下面这个代码也奏效：

```javascript
// 改变 let {...} 中元素的顺序
let {height, width, title} = { title: "Menu", height: 200, width: 100 }
```

等号左侧的模式（pattern）可以更加复杂，并且指定了属性和变量之间的映射关系。

如果我们想把一个属性赋值给另一个名字的变量，比如把 `options.width` 属性赋值给变量 `w`，那么我们可以使用冒号来指定：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title} = options;

// width -> w
// height -> h
// title -> title

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

冒号表示“什么值：赋值给谁”。上面的例子中，属性 `width` 被赋值给了 `w`，属性 `height` 被赋值给了 `h`，属性 `title` 被赋值给了同名变量。

对于可能缺失的属性，我们可以使用 `"="` 设置默认值，如下所示：

```javascript
let options = {
  title: "Menu"
};

let {width = 100, height = 200, title} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```

就像数组或函数参数一样，默认值可以是任意表达式甚至可以是函数调用。它们只会在未提供对应的值时才会被计算/调用。

在下面的代码中，`prompt` 提示输入 `width` 值，但不会提示输入 `title` 值：

```javascript
let options = {
  title: "Menu"
};

let {width = prompt("width?"), title = prompt("title?")} = options;

alert(title);  // Menu
alert(width);  // (prompt 的返回值)
```

我们还可以将冒号和等号结合起来：

```javascript
let options = {
  title: "Menu"
};

let {width: w = 100, height: h = 200, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
```

如果我们有一个具有很多属性的复杂对象，那么我们可以只提取所需的内容：

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

// 仅提取 title 作为变量
let { title } = options;

alert(title); // Menu
```

#### [剩余模式（pattern）"…"](https://zh.javascript.info/destructuring-assignment#sheng-yu-mo-shi-pattern)

如果对象拥有的属性数量比我们提供的变量数量还多，该怎么办？我们可以只取其中的某一些属性，然后把“剩余的”赋值到其他地方吗？

我们可以使用剩余模式（pattern），就像我们对数组那样。一些较旧的浏览器不支持此功能（例如，使用 Babel 对其进行填充），但可以在现代浏览器中使用。

看起来就像这样：

```javascript
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = 名为 title 的属性
// rest = 存有剩余属性的对象
let {title, ...rest} = options;

// 现在 title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100
```

**不使用 `let` 时的陷阱**

在上面的示例中，变量都是在赋值中通过正确方式声明的：`let {…} = {…}`。当然，我们也可以使用已有的变量，而不用 `let`，但这里有一个陷阱。

以下代码无法正常运行：

```javascript
let title, width, height;

// 这一行发生了错误
{title, width, height} = {title: "Menu", width: 200, height: 100};
```

问题在于 JavaScript 把主代码流（即不在其他表达式中）的 `{...}` 当做一个代码块。这样的代码块可以用于对语句分组，如下所示：

```javascript
{
  // 一个代码块
  let message = "Hello";
  // ...
  alert( message );
}
```

因此，这里 JavaScript 假定我们有一个代码块，这就是报错的原因。我们需要解构它。

为了告诉 JavaScript 这不是一个代码块，我们可以把整个赋值表达式用括号 `(...)` 包起来：

```javascript
let title, width, height;

// 现在就可以了
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu
```

### [嵌套解构](https://zh.javascript.info/destructuring-assignment#qian-tao-jie-gou)

如果一个对象或数组嵌套了其他的对象和数组，我们可以在等号左侧使用更复杂的模式（pattern）来提取更深层的数据。

在下面的代码中，`options` 的属性 `size` 是另一个对象，属性 `items` 是另一个数组。赋值语句中等号左侧的模式（pattern）具有相同的结构以从中提取值：

```javascript
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 为了清晰起见，解构赋值语句被写成多行的形式
let {
  size: { // 把 size 赋值到这里
    width,
    height
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = "Menu" // 在对象中不存在（使用默认值）
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut
```

对象 `options` 的所有属性，除了 `extra` 属性在等号左侧不存在，都被赋值给了对应的变量：

最终，我们得到了 `width`、`height`、`item1`、`item2` 和具有默认值的 `title` 变量。

注意，`size` 和 `items` 没有对应的变量，因为我们取的是它们的内容。

### [智能函数参数](https://zh.javascript.info/destructuring-assignment#zhi-neng-han-shu-can-shu)

有时，一个函数有很多参数，其中大部分的参数都是可选的。对用户界面来说更是如此。想象一个创建菜单的函数。它可能具有宽度参数，高度参数，标题参数和项目列表等。

下面是实现这种函数的一个很不好的写法：

```javascript
function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
  // ...
}
```

在实际开发中存在一个问题就是你怎么记得住这么多参数的顺序。通常集成开发环境工具（IDE）会尽力帮助我们，特别是当代码有良好的文档注释的时候，但是…… 另一个问题就是，当大部分的参数采用默认值就好的情况下，怎么调用这个函数。

难道像这样？

```javascript
// 在采用默认值就可以的位置设置 undefined
showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])
```

这太难看了。而且，当我们处理更多参数的时候可读性会变得很差。

解构赋值语法前来救援！

我们可以把所有参数当作一个对象来传递，然后函数马上把这个对象解构成多个变量：

```javascript
// 我们传递一个对象给函数
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ……然后函数马上把对象展开成变量
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 提取于 options，
  // width, height – 使用默认值
  alert( `${title} ${width} ${height}` ); // My Menu 200 100
  alert( items ); // Item1, Item2
}

showMenu(options);
```

我们同样可以使用带有嵌套对象和冒号映射的更加复杂的解构：

```javascript
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
```

完整语法和解构赋值是一样的：

```javascript
function({
  incomingProperty: varName = defaultValue
  ...
})
```

对于参数对象，属性 `incomingProperty` 对应的变量是 `varName`，默认值是 `defaultValue`。

请注意，这种解构假定了 `showMenu()` 函数确实存在参数。如果我们想让所有的参数都使用默认值，那我们应该传递一个空对象：

```javascript
showMenu({}); // 不错，所有值都取默认值

showMenu(); // 这样会导致错误
```

我们可以通过指定空对象 `{}` 为整个参数对象的默认值来解决这个问题：

```javascript
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {
  alert( `${title} ${width} ${height}` );
}

showMenu(); // Menu 100 200
```

在上面的代码中，整个参数对象的默认是 `{}`，因此总会有内容可以用来解构。

### [总结](https://zh.javascript.info/destructuring-assignment#zong-jie)

- 解构赋值可以立即将一个对象或数组映射到多个变量上。

- 解构对象的完整语法：

  ```javascript
  let {prop : varName = default, ...rest} = object
  ```

  这表示属性 `prop` 会被赋值给变量 `varName`，如果没有这个属性的话，就会使用默认值 `default`。

  没有对应映射的对象属性会被复制到 `rest` 对象。

- 解构数组的完整语法：

  ```javascript
  let [item1 = default, item2, ...rest] = array
  ```

  数组的第一个元素被赋值给 `item1`，第二个元素被赋值给 `item2`，剩下的所有元素被复制到另一个数组 `rest`。

- 从嵌套数组/对象中提取数据也是可以的，此时等号左侧必须和等号右侧有相同的结构。

## 35.日期和时间

让我一起学习一个新的内建对象：[日期（Date）](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date)。该对象存储日期和时间，并提供了日期/时间的管理方法。

例如，我们可以使用它来存储创建/修改时间，或者用来测量时间，再或者仅用来打印当前时间。

### [创建](https://zh.javascript.info/date#chuang-jian)

创建一个新的 `Date` 对象，只需要调用 `new Date()`，在调用时可以带有下面这些参数之一：

- `new Date()`

  不带参数 —— 创建一个表示当前日期和时间的 `Date` 对象：`let now = new Date(); alert( now ); // 显示当前的日期/时间`

- `new Date(milliseconds)`

  创建一个 `Date` 对象，其时间等于 1970 年 1 月 1 日 UTC+0 之后经过的毫秒数（1/1000 秒）。`// 0 表示 01.01.1970 UTC+0 let Jan01_1970 = new Date(0); alert( Jan01_1970 ); // 现在增加 24 小时，得到 02.01.1970 UTC+0 let Jan02_1970 = new Date(24 * 3600 * 1000); alert( Jan02_1970 );`传入的整数参数代表的是自 1970-01-01 00:00:00 以来经过的毫秒数，该整数被称为 **时间戳**。这是一种日期的轻量级数字表示形式。我们通常使用 `new Date(timestamp)` 通过时间戳来创建日期，并可以使用 `date.getTime()` 将现有的 `Date` 对象转化为时间戳（下文会讲到）。在 01.01.1970 之前的日期带有负的时间戳，例如：`// 31 Dec 1969 let Dec31_1969 = new Date(-24 * 3600 * 1000); alert( Dec31_1969 );`

- `new Date(datestring)`

  如果只有一个参数，并且是字符串，那么它会被自动解析。该算法与 `Date.parse` 所使用的算法相同，我们将在下文中进行介绍。`let date = new Date("2017-01-26"); alert(date); // 该时间未被设定，因此被假定为格林尼治标准时间（GMT）的午夜（midnight） // 并会根据你运行代码时的时区进行调整 // 因此，结果可能是 // Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time) // 或 // Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)`

- `new Date(year, month, date, hours, minutes, seconds, ms)`

  使用当前时区中的给定组件创建日期。只有前两个参数是必须的。`year` 必须是四位数：`2013` 是合法的，`98` 是不合法的。`month` 计数从 `0`（一月）开始，到 `11`（十二月）结束。`date` 是当月的具体某一天，如果缺失，则为默认值 `1`。如果 `hours/minutes/seconds/ms` 缺失，则均为默认值 `0`。例如：`new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00 new Date(2011, 0, 1); // 同样，时分秒等均为默认值 0`时间度量最大精确到 1 毫秒（1/1000 秒）：`let date = new Date(2011, 0, 1, 2, 3, 4, 567); alert( date ); // 1.01.2011, 02:03:04.567`

### [访问日期组件](https://zh.javascript.info/date#fang-wen-ri-qi-zu-jian)

从 `Date` 对象中访问年、月等信息有多种方式：

- [getFullYear()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)

  获取年份（4 位数）

- [getMonth()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)

  获取月份，**从 0 到 11**。

- [getDate()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate)

  获取当月的具体日期，从 1 到 31，这个方法名称可能看起来有些令人疑惑。

- [getHours()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours)，[getMinutes()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes)，[getSeconds()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds)，[getMilliseconds()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds)

  获取相应的时间组件。

**不是 `getYear()`，而是 `getFullYear()`**

很多 JavaScript 引擎都实现了一个非标准化的方法 `getYear()`。不推荐使用这个方法。它有时候可能会返回 2 位的年份信息。永远都不要使用它。要获取年份就使用 `getFullYear()`。

另外，我们还可以获取一周中的第几天：

- [getDay()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay)

  获取一周中的第几天，从 `0`（星期日）到 `6`（星期六）。第一天始终是星期日，在某些国家可能不是这样的习惯，但是这不能被改变。

**以上的所有方法返回的组件都是基于当地时区的。**

当然，也有与当地时区的 UTC 对应项，它们会返回基于 UTC+0 时区的日、月、年等：[getUTCFullYear()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)，[getUTCMonth()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)，[getUTCDay()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)。只需要在 `"get"` 之后插入 `"UTC"` 即可。

如果你当地时区相对于 UTC 有偏移，那么下面代码会显示不同的小时数：

```javascript
//  当前日期
let date = new Date();

// 当地时区的小时数
alert( date.getHours() );

// 在 UTC+0 时区的小时数（非夏令时的伦敦时间）
alert( date.getUTCHours() );
```

除了上述给定的方法，还有两个没有 UTC 变体的特殊方法：

- [getTime()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)

  返回日期的时间戳 —— 从 1970-1-1 00:00:00 UTC+0 开始到现在所经过的毫秒数。

- [getTimezoneOffset()](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)

  返回 UTC 与本地时区之间的时差，以分钟为单位：`// 如果你在时区 UTC-1，输出 60 // 如果你在时区 UTC+3，输出 -180 alert( new Date().getTimezoneOffset() );`

### [设置日期组件](https://zh.javascript.info/date#she-zhi-ri-qi-zu-jian)

下列方法可以设置日期/时间组件：

- [`setFullYear(year, [month\], [date])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear)
- [`setMonth(month, [date\])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth)
- [`setDate(date)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)
- [`setHours(hour, [min\], [sec], [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
- [`setMinutes(min, [sec\], [ms])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes)
- [`setSeconds(sec, [ms\])`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds)
- [`setMilliseconds(ms)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds)
- [`setTime(milliseconds)`](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)（使用自 1970-01-01 00:00:00 UTC+0 以来的毫秒数来设置整个日期）

以上方法除了 `setTime()` 都有 UTC 变体，例如：`setUTCHours()`。

我们可以看到，有些方法可以一次性设置多个组件，比如 `setHours`。未提及的组件不会被修改。

举个例子：

```javascript
let today = new Date();

today.setHours(0);
alert(today); // 日期依然是今天，但是小时数被改为了 0

today.setHours(0, 0, 0, 0);
alert(today); // 日期依然是今天，时间为 00:00:00。
```

### [自动校准（Autocorrection）](https://zh.javascript.info/date#zi-dong-xiao-zhun-autocorrection)

**自动校准** 是 `Date` 对象的一个非常方便的特性。我们可以设置超范围的数值，它会自动校准。

举个例子：

```javascript
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ……是 1st Feb 2013!
```

超出范围的日期组件将会被自动分配。

假设我们要在日期 “28 Feb 2016” 上加 2 天。结果可能是 “2 Mar” 或 “1 Mar”，因为存在闰年。但是我们不需要去考虑这些，只需要直接加 2 天，剩下的 `Date` 对象会帮我们处理：

```javascript
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016
```

这个特性经常被用来获取给定时间段后的日期。例如，我们想获取“现在 70 秒后”的日期：

```javascript
let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // 显示正确的日期信息
```

我们还可以设置 0 甚至可以设置负值。例如：

```javascript
let date = new Date(2016, 0, 2); // 2016 年 1 月 2 日

date.setDate(1); // 设置为当月的第一天
alert( date );

date.setDate(0); // 天数最小可以设置为 1，所以这里设置的是上一月的最后一天
alert( date ); // 31 Dec 2015
```

### [日期转化为数字，日期差值](https://zh.javascript.info/date#ri-qi-zhuan-hua-wei-shu-zi-ri-qi-cha-zhi)

当 `Date` 对象被转化为数字时，得到的是对应的时间戳，与使用 `date.getTime()` 的结果相同：

```javascript
let date = new Date();
alert(+date); // 以毫秒为单位的数值，与使用 date.getTime() 的结果相同
```

有一个重要的副作用：日期可以相减，相减的结果是以毫秒为单位时间差。

这个作用可以用于时间测量：

```javascript
let start = new Date(); // 开始测量时间

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // 结束测量时间

alert( `The loop took ${end - start} ms` );
```

### [Date.now()](https://zh.javascript.info/date#datenow)

如果我们仅仅想要测量时间间隔，我们不需要 `Date` 对象。

有一个特殊的方法 `Date.now()`，它会返回当前的时间戳。

它相当于 `new Date().getTime()`，但它不会创建中间的 `Date` 对象。因此它更快，而且不会对垃圾处理造成额外的压力。

这种方法很多时候因为方便，又或是因性能方面的考虑而被采用，例如使用 JavaScript 编写游戏或其他的特殊应用场景。

因此这样做可能会更好：

```javascript
let start = Date.now(); // 从 1 Jan 1970 至今的时间戳

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // 完成

alert( `The loop took ${end - start} ms` ); // 相减的是时间戳，而不是日期
```

### [度量（Benchmarking）](https://zh.javascript.info/date#du-liang-benchmarking)

如果我们想要为一个很耗 CPU 性能的函数提供一个可靠的度量（benchmark），我们应该小心一点。

例如，我们想判断两个计算日期差值的函数：哪个更快？

这种性能测量通常称为“度量（benchmark）”。

```javascript
// 我们有 date1 和 date2，哪个函数会更快地返回两者的时间差？
function diffSubtract(date1, date2) {
  return date2 - date1;
}

// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}
```

这两个函数做的事情完全相同，但是其中一个函数使用显性的 `date.getTime()` 来获取毫秒形式的日期，另一个则依赖于“日期 — 数字”的转换。它们的结果是一样的。

那么，哪个更快呢？

首先想到的方法可能是连续运行它们很多次，并计算时间差。就我们的例子而言，函数非常简单，所以我们必须执行至少 100000 次。

让我们开始测量：

```javascript
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );
```

哇！使用 `getTime()` 这种方式快得多！原因是它没有类型转化，这样对引擎优化来说更加简单。

好，我们得到了结论，但是这并不是一个很好的度量的例子。

想象一下当运行 `bench(diffSubtract)` 的同时，CPU 还在并行处理其他事务，并且这也会占用资源。然而，运行 `bench(diffGetTime)` 的时候，并行处理的事务完成了。

这是对于现代多进程操作系统来说的一个非常真实的场景。

结果就是，第一个函数相比于第二个函数，缺少 CPU 资源。这可能导致错误的结论。

**为了得到更加可靠的度量，整个度量测试包应该重新运行多次。**

例如，像下面的代码这样：

```javascript
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// 交替运行 bench(upperSlice) 和 bench(upperLoop) 各 10 次
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert( 'Total time for diffSubtract: ' + time1 );
alert( 'Total time for diffGetTime: ' + time2 );
```

现代的 JavaScript 引擎的先进优化策略只对执行很多次的 “hot code” 有效（对于执行很少次数的代码没有必要优化）。因此，在上面的例子中，第一次执行的优化程度不高。我们可能需要增加一个升温步骤：

```javascript
// 在主循环中增加“升温”环节
bench(diffSubtract);
bench(diffGetTime);

// 开始度量
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}
```

**进行微度量测试时要小心**

现代的 JavaScript 引擎执行了很多优化。与“正常使用”相比，它们可能会改变“人为测试”的结果，特别是在我们对很细微的东西进行度量测试时，例如 operator 的工作方式或内建函数。因此，如果你想好好了解一下性能，请学习 JavaScript 引擎的工作原理。在那之后，你可能再也不需要微度量了。

关于 V8 引擎的大量文章，可以在 [http://mrale.ph](http://mrale.ph/) 找到。

### [对一个字符串使用 Date.parse](https://zh.javascript.info/date#dui-yi-ge-zi-fu-chuan-shi-yong-dateparse)

[Date.parse(str)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 方法可以从一个字符串中读取日期。

字符串的格式应该为：`YYYY-MM-DDTHH:mm:ss.sssZ`，其中：

- `YYYY-MM-DD` —— 日期：年-月-日。
- 字符 `"T"` 是一个分隔符。
- `HH:mm:ss.sss` —— 时间：小时，分钟，秒，毫秒。
- 可选字符 `'Z'` 为 `+-hh:mm` 格式的时区。单个字符 `Z` 代表 UTC+0 时区。

简短形式也是可以的，比如 `YYYY-MM-DD` 或 `YYYY-MM`，甚至可以是 `YYYY`。

`Date.parse(str)` 调用会解析给定格式的字符串，并返回时间戳（自 1970-01-01 00:00:00 起所经过的毫秒数）。如果给定字符串的格式不正确，则返回 `NaN`。

举个例子：

```javascript
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (时间戳)
```

我们可以通过时间戳来立即创建一个 `new Date` 对象：

```javascript
let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

alert(date);
```

### [总结](https://zh.javascript.info/date#zong-jie)

- 在 JavaScript 中，日期和时间使用 [Date](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象来表示。我们不能只创建日期，或者只创建时间，`Date` 对象总是同时创建两者。
- 月份从 0 开始计数（对，一月是 0）。
- 一周中的某一天 `getDay()` 同样从 0 开始计算（0 代表星期日）。
- 当设置了超出范围的组件时，`Date` 会进行自我校准。这一点对于日/月/小时的加减很有用。
- 日期可以相减，得到的是以毫秒表示的两者的差值。因为当 `Date` 被转换为数字时，`Date` 对象会被转换为时间戳。
- 使用 `Date.now()` 可以更快地获取当前时间的时间戳。

和其他系统不同，JavaScript 中时间戳以毫秒为单位，而不是秒。

有时我们需要更加精准的时间度量。JavaScript 自身并没有测量微秒的方法（百万分之一秒），但大多数运行环境会提供。例如：浏览器有 [performance.now()](https://developer.mozilla.org/zh/docs/Web/API/Performance/now) 方法来给出从页面加载开始的以毫秒为单位的微秒数（精确到毫秒的小数点后三位）：

```javascript
alert(`Loading started ${performance.now()}ms ago`);
// 类似于 "Loading started 34731.26000000001ms ago"
// .26 表示的是微秒（260 微秒）
// 小数点后超过 3 位的数字是精度错误，只有前三位数字是正确的
```

Node.js 有 `microtime` 模块以及其他方法。从技术上讲，几乎所有的设备和环境都允许获取更高精度的数值，只是不是通过 `Date` 对象。

## 36.JSON

假设我们有一个复杂的对象，我们希望将其转换为字符串，以通过网络发送，或者只是为了在日志中输出它。

当然，这样的字符串应该包含所有重要的属性。

我们可以像这样实现转换：

```javascript
let user = {
  name: "John",
  age: 30,

  toString() {
    return `{name: "${this.name}", age: ${this.age}}`;
  }
};

alert(user); // {name: "John", age: 30}
```

……但在开发过程中，会新增一些属性，旧的属性会被重命名和删除。每次更新这种 `toString` 都会非常痛苦。我们可以尝试遍历其中的属性，但是如果对象很复杂，并且在属性中嵌套了对象呢？我们也需要对它们进行转换。

幸运的是，不需要编写代码来处理所有这些问题。这项任务已经解决了。

### [JSON.stringify](https://zh.javascript.info/json#jsonstringify)

[JSON](http://en.wikipedia.org/wiki/JSON)（JavaScript Object Notation）是表示值和对象的通用格式。在 [RFC 4627](http://tools.ietf.org/html/rfc4627) 标准中有对其的描述。最初它是为 JavaScript 而创建的，但许多其他编程语言也有用于处理它的库。因此，当客户端使用 JavaScript 而服务器端是使用 Ruby/PHP/Java 等语言编写的时，使用 JSON 可以很容易地进行数据交换。

JavaScript 提供了如下方法：

- `JSON.stringify` 将对象转换为 JSON。
- `JSON.parse` 将 JSON 转换回对象。

例如，在这里我们 `JSON.stringify` 一个 `student` 对象：

```javascript
let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON 编码的对象：
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

方法 `JSON.stringify(student)` 接收对象并将其转换为字符串。

得到的 `json` 字符串是一个被称为 **JSON 编码（JSON-encoded）** 或 **序列化（serialized）** 或 **字符串化（stringified）** 或 **编组化（marshalled）** 的对象。我们现在已经准备好通过有线发送它或将其放入普通数据存储。

请注意，JSON 编码的对象与对象字面量有几个重要的区别：

- 字符串使用双引号。JSON 中没有单引号或反引号。所以 `'John'` 被转换为 `"John"`。
- 对象属性名称也是双引号的。这是强制性的。所以 `age:30` 被转换成 `"age":30`。

`JSON.stringify` 也可以应用于原始（primitive）数据类型。

JSON 支持以下数据类型：

- Objects `{ ... }`
- Arrays `[ ... ]`
- Primitives：
  - strings，
  - numbers，
  - boolean values `true/false`，
  - `null`。

例如：

```javascript
// 数字在 JSON 还是数字
alert( JSON.stringify(1) ) // 1

// 字符串在 JSON 中还是字符串，只是被双引号扩起来
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
```

JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 `JSON.stringify` 跳过。

即：

- 函数属性（方法）。
- Symbol 类型的属性。
- 存储 `undefined` 的属性。

```javascript
let user = {
  sayHi() { // 被忽略
    alert("Hello");
  },
  [Symbol("id")]: 123, // 被忽略
  something: undefined // 被忽略
};

alert( JSON.stringify(user) ); // {}（空对象）
```

通常这很好。如果这不是我们想要的方式，那么我们很快就会看到如何自定义转换方式。

最棒的是支持嵌套对象转换，并且可以自动对其进行转换。

例如：

```javascript
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

alert( JSON.stringify(meetup) );
/* 整个解构都被字符串化了
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/
```

重要的限制：不得有循环引用。

例如：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room;       // meetup 引用了 room
room.occupiedBy = meetup; // room 引用了 meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON
```

在这里，转换失败了，因为循环引用：`room.occupiedBy` 引用了 `meetup`，`meetup.place` 引用了 `room`：

### [排除和转换：replacer](https://zh.javascript.info/json#pai-chu-he-zhuan-huan-replacer)

`JSON.stringify` 的完整语法是：

```javascript
let json = JSON.stringify(value[, replacer, space])
```

- value

  要编码的值。

- replacer

  要编码的属性数组或映射函数 `function(key, value)`。

- space

  用于格式化的空格数量

大部分情况，`JSON.stringify` 仅与第一个参数一起使用。但是，如果我们需要微调替换过程，比如过滤掉循环引用，我们可以使用 `JSON.stringify` 的第二个参数。

如果我们传递一个属性数组给它，那么只有这些属性会被编码。

例如：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}
```

这里我们可能过于严格了。属性列表应用于了整个对象结构。所以 `participants` 是空的，因为 `name` 不在列表中。

让我们包含除了会导致循环引用的 `room.occupiedBy` 之外的所有属性：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
```

现在，除 `occupiedBy` 以外的所有内容都被序列化了。但是属性的列表太长了。

幸运的是，我们可以使用一个函数代替数组作为 `replacer`。

该函数会为每个 `(key,value)` 对调用并返回“已替换”的值，该值将替换原有的值。如果值被跳过了，则为 `undefined`。

在我们的例子中，我们可以为 `occupiedBy` 以外的所有内容按原样返回 `value`。为了 `occupiedBy`，下面的代码返回 `undefined`：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup 引用了 room
};

room.occupiedBy = meetup; // room 引用了 meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
*/
```

请注意 `replacer` 函数会获取每个键/值对，包括嵌套对象和数组项。它被递归地应用。`replacer` 中的 `this` 的值是包含当前属性的对象。

第一个调用很特别。它是使用特殊的“包装对象”制作的：`{"": meetup}`。换句话说，第一个 `(key, value)` 对的键是空的，并且该值是整个目标对象。这就是上面的示例中第一行是 `":[object Object]"` 的原因。

这个理念是为了给 `replacer` 提供尽可能多的功能：如果有必要，它有机会分析并替换/跳过整个对象。

### [格式化：space](https://zh.javascript.info/json#ge-shi-hua-space)

`JSON.stringify(value, replacer, spaces)` 的第三个参数是用于优化格式的空格数量。

以前，所有字符串化的对象都没有缩进和额外的空格。如果我们想通过网络发送一个对象，那就没什么问题。`space` 参数专门用于调整出更美观的输出。

这里的 `space = 2` 告诉 JavaScript 在多行中显示嵌套的对象，对象内部缩进 2 个空格：

```javascript
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

alert(JSON.stringify(user, null, 2));
/* 两个空格的缩进：
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* 对于 JSON.stringify(user, null, 4) 的结果会有更多缩进：
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
```

`spaces` 参数仅用于日志记录和美化输出。

### [自定义 “toJSON”](https://zh.javascript.info/json#zi-ding-yi-tojson)

像 `toString` 进行字符串转换，对象也可以提供 `toJSON` 方法来进行 JSON 转换。如果可用，`JSON.stringify` 会自动调用它。

例如：

```javascript
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/
```

在这儿我们可以看到 `date` `(1)` 变成了一个字符串。这是因为所有日期都有一个内建的 `toJSON` 方法来返回这种类型的字符串。

现在让我们为对象 `room` 添加一个自定义的 `toJSON`：

```javascript
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

alert( JSON.stringify(room) ); // 23

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```

正如我们所看到的，`toJSON` 既可以用于直接调用 `JSON.stringify(room)` 也可以用于当 `room` 嵌套在另一个编码对象中时。

### [JSON.parse](https://zh.javascript.info/json#jsonparse)

要解码 JSON 字符串，我们需要另一个方法 [JSON.parse](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)。

语法：

```javascript
let value = JSON.parse(str, [reviver]);
```

- str

  要解析的 JSON 字符串。

- reviver

  可选的函数 function(key,value)，该函数将为每个 `(key, value)` 对调用，并可以对值进行转换。

例如：

```javascript
// 字符串化数组
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
```

对于嵌套对象：

```javascript
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1
```

JSON 可能会非常复杂，对象和数组可以包含其他对象和数组。但是它们必须遵循相同的 JSON 格式。

以下是手写 JSON 时的典型错误（有时我们必须出于调试目的编写它）：

```javascript
let json = `{
  name: "John",                     // 错误：属性名没有双引号
  "surname": 'Smith',               // 错误：值使用的是单引号（必须使用双引号）
  'isAdmin': false                  // 错误：键使用的是单引号（必须使用双引号）
  "birthday": new Date(2000, 2, 3), // 错误：不允许使用 "new"，只能是裸值
  "friends": [0,1,2,3]              // 这个没问题
}`;
```

此外，JSON 不支持注释。向 JSON 添加注释无效。

还有另一种名为 [JSON5](http://json5.org/) 的格式，它允许未加引号的键，也允许注释等。但这是一个独立的库，不在语言的规范中。

常规的 JSON 格式严格，并不是因为它的开发者很懒，而是为了实现简单，可靠且快速地实现解析算法。

### [使用 reviver](https://zh.javascript.info/json#shi-yong-reviver)

想象一下，我们从服务器上获得了一个字符串化的 `meetup` 对象。

它看起来像这样：

```javascript
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
```

……现在我们需要对它进行 **反序列（deserialize）**，把它转换回 JavaScript 对象。

让我们通过调用 `JSON.parse` 来完成：

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

alert( meetup.date.getDate() ); // Error!
```

啊！报错了！

`meetup.date` 的值是一个字符串，而不是 `Date` 对象。`JSON.parse` 怎么知道应该将字符串转换为 `Date` 呢？

让我们将 reviver 函数传递给 `JSON.parse` 作为第二个参数，该函数按照“原样”返回所有值，但是 `date` 会变成 `Date`：

```javascript
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 现在正常运行了！
```

顺便说一下，这也适用于嵌套对象：

```javascript
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( schedule.meetups[1].date.getDate() ); // 正常运行了！
```

### [总结](https://zh.javascript.info/json#zong-jie)

- JSON 是一种数据格式，具有自己的独立标准和大多数编程语言的库。
- JSON 支持 object，array，string，number，boolean 和 `null`。
- JavaScript 提供序列化（serialize）成 JSON 的方法 [JSON.stringify](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 和解析 JSON 的方法 [JSON.parse](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)。
- 这两种方法都支持用于智能读/写的转换函数。
- 如果一个对象具有 `toJSON`，那么它会被 `JSON.stringify` 调用。

## 37.递归和堆栈

让我们回到函数，进行更深入的研究。

我们的第一个主题是 **递归（recursion）**。

如果你不是刚接触编程，那么你可能已经很熟悉它了，那么你可以跳过这一章。

递归是一种编程模式，在一个任务可以自然地拆分成多个相同类型但更简单的任务的情况下非常有用。或者，在一个任务可以简化为一个简单的行为加上该任务的一个更简单的变体的时候可以使用。或者，就像我们很快会看到的那样，处理某些数据结构。

当一个函数解决一个任务时，在解决的过程中它可以调用很多其它函数。在部分情况下，函数会调用 **自身**。这就是所谓的 **递归**。

### [两种思考方式](https://zh.javascript.info/recursion#liang-zhong-si-kao-fang-shi)

简单起见，让我们写一个函数 `pow(x, n)`，它可以计算 `x` 的 `n` 次方。换句话说就是，`x` 乘以自身 `n` 次。

```javascript
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
```

有两种实现方式。

1. 迭代思路：使用 `for` 循环：

   ```javascript
   function pow(x, n) {
     let result = 1;
   
     // 再循环中，用 x 乘以 result n 次
     for (let i = 0; i < n; i++) {
       result *= x;
     }
   
     return result;
   }
   
   alert( pow(2, 3) ); // 8
   ```

2. 递归思路：简化任务，调用自身：

   ```javascript
   function pow(x, n) {
     if (n == 1) {
       return x;
     } else {
       return x * pow(x, n - 1);
     }
   }
   
   alert( pow(2, 3) ); // 8
   ```

请注意，递归变体在本质上是不同的。

当 `pow(x, n)` 被调用时，执行分为两个分支：

```javascript
              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)
```

1. 如果 `n == 1`，所有事情都会很简单，这叫做 **基础** 的递归，因为它会立即产生明显的结果：`pow(x, 1)` 等于 `x`。
2. 否则，我们可以用 `x * pow(x, n - 1)` 表示 `pow(x, n)`。在数学里，可能会写为 `xn = x * xn-1`。这叫做 **一个递归步骤**：我们将任务转化为更简单的行为（`x` 的乘法）和更简单的同类任务的调用（带有更小的 `n` 的 `pow` 运算）。接下来的步骤将其进一步简化，直到 `n` 达到 `1`。

我们也可以说 `pow` **递归地调用自身** 直到 `n == 1`。

比如，为了计算 `pow(2, 4)`，递归变体经过了下面几个步骤：

1. `pow(2, 4) = 2 * pow(2, 3)`
2. `pow(2, 3) = 2 * pow(2, 2)`
3. `pow(2, 2) = 2 * pow(2, 1)`
4. `pow(2, 1) = 2`

因此，递归将函数调用简化为一个更简单的函数调用，然后再将其简化为一个更简单的函数，以此类推，直到结果变得显而易见。

**递归通常更短**

递归解通常比迭代解更短。

在这儿，我们可以使用条件运算符 `?` 而不是 `if` 语句，从而使 `pow(x, n)` 更简洁并且可读性依然很高：

```javascript
function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}
```

最大的嵌套调用次数（包括首次）被称为 **递归深度**。在我们的例子中，它正好等于 `n`。

最大递归深度受限于 JavaScript 引擎。对我们来说，引擎在最大迭代深度为 10000 及以下时是可靠的，有些引擎可能允许更大的最大深度，但是对于大多数引擎来说，100000 可能就超出限制了。有一些自动优化能够帮助减轻这种情况（尾部调用优化），但目前它们还没有被完全支持，只能用于简单场景。

这就限制了递归的应用，但是递归仍然被广泛使用。有很多任务中，递归思维方式会使代码更简单，更容易维护。

### [执行上下文和堆栈](https://zh.javascript.info/recursion#zhi-hang-shang-xia-wen-he-dui-zhan)

现在我们来研究一下递归调用是如何工作的。为此，我们会先看看函数底层的工作原理。

有关正在运行的函数的执行过程的相关信息被存储在其 **执行上下文** 中。

[执行上下文](https://tc39.github.io/ecma262/#sec-execution-contexts) 是一个内部数据结构，它包含有关函数执行时的详细细节：当前控制流所在的位置，当前的变量，`this` 的值（此处我们不使用它），以及其它的一些内部细节。

一个函数调用仅具有一个与其相关联的执行上下文。

当一个函数进行嵌套调用时，将发生以下的事儿：

- 当前函数被暂停；
- 与它关联的执行上下文被一个叫做 **执行上下文堆栈** 的特殊数据结构保存；
- 执行嵌套调用；
- 嵌套调用结束后，从堆栈中恢复之前的执行上下文，并从停止的位置恢复外部函数。

让我们看看 `pow(2, 3)` 调用期间都发生了什么。

#### [pow(2, 3)](https://zh.javascript.info/recursion#pow-2-3)

在调用 `pow(2, 3)` 的开始，执行上下文（context）会存储变量：`x = 2, n = 3`，执行流程在函数的第 `1` 行。

我们将其描绘如下：

- Context: { x: 2, n: 3, at line 1 } pow(2, 3)

这是函数开始执行的时候。条件 `n == 1` 结果为假，所以执行流程进入 `if` 的第二分支。

```javascript
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) );
```

变量相同，但是行改变了，因此现在的上下文是：

- Context: { x: 2, n: 3, at line 5 } pow(2, 3)

为了计算 `x * pow(x, n - 1)`，我们需要使用带有新参数的新的 `pow` 子调用 `pow(2, 2)`。

#### [pow（2, 2)](https://zh.javascript.info/recursion#pow-2-2)

为了执行嵌套调用，JavaScript 会在 **执行上下文堆栈** 中记住当前的执行上下文。

这里我们调用相同的函数 `pow`，但这绝对没问题。所有函数的处理都是一样的：

1. 当前上下文被“记录”在堆栈的顶部。
2. 为子调用创建新的上下文。
3. 当子调用结束后 —— 前一个上下文被从堆栈中弹出，并继续执行。

下面是进入子调用 `pow(2, 2)` 时的上下文堆栈：

- Context: { x: 2, n: 2, at line 1 } pow(2, 2)
- Context: { x: 2, n: 3, at line 5 } pow(2, 3)

新的当前执行上下文位于顶部（粗体显示），之前记住的上下文位于下方。

当我们完成子调用后 —— 很容易恢复上一个上下文，因为它既保留了变量，也保留了当时所在代码的确切位置。

**请注意：**

在上面的图中，我们使用“行（line）”一词，因为在我们的示例中，每一行只有一个子调用，但通常一行代码可能会包含多个子调用，例如 `pow(…) + pow(…) + somethingElse(…)`。

因此，更准确地说，执行是“在子调用之后立即恢复”的。

#### [pow(2, 1)](https://zh.javascript.info/recursion#pow-2-1)

重复该过程：在第 `5` 行生成新的子调用，现在的参数是 `x=2`, `n=1`。

新的执行上下文被创建，前一个被压入堆栈顶部：

- Context: { x: 2, n: 1, at line 1 } pow(2, 1)
- Context: { x: 2, n: 2, at line 5 } pow(2, 2)
- Context: { x: 2, n: 3, at line 5 } pow(2, 3)

此时，有 2 个旧的上下文和 1 个当前正在运行的 `pow(2, 1)` 的上下文。

#### [出口](https://zh.javascript.info/recursion#chu-kou)

在执行 `pow(2, 1)` 时，与之前的不同，条件 `n == 1` 为真，因此 `if` 的第一个分支生效：

```javascript
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
```

此时不再有更多的嵌套调用，所以函数结束，返回 `2`。

函数完成后，就不再需要其执行上下文了，因此它被从内存中移除。前一个上下文恢复到堆栈的顶部：

- Context: { x: 2, n: 2, at line 5 } pow(2, 2)
- Context: { x: 2, n: 3, at line 5 } pow(2, 3)

恢复执行 `pow(2, 2)`。它拥有子调用 `pow(2, 1)` 的结果，因此也可以完成 `x * pow(x, n - 1)` 的执行，并返回 `4`。

然后，前一个上下文被恢复：

- Context: { x: 2, n: 3, at line 5 } pow(2, 3)

当它结束后，我们得到了结果 `pow(2, 3) = 8`。

本示例中的递归深度为：**3**。

从上面的插图我们可以看出，递归深度等于堆栈中上下文的最大数量。

请注意内存要求。上下文占用内存，在我们的示例中，求 `n` 次方需要存储 `n` 个上下文，以供更小的 `n` 值进行计算使用。

而循环算法更节省内存：

```javascript
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

迭代 `pow` 的过程中仅使用了一个上下文用于修改 `i` 和 `result`。它的内存要求小，并且是固定了，不依赖于 `n`。

**任何递归都可以用循环来重写。通常循环变体更有效。**

……但有时重写很难，尤其是函数根据条件使用不同的子调用，然后合并它们的结果，或者分支比较复杂时。而且有些优化可能没有必要，完全不值得。

递归可以使代码更短，更易于理解和维护。并不是每个地方都需要优化，大多数时候我们需要一个好代码，这就是为什么要使用它。

### [递归遍历](https://zh.javascript.info/recursion#di-gui-bian-li)

递归的另一个重要应用就是递归遍历。

假设我们有一家公司。人员结构可以表示为一个对象：

```javascript
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};
```

换句话说，一家公司有很多部门。

- 一个部门可能有一 **数组** 的员工，比如，`sales` 部门有 2 名员工：John 和 Alice。

- 或者，一个部门可能会划分为几个子部门，比如 `development` 有两个分支：`sites` 和 `internals`，它们都有自己的员工。

- 当一个子部门增长时，它也有可能被拆分成几个子部门（或团队）。

  例如，`sites` 部门在未来可能会分为 `siteA` 和 `siteB`。并且，它们可能会被再继续拆分。没有图示，脑补一下吧。

现在，如果我们需要一个函数来获取所有薪资的总数。我们该怎么做？

迭代方式并不容易，因为结构比较复杂。首先想到的可能是在 `company` 上使用 `for` 循环，并在第一层部分上嵌套子循环。但是，之后我们需要更多的子循环来遍历像 `sites` 这样的二级部门的员工…… 然后，将来可能会出现在三级部门上的另一个子循环？如果我们在代码中写 3-4 级嵌套的子循环来遍历单个对象， 那代码得多丑啊。

我们试试递归吧。

我们可以看到，当我们的函数对一个部门求和时，有两种可能的情况：

1. 要么是由一 **数组** 的人组成的“简单”的部门 —— 这样我们就可以通过一个简单的循环来计算薪资的总和。
2. 或者它是一个有 `N` 个子部门的 **对象** —— 那么我们可以通过 `N` 层递归调用来求每一个子部门的薪资，然后将它们合并起来。

第一种情况是由一数组的人组成的部门，这种情况很简单，是最基础的递归。

第二种情况是我们得到的是对象。那么可将这个复杂的任务拆分成适用于更小部门的子任务。它们可能会被继续拆分，但很快或者不久就会拆分到第一种情况那样。

这个算法从代码来看可能会更简单：

```javascript
let company = { // 是同一个对象，简洁起见被压缩了
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 用来完成任务的函数
function sumSalaries(department) {
  if (Array.isArray(department)) { // 情况（1）
    return department.reduce((prev, current) => prev + current.salary, 0); // 求数组的和
  } else { // 情况（2）
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 递归调用所有子部门，对结果求和
    }
    return sum;
  }
}

alert(sumSalaries(company)); // 7700
```

代码很短也容易理解（希望是这样？）。这就是递归的能力。它适用于任何层次的子部门嵌套。

下面是调用图：

我们可以很容易地看到其原理：对于对象 `{...}` 会生成子调用，而数组 `[...]` 是递归树的“叶子”，它们会立即给出结果。

请注意，该代码使用了我们之前讲过的智能特性（smart features）：

- 在 [数组方法](https://zh.javascript.info/array-methods) 中我们介绍过的数组求和方法 `arr.reduce`。
- 使用循环 `for(val of Object.values(obj))` 遍历对象的（属性）值：`Object.values` 返回它们组成的数组。

### [递归结构](https://zh.javascript.info/recursion#di-gui-jie-gou)

递归（递归定义的）数据结构是一种部分复制自身的结构。

我们刚刚在上面的公司结构的示例中看过了它。

一个公司的 **部门** 是：

- 一数组的人。
- 或一个 **部门** 对象。

对于 Web 开发者而言，有更熟知的例子：HTML 和 XML 文档。

在 HTML 文档中，一个 **HTML 标签** 可能包括以下内容：

- 文本片段。
- HTML 注释。
- 其它 **HTML 标签**（它有可能又包括文本片段、注释或其它标签等）。

这又是一个递归定义。

为了更好地理解递归，我们再讲一个递归结构的例子“链表”，在某些情况下，它可能是优于数组的选择。

#### [链表](https://zh.javascript.info/recursion#lian-biao)

想象一下，我们要存储一个有序的对象列表。

正常的选择会是一个数组：

```javascript
let arr = [obj1, obj2, obj3];
```

……但是用数组有个问题。“删除元素”和“插入元素”的操作代价非常大。例如，`arr.unshift(obj)` 操作必须对所有元素重新编号以便为新的元素 `obj` 腾出空间，而且如果数组很大，会很耗时。`arr.shift()` 同理。

唯一对数组结构做修改而不需要大量重排的操作就是对数组末端的操作：`arr.push/pop`。因此，对于大队列来说，当我们必须对数组首端的元素进行操作时，数组会很慢。（译注：此处的首端操作其实指的是在尾端以外的数组内的元素进行插入/删除操作。）

如果我们确实需要快速插入/删除，则可以选择另一种叫做 [链表](https://en.wikipedia.org/wiki/Linked_list) 的数据结构。

**链表元素** 是一个使用以下元素通过递归定义的对象：

- `value`。
- `next` 属性引用下一个 **链表元素** 或者代表末尾的 `null`。

例如：

```javascript
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```

链表的图形表示：

一段用来创建链表的代码：

```javascript
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
```

在这儿我们可以清楚地看到，这里有很多个对象，每一个都有 `value` 和指向邻居的 `next`。变量 `list` 是链条中的第一个对象，因此顺着 `next` 指针，我们可以抵达任何元素。

该链表可以很容易被拆分为多个部分，然后再重新组装回去：

```javascript
let secondList = list.next.next;
list.next.next = null;
```

合并：

```javascript
list.next.next = secondList;
```

当然，我们可以在任何位置插入或移除元素。

比如，要添加一个新值，我们需要更新链表的头：

```javascript
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

// 将新值添加到链表头部
list = { value: "new item", next: list };
```

要从中间删除一个值，可以修改前一个元素的 `next`：

```javascript
list.next = list.next.next;
```

我们让 `list.next` 从 `1` 跳到值 `2`。现在值 `1` 就被从链表中移除了。如果它没有被存储在其它任何地方，那么它会被自动从内存中删除。

与数组不同，链表没有大规模重排，我们可以很容易地重新排列元素。

当然，链表也不总是优于数组的。不然大家就都去使用链表了。

链表主要的缺点就是我们无法很容易地通过元素的编号获取元素。但在数组中却很容易：`arr[n]` 是一个直接引用。而在链表中，我们需要从起点元素开始，顺着 `next` 找 `N` 次才能获取到第 N 个元素。

……但是我们也并不是总需要这样的操作。比如，当我们需要一个队列甚至一个 [双向队列](https://en.wikipedia.org/wiki/Double-ended_queue) —— 有序结构必须可以快速地从两端添加/移除元素，但是不需要访问的元素。

链表可以得到增强：

- 我们可以在 `next` 之外，再添加 `prev` 属性来引用前一个元素，以便轻松地往回移动。
- 我们还可以添加一个名为 `tail` 的变量，该变量引用链表的最后一个元素（并在从末尾添加/删除元素时对该引用进行更新）。
- ……数据结构可能会根据我们的需求而变化。

### [总结](https://zh.javascript.info/recursion#zong-jie)

术语：

- **递归** 是编程的一个术语，表示从自身调用函数（译注：也就是自调用）。递归函数可用于以更优雅的方式解决问题。

  当一个函数调用自身时，我们称其为 **递归步骤**。递归的 **基础** 是函数参数使任务简单到该函数不再需要进行进一步调用。

- [递归定义](https://en.wikipedia.org/wiki/Recursive_data_type) 的数据结构是指可以使用自身来定义的数据结构。

  例如，链表可以被定义为由对象引用一个列表（或 `null`）而组成的数据结构。

  ```javascript
  list = { value, next -> list }
  ```

  像 HTML 元素树或者本章中的 `department` 树等，本质上也是递归：它们有分支，而且分支又可以有其他分支。

  就像我们在示例 `sumSalary` 中看到的那样，可以使用递归函数来遍历它们。

任何递归函数都可以被重写为迭代（译注：也就是循环）形式。有时这是在优化代码时需要做的。但对于大多数任务来说，递归方法足够快，并且容易编写和维护。

## 38.Rest参数 和Spread语法

在 JavaScript 中，很多内建函数都支持传入任意数量的参数。

例如：

- `Math.max(arg1, arg2, ..., argN)` —— 返回入参中的最大值。
- `Object.assign(dest, src1, ..., srcN)` —— 依次将属性从 `src1..N` 复制到 `dest`。
- ……等。

在本章中，我们将学习如何编程实现支持函数可传入任意数量的参数。以及，如何将数组作为参数传递给这类函数。

### [Rest 参数 `...`](https://zh.javascript.info/rest-parameters-spread#rest-can-shu)

在 JavaScript 中，无论函数是如何定义的，你都可以使用任意数量的参数调用函数。

例如：

```javascript
function sum(a, b) {
  return a + b;
}

alert( sum(1, 2, 3, 4, 5) );
```

虽然这里不会因为传入“过多”的参数而报错。但是当然，在结果中只有前两个参数被计算进去了。

Rest 参数可以通过使用三个点 `...` 并在后面跟着包含剩余参数的数组名称，来将它们包含在函数定义中。这些点的字面意思是“将剩余参数收集到一个数组中”。

例如，我们需要把所有的参数都放到数组 `args` 中：

```javascript
function sumAll(...args) { // 数组名为 args
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6
```

我们也可以选择获取第一个参数作为变量，并将剩余的参数收集起来。

下面的例子把前两个参数定义为变量，并把剩余的参数收集到 `titles` 数组中：

```javascript
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // 剩余的参数被放入 titles 数组中
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");
```

**Rest 参数必须放到参数列表的末尾**

Rest 参数会收集剩余的所有参数，因此下面这种用法没有意义，并且会导致错误：

```javascript
function f(arg1, ...rest, arg2) { // arg2 在 ...rest 后面？！
  // error
}
```

`...rest` 必须处在最后。

### [“arguments” 变量](https://zh.javascript.info/rest-parameters-spread#arguments-bian-liang)

有一个名为 `arguments` 的特殊的类数组对象，该对象按参数索引包含所有参数。

例如：

```javascript
function showName() {
  alert( arguments.length );
  alert( arguments[0] );
  alert( arguments[1] );

  // 它是可遍历的
  // for(let arg of arguments) alert(arg);
}

// 依次显示：2，Julius，Caesar
showName("Julius", "Caesar");

// 依次显示：1，Ilya，undefined（没有第二个参数）
showName("Ilya");
```

在过去，JavaScript 中没有 rest 参数，而使用 `arguments` 是获取函数所有参数的唯一方法。现在它仍然有效，我们可以在一些老代码里找到它。

但缺点是，尽管 `arguments` 是一个类数组，也是可迭代对象，但它终究不是数组。它不支持数组方法，因此我们不能调用 `arguments.map(...)` 等方法。

此外，它始终包含所有参数，我们不能像使用 rest 参数那样只截取入参的一部分。

因此，当我们需要这些功能时，最好使用 rest 参数。

**箭头函数是没有 `"arguments"`**

如果我们在箭头函数中访问 `arguments`，访问到的 `arguments` 并不属于箭头函数，而是属于箭头函数外部的“普通”函数。

举个例子：

```javascript
function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1
```

我们已经知道，箭头函数没有自身的 `this`。现在我们知道了它们也没有特殊的 `arguments` 对象。

### [Spread 语法](https://zh.javascript.info/rest-parameters-spread#spread-syntax)

我们刚刚看到了如何从参数列表中获取数组。

不过有时候我们也需要做与之相反的事儿。

例如，内建函数 [Math.max](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 会返回参数中最大的值：

```javascript
alert( Math.max(3, 5, 1) ); // 5
```

假如我们有一个数组 `[3, 5, 1]`，我们该如何用它调用 `Math.max` 呢？

直接把数组“原样”传入是不会奏效的，因为 `Math.max` 希望你传入一个列表形式的数值型参数，而不是一个数组：

```javascript
let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
```

毫无疑问，我们不可能手动地去一一设置参数 `Math.max(arg[0], arg[1], arg[2])`，因为我们不确定这儿有多少个。在脚本执行时，可能参数数组中有很多个元素，也可能一个都没有。并且这样设置的代码也很丑。

**Spread 语法** 来帮助你了！它看起来和 rest 参数很像，也使用 `...`，但是二者的用途完全相反。

当在函数调用中使用 `...arr` 时，它会把可迭代对象 `arr` “展开”到参数列表中。

以 `Math.max` 为例：

```javascript
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5（spread 语法把数组转换为参数列表）
```

我们还可以通过这种方式传递多个可迭代对象：

```javascript
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(...arr1, ...arr2) ); // 8
```

我们甚至还可以将 spread 语法与常规值结合使用：

```javascript
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
```

并且，我们还可以使用 spread 语法来合并数组：

```javascript
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15（0，然后是 arr，然后是 2，然后是 arr2）
```

在上面的示例中，我们使用数组展示了 spread 语法，其实任何可迭代对象都可以。

例如，在这儿我们使用 spread 语法将字符串转换为字符数组：

```javascript
let str = "Hello";

alert( [...str] ); // H,e,l,l,o
```

Spread 语法内部使用了迭代器来收集元素，与 `for..of` 的方式相同。

因此，对于一个字符串，`for..of` 会逐个返回该字符串中的字符，`...str` 也同理会得到 `"H","e","l","l","o"` 这样的结果。随后，字符列表被传递给数组初始化器 `[...str]`。

对于这个特定任务，我们还可以使用 `Array.from` 来实现，因为该方法会将一个可迭代对象（如字符串）转换为数组：

```javascript
let str = "Hello";

// Array.from 将可迭代对象转换为数组
alert( Array.from(str) ); // H,e,l,l,o
```

运行结果与 `[...str]` 相同。

不过 `Array.from(obj)` 和 `[...obj]` 存在一个细微的差别：

- `Array.from` 适用于类数组对象也适用于可迭代对象。
- Spread 语法只适用于可迭代对象。

因此，对于将一些“东西”转换为数组的任务，`Array.from` 往往更通用。

### [获取一个 array/object 的副本](https://zh.javascript.info/rest-parameters-spread#huo-qu-yi-ge-arrayobject-de-fu-ben)

还记得我们 [之前讲过的](https://zh.javascript.info/object-copy#ke-long-yu-he-bing-objectassign) `Object.assign()` 吗？

使用 spread 语法也可以做同样的事情（译注：也就是进行浅拷贝）。

```javascript
let arr = [1, 2, 3];
let arrCopy = [...arr]; // 将数组 spread 到参数列表中
                        // 然后将结果放到一个新数组

// 两个数组中的内容相同吗？
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// 两个数组相等吗？
alert(arr === arrCopy); // false（它们的引用是不同的）

// 修改我们初始的数组不会修改副本：
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3
```

并且，也可以通过相同的方式来复制一个对象：

```javascript
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // 将对象 spread 到参数列表中
                          // 然后将结果返回到一个新对象

// 两个对象中的内容相同吗？
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// 两个对象相等吗？
alert(obj === objCopy); // false (not same reference)

// 修改我们初始的对象不会修改副本：
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
```

这种方式比使用 `let arrCopy = Object.assign([], arr);` 来复制数组，或使用 `let objCopy = Object.assign({}, obj);` 来复制对象写起来要短得多。因此，只要情况允许，我们更喜欢使用它。

### [总结](https://zh.javascript.info/rest-parameters-spread#zong-jie)

当我们在代码中看到 `"..."` 时，它要么是 rest 参数，要么就是 spread 语法。

有一个简单的方法可以区分它们：

- 若 `...` 出现在函数参数列表的最后，那么它就是 rest 参数，它会把参数列表中剩余的参数收集到一个数组中。
- 若 `...` 出现在函数调用或类似的表达式中，那它就是 spread 语法，它会把一个数组展开为列表。

使用场景：

- Rest 参数用于创建可接受任意数量参数的函数。
- Spread 语法用于将数组传递给通常需要含有许多参数的列表的函数。

它们俩的出现帮助我们轻松地在列表和参数数组之间来回转换。

“旧式”的 `arguments`（类数组且可迭代的对象）也依然能够帮助我们获取函数调用中的所有参数。

## 39.变量作用域，闭包

JavaScript 是一种非常面向函数的语言。它给了我们很大的自由度。在 JavaScript 中，我们可以随时创建函数，可以将函数作为参数传递给另一个函数，并在完全不同的代码位置进行调用。

我们已经知道函数可以访问其外部的变量。

但是，如果在函数被创建之后，外部变量发生了变化会怎样？函数会获得新值还是旧值？

如果将函数作为参数传递并在代码中的另一个位置调用它，该函数将访问的是新位置的外部变量吗？

让我们通过本文来学习这些相关知识，以了解在这些场景以及更复杂的场景下到底会发生什么。

**我们将在这探讨一下 `let/const`**

在 JavaScript 中，有三种声明变量的方式：`let`，`const`（现代方式），`var`（过去留下来的方式）。

- 在本文的示例中，我们将使用 `let` 声明变量。
- 用 `const` 声明的变量的行为也相同（译注：与 `let` 在作用域等特性上是相同的），因此，本文也涉及用 `const` 进行变量声明。
- 旧的 `var` 与上面两个有着明显的区别，我们将在 [旧时的 "var"](https://zh.javascript.info/var) 中详细介绍。

### [代码块](https://zh.javascript.info/closure#dai-ma-kuai)

如果在代码块 `{...}` 内声明了一个变量，那么这个变量只在该代码块内可见。

例如：

```javascript
{
  // 使用在代码块外不可见的局部变量做一些工作

  let message = "Hello"; // 只在此代码块内可见

  alert(message); // Hello
}

alert(message); // Error: message is not defined
```

我们可以使用它来隔离一段代码，该段代码执行自己的任务，并使用仅属于自己的变量：

```javascript
{
  // 显示 message
  let message = "Hello";
  alert(message);
}

{
  // 显示另一个 message
  let message = "Goodbye";
  alert(message);
}
```

**这里如果没有代码块则会报错**

请注意，如果我们使用 `let` 对已存在的变量进行重复声明，如果对应的变量没有单独的代码块，则会出现错误：

```javascript
// 显示 message
let message = "Hello";
alert(message);

// 显示另一个 message
let message = "Goodbye"; // Error: variable already declared
alert(message);
```

对于 `if`，`for` 和 `while` 等，在 `{...}` 中声明的变量也仅在内部可见：

```javascript
if (true) {
  let phrase = "Hello!";

  alert(phrase); // Hello!
}

alert(phrase); // Error, no such variable!
```

在这儿，当 `if` 执行完毕，则下面的 `alert` 将看不到 `phrase`，因此会出现错误。（译注：就算下面的 `alert` 想在 `if` 没执行完成时去取 `phrase`（虽然这种情况不可能发生）也是取不到的，因为 `let` 声明的变量在代码块外不可见。）

太好了，因为这就允许我们创建特定于 `if` 分支的块级局部变量。

对于 `for` 和 `while` 循环也是如此：

```javascript
for (let i = 0; i < 3; i++) {
  // 变量 i 仅在这个 for 循环的内部可见
  alert(i); // 0，然后是 1，然后是 2
}

alert(i); // Error, no such variable
```

从视觉上看，`let i` 位于 `{...}` 之外。但是 `for` 构造在这里很特殊：在其中声明的变量被视为块的一部分。

### [嵌套函数](https://zh.javascript.info/closure#qian-tao-han-shu)

当一个函数是在另一个函数中创建的时，那么该函数就被称为“嵌套”的。

在 JavaScript 中很容易实现这一点。

我们可以使用嵌套来组织代码，比如这样：

```javascript
function sayHiBye(firstName, lastName) {

  // 辅助嵌套函数使用如下
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );

}
```

这里创建的 **嵌套** 函数 `getFullName()` 是为了更加方便。它可以访问外部变量，因此可以返回全名。嵌套函数在 JavaScript 中很常见。

更有意思的是，可以返回一个嵌套函数：作为一个新对象的属性或作为结果返回。之后可以在其他地方使用。不论在哪里调用，它仍然可以访问相同的外部变量。

下面的 `makeCounter` 创建了一个 “counter” 函数，该函数在每次调用时返回下一个数字：

```javascript
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2
```

尽管很简单，但稍加变型就具有很强的实际用途，比如，用作 [随机数生成器](https://en.wikipedia.org/wiki/Pseudorandom_number_generator) 以生成用于自动化测试的随机数值。

这是如何运作的呢？如果我们创建多个计数器，它们会是独立的吗？这里的变量是怎么回事？

理解这些内容对于掌握 JavaScript 的整体知识很有帮助，并且对于应对更复杂的场景也很有益处。因此，让我们继续深入探究。

### [词法环境](https://zh.javascript.info/closure#ci-fa-huan-jing)

**前方高能！**

一大波深入的技术讲解即将到来。

尽管我很想避免编程语言的一些底层细节，但是如果没有它们，我们就无法完整地理解词法作用域，所以我们这就开始吧！

为了使内容更清晰，这里将分步骤进行讲解。

#### [Step 1. 变量](https://zh.javascript.info/closure#step-1-bian-liang)

在 JavaScript 中，每个运行的函数，代码块 `{...}` 以及整个脚本，都有一个被称为 **词法环境（Lexical Environment）** 的内部（隐藏）的关联对象。

词法环境对象由两部分组成：

1. **环境记录（Environment Record）** —— 一个存储所有局部变量作为其属性（包括一些其他信息，例如 `this` 的值）的对象。
2. 对 **外部词法环境** 的引用，与外部代码相关联。

一个“变量”只是 **环境记录** 这个特殊的内部对象的一个属性。“获取或修改变量”意味着“获取或修改词法环境的一个属性”。

举个例子，这段没有函数的简单的代码中只有一个词法环境：

这就是所谓的与整个脚本相关联的 **全局** 词法环境。

在上面的图片中，矩形表示环境记录（变量存储），箭头表示外部引用。全局词法环境没有外部引用，所以箭头指向了 `null`。

随着代码开始并继续运行，词法环境发生了变化。

这是更长的代码：

右侧的矩形演示了执行过程中全局词法环境的变化：

1. 当脚本开始运行，词法环境预先填充了所有声明的变量。
   - 最初，它们处于“未初始化（Uninitialized）”状态。这是一种特殊的内部状态，这意味着引擎知道变量，但是在用 `let` 声明前，不能引用它。几乎就像变量不存在一样。
2. 然后 `let phrase` 定义出现了。它尚未被赋值，因此它的值为 `undefined`。从这一刻起，我们就可以使用变量了。
3. `phrase` 被赋予了一个值。
4. `phrase` 的值被修改。

现在看起来都挺简单的，是吧？

- 变量是特殊内部对象的属性，与当前正在执行的（代码）块/函数/脚本有关。
- 操作变量实际上是操作该对象的属性。

**词法环境是一个规范对象**

“词法环境”是一个规范对象（specification object）：它仅仅是存在于 [编程语言规范](https://tc39.es/ecma262/#sec-lexical-environments) 中的“理论上”存在的，用于描述事物如何运作的对象。我们无法在代码中获取该对象并直接对其进行操作。

但 JavaScript 引擎同样可以优化它，比如清除未被使用的变量以节省内存和执行其他内部技巧等，但显性行为应该是和上述的无差。

#### [Step 2. 函数声明](https://zh.javascript.info/closure#step-2-han-shu-sheng-ming)

一个函数其实也是一个值，就像变量一样。

**不同之处在于函数声明的初始化会被立即完成。**

当创建了一个词法环境（Lexical Environment）时，函数声明会立即变为即用型函数（不像 `let` 那样直到声明处才可用）。

这就是为什么我们可以在（函数声明）的定义之前调用函数声明。

例如，这是添加一个函数时全局词法环境的初始状态：

正常来说，这种行为仅适用于函数声明，而不适用于我们将函数分配给变量的函数表达式，例如 `let say = function(name)...`。

#### [Step 3. 内部和外部的词法环境](https://zh.javascript.info/closure#step-3-nei-bu-he-wai-bu-de-ci-fa-huan-jing)

在一个函数运行时，在调用刚开始时，会自动创建一个新的词法环境以存储这个调用的局部变量和参数。

例如，对于 `say("John")`，它看起来像这样（当前执行位置在箭头标记的那一行上）：

在这个函数调用期间，我们有两个词法环境：内部一个（用于函数调用）和外部一个（全局）：

- 内部词法环境与 `say` 的当前执行相对应。它具有一个单独的属性：`name`，函数的参数。我们调用的是 `say("John")`，所以 `name` 的值为 `"John"`。
- 外部词法环境是全局词法环境。它具有 `phrase` 变量和函数本身。

内部词法环境引用了 `outer`。

**当代码要访问一个变量时 —— 首先会搜索内部词法环境，然后搜索外部环境，然后搜索更外部的环境，以此类推，直到全局词法环境。**

如果在任何地方都找不到这个变量，那么在严格模式下就会报错（在非严格模式下，为了向下兼容，给未定义的变量赋值会创建一个全局变量）。

在这个示例中，搜索过程如下：

- 对于 `name` 变量，当 `say` 中的 `alert` 试图访问 `name` 时，会立即在内部词法环境中找到它。
- 当它试图访问 `phrase` 时，然而内部没有 `phrase`，所以它顺着对外部词法环境的引用找到了它。

#### [Step 4. 返回函数](https://zh.javascript.info/closure#step-4-fan-hui-han-shu)

让我们回到 `makeCounter` 这个例子。

```javascript
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
```

在每次 `makeCounter()` 调用的开始，都会创建一个新的词法环境对象，以存储该 `makeCounter` 运行时的变量。

因此，我们有两层嵌套的词法环境，就像上面的示例一样：

不同的是，在执行 `makeCounter()` 的过程中创建了一个仅占一行的嵌套函数：`return count++`。我们尚未运行它，仅创建了它。

所有的函数在“诞生”时都会记住创建它们的词法环境。从技术上讲，这里没有什么魔法：所有函数都有名为 `[[Environment]]` 的隐藏属性，该属性保存了对创建该函数的词法环境的引用。

因此，`counter.[[Environment]]` 有对 `{count: 0}` 词法环境的引用。这就是函数记住它创建于何处的方式，与函数被在哪儿调用无关。`[[Environment]]` 引用在函数创建时被设置并永久保存。

稍后，当调用 `counter()` 时，会为该调用创建一个新的词法环境，并且其外部词法环境引用获取于 `counter.[[Environment]]`：

现在，当 `counter()` 中的代码查找 `count` 变量时，它首先搜索自己的词法环境（为空，因为那里没有局部变量），然后是外部 `makeCounter()` 的词法环境，并且在哪里找到就在哪里修改。

**在变量所在的词法环境中更新变量。**

这是执行后的状态：

如果我们调用 `counter()` 多次，`count` 变量将在同一位置增加到 `2`，`3` 等。

**闭包**

开发者通常应该都知道“闭包”这个通用的编程术语。

[闭包](https://en.wikipedia.org/wiki/Closure_(computer_programming)) 是指内部函数总是可以访问其所在的外部函数中声明的变量和参数，即使在其外部函数被返回（寿命终结）了之后。在某些编程语言中，这是不可能的，或者应该以特殊的方式编写函数来实现。但是如上所述，在 JavaScript 中，所有函数都是天生闭包的（只有一个例外，将在 ["new Function" 语法](https://zh.javascript.info/new-function) 中讲到）。

也就是说：JavaScript 中的函数会自动通过隐藏的 `[[Environment]]` 属性记住创建它们的位置，所以它们都可以访问外部变量。

在面试时，前端开发者通常会被问到“什么是闭包？”，正确的回答应该是闭包的定义，并解释清楚为什么 JavaScript 中的所有函数都是闭包的，以及可能的关于 `[[Environment]]` 属性和词法环境原理的技术细节。

### [垃圾收集](https://zh.javascript.info/closure#la-ji-shou-ji)

通常，函数调用完成后，会将词法环境和其中的所有变量从内存中删除。因为现在没有任何对它们的引用了。与 JavaScript 中的任何其他对象一样，词法环境仅在可达时才会被保留在内存中。

但是，如果有一个嵌套的函数在函数结束后仍可达，则它将具有引用词法环境的 `[[Environment]]` 属性。

在下面这个例子中，即使在函数执行完成后，词法环境仍然可达。因此，此嵌套函数仍然有效。

例如：

```javascript
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // g.[[Environment]] 存储了对相应 f() 调用的词法环境的引用
```

请注意，如果多次调用 `f()`，并且返回的函数被保存，那么所有相应的词法环境对象也会保留在内存中。下面代码中有三个这样的函数：

```javascript
function f() {
  let value = Math.random();

  return function() { alert(value); };
}

// 数组中的 3 个函数，每个都与来自对应的 f() 的词法环境相关联
let arr = [f(), f(), f()];
```

当词法环境对象变得不可达时，它就会死去（就像其他任何对象一样）。换句话说，它仅在至少有一个嵌套函数引用它时才存在。

在下面的代码中，嵌套函数被删除后，其封闭的词法环境（以及其中的 `value`）也会被从内存中删除：

```javascript
function f() {
  let value = 123;

  return function() {
    alert(value);
  }
}

let g = f(); // 当 g 函数存在时，该值会被保留在内存中

g = null; // ……现在内存被清理了
```

#### [实际开发中的优化](https://zh.javascript.info/closure#shi-ji-kai-fa-zhong-de-you-hua)

正如我们所看到的，理论上当函数可达时，它外部的所有变量也都将存在。

但在实际中，JavaScript 引擎会试图优化它。它们会分析变量的使用情况，如果从代码中可以明显看出有未使用的外部变量，那么就会将其删除。

**在 V8（Chrome，Edge，Opera）中的一个重要的副作用是，此类变量在调试中将不可用。**

打开 Chrome 浏览器的开发者工具，并尝试运行下面的代码。

当代码执行暂停时，在控制台中输入 `alert(value)`。

```javascript
function f() {
  let value = Math.random();

  function g() {
    debugger; // 在 Console 中：输入 alert(value); No such variable!
  }

  return g;
}

let g = f();
g();
```

正如你所见的 —— No such variable! 理论上，它应该是可以访问的，但引擎把它优化掉了。

这可能会导致有趣的（如果不是那么耗时的）调试问题。其中之一 —— 我们可以看到的是一个同名的外部变量，而不是预期的变量：

```javascript
let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
    debugger; // 在 console 中：输入 alert(value); Surprise!
  }

  return g;
}

let g = f();
g();
```

V8 引擎的这个特性你真的应该知道。如果你要使用 Chrome/Edge/Opera 进行代码调试，迟早会遇到这样的问题。

这不是调试器的 bug，而是 V8 的一个特别的特性。也许以后会被修改。你始终可以通过运行本文中的示例来进行检查。

## 40.旧时的“var"变量

**本文用于帮助理解旧脚本**

本文所讲的内容对于帮助理解旧脚本很有用。

但这不是我们编写新代码的方式。

在本教程最开始那部分的 [变量](https://zh.javascript.info/variables) 这章中，我们提到了变量声明的三种方式：

1. `let`
2. `const`
3. `var`

`var` 声明与 `let` 相似。大部分情况下，我们可以用 `let` 代替 `var` 或者 `var` 代替 `let`，都能达到预期的效果：

```javascript
var message = "Hi";
alert(message); // Hi
```

但实际上 `var` 却是一头非常不同的，源自远古时代的怪兽。在现代脚本中一般不再使用它，但它仍然潜伏在旧脚本中。

如果你不打算接触这样的脚本，你甚至可以跳过本章或推迟阅读本章。

另一方面，了解将旧脚本从 `var` 迁移到 `let` 时的区别，以避免奇怪的错误，是很重要的。

### [“var” 没有块级作用域](https://zh.javascript.info/var#var-mei-you-kuai-ji-zuo-yong-yu)

用 `var` 声明的变量，不是函数作用域就是全局作用域。它们在代码块外也是可见的（译注：也就是说，`var` 声明的变量只有函数作用域和全局作用域，没有块级作用域）。

举个例子：

```javascript
if (true) {
  var test = true; // 使用 "var" 而不是 "let"
}

alert(test); // true，变量在 if 结束后仍存在
```

由于 `var` 会忽略代码块，因此我们有了一个全局变量 `test`。

如果我们在第二行使用 `let test` 而不是 `var test`，那么该变量将仅在 `if` 内部可见：

```javascript
if (true) {
  let test = true; // 使用 "let"
}

alert(test); // Error: test is not defined
```

对于循环也是这样的，`var` 声明的变量没有块级作用域也没有循环局部作用域：

```javascript
for (var i = 0; i < 10; i++) {
  var one = 1;
  // ...
}

alert(i);   // 10，"i" 在循环结束后仍可见，它是一个全局变量
alert(one); // 1，"one" 在循环结束后仍可见，它是一个全局变量
```

如果一个代码块位于函数内部，那么 `var` 声明的变量的作用域将为函数作用域：

```javascript
function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // 能正常工作
}

sayHi();
alert(phrase); // Error: phrase is not defined
```

可以看到，`var` 穿透了 `if`，`for` 和其它代码块。这是因为在早期的 JavaScript 中，块没有词法环境，而 `var` 就是这个时期的代表之一。

### [“var” 允许重新声明](https://zh.javascript.info/var#var-yun-xu-zhong-xin-sheng-ming)

如果我们用 `let` 在同一作用域下将同一个变量声明两次，则会出现错误：

```javascript
let user;
let user; // SyntaxError: 'user' has already been declared
```

使用 `var`，我们可以重复声明一个变量，不管多少次都行。如果我们对一个已经声明的变量使用 `var`，这条新的声明语句会被忽略：

```javascript
var user = "Pete";

var user = "John"; // 这个 "var" 无效（因为变量已经声明过了）
// ……不会触发错误

alert(user); // John
```

### [“var” 声明的变量，可以在其声明语句前被使用](https://zh.javascript.info/var#var-sheng-ming-de-bian-liang-ke-yi-zai-qi-sheng-ming-yu-ju-qian-bei-shi-yong)

当函数开始的时候，就会处理 `var` 声明（脚本启动对应全局变量）。

换言之，`var` 声明的变量会在函数开头被定义，与它在代码中定义的位置无关（这里不考虑定义在嵌套函数中的情况）。

那么看一下这段代码：

```javascript
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
sayHi();
```

……从技术上讲，它与下面这种情况是一样的（`var phrase` 被上移至函数开头）：

```javascript
function sayHi() {
  var phrase;

  phrase = "Hello";

  alert(phrase);
}
sayHi();
```

……甚至与这种情况也一样（记住，代码块是会被忽略的）：

```javascript
function sayHi() {
  phrase = "Hello"; // (*)

  if (false) {
    var phrase;
  }

  alert(phrase);
}
sayHi();
```

人们将这种行为称为“提升”（英文为 “hoisting” 或 “raising”），因为所有的 `var` 都被“提升”到了函数的顶部。

所以，在上面的例子中，`if (false)` 分支永远都不会执行，但没关系，它里面的 `var` 在函数刚开始时就被处理了，所以在执行 `(*)` 那行代码时，变量是存在的。

**声明会被提升，但是赋值不会。**

我们最好用例子来说明：

```javascript
function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();
```

`var phrase = "Hello"` 这行代码包含两个行为：

1. 使用 `var` 声明变量
2. 使用 `=` 给变量赋值。

声明在函数刚开始执行的时候（“提升”）就被处理了，但是赋值操作始终是在它出现的地方才起作用。所以这段代码实际上是这样工作的：

```javascript
function sayHi() {
  var phrase; // 在函数刚开始时进行变量声明

  alert(phrase); // undefined

  phrase = "Hello"; // ……赋值 — 当程序执行到这一行时。
}

sayHi();
```

因为所有的 `var` 声明都是在函数开头处理的，我们可以在任何地方引用它们。但是在它们被赋值之前都是 undefined。

上面两个例子中，`alert` 运行都不会报错，因为变量 `phrase` 是存在的。但是它还没有被赋值，所以显示 `undefiend`。

### [IIFE](https://zh.javascript.info/var#iife)

在之前，JavaScript 中只有 `var` 这一种声明变量的方式，并且这种方式声明的变量没有块级作用域，程序员们就发明了一种模仿块级作用域的方法。这种方法被称为“立即调用函数表达式”（immediately-invoked function expressions，IIFE）。

如今，我们不应该再使用 IIFE 了，但是你可以在旧脚本中找到它们。

IIFE 看起来像这样：

```javascript
(function() {

  var message = "Hello";

  alert(message); // Hello

})();
```

这里，创建了一个函数表达式并立即调用。因此，代码立即执行并拥有了自己的私有变量。

函数表达式被括号 `(function {...})` 包裹起来，因为当 JavaScript 引擎在主代码中遇到 `"function"` 时，它会把它当成一个函数声明的开始。但函数声明必须有一个函数名，所以这样的代码会导致错误：

```javascript
// 尝试声明并立即调用一个函数
function() { // <-- Error: Function statements require a function name

  var message = "Hello";

  alert(message); // Hello

}();
```

即使我们说：“好吧，那我们加一个名称吧”，但它仍然不工作，因为 JavaScript 不允许立即调用函数声明：

```javascript
// 下面的括号会导致语法错误
function go() {

}(); // <-- 不能立即调用函数声明
```

因此，需要使用圆括号把该函数表达式包起来，以告诉 JavaScript，这个函数是在另一个表达式的上下文中创建的，因此它是一个函数表达式：它不需要函数名，可以立即调用。

除了使用括号，还有其他方式可以告诉 JavaScript 在这我们指的是函数表达式：

```javascript
// 创建 IIFE 的方法

(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();
```

在上面的所有情况中，我们都声明了一个函数表达式并立即运行它。请再注意一下：如今我们没有理由来编写这样的代码。

### [总结](https://zh.javascript.info/var#zong-jie)

`var` 与 `let/const` 有两个主要的区别：

1. `var` 声明的变量没有块级作用域，它们仅在当前函数内可见，或者全局可见（如果变量是在函数外声明的）。
2. `var` 变量声明在函数开头就会被处理（脚本启动对应全局变量）。

涉及全局对象时，还有一个非常小的差异，我们将在下一章中介绍。

这些差异使 `var` 在大多数情况下都比 `let` 更糟糕。块级作用域是这么好的一个东西。这就是 `let` 在几年前就被写入到标准中的原因，并且现在（与 `const` 一起）已经成为了声明变量的主要方式。

## 50.全局变量

全局对象提供可在任何地方使用的变量和函数。默认情况下，这些全局变量内建于语言或环境中。

在浏览器中，它的名字是 “window”，对 Node.js 而言，它的名字是 “global”，其它环境可能用的是别的名字。

最近，`globalThis` 被作为全局对象的标准名称加入到了 JavaScript 中，所有环境都应该支持该名称。所有主流浏览器都支持它。

假设我们的环境是浏览器，我们将在这儿使用 “window”。如果你的脚本可能会用来在其他环境中运行，则最好使用 `globalThis`。

全局对象的所有属性都可以被直接访问：

```javascript
alert("Hello");
// 等同于
window.alert("Hello");
```

在浏览器中，使用 `var`（而不是 `let/const`！）声明的全局函数和变量会成为全局对象的属性。

```javascript
var gVar = 5;

alert(window.gVar); // 5（成为了全局对象的属性）
```

具有与函数声明相同的效果（在主代码流中具有 `function` 关键字的语句，而不是函数表达式）。

请不要依赖它！这种行为是出于兼容性而存在的。现代脚本通过使用 [JavaScript modules](https://zh.javascript.info/modules) 来避免这种情况的发生。

如果我们使用 `let`，就不会发生这种情况：

```javascript
let gLet = 5;

alert(window.gLet); // undefined（不会成为全局对象的属性）
```

如果一个值非常重要，以至于你想使它在全局范围内可用，那么可以直接将其作为属性写入：

```javascript
// 将当前用户信息全局化，以允许所有脚本访问它
window.currentUser = {
  name: "John"
};

// 代码中的另一个位置
alert(currentUser.name);  // John

// 或者，如果我们有一个名为 "currentUser" 的局部变量
// 从 window 显式地获取它（这是安全的！）
alert(window.currentUser.name); // John
```

也就是说，一般不建议使用全局变量。全局变量应尽可能的少。与使用外部变量或全局变量相比，函数获取“输入”变量并产生特定“输出”的代码设计更加清晰，不易出错且更易于测试。

### [使用 polyfills](https://zh.javascript.info/global-object#shi-yong-polyfills)

我们使用全局对象来测试对现代语言功能的支持。

例如，测试是否存在内建的 `Promise` 对象（在版本特别旧的浏览器中不存在）：

```javascript
if (!window.Promise) {
  alert("Your browser is really old!");
}
```

如果没有（例如，我们使用的是旧版浏览器），那么我们可以创建 “polyfills”：添加环境不支持但在现代标准中存在的功能。

```javascript
if (!window.Promise) {
  window.Promise = ... // 定制实现现代语言功能
}
```

### [总结](https://zh.javascript.info/global-object#zong-jie)

- 全局对象包含应该在任何位置都可见的变量。

  其中包括 JavaScript 的内建方法，例如 “Array” 和环境特定（environment-specific）的值，例如 `window.innerHeight` — 浏览器中的窗口高度。

- 全局对象有一个通用名称 `globalThis`。

  ……但是更常见的是使用“老式”的环境特定（environment-specific）的名字，例如 `window`（浏览器）和 `global`（Node.js）。

- 仅当值对于我们的项目而言确实是全局的时，才应将其存储在全局对象中。并保持其数量最少。

- 在浏览器中，除非我们使用 [modules](https://zh.javascript.info/modules)，否则使用 `var` 声明的全局函数和变量会成为全局对象的属性。

- 为了使我们的代码面向未来并更易于理解，我们应该使用直接的方式访问全局对象的属性，如 `window.x`。

## 51.函数对象，NFE

我们已经知道，在 JavaScript 中，函数就是值。

JavaScript 中的每个值都有一种类型，那么函数是什么类型呢？

在 JavaScript 中，函数就是对象。

一个容易理解的方式是把函数想象成可被调用的“行为对象（action object）”。我们不仅可以调用它们，还能把它们当作对象来处理：增/删属性，按引用传递等。

### [属性 “name”](https://zh.javascript.info/function-object#shu-xing-name)

函数对象包含一些便于使用的属性。

比如，一个函数的名字可以通过属性 “name” 来访问：

```javascript
function sayHi() {
  alert("Hi");
}

alert(sayHi.name); // sayHi
```

更有趣的是，名称赋值的逻辑很智能。即使函数被创建时没有名字，名称赋值的逻辑也能给它赋予一个正确的名字，然后进行赋值：

```javascript
let sayHi = function() {
  alert("Hi");
};

alert(sayHi.name); // sayHi（有名字！）
```

当以默认值的方式完成了赋值时，它也有效：

```javascript
function f(sayHi = function() {}) {
  alert(sayHi.name); // sayHi（生效了！）
}

f();
```

规范中把这种特性叫做「上下文命名」。如果函数自己没有提供，那么在赋值中，会根据上下文来推测一个。

对象方法也有名字：

```javascript
let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}

alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye
```

这没有什么神奇的。有时会出现无法推测名字的情况。此时，属性 `name` 会是空，像这样：

```javascript
// 函数是在数组中创建的
let arr = [function() {}];

alert( arr[0].name ); // <空字符串>
// 引擎无法设置正确的名字，所以没有值
```

而实际上，大多数函数都是有名字的。

### [属性 “length”](https://zh.javascript.info/function-object#shu-xing-length)

还有另一个内建属性 “length”，它返回函数入参的个数，比如：

```javascript
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2
```

可以看到，rest 参数不参与计数。

属性 `length` 有时在操作其它函数的函数中用于做 [内省/运行时检查（introspection）](https://zh.wikipedia.org/wiki/内省_(计算机科学))。

比如，下面的代码中函数 `ask` 接受一个询问答案的参数 `question` 和可能包含任意数量 `handler` 的参数 `...handlers`。

当用户提供了自己的答案后，函数会调用那些 `handlers`。我们可以传入两种 `handlers`：

- 一种是无参函数，它仅在用户回答给出积极的答案时被调用。
- 一种是有参函数，它在两种情况都会被调用，并且返回一个答案。

为了正确地调用 `handler`，我们需要检查 `handler.length` 属性。

我们的想法是，我们用一个简单的无参数的 `handler` 语法来处理积极的回答（最常见的变体），但也要能够提供通用的 handler：

```javascript
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// 对于积极的回答，两个 handler 都会被调用
// 对于负面的回答，只有第二个 handler 被调用
ask("Question?", () => alert('You said yes'), result => alert(result));
```

这种特别的情况就是所谓的 [多态性](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) —— 根据参数的类型，或者根据在我们的具体情景下的 `length` 来做不同的处理。这种思想在 JavaScript 的库里有应用。

### [自定义属性](https://zh.javascript.info/function-object#zi-ding-yi-shu-xing)

我们也可以添加我们自己的属性。

这里我们添加了 `counter` 属性，用来跟踪总的调用次数：

```javascript
function sayHi() {
  alert("Hi");

  // 计算调用次数
  sayHi.counter++;
}
sayHi.counter = 0; // 初始值

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times
```

**属性不是变量**

被赋值给函数的属性，比如 `sayHi.counter = 0`，**不会** 在函数内定义一个局部变量 `counter`。换句话说，属性 `counter` 和变量 `let counter` 是毫不相关的两个东西。

我们可以把函数当作对象，在它里面存储属性，但是这对它的执行没有任何影响。变量不是函数属性，反之亦然。它们之间是平行的。

函数属性有时会用来替代闭包。例如，我们可以使用函数属性将 [变量作用域，闭包](https://zh.javascript.info/closure) 章节中 counter 函数的例子进行重写：

```javascript
function makeCounter() {
  // 不需要这个了
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
```

现在 `count` 被直接存储在函数里，而不是它外部的词法环境。

那么它和闭包谁好谁赖？

两者最大的不同就是如果 `count` 的值位于外层（函数）变量中，那么外部的代码无法访问到它，只有嵌套的函数可以修改它。而如果它是绑定到函数的，那么就很容易：

```javascript
function makeCounter() {

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();

counter.count = 10;
alert( counter() ); // 10
```

所以，选择哪种实现方式取决于我们的需求是什么。

### [命名函数表达式](https://zh.javascript.info/function-object#ming-ming-han-shu-biao-da-shi)

命名函数表达式（NFE，Named Function Expression），指带有名字的函数表达式的术语。

例如，让我们写一个普通的函数表达式：

```javascript
let sayHi = function(who) {
  alert(`Hello, ${who}`);
};
```

然后给它加一个名字：

```javascript
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};
```

我们这里得到了什么吗？为它添加一个 `"func"` 名字的目的是什么？

首先请注意，它仍然是一个函数表达式。在 `function` 后面加一个名字 `"func"` 没有使它成为一个函数声明，因为它仍然是作为赋值表达式中的一部分被创建的。

添加这个名字当然也没有打破任何东西。

函数依然可以通过 `sayHi()` 来调用：

```javascript
let sayHi = function func(who) {
  alert(`Hello, ${who}`);
};

sayHi("John"); // Hello, John
```

关于名字 `func` 有两个特殊的地方，这就是添加它的原因：

1. 它允许函数在内部引用自己。
2. 它在函数外是不可见的。

例如，下面的函数 `sayHi` 会在没有入参 `who` 时，以 `"Guest"` 为入参调用自己：

```javascript
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // 使用 func 再次调用函数自身
  }
};

sayHi(); // Hello, Guest

// 但这不工作：
func(); // Error, func is not defined（在函数外不可见）
```

我们为什么使用 `func` 呢？为什么不直接使用 `sayHi` 进行嵌套调用？

当然，在大多数情况下我们可以这样做：

```javascript
let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest");
  }
};
```

上面这段代码的问题在于 `sayHi` 的值可能会被函数外部的代码改变。如果该函数被赋值给另外一个变量（译注：也就是原变量被修改），那么函数就会开始报错：

```javascript
let sayHi = function(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    sayHi("Guest"); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error，嵌套调用 sayHi 不再有效！
```

发生这种情况是因为该函数从它的外部词法环境获取 `sayHi`。没有局部的 `sayHi` 了，所以使用外部变量。而当调用时，外部的 `sayHi` 是 `null`。

我们给函数表达式添加的可选的名字，正是用来解决这类问题的。

让我们使用它来修复我们的代码：

```javascript
let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // 现在一切正常
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest（嵌套调用有效）
```

现在它可以正常运行了，因为名字 `func` 是函数局部域的。它不是从外部获取的（而且它对外部也是不可见的）。规范确保它只会引用当前函数。

外部代码仍然有该函数的 `sayHi` 或 `welcome` 变量。而且 `func` 是一个“内部函数名”，可用于函数在自身内部进行自调用。

**函数声明没有这个东西**

这里所讲的“内部名”特性只针对函数表达式，而不是函数声明。对于函数声明，没有用来添加“内部”名的语法。

有时，当我们需要一个可靠的内部名时，这就成为了你把函数声明重写成函数表达式的理由了。

### [总结](https://zh.javascript.info/function-object#zong-jie)

函数就是对象。

我们介绍了它们的一些属性：

- `name` —— 函数的名字。通常取自函数定义，但如果函数定义时没设定函数名，JavaScript 会尝试通过函数的上下文猜一个函数名（例如把赋值的变量名取为函数名）。
- `length` —— 函数定义时的入参的个数。Rest 参数不参与计数。

如果函数是通过函数表达式的形式被声明的（不是在主代码流里），并且附带了名字，那么它被称为命名函数表达式（Named Function Expression）。这个名字可以用于在该函数内部进行自调用，例如递归调用等。

此外，函数可以带有额外的属性。很多知名的 JavaScript 库都充分利用了这个功能。

它们创建一个“主”函数，然后给它附加很多其它“辅助”函数。例如，[jQuery](https://jquery.com/) 库创建了一个名为 `$` 的函数。[lodash](https://lodash.com/) 库创建一个 `_` 函数，然后为其添加了 `_.add`、`_.keyBy` 以及其它属性（想要了解更多内容，参查阅 [docs](https://lodash.com/docs)）。实际上，它们这么做是为了减少对全局空间的污染，这样一个库就只会有一个全局变量。这样就降低了命名冲突的可能性。

所以，一个函数本身可以完成一项有用的工作，还可以在自身的属性中附带许多其他功能。

## 52. new Function

还有一种创建函数的方法。它很少被使用，但有些时候只能选择它。

### [语法](https://zh.javascript.info/new-function#yu-fa)

创建函数的语法：

```javascript
let func = new Function ([arg1, arg2, ...argN], functionBody);
```

该函数是通过使用参数 `arg1...argN` 和给定的 `functionBody` 创建的。

下面这个例子可以帮助你理解创建语法。这是一个带有两个参数的函数：

```javascript
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3
```

这里有一个没有参数的函数，只有函数体：

```javascript
let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
```

与我们已知的其他方法相比，这种方法最大的不同在于，它实际上是通过运行时通过参数传递过来的字符串创建的。

以前的所有声明方法都需要我们 —— 程序员，在脚本中编写函数的代码。

但是 `new Function` 允许我们将任意字符串变为函数。例如，我们可以从服务器接收一个新的函数并执行它：

```javascript
let str = ... 动态地接收来自服务器的代码 ...

let func = new Function(str);
func();
```

使用 `new Function` 创建函数的应用场景非常特殊，比如在复杂的 Web 应用程序中，我们需要从服务器获取代码或者动态地从模板编译函数时才会使用。

### [闭包](https://zh.javascript.info/new-function#bi-bao)

通常，闭包是指使用一个特殊的属性 `[[Environment]]` 来记录函数自身的创建时的环境的函数。它具体指向了函数创建时的词法环境。（我们在 [变量作用域，闭包](https://zh.javascript.info/closure) 一章中对此进行了详细的讲解）。

但是如果我们使用 `new Function` 创建一个函数，那么该函数的 `[[Environment]]` 并不指向当前的词法环境，而是指向全局环境。

因此，此类函数无法访问外部（outer）变量，只能访问全局变量。

```javascript
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined
```

将其与常规行为进行比较：

```javascript
function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test"，从 getFunc 的词法环境中获取的
```

`new Function` 的这种特性看起来有点奇怪，不过在实际中却非常实用。

想象以下我们必须通过一个字符串来创建一个函数。在编写脚本时我们不会知道该函数的代码（这也就是为什么我们不用常规方法创建函数），但在执行过程中会知道了。我们可能会从服务器或其他来源获取它。

我们的新函数需要和主脚本进行交互。

如果这个函数能够访问外部（outer）变量会怎么样？

问题在于，在将 JavaScript 发布到生产环境之前，需要使用 **压缩程序（minifier）** 对其进行压缩 —— 一个特殊的程序，通过删除多余的注释和空格等压缩代码 —— 更重要的是，将局部变量命名为较短的变量。

例如，如果一个函数有 `let userName`，压缩程序会把它替换为 `let a`（如果 a 已被占用了，那就使用其他字符），剩余的局部变量也会被进行类似的替换。一般来说这样的替换是安全的，毕竟这些变量是函数内的局部变量，函数外的任何东西都无法访问它。在函数内部，压缩程序会替换所有使用了使用了这些变量的代码。压缩程序很聪明，它会分析代码的结构，而不是呆板地查找然后替换，因此它不会“破坏”你的程序。

但是在这种情况下，如果使 `new Function` 可以访问自身函数以外的变量，它也很有可能无法找到重命名的 `userName`，这是因为新函数的创建发生在代码压缩以后，变量名已经被替换了。

**即使我们可以在 `new Function` 中访问外部词法环境，我们也会受挫于压缩程序。**

此外，这样的代码在架构上很差并且容易出错。

当我们需要向 `new Function` 创建出的新函数传递数据时，我们必须显式地通过参数进行传递。

### [总结](https://zh.javascript.info/new-function#zong-jie)

语法：

```javascript
let func = new Function ([arg1, arg2, ...argN], functionBody);
```

由于历史原因，参数也可以按逗号分隔符的形式给出。

以下三种声明的含义相同：

```javascript
new Function('a', 'b', 'return a + b'); // 基础语法
new Function('a,b', 'return a + b'); // 逗号分隔
new Function('a , b', 'return a + b'); // 逗号和空格分隔
```

使用 `new Function` 创建的函数，它的 `[[Environment]]` 指向全局词法环境，而不是函数所在的外部词法环境。因此，我们不能在 `new Function` 中直接使用外部变量。不过这样是好事，这有助于降低我们代码出错的可能。并且，从代码架构上讲，显式地使用参数传值是一种更好的方法，并且避免了与使用压缩程序而产生冲突的问题。

## 53.调度:setTimeout 和setInterval

有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行。这就是所谓的“计划调用（scheduling a call）”。

目前有两种方式可以实现：

- `setTimeout` 允许我们将函数推迟到一段时间间隔之后再执行。
- `setInterval` 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该时间间隔连续重复运行该函数。

这两个方法并不在 JavaScript 的规范中。但是大多数运行环境都有内建的调度程序，并且提供了这些方法。目前来讲，所有浏览器以及 Node.js 都支持这两个方法。

### [setTimeout](https://zh.javascript.info/settimeout-setinterval#settimeout)

语法：

```javascript
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
```

参数说明：

- `func|code`

  想要执行的函数或代码字符串。 一般传入的都是函数。由于某些历史原因，支持传入代码字符串，但是不建议这样做。

- `delay`

  执行前的延时，以毫秒为单位（1000 毫秒 = 1 秒），默认值是 0；

- `arg1`，`arg2`…

  要传入被执行函数（或代码字符串）的参数列表（IE9 以下不支持）

例如，在下面这个示例中，`sayHi()` 方法会在 1 秒后执行：

```javascript
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);
```

带参数的情况：

```javascript
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John
```

如果第一个参数位传入的是字符串，JavaScript 会自动为其创建一个函数。

所以这么写也是可以的：

```javascript
setTimeout("alert('Hello')", 1000);
```

但是，不建议使用字符串，我们可以使用箭头函数代替它们，如下所示：

```javascript
setTimeout(() => alert('Hello'), 1000);
```

**传入一个函数，但不要执行它**

新手开发者有时候会误将一对括号 `()` 加在函数后面：

```javascript
// 错的！
setTimeout(sayHi(), 1000);
```

这样不行，因为 `setTimeout` 期望得到一个对函数的引用。而这里的 `sayHi()` 很明显是在执行函数，所以实际上传入 `setTimeout` 的是 **函数的执行结果**。在这个例子中，`sayHi()` 的执行结果是 `undefined`（也就是说函数没有返回任何结果），所以实际上什么也没有调度。

#### [用 clearTimeout 来取消调度](https://zh.javascript.info/settimeout-setinterval#yong-cleartimeout-lai-qu-xiao-tiao-du)

`setTimeout` 在调用时会返回一个“定时器标识符（timer identifier）”，在我们的例子中是 `timerId`，我们可以使用它来取消执行。

取消调度的语法：

```javascript
let timerId = setTimeout(...);
clearTimeout(timerId);
```

在下面的代码中，我们对一个函数进行了调度，紧接着取消了这次调度（中途反悔了）。所以最后什么也没发生：

```javascript
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // 定时器标识符

clearTimeout(timerId);
alert(timerId); // 还是这个标识符（并没有因为调度被取消了而变成 null）
```

从 `alert` 的输出来看，在浏览器中，定时器标识符是一个数字。在其他环境中，可能是其他的东西。例如 Node.js 返回的是一个定时器对象，这个对象包含一系列方法。

我再重申一遍，这些方法没有统一的规范定义，所以这没什么问题。

针对浏览器环境，定时器在 HTML5 的标准中有详细描述，详见 [timers section](https://www.w3.org/TR/html5/webappapis.html#timers)。

### [setInterval](https://zh.javascript.info/settimeout-setinterval#setinterval)

`setInterval` 方法和 `setTimeout` 的语法相同：

```javascript
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
```

所有参数的意义也是相同的。不过与 `setTimeout` 只执行一次不同，`setInterval` 是每间隔给定的时间周期性执行。

想要阻止后续调用，我们需要调用 `clearInterval(timerId)`。

下面的例子将每间隔 2 秒就会输出一条消息。5 秒之后，输出停止：

```javascript
// 每 2 秒重复一次
let timerId = setInterval(() => alert('tick'), 2000);

// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

**alert 弹窗显示的时候计时器依然在进行计时**

在大多数浏览器中，包括 Chrome 和 Firefox，在显示 `alert/confirm/prompt` 弹窗时，内部的定时器仍旧会继续“嘀嗒”。

所以，在运行上面的代码时，如果在一定时间内没有关掉 `alert` 弹窗，那么在你关闭弹窗后，下一个 `alert` 会立即显示。两次 `alert` 之间的时间间隔将小于 2 秒。

### [嵌套的 setTimeout](https://zh.javascript.info/settimeout-setinterval#qian-tao-de-settimeout)

周期性调度有两种方式。

一种是使用 `setInterval`，另外一种就是嵌套的 `setTimeout`，就像这样：

```javascript
/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
  alert('tick');
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
```

上面这个 `setTimeout` 在当前这一次函数执行完时 `(*)` 立即调度下一次调用。

嵌套的 `setTimeout` 要比 `setInterval` 灵活得多。采用这种方式可以根据当前执行结果来调度下一次调用，因此下一次调用可以与当前这一次不同。

例如，我们要实现一个服务（server），每间隔 5 秒向服务器发送一个数据请求，但如果服务器过载了，那么就要降低请求频率，比如将间隔增加到 10、20、40 秒等。

以下是伪代码：

```javascript
let delay = 5000;

let timerId = setTimeout(function request() {
  ...发送请求...

  if (request failed due to server overload) {
    // 下一次执行的间隔是当前的 2 倍
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);
```

并且，如果我们调度的函数占用大量的 CPU，那么我们可以测量执行所需要花费的时间，并安排下次调用是应该提前还是推迟。

**嵌套的 `setTimeout` 能够精确地设置两次执行之间的延时，而 `setInterval` 却不能。**

下面来比较这两个代码片段。第一个使用的是 `setInterval`：

```javascript
let i = 1;
setInterval(function() {
  func(i++);
}, 100);
```

第二个使用的是嵌套的 `setTimeout`：

```javascript
let i = 1;
setTimeout(function run() {
  func(i++);
  setTimeout(run, 100);
}, 100);
```

对 `setInterval` 而言，内部的调度程序会每间隔 100 毫秒执行一次 `func(i++)`：

注意到了吗？

**使用 `setInterval` 时，`func` 函数的实际调用间隔要比代码中设定的时间间隔要短！**

这也是正常的，因为 `func` 的执行所花费的时间“消耗”了一部分间隔时间。

也可能出现这种情况，就是 `func` 的执行所花费的时间比我们预期的时间更长，并且超出了 100 毫秒。

在这种情况下，JavaScript 引擎会等待 `func` 执行完成，然后检查调度程序，如果时间到了，则 **立即** 再次执行它。

极端情况下，如果函数每次执行时间都超过 `delay` 设置的时间，那么每次调用之间将完全没有停顿。

这是嵌套的 `setTimeout` 的示意图：

**嵌套的 `setTimeout` 就能确保延时的固定（这里是 100 毫秒）。**

这是因为下一次调用是在前一次调用完成时再调度的。

**垃圾回收和 setInterval/setTimeout 回调（callback）**

当一个函数传入 `setInterval/setTimeout` 时，将为其创建一个内部引用，并保存在调度程序中。这样，即使这个函数没有其他引用，也能防止垃圾回收器（GC）将其回收。

```javascript
// 在调度程序调用这个函数之前，这个函数将一直存在于内存中
setTimeout(function() {...}, 100);
```

对于 `setInterval`，传入的函数也是一直存在于内存中，直到 `clearInterval` 被调用。

这里还要提到一个副作用。如果函数引用了外部变量（译注：闭包），那么只要这个函数还存在，外部变量也会随之存在。它们可能比函数本身占用更多的内存。因此，当我们不再需要调度函数时，最好取消它，即使这是个（占用内存）很小的函数。

### [零延时的 setTimeout](https://zh.javascript.info/settimeout-setinterval#ling-yan-shi-de-settimeout)

这儿有一种特殊的用法：`setTimeout(func, 0)`，或者仅仅是 `setTimeout(func)`。

这样调度可以让 `func` 尽快执行。但是只有在当前正在执行的脚本执行完成后，调度程序才会调用它。

也就是说，该函数被调度在当前脚本执行完成“之后”立即执行。

例如，下面这段代码会先输出 “Hello”，然后立即输出 “World”：

```javascript
setTimeout(() => alert("World"));

alert("Hello");
```

第一行代码“将调用安排到日程（calendar）0 毫秒处”。但是调度程序只有在当前脚本执行完毕时才会去“检查日程”，所以先输出 `"Hello"`，然后才输出 `"World"`。

此外，还有与浏览器相关的 0 延时 timeout 的高级用例，我们将在 [事件循环：微任务和宏任务](https://zh.javascript.info/event-loop) 一章中详细讲解。

**零延时实际上不为零（在浏览器中）**

在浏览器环境下，嵌套定时器的运行频率是受限制的。根据 [HTML5 标准](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) 所讲：“经过 5 重嵌套定时器之后，时间间隔被强制设定为至少 4 毫秒”。

让我们用下面的示例来看看这到底是什么意思。其中 `setTimeout` 调用会以零延时重新调度自身的调用。每次调用都会在 `times` 数组中记录上一次调用的实际时间。那么真正的延迟是什么样的？让我们来看看：

```javascript
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // 保存前一个调用的延时

  if (start + 100 < Date.now()) alert(times); // 100 毫秒之后，显示延时信息
  else setTimeout(run); // 否则重新调度
});

// 输出示例：
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
```

第一次，定时器是立即执行的（正如规范里所描述的那样），接下来我们可以看到 `9, 15, 20, 24...`。两次调用之间必须经过 4 毫秒以上的强制延时。（译注：这里作者没说清楚，timer 数组里存放的是每次定时器运行的时刻与 start 的差值，所以数字只会越来越大，实际上前后调用的延时是数组值的差值。示例中前几次都是 1，所以延时为 0）

如果我们使用 `setInterval` 而不是 `setTimeout`，也会发生类似的情况：`setInterval(f)` 会以零延时运行几次 `f`，然后以 4 毫秒以上的强制延时运行。

这个限制来自“远古时代”，并且许多脚本都依赖于此，所以这个机制也就存在至今。

对于服务端的 JavaScript，就没有这个限制，并且还有其他调度即时异步任务的方式。例如 Node.js 的 [setImmediate](https://nodejs.org/api/timers.html#timers_setimmediate_callback_args)。因此，这个提醒只是针对浏览器环境的。

### [总结](https://zh.javascript.info/settimeout-setinterval#zong-jie)

- `setTimeout(func, delay, ...args)` 和 `setInterval(func, delay, ...args)` 方法允许我们在 `delay` 毫秒之后运行 `func` 一次或以 `delay` 毫秒为时间间隔周期性运行 `func`。
- 要取消函数的执行，我们应该调用 `clearInterval/clearTimeout`，并将 `setInterval/setTimeout` 返回的值作为入参传入。
- 嵌套的 `setTimeout` 比 `setInterval` 用起来更加灵活，允许我们更精确地设置两次执行之间的时间。
- 零延时调度 `setTimeout(func, 0)`（与 `setTimeout(func)` 相同）用来调度需要尽快执行的调用，但是会在当前脚本执行完成后进行调用。
- 浏览器会将 `setTimeout` 或 `setInterval` 的五层或更多层嵌套调用（调用五次之后）的最小延时限制在 4ms。这是历史遗留问题。

请注意，所有的调度方法都不能 **保证** 确切的延时。

例如，浏览器内的计时器可能由于许多原因而变慢：

- CPU 过载。
- 浏览器页签处于后台模式。
- 笔记本电脑用的是电池供电（译注：使用电池供电会以降低性能为代价提升续航）。

所有这些因素，可能会将定时器的最小计时器分辨率（最小延迟）增加到 300ms 甚至 1000ms，具体以浏览器及其设置为准。

## 54.装饰器模式和转发：call/apply

JavaScript 在处理函数时提供了非凡的灵活性。它们可以被传递，用作对象，现在我们将看到如何在它们之间 **转发（forward）** 调用并 **装饰（decorate）** 它们。

### [透明缓存](https://zh.javascript.info/call-apply-decorators#tou-ming-huan-cun)

假设我们有一个 CPU 重负载的函数 `slow(x)`，但它的结果是稳定的。换句话说，对于相同的 `x`，它总是返回相同的结果。

如果经常调用该函数，我们可能希望将结果缓存（记住）下来，以避免在重新计算上花费额外的时间。

但是我们不是将这个功能添加到 `slow()` 中，而是创建一个包装器（wrapper）函数，该函数增加了缓存功能。正如我们将要看到的，这样做有很多好处。

下面是代码和解释：

```javascript
function slow(x) {
  // 这里可能会有重负载的 CPU 密集型工作
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // 如果缓存中有对应的结果
      return cache.get(x); // 从缓存中读取结果
    }

    let result = func(x);  // 否则就调用 func

    cache.set(x, result);  // 然后将结果缓存（记住）下来
    return result;
  };
}

slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) 被缓存下来了
alert( "Again: " + slow(1) ); // 一样的

alert( slow(2) ); // slow(2) 被缓存下来了
alert( "Again: " + slow(2) ); // 和前面一行结果相同
```

在上面的代码中，`cachingDecorator` 是一个 **装饰器（decorator）**：一个特殊的函数，它接受另一个函数并改变它的行为。

其思想是，我们可以为任何函数调用 `cachingDecorator`，它将返回缓存包装器。这很棒啊，因为我们有很多函数可以使用这样的特性，而我们需要做的就是将 `cachingDecorator` 应用于它们。

通过将缓存与主函数代码分开，我们还可以使主函数代码变得更简单。

`cachingDecorator(func)` 的结果是一个“包装器”：`function(x)` 将 `func(x)` 的调用“包装”到缓存逻辑中：

从外部代码来看，包装的 `slow` 函数执行的仍然是与之前相同的操作。它只是在其行为上添加了缓存功能。

总而言之，使用分离的 `cachingDecorator` 而不是改变 `slow` 本身的代码有几个好处：

- `cachingDecorator` 是可重用的。我们可以将它应用于另一个函数。
- 缓存逻辑是独立的，它没有增加 `slow` 本身的复杂性（如果有的话）。
- 如果需要，我们可以组合多个装饰器（其他装饰器将遵循同样的逻辑）。

### [使用 “func.call” 设定上下文](https://zh.javascript.info/call-apply-decorators#shi-yong-funccall-she-ding-shang-xia-wen)

上面提到的缓存装饰器不适用于对象方法。

例如，在下面的代码中，`worker.slow()` 在装饰后停止工作：

```javascript
// 我们将对 worker.slow 的结果进行缓存
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // 可怕的 CPU 过载任务
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

// 和之前例子中的代码相同
function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x); // (**)
    cache.set(x, result);
    return result;
  };
}

alert( worker.slow(1) ); // 原始方法有效

worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存

alert( worker.slow(2) ); // 蛤！Error: Cannot read property 'someMethod' of undefined
```

错误发生在试图访问 `this.someMethod` 并失败了的 `(*)` 行中。你能看出来为什么吗？

原因是包装器将原始函数调用为 `(**)` 行中的 `func(x)`。并且，当这样调用时，函数将得到 `this = undefined`。

如果尝试运行下面这段代码，我们会观察到类似的问题：

```javascript
let func = worker.slow;
func(2);
```

因此，包装器将调用传递给原始方法，但没有上下文 `this`。因此，发生了错误。

让我们来解决这个问题。

有一个特殊的内建函数方法 [func.call(context, …args)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Function/call)，它允许调用一个显式设置 `this` 的函数。

语法如下：

```javascript
func.call(context, arg1, arg2, ...)
```

它运行 `func`，提供的第一个参数作为 `this`，后面的作为参数（arguments）。

简单地说，这两个调用几乎相同：

```javascript
func(1, 2, 3);
func.call(obj, 1, 2, 3)
```

它们调用的都是 `func`，参数是 `1`、`2` 和 `3`。唯一的区别是 `func.call` 还会将 `this` 设置为 `obj`。

例如，在下面的代码中，我们在不同对象的上下文中调用 `sayHi`：`sayHi.call(user)` 运行 `sayHi` 并提供了 `this=user`，然后下一行设置 `this=admin`：

```javascript
function sayHi() {
  alert(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// 使用 call 将不同的对象传递为 "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin
```

在这里我们用带有给定上下文和 phrase 的 `call` 调用 `say`：

```javascript
function say(phrase) {
  alert(this.name + ': ' + phrase);
}

let user = { name: "John" };

// user 成为 this，"Hello" 成为第一个参数
say.call( user, "Hello" ); // John: Hello
```

在我们的例子中，我们可以在包装器中使用 `call` 将上下文传递给原始函数：

```javascript
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // 现在 "this" 被正确地传递了
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow); // 现在对其进行缓存

alert( worker.slow(2) ); // 工作正常
alert( worker.slow(2) ); // 工作正常，没有调用原始函数（使用的缓存）
```

现在一切都正常工作了。

为了让大家理解地更清晰一些，让我们更深入地看看 `this` 是如何被传递的：

1. 在经过装饰之后，`worker.slow` 现在是包装器 `function (x) { ... }`。
2. 因此，当 `worker.slow(2)` 执行时，包装器将 `2` 作为参数，并且 `this=worker`（它是点符号 `.` 之前的对象）。
3. 在包装器内部，假设结果尚未缓存，`func.call(this, x)` 将当前的 `this`（`=worker`）和当前的参数（`=2`）传递给原始方法。

### [传递多个参数](https://zh.javascript.info/call-apply-decorators#chuan-di-duo-ge-can-shu)

现在让我们把 `cachingDecorator` 写得更加通用。到现在为止，它只能用于单参数函数。

现在如何缓存多参数 `worker.slow` 方法呢？

```javascript
let worker = {
  slow(min, max) {
    return min + max; // scary CPU-hogger is assumed
  }
};

// 应该记住相同参数的调用
worker.slow = cachingDecorator(worker.slow);
```

之前，对于单个参数 `x`，我们可以只使用 `cache.set(x, result)` 来保存结果，并使用 `cache.get(x)` 来检索并获取结果。但是现在，我们需要记住 **参数组合** `(min,max)` 的结果。原生的 `Map` 仅将单个值作为键（key）。

这儿有许多解决方案可以实现：

1. 实现一个新的（或使用第三方的）类似 map 的更通用并且允许多个键的数据结构。
2. 使用嵌套 map：`cache.set(min)` 将是一个存储（键值）对 `(max, result)` 的 `Map`。所以我们可以使用 `cache.get(min).get(max)` 来获取 `result`。
3. 将两个值合并为一个。为了灵活性，我们可以允许为装饰器提供一个“哈希函数”，该函数知道如何将多个值合并为一个值。

对于许多实际应用，第三种方式就足够了，所以我们就用这个吧。

当然，我们需要传入的不仅是 `x`，还需要传入 `func.call` 的所有参数。让我们回想一下，在 `function()` 中我们可以得到一个包含所有参数的伪数组（pseudo-array）`arguments`，那么 `func.call(this, x)` 应该被替换为 `func.call(this, ...arguments)`。

这是一个更强大的 `cachingDecorator`：

```javascript
let worker = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator(func, hash) {
  let cache = new Map();
  return function() {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // (**)

    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker.slow = cachingDecorator(worker.slow, hash);

alert( worker.slow(3, 5) ); // works
alert( "Again " + worker.slow(3, 5) ); // same (cached)
```

现在这个包装器可以处理任意数量的参数了（尽管哈希函数还需要被进行调整以允许任意数量的参数。一种有趣的处理方法将在下面讲到）。

这里有两个变化：

- 在 `(*)` 行中它调用 `hash` 来从 `arguments` 创建一个单独的键。这里我们使用一个简单的“连接”函数，将参数 `(3, 5)` 转换为键 `"3,5"`。更复杂的情况可能需要其他哈希函数。
- 然后 `(**)` 行使用 `func.call(this, ...arguments)` 将包装器获得的上下文和所有参数（不仅仅是第一个参数）传递给原始函数。

### [func.apply](https://zh.javascript.info/call-apply-decorators#funcapply)

我们可以使用 `func.apply(this, arguments)` 代替 `func.call(this, ...arguments)`。

内建方法 [func.apply](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 的语法是：

```javascript
func.apply(context, args)
```

它运行 `func` 设置 `this=context`，并使用类数组对象 `args` 作为参数列表（arguments）。

`call` 和 `apply` 之间唯一的语法区别是，`call` 期望一个参数列表，而 `apply` 期望一个包含这些参数的类数组对象。

因此，这两个调用几乎是等效的：

```javascript
func.call(context, ...args); // 使用 spread 语法将数组作为列表传递
func.apply(context, args);   // 与使用 call 相同
```

这里只有很小的区别：

- Spread 语法 `...` 允许将 **可迭代对象** `args` 作为列表传递给 `call`。
- `apply` 仅接受 **类数组对象** `args`。

因此，当我们期望可迭代对象时，使用 `call`，当我们期望类数组对象时，使用 `apply`。

对于即可迭代又是类数组的对象，例如一个真正的数组，我们使用 `call` 或 `apply` 均可，但是 `apply` 可能会更快，因为大多数 JavaScript 引擎在内部对其进行了优化。

将所有参数连同上下文一起传递给另一个函数被称为“呼叫转移（call forwarding）”。

这是它的最简形式：

```javascript
let wrapper = function() {
  return func.apply(this, arguments);
};
```

当外部代码调用这种包装器 `wrapper` 时，它与原始函数 `func` 的调用是无法区分的。

### [借用一种方法](https://zh.javascript.info/call-apply-decorators#method-borrowing)

现在，让我们对哈希函数再做一个较小的改进：

```javascript
function hash(args) {
  return args[0] + ',' + args[1];
}
```

截至目前，它仅适用于两个参数。如果它可以适用于任何数量的 `args` 就更好了。

自然的解决方案是使用 [arr.join](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 方法：

```javascript
function hash(args) {
  return args.join();
}
```

……不幸的是，这不行。因为我们正在调用 `hash(arguments)`，`arguments` 对象既是可迭代对象又是类数组对象，但它并不是真正的数组。

所以在它上面调用 `join` 会失败，我们可以在下面看到：

```javascript
function hash() {
  alert( arguments.join() ); // Error: arguments.join is not a function
}

hash(1, 2);
```

不过，有一种简单的方法可以使用数组的 join 方法：

```javascript
function hash() {
  alert( [].join.call(arguments) ); // 1,2
}

hash(1, 2);
```

这个技巧被称为 **方法借用（method borrowing）**。

我们从常规数组 `[].join` 中获取（借用）join 方法，并使用 `[].join.call` 在 `arguments` 的上下文中运行它。

它为什么有效？

那是因为原生方法 `arr.join(glue)` 的内部算法非常简单。

从规范中几乎“按原样”解释如下：

1. 让 `glue` 成为第一个参数，如果没有参数，则使用逗号 `","`。
2. 让 `result` 为空字符串。
3. 将 `this[0]` 附加到 `result`。
4. 附加 `glue` 和 `this[1]`。
5. 附加 `glue` 和 `this[2]`。
6. ……以此类推，直到 `this.length` 项目被粘在一起。
7. 返回 `result`。

因此，从技术上讲，它需要 `this` 并将 `this[0]`，`this[1]` ……等 join 在一起。它的编写方式是故意允许任何类数组的 `this` 的（不是巧合，很多方法都遵循这种做法）。这就是为什么它也可以和 `this=arguments` 一起使用。

### [装饰器和函数属性](https://zh.javascript.info/call-apply-decorators#zhuang-shi-qi-he-han-shu-shu-xing)

通常，用装饰的函数替换一个函数或一个方法是安全的，除了一件小东西。如果原始函数有属性，例如 `func.calledCount` 或其他，则装饰后的函数将不再提供这些属性。因为这是装饰器。因此，如果有人使用它们，那么就需要小心。

例如，在上面的示例中，如果 `slow` 函数具有任何属性，而 `cachingDecorator(slow)` 则是一个没有这些属性的包装器。

一些包装器可能会提供自己的属性。例如，装饰器会计算一个函数被调用了多少次以及花费了多少时间，并通过包装器属性公开（expose）这些信息。

存在一种创建装饰器的方法，该装饰器可保留对函数属性的访问权限，但这需要使用特殊的 `Proxy` 对象来包装函数。我们将在后面的 [Proxy 和 Reflect](https://zh.javascript.info/proxy#proxy-apply) 中学习它。

### [总结](https://zh.javascript.info/call-apply-decorators#zong-jie)

**装饰器** 是一个围绕改变函数行为的包装器。主要工作仍由该函数来完成。

装饰器可以被看作是可以添加到函数的 “features” 或 “aspects”。我们可以添加一个或添加多个。而这一切都无需更改其代码！

为了实现 `cachingDecorator`，我们研究了以下方法：

- [func.call(context, arg1, arg2…)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Function/call) —— 用给定的上下文和参数调用 `func`。
- [func.apply(context, args)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) —— 调用 `func` 将 `context` 作为 `this` 和类数组的 `args` 传递给参数列表。

通用的 **呼叫转移（call forwarding）** 通常是使用 `apply` 完成的：

```javascript
let wrapper = function() {
  return original.apply(this, arguments);
};
```

我们也可以看到一个 **方法借用（method borrowing）** 的例子，就是我们从一个对象中获取一个方法，并在另一个对象的上下文中“调用”它。采用数组方法并将它们应用于参数 `arguments` 是很常见的。另一种方法是使用 Rest 参数对象，该对象是一个真正的数组。

在 JavaScript 领域里有很多装饰器（decorators）。通过解决本章的任务，来检查你掌握它们的程度吧。

## 55.函数绑定

当将对象方法作为回调进行传递，例如传递给 `setTimeout`，这儿会存在一个常见的问题：“丢失 `this`”。

在本章中，我们会学习如何去解决这个问题。

### [丢失 “this”](https://zh.javascript.info/bind#diu-shi-this)

我们已经看到了丢失 `this` 的例子。一旦方法被传递到与对象分开的某个地方 —— `this` 就丢失。

下面是使用 `setTimeout` 时 `this` 是如何丢失的：

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
```

正如我们所看到的，输出没有像 `this.firstName` 那样显示 “John”，而显示了 `undefined`！

这是因为 `setTimeout` 获取到了函数 `user.sayHi`，但它和对象分离开了。最后一行可以被重写为：

```javascript
let f = user.sayHi;
setTimeout(f, 1000); // 丢失了 user 上下文
```

浏览器中的 `setTimeout` 方法有些特殊：它为函数调用设定了 `this=window`（对于 Node.js，`this` 则会变为计时器（timer）对象，但在这儿并不重要）。所以对于 `this.firstName`，它其实试图获取的是 `window.firstName`，这个变量并不存在。在其他类似的情况下，通常 `this` 会变为 `undefined`。

这个需求很典型 —— 我们想将一个对象方法传递到别的地方（这里 —— 传递到调度程序），然后在该位置调用它。如何确保在正确的上下文中调用它？

### [解决方案 1：包装器](https://zh.javascript.info/bind#jie-jue-fang-an-1-bao-zhuang-qi)

最简单的解决方案是使用一个包装函数：

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user.sayHi(); // Hello, John!
}, 1000);
```

现在它可以正常工作了，因为它从外部词法环境中获取到了 `user`，就可以正常地调用方法了。

相同的功能，但是更简短：

```javascript
setTimeout(() => user.sayHi(), 1000); // Hello, John!
```

看起来不错，但是我们的代码结构中出现了一个小漏洞。

如果在 `setTimeout` 触发之前（有一秒的延迟！）`user` 的值改变了怎么办？那么，突然间，它将调用错误的对象！

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

setTimeout(() => user.sayHi(), 1000);

// ……user 的值在不到 1 秒的时间内发生了改变
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};

// Another user in setTimeout!
```

下一个解决方案保证了这样的事情不会发生。

### [解决方案 2：bind](https://zh.javascript.info/bind#jie-jue-fang-an-2-bind)

函数提供了一个内建方法 [bind](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)，它可以绑定 `this`。

基本的语法是：

```javascript
// 稍后将会有更复杂的语法
let boundFunc = func.bind(context);
```

`func.bind(context)` 的结果是一个特殊的类似于函数的“外来对象（exotic object）”，它可以像函数一样被调用，并且透明地（transparently）将调用传递给 `func` 并设定 `this=context`。

换句话说，`boundFunc` 调用就像绑定了 `this` 的 `func`。

举个例子，这里的 `funcUser` 将调用传递给了 `func` 同时 `this=user`：

```javascript
let user = {
  firstName: "John"
};

function func() {
  alert(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

这里的 `func.bind(user)` 作为 `func` 的“绑定的（bound）变体”，绑定了 `this=user`。

所有的参数（arguments）都被“原样”传递给了初始的 `func`，例如：

```javascript
let user = {
  firstName: "John"
};

function func(phrase) {
  alert(phrase + ', ' + this.firstName);
}

// 将 this 绑定到 user
let funcUser = func.bind(user);

funcUser("Hello"); // Hello, John（参数 "Hello" 被传递，并且 this=user）
```

现在我们来尝试一个对象方法：

```javascript
let user = {
  firstName: "John",
  sayHi() {
    alert(`Hello, ${this.firstName}!`);
  }
};

let sayHi = user.sayHi.bind(user); // (*)

// 可以在没有对象（译注：与对象分离）的情况下运行它
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, John!

// 即使 user 的值在不到 1 秒内发生了改变
// sayHi 还是会使用预先绑定（pre-bound）的值，该值是对旧的 user 对象的引用
user = {
  sayHi() { alert("Another user in setTimeout!"); }
};
```

在 `(*)` 行，我们取了方法 `user.sayHi` 并将其绑定到 `user`。`sayHi` 是一个“绑定后（bound）”的方法，它可以被单独调用，也可以被传递给 `setTimeout` —— 都没关系，函数上下文都会是正确的。

这里我们能够看到参数（arguments）都被“原样”传递了，只是 `this` 被 `bind` 绑定了：

```javascript
let user = {
  firstName: "John",
  say(phrase) {
    alert(`${phrase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user);

say("Hello"); // Hello, John（参数 "Hello" 被传递给了 say）
say("Bye"); // Bye, John（参数 "Bye" 被传递给了 say）
```

**便捷方法：`bindAll`**

如果一个对象有很多方法，并且我们都打算将它们都传递出去，那么我们可以在一个循环中完成所有方法的绑定：

```javascript
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}
```

JavaScript 库还提供了方便批量绑定的函数，例如 lodash 中的 [_.bindAll(object, methodNames)](http://lodash.com/docs#bindAll)。

### [偏函数（Partial functions）](https://zh.javascript.info/bind#pian-han-shu-partialfunctions)

到现在为止，我们只在谈论绑定 `this`。让我们再深入一步。

我们不仅可以绑定 `this`，还可以绑定参数（arguments）。虽然很少这么做，但有时它可以派上用场。

`bind` 的完整语法如下：

```javascript
let bound = func.bind(context, [arg1], [arg2], ...);
```

它允许将上下文绑定为 `this`，以及绑定函数的起始参数。

例如，我们有一个乘法函数 `mul(a, b)`：

```javascript
function mul(a, b) {
  return a * b;
}
```

让我们使用 `bind` 在该函数基础上创建一个 `double` 函数：

```javascript
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10
```

对 `mul.bind(null, 2)` 的调用创建了一个新函数 `double`，它将调用传递到 `mul`，将 `null` 绑定为上下文，并将 `2` 绑定为第一个参数。并且，参数（arguments）均被“原样”传递。

它被称为 [偏函数应用程序（partial function application）](https://en.wikipedia.org/wiki/Partial_application) —— 我们通过绑定先有函数的一些参数来创建一个新函数。

请注意，这里我们实际上没有用到 `this`。但是 `bind` 需要它，所以我们必须传入 `null` 之类的东西。

下面这段代码中的 `triple` 函数将值乘了三倍：

```javascript
function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

alert( triple(3) ); // = mul(3, 3) = 9
alert( triple(4) ); // = mul(3, 4) = 12
alert( triple(5) ); // = mul(3, 5) = 15
```

为什么我们通常会创建一个偏函数？

好处是我们可以创建一个具有可读性高的名字（`double`，`triple`）的独立函数。我们可以使用它，并且不必每次都提供一个参数，因为参数是被绑定了的。

另一方面，当我们有一个非常通用的函数，并希望有一个通用型更低的该函数的变体时，偏函数会非常有用。

例如，我们有一个函数 `send(from, to, text)`。然后，在一个 `user` 对象的内部，我们可能希望对它使用 `send` 的偏函数变体：从当前 user 发送 `sendTo(to, text)`。

### [在没有上下文情况下的 partial](https://zh.javascript.info/bind#zai-mei-you-shang-xia-wen-qing-kuang-xia-de-partial)

当我们想绑定一些参数（arguments），但是这里没有上下文 `this`，应该怎么办？例如，对于一个对象方法。

原生的 `bind` 不允许这种情况。我们不可以省略上下文直接跳到参数（arguments）。

幸运的是，仅绑定参数（arguments）的函数 `partial` 比较容易实现。

像这样：

```javascript
function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// 用法：
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// 添加一个带有绑定时间的 partial 方法
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// 类似于这样的一些内容：
// [10:00] John: Hello!
```

`partial(func[, arg1, arg2...])` 调用的结果是一个包装器 `(*)`，它调用 `func` 并具有以下内容：

- 与它获得的函数具有相同的 `this`（对于 `user.sayNow` 调用来说，它是 `user`）
- 然后给它 `...argsBound` —— 来自于 `partial` 调用的参数（`"10:00"`）
- 然后给它 `...args` —— 给包装器的参数（`"Hello"`）

使用 spread 可以很容易实现这些操作，对吧？

此外，还有来自 lodash 库的现成的 [_.partial](https://lodash.com/docs#partial) 实现。

### [总结](https://zh.javascript.info/bind#zong-jie)

方法 `func.bind(context, ...args)` 返回函数 `func` 的“绑定的（bound）变体”，它绑定了上下文 `this` 和第一个参数（如果给定了）。

通常我们应用 `bind` 来绑定对象方法的 `this`，这样我们就可以把它们传递到其他地方使用。例如，传递给 `setTimeout`。

当我们绑定一个现有的函数的某些参数时，绑定后的（不太通用的）函数被称为 **partially applied** 或 **partial**。

当我们不想一遍又一遍地重复相同的参数时，partial 非常有用。就像我们有一个 `send(from, to)` 函数，并且对于我们的任务来说，`from` 应该总是一样的，那么我们就可以搞一个 partial 并使用它。

## 56.深入理解箭头函数

让我们深入研究一下箭头函数。

箭头函数不仅仅是编写简洁代码的“捷径”。它还具有非常特殊且有用的特性。

JavaScript 充满了我们需要编写在其他地方执行的小函数的情况。

例如：

- `arr.forEach(func)` —— `forEach` 对每个数组元素都执行 `func`。
- `setTimeout(func)` —— `func` 由内建调度器执行。
- ……还有更多。

JavaScript 的精髓在于创建一个函数并将其传递到某个地方。

在这样的函数中，我们通常不想离开当前上下文。这就是箭头函数的主战场啦。

### [箭头函数没有 “this”](https://zh.javascript.info/arrow-functions#jian-tou-han-shu-mei-you-this)

正如我们在 [对象方法，"this"](https://zh.javascript.info/object-methods) 一章中所学到的，箭头函数没有 `this`。如果访问 `this`，则会从外部获取。

例如，我们可以使用它在对象方法内部进行迭代：

```javascript
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => alert(this.title + ': ' + student)
    );
  }
};

group.showList();
```

这里 `forEach` 中使用了箭头函数，所以其中的 `this.title` 其实和外部方法 `showList` 的完全一样。那就是：`group.title`。

如果我们使用正常的函数，则会出现错误：

```javascript
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      alert(this.title + ': ' + student)
    });
  }
};

group.showList();
```

报错是因为 `forEach` 运行它里面的这个函数，但是这个函数的 `this` 为默认值 `this=undefined`，因此就出现了尝试访问 `undefined.title` 的情况。

但箭头函数就没事，因为它们没有 `this`。

**不能对箭头函数进行 `new` 操作**

不具有 `this` 自然也就意味着另一个限制：箭头函数不能用作构造器（constructor）。不能用 `new` 调用它们。

**箭头函数 VS bind**

箭头函数 `=>` 和使用 `.bind(this)` 调用的常规函数之间有细微的差别：

- `.bind(this)` 创建了一个该函数的“绑定版本”。
- 箭头函数 `=>` 没有创建任何绑定。箭头函数只是没有 `this`。`this` 的查找与常规变量的搜索方式完全相同：在外部词法环境中查找。

### [箭头函数没有 “arguments”](https://zh.javascript.info/arrow-functions#jian-tou-han-shu-mei-you-arguments)

箭头函数也没有 `arguments` 变量。

当我们需要使用当前的 `this` 和 `arguments` 转发一个调用时，这对装饰器（decorators）来说非常有用。

例如，`defer(f, ms)` 获得了一个函数，并返回一个包装器，该包装器将调用延迟 `ms` 毫秒：

```javascript
function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // 2 秒后显示：Hello, John
```

不用箭头函数的话，可以这么写：

```javascript
function defer(f, ms) {
  return function(...args) {
    let ctx = this;
    setTimeout(function() {
      return f.apply(ctx, args);
    }, ms);
  };
}
```

在这里，我们必须创建额外的变量 `args` 和 `ctx`，以便 `setTimeout` 内部的函数可以获取它们。

### [总结](https://zh.javascript.info/arrow-functions#zong-jie)

箭头函数：

- 没有 `this`
- 没有 `arguments`
- 不能使用 `new` 进行调用
- 它们也没有 `super`，但目前我们还没有学到它。我们将在 [类继承](https://zh.javascript.info/class-inheritance) 一章中学习它。

这是因为，箭头函数是针对那些没有自己的“上下文”，但在当前上下文中起作用的短代码的。并且箭头函数确实在这种使用场景中大放异彩。

## 57.属性标志 和属性描述符

我们知道，对象可以存储属性。

到目前为止，属性对我们来说只是一个简单的“键值”对。但对象属性实际上是更灵活且更强大的东西。

在本章中，我们将学习其他配置选项，在下一章中，我们将学习如何将它们无形地转换为 getter/setter 函数。

### [属性标志](https://zh.javascript.info/property-descriptors#shu-xing-biao-zhi)

对象属性（properties），除 **`value`** 外，还有三个特殊的特性（attributes），也就是所谓的“标志”：

- **`writable`** — 如果为 `true`，则值可以被修改，否则它是只可读的。
- **`enumerable`** — 如果为 `true`，则会被在循环中列出，否则不会被列出。
- **`configurable`** — 如果为 `true`，则此特性可以被删除，这些属性也可以被修改，否则不可以。

我们到现在还没看到它们，是因为它们通常不会出现。当我们用“常用的方式”创建一个属性时，它们都为 `true`。但我们也可以随时更改它们。

首先，让我们来看看如何获得这些标志。

[Object.getOwnPropertyDescriptor](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 方法允许查询有关属性的 **完整** 信息。

语法是：

```javascript
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
```

- `obj`

  需要从中获取信息的对象。

- `propertyName`

  属性的名称。

返回值是一个所谓的“属性描述符”对象：它包含值和所有的标志。

例如：

```javascript
let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/* 属性描述符：
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/
```

为了修改标志，我们可以使用 [Object.defineProperty](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)。

语法是：

```javascript
Object.defineProperty(obj, propertyName, descriptor)
```

- `obj`，`propertyName`

  要应用描述符的对象及其属性。

- `descriptor`

  要应用的属性描述符对象。

如果该属性存在，`defineProperty` 会更新其标志。否则，它会使用给定的值和标志创建属性；在这种情况下，如果没有提供标志，则会假定它是 `false`。

例如，这里创建了一个属性 `name`，该属性的所有标志都为 `false`：

```javascript
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */
```

将它与上面的“以常用方式创建的” `user.name` 进行比较：现在所有标志都为 `false`。如果这不是我们想要的，那么我们最好在 `descriptor` 中将它们设置为 `true`。

现在让我们通过示例来看看标志的影响。

### [只读](https://zh.javascript.info/property-descriptors#zhi-du)

让我们通过更改 `writable` 标志来把 `user.name` 设置为只读（`user.name` 不能被重新赋值）：

```javascript
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete"; // Error: Cannot assign to read only property 'name'
```

现在没有人可以改变我们 `user` 的 `name`，除非它们应用自己的 `defineProperty` 来覆盖我们的 `user` 的 `name`。

**只在严格模式下会出现 Errors**

在非严格模式下，在对不可写的属性等进行写入操作时，不会出现错误。但是操作仍然不会成功。在非严格模式下，违反标志的行为（flag-violating action）只会被默默地忽略掉。

这是相同的示例，但针对的是属性不存在的情况：

```javascript
let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // 对于新属性，我们需要明确地列出哪些是 true
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete"; // Error
```

### [不可枚举](https://zh.javascript.info/property-descriptors#bu-ke-mei-ju)

现在让我们向 `user` 添加一个自定义的 `toString`。

通常，对象中内建的 `toString` 是不可枚举的，它不会显示在 `for..in` 中。但是如果我们添加我们自己的 `toString`，那么默认情况下它将显示在 `for..in` 中，如下所示：

```javascript
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

// 默认情况下，我们的两个属性都会被列出：
for (let key in user) alert(key); // name, toString
```

如果我们不喜欢它，那么我们可以设置 `enumerable:false`。之后它就不会出现在 `for..in` 循环中了，就像内建的 `toString` 一样：

```javascript
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// 现在我们的 toString 消失了：
for (let key in user) alert(key); // name
```

不可枚举的属性也会被 `Object.keys` 排除：

```javascript
alert(Object.keys(user)); // name
```

### [不可配置](https://zh.javascript.info/property-descriptors#bu-ke-pei-zhi)

不可配置标志（`configurable:false`）有时会预设在内建对象和属性中。

不可配置的属性不能被删除。

例如，`Math.PI` 是只读的、不可枚举和不可配置的：

```javascript
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/
```

因此，开发人员无法修改 `Math.PI` 的值或覆盖它。

```javascript
Math.PI = 3; // Error

// 删除 Math.PI 也不会起作用
```

使属性变成不可配置是一条单行道。我们无法使用 `defineProperty` 把它改回去。

确切地说，不可配置性对 `defineProperty` 施加了一些限制：

1. 不能修改 `configurable` 标志。
2. 不能修改 `enumerable` 标志。
3. 不能将 `writable: false` 修改为 `true`（反过来则可以）。
4. 不能修改访问者属性的 `get/set`（但是如果没有可以分配它们）。

**"configurable: false" 的用途是防止更改和删除属性标志，但是允许更改对象的值。**

这里的 `user.name` 是不可配置的，但是我们仍然可以更改它，因为它是可写的：

```javascript
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  configurable: false
});

user.name = "Pete"; // 正常工作
delete user.name; // Error
```

现在，我们将 `user.name` 设置为一个“永不可改”的常量：

```javascript
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false,
  configurable: false
});

// 不能修改 user.name 或它的标志
// 下面的所有操作都不起作用：
user.name = "Pete";
delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });
```

### [Object.defineProperties](https://zh.javascript.info/property-descriptors#objectdefineproperties)

有一个方法 [Object.defineProperties(obj, descriptors)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties)，允许一次定义多个属性。

语法是：

```javascript
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
```

例如：

```javascript
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
  // ...
});
```

所以，我们可以一次性设置多个属性。

### [Object.getOwnPropertyDescriptors](https://zh.javascript.info/property-descriptors#objectgetownpropertydescriptors)

要一次获取所有属性描述符，我们可以使用 [Object.getOwnPropertyDescriptors(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors) 方法。

它与 `Object.defineProperties` 一起可以用作克隆对象的“标志感知”方式：

```javascript
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
```

通常，当我们克隆一个对象时，我们使用赋值的方式来复制属性，像这样：

```javascript
for (let key in user) {
  clone[key] = user[key]
}
```

……但是，这并不能复制标志。所以如果我们想要一个“更好”的克隆，那么 `Object.defineProperties` 是首选。

另一个区别是 `for..in` 会忽略 symbol 类型的属性，但是 `Object.getOwnPropertyDescriptors` 返回包含 symbol 类型的属性在内的 **所有** 属性描述符。

### [设定一个全局的密封对象](https://zh.javascript.info/property-descriptors#she-ding-yi-ge-quan-ju-de-mi-feng-dui-xiang)

属性描述符在单个属性的级别上工作。

还有一些限制访问 **整个** 对象的方法：

- [Object.preventExtensions(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)

  禁止向对象添加新属性。

- [Object.seal(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

  禁止添加/删除属性。为所有现有的属性设置 `configurable: false`。

- [Object.freeze(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

  禁止添加/删除/更改属性。为所有现有的属性设置 `configurable: false, writable: false`。

还有针对它们的测试：

- [Object.isExtensible(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible)

  如果添加属性被禁止，则返回 `false`，否则返回 `true`。

- [Object.isSealed(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

  如果添加/删除属性被禁止，并且所有现有的属性都具有 `configurable: false`则返回 `true`。

- [Object.isFrozen(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

  如果添加/删除/更改属性被禁止，并且所有当前属性都是 `configurable: false, writable: false`，则返回 `true`。

这些方法在实际中很少使用。

## 58.属性的getter 和setter

有两种类型的对象属性。

第一种是 **数据属性**。我们已经知道如何使用它们了。到目前为止，我们使用过的所有属性都是数据属性。

第二种类型的属性是新东西。它是 **访问器属性（accessor properties）**。它们本质上是用于获取和设置值的函数，但从外部代码来看就像常规属性。

### [Getter 和 setter](https://zh.javascript.info/property-accessors#getter-he-setter)

访问器属性由 “getter” 和 “setter” 方法表示。在对象字面量中，它们用 `get` 和 `set` 表示：

```javascript
let obj = {
  get propName() {
    // 当读取 obj.propName 时，getter 起作用
  },

  set propName(value) {
    // 当执行 obj.propName = value 操作时，setter 起作用
  }
};
```

当读取 `obj.propName` 时，getter 起作用，当 `obj.propName` 被赋值时，setter 起作用。

例如，我们有一个具有 `name` 和 `surname` 属性的对象 `user`：

```javascript
let user = {
  name: "John",
  surname: "Smith"
};
```

现在我们想添加一个 `fullName` 属性，该属性值应该为 `"John Smith"`。当然，我们不想复制粘贴已有的信息，因此我们可以使用访问器来实现：

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

从外表看，访问器属性看起来就像一个普通属性。这就是访问器属性的设计思想。我们不以函数的方式 **调用** `user.fullName`，我们正常 **读取** 它：getter 在幕后运行。

截至目前，`fullName` 只有一个 getter。如果我们尝试赋值操作 `user.fullName=`，将会出现错误：

```javascript
let user = {
  get fullName() {
    return `...`;
  }
};

user.fullName = "Test"; // Error（属性只有一个 getter）
```

让我们通过为 `user.fullName` 添加一个 setter 来修复它：

```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// set fullName 将以给定值执行
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

现在，我们就有一个“虚拟”属性。它是可读且可写的。

### [访问器描述符](https://zh.javascript.info/property-accessors#fang-wen-qi-miao-shu-fu)

访问器属性的描述符与数据属性的不同。

对于访问器属性，没有 `value` 和 `writable`，但是有 `get` 和 `set` 函数。

所以访问器描述符可能有：

- **`get`** —— 一个没有参数的函数，在读取属性时工作，
- **`set`** —— 带有一个参数的函数，当属性被设置时调用，
- **`enumerable`** —— 与数据属性的相同，
- **`configurable`** —— 与数据属性的相同。

例如，要使用 `defineProperty` 创建一个 `fullName` 访问器，我们可以使用 `get` 和 `set` 来传递描述符：

```javascript
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```

请注意，一个属性要么是访问器（具有 `get/set` 方法），要么是数据属性（具有 `value`），但不能两者都是。

如果我们试图在同一个描述符中同时提供 `get` 和 `value`，则会出现错误：

```javascript
// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
  get() {
    return 1
  },

  value: 2
});
```

### [更聪明的 getter/setter](https://zh.javascript.info/property-accessors#geng-cong-ming-de-gettersetter)

Getter/setter 可以用作“真实”属性值的包装器，以便对它们进行更多的控制。

例如，如果我们想禁止太短的 `user` 的 name，我们可以创建一个 setter `name`，并将值存储在一个单独的属性 `_name` 中：

```javascript
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name 太短了……
```

所以，name 被存储在 `_name` 属性中，并通过 getter 和 setter 进行访问。

从技术上讲，外部代码可以使用 `user._name` 直接访问 name。但是，这儿有一个众所周知的约定，即以下划线 `"_"` 开头的属性是内部属性，不应该从对象外部进行访问。

### [兼容性](https://zh.javascript.info/property-accessors#jian-rong-xing)

访问器的一大用途是，它们允许随时通过使用 getter 和 setter 替换“正常的”数据属性，来控制和调整这些属性的行为。

想象一下，我们开始使用数据属性 `name` 和 `age` 来实现 user 对象：

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

let john = new User("John", 25);

alert( john.age ); // 25
```

……但迟早，情况可能会发生变化。我们可能会决定存储 `birthday`，而不是 `age`，因为它更精确，更方便：

```javascript
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john = new User("John", new Date(1992, 6, 1));
```

现在应该如何处理仍使用 `age` 属性的旧代码呢？

我们可以尝试找到所有这些地方并修改它们，但这会花费很多时间，而且如果其他很多人都在使用该代码，那么可能很难完成所有修改。而且，`user` 中有 `age` 是一件好事，对吧？

那我们就把它保留下来吧。

为 `age` 添加一个 getter 来解决这个问题：

```javascript
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // 年龄是根据当前日期和生日计算得出的
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday 是可访问的
alert( john.age );      // ……age 也是可访问的
```

现在旧的代码也可以工作，而且我们还拥有了一个不错的附加属性。

## 57.原型继承

在编程中，我们经常会想获取并扩展一些东西。

例如，我们有一个 `user` 对象及其属性和方法，并希望将 `admin` 和 `guest` 作为基于 `user` 稍加修改的变体。我们想重用 `user` 中的内容，而不是复制/重新实现它的方法，而只是在其之上构建一个新的对象。

**原型继承（Prototypal inheritance）** 这个语言特性能够帮助我们实现这一需求。

### [[[Prototype\]]](https://zh.javascript.info/prototype-inheritance#prototype)

在 JavaScript 中，对象有一个特殊的隐藏属性 `[[Prototype]]`（如规范中所命名的），它要么为 `null`，要么就是对另一个对象的引用。该对象被称为“原型”：

当我们从 `object` 中读取一个缺失的属性时，JavaScript 会自动从原型中获取该属性。在编程中，这种行为被称为“原型继承”。很快，我们将通过很多示例来学习此类继承，以及基于此类继承的更炫酷的语言功能。

属性 `[[Prototype]]` 是内部的而且是隐藏的，但是这儿有很多设置它的方式。

其中之一就是使用特殊的名字 `__proto__`，就像这样：

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // 设置 rabbit.[[Prototype]] = animal
```

现在，如果我们从 `rabbit` 中读取一个它没有的属性，JavaScript 会自动从 `animal` 中获取。

例如：

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// 现在这两个属性我们都能在 rabbit 中找到：
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
```

这里的 `(*)` 行将 `animal` 设置为 `rabbit` 的原型。

当 `alert` 试图读取 `rabbit.eats` `(**)` 时，因为它不存在于 `rabbit` 中，所以 JavaScript 会顺着 `[[Prototype]]` 引用，在 `animal` 中查找（自下而上）：

在这儿我们可以说 "`animal` 是 `rabbit` 的原型"，或者说 "`rabbit` 的原型是从 `animal` 继承而来的"。

因此，如果 `animal` 有许多有用的属性和方法，那么它们将自动地变为在 `rabbit` 中可用。这种属性被称为“继承”。

如果我们在 `animal` 中有一个方法，它可以在 `rabbit` 中被调用：

```javascript
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk 方法是从原型中获得的
rabbit.walk(); // Animal walk
```

该方法是自动地从原型中获得的，像这样：

原型链可以很长：

```javascript
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk 是通过原型链获得的
longEar.walk(); // Animal walk
alert(longEar.jumps); // true（从 rabbit）
```

现在，如果我们从 `longEar` 中读取一些它不存在的内容，JavaScript 会先在 `rabbit` 中查找，然后在 `animal` 中查找。

这里只有两个限制：

1. 引用不能形成闭环。如果我们试图在一个闭环中分配 `__proto__`，JavaScript 会抛出错误。
2. `__proto__` 的值可以是对象，也可以是 `null`。而其他的类型都会被忽略。

当然，这可能很显而易见，但是仍然要强调：只能有一个 `[[Prototype]]`。一个对象不能从其他两个对象获得继承。

**`__proto__` 是 `[[Prototype]]` 的因历史原因而留下来的 getter/setter**

初学者常犯一个普遍的错误，就是不知道 `__proto__` 和 `[[Prototype]]` 的区别。

请注意，`__proto__` 与内部的 `[[Prototype]]` **不一样**。`__proto__` 是 `[[Prototype]]` 的 getter/setter。稍后，我们将看到在什么情况下理解它们很重要，在建立对 JavaScript 语言的理解时，让我们牢记这一点。

`__proto__` 属性有点过时了。它的存在是出于历史的原因，现代编程语言建议我们应该使用函数 `Object.getPrototypeOf/Object.setPrototypeOf` 来取代 `__proto__` 去 get/set 原型。稍后我们将介绍这些函数。

根据规范，`__proto__` 必须仅受浏览器环境的支持。但实际上，包括服务端在内的所有环境都支持它，因此我们使用它是非常安全的。

由于 `__proto__` 标记在观感上更加明显，所以我们在后面的示例中将使用它。

### [写入不使用原型](https://zh.javascript.info/prototype-inheritance#xie-ru-bu-shi-yong-yuan-xing)

原型仅用于读取属性。

对于写入/删除操作可以直接在对象上进行。

在下面的示例中，我们将为 `rabbit` 分配自己的 `walk`：

```javascript
let animal = {
  eats: true,
  walk() {
    /* rabbit 不会使用此方法 */
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!
```

从现在开始，`rabbit.walk()` 将立即在对象中找到该方法并执行，而无需使用原型：

访问器（accessor）属性是一个例外，因为分配（assignment）操作是由 setter 函数处理的。因此，写入此类属性实际上与调用函数相同。

也就是这个原因，所以下面这段代码中的 `admin.fullName` 能够正常运行：

```javascript
let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper，admin 的内容被修改了
alert(user.fullName);  // John Smith，user 的内容被保护了
```

在 `(*)` 行中，属性 `admin.fullName` 在原型 `user` 中有一个 getter，因此它会被调用。在 `(**)` 行中，属性在原型中有一个 setter，因此它会被调用。

### [“this” 的值](https://zh.javascript.info/prototype-inheritance#this-de-zhi)

在上面的例子中可能会出现一个有趣的问题：在 `set fullName(value)` 中 `this` 的值是什么？属性 `this.name` 和 `this.surname` 被写在哪里：在 `user` 还是 `admin`？

答案很简单：`this` 根本不受原型的影响。

**无论在哪里找到方法：在一个对象还是在原型中。在一个方法调用中，`this` 始终是点符号 `.` 前面的对象。**

因此，setter 调用 `admin.fullName=` 使用 `admin` 作为 `this`，而不是 `user`。

这是一件非常重要的事儿，因为我们可能有一个带有很多方法的大对象，并且还有从其继承的对象。当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。

例如，这里的 `animal` 代表“方法存储”，`rabbit` 在使用其中的方法。

调用 `rabbit.sleep()` 会在 `rabbit` 对象上设置 `this.isSleeping`：

```javascript
// animal 有一些方法
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// 修改 rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined（原型中没有此属性）
```

结果示意图：

如果我们还有从 `animal` 继承的其他对象，像 `bird` 和 `snake` 等，它们也将可以访问 `animal` 的方法。但是，每个方法调用中的 `this` 都是在调用时（点符号前）评估的对应的对象，而不是 `animal`。因此，当我们将数据写入 `this` 时，会将其存储到这些对象中。

所以，方法是共享的，但对象状态不是。

### [for…in 循环](https://zh.javascript.info/prototype-inheritance#forin-xun-huan)

`for..in` 循环也会迭代继承的属性。

例如：

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys 只返回自己的 key
alert(Object.keys(rabbit)); // jumps

// for..in 会遍历自己以及继承的键
for(let prop in rabbit) alert(prop); // jumps，然后是 eats
```

如果这不是我们想要的，并且我们想排除继承的属性，那么这儿有一个内建方法 [obj.hasOwnProperty(key)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)：如果 `obj` 具有自己的（非继承的）名为 `key` 的属性，则返回 `true`。

因此，我们可以过滤掉继承的属性（或对它们进行其他操作）：

```javascript
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

这里我们有以下继承链：`rabbit` 从 `animal` 中继承，`animal` 从 `Object.prototype` 中继承（因为 `animal` 是对象字面量 `{...}`，所以这是默认的继承），然后再向上是 `null`：

注意，这有一件很有趣的事儿。方法 `rabbit.hasOwnProperty` 来自哪儿？我们并没有定义它。从上图中的原型链我们可以看到，该方法是 `Object.prototype.hasOwnProperty` 提供的。换句话说，它是继承的。

……如果 `for..in` 循环会列出继承的属性，那为什么 `hasOwnProperty` 没有像 `eats` 和 `jumps` 那样出现在 `for..in` 循环中？

答案很简单：它是不可枚举的。就像 `Object.prototype` 的其他属性，`hasOwnProperty` 有 `enumerable:false` 标志。并且 `for..in` 只会列出可枚举的属性。这就是为什么它和其余的 `Object.prototype` 属性都未被列出。

**几乎所有其他键/值获取方法都忽略继承的属性**

几乎所有其他键/值获取方法，例如 `Object.keys` 和 `Object.values` 等，都会忽略继承的属性。

它们只会对对象自身进行操作。**不考虑** 继承自原型的属性。

### [总结](https://zh.javascript.info/prototype-inheritance#zong-jie)

- 在 JavaScript 中，所有的对象都有一个隐藏的 `[[Prototype]]` 属性，它要么是另一个对象，要么就是 `null`。
- 我们可以使用 `obj.__proto__` 访问它（历史遗留下来的 getter/setter，这儿还有其他方法，很快我们就会讲到）。
- 通过 `[[Prototype]]` 引用的对象被称为“原型”。
- 如果我们想要读取 `obj` 的一个属性或者调用一个方法，并且它不存在，那么 JavaScript 就会尝试在原型中查找它。
- 写/删除操作直接在对象上进行，它们不使用原型（假设它是数据属性，不是 setter）。
- 如果我们调用 `obj.method()`，而且 `method` 是从原型中获取的，`this` 仍然会引用 `obj`。因此，方法始终与当前对象一起使用，即使方法是继承的。
- `for..in` 循环在其自身和继承的属性上进行迭代。所有其他的键/值获取方法仅对对象本身起作用。

## 58.F.prototype

我们还记得，可以使用诸如 `new F()` 这样的构造函数来创建一个新对象。

如果 `F.prototype` 是一个对象，那么 `new` 操作符会使用它为新对象设置 `[[Prototype]]`。

**请注意：**

JavaScript 从一开始就有了原型继承。这是 JavaScript 编程语言的核心特性之一。

但是在过去，没有直接对其进行访问的方式。唯一可靠的方法是本章中会介绍的构造函数的 `"prototype"` 属性。目前仍有许多脚本仍在使用它。

请注意，这里的 `F.prototype` 指的是 `F` 的一个名为 `"prototype"` 的常规属性。这听起来与“原型”这个术语很类似，但这里我们实际上指的是具有该名字的常规属性。

下面是一个例子：

```javascript
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
```

设置 `Rabbit.prototype = animal` 的字面意思是：“当创建了一个 `new Rabbit` 时，把它的 `[[Prototype]]` 赋值为 `animal`”。

这是结果示意图：

在上图中，`"prototype"` 是一个水平箭头，表示一个常规属性，`[[Prototype]]` 是垂直的，表示 `rabbit` 继承自 `animal`。

**`F.prototype` 仅用在 `new F` 时**

`F.prototype` 属性仅在 `new F` 被调用时使用，它为新对象的 `[[Prototype]]` 赋值。

如果在创建之后，`F.prototype` 属性有了变化（`F.prototype = <another object>`），那么通过 `new F` 创建的新对象也将随之拥有新的对象作为 `[[Prototype]]`，但已经存在的对象将保持旧有的值。

### [默认的 F.prototype，构造器属性](https://zh.javascript.info/function-prototype#mo-ren-de-fprototype-gou-zao-qi-shu-xing)

每个函数都有 `"prototype"` 属性，即使我们没有提供它。

默认的 `"prototype"` 是一个只有属性 `constructor` 的对象，属性 `constructor` 指向函数自身。

像这样：

```javascript
function Rabbit() {}

/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/
```

我们可以检查一下：

```javascript
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

alert( Rabbit.prototype.constructor == Rabbit ); // true
```

通常，如果我们什么都不做，`constructor` 属性可以通过 `[[Prototype]]` 给所有 rabbits 使用：

```javascript
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)
```

我们可以使用 `constructor` 属性来创建一个新对象，该对象使用与现有对象相同的构造器。

像这样：

```javascript
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");
```

当我们有一个对象，但不知道它使用了哪个构造器（例如它来自第三方库），并且我们需要创建另一个类似的对象时，用这种方法就很方便。

但是，关于 `"constructor"` 最重要的是……

**……JavaScript 自身并不能确保正确的 `"constructor"` 函数值。**

是的，它存在于函数的默认 `"prototype"` 中，但仅此而已。之后会发生什么 —— 完全取决于我们。

特别是，如果我们将整个默认 prototype 替换掉，那么其中就不会有 `"constructor"` 了。

例如：

```javascript
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

因此，为了确保正确的 `"constructor"`，我们可以选择添加/删除属性到默认 `"prototype"`，而不是将其整个覆盖：

```javascript
function Rabbit() {}

// 不要将 Rabbit.prototype 整个覆盖
// 可以向其中添加内容
Rabbit.prototype.jumps = true
// 默认的 Rabbit.prototype.constructor 被保留了下来
```

或者，也可以手动重新创建 `constructor` 属性：

```javascript
Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

// 这样的 constructor 也是正确的，因为我们手动添加了它
```

### [总结](https://zh.javascript.info/function-prototype#zong-jie)

在本章中，我们简要介绍了为通过构造函数创建的对象设置 `[[Prototype]]` 的方法。稍后我们将看到更多依赖于此的高级编程模式。

一切都很简单，只需要记住几条重点就可以清晰地掌握了：

- `F.prototype` 属性（不要把它与 `[[Prototype]]` 弄混了）在 `new F` 被调用时为新对象的 `[[Prototype]]` 赋值。
- `F.prototype` 的值要么是一个对象，要么就是 `null`：其他值都不起作用。
- `"prototype"` 属性仅在设置了一个构造函数（constructor function），并通过 `new` 调用时，才具有这种特殊的影响。

在常规对象上，`prototype` 没什么特别的：

```javascript
let user = {
  name: "John",
  prototype: "Bla-bla" // 这里只是普通的属性
};
```

默认情况下，所有函数都有 `F.prototype = {constructor：F}`，所以我们可以通过访问它的 `"constructor"` 属性来获取一个对象的构造器。

## 59. 原型方法，没有_proto_对象

在这部分内容的第一章中，我们提到了设置原型的现代方法。

`__proto__` 被认为是过时且不推荐使用的（deprecated），这里的不推荐使用是指 JavaScript 规范中规定，**proto** 必须仅在浏览器环境下才能得到支持。

现代的方法有：

- [Object.create(proto, [descriptors\])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/create) —— 利用给定的 `proto` 作为 `[[Prototype]]` 和可选的属性描述来创建一个空对象。
- [Object.getPrototypeOf(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) —— 返回对象 `obj` 的 `[[Prototype]]`。
- [Object.setPrototypeOf(obj, proto)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) —— 将对象 `obj` 的 `[[Prototype]]` 设置为 `proto`。

应该使用这些方法来代替 `__proto__`。

例如：

```javascript
let animal = {
  eats: true
};

// 创建一个以 animal 为原型的新对象
let rabbit = Object.create(animal);

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // 将 rabbit 的原型修改为 {}
```

`Object.create` 有一个可选的第二参数：属性描述器。我们可以在此处为新对象提供额外的属性，就像这样：

```javascript
let animal = {
  eats: true
};

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true
```

描述器的格式与 [属性标志和属性描述符](https://zh.javascript.info/property-descriptors) 一章中所讲的一样。

我们可以使用 `Object.create` 来实现比复制 `for..in` 循环中的属性更强大的对象克隆方式：

```javascript
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
```

此调用可以对 `obj` 进行真正准确地拷贝，包括所有的属性：可枚举和不可枚举的，数据属性和 setters/getters —— 包括所有内容，并带有正确的 `[[Prototype]]`。

### [原型简史](https://zh.javascript.info/prototype-methods#yuan-xing-jian-shi)

如果我们数一下有多少种处理 `[[Prototype]]` 的方式，答案是有很多！很多种方法做的都是同一件事儿！

为什么会出现这种情况？

这是历史原因。

- 构造函数的 `"prototype"` 属性自古以来就起作用。
- 之后，在 2012 年，`Object.create` 出现在标准中。它提供了使用给定原型创建对象的能力。但没有提供 get/set 它的能力。因此，许多浏览器厂商实现了非标准的 `__proto__` 访问器，该访问器允许用户随时 get/set 原型。
- 之后，在 2015 年，`Object.setPrototypeOf` 和 `Object.getPrototypeOf` 被加入到标准中，执行与 `__proto__` 相同的功能。由于 `__proto__` 实际上已经在所有地方都得到了实现，但它已过时，所以被加入到该标准的附件 B 中，即：在非浏览器环境下，它的支持是可选的。

目前为止，我们拥有了所有这些方式。

为什么将 `__proto__` 替换成函数 `getPrototypeOf/setPrototypeOf`？这是一个有趣的问题，需要我们理解为什么 `__proto__` 不好。继续阅读，你就会知道答案。

**如果速度很重要，就请不要修改已存在的对象的 `[[Prototype]]`**

从技术上来讲，我们可以在任何时候 get/set `[[Prototype]]`。但是通常我们只在创建对象的时候设置它一次，自那之后不再修改：`rabbit` 继承自 `animal`，之后不再更改。

并且，JavaScript 引擎对此进行了高度优化。用 `Object.setPrototypeOf` 或 `obj.__proto__=` “即时”更改原型是一个非常缓慢的操作，因为它破坏了对象属性访问操作的内部优化。因此，除非你知道自己在做什么，或者 JavaScript 的执行速度对你来说完全不重要，否则请避免使用它。

### ["Very plain" objects](https://zh.javascript.info/prototype-methods#very-plain)

我们知道，对象可以用作关联数组（associative arrays）来存储键/值对。

……但是如果我们尝试在其中存储 **用户提供的** 键（例如：一个用户输入的字典），我们可以发现一个有趣的小故障：所有的键都正常工作，除了 `"__proto__"`。

看一下这个例子：

```javascript
let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // [object Object]，并不是 "some value"！
```

这里如果用户输入 `__proto__`，那么赋值会被忽略！

我们不应该对此感到惊讶。`__proto__` 属性很特别：它必须是对象或者 `null`。字符串不能成为 prototype。

但是我们不是 **打算** 实现这种行为，对吧？我们想要存储键值对，然而键名为 `"__proto__"` 的键值对没有被正确存储。所以这是一个 bug。

在这里，后果并没有很严重。但是在其他情况下，我们可能会对对象进行赋值操作，然后原型可能就被更改了。结果，可能会导致完全意想不到的结果。

最可怕的是 —— 通常开发者完全不会考虑到这一点。这让此类 bug 很难被发现，甚至变成漏洞，尤其是在 JavaScript 被用在服务端的时候。

为默认情况下为函数的 `toString` 以及其他内建方法执行赋值操作，也会出现意想不到的结果。

我们怎么避免这样的问题呢？

首先，我们可以改用 `Map` 来代替普通对象进行存储，这样一切都迎刃而解。

但是 `Object` 在这里同样可以运行得很好，因为 JavaScript 语言的制造者很早就注意到了这个问题。

`__proto__` 不是一个对象的属性，只是 `Object.prototype` 的访问器属性：

因此，如果 `obj.__proto__` 被读取或者赋值，那么对应的 getter/setter 会被从它的原型中调用，它会 set/get `[[Prototype]]`。

就像在本部分教程的开头所说的那样：`__proto__` 是一种访问 `[[Prototype]]` 的方式，而不是 `[[prototype]]` 本身。

现在，我们想要将一个对象用作关联数组，并且摆脱此类问题，我们可以使用一些小技巧：

```javascript
let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value"
```

`Object.create(null)` 创建了一个空对象，这个对象没有原型（`[[Prototype]]` 是 `null`）：

因此，它没有继承 `__proto__` 的 getter/setter 方法。现在，它被作为正常的数据属性进行处理，因此上面的这个示例能够正常工作。

我们可以把这样的对象称为 “very plain” 或 “pure dictionary” 对象，因为它们甚至比通常的普通对象（plain object）`{...}` 还要简单。

缺点是这样的对象没有任何内建的对象的方法，例如 `toString`：

```javascript
let obj = Object.create(null);

alert(obj); // Error (no toString)
```

……但是它们通常对关联数组而言还是很友好。

请注意，大多数与对象相关的方法都是 `Object.something(...)`，例如 `Object.keys(obj)` —— 它们不在 prototype 中，因此在 “very plain” 对象中它们还是可以继续使用：

```javascript
let chineseDictionary = Object.create(null);
chineseDictionary.hello = "你好";
chineseDictionary.bye = "再见";

alert(Object.keys(chineseDictionary)); // hello,bye
```

### [总结](https://zh.javascript.info/prototype-methods#zong-jie)

设置和直接访问原型的现代方法有：

- [Object.create(proto, [descriptors\])](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/create) —— 利用给定的 `proto` 作为 `[[Prototype]]`（可以是 `null`）和可选的属性描述来创建一个空对象。
- [Object.getPrototypeOf(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) —— 返回对象 `obj` 的 `[[Prototype]]`（与 `__proto__` 的 getter 相同）。
- [Object.setPrototypeOf(obj, proto)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) —— 将对象 `obj` 的 `[[Prototype]]` 设置为 `proto`（与 `__proto__` 的 setter 相同）。

如果要将一个用户生成的键放入一个对象，那么内建的 `__proto__` getter/setter 是不安全的。因为用户可能会输入 `"__proto__"` 作为键，这会导致一个 error，虽然我们希望这个问题不会造成什么大影响，但通常会造成不可预料的后果。

因此，我们可以使用 `Object.create(null)` 创建一个没有 `__proto__` 的 “very plain” 对象，或者对此类场景坚持使用 `Map` 对象就可以了。

此外，`Object.create` 提供了一种简单的方式来浅拷贝一个对象的所有描述符：

```javascript
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
```

此外，我们还明确了 `__proto__` 是 `[[Prototype]]` 的 getter/setter，就像其他方法一样，它位于 `Object.prototype`。

我们可以通过 `Object.create(null)` 来创建没有原型的对象。这样的对象被用作 “pure dictionaries”，对于它们而言，使用 `"__proto__"` 作为键是没有问题的。

其他方法：

- [Object.keys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) / [Object.values(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/values) / [Object.entries(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) —— 返回一个可枚举的由自身的字符串属性名/值/键值对组成的数组。
- [Object.getOwnPropertySymbols(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols) —— 返回一个由自身所有的 symbol 类型的键组成的数组。
- [Object.getOwnPropertyNames(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames) —— 返回一个由自身所有的字符串键组成的数组。
- [Reflect.ownKeys(obj)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys) —— 返回一个由自身所有键组成的数组。
- [obj.hasOwnProperty(key)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)：如果 `obj` 拥有名为 `key` 的自身的属性（非继承而来的），则返回 `true`。

所有返回对象属性的方法（如 `Object.keys` 及其他）—— 都返回“自身”的属性。如果我们想继承它们，我们可以使用 `for...in`。

## 60.Class基本语法

在日常开发中，我们经常需要创建许多相同类型的对象，例如用户（users）、商品（goods）或者任何其他东西。

正如我们在 [构造器和操作符 "new"](https://zh.javascript.info/constructor-new) 一章中已经学到的，`new function` 可以帮助我们实现这种需求。

但在现代 JavaScript 中，还有一个更高级的“类（class）”构造方式，它引入许多非常棒的新功能，这些功能对于面向对象编程很有用。

### [“class” 语法](https://zh.javascript.info/class#class-yu-fa)

基本语法是：

```javascript
class MyClass {
  // class 方法
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

然后使用 `new MyClass()` 来创建具有上述列出的所有方法的新对象。

`new` 会自动调用 `constructor()` 方法，因此我们可以在 `constructor()` 中初始化对象。

例如：

```javascript
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// 用法：
let user = new User("John");
user.sayHi();
```

当 `new User("John")` 被调用：

1. 一个新对象被创建。
2. `constructor` 使用给定的参数运行，并为其分配 `this.name`。

……然后我们就可以调用对象方法了，例如 `user.sayHi`。

**类的方法之间没有逗号**

对于新手开发人员来说，常见的陷阱是在类的方法之间放置逗号，这会导致语法错误。

不要把这里的符号与对象字面量相混淆。在类中，不需要逗号。

### [什么是 class？](https://zh.javascript.info/class#shi-mo-shi-class)

所以，`class` 到底是什么？正如人们可能认为的那样，这不是一个全新的语言级实体。

让我们揭开其神秘面纱，看看类究竟是什么。这将有助于我们理解许多复杂的方面。

在 JavaScript 中，类是一种函数。

看看下面这段代码：

```javascript
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// 佐证：User 是一个函数
alert(typeof User); // function
```

`class User {...}` 构造实际上做了如下的事儿：

1. 创建一个名为 `User` 的函数，该函数成为类声明的结果。该函数的代码来自于 `constructor` 方法（如果我们不编写这种方法，那么它就被假定为空）。
2. 存储类中的方法，例如 `User.prototype` 中的 `sayHi`。

当 `new User` 对象被创建后，当我们调用其方法时，它会从原型中获取对应的方法，正如我们在 [F.prototype](https://zh.javascript.info/function-prototype) 一章中所讲的那样。因此，对象 `new User` 可以访问类中的方法。

我们可以将 `class User` 声明的结果解释为：

下面这些代码很好地解释了它们：

```javascript
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class 是一个函数
alert(typeof User); // function

// ...或者，更确切地说，是 constructor 方法
alert(User === User.prototype.constructor); // true

// 方法在 User.prototype 中，例如：
alert(User.prototype.sayHi); // alert(this.name);

// 在原型中实际上有两个方法
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
```

### [不仅仅是语法糖](https://zh.javascript.info/class#bu-jin-jin-shi-yu-fa-tang)

人们常说 `class` 是一个语法糖（旨在使内容更易阅读，但不引入任何新内容的语法），因为我们实际上可以在没有 `class` 的情况下声明相同的内容：

```javascript
// 用纯函数重写 class User

// 1. 创建构造器函数
function User(name) {
  this.name = name;
}
// 函数的原型（prototype）默认具有 "constructor" 属性，
// 所以，我们不需要创建它

// 2. 将方法添加到原型
User.prototype.sayHi = function() {
  alert(this.name);
};

// 用法：
let user = new User("John");
user.sayHi();
```

这个定义的结果与使用类得到的结果基本相同。因此，这确实是将 `class` 视为一种定义构造器及其原型方法的语法糖的理由。

尽管，它们之间存在着重大差异：

1. 首先，通过 `class` 创建的函数具有特殊的内部属性标记 `[[IsClassConstructor]]: true`。因此，它与手动创建并不完全相同。

   编程语言会在许多地方检查该属性。例如，与普通函数不同，必须使用 `new` 来调用它：

   ```javascript
   class User {
     constructor() {}
   }
   
   alert(typeof User); // function
   User(); // Error: Class constructor User cannot be invoked without 'new'
   ```

   此外，大多数 JavaScript 引擎中的类构造器的字符串表示形式都以 “class…” 开头

   ```javascript
   class User {
     constructor() {}
   }
   
   alert(User); // class User { ... }
   ```

   还有其他的不同之处，我们很快就会看到。

2. 类方法不可枚举。 类定义将 `"prototype"` 中的所有方法的 `enumerable` 标志设置为 `false`。

   这很好，因为如果我们对一个对象调用 `for..in` 方法，我们通常不希望 class 方法出现。

3. 类总是使用 `use strict`。 在类构造中的所有代码都将自动进入严格模式。

此外，`class` 语法还带来了许多其他功能，我们稍后将会探索它们。

### [类表达式](https://zh.javascript.info/class#lei-biao-da-shi)

就像函数一样，类可以在另外一个表达式中被定义，被传递，被返回，被赋值等。

这是一个类表达式的例子：

```javascript
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

类似于命名函数表达式（Named Function Expressions），类表达式可能也应该有一个名字。

如果类表达式有名字，那么该名字仅在类内部可见：

```javascript
// “命名类表达式（Named Class Expression）”
// (规范中没有这样的术语，但是它和命名函数表达式类似)
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass 这个名字仅在类内部可见
  }
};

new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

alert(MyClass); // error，MyClass 在外部不可见
```

我们甚至可以动态地“按需”创建类，就像这样：

```javascript
function makeClass(phrase) {
  // 声明一个类并返回它
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// 创建一个新的类
let User = makeClass("Hello");

new User().sayHi(); // Hello
```

### [Getters/setters](https://zh.javascript.info/class#getterssetters)

就像对象字面量，类可能包括 getters/setters，计算属性（computed properties）等。

这是一个使用 `get/set` 实现 `user.name` 的示例：

```javascript
class User {

  constructor(name) {
    // 调用 setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.
```

从技术上来讲，这样的类声明可以通过在 `User.prototype` 中创建 getters 和 setters 来实现。

### [计算属性名称 […\]](https://zh.javascript.info/class#ji-suan-shu-xing-ming-cheng)

这里有一个使用中括号 `[...]` 的计算方法名称示例：

```javascript
class User {

  ['say' + 'Hi']() {
    alert("Hello");
  }

}

new User().sayHi();
```

这种特性很容易记住，因为它们和对象字面量类似。

### [Class 字段](https://zh.javascript.info/class#class-zi-duan)

**旧的浏览器可能需要 polyfill**

类字段（field）是最近才添加到语言中的。

之前，我们的类仅具有方法。

“类字段”是一种允许添加任何属性的语法。

例如，让我们在 `class User` 中添加一个 `name` 属性：

```javascript
class User {
  name = "John";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
```

所以，我们就只需在表达式中写 " = "，就这样。

类字段重要的不同之处在于，它们会在每个独立对象中被设好，而不是设在 `User.prototype`：

```javascript
class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined
```

我们也可以在赋值时使用更复杂的表达式和函数调用：

```javascript
class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John
```

### [使用类字段制作绑定方法](https://zh.javascript.info/class#shi-yong-lei-zi-duan-zhi-zuo-bang-ding-fang-fa)

正如 [函数绑定](https://zh.javascript.info/bind) 一章中所讲的，JavaScript 中的函数具有动态的 `this`。它取决于调用上下文。

因此，如果一个对象方法被传递到某处，或者在另一个上下文中被调用，则 `this` 将不再是对其对象的引用。

例如，此代码将显示 `undefined`：

```javascript
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
```

这个问题被称为“丢失 `this`”。

我们在 [函数绑定](https://zh.javascript.info/bind) 一章中讲过，有两种可以修复它的方式：

1. 传递一个包装函数，例如 `setTimeout(() => button.click(), 1000)`。
2. 将方法绑定到对象，例如在 constructor 中。

类字段提供了另一种非常优雅的语法：

```javascript
class Button {
  constructor(value) {
    this.value = value;
  }
  click = () => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello
```

类字段 `click = () => {...}` 是基于每一个对象被创建的，在这里对于每一个 `Button` 对象都有一个独立的方法，在内部都有一个指向此对象的 `this`。我们可以把 `button.click` 传递到任何地方，而且 `this` 的值总是正确的。

在浏览器环境中，它对于进行事件监听尤为有用。

### [总结](https://zh.javascript.info/class#zong-jie)

基本的类语法看起来像这样：

```javascript
class MyClass {
  prop = value; // 属性

  constructor(...) { // 构造器
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter 方法
  set something(...) {} // setter 方法

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```

技术上来说，`MyClass` 是一个函数（我们提供作为 `constructor` 的那个），而 methods、getters 和 settors 都被写入了 `MyClass.prototype`。

## 61.类继承

类继承是一个类扩展另一个类的一种方式。

因此，我们可以在现有功能之上创建新功能。

### [“extends” 关键字](https://zh.javascript.info/class-inheritance#extends-guan-jian-zi)

假设我们有 class `Animal`：

```javascript
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");
```

这是我们对对象 `animal` 和 class `Animal` 的图形化表示：

……然后我们想创建另一个 `class Rabbit`：

因为 rabbits 是 animals，所以 class `Rabbit` 应该是基于 class `Animal` 的，可以访问 animal 的方法，以便 rabbits 可以做“一般”动物可以做的事儿。

扩展另一个类的语法是：`class Child extends Parent`。

让我们创建一个继承自 `Animal` 的 `class Rabbit`：

```javascript
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
```

Class `Rabbit` 的对象可以访问例如 `rabbit.hide()` 等 `Rabbit` 的方法，还可以访问例如 `rabbit.run()` 等 `Animal` 的方法。

在内部，关键字 `extends` 使用了很好的旧的原型机制进行工作。它将 `Rabbit.prototype.[[Prototype]]` 设置为 `Animal.prototype`。所以，如果在 `Rabbit.prototype` 中找不到一个方法，JavaScript 就会从 `Animal.prototype` 中获取该方法。

例如，要查找 `rabbit.run` 方法，JavaScript 引擎会进行如下检查（如图所示从下到上）：

1. 查找对象 `rabbit`（没有 `run`）。
2. 查找它的原型，即 `Rabbit.prototype`（有 `hide`，但没有 `run`）。
3. 查找它的原型，即（由于 `extends`）`Animal.prototype`，在这儿找到了 `run` 方法。

我们可以回忆一下 [原生的原型](https://zh.javascript.info/native-prototypes) 这一章的内容，JavaScript 内建对象同样也使用原型继承。例如，`Date.prototype.[[Prototype]]` 是 `Object.prototype`。这就是为什么日期可以访问通用对象的方法。

**在 `extends` 后允许任意表达式**

类语法不仅允许指定一个类，在 `extends` 后可以指定任意表达式。

例如，一个生成父类的函数调用：

```javascript
function f(phrase) {
  return class {
    sayHi() { alert(phrase); }
  };
}

class User extends f("Hello") {}

new User().sayHi(); // Hello
```

这里 `class User` 继承自 `f("Hello")` 的结果。

这对于高级编程模式，例如当我们根据许多条件使用函数生成类，并继承它们时来说可能很有用。

### [重写方法](https://zh.javascript.info/class-inheritance#zhong-xie-fang-fa)

现在，让我们继续前行并尝试重写一个方法。默认情况下，所有未在 `class Rabbit` 中指定的方法均从 `class Animal` 中直接获取。

但是如果我们在 `Rabbit` 中指定了我们自己的方法，例如 `stop()`，那么将会使用它：

```javascript
class Rabbit extends Animal {
  stop() {
    // ……现在这个将会被用作 rabbit.stop()
    // 而不是来自于 class Animal 的 stop()
  }
}
```

但是通常来说，我们不希望完全替换父类的方法，而是希望在父类方法的基础上进行调整或扩展其功能。我们在我们的方法中做一些事儿，但是在它之前或之后或在过程中会调用父类方法。

Class 为此提供了 `"super"` 关键字。

- 执行 `super.method(...)` 来调用一个父类方法。
- 执行 `super(...)` 来调用一个父类 constructor（只能在我们的 constructor 中）。

例如，让我们的 rabbit 在停下来的时候自动 hide：

```javascript
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // 调用父类的 stop
    this.hide(); // 然后 hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit 以速度 5 奔跑
rabbit.stop(); // White Rabbit 停止了。White rabbit hide 了！
```

现在，`Rabbit` 在执行过程中调用父类的 `super.stop()` 方法，所以 `Rabbit` 也具有了 `stop` 方法。

**箭头函数没有 `super`**

正如我们在 [深入理解箭头函数](https://zh.javascript.info/arrow-functions) 一章中所提到的，箭头函数没有 `super`。

如果被访问，它会从外部函数获取。例如：

```javascript
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // 1 秒后调用父类的 stop
  }
}
```

箭头函数中的 `super` 与 `stop()` 中的是一样的，所以它能按预期工作。如果我们在这里指定一个“普通”函数，那么将会抛出错误：

```javascript
// 意料之外的 super
setTimeout(function() { super.stop() }, 1000);
```

### [重写 constructor](https://zh.javascript.info/class-inheritance#zhong-xie-constructor)

对于重写 constructor 来说，则有点棘手。

到目前为止，`Rabbit` 还没有自己的 `constructor`。

根据 [规范](https://tc39.github.io/ecma262/#sec-runtime-semantics-classdefinitionevaluation)，如果一个类扩展了另一个类并且没有 `constructor`，那么将生成下面这样的“空” `constructor`：

```javascript
class Rabbit extends Animal {
  // 为没有自己的 constructor 的扩展类生成的
  constructor(...args) {
    super(...args);
  }
}
```

正如我们所看到的，它调用了父类的 `constructor`，并传递了所有的参数。如果我们没有写自己的 constructor，就会出现这种情况。

现在，我们给 `Rabbit` 添加一个自定义的 constructor。除了 `name` 之外，它还会指定 `earLength`。

```javascript
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// 不工作！
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
```

哎呦！我们得到了一个报错。现在我们没法新建 rabbit。是什么地方出错了？

简短的解释是：

**继承类的 constructor 必须调用 `super(...)`，并且 (!) 一定要在使用 `this` 之前调用。**

……但这是为什么呢？这里发生了什么？确实，这个要求看起来很奇怪。

当然，本文会给出一个解释。让我们深入细节，这样你就可以真正地理解发生了什么。

在 JavaScript 中，继承类（所谓的“派生构造器”，英文为 “derived constructor”）的构造函数与其他函数之间是有区别的。派生构造器具有特殊的内部属性 `[[ConstructorKind]]:"derived"`。这是一个特殊的内部标签。

该标签会影响它的 `new` 行为：

- 当通过 `new` 执行一个常规函数时，它将创建一个空对象，并将这个空对象赋值给 `this`。
- 但是当继承的 constructor 执行时，它不会执行此操作。它期望父类的 constructor 来完成这项工作。

因此，派生的 constructor 必须调用 `super` 才能执行其父类（base）的 constructor，否则 `this` 指向的那个对象将不会被创建。并且我们会收到一个报错。

为了让 `Rabbit` 的 constructor 可以工作，它需要在使用 `this` 之前调用 `super()`，就像下面这样：

```javascript
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// 现在可以了
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```

#### [重写类字段: 一个棘手的注意要点](https://zh.javascript.info/class-inheritance#zhong-xie-lei-zi-duan-yi-ge-ji-shou-de-zhu-yi-yao-dian)

**高阶要点**

这个要点假设你对类已经有了一定的经验，或许是在其他编程语言中。

这里提供了一个更好的视角来窥探这门语言，且解释了它的行为为什么可能会是 bugs 的来源(但不是非常频繁)。

如果你发现这难以理解，什么都别管，继续往下阅读，之后有机会再回来看。

我们不仅可以重写方法，还可以重写类字段。

不过，当我们访问在父类构造器中的一个被重写的字段时，这里会有一个诡异的行为，这与绝大多数其他编程语言都很不一样。

请思考此示例：

```javascript
class Animal {
  name = 'animal';

  constructor() {
    alert(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal
```

这里，`Rabbit` 继承自 `Animal`，并且用它自己的值重写了 `name` 字段。

因为 `Rabbit` 中没有自己的构造器，所以 `Animal` 的构造器被调用了。

有趣的是在这两种情况下：`new Animal()` 和 `new Rabbit()`，在 `(*)` 行的 `alert` 都打印了 `animal`。

**换句话说， 父类构造器总是会使用它自己字段的值，而不是被重写的那一个。**

古怪的是什么呢？

如果这还不清楚，那么让我们用方法来进行比较。

这里是相同的代码，但是我们调用 `this.showName()` 方法而不是 `this.name` 字段：

```javascript
class Animal {
  showName() {  // 而不是 this.name = 'animal'
    alert('animal');
  }

  constructor() {
    this.showName(); // 而不是 alert(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    alert('rabbit');
  }
}

new Animal(); // animal
new Rabbit(); // rabbit
```

请注意：这时的输出是不同的。

这才是我们本来所期待的结果。当父类构造器在派生的类中被调用时，它会使用被重写的方法。

……但对于类字段并非如此。正如前文所述，父类构造器总是使用父类的字段。

这里为什么会有这样的区别呢？

实际上，原因在于字段初始化的顺序。类字段是这样初始化的：

- 对于基类（还未继承任何东西的那种），在构造函数调用前初始化。
- 对于派生类，在 `super()` 后立刻初始化。

在我们的例子中，`Rabbit` 是派生类，里面没有 `constructor()`。正如先前所说，这相当于一个里面只有 `super(...args)` 的空构造器。

所以，`new Rabbit()` 调用了 `super()`，因此它执行了父类构造器，并且（根据派生类规则）只有在此之后，它的类字段才被初始化。在父类构造器被执行的时候，`Rabbit` 还没有自己的类字段，这就是为什么 `Animal` 类字段被使用了。

这种字段与方法之间微妙的区别只特定于 JavaScript。

幸运的是，这种行为仅在一个被重写的字段被父类构造器使用时才会显现出来。接下来它会发生的东西可能就比较难理解了，所以我们要在这里对此行为进行解释。

如果出问题了，我们可以通过使用方法或者 getter/setter 替代类字段，来修复这个问题。

### [深入：内部探究和 [[HomeObject\]]](https://zh.javascript.info/class-inheritance#shen-ru-nei-bu-tan-jiu-he-homeobject)

**进阶内容**

如果你是第一次阅读本教程，那么则可以跳过本节。

这是关于继承和 `super` 背后的内部机制。

让我们更深入地研究 `super`。我们将在这个过程中发现一些有趣的事儿。

首先要说的是，从我们迄今为止学到的知识来看，`super` 是不可能运行的。

的确是这样，让我们问问自己，以技术的角度它是如何工作的？当一个对象方法执行时，它会将当前对象作为 `this`。随后如果我们调用 `super.method()`，那么引擎需要从当前对象的原型中获取 `method`。但这是怎么做到的？

这个任务看起来是挺容易的，但其实并不简单。引擎知道当前对象的 `this`，所以它可以获取父 `method` 作为 `this.__proto__.method`。不幸的是，这个“天真”的解决方法是行不通的。

让我们演示一下这个问题。简单起见，我们使用普通对象而不使用类。

如果你不想知道更多的细节知识，你可以跳过此部分，并转到下面的 `[[HomeObject]]` 小节。这没关系的。但如果你感兴趣，想学习更深入的知识，那就继续阅读吧。

在下面的例子中，`rabbit.__proto__ = animal`。现在让我们尝试一下：在 `rabbit.eat()` 我们将会使用 `this.__proto__` 调用 `animal.eat()`：

```javascript
let animal = {
  name: "Animal",
  eat() {
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    // 这就是 super.eat() 可以大概工作的方式
    this.__proto__.eat.call(this); // (*)
  }
};

rabbit.eat(); // Rabbit eats.
```

在 `(*)` 这一行，我们从原型（`animal`）中获取 `eat`，并在当前对象的上下文中调用它。请注意，`.call(this)` 在这里非常重要，因为简单的调用 `this.__proto__.eat()` 将在原型的上下文中执行 `eat`，而非当前对象。

在上面的代码中，它确实按照了期望运行：我们获得了正确的 `alert`。

现在，让我们在原型链上再添加一个对象。我们将看到这件事是如何被打破的：

```javascript
let animal = {
  name: "Animal",
  eat() {
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  eat() {
    // ...bounce around rabbit-style and call parent (animal) method
    this.__proto__.eat.call(this); // (*)
  }
};

let longEar = {
  __proto__: rabbit,
  eat() {
    // ...do something with long ears and call parent (rabbit) method
    this.__proto__.eat.call(this); // (**)
  }
};

longEar.eat(); // Error: Maximum call stack size exceeded
```

代码无法再运行了！我们可以看到，在试图调用 `longEar.eat()` 时抛出了错误。

原因可能不那么明显，但是如果我们跟踪 `longEar.eat()` 调用，就可以发现原因。在 `(*)` 和 `(**)` 这两行中，`this` 的值都是当前对象（`longEar`）。这是至关重要的一点：所有的对象方法都将当前对象作为 `this`，而非原型或其他什么东西。

因此，在 `(*)` 和 `(**)` 这两行中，`this.__proto__` 的值是完全相同的：都是 `rabbit`。它们俩都调用的是 `rabbit.eat`，它们在不停地循环调用自己，而不是在原型链上向上寻找方法。

这张图介绍了发生的情况：

1. 在 `longEar.eat()` 中，`(**)` 这一行调用 `rabbit.eat` 并为其提供 `this=longEar`。

   ```javascript
   // 在 longEar.eat() 中我们有 this = longEar
   this.__proto__.eat.call(this) // (**)
   // 变成了
   longEar.__proto__.eat.call(this)
   // 也就是
   rabbit.eat.call(this);
   ```

2. 之后在 `rabbit.eat` 的 `(*)` 行中，我们希望将函数调用在原型链上向更高层传递，但是 `this=longEar`，所以 `this.__proto__.eat` 又是 `rabbit.eat`！

   ```javascript
   // 在 rabbit.eat() 中我们依然有 this = longEar
   this.__proto__.eat.call(this) // (*)
   // 变成了
   longEar.__proto__.eat.call(this)
   // 或（再一次）
   rabbit.eat.call(this);
   ```

3. ……所以 `rabbit.eat` 在不停地循环调用自己，因此它无法进一步地提升。

这个问题没法仅仅通过使用 `this` 来解决。

#### [`[[HomeObject\]]`](https://zh.javascript.info/class-inheritance#homeobject)

为了提供解决方法，JavaScript 为函数添加了一个特殊的内部属性：`[[HomeObject]]`。

当一个函数被定义为类或者对象方法时，它的 `[[HomeObject]]` 属性就成为了该对象。

然后 `super` 使用它来解析（resolve）父原型及其方法。

让我们看看它是怎么工作的，首先，对于普通对象：

```javascript
let animal = {
  name: "Animal",
  eat() {         // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  }
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// 正确执行
longEar.eat();  // Long Ear eats.
```

它基于 `[[HomeObject]]` 运行机制按照预期执行。一个方法，例如 `longEar.eat`，知道其 `[[HomeObject]]` 并且从其原型中获取父方法。并没有使用 `this`。

#### [方法并不是“自由”的](https://zh.javascript.info/class-inheritance#fang-fa-bing-bu-shi-zi-you-de)

正如我们之前所知道的，函数通常都是“自由”的，并没有绑定到 JavaScript 中的对象。正因如此，它们可以在对象之间复制，并用另外一个 `this` 调用它。

`[[HomeObject]]` 的存在违反了这个原则，因为方法记住了它们的对象。`[[HomeObject]]` 不能被更改，所以这个绑定是永久的。

在 JavaScript 语言中 `[[HomeObject]]` 仅被用于 `super`。所以，如果一个方法不使用 `super`，那么我们仍然可以视它为自由的并且可在对象之间复制。但是用了 `super` 再这样做可能就会出错。

下面是复制后错误的 `super` 结果的示例：

```javascript
let animal = {
  sayHi() {
    alert(`I'm an animal`);
  }
};

// rabbit 继承自 animal
let rabbit = {
  __proto__: animal,
  sayHi() {
    super.sayHi();
  }
};

let plant = {
  sayHi() {
    alert("I'm a plant");
  }
};

// tree 继承自 plant
let tree = {
  __proto__: plant,
  sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // I'm an animal (?!?)
```

调用 `tree.sayHi()` 显示 “I’m an animal”。这绝对是错误的。

原因很简单：

- 在 `(*)` 行，`tree.sayHi` 方法是从 `rabbit` 复制而来。也许我们只是想避免重复代码？
- 它的 `[[HomeObject]]` 是 `rabbit`，因为它是在 `rabbit` 中创建的。没有办法修改 `[[HomeObject]]`。
- `tree.sayHi()` 内具有 `super.sayHi()`。它从 `rabbit` 中上溯，然后从 `animal` 中获取方法。

这是发生的情况示意图：

#### [方法，不是函数属性](https://zh.javascript.info/class-inheritance#fang-fa-bu-shi-han-shu-shu-xing)

`[[HomeObject]]` 是为类和普通对象中的方法定义的。但是对于对象而言，方法必须确切指定为 `method()`，而不是 `"method: function()"`。

这个差别对我们来说可能不重要，但是对 JavaScript 来说却非常重要。

在下面的例子中，使用非方法（non-method）语法进行了比较。未设置 `[[HomeObject]]` 属性，并且继承无效：

```javascript
let animal = {
  eat: function() { // 这里是故意这样写的，而不是 eat() {...
    // ...
  }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }
};

rabbit.eat();  // 错误调用 super（因为这里没有 [[HomeObject]]）
```

### [总结](https://zh.javascript.info/class-inheritance#zong-jie)

1. 想要扩展一个类：

   ```
   class Child extends Parent
   ```

   ：

   - 这意味着 `Child.prototype.__proto__` 将是 `Parent.prototype`，所以方法会被继承。

2. 重写一个 constructor：

   - 在使用 `this` 之前，我们必须在 `Child` 的 constructor 中将父 constructor 调用为 `super()`。

3. 重写一个方法：

   - 我们可以在一个 `Child` 方法中使用 `super.method()` 来调用 `Parent` 方法。

4. 内部：

   - 方法在内部的 `[[HomeObject]]` 属性中记住了它们的类/对象。这就是 `super` 如何解析父方法的。
   - 因此，将一个带有 `super` 的方法从一个对象复制到另一个对象是不安全的。

补充：

- 箭头函数没有自己的 `this` 或 `super`，所以它们能融入到就近的上下文中，像透明似的。

## 62.静态属性和静态方法

我们可以把一个方法赋值给类的函数本身，而不是赋给它的 `"prototype"`。这样的方法被称为 **静态的（static）**。

在一个类中，它们以 `static` 关键字开头，如下所示：

```javascript
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
```

这实际上跟直接将其作为属性赋值的作用相同：

```javascript
class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true
```

在 `User.staticMethod()` 调用中的 `this` 的值是类构造器 `User` 自身（“点符号前面的对象”规则）。

通常，静态方法用于实现属于该类但不属于该类任何特定对象的函数。

例如，我们有对象 `Article`，并且需要一个方法来比较它们。一个自然的解决方案就是添加 `Article.compare` 方法，像下面这样：

```javascript
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// 用法
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS
```

这里 `Article.compare` 代表“上面的”文章，意思是比较它们。它不是文章的方法，而是整个 class 的方法。

另一个例子是所谓的“工厂”方法。想象一下，我们需要通过几种方法来创建一个文章：

1. 通过用给定的参数来创建（`title`，`date` 等）。
2. 使用今天的日期来创建一个空的文章。
3. ……其它方法。

第一种方法我们可以通过 constructor 来实现。对于第二种方式，我们可以创建类的一个静态方法来实现。

就像这里的 `Article.createTodays()`：

```javascript
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // 记住 this = Article
    return new this("Today's digest", new Date());
  }
}

let article = Article.createTodays();

alert( article.title ); // Today's digest
```

现在，每当我们需要创建一个今天的文章时，我们就可以调用 `Article.createTodays()`。再说明一次，它不是一个文章的方法，而是整个 class 的方法。

静态方法也被用于与数据库相关的公共类，可以用于搜索/保存/删除数据库中的条目， 就像这样：

```javascript
// 假定 Article 是一个用来管理文章的特殊类
// 静态方法用于移除文章：
Article.remove({id: 12345});
```

### [静态属性](https://zh.javascript.info/static-properties-methods#jing-tai-shu-xing)

**A recent addition**

This is a recent addition to the language. Examples work in the recent Chrome.

静态的属性也是可能的，它们看起来就像常规的类属性，但前面加有 `static`：

```javascript
class Article {
  static publisher = "Levi Ding";
}

alert( Article.publisher ); // Levi Ding
```

这等同于直接给 `Article` 赋值：

```javascript
Article.publisher = "Levi Ding";
```

### [继承静态属性和方法](https://zh.javascript.info/static-properties-methods#ji-cheng-jing-tai-shu-xing-he-fang-fa)

静态属性和方法是可被继承的。

例如，下面这段代码中的 `Animal.compare` 和 `Animal.planet` 是可被继承的，可以通过 `Rabbit.compare` 和 `Rabbit.planet` 来访问：

```javascript
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// 继承于 Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth
```

现在我们调用 `Rabbit.compare` 时，继承的 `Animal.compare` 将会被调用。

它是如何工作的？再次，使用原型。你可能已经猜到了，`extends` 让 `Rabbit` 的 `[[Prototype]]` 指向了 `Animal`。

所以，`Rabbit extends Animal` 创建了两个 `[[Prototype]]` 引用：

1. `Rabbit` 函数原型继承自 `Animal` 函数。
2. `Rabbit.prototype` 原型继承自 `Animal.prototype`。

结果就是，继承对常规方法和静态方法都有效。

这里，让我们通过代码来检验一下：

```javascript
class Animal {}
class Rabbit extends Animal {}

// 对于静态的
alert(Rabbit.__proto__ === Animal); // true

// 对于常规方法
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
```

### [总结](https://zh.javascript.info/static-properties-methods#zong-jie)

静态方法被用于实现属于整个类的功能。它与具体的类实例无关。

举个例子， 一个用于进行比较的方法 `Article.compare(article1, article2)` 或一个工厂（factory）方法 `Article.createTodays()`。

在类生命中，它们都被用关键字 `static` 进行了标记。

静态属性被用于当我们想要存储类级别的数据时，而不是绑定到实例。

语法如下所示：

```javascript
class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
```

从技术上讲，静态声明与直接给类本身赋值相同：

```javascript
MyClass.property = ...
MyClass.method = ...
```

静态属性和方法是可被继承的。

对于 `class B extends A`，类 `B` 的 prototype 指向了 `A`：`B.[[Prototype]] = A`。因此，如果一个字段在 `B` 中没有找到，会继续在 `A` 中查找。

## 63.私有的和受保护的属性和方法

### [内部接口和外部接口](https://zh.javascript.info/private-protected-properties-methods#nei-bu-jie-kou-he-wai-bu-jie-kou)

在面向对象的编程中，属性和方法分为两组：

- **内部接口** —— 可以通过该类的其他方法访问，但不能从外部访问的方法和属性。
- **外部接口** —— 也可以从类的外部访问的方法和属性。

如果我们继续用咖啡机进行类比 —— 内部隐藏的内容：锅炉管，加热元件等 —— 是咖啡机的内部接口。

内部接口用于对象工作，它的细节相互使用。例如，锅炉管连接到加热元件。

但是从外面看，一台咖啡机被保护壳罩住了，所以没有人可以接触到其内部接口。细节信息被隐藏起来并且无法访问。我们可以通过外部接口使用它的功能。

所以，我们需要使用一个对象时只需知道它的外部接口。我们可能完全不知道它的内部是如何工作的，这太好了。

这是个概括性的介绍。

在 JavaScript 中，有两种类型的对象字段（属性和方法）：

- 公共的：可从任何地方访问。它们构成了外部接口。到目前为止，我们只使用了公共的属性和方法。
- 私有的：只能从类的内部访问。这些用于内部接口。

在许多其他编程语言中，还存在“受保护”的字段：只能从类的内部和基于其扩展的类的内部访问（例如私有的，但可以从继承的类进行访问）。它们对于内部接口也很有用。从某种意义上讲，它们比私有的属性和方法更为广泛，因为我们通常希望继承类来访问它们。

受保护的字段不是在语言级别的 Javascript 中实现的，但实际上它们非常方便，因为它们是在 Javascript 中模拟的类定义语法。

现在，我们将使用所有这些类型的属性在 Javascript 中制作咖啡机。咖啡机有很多细节，我们不会对它们进行全面模拟以保持简洁（尽管我们可以）。

### [受保护的 “waterAmount”](https://zh.javascript.info/private-protected-properties-methods#shou-bao-hu-de-wateramount)

首先，让我们做一个简单的咖啡机类：

```javascript
class CoffeeMachine {
  waterAmount = 0; // 内部的水量

  constructor(power) {
    this.power = power;
    alert( `Created a coffee-machine, power: ${power}` );
  }

}

// 创建咖啡机
let coffeeMachine = new CoffeeMachine(100);

// 加水
coffeeMachine.waterAmount = 200;
```

现在，属性 `waterAmount` 和 `power` 是公共的。我们可以轻松地从外部将它们 get/set 成任何值。

让我们将 `waterAmount` 属性更改为受保护的属性，以对其进行更多控制。例如，我们不希望任何人将它的值设置为小于零的数。

**受保护的属性通常以下划线 `_` 作为前缀。**

这不是在语言级别强制实施的，但是程序员之间有一个众所周知的约定，即不应该从外部访问此类型的属性和方法。

所以我们的属性将被命名为 `_waterAmount`：

```javascript
class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// 创建咖啡机
let coffeeMachine = new CoffeeMachine(100);

// 加水
coffeeMachine.waterAmount = -10; // Error: Negative water
```

现在访问已受到控制，因此将水量的值设置为小于零的数将会失败。

### [只读的 “power”](https://zh.javascript.info/private-protected-properties-methods#zhi-du-de-power)

对于 `power` 属性，让我们将它设为只读。有时候一个属性必须只能被在创建时进行设置，之后不再被修改。

咖啡机就是这种情况：功率永远不会改变。

要做到这一点，我们只需要设置 getter，而不设置 setter：

```javascript
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// 创建咖啡机
let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // 功率是：100W

coffeeMachine.power = 25; // Error（没有 setter）
```

**Getter/setter 函数**

这里我们使用了 getter/setter 语法。

但大多数时候首选 `get.../set...` 函数，像这样：

```javascript
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);
```

这看起来有点长，但函数更灵活。它们可以接受多个参数（即使我们现在还不需要）。

另一方面，get/set 语法更短，所以最终没有严格的规定，而是由你自己来决定。

**受保护的字段是可以被继承的**

如果我们继承 `class MegaMachine extends CoffeeMachine`，那么什么都无法阻止我们从新的类中的方法访问 `this._waterAmount` 或 `this._power`。

所以受保护的字段是自然可被继承的。与我们接下来将看到的私有字段不同。

### [私有的 “#waterLimit”](https://zh.javascript.info/private-protected-properties-methods#si-you-de-waterlimit)

**A recent addition**

This is a recent addition to the language. Not supported in JavaScript engines, or supported partially yet, requires polyfilling.

这儿有一个马上就会被加到规范中的已完成的 Javascript 提案，它为私有属性和方法提供语言级支持。

私有属性和方法应该以 `#` 开头。它们只在类的内部可被访问。

例如，这儿有一个私有属性 `#waterLimit` 和检查水量的私有方法 `#checkWater`：

```javascript
class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }

}

let coffeeMachine = new CoffeeMachine();

// 不能从类的外部访问类的私有属性和方法
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error
```

在语言级别，`#` 是该字段为私有的特殊标志。我们无法从外部或从继承的类中访问它。

私有字段与公共字段不会发生冲突。我们可以同时拥有私有的 `#waterAmount` 和公共的 `waterAmount` 字段。

例如，让我们使 `waterAmount` 成为 `#waterAmount` 的一个访问器：

```javascript
class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
```

与受保护的字段不同，私有字段由语言本身强制执行。这是好事儿。

但是如果我们继承自 `CoffeeMachine`，那么我们将无法直接访问 `#waterAmount`。我们需要依靠 `waterAmount` getter/setter：

```javascript
class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}
```

在许多情况下，这种限制太严重了。如果我们扩展 `CoffeeMachine`，则可能有正当理由访问其内部。这就是为什么大多数时候都会使用受保护字段，即使它们不受语言语法的支持。

**私有字段不能通过 this[name] 访问**

私有字段很特别。

正如我们所知道的，通常我们可以使用 `this[name]` 访问字段：

```javascript
class User {
  ...
  sayHi() {
    let fieldName = "name";
    alert(`Hello, ${this[fieldName]}`);
  }
}
```

对于私有字段来说，这是不可能的：`this['#name']` 不起作用。这是确保私有性的语法限制。

### [总结](https://zh.javascript.info/private-protected-properties-methods#zong-jie)

就面向对象编程（OOP）而言，内部接口与外部接口的划分被称为 [封装](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming))。

它具有以下优点：

- 保护用户，使他们不会误伤自己

  想象一下，有一群开发人员在使用一个咖啡机。这个咖啡机是由“最好的咖啡机”公司制造的，工作正常，但是保护罩被拿掉了。因此内部接口暴露了出来。所有的开发人员都是文明的 —— 他们按照预期使用咖啡机。但其中的一个人，约翰，他认为自己是最聪明的人，并对咖啡机的内部做了一些调整。然而，咖啡机两天后就坏了。这肯定不是约翰的错，而是那个取下保护罩并让约翰进行操作的人的错。编程也一样。如果一个 class 的使用者想要改变那些本不打算被从外部更改的东西 —— 后果是不可预测的。

- 可支持性

  编程的情况比现实生活中的咖啡机要复杂得多，因为我们不只是购买一次。我们还需要不断开发和改进代码。**如果我们严格界定内部接口，那么这个 class 的开发人员可以自由地更改其内部属性和方法，甚至无需通知用户。**如果你是这样的 class 的开发者，那么你会很高兴知道可以安全地重命名私有变量，可以更改甚至删除其参数，因为没有外部代码依赖于它们。对于用户来说，当新版本问世时，应用的内部可能被进行了全面检修，但如果外部接口相同，则仍然很容易升级。

- 隐藏复杂性

  人们喜欢使用简单的东西。至少从外部来看是这样。内部的东西则是另外一回事了。程序员也不例外。**当实施细节被隐藏，并提供了简单且有据可查的外部接口时，总是很方便的。**

为了隐藏内部接口，我们使用受保护的或私有的属性：

- 受保护的字段以 `_` 开头。这是一个众所周知的约定，不是在语言级别强制执行的。程序员应该只通过它的类和从它继承的类中访问以 `_` 开头的字段。
- 私有字段以 `#` 开头。JavaScript 确保我们只能从类的内部访问它们。

目前，各个浏览器对私有字段的支持不是很好，但可以用 polyfill 解决。

## 64.扩展内建类

内建的类，例如 `Array`，`Map` 等也都是可以扩展的（extendable）。

例如，这里有一个继承自原生 `Array` 的类 `PowerArray`：

```javascript
// 给 PowerArray 新增了一个方法（可以增加更多）
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false
```

请注意一个非常有趣的事儿。内建的方法例如 `filter`，`map` 等 — 返回的正是子类 `PowerArray` 的新对象。它们内部使用了对象的 `constructor` 属性来实现这一功能。

在上面的例子中，

```javascript
arr.constructor === PowerArray
```

当 `arr.filter()` 被调用时，它的内部使用的是 `arr.constructor` 来创建新的结果数组，而不是使用原生的 `Array`。这真的很酷，因为我们可以在结果数组上继续使用 `PowerArray` 的方法。

甚至，我们可以定制这种行为。

我们可以给这个类添加一个特殊的静态 getter `Symbol.species`。如果存在，则应返回 JavaScript 在内部用来在 `map` 和 `filter` 等方法中创建新实体的 `constructor`。

如果我们希望像 `map` 或 `filter` 这样的内建方法返回常规数组，我们可以在 `Symbol.species` 中返回 `Array`，就像这样：

```javascript
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // 内建方法将使用这个作为 constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter 使用 arr.constructor[Symbol.species] 作为 constructor 创建新数组
let filteredArr = arr.filter(item => item >= 10);

// filteredArr 不是 PowerArray，而是 Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
```

正如你所看到的，现在 `.filter` 返回 `Array`。所以扩展的功能不再传递。

**其他集合的工作方式类似**

其他集合，例如 `Map` 和 `Set` 的工作方式类似。它们也使用 `Symbol.species`。

#### [内建类没有静态方法继承](https://zh.javascript.info/extend-natives#nei-jian-lei-mei-you-jing-tai-fang-fa-ji-cheng)

内建对象有它们自己的静态方法，例如 `Object.keys`，`Array.isArray` 等。

如我们所知道的，原生的类互相扩展。例如，`Array` 扩展自 `Object`。

通常，当一个类扩展另一个类时，静态方法和非静态方法都会被继承。这已经在 [静态属性和静态方法](https://zh.javascript.info/static-properties-methods#statics-and-inheritance) 中详细地解释过了。

但内建类却是一个例外。它们相互间不继承静态方法。

例如，`Array` 和 `Date` 都继承自 `Object`，所以它们的实例都有来自 `Object.prototype` 的方法。但 `Array.[[Prototype]]` 并不指向 `Object`，所以它们没有例如 `Array.keys()`（或 `Date.keys()`）这些静态方法。

这里有一张 `Date` 和 `Object` 的结构关系图：

正如你所看到的，`Date` 和 `Object` 之间没有连结。它们是独立的，只有 `Date.prototype` 继承自 `Object.prototype`，仅此而已。

与我们所了解的通过 `extends` 获得的继承相比，这是内建对象之间继承的一个重要区别

## 65.类检查instanceof

`instanceof` 操作符用于检查一个对象是否属于某个特定的 class。同时，它还考虑了继承。

在许多情况下，可能都需要进行此类检查。例如，它可以被用来构建一个 **多态性（polymorphic）** 的函数，该函数根据参数的类型对参数进行不同的处理。

### [instanceof 操作符](https://zh.javascript.info/instanceof#ref-instanceof)

语法：

```javascript
obj instanceof Class
```

如果 `obj` 隶属于 `Class` 类（或 `Class` 类的衍生类），则返回 `true`。

例如：

```javascript
class Rabbit {}
let rabbit = new Rabbit();

// rabbit 是 Rabbit class 的对象吗？
alert( rabbit instanceof Rabbit ); // true
```

它还可以与构造函数一起使用：

```javascript
// 这里是构造函数，而不是 class
function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true
```

……与诸如 `Array` 之类的内建 class 一起使用：

```javascript
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true
```

有一点需要留意，`arr` 同时还隶属于 `Object` 类。因为从原型上来讲，`Array` 是继承自 `Object` 的。

通常，`instanceof` 在检查中会将原型链考虑在内。此外，我们还可以在静态方法 `Symbol.hasInstance` 中设置自定义逻辑。

`obj instanceof Class` 算法的执行过程大致如下：

1. 如果这儿有静态方法 `Symbol.hasInstance`，那就直接调用这个方法：

   例如：

   ```javascript
   // 设置 instanceOf 检查
   // 并假设具有 canEat 属性的都是 animal
   class Animal {
     static [Symbol.hasInstance](obj) {
       if (obj.canEat) return true;
     }
   }
   
   let obj = { canEat: true };
   
   alert(obj instanceof Animal); // true：Animal[Symbol.hasInstance](obj) 被调用
   ```

2. 大多数 class 没有 `Symbol.hasInstance`。在这种情况下，标准的逻辑是：使用 `obj instanceOf Class` 检查 `Class.prototype` 是否等于 `obj` 的原型链中的原型之一。

   换句话说就是，一个接一个地比较：

   ```javascript
   obj.__proto__ === Class.prototype?
   obj.__proto__.__proto__ === Class.prototype?
   obj.__proto__.__proto__.__proto__ === Class.prototype?
   ...
   // 如果任意一个的答案为 true，则返回 true
   // 否则，如果我们已经检查到了原型链的尾端，则返回 false
   ```

   在上面那个例子中，`rabbit.__proto__ === Rabbit.prototype`，所以立即就给出了结果。

   而在继承的例子中，匹配将在第二步进行：

   ```javascript
   class Animal {}
   class Rabbit extends Animal {}
   
   let rabbit = new Rabbit();
   alert(rabbit instanceof Animal); // true
   
   // rabbit.__proto__ === Rabbit.prototype
   // rabbit.__proto__.__proto__ === Animal.prototype（匹配！）
   ```

下图展示了 `rabbit instanceof Animal` 的执行过程中，`Animal.prototype` 是如何参与比较的：

这里还要提到一个方法 [objA.isPrototypeOf(objB)](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/object/isPrototypeOf)，如果 `objA` 处在 `objB` 的原型链中，则返回 `true`。所以，可以将 `obj instanceof Class` 检查改为 `Class.prototype.isPrototypeOf(obj)`。

这很有趣，但是 `Class` 的 constructor 自身是不参与检查的！检查过程只和原型链以及 `Class.prototype` 有关。

创建对象后，如果更改 `prototype` 属性，可能会导致有趣的结果。

就像这样：

```javascript
function Rabbit() {}
let rabbit = new Rabbit();

// 修改了 prototype
Rabbit.prototype = {};

// ...再也不是 rabbit 了！
alert( rabbit instanceof Rabbit ); // false
```

### [福利：使用 Object.prototype.toString 方法来揭示类型](https://zh.javascript.info/instanceof#fu-li-shi-yong-objectprototypetostring-fang-fa-lai-jie-shi-lei-xing)

大家都知道，一个普通对象被转化为字符串时为 `[object Object]`：

```javascript
let obj = {};

alert(obj); // [object Object]
alert(obj.toString()); // 同上
```

这是通过 `toString` 方法实现的。但是这儿有一个隐藏的功能，该功能可以使 `toString` 实际上比这更强大。我们可以将其作为 `typeof` 的增强版或者 `instanceof` 的替代方法来使用。

听起来挺不可思议？那是自然，精彩马上揭晓。

按照 [规范](https://tc39.github.io/ecma262/#sec-object.prototype.tostring) 所讲，内建的 `toString` 方法可以被从对象中提取出来，并在任何其他值的上下文中执行。其结果取决于该值。

- 对于 number 类型，结果是 `[object Number]`
- 对于 boolean 类型，结果是 `[object Boolean]`
- 对于 `null`：`[object Null]`
- 对于 `undefined`：`[object Undefined]`
- 对于数组：`[object Array]`
- ……等（可自定义）

让我们演示一下：

```javascript
// 方便起见，将 toString 方法复制到一个变量中
let objectToString = Object.prototype.toString;

// 它是什么类型的？
let arr = [];

alert( objectToString.call(arr) ); // [object Array]
```

这里我们用到了在 [装饰器模式和转发，call/apply](https://zh.javascript.info/call-apply-decorators) 一章中讲过的 [call](https://developer.mozilla.org/zh/docs/Web/JavaScript/Reference/Global_Objects/function/call) 方法来在上下文 `this=arr` 中执行函数 `objectToString`。

在内部，`toString` 的算法会检查 `this`，并返回相应的结果。再举几个例子：

```javascript
let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]
```

#### [Symbol.toStringTag](https://zh.javascript.info/instanceof#symboltostringtag)

可以使用特殊的对象属性 `Symbol.toStringTag` 自定义对象的 `toString` 方法的行为。

例如：

```javascript
let user = {
  [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]
```

对于大多数特定于环境的对象，都有一个这样的属性。下面是一些特定于浏览器的示例：

```javascript
// 特定于环境的对象和类的 toStringTag：
alert( window[Symbol.toStringTag]); // Window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
```

正如我们所看到的，输出结果恰好是 `Symbol.toStringTag`（如果存在），只不过被包裹进了 `[object ...]` 里。

这样一来，我们手头上就有了个“磕了药似的 typeof”，不仅能检查原始数据类型，而且适用于内建对象，更可贵的是还支持自定义。

所以，如果我们想要获取内建对象的类型，并希望把该信息以字符串的形式返回，而不只是检查类型的话，我们可以用 `{}.toString.call` 替代 `instanceof`。

### [总结](https://zh.javascript.info/instanceof#zong-jie)

让我们总结一下我们知道的类型检查方法：

|               | 用于                                                         | 返回值     |
| :------------ | :----------------------------------------------------------- | :--------- |
| `typeof`      | 原始数据类型                                                 | string     |
| `{}.toString` | 原始数据类型，内建对象，包含 `Symbol.toStringTag` 属性的对象 | string     |
| `instanceof`  | 对象                                                         | true/false |

正如我们所看到的，从技术上讲，`{}.toString` 是一种“更高级的” `typeof`。

当我们使用类的层次结构（hierarchy），并想要对该类进行检查，同时还要考虑继承时，这种场景下 `instanceof` 操作符确实很出色。
