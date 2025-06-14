// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Accordion script loaded');
  
  // Function to initialize accordion behavior
  function initAccordion() {
    // Find all FAQ containers
    const faqContainers = document.querySelectorAll('.faq-container');
    console.log('Found FAQ containers:', faqContainers.length);
    
    faqContainers.forEach(container => {
      const details = container.querySelectorAll('details');
      console.log('Found details elements in container:', details.length);
      
      details.forEach(detail => {
        // Remove any existing click listeners
        const newDetail = detail.cloneNode(true);
        detail.parentNode.replaceChild(newDetail, detail);
        
        newDetail.addEventListener('click', function(e) {
          // Only handle clicks on the summary element
          if (e.target.tagName === 'SUMMARY') {
            console.log('Summary clicked');
            
            // Close all other details in the same container
            details.forEach(otherDetail => {
              if (otherDetail !== newDetail && otherDetail.hasAttribute('open')) {
                console.log('Closing other detail');
                otherDetail.removeAttribute('open');
              }
            });
          }
        });
      });
    });
  }

  // Initial initialization
  initAccordion();

  // Re-initialize when the page content changes (for Docusaurus)
  if (typeof window.docusaurus !== 'undefined') {
    document.addEventListener('docusaurus:contentLoaded', function() {
      console.log('Docusaurus content loaded');
      initAccordion();
    });
  }
}); 