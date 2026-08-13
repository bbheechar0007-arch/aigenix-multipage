import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const contactForm = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");
const submitBtn = document.getElementById("submitBtn");

if (contactForm) {
contactForm.addEventListener("submit", async (e) => {
e.preventDefault();

// Form inputs se data lena
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();

// Button loading state
submitBtn.innerText = "Sending...";
submitBtn.disabled = true;

try {
// Firebase 'inquiries' collection me data add karna
await addDoc(collection(db, "inquiries"), {
name: name,
email: email,
phone: phone,
message: message,
createdAt: serverTimestamp()
});

// Success message dikhana
responseMsg.style.color = "#00FF66";
responseMsg.innerText = "Thank you! Your inquiry has been submitted successfully.";
contactForm.reset();

} catch (error) {
console.error("Error adding document: ", error);
responseMsg.style.color = "#FF3333";
responseMsg.innerText = "Something went wrong. Please try again.";
} finally {
submitBtn.innerText = "Send Inquiry";
submitBtn.disabled = false;
}
});
}
