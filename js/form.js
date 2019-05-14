$(function()
{
    function after_form_submitted(data) {
        if(data.result == 'success') {
            //$('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
            setTimeout(function() {
                $('#success_message').hide();
            }, 5000);

            document.getElementById('contactForm').reset();
        }
        else {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val){
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function() {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label) {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
        
        }//else
    }

	$('#contactForm').submit(function(e){
        e.preventDefault();
        $form = $(this);
        $.ajax({
            type: "POST",
            url: '../handler.php',
            data: $form.serialize(),
            success: after_form_submitted,
            dataType: 'json' 
         });        
    });	
});
