
        // 1. Different ways of addressing elements within the DOM

        let title = document.getElementById("title");
        console.log("By ID:", title.textContent);

        let newDiv = document.createElement("div");
        newDiv.className = "student";
        newDiv.textContent = "This is a student element.";
        document.body.appendChild(newDiv);
        let students = document.getElementsByClassName("student");
        console.log("By Class Name:", students[0].textContent);

        let input = document.createElement("input");
        input.type = "text";
        input.name = "up";
        document.body.appendChild(input);
        let inputsByName = document.getElementsByName("up");
        console.log("By Name:", inputsByName[0]);

        let headings = document.getElementsByTagName("h1");
        console.log("By Tag Name:", headings[0].textContent);

        let queryTitle = document.querySelector("#title");
        console.log("By Query Selector:", queryTitle.textContent);

        let allStudents = document.querySelectorAll(".student");
        console.log("By Query Selector All:", allStudents);

        // 2. Adding and Removing Elements
        document.getElementById("addElementBtn").addEventListener("click", () => {
            let paragraph = document.createElement("p");
            paragraph.textContent = "This is a dynamically added paragraph!";
            paragraph.classList.add("highlight");
            document.getElementById("content").appendChild(paragraph);
        });

        document.getElementById("removeElementBtn").addEventListener("click", () => {
            let contentDiv = document.getElementById("content");
            if (contentDiv.lastChild) {
                contentDiv.lastChild.remove();
            } else {
                alert("No more elements to remove!");
            }
        });

        // 3. Manipulating Attributes
        document.getElementById("changeAttributeBtn").addEventListener("click", () => {
            let contentDiv = document.getElementById("content");
            contentDiv.setAttribute("data-counter", "5");
            alert("Attribute 'data-counter' set to: " + contentDiv.getAttribute("data-counter"));
        });

        // 4. Reading Data from an External JSON File
        document.getElementById("fetchJSONBtn").addEventListener("click", () => {
            let dataSource = "data.json"; // Replace this with the correct file path
            fetch(dataSource)
                .then((response) => response.json())
                .then((data) => {
                    console.log("JSON Data Loaded:", data);
                    let content = document.getElementById("content");
                    content.innerHTML = `<p>Loaded JSON: ${JSON.stringify(data)}</p>`;
                })
                .catch((err) => {
                    console.error("Error loading JSON:", err);
                });
        });

        // 5. Reading Data from an External API
        document.getElementById("fetchAPIBtn").addEventListener("click", () => {
            let topic = "technology";
            let apiKey = "your_api_key_here"; // Replace with your API key
            let dataSource = `https://newsapi.org/v2/everything?q=${topic}&from=2024-06-18&sortBy=publishedAt&apiKey=${apiKey}`;

            fetch(dataSource)
                .then((response) => response.json())
                .then((data) => {
                    console.log("API Data Loaded:", data);
                    let articles = data.articles;
                    let content = document.getElementById("content");
                    content.innerHTML = ""; // Clear previous content
                    articles.slice(0, 5).forEach((article) => {
                        let articleDiv = document.createElement("div");
                        articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p>`;
                        content.appendChild(articleDiv);
                    });
                })
                .catch((err) => {
                    console.error("Error fetching API data:", err);
                    alert("Error fetching API data. Check your API key!");
                });
        });

