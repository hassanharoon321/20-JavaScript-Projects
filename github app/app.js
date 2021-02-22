
fetch("https://api.github.com/users/Rizwanjamal")
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        var name = document.getElementById("name");
        var username = document.getElementById("username");
        var bio = document.getElementById("bio");
        var followers = document.getElementById("followers");
        var following = document.getElementById("following");
        var public_repos = document.getElementById("public_repos");

        var imageUrl = data.avatar_url;

        var image = document.getElementById("image")
        image.src = imageUrl

        name.innerHTML = data.name
        username.innerHTML = data.login
        bio.innerHTML = data.bio
        followers.innerHTML = data.followers
        following.innerHTML = data.following
        public_repos.innerHTML = data.public_repos
    })