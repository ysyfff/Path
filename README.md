# Path

## TODO
* ~~TabBar~~
* ~~NavBar~~
* ~~Nav~~
* Form 参考tcomb, tcomb-validation, tcomb-form-native

## Problem
1. Navigator切换的时候内容的变化时出现卡顿(包括LeftButton, RightButton, Title等)
   Answer: Navigator的切换会触发renderScene以及NavigationBar中的LeftButton,RightButton,Title函数，使用回调中的route就可以解决内容卡顿的问题

2. Navigator与TabBar的配合使用
   Answer: 以Navigator作为master，tab的点击触发Navigator的resetTo方法，resetTo所干的事情就是返回一个新的tab(这个tab就是下次要展示的tab标签的tab)
