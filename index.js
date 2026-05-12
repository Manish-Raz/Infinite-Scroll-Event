const container = document.querySelector(".container");

let limit = 4;          // posts per request
let pageCount = 1;      // current page
let postCount = 1;      // numbering on cards
let loading = false;    // prevents multiple fetches
let finished = false;   // stops when API returns no data

// Fetch posts
const getPost = async () => {
  if (loading || finished) return;

  loading = true;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`
    );

    const data = await response.json();

    // Stop if no more posts
    if (data.length === 0) {
      finished = true;

      container.insertAdjacentHTML(
        "beforeend",
        `<h2 style="margin:30px;color:white;">No more posts</h2>`
      );

      return;
    }

    data.forEach((curElem) => {
      const htmlData = `
        <div class="posts">
          <p class="post_id">${postCount++}</p>
          <h2 class="title">${curElem.title}</h2>
          <p class="post-info">${curElem.body}</p>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", htmlData);
    });

    pageCount++;
  } catch (error) {
    console.error("Error fetching posts:", error);
  } finally {
    loading = false;
  }
};

// Initial load
getPost();

// Infinite scroll
window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } =
    document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 200) {
    getPost();
  }
});