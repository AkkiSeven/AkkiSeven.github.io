$(document).ready(function () {
  $("#searchUser").on("keyup", function (e) {
    let username = e.target.value;

    // Make request to Github
    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "e4f84d38f715cddc4b02",
        client_secret: "c8bd8323a695dd02633798ca77696caad14e8e2b",
      },
    }).done(function (user) {
      $.ajax({
        url: "https://api.github.com/users/" + username + "/repos",
        data: {
          client_id: "e4f84d38f715cddc4b02",
          client_secret: "c8bd8323a695dd02633798ca77696caad14e8e2b",
          sort: 'created: asc',
          per_page: 10
        },
      }).done(function (repos) {
        $.each(repos, function (index, repo) {
          $("#repos").append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <ul class="list-group">
                    <li class="list-group-item"><strong>${repo.name}</strong>: ${repo.description}</li>
                    <br>
                  </ul>
                </div>
                <div class="col-md-3">
                <span class="badge badge-default">Forks: ${repo.forks_count}</span>
                <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-info">Show Repo</a>
                </div>
              </div>
            </div>
          `);
        });
      });
      $("#profile").html(`
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <hr>
          <div class="row">
            <div class="col-md-3">
              <img style="width:100%" class="shadow-sm p-3 mb-5 bg-white rounded avatar" src="${user.avatar_url}">
              <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-default">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br></br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Website/blog: ${user.blog}</li>
                <li class="list-group-item">Location: ${user.location}</li>
                <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br>
      <h3 class="page-header">Latest Repos</h3>
      <br>
      <div id="repos"></div>
      `);
    });
  });
});
