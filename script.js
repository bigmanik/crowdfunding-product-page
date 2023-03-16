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
  
  const radioButtons = document.querySelectorAll('.m-btn');

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
  })
  

  