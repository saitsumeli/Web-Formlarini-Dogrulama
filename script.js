// p
const isimErr = document.getElementById('isimErr')
const soyİsimErr = document.getElementById('soyİsimErr')
const emailErr = document.getElementById('emailErr')
const şifreErr = document.getElementById('şifreErr')
const telefonErr = document.getElementById('telefonErr')
const meslekErr = document.getElementById('meslekErr')
const p = document.querySelectorAll('p')

//inputlar
const isimİnput = document.querySelector('.isimİnput')
const soyİsimİnput = document.querySelector('.soyİsimİnput')
const emailİnput = document.querySelector('.emailİnput')
const şifreİnput = document.querySelector('.şifreİnput')
const telefonİnput = document.querySelector('.telefonİnput')
const meslekİnput = document.querySelector('.meslekİnput')

//button
const button = document.querySelector('button')

button.addEventListener('click' , function() {
    function isim() {
        if(isimİnput.value.match(/[A-Za-z0-9]{3,16}/)){
            isimİnput.style.color = 'green'
            isimİnput.style.borderColor = 'green'
            isimErr.innerHTML = ""
        } else {
            isimErr.innerHTML = 'İsim kısmı en az 3-16 karakterden oluşmalıdır.'
            isimİnput.style.color = 'red'
            isimİnput.style.borderColor = 'red'
            
        }
    }
    isim()
})

button.addEventListener('click' , function() {
    function soyİsim() {
        if(soyİsimİnput.value.match(/[A-Za-z0-9]{3,16}/)) {
            soyİsimİnput.style.color = 'green'
            soyİsimİnput.style.borderColor = 'green'
            soyİsimErr.innerHTML = ""
        } else {
            soyİsimErr.innerHTML = 'Soy Adınız kısmı en az 3-16 karakterden oluşmalıdır.'
            soyİsimİnput.style.color = 'red'
            soyİsimİnput.style.borderColor = 'red'
            
        }
    }
    soyİsim()
})

button.addEventListener('click' , function() {
    function email() {
        if(emailİnput.value.match(/[A-Za-z0-9]+@[A-Za-z]+.com/)) {
            emailİnput.style.color = 'green'
            emailİnput.style.borderColor = 'green'
            emailErr.innerHTML = ""
        } else {
            emailErr.innerHTML = 'Böyle bir email yok'
            emailİnput.style.color = 'red'
            emailİnput.style.borderColor = 'red'
        }
    }
    email()
})

button.addEventListener('click' , function() {
    function şifre() {
        if(şifreİnput.value.match(/[A-Za-z0-9]{3,16}/)) {
            şifreİnput.style.color = 'green'
            şifreİnput.style.borderColor = 'green'
            şifreErr.innerHTML = ""
        } else {
            şifreİnput.style.color = 'red'
            şifreİnput.style.borderColor = 'red'
            şifreErr.innerHTML = 'Şifre uygun değildir'
        }
    }
    şifre()
})

button.addEventListener('click' , function() {
    function telefon() {
        if(telefonİnput.value.match(/^\d{3}-\d{3}-\d{4}$/)) {
            telefonİnput.style.color = 'green'
            telefonİnput.style.borderColor = 'green'
            telefonErr.innerHTML = ""
        } else {
            telefonErr.innerHTML = 'Telefon numarası uygun değildir'
            telefonİnput.style.color = 'red'
            telefonİnput.style.borderColor = 'red'
        }
    }
    telefon()
})

button.addEventListener('click' , function() {
    function meslek() {
        if(meslekİnput.value.match(/[a-z]|[a-z_-]{8,50}/)) {
            meslekİnput.style.color = 'green'
            meslekİnput.style.borderColor = 'green'
            meslekErr.innerHTML = ""
        } else {
            meslekErr.innerHTML = 'Biyografi yalnızca küçük harfler, alt çizgiler, kısa çizgiler içermeli ve 8 - 50 karakter uzunluğunda olmalıdır"'
            meslekİnput.style.color = 'red'
            meslekİnput.style.borderColor = 'red'
        }
    }
    meslek()
})

button.addEventListener('click' , function() {
    if (
        isimİnput.value.match(/[A-Za-z0-9]{3,16}/) &&
        soyİsimİnput.value.match(/[A-Za-z0-9]{3,16}/) &&
        emailİnput.value.match(/[A-Za-z0-9]+@[A-Za-z]+.com/) &&
        şifreİnput.value.match(/[A-Za-z0-9@-_]{6,20}/) &&
        telefonİnput.value.match(/^\d{3}-\d{3}-\d{4}$/) &&
        meslekİnput.value.match(/[a-z]|[a-z_-]{8,50}/)
      ) {
        button.style.background = "#4ccc4c";
        p.innerHTML = ""
      }
})
