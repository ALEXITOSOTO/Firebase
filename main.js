 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBl98YMnGuEua8KD8aXPG2TeWlBz-7xEKA",
    authDomain: "futbol-953ae.firebaseapp.com",
    projectId: "futbol-953ae",
    storageBucket: "futbol-953ae.appspot.com",
    messagingSenderId: "580514350036",
    appId: "1:580514350036:web:e471b2d2e9485a52d10c41",
    measurementId: "G-F614L2EHS5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
