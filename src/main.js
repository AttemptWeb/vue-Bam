// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import {
  Upload,
  Input,
  Tag,
  Button,
  Row,
  Col,
  Submenu,
  Menu,
  MenuItem,
  Table,
  TableColumn,
  Container,
  Header,
  Aside,
  Main
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import stores from './vuex/store'

Vue.component(TableColumn.name, TableColumn)
Vue.component(Table.name, Table)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(Col.name, Col)
Vue.component(Row.name, Row)
Vue.component(Button.name, Button)
Vue.component(Tag.name, Tag)
Vue.component(Input.name, Input)
Vue.component(Upload.name, Upload)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store(stores)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
