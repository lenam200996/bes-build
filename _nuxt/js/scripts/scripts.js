/**
 * js all site
 */
 'use strict';

 jQuery(document).ready(function($){
     // js AOS:
    AOS.init({
        duration: 1000,
        easing: "linear",
        disable: "mobile",
        // once: true,
    });
    var screen_width = $(window).width();
    $('#h_section7 .wrap .inner-wrap').click(function(){
        $(this).html('<iframe src="360/" title="Virtual Tour"></iframe>');
        $('#h_section7 ._close').css('display','flex');
    });
    $('#h_section7 ._close').click(function(){
        $('#h_section7 .wrap .inner-wrap').html('');
        $(this).css('display','none');
    });
    // Handle show/hide menu mobile
    $('#show-menu').on('click', function(e){
        $('.header-main, .coating_header').addClass('is_active');
        $('body').css('overflow', 'hidden');
    });

    $('.hide-menu').on('click', function(e){
        $('.header-main, .coating_header').removeClass('is_active');
        $('body').css('overflow', 'auto');
        $('.menu-main .menu .sub-menu').removeClass('is-show');
        $('.back1,.back2').css('display','none');
    });
    $("<div></div>").appendTo(".header-main .menu-main .menu .menu-item-has-children");
    if (screen_width <= 1024){
        $('.menu-main .menu .has-sub div').click(function(event){
           $(this).parent(".has-sub").children(".sub-menu").addClass('is-show');
            $('.back1').css('display','block');       
        });
        $('.menu-main .menu .sub_menu_child div').click(function(event){
           $(this).parent(".sub_menu_child").children(".sub-menu").addClass('is-show');
            $('.back2').css('display','block');       
            $('.back1').css('display','none');       
        });
        $('.back2').click(function(event){
            $('.menu-main .menu .sub_menu_child .sub-menu').removeClass('is-show');
            $('.back2').css('display','none');  
            $('.back1').css('display','block');         
        });
        $('.back1').click(function(event){
            $('.menu-main .menu .has-sub .sub-menu').removeClass('is-show');
            $('.back1').css('display','none');       
        });
       
    }
    var height_banner = 600;
    $(window).scroll(function () {
        var y = $(window).scrollTop();
        if (y > height_banner) {
            $(".social-fix").addClass('show');
        } else {
            $(".social-fix").removeClass('show');
        }
        if(y > 0){
            $(".header-main").addClass('_scroll');
        } else {
            $(".header-main").removeClass('_scroll');
        }
    });
   
});

(function ($) {
    $.fn.tabs_new = function () {
        var wrap = $(this);
        var head = wrap.find('[data-head]');
        var content = wrap.find('[data-content]');
        this.reset = (function () {
            head.not(head.first()).removeClass('is-active');
            content.not(content.first()).hide();
        }).call(this);

        this.headClick = head.click(function (event) {
            event.preventDefault();

            if ($(this).hasClass('is-active')) {
                return false;
            }

            var content_target = $(this).attr('href');

            head.removeClass('is-active');
            content.hide();

            $(this).addClass('is-active');
            $(content_target).fadeIn();
        });

        return this;
    };
})(jQuery);



