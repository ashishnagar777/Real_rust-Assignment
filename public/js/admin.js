document.addEventListener("DOMContentLoaded", () => {
    fetchProjects();
    fetchClients();
 });

 function fetchProjects() {
    fetch("/api/projects")
       .then((response) => response.json())
       .then((data) => {
          const projectList = document.getElementById("projectList");
          projectList.innerHTML = ""; // Clear existing list
          data.forEach((project) => {
             const projectItem = document.createElement("li");
             projectItem.className = "list-group-item";
             projectItem.innerHTML = `
                <span><strong>${project.name}</strong>: ${project.description}</span>
                <button class="btn btn-danger btn-sm delete-project" data-id="${project._id}">Delete</button>
             `;
             projectList.appendChild(projectItem);
          });
       })
       .catch((error) => console.error("Error fetching projects:", error));
 }

 function fetchClients() {
    fetch("/api/clients")
       .then((response) => response.json())
       .then((data) => {
          const clientList = document.getElementById("clientList");
          clientList.innerHTML = ""; // Clear existing list
          data.forEach((client) => {
             const clientItem = document.createElement("li");
             clientItem.className = "list-group-item";
             clientItem.innerHTML = `
                <span><strong>${client.name}</strong>: ${client.description}</span>
                <button class="btn btn-danger btn-sm delete-client" data-id="${client._id}">Delete</button>
             `;
             clientList.appendChild(clientItem);
          });
       })
       .catch((error) => console.error("Error fetching clients:", error));
 }

 document.getElementById("projectForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
       name: document.getElementById("projectName").value,
       description: document.getElementById("projectDescription").value,
       image: document.getElementById("projectImage").value,
    };
 
    fetch("/api/projects", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
    })
       .then((response) => response.json())
       .then((data) => {
          alert("Project added successfully!");
          fetchProjects();
          document.getElementById("projectForm").reset();
       })
       .catch((error) => console.error("Error adding project:", error));
 });

 document.getElementById("clientForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
       name: document.getElementById("clientName").value,
       description: document.getElementById("clientDescription").value,
       image: document.getElementById("clientImage").value,
    };
 
    fetch("/api/clients", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(formData),
    })
       .then((response) => response.json())
       .then((data) => {
          alert("Client added successfully!");
          fetchClients(); // Refresh client list
          document.getElementById("clientForm").reset();
       })
       .catch((error) => console.error("Error adding client:", error));
 });

 document.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-project")) {
       const projectId = e.target.getAttribute("data-id");
       deleteProject(projectId);
    }
    if (e.target.classList.contains("delete-client")) {
       const clientId = e.target.getAttribute("data-id");
       deleteClient(clientId);
    }
 });
 
 function deleteProject(id) {
    fetch(`/api/projects/${id}`, {
       method: "DELETE",
    })
       .then((response) => response.json())
       .then((data) => {
          alert("Project deleted successfully!");
          fetchProjects(); 
       })
       .catch((error) => console.error("Error deleting project:", error));
 }

 function deleteClient(id) {
    fetch(`/api/clients/${id}`, {
       method: "DELETE",
    })
       .then((response) => response.json())
       .then((data) => {
          alert("Client deleted successfully!");
          fetchClients(); 
       })
       .catch((error) => console.error("Error deleting client:", error));
 }

function fetchContacts() {
    fetch("/api/contact")
       .then((response) => response.json())
       .then((data) => {
          const contactList = document.getElementById("contactList");
          contactList.innerHTML = ""; 
          data.forEach((contact) => {
             const row = document.createElement("tr");
             row.innerHTML = `
                <td>${contact.fullName}</td>
                <td>${contact.email}</td>
                <td>${contact.mobile}</td>
                <td>${contact.city}</td>
                <td>${new Date(contact.createdAt).toLocaleDateString()}</td>
             `;
             contactList.appendChild(row);
          });
       })
       .catch((error) => console.error("Error fetching contacts:", error));
 }
 
 // Fetch subscribers and display them in the table
 function fetchSubscribers() {
    fetch("/api/newsletter")
       .then((response) => response.json())
       .then((data) => {
          const subscriberList = document.getElementById("subscriberList");
          subscriberList.innerHTML = ""; // Clear existing list
          data.forEach((subscriber) => {
             const row = document.createElement("tr");
             row.innerHTML = `
                <td>${subscriber.email}</td>
                <td>${new Date(subscriber.subscribedAt).toLocaleDateString()}</td>
             `;
             subscriberList.appendChild(row);
          });
       })
       .catch((error) => console.error("Error fetching subscribers:", error));
 }
 
 // Load data when page loads
 document.addEventListener("DOMContentLoaded", () => {
    fetchProjects();
    fetchClients();
    fetchContacts();
    fetchSubscribers();
 });
 