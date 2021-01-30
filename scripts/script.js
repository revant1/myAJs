var myApp = angular.module("myModule",[]);

myApp.controller('myController',function($scope) {
    // const country = {
    //     name:"India",
    //     capital: " new Delhi",
    //     src:"assets/india.png"
    // } 
    $scope.color = {
        name: 'blue'
      };
    $scope.data ={
        singleSelect: null,
        multipleSelect: [],
        option1: 'option-1'
       };

    $scope.details = [
        {
            name:"UK",
            cities:[
                {name:"London"},
                {name:"Manchester"},
                {name:"Houston"},
            ]
        },
        {
            name:"INDIA",
            cities:[
                {name:"Hyderabad"},
                {name:"Chennai"},
                {name:"Mumbai"},
            ]
        },
    ];
    $scope.employees = [
        {name:"Ron", dob: new Date("November 23,1988") ,gender:"1",salary:"55000.154"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154"},
        {name:"Zon", dob: new Date("June 2,1950") ,gender:"2",salary:"77989.154"},
        {name:"Xon", dob: new Date("July 6,1940") ,gender:"1",salary:"89533.154"},
        {name:"Eon", dob: new Date("January 3,2020") ,gender:"1",salary:"121545.154"},
    ]
    $scope.rowLimit = 3;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    
    $scope.sortData = function(column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column; 
    }

    $scope.getSortClass = function(column){
        if($scope.sortColumn == column) {
            console.log(column,'..',$scope.sortColumn)
            return $scope.reverseSort ?  'arrow-down' : 'arrow-up'
        }
        return ''

    }
    
})

myApp.controller('another',function($scope){
    var technologies = [
        {name:"c#",likes :0,dislikes:0},
        {name:"java",likes :0,dislikes:0},
        {name:"JS",likes :0,dislikes:0},
    ]
    $scope.technologies = technologies;
    $scope.incLike = function(tech) {
                tech.likes++
    }
    $scope.incDisLike = function(tech) {
        tech.dislikes++
    }
})

myApp.controller('search-controller',function($scope){
    $scope.employees = [
        {name:"Ron", dob: new Date("November 23,1988") ,gender:"1",salary:"55000.154",city:"Hyderabad"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154",city:"Guntur"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154",city:"Vijayawada"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154",city:"Hyderabad"},
        {name:"Zon", dob: new Date("June 2,1950") ,gender:"3",salary:"77989.154",city:"Hyderabad"},
        {name:"Zon", dob: new Date("June 2,1950") ,gender:"2",salary:"77989.154",city:"Vijayawada"},
        {name:"Zon", dob: new Date("June 2,1950") ,gender:"2",salary:"77989.154",city:"Guntur"},
        {name:"Xon", dob: new Date("July 6,1940") ,gender:"1",salary:"89533.154",city:"Rajahmundry"},
        {name:"Xon", dob: new Date("July 6,1940") ,gender:"1",salary:"89533.154",city:"Warangal"},
        {name:"Xon", dob: new Date("July 6,1940") ,gender:"3",salary:"89533.154",city:"Rajahmundry"},
        {name:"Eon", dob: new Date("January 3,2020") ,gender:"1",salary:"121545.154",city:"Warangal"},
    ];

})

myApp.controller("includeTableHtml",function($scope) {
    $scope.employees = [
        {name:"Ron", dob: new Date("November 23,1988") ,gender:"1",salary:"55000.154",city:"Hyderabad"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154",city:"Guntur"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154",city:"Vijayawada"},
        {name:"Bpn", dob: new Date("November 3,1988") ,gender:"2",salary:"12345.154",city:"Hyderabad"},
        {name:"Zon", dob: new Date("June 2,1950") ,gender:"3",salary:"77989.154",city:"Hyderabad"},
    ]
})