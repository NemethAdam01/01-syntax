const app = Vue.createApp({
    setup() {
        const formData = Vue.reactive({
            name: '',
            email: ''
        })
        function handleSubmit()
        {
            //event.preventDefault()
            console.log(formData)
            console.log(name.value, email.value)
        }
        return { formData, handleSubmit }
    }
})

app.mount("#appdiv")