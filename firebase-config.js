import { initializeApp } from
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue
} from
    "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "foodsafe-monitoring-system.firebaseapp.com",
    databaseURL: "https://foodsafe-monitoring-system-default-rtdb.firebaseio.com",
    projectId: "foodsafe-monitoring-system",
    storageBucket: "foodsafe-monitoring-system.firebasestorage.app",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, onValue };