const searchInput = document.getElementById("searchInput");
const photoList = document.getElementById("photoList");

// Function to fetch and populate the photo list
function populatePhotoList() {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((photo) => {
                // Creating card
                const card = document.createElement("div");
                card.className = "card";
                card.className += " mb-3";
                card.style = "width: 18rem;";

                // Creating image element inside the card
                const image = document.createElement("img");
                image.src = photo.thumbnailUrl;
                image.className = "card-img-top";
                image.alt = "Photo";

                // Create card body
                const cardBody = document.createElement("div");
                cardBody.className = "card-body";

                // Create a paragraph element for the title
                const title = document.createElement("p");
                title.className = "card-text";
                title.textContent = photo.title;

                // Append elements to the card
                cardBody.appendChild(title);
                card.appendChild(image);
                card.appendChild(cardBody);

                // Append the card to the photoList
                photoList.appendChild(card);
            });
        });
}

// Function to filter and display photos based on search input
function filterPhotos() {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = photoList.getElementsByClassName("card");

    for (const card of cards) {
        const title = card.querySelector(".card-text").textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

searchInput.addEventListener("input", filterPhotos);

// Populate the photo list on page load
populatePhotoList();


// for theme :)
const theme = document.getElementById("theme");
theme.addEventListener("click", () => {
    const themenow = document.body.getAttribute("data-bs-theme");
    if (themenow == "dark") {
        document.body.setAttribute("data-bs-theme", "light");
        theme.textContent = "dark";
        theme.classList.add("btn-dark");
        theme.classList.remove("btn-light");
    }
    else {
        document.body.setAttribute("data-bs-theme", "dark");
        theme.textContent = "light";
        theme.classList.add("btn-light");
        theme.classList.remove("btn-dark");
    }
})