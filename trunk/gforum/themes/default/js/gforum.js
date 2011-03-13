var gforum = {};

/**
 * Create thread with one (first) message
 * @param {Object} opt object with options. Following parameters:
 *   forum_root {String} - forum context root
 *   forum_key {String} - key of the forum in which thread is created
 *   thread_title {String } - thread title
 *   message_text {String} - text of the first thread message
 *   callback {Function} - (optional) callback function which receives response object
 */
gforum.createThread = function(opt) {
    var postUrl = $('#create_thread_form').attr('action');
    jQuery.ajax({
        type: 'POST',
        url: opt.forum_root + '/api/v1/create_thread',
        data: {
            forum_key:      opt.forum_key,
            thread_title:   opt.thread_title,
            message_text:   opt.message_text
        },
        success: function(data, textStatus, jqXHR) {
            var resp = jQuery.parseJSON(data);
            if (opt.callback) {
                opt.callback.call(null,resp);
            }            
        }
    });    
}

/**
 * Post a message into thread
 * @param {Object} opt object with options. Following parameters:
 *   forum_root {String} - forum context root
 *   forum_key {String} - key of the forum in which thread is created
 *   thread_key {String} - key of the thread in which message is posted
 *   message_text {String} - text of the first thread message
 *   callback {Function} - (optional) callback function which receives response object
 */
gforum.postThreadMessage = function(opt) {
    var postUrl = $('#post_message_form').attr('action');
    jQuery.ajax({
        type: 'POST',
        url: opt.forum_root + '/api/v1/post_message',
        data: {
            forum_key   : opt.forum_key,
            thread_key  : opt.thread_key,
            message_text: opt.message_text
        },
        success: function(data, textStatus, jqXHR) {
            var resp = jQuery.parseJSON(data);
            if (opt.callback) {
                opt.callback.call(null,resp);
            }
        }
    });
}

/**
 * Post a message into thread
 * @param {Object} opt object with options. Following parameters:
 *   forum_root {String} - forum context root
 *   forum_key {String} - key of the forum in which thread is created
 *   thread_key {String} - key of the thread in which message is posted
 *   message_text {String} - text of the first thread message
 *   callback {Function} - (optional) callback function which receives response object
 */
gforum.editProfile = function(opt) {
    //console.log(opt);
    var opt1 = {};
    for (var i in opt) {
        if (i != 'callback' && i != 'forum_root') opt1[i] = opt[i];
    }
    //return;
    //console.log(opt1);
    //return;
    jQuery.ajax({
        type: 'POST',
        url: opt.forum_root + '/api/v1/edit_profile',
        data: opt1,
        success: function(data, textStatus, jqXHR) {
            var resp = jQuery.parseJSON(data);
            if (opt.callback) {
                opt.callback.call(null,resp);
            }
        }
    });    
}

gforum.saveGravatar = function(opt) {
    //console.log(opt);
    //return;
    jQuery.ajax({
        type: 'POST',
        url: opt.forum_root + '/api/v1/edit_profile',
        data: {
            gravatar_size:  opt.size,
            gravatar_email: opt.email
        },
        success: function(data, textStatus, jqXHR) {
            var resp = jQuery.parseJSON(data);
            if (opt.callback) {
                opt.callback.call(null,resp);
            }
        }
    });    
}

gforum.validateEmail = function(value) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
    return emailPattern.test(value);  
} 

