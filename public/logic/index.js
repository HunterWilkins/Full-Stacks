$(document).ready(async function() {

    const users = await $.getJSON("/api/users");
    $("#users").append(users.map(item => `<li style = "${item.gender ? "color: white" : "color: blue"}">${item.name}</li>`));
});

