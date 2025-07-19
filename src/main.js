import { createApp } from 'vue'
import 'aos/dist/aos.css'
import AOS from 'aos'

AOS.init()
// import thư viện AOS để sử dụng hiệu ứng cuộn trang
// AOS.init() sẽ khởi tạo thư viện AOS

import './assets/main.css' // import file CSS chính của ứng dụng
import './assets/about.css' // import file CSS phụ của ứng dụng

// import App, App ở đây là 1 tên biến mình tự tạo, nhưng mà đổi tên thành Caigivayne
import Caigivayne from './App.vue'

import router from './router'
// import router từ file src/router/index.js, đây là nơi định nghĩa các đường dẫn của ứng dụng


// createApp là hàm của vue để tạo ứng dụng Vue mới
// mount là gán App vào phần tử có id là app trong HTML
const app = createApp(Caigivayne)

app.use(router) // sử dụng router trong ứng dụng
app.mount('#app') // gán ứng dụng vào phần tử có id là app trong HTML