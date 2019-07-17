var firebaseConfig = {
    apiKey: "AIzaSyClZ7u8lYJR2bXYQnqm8UkK-eiSouCUE_8",
    authDomain: "train-scheduler-cd50a.firebaseapp.com",
    databaseURL: "https://train-scheduler-cd50a.firebaseio.com",
    projectId: "train-scheduler-cd50a",
    storageBucket: "train-scheduler-cd50a.appspot.com",
    messagingSenderId: "649898839355",
    appId: "1:649898839355:web:a77d42e6a463eb98"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // var traindata is going to serve as a reference to firebase//
  var trainData = firebase.database();

  //use jquery to send data to firebase//
  //once we click on addTrainbtn it will collect and store the data to the form //
  //using momentjs add time variable to firstTrain variable//
  $("#addTrainbtn").on("click",function(){
      var trainName = $("#trainNameInput").val().trim();
      var destination = $("#destinationInput").val().trim();
      var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
      var frequency= $("#frequencyInput").val().trim();
  // create variable to add new train data into form//    
      var newTrain = {
          name: trainName,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency
      }
    
//push the newTrain data to the trainData//
    trainData.ref().push(newTrain);
//add alert when train added//
    alert("Train Added!")

//Reference the inputs to trainData using Jquery//
$("#trainNameInput").val("");
$("#destinationInput").val("");
$("#firstTrainInput").val("");
$("#frequencyInput").val("");    

return false;

})