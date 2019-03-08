---
title: ajax
---

# ajax

## Functions

<dl>
<dt><a href="#dynamicUrl">dynamicUrl(url, urlParams)</a> ⇒ <code>String</code></dt>
<dd><p>动态URL，把urlParams里面的值按顺序填充到URL中</p>
</dd>
<dt><a href="#fetchMethodData">fetchMethodData(method, url)</a> ⇒ <code>function</code></dt>
<dd><p>请求方法函数</p>
</dd>
<dt><a href="#fetchData">fetchData(config)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd><p>请求方法</p>
</dd>
</dl>

<a name="dynamicUrl"></a>

## dynamicUrl(url, urlParams) ⇒ <code>String</code>
动态URL，把urlParams里面的值按顺序填充到URL中

**Kind**: global function  
**Returns**: <code>String</code> - url  返回正确的url， /api/v1/12/20  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | 带占位符的URL 如 /api/v1/{0}/{1} |
| urlParams | <code>Array</code> | 需要填充的数组， 如 [12, 20] |

<a name="fetchMethodData"></a>

## fetchMethodData(method, url) ⇒ <code>function</code>
请求方法函数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| method |  |  |
| url | <code>String</code> | 请求路径 |

<a name="fetchData"></a>

## fetchData(config) ⇒ <code>Promise.&lt;\*&gt;</code>
请求方法

**Kind**: global function  

| Param |
| --- |
| config | 

