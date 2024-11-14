// Mock data for projects
const sampleProjects = [
   {
      image: "https://apa1906.net/wp-content/uploads/2018/09/Wide_Gold_ProjectAlpha.jpg",
      name: "Project Alpha",
      description: "A revolutionary new platform for digital marketing."
   },
   {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVICqVQFi7GrHvEucxj7s3GGoYSQUfWSW0rA&s",
      name: "Project Beta",
      description: "A tool that helps manage and organize business processes."
   },
   {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnTZAkGErZ-V_NxL6TnfzPjFxokHtoQYxLpw&s",
      name: "Project Gamma",
      description: "An innovative app to help you stay connected on the go."
   }
];

// Mock data for clients
const sampleClients = [
   {
      image: "https://images.squarespace-cdn.com/content/v1/57b76d92725e253599f3c373/1494568166881-01L5J55WTW75Y7OAWER9/clients.jpg?format=1500w",
      name: "John Doe",
      description: "CEO at XYZ Corporation",
      designation: "Chief Executive Officer"
   },
   {
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Jane Smith",
      description: "Web Developer at ABC Tech",
      designation: "Web Developer"
   },
   {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AXUg_jf1u7r_j9pwGXAApGdvzkiercr8Iw&s",
      name: "Sam Johnson",
      description: "Designer at Creative Solutions",
      designation: "Graphic Designer"
   }
];

// Display sample projects
const projectList = document.getElementById('project-list');
sampleProjects.forEach(project => {
   const projectElement = document.createElement('div');
   projectElement.innerHTML = `
      <img class ="project-img" src="${project.image}" alt="${project.name}">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
   `;
   projectList.appendChild(projectElement);
});

// Display sample clients
const clientList = document.getElementById('client-list');
sampleClients.forEach(client => {
   const clientElement = document.createElement('div');
   clientElement.innerHTML = `
      <img class ="client-img" src="${client.image}" alt="${client.name}">
      <h3>${client.name}</h3>
      <p>${client.description}</p>
      <p><strong>${client.designation}</strong></p>
   `;
   clientList.appendChild(clientElement);
});


document.getElementById('contactForm').addEventListener('submit', (e) => {
   e.preventDefault();
   const formData = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      mobile: document.getElementById('mobile').value,
      city: document.getElementById('city').value
   };
   fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
   })
   .then(response => response.json())
   .then(data => {
      alert('Contact form submitted!');
   })
   .catch(error => console.error('Error:', error));
});



// Handle newsletter subscription
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
   e.preventDefault();
   const email = document.getElementById('newsletterEmail').value;
   fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
   })
   .then(response => response.json())
   .then(data => alert('Subscribed to newsletter!'))
   .catch(error => console.error('Error:', error));
});
