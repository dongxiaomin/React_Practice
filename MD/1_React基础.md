## 关于虚拟DOM
1. 本质是Object类型的对象（一般对象）
2. 虚拟DOM比较“轻”，真实DOM比较“重”，因为虚拟DOM是React内部在用，无需真实DOM上那么多的属性。
3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上。

## react特点
使用虚拟 DOM 而不是真正的 DOM
可以用服务器渲染
遵循单向数据流或数据绑定
高效
声明式编码，组件化编码

## jsx语法规则：
1. 定义虚拟DOM时，不要写引号.
2. 标签中混入JS表达式时要用{}.
3. 样式的类名指定不要用class，要用className.
4. 内联样式，要用style={{key:value}}的形式去写.
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母
(1). 若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错。
(2). 若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。

## 【js语句(代码)】与【js表达式】
1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
下面这些都是表达式：
(1) a
(2) a+b
(3) demo(1)
(4) arr.map()
(5) function test () {}
2.语句(代码)：
下面这些都是语句(代码)：
(1) if(){}
(2) for(){}
(3) switch(){case:xxxx}

## 模块化
向外提供特定功能的js程序, 一般就是一个js文件
* 例: 一个公共方法

## 组件化
用来实现局部功能效果的代码和资源的集合(html js image)
* 例: 一个功能组件

## 函数式组件
1. React解析组件标签，找到了< />组件。
2. 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。

## 类组件
```
// 创建一个person类
class Person {
// 构造器
constructor(name, age) {
// this指向类实例对象
this.name = name,
this.age = age
}
// 一般方法
speak(){
// speak 方法放在类的原型对象上, 供实例使用
console.log(`${this.name} ${this.age}`)
}
}

const p1 = new Person("a", 18);
const p2 = new Person("b", 19);

console.log(p1); // Person {name: 'a', age: 18}
console.log(p2); // Person {name: 'b', age: 19}

p1.speak();
p2.speak();

```

```
class Student extends Person{
constructor( name, age, grade ){
super(name, age)
this.grade = grade
}
}
const s1 = new Student("c", 11, "一");
const s2 = new Student("d", 12, "二");

console.log(s1); // Student {name: 'c', age: 11, grade: '一'}
console.log(s2); // Student {name: 'd', age: 12, grade: '二'}
```

1. 类中的构造器 constructor 不是必须写, 要对实例进行一些初始化操作, 如添加指定属性时才写.
2. 如果 student 类继承了 person 类, 且 student 中写了构造器, 那 student 类构造器中的super 必须调用.
3. 类所定义的方法,都是放在了类的原型对象上, 供实例使用.

## 类式组件
1. 创建类式组件
```
class MyComponent extends React.Component{
//render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
//render中的this是谁？—— MyComponent的实例对象 / MyComponent 组件实例对象
render () {
return <h2>...</h2>
}
}
```

2. 渲染组件到页面
```
ReactDOM.render(<MyComponent/>,document.getElementById('test'))
```
<!-- 执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
1. React解析组件标签，找到了MyComponent组件。
2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。 -->

## 类式组件三大核心
### 1. 核心属性state
React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

向组件中添加局部状态:

```
// 创建组件
class Weather extends React.Component {

//构造器调用几次？ ———— 1次
constructor(props) {
console.log('constructor');
super(props)
//初始化状态
this.state = { isHot: false, wind: '微风' }
//解决changeWeather中this指向问题
this.changeWeather = this.changeWeather.bind(this)
}

//render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
render() {
console.log('render');
//读取状态
const { isHot, wind } = this.state
return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
}

//changeWeather调用几次？ ———— 点几次调几次
changeWeather() {
//changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
//由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
//类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

console.log('changeWeather');
//获取原来的isHot值
const isHot = this.state.isHot
//严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
this.setState({ isHot: !isHot })
console.log(this);

//严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
//this.state.isHot = !isHot //这是错误的写法
}
}
```

**注意**:
1. 每个class都由constructor方法,当class代码中没有显示声明constructor构造函数时,class会自动隐式添加该方法
2. 使用class继承的类, 在其constructor构造函数中必须首先调用构造函数自带的`super`方法, 在继承的父类中完成this对象的塑造并继承父类的属性方法.
如果不调用该方法子类3将没有this对象
3. 如果你的react class组件内部不需要创建state 绑定方法或者任何在constructor构造函数中要执行的代码推荐隐式创建constructor

### 事件绑定
onClick={}, 不能写成`onClick={changeWeather()} `

因为页面进来执行render()之后会立即执行 changeWeather 方法，把undefined赋给了onClick
所以当你再次点击标题的时候是没有反应的，因为此时为undefined，react中如果遇到是undefined是不做任何动作的

```
onClick={this.changeWeather}
```

### 解决类中this指向

构造器中的this一定是类的实例对象,原型方法也一定是给实例调用的
实例调用方法那么方法中的this就是实例,类中方法都开启了局部严格模式所以this都是undefine

注意: 构造函数bind做了什么？
```
this.changeWeather = this.changeWeather.bind(this)
```

bind: 做了两件事情
* 生成新的函数并且改变this为Weather的实例对象
* this.changeWeather是原型上的方法，通过bind改变this之后生成新的方法放在了实例自身上，导致了实例中也有changeWeather这个方法，这样就能进行调用了。

## 如果state有多个, 如何优化: 使用展开运算符..., , 
```
let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10]
console.log(...arr1); //展开一个数组
let arr3 = [...arr1, ...arr2]//连接数组

//在函数中使用
function sum(...numbers) {
return numbers.reduce((preValue, currentValue) => {
return preValue + currentValue
})
}

console.log(sum(1, 2, 3, 4));

//构造字面量对象时使用展开语法
let person = { name: 'tom', age: 18 }
let person2 = { ...person }
//console.log(...person); //报错，展开运算符不能展开对象
person.name = 'jerry'
console.log(person2);
console.log(person);

//合并修改
let person3 = { ...person, name: 'jack', address: "地球" }
console.log(person3);
```
