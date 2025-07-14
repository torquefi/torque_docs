// Function to initialize accordions
function initializeAccordions() {
  // Handle feature items accordion
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

  // Handle FAQ accordion
  const faqDetails = document.querySelectorAll('.faq-container details');
  console.log('Found FAQ details:', faqDetails.length);
  
  faqDetails.forEach((detail, index) => {
    const summary = detail.querySelector('summary');
    console.log(`Setting up FAQ ${index + 1}:`, summary.textContent.trim());
    
    // Remove any existing listeners to prevent duplicates
    const newSummary = summary.cloneNode(true);
    summary.parentNode.replaceChild(newSummary, summary);
    
    newSummary.addEventListener('click', (e) => {
      console.log('FAQ clicked:', newSummary.textContent.trim());
      
      // Prevent default behavior to handle manually
      e.preventDefault();
      e.stopPropagation();
      
      const isCurrentlyOpen = detail.hasAttribute('open');
      console.log('Was open:', isCurrentlyOpen);
      
      // Always close all details first
      faqDetails.forEach((otherDetail, otherIndex) => {
        if (otherDetail.hasAttribute('open')) {
          console.log(`Closing FAQ ${otherIndex + 1}`);
          otherDetail.removeAttribute('open');
        }
      });
      
      // If the clicked detail was not open, open it
      if (!isCurrentlyOpen) {
        console.log('Opening clicked FAQ');
        detail.setAttribute('open', '');
      } else {
        console.log('Keeping clicked FAQ closed');
      }
    });
  });
}

// Try multiple ways to ensure the script runs
document.addEventListener('DOMContentLoaded', initializeAccordions);
window.addEventListener('load', initializeAccordions);

// Also try running immediately if DOM is already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAccordions);
} else {
  initializeAccordions();
} 