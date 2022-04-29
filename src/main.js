import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/responsive.css'

import 'bootstrap'
import 'popper.js'
import $ from 'jquery'

$(function () {

        $(window).on('scroll', function() {
            if($(window).scrollTop() > 10 ) {
                $('.navbar').addClass('active');
            } else {
                $('.navbar').removeClass('active');
            }
        });

});


createApp(App).mount('#app')
