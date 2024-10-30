let formData = {}; // Initialize an empty object to store all form data

// Load data from JSON file (for testing purposes)
fetch("scouting_data.json")
    .then(response => response.json())
    .then(data => {
        console.log("Loaded JSON data:", data);
        formData = data; // Assign loaded JSON data to formData
    })
    .catch(error => console.error("Error loading JSON:", error));

function goToPage2() {
    // Capture data from Page 1 and store it in formData
    const page1Form = document.getElementById("page1");
    Object.assign(formData, Object.fromEntries(new FormData(page1Form).entries()));

    // Navigate to Page 2
    window.location.href = "page2.html";
}

function goToPage1() {
    // Navigate back to Page 1
    window.location.href = "index.html";
}

function goToPage3() {
    // Capture data from Page 2 and store it in formData
    const page2Form = document.getElementById("page2");
    Object.assign(formData, Object.fromEntries(new FormData(page2Form).entries()));

    // Navigate to Page 3
    window.location.href = "page3.html";
}

function goToPage2FromPage3() {
    // Navigate back to Page 2
    window.location.href = "page2.html";
}

function submitForm() {
    // Capture data from Page 3 and store it in formData
    const page3Form = document.getElementById("page3");
    Object.assign(formData, Object.fromEntries(new FormData(page3Form).entries()));

    // Google Apps Script Web App URL (replace with your own)
    const url = "https://script.google.com/macros/s/AKfycbz0oSGLvpFktaoKnm63XvGvF8RO0S5EN_7LRSVrLZrDij-DXHrtURvsFCx-5HFOQlQD2A/execl";

    // Send data to Google Sheets via Google Apps Script
    fetch(url, {
        method: "POST",
        mode: "no-cors", // Use "no-cors" mode for POST requests to Google Apps Script
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData) // Convert formData object to JSON string
    })
    .then(() => {
        alert("Data submitted successfully!");
        // Redirect to index.html after successful submission
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error("Error submitting data:", error);
        alert("There was an error submitting your data. Please try again.");
    });
}
