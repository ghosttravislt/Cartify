const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const loader = document.querySelector(".loader");
const mainPage = document.querySelector(".main-log");

// sign up alert
function alertFunction() {
  const notifications = document.querySelector(".sign-up-notification");
  console.log(notifications);
  notifications.style.transform = "translateY(100px)";
  setTimeout(() => {
    notifications.style.transform = "translateY(0px)";
  }, 2000);
  console.log("hello");
}
function alertFunctionError() {
  const notificationError = document.querySelector(
    ".sign-up-notification-error"
  );
  console.log(notificationError);
  notificationError.style.transform = "translateY(100px)";
  setTimeout(() => {
    notificationError.style.transform = "translateY(0px)";
  }, 2000);
  console.log("hello");
}
function alertFunctionErrorPassword() {
  const notificationError = document.querySelector(
    ".sign-up-notification-error-pass"
  );
  console.log(notificationError);
  notificationError.style.transform = "translateX(-450px)";
  setTimeout(() => {
    notificationError.style.transform = "translateX(0px)";
  }, 2000);
  console.log("hello");
}

const pb = new PocketBase("http://127.0.0.1:8090");
console.log(pb);

// console logging input fields

console.log(userName.value);

const signUpForm = document.querySelector("#signupForm");

signUpForm.addEventListener("submit", async (formEvent) => {
  formEvent.preventDefault();
  let userData = {
    name: `${userName.value}`,
    email: `${email.value}`,
    emailVisibility: true,
    password: `${password.value}`,
    confirmPassword: `${confirmPassword.value}`,
  };
  console.log(userData);
  console.log(password.valueMissing);

  // checking password field is not empty
  if (!password.value.trim() || !confirmPassword.value.trim()) {
    alertFunctionError();
    alertFunctionErrorPassword();
  }

  if (password.value == confirmPassword.value) {
    try {
      const record = pb.collection("cartifyUsers").create(userData);
      await record;
      alertFunction();
      console.log("User created:", record);
      setTimeout(() => {
        loader.style.display = "flex";
        mainPage.style.display = "none";
      }, 1000);
      setTimeout(() => {
        loader.style.display = "none";
        window.location.href = "index.html";
      }, 5000);
    } catch (error) {
      console.error("Error creating user:", error);
      console.log("Sign up failed: " + error.message);
      console.log(pb);
    }
  }
});
