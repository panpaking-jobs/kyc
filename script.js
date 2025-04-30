// Handle form submission
window.onload = function () {
  setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling after load
  }, 1500); // 1.5 sec me hide ho jayega
};

document.getElementById('loanForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    // Example validation and transition logic
    const loanAmount = document.getElementById('loanAmount').value;
    const eligibility = loanAmount < 500000; // Example condition
    localStorage.setItem('eligibility', eligibility);
    window.location.href = 'eligibility.html';
  });
  
  // Display eligibility message
  if (window.location.pathname.includes('eligibility.html')) {
    const eligibility = localStorage.getItem('eligibility') === 'true';
    const messageDiv = document.getElementById('eligibilityMessage');
    messageDiv.innerHTML = eligibility
      ? '<p>You are eligible for the loan!</p>'
      : '<p>Sorry, you are not eligible for the loan.</p>';
  }
  
  // Redirect functions
  function goBack() {
    window.location.href = 'index.html';
  }
  
  function redirectToHome() {
    window.location.href = 'index.html';
  }
  