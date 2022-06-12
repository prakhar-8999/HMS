var app = angular.module('app',['ui.router']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider){
    $stateProvider
    .state('1',{
        url: '/patient-registration',
        templateUrl: '/patient-registration.html',
        controller: 'patient-register'
    })
    .state('2',{
        url: '/patient-login',
        templateUrl: '/patient-login.html',
        controller: 'patient-login'
    })
    .state('3',{
        url: '/Receptionist-login',
        templateUrl: '/Receptionist-login.html',
        controller: 'Receptionist-login'
    })
    .state('4',{
        url: '/Doctor-login',
        templateUrl: '/Doctor-login.html',
        controller: 'DoctorLo'
    })
    .state('5',{
        url: '/Doctor-Registration',
        templateUrl: '/Doctor-Registration.html',
        controller: 'DoctorRe'
    })
    .state('6',{
        url: '/patient-dashboard',
        views:{
            '':{
                templateUrl: '/patient-dashboard.html',
                controller: 'patient-dashboard'
            }
        }
        
    })

    .state('6.appoi', {
        url: '/appointment-book',
        views: {
          'patient' :{
            templateUrl: '/appointment-book.html',
            controller: 'appointment'
          }
        }
    })
    .state('6.papp', {
        url: '/previous-appointment',
        views: {
          'patient' :{
            templateUrl: '/previous-appointment.html',
            controller: 'p-appointment'
          }
        }
    })
    .state('6.p-profile', {
        url: '/p-profile',
        views: {
          'patient' :{
            templateUrl: '/p-profile.html',
            controller: 'p-profile'
          }
        }
    })
    .state('6.phistory', {
        url: '/p-history',
        views: {
          'patient' :{
            templateUrl: '/p-history.html',
            controller: 'p-history'
          }
        }
    })
    .state('6.pprescription', {
        url: '/p-prescription',
        views: {
          'patient' :{
            templateUrl: '/p-prescription.html',
            controller: 'p-prescription'
          }
        }
    })


    .state('7',{
        url: '/doctor-dashboard',
        views:{
            '':{
                templateUrl: '/doctor-dashboard.html',
                controller: 'doctor-dashboard'
            }
        }
    })
    .state('7.d-ap', {
        url: '/doc-pa-appointment',
        views: {
          'docdash' :{
            templateUrl: '/doc-pa-appointment.html',
            controller: 'doc-pa-appointment'
          }
        }
    })
    .state('7.alloted', {
        url: '/alloted-patient',
        views: {
          'docdash' :{
            templateUrl: '/alloted-patient.html',
            controller: 'alloted-patient'
          }
        }
    })

    .state('7.visited-pa', {
        url: '/visited-pa',
        views: {
          'docdash' :{
            templateUrl: '/visited-pa.html',
            controller: 'visited-pa'
          }
        }
    })

    .state('7.pro', {
        url: '/Doctor-profile',
        views: {
          'docdash' :{
            templateUrl: '/Doctor-profile.html',
            controller: 'Doctor-profile'
          }
        }
    })
    
    .state('7.approved', {
        url: '/approved-patient',
        views: {
          'docdash' :{
            templateUrl: '/approved-patient.html',
            controller: 'approved-patient'
          }
        }
    })
    .state('7.doc-book-app', {
        url: '/doc-book-app',
        views: {
          'docdash' :{
            templateUrl: '/doc-book-app.html',
            controller: 'doc-book-app'
          }
        }
    })



    .state('8',{
        url: '/Receptionist-dashboard',
        views:{
            '':{
                templateUrl: '/Receptionist-dashboard.html',
                controller: 'Receptionist-dashboard'
            }
        }
    })

    .state('8.re-ap-book',{
        url: '/re-ap-book',
        views:{
            'recep':{
                templateUrl: '/re-ap-book.html',
                controller: 're-ap-book'
            }
        }
    })
    .state('8.re-pending-ap',{
        url: '/re-pending-ap',
        views:{
            'recep':{
                templateUrl: '/re-pending-ap.html',
                controller: 're-pending-ap'
            }
        }
    })
    .state('8.doctor-database',{
        url: '/doctor-database',
        views:{
            'recep':{
                templateUrl: '/doctor-database.html',
                controller: 'doctor-database'
            }
        }
    })
    .state('8.Patient-database',{
        url: '/Patient-database',
        views:{
            'recep':{
                templateUrl: '/Patient-database.html',
                controller: 'Patient-database'
            }
        }
    })
    .state('8.re-profile',{
        url: '/re-profile',
        views:{
            'recep':{
                templateUrl: '/re-profile.html',
                controller: 're-profile'
            }
        }
    })
    .state('8.report',{
        url: '/report',
        views:{
            'recep':{
                templateUrl: '/report.html',
                controller: 'report'
            }
        }
    })



    .state('otherwise',{
        url: '*path',
        templateUrl: '/home.html',
        controller: 'home'
    });
}]);


app.controller('patient-register',function($scope,$http){
    $scope.a = 100;

    var configdate = function(){
        var today = new Date().toISOString().slice(0,10);
        document.getElementById("DOB").setAttribute('max', today);
    }
    configdate();

    $scope.register = function(){

        if (
            $scope.fname == undefined ||
            $scope.lname == undefined ||
            $scope.dob == undefined ||
            $scope.email == undefined ||
            $scope.pass1 == undefined ||
            $scope.pass2 == undefined ||
            $scope.phone == undefined ||
            $scope.gen == undefined ||
            $scope.govid == undefined ||
            $scope.govnum == undefined ||
            $scope.blood == undefined ||
            $scope.address == undefined ||
            $scope.city == undefined ||
            $scope.state == undefined ||
            $scope.country == undefined ||
            $scope.pin == undefined
        ){
            Swal.fire({
                icon: 'warning',
                title: 'EMPTY FIELD !!!!',
            })
        }
        else{
            if ($scope.pass1 != $scope.pass2){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password Mismatch....',
                    footer: '<a href="">Get Help</a>'
                })
            }
            else{
                
    
                if ($scope.height == undefined){
                    $scope.height = '';
                }
                if ($scope.weight == undefined){
                    $scope.weight = '';
                }
                if ($scope.medi == undefined){
                    $scope.medi = '';
                }
    
                
                var day = document.getElementById('DOB').value
    
                var data = {
                    'First_Name':$scope.fname,
                    'Last_Name':$scope.lname,
                    'Username':$scope.username,
                    'DOB':day,
                    'Email':$scope.email,
                    'Password':$scope.pass1,
                    'C_Password':$scope.pass2,
                    'Mobile_Number':$scope.phone,
                    'Gender':$scope.gen,
                    'Government_ID':$scope.govid,
                    'Gov_ID_Number':$scope.govnum,
                    'Height':$scope.height,
                    'Weight':$scope.weight,
                    'Blood_Group':$scope.blood,
                    'Address':$scope.address,
                    'City':$scope.city,
                    'State':$scope.state,
                    'Country':$scope.country,
                    'Pincode': $scope.pin,
                    'Medical_history': $scope.medi
    
                };
                
    
                
                $http({
                    method:'POST',
                    url:'http://10.21.84.38:8000/Patient/registration',
                    data:data
                })
                .then(function (response){
                        
                    if (response.status == 200){
                        Swal.fire({
                            icon: 'success',
                            title: 'Great...',
                            text: 'Resgistration Successfull...',
                            footer: '<a href="">Need any Help</a>'
                        })
                        myfom.reset();
                    }
                            
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.data.message,
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                })
            }
        }

        
    }
});



