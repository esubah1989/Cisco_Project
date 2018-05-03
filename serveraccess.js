$(window).on('load', function(){
  $.ajax({
    type:'GET',
    url:'http://localhost/Cisco_Project/Test_Case_Retrieval.py',
    contentType:'application/json; charset=utf-8',
    dataType:'json',
    success: function(data){
      var caseNames = "";
      for(var tests in data){
        caseNames += data['Name'] + '\n';
      }

      window.alert(caseNames);
    },
    error: function(request, status, error){
      window.alert(error);
    }
  })
});
