# day82

# React组件化开发

## 什么是组件化开发

![image-20230312143335447](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312143335447.png)

## React的组件化

![image-20230312144220767](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312144220767.png)

## React类组件封装细节

### render函数返回值

~~~~jsx
import React from 'react'
// 定义类组件
class App extends React.Component {
    // constructor中用来定义state -> state中存放数据
  constructor() {
    super()
    this.state = {
      message: 'hello',
    }
  }
    // render函数是必要且唯一的
  render() {
    const { message } = this.state
    //  1.返回react元素 通过jsx编写代码都会被编译为React.createElement(),所以返回的就是一个react元素
    // 2.返回一个数组或者fragments(后面说) ->数组中可以存放react元素或普通元素,会被遍历出来呈现在页面
    // 3.Portals ->后面再说
    // 4.字符串或数值类型
    return (
      <div>
        <h2>{message}</h2>
      </div>
    )
  }
}

export default App

~~~~

## React函数组件

~~~~jsx
import React from 'react'

// 函数式组件 在没有hook的情况下
/* 
  1.函数式组件没有自己的生命周期
  2.函数式组件无法保存状态(state)
  3.函数式组件没有自己的this
*/
function App() {
  // 函数组件返回值与类组件中返回值一样
  return <h1>hello react</h1>
}

export default App

~~~~

# React生命周期

![image-20230312152338249](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312152338249.png)

![image-20230312153547455](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312153547455.png)

![image-20230312155734875](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312155734875.png)

![image-20230312155848877](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312155848877.png)

## 组件挂载流程

HelloWorld.jsx

~~~~jsx
import React from 'react'
class HelloWorld extends React.Component {
  constructor() {
    super()
    console.log('constructor') //1. 先执行constructor
  }

  render() {
    console.log('render') //2. 再执行render
    return <h2>helo world</h2>
  }
  componentDidMount() {
    console.log('组件被挂载完毕') //3. 最终组件成功挂载调用该生命周期函数
  }
}

export default HelloWorld

~~~~

App.jsx

~~~~jsx
import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld />
      </div>
    )
  }
}

export default App

~~~~



![image-20230312153833234](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312153833234.png)

## 组件更新流程

![image-20230312154715826](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312154715826.png)

HelloWorld.jsx

~~~~jsx
import React from 'react'
class HelloWorld extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world',
    }
  }
  changeMessage() {
    // this.setState做的两件事
    /* 
      1.更新我们修改的数据
      2.重新调用一次render函数
    */
    this.setState({
      message: 'hello react',
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>修改message</button>
      </div>
    )
  }
  // componentDidUpdate函数 当数据被更新完成时调用
  componentDidUpdate() {
    console.log('组件数据更新完成')
  }
}

export default HelloWorld

~~~~

![image-20230312154910562](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312154910562.png)

App.jsx

~~~~jsx
import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
}

export default App

~~~~

## 组件卸载流程

![image-20230312155247541](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312155247541.png)

HelloWorld.jsx

~~~~jsx
import React from 'react'
class HelloWorld extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'hello world',
    }
    // console.log('constructor')
  }
  changeMessage() {
    // this.setState做的两件事
    /* 
      1.更新我们修改的数据
      2.重新调用一次render函数
    */
    this.setState({
      message: 'hello react',
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={() => this.changeMessage()}>修改message</button>
      </div>
    )
  }
 // 当我们卸载组件后会调用该函数
  componentWillUnmount() {
    console.log('组件卸载完毕')
  }
}

export default HelloWorld

~~~~

App.jsx

~~~~jsx
import React from 'react'
import HelloWorld from './components/HelloWorld'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow: true,
    }
  }
  changeIsShow() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
            {/* isShow为true时显示该组件 */}
        {isShow && <HelloWorld />}
            {/* 修改isShow 状态*/}
        <button onClick={() => this.changeIsShow()}>修改isShow</button>
      </div>
    )
  }
}

export default App

~~~~

![image-20230312155443695](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312155443695.png)

## 不常用生命周期的额外补充(了解)

![image-20230312161047111](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312161047111.png)

# React组件化

## 组件拆分和嵌套使用

![](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312161522376.png)

**通过rec来快速生成类组件**

![image-20230312163622396](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312163622396.png)

![image-20230312163643744](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312163643744.png)

## 组件通信

### 父传子-props

 父组件Main.jsx

