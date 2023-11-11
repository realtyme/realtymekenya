images = [  'image_P071.webp', 'image_QLN3.webp', 'image_6D86.webp', 'image_9U9J.webp', 'image_282Y.webp', 
            'image_9W97.webp', 'image_JO6U.webp', 'image_169C.webp', 'image_3O93.webp', 'image_23QP.webp', 
            'image_ZU1S.webp', 'image_EE87.webp', 'image_802V.webp', 'image_JBY0.webp', 'image_2WI4.webp', 
            'image_P79U.webp', 'image_QYA4.webp', 'image_Q229.webp', 'image_R82E.webp', 'image_Z2F0.webp']

count = images.length
random_image = Math.floor(Math.random() * count)

window.onload = () => {
    var captcha = document.getElementById('image-secret')
    captcha.src = "assets/img/" + images[random_image]
}

var input_captcha = document.getElementById('captcha')
var alert_box = document.getElementById('alert_error')
var alert_span = document.getElementById('captcha-span')
var send_message_btn = document.getElementById('send-message')
send_message_btn.disabled = true;

input_captcha.addEventListener('input', function(e)
{
    var inputted_value = document.getElementById('captcha').value
    if (inputted_value.length === 4)
    {
        var captcha = document.getElementById('image-secret')
        var image_url = captcha.src.split('/')
        var secret_name = image_url[image_url.length - 1].split('image_')[1].split('.')[0]
        
        if (secret_name == inputted_value)
        {
            alert_box.classList.add("alert-success")
            alert_box.classList.remove("alert-danger")
            alert_span.innerText = "Captcha Entered Correctly"
            
            send_message_btn.classList.add("btn-primary")
            send_message_btn.classList.remove("btn-light")
            send_message_btn.classList.remove("disabled")
            send_message_btn.disabled = false
        }
    }
    else
    {
        alert_span.innerText = "Enter Captcha"
        alert_box.classList.remove("alert-success")
        alert_box.classList.add("alert-danger")

        send_message_btn.classList.add("disabled")
        send_message_btn.classList.add("btn-light")
        send_message_btn.classList.remove("btn-primary")

    }
} )