app.controller('patient-login',function($scope,$http,$window,$rootScope,$state){
    document.getElementById('head').style.display = 'block';
    document.getElementById('nav').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
    let list = JSON.parse(localStorage.getItem("TOKEN"));
    if (list != null){
        $window.location.href = '#!patient-dashboard'
    }
    
    $scope.patientlogin = function() {

        if($scope.patientuser == undefined || $scope.patientpass == undefined || $scope.patientuser == '' || $scope.patientpass == ''){
            Swal.fire({
                icon: 'warning',
                title: 'Empty Field Not Allowed',
            })
        }
        else{
            var logininfo = {
                'Username':$scope.patientuser,
                'Password':$scope.patientpass
            }
    
    
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/login',
                data:logininfo
            })
            .then(function (response){
                if (response.status == 200){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'LOGIN SUCCESSFULl',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    
                    lofom.reset();
                    $rootScope.token = response.data.Token;
                    let list = JSON.parse(localStorage.getItem("TOKEN"));
                    if (list === null){
                        phurl = [];
                    }
                    else{
                        phurl = list;
                    }
                    phurl.push(response.data.Token);
                    localStorage.setItem('TOKEN',JSON.stringify(phurl));
                    $window.location.href = '#!patient-dashboard'
    
                }
                       
                        
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.data.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    
        }

        
        
    }


    $scope.sendotp = function(){
        console.log(document.getElementById('chanpass').value)
        if(document.getElementById('chanpass').value == ""){
            Swal.fire({
                icon: 'warning',
                title: 'Username Required',
            })
        }
        else{
            var us = {
                'Username':document.getElementById('chanpass').value
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/SMS',
                data:us
            })
            .then(function(response){
                if(response.status == 200){
                    console.log(response)
                    document.getElementById('userotp').style.display = 'none'
                    document.getElementById('otpsubmit').style.display = 'block'
                    
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.data.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })

        }
    }


    $scope.matchotp = function(){
        if(document.getElementById('otp').value == ""){
            Swal.fire({
                icon: 'error',
                title: 'OTP Required',
            })
        }
        else{
            var otp = {
                'OTP':document.getElementById('otp').value
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/OTP/Verification',
                data:otp
            })
            .then(function(response){
                if(response.status == 200){
                    console.log(response)
                    document.getElementById('repass').style.display = 'block'
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
    }

    $scope.changepassword = function(){
        if(document.getElementById('newpa').value == '' || document.getElementById('newcpas').value == ''){
            Swal.fire({
                icon: 'error',
                title: 'Empty Field !!!!',
            })
        }
        else{
            var changepass = {
                'Password':document.getElementById('newpa').value,
                'C_Password':document.getElementById('newcpas').value,
                'Username':document.getElementById('chanpass').value
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/Pass/Change',
                data:changepass
            })
            .then(function(response){
                console.log(response)
                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                })
            })
            .catch(function(error){
                console.log(error)
            })
        }
    }


});



app.controller('Receptionist-login',function($scope,$http,$state){


    document.getElementById('head').style.display = 'block';
    document.getElementById('nav').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
    var list = JSON.parse(localStorage.getItem('re-token'));
    if(list != null){
        $state.go('8')
    }
    $scope.relogin = function(){

        if($scope.username == undefined || $scope.password == undefined || $scope.username == '' || $scope.password == ''){
            Swal.fire({
                icon: 'warning',
                title: 'EMPTY FIELD !!!!',
            })
        }
        else{
            var redata = {
                'Username':$scope.username,
                'Password':$scope.password
            }
    
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Receptionist/login',
                data:redata
            })
            .then(function (response){
                if (response.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1000
                      })
                    refom.reset();
                    let list = JSON.parse(localStorage.getItem('re-token'));
                    if (list === null){
                        relist = [];
                    }
                    else{
                        relist = list;
                    }
                    relist.push(response.data.Token)
                    localStorage.setItem('re-token',JSON.stringify(relist));
                    $state.go('8')
                }
                        
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }

    }
    
});



app.controller('DoctorLo',function($scope,$http,$window,$state){

    document.getElementById('head').style.display = 'block';
    document.getElementById('nav').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
    let list = JSON.parse(localStorage.getItem("DO-TOKEN"));
    if (list != null){
        $window.location.href = '#!doctor-dashboard'
    }
    $scope.dologin = function(){

        if($scope.username == undefined || $scope.password == undefined || $scope.username == '' || $scope.password == ''){
            Swal.fire({
                icon: 'warning',
                title: 'EMPTY FIELD !!!!'
            })
        }
        else{
            var doinfo = {
                'Username':$scope.username,
                'Password':$scope.password
            }
    
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Doctor/login',
                data:doinfo
            })
            .then(function (response){
                if (response.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1000
                    })
                      
                    dofom.reset();
                    let list = JSON.parse(localStorage.getItem("DO-TOKEN"));
                    if (list === null){
                        doctlist = [];
                    }
                    else{
                        doctlist = list;
                    }
                    
                    doctlist.push(response.data.Token);
                    localStorage.setItem('DO-TOKEN',JSON.stringify(doctlist));
                    $window.location.href='#!doctor-dashboard'
    
    
                }
                       
                        
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.data.message,
                })
            })
        }
        
    }
});