~~~~jsx
import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: ['新歌榜', '热歌榜', '飙升榜'],
      productList: ['推荐商品', '热门商品', '流行商品'],
    }
  }
  render() {
    const { productList, banners } = this.state
    return (
      <div>
        Main    {/* 通过传递非attribute属性 会被传递到子组件的constructor的props属性中 */}
        <MainBanner banners={banners} title="轮播图" />
        <MainProductList productList={productList} />
      </div>
    )
  }
}

export default Main

~~~~

子组件MainBanner.jsx

~~~~jsx
import React, { Component } from 'react'

export class MainBanner extends Component {
  constructor(props) {
    super(props) // 拿到props props是一个对象包裹的
    console.log(this)
  }
  render() {
      // 解构props中的数据
    const { banners, title } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {banners.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MainBanner

~~~~

![image-20230312165011209](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312165011209.png)

![image-20230312165151648](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312165151648.png)

子组件MainProductList.jsx

~~~~jsx
import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {
      // 通过父组件传递的props属性,不需要通过constructor也可以拿到,他会直接接收放到实例的props属性上
    const { productList } = this.props
    return (
      <div>
        MainProductList
        <ul>
          {productList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MainProductList

~~~~

![image-20230312165144232](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312165144232.png)

![image-20230312165155622](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312165155622.png)

#### 真实数据演练

main.jsx

~~~~js
import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MainProductList from './MainProductList'
import MyRequest from '../service/index'
export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: [],
      productList: [],
    }
  }
  render() {
      
      // 3. 会自动调用render函数 
    const { productList, banners } = this.state
    return (
      <div>
        Main
        // 4.数据传到子组件
        <MainBanner banners={banners} title="轮播图" />
        <MainProductList productList={productList} />
      </div>
    )
  }
  // 组件挂载完毕之后发送请求
  componentDidMount() {
    MyRequest.get({
      url: '/home/multidata',
    }).then((res) => {
      const banners = res.data.banner.list
      const recommend = res.data.recommend.list
      // 2. 调用setState设置数据 
      this.setState({
        banners,
        productList: recommend,
      })
    })
  }
}

export default Main

~~~~

MainBanner.jsx

~~~~jsx
import React, { Component } from 'react'

export class MainBanner extends Component {
  render() {
    const { banners, title } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {banners.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MainBanner

~~~~

MainProductList.jsx

~~~~jsx
import React, { Component } from 'react'

export class MainProductList extends Component {
  render() {
    const { productList } = this.props
    return (
      <div>
        <ul>
          {productList.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MainProductList

~~~~

![image-20230312174212473](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312174212473.png)

![image-20230312174219965](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312174219965.png)

#### 父传子->props类型验证

![image-20230312175309300](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312175309300.png)

![image-20230312180232984](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312180232984.png)

Main.jsx

~~~~jsx
import React, { Component } from 'react'
import MainBanner from './MainBanner'
import MyRequest from '../service/index'
export class Main extends Component {
  constructor() {
    super()
    this.state = {
      banners: [],
      productList: [],
    }
  }
  render() {
    const { productList, banners } = this.state
    return (
      <div>
        Main
            // banners是数组 title是字符串
        <MainBanner banners={banners} title="轮播图" />
      </div>
    )
  }
  componentDidMount() {
    MyRequest.get({
      url: '/home/multidata',
    }).then((res) => {
      const banners = res.data.banner.list
      const recommend = res.data.recommend.list
      this.setState({
        banners,
        productList: recommend,
      })
    })
  }
}

export default Main

~~~~

MainBanner.jsx

~~~~jsx
import React, { Component } from 'react'
// 1.导入这个库 prop-types
import PropTypes from 'prop-types'

export class MainBanner extends Component {
  constructor(props) {
    super(props)
    console.log(this)
  }
  render() {
    const { banners, title } = this.props
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {banners.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

//2.类中有这个属性 在这里进行定义 设定传进来的值是什么类型, isRequired是必须传的意思
MainBanner.propTypes = {
  banners: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}
// 3. defineProps是当没有传的时候,显示的默认值
MainBanner.defineProps = {
  banners: [],
  title: '我是标题',
}
export default MainBanner

~~~~

### 子传父

![image-20230312184828325](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230312184828325.png)

## tabControl的案例

App.jsx

~~~~jsx
import React, { Component } from 'react'
import TabControl from './TabControl/TabControl'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['流行', '新款', '精选'],
      tabIndex: 0,
    }
  }
  tabClick(index) {
    this.setState({
      tabIndex: index,
    })
  }
  render() {
    const { titles, tabIndex } = this.state
    return (
      <div className="app">
            // 传titles用于展示 传tabClick事件 用于让子组件去调用并将index传过来调用这里的tabClick
        <TabControl titles={titles} tabClick={(index) => this.tabClick(index)} />
        <h1>{titles[tabIndex]}</h1>
      </div>
    )
  }
}

export default App

~~~~

TabControl.jsx

~~~~jsx
import React, { Component } from 'react'
import './TabControl.css'
export class TabControl extends Component {
  constructor() {
    super()
    this.state = {
      currentActiveIndex: 0,
    }
  }
  itemClick(index) {
    this.setState({
      currentActiveIndex: index, // 动态index
    })
    this.props.tabClick(index) // 调用父组件的方法
  }
  render() {
    const { titles } = this.props
    const { currentActiveIndex } = this.state
    const liEls = titles.map((item, index) => (
      <li
        onClick={() => this.itemClick(index)}
          // 动态绑定active
        className={`item ${currentActiveIndex === index ? 'active' : ''}`}
        key={item}
      >
        {item}
      </li>
    ))
    return (
      <div className="tab-control">
        <ul className="list">{liEls}</ul>
      </div>
    )
  }
}

export default TabControl

~~~~

## React中的插槽

### 实现方法一(children)有弊端

![image-20230313210543143](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313210543143.png)

App.jsx

~~~~jsx
import React, { Component } from 'react'
import NavBar from './nav-bar/NavBar'

export class App extends Component {
  render() {
    return (
      <div>
            // 传入的元素或者组件写在标签中
        <NavBar>
          <button>按钮</button>
          <h2>center部分</h2>
          <i>斜体文字</i>
        </NavBar>
      </div>
    )
  }
}

export default App

~~~~

navBar.jsx

~~~~jsx
import React, { Component } from 'react'
import './nav-bar.css'
export class NavBar extends Component {
  render() {
      // 传入的元素在props的children中 如果传入多个元素,是一个数组包裹着 如果传入的只有一个元素,children就是那个元素
    const { children } = this.props
    return (
      <div className="nav-bar">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar

~~~~

![image-20230313205945696](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313205945696.png)

### 实现方法二(props)

![image-20230313211614839](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313211614839.png)

![image-20230313211627452](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313211627452.png)

## 非父子组件通信-Context介绍和Sprea

![image-20230313223002658](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313223002658.png)

### props传递

![image-20230313222940126](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313222940126.png)

### Context传递(vue中的provide,inject)

![image-20230313225220841](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313225220841.png)

1.创建一个context

~~~~jsx
import React from 'react'
// 1.创建一个Context
const ThemeContext = React.createContext()

export default ThemeContext

~~~~

2.在父组件中引入

~~~~jsx
import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme.context'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: { name: 'info', age: 20 },
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        {/* 使用context给组件传递数据,包裹着Home组件,包括Home组件下所有组件都是可以取到context的值的 */}
        <ThemeContext.Provider value={info}>
          <Home />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App

~~~~

3.在HomeProduct.jsx中引入

~~~~jsx
import React, { Component } from 'react'

// 引入
import ThemeContext from './context/theme.context'

export class HomeProduct extends Component {
  render() {
    const { name, age } = this.context
    return (
      <div>
        <h2>HomeProduct</h2>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    )
  }
}
// 把这个类的contextType设置为ThemeContext即可获取到数据
HomeProduct.contextType = ThemeContext

export default HomeProduct

~~~~

![image-20230313224109347](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313224109347.png)

### 函数式组件中使用Context

~~~~jsx
import ThemeContext from './context/theme.context'

function HomeBanner() {
  return (
    <div>
      <h2>HomeBanner</h2>
          // ThemeContext.Consumer 里面传入一个回调 参数会传递到value中
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>{value.name}</h2>
        }}
      </ThemeContext.Consumer>
    </div>
  )
}
export default HomeBanner

~~~~

# 总结

## 一. 完成课堂所有的代码







## 二. React组件可以如何进行划分？分别有哪些不同的概念?(了解)

**最常用为函数组件和类组件**





## 三. React重要的组件生命周期有哪些？分别列出他们的作用。

类组件中

​	常用的生命周期 

- constrcuotr 
- render 
- componentDidMount(组件挂载完毕)  用于发送网络请求
- componentDidUpdate(数据更新之后)  
- componentWillUnMount(组件卸载之后调用的回调) 用于拆卸一些方法

## 四. React中如何实现组件间的通信？父传子？子传父？

### 父传子

~~~~jsx
// App组件

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            info:{name:'张三',age:18}
        }
    }
    render(){
        return 
        <div>
            // 通过props传递 会传递到子组件的props中
        <Home info={this.state.info}/>
        </div>
    }
}

// home组件
class Home extends React.Component {
    render(){
        // 可以拿到实例上的info
        const {info} = this.props
        return 
        <div>
            <h2>{info.name}</h2>
            <h2>{info.age}</h2>
        </div>
    }
}

~~~~

### 子传父

~~~~jsx
// App组件

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            counter:0
        }
    }
    addCount(count){
        // 4.调用方法修改数据
        this.setState({
            counter:this.state + count
        })
    }
    render(){
        return 
        <div>
            //2. 通过props传递一个函数给AddCounter组件
        <h2>counter</h2>
        <AddCounter i={(count)=>this.addCount(count)}/>
        </div>
    }
}


// AddCounter组件
class AddCounter extends React.Component {
    addCount(count){
        //3. 调用父组件传递的方法 并将count值传递回父组件
        this.props.increment(count)
    }
    render(){
        return 
        <div>
            //1. 自身绑定事件 并且会调用自身的addCount方法
            <button onClick={()=>this.addCount(1)}>+1</button>
        </div>
    }
}

~~~~



## 五. React中有插槽的概念吗？如果没有，如何实现插槽的效果呢？

react中没有插槽的概念 ,但是他可以利用一些方法来实现插槽的效果

### 方法一(children)

~~~~jsx
// App组件
import React, { Component } from 'react'
import NavBar from './nav-bar/NavBar'

export class App extends Component {
  render() {
    return (
      <div>
            //1. 传入的元素或者组件写在标签体中
        <NavBar>
          <button>按钮</button>
          <h2>center部分</h2>
          <i>斜体文字</i>
        </NavBar>
      </div>
    )
  }
}

export default App


// 子组件
import React, { Component } from 'react'
import './nav-bar.css'
export class NavBar extends Component {
  render() {
      //2. 传入的元素在props的children中 如果传入多个元素,是一个数组包裹着 如果传入的只有一个元素,children就是那个元素
    const { children } = this.props
    return (
      <div className="nav-bar">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar

~~~~

### 方法二:props

~~~~jsx
// App组件
import React, { Component } from 'react'
import NavBar from './nav-bar/NavBar'

export class App extends Component {
  render() {
    return (
      <div>
            //1.通过props传递组件或者元素
        <NavBar 
            leftSlot={<h2>我是h2</h2>}
            centerSlot={<button>我是button</button>}
            rightSlot={<i>我是i标签</i>}
             ></NavBar>
      </div>
    )
  }
}

export default App


// 子组件
import React, { Component } from 'react'
import './nav-bar.css'
export class NavBar extends Component {
  render() 
    return (
      <div className="nav-bar">
            // 使用时可直接通过props中解构或者直接取到相对应的属性 就是对应的组件或者元素 
        <div className="left">{this.props.leftSlot}</div>
        <div className="center">{this.props.centerSlot}</div>
        <div className="right">{this.props.rightSlot}</div>
      </div>
    )
  }
}

export default NavBar

~~~~





## 六. 非父子组件的通信有哪些方式？分别是什么作用？

### Context

~~~~jsx
import React from 'react'
// 1.创建一个Context
const ThemeContext = React.createContext()

export default ThemeContext

//2. 父组件中引入 ThemeContext
import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme.context'
export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: { name: 'info', age: 20 },
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        {/* 3. 使用context给组件传递数据,包裹着Home组件,包括Home组件下所有组件都是可以取到context的值的 */}
        <ThemeContext.Provider value={info}>
          <Home />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App


import React, { Component } from 'react'

//4. 子组件 引入ThemeContext
import ThemeContext from './context/theme.context'

export class HomeProduct extends Component {
  render() {
      //6. 通过this.context可以访问到属性
    const { name, age } = this.context
    return (
      <div>
        <h2>HomeProduct</h2>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    )
  }
}
//5. 把这个类的contextType设置为ThemeContext即可获取到数据
HomeProduct.contextType = ThemeContext

export default HomeProduct

~~~~

