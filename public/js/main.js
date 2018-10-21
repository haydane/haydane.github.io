<script>
    $(document).ready(function(){
      $('#heart').click(function(){
        var a = document.getElementById('heart');
        if(a.value == 1){
          a.value = 2
          $('#a').removeClass('far fa-heart');
          $('#a').addClass('fas fa-heart');
        }
        else{
          a.value = 1
          $('#a').removeClass('fas fa-heart');
          $('#a').addClass('far fa-heart');
        }
      })
    });
  </script>