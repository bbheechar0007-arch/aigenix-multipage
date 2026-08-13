// Firebase SDK Version 10 Modules import kar rahe hain
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Aapki Firebase Configuration Details (Aapke screenshot ke acc)
const firebaseConfig = {
apiKey: "AIzaSyD...", // Aapka API Key
authDomain: "aigenix-india.firebaseapp.com",
projectId: "aigenix-india",
storageBucket: "aigenix-india.firebasestorage.app",
messagingSenderId: "123456789",
appId: "1:123456789:web:abcdef..."
};

// Firebase Initialize Karein
const app = initializeApp(firebaseConfig);

// Firestore Database Export Karein
export const db = getFirestore(app);