app.controller('DoctorRe',function($scope,$http){



    var configdate = function(){
        var today = new Date().toISOString().slice(0,10);
        document.getElementById("dob").setAttribute('max', today);
    }
    configdate();

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/Specialization'
    })
    .then(function (response){
        if (response.status == 200){
            $scope.Special = response.data.Spe;
        }
        
                
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: error.data.message,
            footer: '<a href="">Get Help</a>'
        })
    })



    $scope.dores = function(){
        if ($scope.pass1 != $scope.cpass){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password Mismatch....',
            })
        }
        else{

            var day = document.getElementById('dob').value
            
            

            var dore = {
                'First_Name':$scope.fname,
                'Last_Name':$scope.lname,
                'Username':$scope.Uname,
                'DOB':day,
                'Email':$scope.email,
                'Password':$scope.pass1,
                'C_Password':$scope.cpass,
                'Mobile_Number':$scope.phone,
                'Gender':$scope.gen,
                'Government_ID':$scope.govid,
                'Gov_ID_Number':$scope.govnum,
                'Height':$scope.height,
                'Weight':$scope.weight,
                'Blood_Group':$scope.blood,
                'Qualification':$scope.qualification,
                'Speciality':$scope.specialty,
                'Experience':$scope.experience,
                'Previously_Working_at':$scope.working,
                'Address':$scope.add,
                'City':$scope.city,
                'State':$scope.state,
                'Country':$scope.country,
                'Pincode': $scope.pin,
                'Appointment_fees':$scope.feesss


            };

            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Doctor/registration',
                data:dore
            })
            .then(function (response){
                    
            if (response.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: 'Great...',
                    text: 'Resgistration Successfull...',
                    footer: '<a href="">Need any Help</a>'
                })
            }
                
                        
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.data.message,
                })
            })

        }
    }
});

app.controller('patient-dashboard',function($scope,$rootScope,$window,$http,$location){
    
    document.getElementById('head').style.display = 'none';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('foot').style.display = 'none';

    let list = JSON.parse(localStorage.getItem("TOKEN"));
    if (list === null){
        $window.location.href = '#!patient-login';
        Swal.fire({
            icon: 'warning',
            title: 'LOGIN FIRST',
        })
          
    }
    else{
        phurl = list;
        var token = {
            'Token': phurl[0]
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Patient/home',
            data:token
        })
        .then(function (response){
            if (response.status == 200){
                $scope.name = response.data.User_detail.First_Name + " " + response.data.User_detail.Last_Name;
                $scope.username = response.data.User_detail.Username;
                $scope.Gender = response.data.User_detail.Gender;
                $scope.iidd = response.data.User_detail.id;
                $scope.ag = response.data.User_detail.Patient_Age;
                $scope.mob = response.data.User_detail.Mobile_Number;
                $scope.emai = response.data.User_detail.Email;

                $http({
                    method:'POST',
                    url:'http://10.21.84.38:8000/Patient/Doctors'
                })
                .then(function (response){
                    if (response.status == 200){
                        $scope.docdetails = response;
                    }
                    if(response.status == 204){
                        $scope.docdetails = response;
                    }
                })
                .catch(function(error){
                    Swal.fire({
                        icon: 'error',
                        title: error.data.message,
                    })
                })


                

            }
                    
                    
        })
    }
    document.getElementById('logoutbtn').addEventListener('click',function(){
        let list = JSON.parse(localStorage.getItem('TOKEN'));
        var token = {
            'Token': phurl[0]
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Patient/logout',
            data:token
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LOGOUT SUCCESSFULL',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
                    
                    
        })
        localStorage.removeItem('TOKEN');
        $location.path('patient-login')
    })
    
    
    

});

app.controller('appointment',function($scope,$http){
    
    let list = JSON.parse(localStorage.getItem("TOKEN"));
    var token = {
        'Token':list[0]
    }

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Disease',
    })
    .then(function (response){
        if (response.status == 200){

            $scope.dis = response.data.Des
        }
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })



    $scope.doc = function(){
        if($scope.Speciality != undefined){
            var spe = {
                'Specialization':$scope.Speciality
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/Appointment/Doctors',
                data:spe
            })
            .then(function (response){
                if (response.status == 200){
                    if(response.data.Doctor_detail.length == 0){
                        $scope.dependoc = response.data.Doctor_detail
                        document.getElementById('nodoc').style.display = 'block'
                        document.getElementById('nodoc').innerHTML = response.data.message
                    }
                    else{
                        document.getElementById('nodoc').style.display = 'none'
                        $scope.dependoc = response.data.Doctor_detail
                    }
                }
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
        
    }


    





    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Doctor/Speciality'
    })
    .then(function(response){
        $scope.spee = response.data.Spe
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })

    
    
    var configdate = function(){
        var tf = new Date();
        var today = new Date().toISOString().slice(0,10);
        var newDate = new Date(tf.setMonth(tf.getMonth()+2)).toISOString().slice(0,10);
        document.getElementById("date").setAttribute('min', today);
        document.getElementById("date").setAttribute('max', newDate);
    }
    configdate();

    
    $scope.feees = function(){
        if($scope.lidoctor != undefined){
            var docid = {
                'id':$scope.lidoctor
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/Appointment/Doctor/Fees',
                data:docid
            })
            .then(function (response){
                if (response.status == 200){
                    $scope.fees = response.data.Doctor_fees;
                }
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
        
    }



    $scope.appointment = function(){
        let list = JSON.parse( localStorage.getItem('TOKEN'));
        var token = list[0]


        

        var  dt = document.getElementById('date').value;
        var apdata = {
            'Token':token,
            'Patient_Disease':$scope.des,
            'Appointment_date':dt,
            'Specialization':$scope.Speciality,
            'Appointment_time':$scope.time,
            'id':$scope.lidoctor
        }
        



        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Patient/Appointment',
            data:apdata
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    text: 'Go to your appointment section and make Payment',
                })
                .then(function() {
                    window.location.reload();
                });
                // apfom.reset();
                // window.location.reload();
            }
            
        })
    }
    
});


