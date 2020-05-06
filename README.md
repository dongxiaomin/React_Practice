# React
* [参考文档](https://www.runoob.com/react/react-tutorial.html)

# React 特点
1. 声明式设计 −React采用声明范式，可以轻松描述应用。
2. 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
3. 灵活 −React可以与已知的库或框架很好地配合。
4. JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
5. 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
6. 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

# 一. 引入React
```
<script src="https://cdn.staticfile.org/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.staticfile.org/react-dom/16.4.0/umd/react-dom.development.js"></script>
<!-- 生产环境中不建议使用 -->
<script src="https://cdn.staticfile.org/babel-standalone/6.26.0/babel.min.js"></script>
```
## 解析
实例中我们引入了三个库： react.min.js 、react-dom.min.js 和 babel.min.js：
+ react.min.js - React 的核心库
+ react-dom.min.js - 提供与 DOM 相关的功能
+ babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平.

# 二. React 元素渲染
元素是构成 React 应用的最小单位，它用于描述屏幕上输出的内容。

`<div id="example"></div>`

```
const element = <h1>Hello, world!</h1>;
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

# 三. React JSX
## 例子

`const element = <h1>Hello, world!</h1>;`

它被称为 JSX， 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。
JSX 是在 JavaScript 内部实现的。
我们知道元素是构成 React 应用的最小单位，JSX 就是用来声明 React 当中的元素。

# 四. React 组件
## 定义组件
### 1. 我们可以使用函数定义一个组件
```
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
```

### 2. 也可以使用 ES6 class 来定义一个组件
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```

### 
`const element = <HelloMessage /> ` 为用户自定义的组件

**注意**:
原生 HTML 元素名以小写字母开头
而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。

### 例子
```
function HelloMessage(props) {
    return <h1>Hello {props.name}!</h1>;
}
 
const element = <HelloMessage name="Runoob"/>;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```

# 五. React State(状态)
添加一个类构造函数来初始化状态 this.state，类组件应始终使用 props 调用基础构造函数。

```
constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }
```

# 六. React props
state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。
这就是为什么有些容器组件需要定义 state 来更新和修改数据。 

**而子组件只能通过 props 来传递数据**

## 默认 props
可以通过组件类的 defaultProps 属性为 props 设置默认值，
```
class HelloMessage extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
 
HelloMessage.defaultProps = {
  name: 'Runoob'
};
 
const element = <HelloMessage/>;
 
ReactDOM.render(
  element,
  document.getElementById('example')
);
```

## state 和 props
如何在应用中组合使用 state 和 props 。
我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。
在 render 函数中, 我们设置 name 和 site 来获取父组件传递过来的数据。

### this.state
添加一个类构造函数来初始化状态 this.state，类组件应始终使用 props 调用基础构造函数。
```
class WebSite extends React.Component {
  constructor() {
      super();
      this.state = {
        name: "菜鸟教程",
        site: "https://www.runoob.com"
      }
    }
  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
}
 
class Link extends React.Component {
  render() {
    return (
      <a href={this.props.site}>
        {this.props.site}
      </a>
    );
  }
}
 
ReactDOM.render(
  <WebSite />,
  document.getElementById('example')
);
```



# 七. React 事件处理
React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:

* React 事件绑定属性的命名采用驼峰式写法，而不是小写。
* 如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)
```
<button onClick={activateLasers}>
  激活按钮
</button>
```

```
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
 
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
 
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
 
ReactDOM.render(
  <Toggle />,
  document.getElementById('example')
);
```

# 八. React 条件渲染

```
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
 
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }
 
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
 
  render() {
    const isLoggedIn = this.state.isLoggedIn;
 
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
 
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
 
ReactDOM.render(
  <LoginControl />,
  document.getElementById('example')
);
```
# 九. React 列表 & Keys
## React 列表
使用 map() 方法遍历数组生成了一个 1 到 5 的数字列表:

```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
 
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('example')
);
```

## Keys
Keys 可以在 DOM 中的某些元素被增加或删除的时候帮助 React 识别哪些元素发生了变化。因此你应当给数组中的每一个元素赋予一个确定的标识。
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

# 十. React 组件 API

* 设置状态：setState
* 替换状态：replaceState
* 设置属性：setProps
* 替换属性：replaceProps
* 强制更新：forceUpdate
* 获取DOM节点：findDOMNode
* 判断组件挂载状态：isMounted

## 设置状态：setState
this.setState作用?
在react中要修改this.state要使用this.setState,
因为this.state只是一个对象,
单纯的修改state并不会触发ui更新.

所以我们需要用this.setState来修改,this.setState在修改state的同时,可以触发组件的更新,因为this.setState会调用render函数


# 十一. React 组件生命周期

## 组件的生命周期可分成三个状态：

Mounting：已插入真实 DOM  （挂载时 2个）
Updating：正在被重新渲染   （更新时 4个）
Unmounting：已移出真实 DOM（卸载时 1个）

## 生命周期的方法有

**注意**

1. componentWillMount 在渲染前调用,在客户端也在服务端。

2. componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

3. componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

4. shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。
可以在你确认不需要更新组件时使用。

5. componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

6. componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

7. componentWillUnmount在组件从 DOM 中移除之前立刻被调用。


# 十二. React AJAX
React 组件的数据可以通过 **componentDidMount** 方法中的 Ajax 来获取，当从服务端获取数据时可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。
当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。

```
class UserGist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {username: '', lastGistUrl: ''};
  }
 
 
  componentDidMount() {
    this.serverRequest = $.get(this.props.source, function (result) {
      var lastGist = result[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    }.bind(this));
  }
 
  componentWillUnmount() {
    this.serverRequest.abort();
  }
 
  render() {
    return (
      <div>
        {this.state.username} 用户最新的 Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    );
  }
}
 
ReactDOM.render(
  <UserGist source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('example')
);
```

# 十三. React 表单与事件

```
在 HTML 当中，像 <input>, <textarea>, 和 <select> 这类表单元素会维持自身状态，并根据用户输入进行更新。
在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。
```

## onChange: 
可以使用 onChange 事件来监听 input 的变化

## onClick
通过 onClick 事件来修改数据

## Select 下拉菜单
在 React 中，不使用 selected 属性，而在根 select 标签上用 value 属性来表示选中项。

## 多个表单
当你有处理多个 input 元素时，你可以通过给每个元素添加一个 name 属性，来让处理函数根据 event.target.name 的值来选择做什么。


# 十四. React Refs

React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。

实例: 获取了输入框的支撑实例的引用，子点击按钮后输入框获取焦点。
```
class MyComponent extends React.Component {
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.refs.myInput.focus();
  }
  render() {
    //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
    return (
      <div>
        <input type="text" ref="myInput" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
 
ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
```