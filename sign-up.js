const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const dbpassword = "Nockyrich154k";
const dbemail = "hunchocools@gmail.com";

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

  if (password === null) {
    console.log();
  }

  try {
    const record = pb.collection("cartifyUsers").create(userData);
    await record;
    alertFunction();
    console.log("User created:", record);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  } catch (error) {
    console.error("Error creating user:", error);
    console.log("Sign up failed: " + error.message);
    console.log(pb);
  }
});
