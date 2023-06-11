import{_ as r,o as e,c as a,O as d,z as t}from"./chunks/framework.9ae6acb2.js";const y=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"study/lang-study/regexp.md","filePath":"study/lang-study/regexp.md"}'),l={name:"study/lang-study/regexp.md"},n=d('<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><h2 id="一-入门使用" tabindex="-1">一.入门使用 <a class="header-anchor" href="#一-入门使用" aria-label="Permalink to &quot;一.入门使用&quot;">​</a></h2><p><strong>匹配单个字符的元字符</strong></p><table><thead><tr><th></th><th>元字符</th><th>匹配对象</th></tr></thead><tbody><tr><td>.</td><td>点号</td><td>匹配任意单个字符</td></tr><tr><td>[...]</td><td>字符组</td><td>匹配单个列出的字符</td></tr><tr><td>[^...]</td><td>排除型字符组</td><td>匹配单个未列出的字符</td></tr><tr><td>\\char</td><td>转义字符</td><td>如果char为元字符或转义字符无特殊含义时，匹配char对应的普通字符</td></tr></tbody></table><p><strong>提供计数功能的元字符</strong></p>',5),o=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"？"),t("th",null,"问号"),t("th",null,"容许匹配一次但非必须")])]),t("tbody",null,[t("tr",null,[t("td",null,"*"),t("td",null,"星号"),t("td",null,"可以匹配任意多次，也可能不匹配")]),t("tr",null,[t("td",null,"+"),t("td",null,"加号"),t("td",null,"至少需要匹配一次，至多可能任意多次")]),t("tr",null,[t("td",{"min,max":""}),t("td",null,"区间量词"),t("td",null,"至少需要min次，至多容许max次")])])],-1),h=d("<p><strong>匹配位置的元字符</strong></p><table><thead><tr><th>^</th><th>脱字符</th><th>匹配一行的开头位置</th></tr></thead><tbody><tr><td>$</td><td>美元符</td><td>匹配一行的结束位置</td></tr><tr><td>\\&lt;</td><td>单词分界符</td><td>匹配单词开始的位置</td></tr><tr><td>\\&gt;</td><td>单词分界符</td><td>匹配单词结束的位置</td></tr></tbody></table><p><strong>其他元字符</strong></p><table><thead><tr><th>|</th><th>alternation(选择)</th><th>匹配任意分隔的表达式</th></tr></thead><tbody><tr><td>(...)</td><td>括号</td><td>限定多选结构的范围，标注量词作用的元素</td></tr><tr><td>\\1,\\2,....</td><td>反向引用</td><td>匹配之前的第一、第二组括号内的字表达式匹配的文本。（并非所有的语言都支持）</td></tr></tbody></table>",4),s=[n,o,h];function _(u,c,i,p,b,g){return e(),a("div",null,s)}const T=r(l,[["render",_]]);export{y as __pageData,T as default};
