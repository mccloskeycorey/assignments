var app = angular.module("HarleyApp", []);

app.controller("BlogController", BlogController);

function BlogController($scope) {
    $scope.createPost = createPost;

    function createPost(post) {
        console.log(post);
        $http.post("/api/blogpost", post)
    }
}