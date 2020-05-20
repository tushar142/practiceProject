
// const slider = document.querySelector('.slide').children;

// const imgs = document.querySelector('.custo_img').children;
	

//  for (var i =0; i <imgs.length ; i++) {
//  		imgs[i].addEventListener("click", function () {
//  			// console.log(this)
//  			for (var j =0; j<imgs.length; j++) {
//  				imgs[j].classList.remove("active")
//  			}
//  			this.classList.add('active')
//  			const id = this.getAttribute("data-id")
//  			console.log(id)
//  			for (var j =0; j <slider.length; j++) {
//  				slider[j].classList.remove("active")
//  			}
//  			slider[id].classList.add("active")
//  		})
//  }

let lines = document.querySelector(".line");

let sideNav = document.querySelector(".header_nav");

let modal = document.querySelector(".modal")

let head = document.querySelector(".header_wraper")

let headmain = document.getElementsByName("header")


lines.addEventListener("click", function(){
	sideNav.classList.toggle('active')
	modal.classList.toggle('modalblock')
	head.classList.add('headremove')

})

modal.addEventListener("click", function(){
	sideNav.classList.remove('active')
	modal.classList.remove('modalblock')
	head.classList.remove('headremove')
})

 window.onscroll = function() {
      var top = window.scrollY;

      if (top >= 10) {

        head.classList.add('headbg')
      }else {

    	head.classList.remove('headbg')
      }
    };



 // jQuery=====================================


 $('.owl-carousel').owlCarousel({
 	autoplay:true,
 	dots:false,
 	nav:true,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
