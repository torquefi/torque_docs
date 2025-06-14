document.addEventListener('DOMContentLoaded', function() {
  const featureItems = document.querySelectorAll('.feature-item');
  
  featureItems.forEach(item => {
    const header = item.querySelector('.feature-header');
    
    header.addEventListener('click', () => {
      // Close all other items
      featureItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}); 