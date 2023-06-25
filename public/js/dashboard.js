const handleDeletePost = async (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post-routes/${postID}`, {
        method: "DELETE"
    });

    if (response.ok) {
        document.location.assign("/dashboard");
    }   else {
        alert("Failed to delete the blog post.");
    }
};

const handleEditPost = (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");
    document.location.assign(`/edit/${postId}`);
};

const editButtons = document.querySelectorAll(".edit-button");
const deleteButtons = document.querySelectorAll(".delete-button");

editButtons.forEach((button) => {
    button.addEventListener("click", handleEditPost);
});

  deleteButtons.forEach((button) => {
    button.addEventListener("click", handleDeletePost);
});


