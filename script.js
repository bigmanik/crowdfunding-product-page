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
  
  // const radioButtons = document.querySelectorAll('.radio-button');

  // radioButtons.forEach(button => {
  //   button.addEventListener('click', () => {
  //     radioButtons.forEach(btn => {
  //       btn.classList.remove('selected');
  //     });
  //     button.classList.add('selected');
  //   });
  // });
  

  