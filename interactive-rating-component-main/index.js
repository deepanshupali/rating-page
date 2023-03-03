let rating = document.getElementsByClassName('rating')
let submit_btn = document.querySelector('.submit-btn')

let sel = document.getElementById('sel')
let span = document.createElement('span')

for(let i = 0; i < rating.length; i++) {
    rating[i].addEventListener("click", function(e) {
      var rate = e.target.innerHTML
      if(rate){
      submit_btn.addEventListener('click',()=>{
        console.log('hi')
        span.innerHTML = " "+rate
        sel.after(span) 
        document.querySelector('.main').style.display="none"
        document.querySelector('.sub-main').style.display="block"
      })  
      
      }
    })
  }
  