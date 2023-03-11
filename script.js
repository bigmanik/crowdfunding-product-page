function toggleBookmark() {
    const bookmarkButton = document.getElementById('bookmark-button');
    

    
    if (bookmarkButton.classList.contains('active')) {
      bookmarkButton.classList.remove('active');
      bookmarkButton.style.color = ' black';
      bookmarkButton.textContent = 'Bookmark';
    } else {
      bookmarkButton.classList.add('active');
      bookmarkButton.style.color = ' hsl(176, 72%, 28%)';
      bookmarkButton.textContent = 'Bookmarked';
      
    }
  }
  
//   const bookmarkButton = document.getElementById('bookmark-button');
//   const mySVG = document.getElementById('my-svg');
// bookmarkButton.addEventListener('click', function() {
//   mySVG.setAttribute('fill', 'red');
// });

  