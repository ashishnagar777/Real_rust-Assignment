// document
//   .getElementById("contactForm")
//   .addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const formDataObject = Object.fromEntries(formData.entries());
//     console.log(formDataObject);
//     try {
//       const response = await fetch("/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formDataObject),
//       });
//       console.log(response);

//       if (response.ok) {
//         // Success popup
//         Swal.fire({
//           icon: "success",
//           title: "Success!",
//           text: "Your consultation request has been submitted successfully!",
//           confirmButtonColor: "#ff6f00",
//         });
//         // Reset the form
//         e.target.reset();
//       } else {
//         // Error popup
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong! Please try again.",
//           confirmButtonColor: "#ff6f00",
//         });
//       }
//     } catch (error) {
//       // Network error popup
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Network error! Please check your connection.",
//         confirmButtonColor: "#ff6f00",
//       });
//     }
//   });