app.controller('p-appointment',function($rootScope,$http,$scope){
    let list = JSON.parse( localStorage.getItem('TOKEN'));
    var token = list[0]
    var pdata = {
        'Token': token 
    } 

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Appointment/History',
        data:pdata
    })
    .then(function (response){
        if (response.status == 200){
            console.log(response)
            if (response.data.Appointment_Hist.length == 0){
                document.getElementById('prepre').style.display = 'none';
                document.getElementById('noprev').style.display = 'block'
                document.getElementById('noprev').innerHTML = response.data.message
            }
            else{
                document.getElementById('prepre').style.display = 'block';
                $scope.aphistory = response;
                $scope.Appointed_Doctor = response.data.Appointment_Hist.Appointed_Doctor;
                $scope.Appointment_Status = response.data.Appointment_Hist.Appointment_Status;
                $scope.Appointment_time = response.data.Appointment_Hist.Appointment_time
                $scope.Appointment_date = response.data.Appointment_Hist.Appointment_date;
                $scope.Patient_Age = response.data.Appointment_Hist.Patient_Age;
                $scope.Patient_Disease = response.data.Appointment_Hist.Patient_Disease;
            }
        }
    })
    

    var configdate = function(){
        var today = new Date().toISOString().slice(0,10);
        document.getElementById("date").setAttribute('min', today);
    }
    configdate();

    var upid = 0;

    $scope.openmod = function(id){
        upid = id
    }

    $scope.update = function(){

        
            var upadteid = {
                'id':upid,
                'Appoint_date':document.getElementById('date').value,
                'Appoint_time':document.getElementById('time').value
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/App/Update',
                data:upadteid
            })
            .then(function (response){
                if (response.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1000
                    })
                    const myTimeout = setTimeout(time, 1100);
                    function time(){
                        window.location.reload();
                    }
                }
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
    }

        



    $scope.makepay = function(id){

        var iiddd = {
            'id':id
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Patient/Appointment/Payment',
            data:iiddd
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }   
            const myTimeout = setTimeout(time, 1600);
            function time(){
                window.location.reload();
            }
            
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }

})


app.controller('p-history',function($http,$scope){

    let list = JSON.parse(localStorage.getItem("TOKEN"));
    pay = {
        'Token':list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Payment/History',
        data:pay
    })
    .then(function (response){
        if (response.status == 200){
            if (response.data.Patient_detail.length == 0){
                document.getElementById('nopay').style.display = 'block';
                document.getElementById('nopay').innerHTML = response.data.message;
            }
            else{
                $scope.paytm = response.data.Patient_detail
            }
            
        }
        
                
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })

    var iad = 0

    $scope.payre = function(id){
        iad = id
        var p = {
            'id':iad
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Patient/Payment/Receipt',
            data:p
        })
        .then(function (response){
            if (response.status == 200){
                $scope.payre = response.data.Patient_detail[0];
                
            }
                    
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })

    }


    $scope.close = function(){
        window.location.reload();
    }


    $scope.pri = function(){
        var printContents = document.getElementById(iad).innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;


        window.location.reload();
    }


})


app.controller('p-profile',function($scope,$http){
    let list = JSON.parse(localStorage.getItem("TOKEN"));

    var token = {
        'Token': list[0]
    }

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/home',
        data:token
    })
    .then(function (response){
        if (response.status == 200){
            // console.log(response)
            $scope.name = response.data.User_detail.First_Name + " " + response.data.User_detail.Last_Name;
            $scope.username = response.data.User_detail.Username;
            $scope.Gender = response.data.User_detail.Gender;
            $scope.email = response.data.User_detail.Email;
            $scope.phone = response.data.User_detail.Mobile_Number;
            $scope.agee = response.data.User_detail.Patient_Age
            $scope.gen = response.data.User_detail.Gender;
            $scope.address = response.data.User_detail.Address;
            $scope.blood = response.data.User_detail.Blood_Group;
            $scope.country = response.data.User_detail.Country;
            $scope.state = response.data.User_detail.State;
            $scope.city = response.data.User_detail.City;
            $scope.pin = response.data.User_detail.Pincode;
            $scope.govid = response.data.User_detail.Government_ID;
            $scope.govnum = response.data.User_detail.Gov_ID_Number;
            $scope.height = response.data.User_detail.Height;
            $scope.weight = response.data.User_detail.Weight;
            $scope.dob = response.data.User_detail.DOB;
            $scope.medi = response.data.User_detail.Medical_History;

        }         
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })


    $scope.changepassword = function(){
        if(
            $scope.currpass == undefined ||
            $scope.newpass == undefined ||
            $scope.confpass == undefined
        ){
            Swal.fire({
                icon: 'warning',
                title: 'EMPTY FIELD !!!!'
            })
        }
        else{
            if($scope.newpass != $scope.confpass){
                Swal.fire({
                    icon: 'error',
                    title: 'PASSWORD MISMATCH !!!!'
                })
            }
            else{
                var passchan = {
                    'Token':list[0],
                    'Previous_Password':$scope.currpass,
                    'Password':$scope.newpass,
                    'C_Password':$scope.confpass
                }
    
                $http({
                    method:'POST',
                    url:'http://10.21.84.38:8000/Patient/Pass/Change',
                    data:passchan
                })
                .then(function(response){
                    console.log(response)
                    Swal.fire({
                        icon: 'success',
                        title: response.data.message
                    })
                    .then(function(){
                        passchange.reset()
                    })
                })
                .catch(function(error){
                    console.log(error)
                    Swal.fire({
                        icon: 'error',
                        title: error.data.message
                    })
                })
            }
            
        }
    }




})

