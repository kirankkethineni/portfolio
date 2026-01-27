
document.addEventListener('DOMContentLoaded', () => {
    injectGlobalComponents();
    initAccordions();
    updateActiveNavLink();
});

function injectGlobalComponents() {
    // Header Injection
    const headerHTML = `
        <div class="container flex justify-between align-center">
            <a href="index.html" class="site-logo">KIRAN K KETHINENI</a>
            <div class="social-icons">
                <a href="https://scholar.google.com/citations?user=ikuM7LUAAAAJ&hl=en" title="Google Scholar">GS</a>
                <a href="https://www.linkedin.com/in/kiran-k-kethineni" title="LinkedIn">IN</a>
                <a href="https://github.com/kirankkethineni/" title="GitHub">GH</a>
                <a href="mailto:kirankkethineni@gmail.com" title="Email">@</a>
            </div>
        </div>
    `;

    // Navigation Injection
    const navHTML = `
        <div class="container">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="explorations.html">Explorations</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </div>
    `;

    // Footer Injection
    const footerHTML = `
        <div class="container">
            <div class="flex justify-between align-center footer-inner">
                <div class="social-links">
                    <a href="https://scholar.google.com/citations?user=ikuM7LUAAAAJ&hl=en">Google Scholar</a>
                    <a href="https://www.linkedin.com/in/kiran-k-kethineni">LinkedIn</a>
                    <a href="https://github.com/kirankkethineni/">GitHub</a>
                    <a href="mailto:kirankkethineni@gmail.com">Email</a>
                </div>
                <p class="copyright">&copy; ${new Date().getFullYear()} Kiran K. Kethineni.</p>
            </div>
        </div>
    `;

    const headerEl = document.querySelector('header');
    if (headerEl) headerEl.innerHTML = headerHTML;

    const navEl = document.querySelector('.main-nav');
    if (navEl) navEl.innerHTML = navHTML;

    const footerEl = document.querySelector('footer');
    if (footerEl) footerEl.innerHTML = footerHTML;
}

function initAccordions() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.accordion-icon');

            // Toggle current
            const isActive = content.classList.contains('active');

            // Optional: Close others (Accessory behavior - can be removed for multi-open)
            // document.querySelectorAll('.accordion-content').forEach(c => {
            //     c.style.maxHeight = null;
            //     c.classList.remove('active');
            // });
            // document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

            if (!isActive) {
                content.classList.add('active');
                header.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.classList.remove('active');
                header.classList.remove('active');
                content.style.maxHeight = null;
            }
        });
    });
}

function updateActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--black)';
            link.style.borderBottom = '2px solid var(--black)';
        }
    });
}
