let  borderA = document.querySelectorAll('#border-a' );
const faA = document.querySelector('.f-aa');
const faB = document.querySelector('.f-aB');
const faC = document.querySelector('.f-aC');
const faD = document.querySelector('.f-aD');



const bbA = document.getElementById('mm-btn-1');
const bbB= document.getElementById('mm-btn-2');
const bbC = document.getElementById('mm-btn-3');
const bbD = document.getElementById('mm-btn-4');

const ttA = document.querySelector('.t-a-1');
const ttB = document.querySelector('.t-a-2');
const ttC = document.querySelector('.t-a-3');
const ttD = document.querySelector('.t-a-4');

const openThr = document.querySelectorAll('.f-a-btn');
const closeThr = document.querySelector('.thr-btn');
const  modalThr = document.querySelector('.thr');

function toggleBookmark() {
    const bookmarkButton = document.getElementById('bookmark-button');
    const bookmarkIcon = document.getElementById('circle-id');
    const bookmarkIcons = document.getElementById('path-id');
    

    
    if (bookmarkButton.classList.contains('active')) {
      bookmarkButton.classList.remove('active');
      bookmarkButton.style.color = ' black';
      bookmarkButton.textContent = 'Bookmark';
      bookmarkIcon.style.fill = '';
      bookmarkIcons.style.fill = '';

    } else {
      bookmarkButton.classList.add('active');
      bookmarkButton.style.color = ' hsl(176, 72%, 28%)';
      bookmarkButton.textContent = 'Bookmarked';
      bookmarkIcon.style.fill = "hsl(176, 72%, 28%)";
      bookmarkIcons.style.fill = "hsl(0, 0%, 100%)";

      
    }
  }
  
  let radioButtons = document.querySelectorAll('.m-btn');

  radioButtons.forEach(button => {
    button.addEventListener('click', () => {
      radioButtons.forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
    });
  });

  const modal = document.querySelector('.modal-a');
  const openModal = document.querySelector('.btn-a');
  const closeModal = document.querySelector('.close-m1');

  openModal.addEventListener('click', () =>{
    modal.showModal();
    modal.style.display = "flex";
  })
  closeModal.addEventListener('click', () =>{
    modal.close();
    modal.style.display ="none"
  });
   

 
bbA.addEventListener('click', ()=>{
  removeActiveClassFromAll()
  ttA.classList.add('active')
  shrink()
  hideUsers()
  showUsersA()
  growA()
  
  });
bbB.addEventListener('click', ()=>{
  removeActiveClassFromAll()
ttB.classList.add('active')
shrink()
hideUsers()
showUsersB()
growB()
});
bbC.addEventListener('click', ()=>{
  removeActiveClassFromAll()
  ttC.classList.add('active')
  shrink()
  hideUsers()
  showUsersC()
  growC()
 
  });
  bbD.addEventListener('click', ()=>{
    removeActiveClassFromAll()
    ttD.classList.add('active')
    shrink()
    hideUsers()
    showUsersD()
    growD()
   
    });

    function removeActiveClassFromAll() {

    borderA.forEach((element)=>{
      element.classList.remove('active')
    })

    };

     function showUsersA() {
      faA.style.display="block"
    };
    function showUsersB() {
      faB.style.display="block"
    };
    function showUsersC() {
      faC.style.display="block"
    };
    function showUsersD() {
      faD.style.display="block"
    };

   function growA(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 65;
    ttA.style.height = newHeight + "px";
   };
   function growB(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 65;
    ttB.style.height = newHeight + "px";
   };
   function growC(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 65;
    ttC.style.height = newHeight + "px";
   };
   function growD(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 65;
    ttD.style.height = newHeight + "px";
   };
   function shrink(){
   borderA.forEach(div => {
    const realHeight = div.style.height;
    if(div.offsetHeight > 120 ){
     const  originHeight = realHeight - 70;
     div.style.height = originHeight + "px"
      
    }
   });
     };
     function hideUsers(){
      const vanish = document.querySelectorAll('#f-q');
      vanish.forEach(van =>{
         van.style.display = "none";
      })
     };
   
    //  openThr.addEventListener('click', ()=>{
    //   modalThr.showModal()
    // });
    openThr.forEach(button=>{
      button.addEventListener('click', ()=>{
        modalThr.showModal()
        modal.close()
        modal.style.display ="none"
      });
    });
    closeThr.addEventListener('click', ()=>{
      modalThr.close()
    });
    const progressBar = document.getElementsByClassName('p-bar')[0]
    setInterval(() =>{
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
   }, 5);
    

   function growAWe(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 4;
    ttA.style.height = newHeight + "rem";
   };
   function growBWe(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 4;
    ttB.style.height = newHeight + "rem";
   };
   function growCWe(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 4;
    ttC.style.height = newHeight + "rem";
   };
   function growDWe(){
    const currentHeight = ttA.offsetHeight;
    const newHeight = currentHeight + 4;
    ttD.style.height = newHeight + "rem";
   };
 function shrinkWe(){
   borderA.forEach(div => {
    const realHeight = div.style.height;
    if(div.offsetHeight > 120 ){
     const  originHeight = realHeight - 8;
     div.style.height = originHeight + "rem"
      
    }
   });
     };


   function checkScreenSize() {
    if (window.innerWidth <= 414 && window.innerHeight <= 915) {
        // increaseContainerSize();
        bbA.addEventListener('click', ()=>{
          removeActiveClassFromAll()
          ttA.classList.add('active')
          shrinkWe()
          hideUsers()
          showUsersA()
          growAWe()
          
          });
        bbB.addEventListener('click', ()=>{
          removeActiveClassFromAll()
        ttB.classList.add('active')
        shrinkWe()
        hideUsers()
        showUsersB()
        growBWe()
        });
        bbC.addEventListener('click', ()=>{
          removeActiveClassFromAll()
          ttC.classList.add('active')
          shrinkWe()
          hideUsers()
          showUsersC()
          growCWe()
         
          });
          bbD.addEventListener('click', ()=>{
            removeActiveClassFromAll()
            ttD.classList.add('active')
            shrinkWe()
            hideUsers()
            showUsersD()
            growDWe()
           
            });
        
            function removeActiveClassFromAll() {
        
            borderA.forEach((element)=>{
              element.classList.remove('active')
            })
        
            };
        

    }
}

window.addEventListener('resize', checkScreenSize);
  

  