app.controller('doctor-dashboard',function($scope,$http,$window,$state,$location){

    document.getElementById('head').style.display = 'none';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('foot').style.display = 'none';

    let list = JSON.parse(localStorage.getItem("DO-TOKEN"));
    if (list === null){
        $window.location.href = '#!Doctor-login';
        Swal.fire({
            icon: 'warning',
            title: 'LOGIN FIRST',
        })
          
    }
    else{
        var token = {
            'Token': list[0]
        }

        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Appointment/Notification',
            data:token
        })
        .then(function (response){
            if (response.status == 200){
                $scope.appointment = response;
                $scope.no = response.data.Appointment_detail.length
            }
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })


        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Patients',
            data:token
        })
        .then(function (response){
            if (response.status == 200){
                $scope.allotedlen = response.data.Patient_detail.length;
                $scope.alloted = response.data.Patient_detail;
            }
        })


        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/home',
            data:token
        })
        .then(function (response){
            if (response.status == 200){
                $scope.name = response.data.Doctor_detail.First_Name + " " + response.data.Doctor_detail.Last_Name;
                $scope.username = response.data.Doctor_detail.Username;
                $scope.phone = response.data.Doctor_detail.Mobile_Number;
                $scope.email = response.data.Doctor_detail.Email;
                $scope.fee = response.data.Doctor_detail.Appointment_fees
                


            }
                    
                    
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }
    $scope.dologout = function(){
        let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
        var token = {
            'Token': list[0]
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/logout',
            data:token
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'LOGOUT SUCCESSFULL',
                    showConfirmButton: false,
                    timer: 1000
                })
                localStorage.removeItem('DO-TOKEN');
                $location.path('Doctor-login')
            }
        
                    
                    
        })
        

        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
            
        })
        
    }


});


app.controller('doc-pa-appointment',function($scope,$http){
    let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
    var token = {
        'Token': list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/Appointment/Notification',
        data:token
    })
    .then(function (response){
        if (response.status == 200){
            console.log(response)
            if (response.data.Appointment_detail.length == 0){
                document.getElementById('pendingapp').innerHTML = response.data.message;
            }
            else{
                $scope.appointment = response;
            }
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })

    var ixfd = 0;

    $scope.makeid= function(id){
        ixfd = id;
    }

    $scope.reject = function(id){
        if(document.getElementById('reason').value == null){
            Swal.fire({
                icon: 'error',
                title: 'Please Give Reason',
            })
        }
        else{
            var rej = {
                'id':ixfd,
                'Appointment_St':'Reject',
                'Reason':document.getElementById('reason').value
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Doctor/Appointment/Status',
                data:rej
            })
            .then(function (response){
                if (response.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: response.data.message,
                        showConfirmButton: false,
                        timer: 1300
                    })
                    const myTimeout = setTimeout(time, 1300);
                    function time(){
                        window.location.reload();
                    }  
                    
                }
                            
                            
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
        
    }

    $scope.approve = function(id){
        var appro = {
            'id':id,
            'Appointment_St':'Accept'
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Appointment/Status',
            data:appro
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1300
                })
                const myTimeout = setTimeout(time, 1300);
                function time(){
                    window.location.reload();
                }   
            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message,
            })
        })
    }

})


app.controller('alloted-patient',function($scope,$http){
    let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
    var token = {
        'Token': list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/Patients',
        data:token
    })
    .then(function (response){
        if (response.status == 200){
            if(response.data.Patient_detail.length == 0){
                document.getElementById('allopa').style.display = 'block';
                document.getElementById('allopa').innerHTML = response.data.message;
            }
            else{
                $scope.alloted = response.data.Patient_detail;
            }
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })
})


app.controller('Doctor-profile',function($scope,$http){
    let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
    var token = {
        'Token': list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/home',
        data:token
    })
    .then(function(response){
        if (response.status == 200){
            $scope.name = response.data.Doctor_detail.First_Name + " " + response.data.Doctor_detail.Last_Name;
            $scope.username = response.data.Doctor_detail.Username;
            $scope.Gender = response.data.Doctor_detail.Gender;
            $scope.email = response.data.Doctor_detail.Email;
            $scope.phone = response.data.Doctor_detail.Mobile_Number;
            $scope.gen = response.data.Doctor_detail.Gender;
            $scope.address = response.data.Doctor_detail.Address;
            $scope.blood = response.data.Doctor_detail.Blood_Group;
            $scope.country = response.data.Doctor_detail.Country;
            $scope.state = response.data.Doctor_detail.State;
            $scope.city = response.data.Doctor_detail.City;
            $scope.pin = response.data.Doctor_detail.Pincode;
            $scope.govid = response.data.Doctor_detail.Government_ID;
            $scope.govnum = response.data.Doctor_detail.Gov_ID_Number;
            $scope.height = response.data.Doctor_detail.Height;
            $scope.weight = response.data.Doctor_detail.Weight;
            $scope.dob = response.data.Doctor_detail.DOB;
            $scope.qualification = response.data.Doctor_detail.Qualification;
            $scope.experience = response.data.Doctor_detail.Experience;
            $scope.Speciality = response.data.Doctor_detail.Speciality;

        }   
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })
    
});



app.controller('approved-patient',function($scope,$http){
    let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
    var token = {
        'Token': list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/Appointments',
        data:token
    })
    .then(function (response){
        if (response.status == 200){
            if(response.data.Appointment_detail.length == 0){
                document.getElementById('appppp').style.display = 'block'
                document.getElementById('appppp').innerHTML = response.data.message;
            }
            else{
                $scope.doaps = response.data.Appointment_detail;
                $scope.len = $scope.doaps.length;
            }
            
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })



    


    var iid = 0;

    $scope.getdata = function(id){

        iid = id;
        let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
        
        var to = list[0]
        

        var get = {
            'id':iid,
            'Token':to
        }
        
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Patient/Detail',
            data:get
        })
        .then(function (response){
            if (response.status == 200){
                $scope.fullname = response.data.Patient_detail[0].F_Name + " " + response.data.Patient_detail[0].L_Name
                $scope.gen = response.data.Patient_detail[0].Gen;
                $scope.docname = response.data.Doctor_detail.First_Name + " " + response.data.Doctor_detail.Last_Name;
                $scope.spe = response.data.Doctor_detail.Speciality;
                $scope.qua = response.data.Doctor_detail.Qualification;
                $scope.em = response.data.Doctor_detail.Email;
                $scope.ph = response.data.Doctor_detail.Mobile_Number;
                $scope.us = response.data.Patient_detail[0].Usern
                $scope.age = response.data.Patient_detail[0].Pat_Age
                $scope.da = response.data.Patient_detail[0].App_date
                if (response.data.Patient_detail[0].Gen == "MALE"){
                    $scope.sal = "Mr."
                }
                else{
                    $scope.sal = "Miss."
                }
            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })




        


    }


    $scope.generate = function(){

        var isd = iid;
        
        
        var dig = document.getElementById('digo').value;
        var presscri = document.getElementById('press').value;

        var generate = {
            'id':isd,
            'diagnosis':dig,
            'prescription':presscri
        }

        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Patient/Prescription',
            data:generate
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
                
                const myTimeout = setTimeout(time, 1300);
                function time(){
                    window.location.reload();
                } 
            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })


        
        
        
    }

})


