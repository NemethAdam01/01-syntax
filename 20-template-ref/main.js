const app = Vue.createApp({
    setup() {
        const formData = Vue.reactive({
            name: '',
            email: ''
        })

        const userForm = Vue.ref()

        function handleSubmit()
        {
            //event.preventDefault()
            console.log(formData)
            console.log(name.value, email.value)

            userForm.reset()
            // js megoldás
            //document.getElementById("userForm").reset()
        }
        return { formData, handleSubmit , userForm}
    }
})

app.mount("#appdiv")