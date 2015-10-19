function TechnologyGenerator($http) {
    var me = this;
    TechnologyGenerator.prototype.FrameworkData = null;
    TechnologyGenerator.prototype.ProgrammingData = null;
    TechnologyGenerator.prototype.ProgramData = null;
    $http.get('/data/about/technology/framework_data.json')
        .then(function success(res) {
            me.FrameworkData = res.data.FrameworkData;
        }, function error(res) {
            console.log("Error occurred getting framework data: ", res);
            toastr.warning("An error occurred while retrieving the framework technologies");
        });
    $http.get('/data/about/technology/programming_data.json')
        .then(function success(res) {
            me.ProgrammingData = res.data.ProgrammingData;
        }, function err(res) {
            console.log("Error occurred getting programming data: ", res);
            toastr.warning("An error occurred while retrieving the programming technologies");
        });
    $http.get('/data/about/technology/program_data.json')
        .then(function success(res) {
            me.ProgramData = res.data.ProgramData;
        }, function error(res) {
            console.log("An error occurred getting program data: ", res);
            toastr.warning("An error occurred while retrieving the program technologies");
        });
}