app.controller('doc-book-app',function($scope,$http){


    var configdate = function(){
        var tf = new Date();
        var today = new Date().toISOString().slice(0,10);
        console.log(today)
        var newDate = new Date(tf.setMonth(tf.getMonth()+2)).toISOString().slice(0,10);
        console.log(newDate)
        document.getElementById("date").setAttribute('min', today);
        document.getElementById("date").setAttribute('max', newDate);
    }
    configdate();


    let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
    var to = list[0]
    var docapbo = {
        'Token':to
    }

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/Appointment/patient',
        data:docapbo
    })
    .then(function (response){
        if (response.status == 200){
            $scope.re = response
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })




    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Disease',
    })
    .then(function (response){
        if (response.status == 200){
            $scope.dis = response.data.Des
        }
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })




    var idd = 0
    $scope.ge = function(){
        var forgen = {
            'id':$scope.pa
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Appointment/patient/gender',
            data:forgen
        })
        .then(function (response){
            if (response.status == 200){
                $scope.gend = response.data.Patient_gender.Gender;
                idd = response.data.Patient_gender.id
                $scope.agee = response.data.Patient_gender.Patient_Age;

            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }

    $scope.docappointment = function(){
        var dat = document.getElementById('date').value;
        var docapp = {
            'Patient_Age':$scope.age,
            'Patient_Disease':$scope.des,
            'Appointed_Doctor':document.getElementById('docnam').value,
            'Appointment_date':dat,
            'Appointment_time':$scope.time,
            'id':idd
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Book/Appointment',
            data:docapp
        })
        .then(function (response){
            if (response.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1000
                })
                doapfom.reset()
            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })

    }
});


app.controller('p-prescription',function($scope,$http){
    let list = JSON.parse( localStorage.getItem('TOKEN'));
    var tok = list[0]
    var padata = {
        'Token': tok 
    } 

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Prescription/det',
        data:padata
    })
    .then(function (response){

        if (response.status == 200){
            if (response.data.Patient_detail.length == 0){
                document.getElementById('nopres').style.display = 'block';
                document.getElementById('nopres').innerHTML = response.data.message;
            }
            else{
                $scope.pre = response.data.Patient_detail;
            }
            
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'warning',
            title: error.data.message
        })
    })
    var iiiddd = 0;

    $scope.showpres = function(id){
        iiiddd = id;
        var shpres = {
            'id':iiiddd
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Patient/Prescription',
            data:shpres
        })
        .then(function (response){
            if (response.status == 200){
                $scope.fullname = response.data.Patient_detail[0].F_Name + " " + response.data.Patient_detail[0].L_Name

                $scope.gen = response.data.Patient_detail[0].Gen;
                $scope.docname = response.data.Patient_detail[0].App_Doc;
                $scope.spe = response.data.Patient_detail[0].Doc_Spec;
                $scope.qua = response.data.Patient_detail[0].Doc_Quali;
                $scope.em = response.data.Patient_detail[0].Doc_Email;
                $scope.ph = response.data.Patient_detail[0].Doc_Mobile;
                $scope.us = response.data.Patient_detail[0].User;
                $scope.age = response.data.Patient_detail[0].Pat_Age;
                $scope.da = response.data.Patient_detail[0].App_date;
                $scope.dig = response.data.Patient_detail[0].Diag;
                $scope.press = response.data.Patient_detail[0].Pres;

            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'warning',
                title: error.data.message
            })
        })
    }


    $scope.print = function(){
        var printContents = document.getElementById(iiiddd).innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;


        window.location.reload();
    }
    
})


app.controller('visited-pa',function($scope,$http){

    
    let list = JSON.parse( localStorage.getItem('DO-TOKEN'));
    var token = {
        'Token': list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Doctor/Previous/Appointment',
        data:token
    })
    .then(function (response){
        if (response.status == 200){
            if(response.data.Appointment_detail.length == 0){
                document.getElementById('visipa').style.display = 'block';
                document.getElementById('visipa').innerHTML = response.data.message;
            }
            else{
                $scope.doap = response.data.Appointment_detail;
                $scope.len = $scope.doap.length;
            }
            
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'warning',
            title: error.data.message
        })
    })


    var iiiddd = 0;
    $scope.showpres = function(id){
        iiiddd = id;
        var shpres = {
            'id':iiiddd
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Doctor/Previous/Patient/Prescription',
            data:shpres
        })
        .then(function (response){
            if (response.status == 200){
                $scope.fullname = response.data.Patient_detail[0].F_Name + " " + response.data.Patient_detail[0].L_Name

                $scope.gen = response.data.Patient_detail[0].Gen;
                $scope.docname = response.data.Patient_detail[0].App_Doc;
                $scope.spe = response.data.Patient_detail[0].Doc_Spec;
                $scope.qua = response.data.Patient_detail[0].Doc_Quali;
                $scope.em = response.data.Patient_detail[0].Doc_Email;
                $scope.ph = response.data.Patient_detail[0].Doc_Mobile;
                $scope.us = response.data.Patient_detail[0].User;
                $scope.age = response.data.Patient_detail[0].Pat_Age;
                $scope.da = response.data.Patient_detail[0].App_date;
                $scope.dig = response.data.Patient_detail[0].Diag;
                $scope.press = response.data.Patient_detail[0].Pres;

            }
                        
                        
        })
        .catch(function(error){
            Swal.fire({
                icon: 'warning',
                title: error.data.message
            })
        })
    }

    $scope.print = function(){
        var printContents = document.getElementById(iiiddd).innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;


        window.location.reload();
    }


})


