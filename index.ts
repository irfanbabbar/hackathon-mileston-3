class ResumeGenerator {
    private resumeForm: HTMLFormElement | null;
    private resumeOutput: HTMLDivElement | null;

    constructor() {
        this.resumeForm = document.getElementById('resumeForm') as HTMLFormElement | null;
        this.resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement | null;
        this.initEventListeners();
    }

    // Initialize event listeners
    private initEventListeners() {
        if (this.resumeForm && this.resumeOutput) {
            this.resumeForm.addEventListener('submit', (event) => this.generateResume(event));
        } else {
            console.error("Form or output div not found in the DOM");
        }
    }

    // Generate the resume
    private generateResume(event: Event) {
        event.preventDefault();

        // Extract form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value;
        const details = (document.getElementById('details') as HTMLInputElement).value;

        // Generate the HTML for resume
        const resumeHTML = `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Details:</strong> ${details}</p>
        `;

        // Output the resume
        this.resumeOutput!.innerHTML = resumeHTML;
    }
}

// Instantiate the ResumeGenerator class when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ResumeGenerator();
});
