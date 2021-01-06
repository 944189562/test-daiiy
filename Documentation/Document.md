总结
每个 DOM 节点都属于一个特定的类。这些类形成层次结构（hierarchy）。完整的属性和方法集是继承的结果。

主要的 DOM 节点属性有：

nodeType
我们可以使用它来查看节点是文本节点还是元素节点。它具有一个数值型值（numeric value）：1 表示元素，3 表示文本节点，其他一些则代表其他节点类型。只读。
nodeName/tagName
用于元素名，标签名（除了 XML 模式，都要大写）。对于非元素节点，nodeName 描述了它是什么。只读。
innerHTML
元素的 HTML 内容。可以被修改。
outerHTML
元素的完整 HTML。对 elem.outerHTML 的写入操作不会触及 elem 本身。而是在外部上下文中将其替换为新的 HTML。
nodeValue/data
非元素节点（文本、注释）的内容。两者几乎一样，我们通常使用 data。可以被修改。
textContent
元素内的文本：HTML 减去所有 <tags>。写入文本会将文本放入元素内，所有特殊字符和标签均被视为文本。可以安全地插入用户生成的文本，并防止不必要的 HTML 插入。
hidden
当被设置为 true 时，执行与 CSS display:none 相同的事。
DOM 节点还具有其他属性，具体有哪些属性则取决于它们的类。例如，<input> 元素（HTMLInputElement）支持 value，type，而 <a> 元素（HTMLAnchorElement）则支持 href 等。大多数标准 HTML 特性（attribute）都具有相应的 DOM 属性。

特性（attribute）— 写在 HTML 中的内容。
属性（property）— DOM 对象中的内容。
简略的对比：

属性	特性
类型	任何值，标准的属性具有规范中描述的类型	字符串
名字	名字（name）是大小写敏感的	名字（name）是大小写不敏感的
操作特性的方法：

elem.hasAttribute(name) — 检查是否存在这个特性。
elem.getAttribute(name) — 获取这个特性值。
elem.setAttribute(name, value) — 设置这个特性值。
elem.removeAttribute(name) — 移除这个特性。
elem.attributes — 所有特性的集合。
在大多数情况下，最好使用 DOM 属性。仅当 DOM 属性无法满足开发需求，并且我们真的需要特性时，才使用特性，例如：

我们需要一个非标准的特性。但是如果它以 data- 开头，那么我们应该使用 dataset。
我们想要读取 HTML 中“所写的”值。对应的 DOM 属性可能不同，例如 href 属性一直是一个 完整的 URL，但是我们想要的是“原始的”值。

创建新节点的方法：

document.createElement(tag) — 用给定的标签创建一个元素节点，
document.createTextNode(value) — 创建一个文本节点（很少使用），
elem.cloneNode(deep) — 克隆元素，如果 deep==true 则与其后代一起克隆。
插入和移除节点的方法：

node.append(...nodes or strings) — 在 node 末尾插入，
node.prepend(...nodes or strings) — 在 node 开头插入，
node.before(...nodes or strings) — 在 node 之前插入，
node.after(...nodes or strings) — 在 node 之后插入，
node.replaceWith(...nodes or strings) — 替换 node。
node.remove() — 移除 node。
文本字符串被“作为文本”插入。

这里还有“旧式”的方法：

parent.appendChild(node)
parent.insertBefore(node, nextSibling)
parent.removeChild(node)
parent.replaceChild(newElem, node)
这些方法都返回 node。

在 html 中给定一些 HTML，elem.insertAdjacentHTML(where, html) 会根据 where 的值来插入它：

"beforebegin" — 将 html 插入到 elem 前面，
"afterbegin" — 将 html 插入到 elem 的开头，
"beforeend" — 将 html 插入到 elem 的末尾，
"afterend" — 将 html 插入到 elem 后面。
另外，还有类似的方法，elem.insertAdjacentText 和 elem.insertAdjacentElement，它们会插入文本字符串和元素，但很少使用。

要在页面加载完成之前将 HTML 附加到页面：

document.write(html)
页面加载完成后，这样的调用将会擦除文档。多见于旧脚本。

要管理 class，有两个 DOM 属性：

className — 字符串值，可以很好地管理整个类的集合。
classList — 具有 add/remove/toggle/contains 方法的对象，可以很好地支持单个类。
要改变样式：

style 属性是具有驼峰（camelCased）样式的对象。对其进行读取和修改与修改 "style" 特性（attribute）中的各个属性具有相同的效果。要了解如何应用 important 和其他特殊内容 — 在 MDN 中有一个方法列表。

style.cssText 属性对应于整个 "style" 特性（attribute），即完整的样式字符串。

要读取已解析的（resolved）样式（对于所有类，在应用所有 CSS 并计算最终值之后）：

getComputedStyle(elem, [pseudo]) 返回与 style 对象类似的，且包含了所有类的对象。只读。

元素大小和滚动
元素具有以下几何属性：

offsetParent — 是最接近的 CSS 定位的祖先，或者是 td，th，table，body。
offsetLeft/offsetTop — 是相对于 offsetParent 的左上角边缘的坐标。
offsetWidth/offsetHeight — 元素的“外部” width/height，边框（border）尺寸计算在内。
clientLeft/clientTop — 从元素左上角外角到左上角内角的距离。对于从左到右显示内容的操作系统来说，它们始终是左侧/顶部 border 的宽度。而对于从右到左显示内容的操作系统来说，垂直滚动条在左边，所以 clientLeft 也包括滚动条的宽度。
clientWidth/clientHeight — 内容的 width/height，包括 padding，但不包括滚动条（scrollbar）。
scrollWidth/scrollHeight — 内容的 width/height，就像 clientWidth/clientHeight 一样，但还包括元素的滚动出的不可见的部分。
scrollLeft/scrollTop — 从元素的左上角开始，滚动出元素的上半部分的 width/height。
除了 scrollLeft/scrollTop 外，所有属性都是只读的。如果我们修改 scrollLeft/scrollTop，浏览器会滚动对应的元素。
