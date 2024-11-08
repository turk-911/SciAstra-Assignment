document.addEventListener("DOMContentLoaded", async () => {
  const coursesContainer = document.getElementById("courses-container");
  try {
    const response = await fetch("http://localhost:5500/api/courses");
    const courses = await response.json();
    courses.forEach((course) => {
      const courseElement = document.createElement("div");
      courseElement.classList.add("course");
      courseElement.innerHTML = `
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <div class="button-container">
        <p><strong>Price: $${course.price}</strong></p>
        <button onclick="window.location.href='payment.html'">Buy Now</button>
        </div>
      `;
      coursesContainer.appendChild(courseElement);
    });
  } catch (error) {
    console.error("Error loading courses:", error);
  }
  const blogContainer = document.getElementById("blog-container");
  try {
    const response = await fetch("http://localhost:5500/api/blog");
    const blogPosts = await response.json();
    blogPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("course");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><em>Published on ${new Date(
          post.publish_date
        ).toLocaleDateString()}</em></p>
        <p>${post.content.substring(0, 100)}...</p>
      `;
      blogContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error loading blog posts:", error);
  }
});
