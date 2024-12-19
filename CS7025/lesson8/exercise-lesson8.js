// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(`Cookie set: ${name}=${value}`);
  }
  
  // Function to get a cookie
  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  }
  
  // Function to set session storage
  function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    console.log(`Session storage set: ${key}=${value}`);
  }
  
  // Function to get session storage
  function getSessionStorage(key) {
    return sessionStorage.getItem(key);
  }
  
  // Function to set local storage
  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`Local storage set: ${key}=${value}`);
  }
  
  // Function to get local storage
  function getLocalStorage(key) {
    return localStorage.getItem(key);
  }
  
  // Example usage:
  
  // Cookies
  setCookie("username", "JohnDoe", 7); // Set a cookie with a 7-day expiry
  console.log("Cookie value:", getCookie("username")); // Retrieve cookie value
  
  // Session Storage
  setSessionStorage("sessionKey", "Session storage data");
  console.log("Session storage value:", getSessionStorage("sessionKey"));
  
  // Local Storage
  setLocalStorage("localKey", "Local storage data");
  console.log("Local storage value:", getLocalStorage("localKey"));
  