// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// 1. add event listener on like button

const likes = document.querySelectorAll('.like-glyph')
likes.forEach(like => {
  like.addEventListener("click", (e) => {
    mimicServerCall()
    .then(() => {
      if(mimicServerCall()) {
        const like = e.target
        like.textContent = FULL_HEART
        like.classList.toggle('activated-heart')
    
        if(!like.classList.contains('activated-heart')) {
          like.textContent = EMPTY_HEART
        }
      } 
    })
    .catch(() => {
      error()
      setTimeout(clearError, 3000)
    })

  })  
})

  
const error = ()=> {
  const modalError = document.querySelector('#modal')
  modalError.classList.remove('hidden')
}

const clearError = () => {
  const modalError = document.querySelector('#modal')
  modalError.classList.add('hidden')
}
  



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
