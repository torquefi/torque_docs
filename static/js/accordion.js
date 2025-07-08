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
        const summary = detail.querySelector('summary');
        if (summary) {
          summary.addEventListener('click', function(e) {
            // Stop the default behavior
            e.preventDefault();
            
            console.log('Summary clicked');
            
            // Close all other details
            details.forEach(otherDetail => {
              if (otherDetail !== detail) {
                otherDetail.removeAttribute('open');
              }
            });
            
            // Always open the clicked detail (unless it's already open)
            if (!detail.hasAttribute('open')) {
              detail.setAttribute('open', '');
            }
          });
        }
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