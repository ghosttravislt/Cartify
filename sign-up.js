const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const dbpassword = "Nockyrich154k";
const dbemail = "hunchocools@gmail.com";

const pb = new PocketBase("http://127.0.0.1:8090");
console.log(pb);

// console logging input fields

console.log(userName.value);

const signUpForm = document.getElementById("signupForm");
const notification = document.getElementById("notification");
notification.classList.add("show");

// if(){

// }

signUpForm.addEventListener("submit", async (formEvent) => {
  let userData = {
    name: `${userName.value}`,
    email: `${email.value}`,
    emailVisibility: true,
    password: `${password.value}`,
    confirmPassword: `${confirmPassword.value}`,
  };

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }
  formEvent.preventDefault();
  try {
    const record = pb.collection("cartifyUsers").create(userData);
    await record;

    console.log("User created:", record);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  } catch (error) {
    console.error("Error creating user:", error);
    console.log("Sign up failed: " + error.message);
    console.log(pb);
  }
});
