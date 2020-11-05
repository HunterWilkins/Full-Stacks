$(document).ready(function() {
  
    getPosts();
    
    $("#post").on("click", function(event) {
        event.preventDefault();
        let post = {
            title: $("input[name=title]").val(),
            body: $("input[name=body]").val()
        }
        $.post("/api/posts", post);
    });

    $(document).on("click", ".post", function() {
        getPost($(this).attr("data-id"));
    });

    async function getPosts() {
        const posts = await $.getJSON("/api/posts/all");
        $("#frontpage").append(posts.map(post => `<li class = "post" data-id = ${post.id}>${post.title}</li>`))
    };

    async function getPost(id) {
        const postInfo = await $.getJSON("/api/posts/post/" + id);
        $("#current-post").text(postInfo.body);
        $("#current-post-author").text(postInfo.User.name);
    }

});