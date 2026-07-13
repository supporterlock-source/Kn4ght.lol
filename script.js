// Bypass Link Function
async function bypassLink() {
    const urlInput = document.getElementById('urlInput').value.trim();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const loadingDiv = document.getElementById('loading');

    // Reset displays
    resultDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    loadingDiv.style.display = 'none';

    if (!urlInput) {
        errorDiv.style.display = 'block';
        document.getElementById('errorMessage').textContent = '❌ Please enter a valid URL';
        return;
    }

    // Show loading
    loadingDiv.style.display = 'block';

    try {
        const bypassURL = `http://fi8.bot-hosting.net:21163/freeapibypass?url=${encodeURIComponent(urlInput)}`;
        const response = await fetch(bypassURL);
        
        if (!response.ok) {
            throw new Error('Failed to bypass link');
        }

        const data = await response.json();
        
        if (data.bypass_url) {
            loadingDiv.style.display = 'none';
            resultDiv.style.display = 'block';
            document.getElementById('resultURL').value = data.bypass_url;
            document.getElementById('resultMessage').textContent = '✅ Successfully bypassed! Copy the link above.';
        } else {
            throw new Error(data.message || 'Could not bypass this link');
        }
    } catch (error) {
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        document.getElementById('errorMessage').textContent = `❌ Error: ${error.message}`;
    }
}

// Copy to Clipboard
function copyToClipboard() {
    const resultInput = document.getElementById('resultURL');
    resultInput.select();
    document.execCommand('copy');
    
    // Show feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✅ Copied!';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
}

// Load Supported Services
async function loadSupportedServices() {
    const servicesList = document.getElementById('servicesList');
    
    try {
        const response = await fetch('http://fi8.bot-hosting.net:21163/supported');
        const data = await response.json();
        
        if (data.supported && Array.isArray(data.supported)) {
            servicesList.innerHTML = '';
            data.supported.forEach(service => {
                const card = document.createElement('div');
                card.className = 'service-card';
                card.innerHTML = `
                    <h3>${service.name || service}</h3>
                    <p>${service.description || 'Supported service'}</p>
                `;
                servicesList.appendChild(card);
            });
        } else {
            servicesList.innerHTML = '<div class="service-card"><h3>Services Loading...</h3><p>Services are being loaded</p></div>';
        }
    } catch (error) {
        servicesList.innerHTML = '<div class="service-card" style="grid-column: 1/-1;"><h3>⚠️ Unable to Load</h3><p>Could not fetch supported services</p></div>';
    }
}

// Allow Enter key to trigger bypass
document.getElementById('urlInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        bypassLink();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load services when page loads
window.addEventListener('load', function() {
    loadSupportedServices();
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// Highlight active nav link based on scroll position
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add active nav styling to CSS if not exists
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #5865F2;
        border-bottom: 2px solid #5865F2;
        padding-bottom: 5px;
    }
`;
if (!document.querySelector('style[data-active-nav]')) {
    style.setAttribute('data-active-nav', 'true');
    document.head.appendChild(style);
}