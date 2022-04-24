let sidebar = document.getElementById('nav');
let bar = document.getElementById('bar');
let change_sidebar = 'open';
let bar_style = document.head.appendChild(document.createElement("style"));
let background_open = true;

function sidebar_fun() {
    if (change_sidebar == 'open') {
        sidebar.style.left = 0 + '%';
        bar.style.height = 0 + 'px';
        bar_style.innerHTML = '#bar::before{top: 0px !important; transform: rotate(45deg)} #bar::after{top: 0px !important; transform: rotate(-45deg)}';
        change_sidebar = 'close';
    } else {
        sidebar.style.left = -sidebar.clientWidth - 10 + 'px';
        bar.style.height = 2 + 'px';
        bar_style.innerHTML = ' ';
        change_sidebar = 'open';
        document.getElementById('conn-bar').style.top = 0;
    }

}

window.onscroll = function() {
    if (change_sidebar == 'close') {
        document.getElementById('conn-bar').style.top = window.scrollY + 'px';
    }
}


let header = document.getElementById('carousel');
let all_img = document.getElementById('all-img');
let count_img = 4;
let count = -(all_img.clientWidth / count_img);

function background_random() {
    if (background_open == true) {

        count = count + (all_img.clientWidth / count_img);
        all_img.style.marginLeft = -count + 'px';
        if (count >= all_img.clientWidth - (all_img.clientWidth / count_img)) {
            count = -(all_img.clientWidth / count_img);
        }

        setTimeout(() => {
            background_random()
        }, 5000);
    }
}
background_random()

let all_img_slider = document.getElementById('all-img-slider');
let count_img_slider = 8;
let count_slider = 0;
let t = 0;

function slider_move(x) {
    if (x == 'left' && count_slider > 0) {

        if (count_slider >= all_img_slider.offsetWidth - window.innerWidth - 100) {
            count_slider = count_slider - t;
            console.log('sd')
        } else {
            count_slider = count_slider - all_img_slider.offsetWidth / 8;
        }
        all_img_slider.style.left = -count_slider + 'px';
        console.log(count_slider)
        if (count_slider <= 0) {
            document.getElementById('left').style.display = 'none';
        }
        document.getElementById('right').style.display = 'block';

    } else if (x == 'right' && count_slider < all_img_slider.offsetWidth - window.innerWidth - 100) {

        if (count_slider >= all_img_slider.offsetWidth - window.innerWidth - 400) {
            t = (all_img_slider.offsetWidth - window.innerWidth) - count_slider;
            count_slider = (all_img_slider.offsetWidth - window.innerWidth);

        } else {
            count_slider = count_slider + all_img_slider.offsetWidth / 8;
        }
        document.getElementById('left').style.display = 'block';

        all_img_slider.style.left = -count_slider + 'px';

        if (count_slider >= all_img_slider.offsetWidth - window.innerWidth - 100) {
            document.getElementById('right').style.display = 'none';
        }

    }
}


let all_img_slider_insta = document.getElementById('all-img-slider-insta');
let count_img_slider_insta = 14;
let count_slider_insta = 0;
let t_insta = 0;

function slider_move_insta(x) {
    if (x == 'left' && count_slider_insta > 0) {

        if (count_slider_insta >= all_img_slider_insta.offsetWidth - window.innerWidth - 100) {
            count_slider_insta = count_slider_insta - t_insta;
        } else {
            count_slider_insta = count_slider_insta - all_img_slider_insta.offsetWidth / 14;
        }
        all_img_slider_insta.style.left = -count_slider_insta + 'px';
        console.log(count_slider_insta)
        if (count_slider_insta <= 0) {
            document.querySelector('#insta #left').style.display = 'none';
        }
        document.querySelector('#insta #right').style.display = 'block';

    } else if (x == 'right' && count_slider_insta < all_img_slider_insta.offsetWidth - window.innerWidth - 100) {

        if (count_slider_insta >= all_img_slider_insta.offsetWidth - window.innerWidth - 360) {
            t_insta = (all_img_slider_insta.offsetWidth - window.innerWidth) - count_slider_insta;
            count_slider_insta = (all_img_slider_insta.offsetWidth - window.innerWidth);

        } else {
            count_slider_insta = count_slider_insta + all_img_slider_insta.offsetWidth / 14;
        }
        document.querySelector('#insta  #left').style.display = 'block';

        all_img_slider_insta.style.left = -count_slider_insta + 'px';

        if (count_slider_insta >= all_img_slider_insta.offsetWidth - window.innerWidth - 100) {
            document.querySelector('#insta #right').style.display = 'none';
        }

    }
}

let search_div = document.getElementById('search-div');

document.onclick = function(e) {
    console.log(e.target)
    if (e.target == document.querySelectorAll('#setting_bar i')[1] || e.target == document.querySelectorAll('#search-div input')[0] || e.target == document.querySelectorAll('#search-div i')[0]) {
        search_div.style.display = 'block';
        document.querySelectorAll('#setting_bar i')[1].style.opacity = 1;
    } else {
        search_div.style.display = 'none';
        document.querySelectorAll('#setting_bar i')[1].style.opacity = .5;
    }
}