// function phan trang new all
function operatePagination_templateNew(El, postType = 'post', catSlug = null, tag = null, taxonomy_slug ,termSlug = null, postsPerPage = -1, postNotIN=null, ElPaginationCommon){
    var hrefThis = El.attr('href');
    var page = hrefThis.match(/\/\d+\//)[0];
    const pagination_news_nonce = document.getElementById('pagination_news_nonce').value;
    page = page.match(/\d+/)[0];
    ElPaginationCommon = ElPaginationCommon ? ElPaginationCommon : El.parent().parent().parent('.type_taball');
    if(!page) page = 1;
    jQuery.ajax({
        type: "POST",
        dataType: "JSON",
        url: obj.AJAX_URL,
        data: {
            action: "pagination_item_template_news",
            post_type: postType,
            paged: page,
            post__not_in: postNotIN,
            posts_per_page: postsPerPage,
            nonce: pagination_news_nonce,
        },
        context: this,
        beforeSend: () => {

        },
        complete: () => {

        },
        success: function(response) {
            if(response.success) {
                ElPaginationCommon.empty();
                ElPaginationCommon.append(jQuery(response.data));
            }else{

            }
        },
        error: function( jqXHR, textStatus, errorThrown ){
            console.log( 'The following error occured: ' + jqXHR, textStatus, errorThrown );
        }
    });
}

// function phan trang new cat
function operatePagination_templateNewcat(El, postType = 'post', catSlug = null, tag = null, taxonomy_slug ,termSlug = null, postsPerPage = -1, postNotIN=null, ElPaginationCommon){
    var hrefThis = El.attr('href');
    var page = hrefThis.match(/\/\d+\//)[0];
    const pagination_news_cat_nonce = document.getElementById('pagination_news_cat_nonce').value;
    page = page.match(/\d+/)[0];
    ElPaginationCommon = ElPaginationCommon ? ElPaginationCommon : El.parent().parent().parent('.tab_new_cat');
    if(!page) page = 1;
    jQuery.ajax({
        type: "POST",
        dataType: "JSON",
        url: obj.AJAX_URL,
        data: {
            action: "pagination_item_template_news_cat",
            post_type: postType,
            paged: page,
            category_slug: catSlug,
            taxonomy_slug: taxonomy_slug,
            term_slug: termSlug,
            tag: tag,
            post__not_in: postNotIN,
            posts_per_page: postsPerPage,
            nonce: pagination_news_cat_nonce,
        },
        context: this,
        beforeSend: () => {

        },
        complete: () => {

        },
        success: function(response) {
            if(response.success) {
                ElPaginationCommon.empty();
                ElPaginationCommon.append(jQuery(response.data));
            }else{

            }
        },
        error: function( jqXHR, textStatus, errorThrown ){
            console.log( 'The following error occured: ' + jqXHR, textStatus, errorThrown );
        }
    });
}

// function phan trang event all
function operatePagination_templateEvent(El, postType = 'events', catSlug = null, tag = null, taxonomy_slug ,termSlug = null, postsPerPage = -1, postNotIN=null, ElPaginationCommon){
    var hrefThis = El.attr('href');
    var page = hrefThis.match(/\/\d+\//)[0];
    const pagination_events_nonce = document.getElementById('pagination_events_nonce').value;
    page = page.match(/\d+/)[0];
    ElPaginationCommon = ElPaginationCommon ? ElPaginationCommon : El.parent().parent().parent('.type_taball');
    if(!page) page = 1;
    jQuery.ajax({
        type: "POST",
        dataType: "JSON",
        url: obj.AJAX_URL,
        data: {
            action: "pagination_item_template_events",
            post_type: postType,
            paged: page,
            post__not_in: postNotIN,
            posts_per_page: postsPerPage,
            nonce: pagination_events_nonce,
        },
        context: this,
        beforeSend: () => {

        },
        complete: () => {

        },
        success: function(response) {
            if(response.success) {
                ElPaginationCommon.empty();
                ElPaginationCommon.append(jQuery(response.data));
            }else{

            }
        },
        error: function( jqXHR, textStatus, errorThrown ){
            console.log( 'The following error occured: ' + jqXHR, textStatus, errorThrown );
        }
    });
}

// function phan trang new cat
function operatePagination_templateEventcat(El, postType = 'events', catSlug = null, tag = null, taxonomy_slug ,termSlug = null, postsPerPage = -1, postNotIN=null, ElPaginationCommon){
    var hrefThis = El.attr('href');
    var page = hrefThis.match(/\/\d+\//)[0];
    const pagination_events_cat_nonce = document.getElementById('pagination_events_cat_nonce').value;
    page = page.match(/\d+/)[0];
    ElPaginationCommon = ElPaginationCommon ? ElPaginationCommon : El.parent().parent().parent('.tab_event_cat');
    if(!page) page = 1;
    jQuery.ajax({
        type: "POST",
        dataType: "JSON",
        url: obj.AJAX_URL,
        data: {
            action: "pagination_item_template_events_cat",
            post_type: postType,
            paged: page,
            category_slug: catSlug,
            taxonomy_slug: taxonomy_slug,
            term_slug: termSlug,
            tag: tag,
            post__not_in: postNotIN,
            posts_per_page: postsPerPage,
            nonce: pagination_events_cat_nonce,
        },
        context: this,
        beforeSend: () => {

        },
        complete: () => {

        },
        success: function(response) {
            if(response.success) {
                ElPaginationCommon.empty();
                ElPaginationCommon.append(jQuery(response.data));
            }else{

            }
        },
        error: function( jqXHR, textStatus, errorThrown ){
            console.log( 'The following error occured: ' + jqXHR, textStatus, errorThrown );
        }
    });
}

jQuery(document).ready(function($) {
    $('#apply_find_about').on('change', function() {
        var $val_apply_find = $(this).val();
        if($val_apply_find == 'Others'){
            $('#apply_find_about_other').addClass('show');
            $('#apply_find_about_other').on('change', function(){
                var $val_apply_find_other = $(this).val();
                $('#apply_find_about option[value=' + $val_apply_find +']').attr('selected','selected');
                $('#apply_find_about option[value=' + $val_apply_find +']').val($val_apply_find_other);
            });
        }
    });
   
    $('.x_close').click('on', function(event) {
        $('.box__online__application__form.active').removeClass('active');
        $(".form-group").find('input').val('');
        $('.js_upload_name').text("No file chosen");
        $('.js_upload_name_letter').text("No file chosen");
    });
    var regex_name_input = /^[a-zA-Z_àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵÀÁẢÃẠÂẦẤẨẪẬĂẰẮẲẴẶÈÉẺẼẸÊỀẾỂỄỆĐÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴÂĂĐÔƠƯ\s-']+$/;
    var regex_phone_input = /^08([0-9]{8})|09([0-9]{8})|01([0-9]{9})|03([0-9]{8})$/;
    var regex_email_input = /^([a-z0-9_\.\-\']+\@[\da-z\.-]+\.[a-z\.]{2,3})$/;
    var name_error = $('body').find('.name_error');
    var phone_error = $('body').find('.phone_error');
    var email_phone = $('body').find('.email_phone');
    // $('#apply_form button').prop('disabled', true).css("cursor", "not-allowed");
    $('#apply_name').keyup(function (event) {
        var name = $(this).val();
        if( !regex_name_input.test(name) ) {
            name_error.text('This field can only be entered text.');
        }else{
            name_error.text('');
        }
    });
    //check phone
    $('#apply_phone').keyup(function(event){
        var phone = $(this).val();
        if( !regex_phone_input.test(phone) ) {
            phone_error.text('Invalid phone number.');
        }else{
            phone_error.text('');
        }
    });
    // check mail
    $('#apply_email').keyup(function(event){
        var email = $(this).val();
        if( !regex_email_input.test(email) ) {
            email_phone.text('Invalid email.');
        }else{
            email_phone.text('');
        }
    });
    var cv = $('.upload_cv').val();
    function validate_fileupload(fileName){
        var allowed_extensions = new Array('pdf', 'docx', 'xlsx', 'xls', 'doc');
        var file_extension = fileName.split('.').pop().toLowerCase();
        for(var i = 0; i <= allowed_extensions.length; i++)
        {
            if(allowed_extensions[i]==file_extension)
            {
                return $('.cv_error').text('')
            }
        }

        return $('.cv_error').text('File format must be pdf, docx, xlsx, xls please check the format and try again.')
    }
    var letter = $('.upload_letter').val();
    function validate_fileLetter(fileName){
        var allowed_extensions = new Array('pdf', 'docx', 'xlsx', 'xls', 'doc');
        var file_extension = fileName.split('.').pop().toLowerCase();
        for(var i = 0; i <= allowed_extensions.length; i++)
        {
            if(allowed_extensions[i]==file_extension)
            {
                return $('.letter_error').text('')
            }
        }

        return $('.letter_error').text('File format must be pdf, docx, xlsx, xls please check the format and try again.')
    }
    $('.upload_cv').change(function(event) {
        x = event.target.files[0].name;
        $('.js_upload_name').text(x);
        var cv = $('.upload_cv').val();
        if(cv !== ''){
            validate_fileupload(cv);
        }
    });
    $('.upload_letter').change(function(event) {
        x = event.target.files[0].name;
        $('.js_upload_name_letter').text(x);
        var letter = $('.upload_letter').val();
        if(letter !== ''){
            validate_fileLetter(letter);
        }
    });
    $('#apply_form').submit(function(e) {
        e.preventDefault();
        const thisEl = $(this);
        const formThisData = new FormData(document.getElementById('apply_form'));
        const thisSubmitBtn = thisEl.find('.btn_submit');
        const formMsgSuccess = thisEl.find('.frm_msg');
        const formMsgUnsuccessful = thisEl.find('.frm_msg');
        const fieldGroup = thisEl.find('.frm-all')
        $.ajax({
                type: 'post',
                url: obj.AJAX_URL,
                dataType: 'json',
                cache: false,
                processData: false,
                contentType: false,
                async: false,
                data: formThisData,
            })
            .done(function(response) {
                if (response.success) {
                    formMsgSuccess.text(response.msg);
                    $('#apply_name').val('');
                    $('#apply_date').val('');
                    $('#apply_phone').val('');
                    $('#apply_email').val('');
                    $('#apply_address').val('');
                    $('#apply_find_about').val('');
                    $('#apply_question').val('');
                    $('#apply_area').val('');
                    $('#apply_date_available').val('');
                    $('#apply_expected_salary').val('');
                    $('#apply_current_salary').val('');
                    $('.js_upload_name').text("No file chosen");
                    $('.js_upload_name_letter').text("No file chosen");
                    fieldGroup.remove();
                }
                if (response.msg) {
                    formMsgUnsuccessful.text(response.msg);
                }
            })
            .fail(function (jqXHR,textStatus,errorThrown) {
                console.log('ERROR',jqXHR.responseText);
            });

    });
});