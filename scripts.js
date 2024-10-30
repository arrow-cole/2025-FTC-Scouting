let formData = {}; // Initialize an empty object to store all form data

// Load data from localStorage if available
if (localStorage.getItem("formData")) {
    formData = JSON.parse(localStorage.getItem("formData"));
}

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

    // Save form data to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Data submitted successfully and saved locally!");

    // Redirect to index.html after successful submission
    window.location.href = "index.html";
}

// Function to load stored data (if needed)
function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
        // You can populate the forms with this data if you want
        // For example:
        for (const [key, value] of Object.entries(storedData)) {
            const element = document.querySelector(`[name="${key}"]`);
            if (element) {
                if (element.type === "checkbox" || element.type === "radio") {
                    element.checked = (value === "true");
                } else {
                    element.value = value;
                }
            }
        }
    }
}
