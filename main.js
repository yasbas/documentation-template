// Update section links in right sidebar
function updateSectionLinks() {
  const activeArticle = document.querySelector('.article.active');
  const sectionLinks = document.getElementById('section-links');
  sectionLinks.innerHTML = '';

  if (activeArticle) {
    const headings = activeArticle.querySelectorAll('h3');
    headings.forEach(heading => {
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.className = 'section-link';
      link.textContent = heading.textContent;
      sectionLinks.appendChild(link);
    });
  }
}

// Handle navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Show corresponding article
    const articleId = link.dataset.article;
    document.querySelectorAll('.article').forEach(article => {
      article.classList.remove('active');
    });
    document.getElementById(articleId).classList.add('active');
    
    // Update section links
    updateSectionLinks();
  });
});

// Initialize section links
updateSectionLinks();

// Smooth scroll for section links
document.getElementById('section-links').addEventListener('click', (e) => {
  if (e.target.classList.contains('section-link')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // header height + some padding
      behavior: 'smooth'
    });
  }
});
