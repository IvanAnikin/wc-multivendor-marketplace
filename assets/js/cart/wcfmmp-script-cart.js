jQuery(document).ready( function($) {
  $( document ).on( 'updated_wc_div', function(){ 
    var custCountry = $('#calc_shipping_country').val();
    data = {
      action: 'wcfmmp-remove-cart-vendor-product',
      custCountry : custCountry,
      wcfm_ajax_nonce         : wcfm_params.wcfm_ajax_nonce
    };
    $.post(woocommerce_params.ajax_url, data, function (resp) {
      //console.log(resp);
      if(resp && resp.success && resp.data.items_removed ) {
        alert('Item(s) "' + resp.data.removed_products + '" were removed from the cart as the vendors donot ship to the location selected.' );
        window.location.href = window.location.href;
      }
    });
  });
  
});