app.controller('Receptionist-dashboard',function($scope,$http,$state){
    document.getElementById('head').style.display = 'none';
    document.getElementById('nav').style.display = 'none';
    document.getElementById('foot').style.display = 'none';

    
    
    var list = JSON.parse(localStorage.getItem('re-token'));
    var reda = {
        'Token':list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/home',
        data:reda
    })
    .then(function(response){
        $scope.redata = response.data.Receptionist_detail;
        $scope.fullname = response.data.Receptionist_detail.First_Name + " " + response.data.Receptionist_detail.Last_Name
    })
    .catch(function(error){
        Swal.fire({
            icon: 'warning',
            title: error.data.message
        })
    })

    
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Doctor/View',
        data:reda
    })
    .then(function(response){
        $scope.d = response.data.Doctor_detail;
        $scope.docount = response.data.Doctor_detail.length;
    })
    .catch(function(error){
        Swal.fire({
            icon: 'warning',
            title: error.data.message
        })
    })

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Patient/View',
        data:reda
    })
    .then(function(response){
        $scope.patientsss = response.data.Patient_detail
        $scope.palen = response.data.Patient_detail.length;
    })
    .catch(function(error){
        Swal.fire({
            icon: 'warning',
            title: error.data.message
        })
    })

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Notification',
        data:reda
    })
    .then(function(response){

        if (response.data.Appointment_detail.length == 0){
            $scope.noti = 0;

        }
        else{
            $scope.noti = response.data.Appointment_detail.length
        }
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })

    $scope.relogout = function(){
        localStorage.removeItem('re-token');
        Swal.fire({
            icon: 'success',
            title: 'LOGOUT SUCCESSFULL !!!!',
            showConfirmButton: false,
            timer: 1000
        })
        $state.go('3');
    }
})



app.controller('re-ap-book',function($scope,$http){


    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Disease',
    })
    .then(function (response){
        if (response.status == 200){
            $scope.dis = response.data.Des
        }
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })




    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Doctor/Speciality'
    })
    .then(function(response){
        $scope.spee = response.data.Spe
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })




    var configdate = function(){
        var tf = new Date();
        var today = new Date().toISOString().slice(0,10);
        var newDate = new Date(tf.setMonth(tf.getMonth()+2)).toISOString().slice(0,10);
        document.getElementById("date").setAttribute('min', today);
        document.getElementById("date").setAttribute('max', newDate);
    }
    configdate();


    $scope.doc = function(){
        if($scope.Speciality != undefined){
            var spe = {
                'Specialization':$scope.Speciality
            }
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/Appointment/Doctors',
                data:spe
            })
            .then(function (response){
                if (response.status == 200){
                    if(response.data.Doctor_detail.length == 0){
                        $scope.dependoc = response.data.Doctor_detail
                        document.getElementById('nodoc').style.display = 'block'
                        document.getElementById('nodoc').innerHTML = response.data.message
                    }
                    else{
                        document.getElementById('nodoc').style.display = 'none'
                        $scope.dependoc = response.data.Doctor_detail
                    }
                }
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
    }


    var idd = 0

    $scope.feees = function(){
        if($scope.lidoctor != undefined){
            var docid = {
                'id':$scope.lidoctor
            }
            idd = docid.id;
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Patient/Appointment/Doctor/Fees',
                data:docid
            })
            .then(function (response){
                if (response.status == 200){
                    $scope.fees = response.data.Doctor_fees;
                }
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
        
    }


    list = JSON.parse(localStorage.getItem('re-token'))
    var rede = {
        'Token':list[0]
    }

    



    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/App/Patient',
        data:rede
    })
    .then(function (response){
        if (response.status == 200){
            $scope.pare = response.data.Patient_detail
            $scope.idp = response.data.Patient_detail.id
        }
                    
                    
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })
    var idp = 0
    

    $scope.geen = function(){
        var fgen = {
            'id': $scope.pa
        }
        idp = $scope.pa;
        $http({
            method:'POST',
            url: 'http://10.21.84.38:8000/Receptionist/Patient/Gender',
            data:fgen
        })
        .then(function(response){
            $scope.gend = response.data.Patient_gender[0].Gender
            $scope.aag = response.data.Patient_gender[0].Patient_Age

        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }

    $scope.reappointment = function(){

        var datee = document.getElementById('date').value
        var reapdata = {
            'Patient_Disease':$scope.des,
            'Appointment_date':datee,
            'Appointment_time':$scope.time,
            'Specialization':$scope.Speciality,
            'Id_p':idp,
            'Id_d':idd,
            'Token':list[0]
        }

        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Add/Appointment',
            data:reapdata
        })
        .then(function(response){
            Swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1000
            })
            .then(function(){
                window.location.reload()
            })
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message,
            })
        })
    }


})


app.controller('re-profile',function($scope,$http){
    var list = JSON.parse(localStorage.getItem('re-token'));
    var prod = {
        'Token':list[0]
    }

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/home',
        data:prod
    })
    .then(function (response){
        if (response.status == 200){
            $scope.name = response.data.Receptionist_detail.First_Name + " " + response.data.Receptionist_detail.Last_Name;
            $scope.username = response.data.Receptionist_detail.Username;
            $scope.Gender = response.data.Receptionist_detail.Gender;
            $scope.email = response.data.Receptionist_detail.Email;
            $scope.phone = response.data.Receptionist_detail.Mobile_Number;
            $scope.gen = response.data.Receptionist_detail.Gender;
            $scope.address = response.data.Receptionist_detail.Address;
            $scope.blood = response.data.Receptionist_detail.Blood_Group;
            $scope.country = response.data.Receptionist_detail.Country;
            $scope.state = response.data.Receptionist_detail.State;
            $scope.city = response.data.Receptionist_detail.City;
            $scope.pin = response.data.Receptionist_detail.Pincode;
            $scope.govid = response.data.Receptionist_detail.Government_ID;
            $scope.govnum = response.data.Receptionist_detail.Gov_ID_Number;
            $scope.height = response.data.Receptionist_detail.Height;
            $scope.weight = response.data.Receptionist_detail.Weight;
            $scope.dob = response.data.Receptionist_detail.DOB;


        }         
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })
})


