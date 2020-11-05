$(document).ready(async function() {

    $("#login").on("click", function(event) {
        event.preventDefault();
        let userBody = {
            name: $("input[name=username]").val(),
            password: $("input[name=password]").val()
        };
        $.ajax({
            method: "POST",
            data: userBody,
            url: "/api/users/login",
            success: function(data) {
                console.log("This is running");
                if (data) {
                    window.location.replace("/secret");
                }
            },
            error: function(data) {
                if (data.status === 401) {
                    alert("No User with your Credentials. Try again, or Sign Up!");            
                }
                else {
                    alert("Something went wrong on our side. Sorry! Try again.");
                }
            },
            dataType: "json"
        });
    });


});

