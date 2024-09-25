var ResumeGenerator = /** @class */ (function () {
    function ResumeGenerator() {
        this.resumeForm = document.getElementById('resumeForm');
        this.resumeOutput = document.getElementById('resumeOutput');
        this.initEventListeners();
    }
    // Initialize event listeners
    ResumeGenerator.prototype.initEventListeners = function () {
        var _this = this;
        if (this.resumeForm && this.resumeOutput) {
            this.resumeForm.addEventListener('submit', function (event) { return _this.generateResume(event); });
        }
        else {
            console.error("Form or output div not found in the DOM");
        }
    };
    // Generate the resume
    ResumeGenerator.prototype.generateResume = function (event) {
        event.preventDefault();
        // Extract form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var details = document.getElementById('details').value;
        // Generate the HTML for resume
        var resumeHTML = "\n        <h2>Generated Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n        <p><strong>Details:</strong> ").concat(details, "</p>\n        ");
        // Output the resume
        this.resumeOutput.innerHTML = resumeHTML;
    };
    return ResumeGenerator;
}());
// Instantiate the ResumeGenerator class when the page loads
document.addEventListener('DOMContentLoaded', function () {
    new ResumeGenerator();
});
