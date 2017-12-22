# css 规则

## 特殊性：

1. 内联样式（style） 的特殊性： 1000
1. ID 的特殊性： 0100
1. class，伪类，属性选择([id='uu'])的特殊性： 0010，
1. 元素和伪元素的特殊性： 0001，
1. 通配选择和结合符没有意义: 0000
1. 继承没有0特殊性(如：＊｛color:gray｝h1{color:black}; <h1>color black<em>color gray</em></h1>),o0 特殊性大于没有特殊性

## font-family: 字体名含有空格，包括＃，$，％之类的符号，或者与关键字冲突的需要加引号（单，双都行）

## 元素的高，宽

1. offsetWidth= padding + width + border
1. clientWidth = padding + width
1. auto 可以margin 和width 用于设置，垂直方向的margin－top，margin－bottom：auto，margin 值为0；水平方向：width和margin 都为auto时，margin 值为0；
1. 替换元素（如图像），width 为auto，其宽度为图像的真实宽度
1. 父元素height:auto;子div height: 50%;则父height＝子height
1. 垂直的margin 会合并，相同符号，取绝对值大的，一正一负，则加起来的值