app.controller('re-pending-ap',function($scope,$http){

    var list = JSON.parse(localStorage.getItem('re-token'));
    var repen = {
        'Token':list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Notification',
        data:repen
    })
    .then(function(response){
        if(response.data.Appointment_detail.length == 0){
            document.getElementById('re-pend').style.display = 'block'
            document.getElementById('re-pend').innerHTML = response.data.message;
        }
        else{
            $scope.repend = response.data.Appointment_detail
        }
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })


    reid = 0

    $scope.rej = function(id){
        reid = id;
    }

    $scope.reject = function(){
        var fgdat = {
            'id':reid,
            'Appointment_St':'Reject',
            'Reason':document.getElementById('rereason').value
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Appointment',
            data:fgdat
        })
        .then(function(response){
            Swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1000
            })
            window.location.reload()
        })
        .catch(function(error){
            Swal.fire({
                icon: 'warning',
                title: error.data.message,
            })
        })


    }

    $scope.appro = function(id){
        var fgdat = {
            'id':id,
            'Appointment_St':'Accept'
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Appointment',
            data:fgdat
        })
        .then(function(response){
            Swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1000
            })
            window.location.reload()
        })
        .catch(function(error){
            Swal.fire({
                icon: 'warning',
                title: error.data.message,
            })
        })
    }

})

app.controller('doctor-database',function($scope,$http){
    var list = JSON.parse(localStorage.getItem('re-token'));
    var redocdata = {
        'Token':list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Doctor/View',
        data:redocdata
    })
    .then(function(response){
        $scope.docsearch = response.data.Doctor_detail;
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })

    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Doctor/Speciality'
    })
    .then(function(response){
        $scope.seasp = response.data.Spe
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })


    $scope.viewde = function(id){
        var vido = {
            'id':id
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Doctor/Detail',
            data:vido
        })
        .then(function(response){
            $scope.docd = response.data.Doctor_detail
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })

    }

    $scope.viewpat = function(id){
        var vipa = {
            'id':id
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Patient/Doc/Detail',
            data:vipa
        })
        .then(function(response){
            $scope.dopat = response.data.Patient_detail
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }
})

app.controller('Patient-database',function($scope,$http){
    var list = JSON.parse(localStorage.getItem('re-token'));
    var repadata = {
        'Token':list[0]
    }
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Receptionist/Patient/View',
        data:repadata
    })
    .then(function(response){
        $scope.pasearch = response.data.Patient_detail;
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message
        })
    })

    $scope.paview = function(id){
        var paid = {
            'id':id
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Patient/Detail',
            data:paid
        })
        .then(function(response){
            $scope.pdat = response.data.Patient_detail;
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }

    $scope.apshow = function(id){
        var apd = {
            'id':id
        }
        console.log(apd)
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Patient/Pre/Appointment',
            data:apd
        })
        .then(function(response){
            console.log(response)
            if(response.data.Patient_Appointment.length == 0){
                document.getElementById('nopreapp').style.display = 'block'
                document.getElementById('preappoi').style.display = 'none'
                document.getElementById('preh5').style.display = 'none'
                document.getElementById('preta').style.display = 'none'
            }
            else{
                $scope.aps = response.data.Patient_Appointment;
                document.getElementById('nopreapp').style.display = 'none'
                document.getElementById('preappoi').style.display = 'block'
                document.getElementById('preh5').style.display = 'block'
                document.getElementById('preta').style.display = 'block'
            }
        })
        .catch(function(error){
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })

    }

    $scope.dele = function(id){
        var del = {
            'id':id
        }
        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Patient/Delete',
            data:del
        })
        .then(function(response){
            Swal.fire({
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 1200
            })
            const myTimeout = setTimeout(time,1200);
            function time(){
                window.location.reload();
            }
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message
            })
        })
    }
})


app.controller('report',function($scope,$http){


    var configdate = function(){
        var today = new Date().toISOString().slice(0,10);
        document.getElementById("da").setAttribute('max', today);
    }
    configdate();
    $http({
        method:'POST',
        url:'http://10.21.84.38:8000/Patient/Disease',
    })
    .then(function (response){
        if (response.status == 200){
            $scope.disease = response.data.Des
        }
    })
    .catch(function(error){
        Swal.fire({
            icon: 'error',
            title: error.data.message,
        })
    })

    list = JSON.parse(localStorage.getItem('re-token'))
    var dt = list[0]

    $scope.bydate = function(){
        var dte = document.getElementById('da').value;

        var datee = {
            'Appointment_d':dte,
            'Token':dt
        }

        $http({
            method:'POST',
            url:'http://10.21.84.38:8000/Receptionist/Patient/App/Date',
            data:datee
        })
        .then(function (response){
            if (response.status == 200){
                if(response.data.Patient_detail.length == 0){
                    $scope.disdate = response.data.Patient_detail
                    document.getElementById('nodate').style.display = 'block';
                    document.getElementById('nodate').innerHTML = response.data.message;
                }
                else{
                    document.getElementById('nodate').style.display = 'none';
                    $scope.disdate = response.data.Patient_detail
                }
            }
        })
        .catch(function(error){
            Swal.fire({
                icon: 'error',
                title: error.data.message,
            })
        })

    }


    $scope.bydisease = function(){

        if($scope.dis == undefined){
            Swal.fire({
                icon: 'error',
                title: 'Disease Required !!',
            })
        }
        else{
            var disea = {
                'Disease':$scope.dis,
                'Token':dt
            }
    
    
            $http({
                method:'POST',
                url:'http://10.21.84.38:8000/Receptionist/Disease/Patient',
                data:disea
            })
            .then(function (response){
                if (response.status == 200){
                    if(response.data.Patient_detail.length == 0){
                        $scope.disreport = response.data.Patient_detail
                        document.getElementById('nodis').style.display = 'block';
                        document.getElementById('nodis').innerHTML = response.data.message;
                    }
                    else{
                        document.getElementById('nodis').style.display = 'none ';
                        $scope.disreport = response.data.Patient_detail
                    }
                }
            })
            .catch(function(error){
                Swal.fire({
                    icon: 'error',
                    title: error.data.message,
                })
            })
        }
        
    }


    $scope.prid = function(){
        var printContents = document.getElementById('pridisease').innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;


        window.location.reload();
    }

    $scope.pridate = function(){
        var printContents = document.getElementById('pridisease').innerHTML;
		var originalContents = document.body.innerHTML;

		document.body.innerHTML = printContents;

		window.print();

		document.body.innerHTML = originalContents;


        window.location.reload();
    }

})

app.controller('home',function($scope){
    document.getElementById('head').style.display = 'block';
    document.getElementById('nav').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
})