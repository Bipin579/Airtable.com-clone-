import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBvFoFj0FP9b_F1O6SjxuZ_uHT3-9IZndI",
    authDomain: "stata-web-app.firebaseapp.com",
    projectId: "stata-web-app",
    storageBucket: "stata-web-app.appspot.com",
    messagingSenderId: "399290529160",
    appId: "1:399290529160:web:1ab2817e38ce70b593f63d",
    databaseURL:"https://stata-web-app-default-rtdb.firebaseio.com/"
};
  
const app = initializeApp(firebaseConfig);

export default app