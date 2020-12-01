   <script>
              new WOW().init();
              </script>
			  
			  <script>
			$(".cross").click(function(){
				$(".form-background").hide();
			});
		</script>
		<script>
			$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    });
	$('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
		</script>
		<script>
		$(window).on('load', function() {
		// preloader
		$('#preloader').fadeOut('slow', function() {
			$(this).remove();
		});
		
		//slides preload
		$(".slides__preload_wrapper").fadeOut(1500);
		
	});
		</script>