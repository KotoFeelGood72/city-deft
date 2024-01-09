<template>
    <div class="form" :class="data ? data.class : ''">
        <v-input :place="data ? data.question : 'Введите имя'" v-model="form.name" :error="$v.form.name.$error"/>
        <v-input place="Введите номер телефона" type="tel" v-model="form.tel" :error="$v.form.tel.$error" :mask="true"/>
        <v-btn :name="data ? data.btn : 'Отправить'" :class="data ? data.btnClass : ''" @connect="sendForm"/>
    </div>
</template>

<script>
    import vBtn from '../ui-kit/v-btn'
    import vInput from '../ui-kit/v-input'


    import { validationMixin } from 'vuelidate'
    import { required, minLength } from 'vuelidate/lib/validators'


    export default {
        mixins: [ validationMixin ],
        props: ['data'],
        components: { vInput, vBtn },
        data() {
            return {
                form: {
                    name: '',
                    tel: ''
                }
            }
        },
        validations: {
            form: {
                name: {
                    required,
                    minLength: minLength(3),
                },
                tel: {
                    required,
                    minLength: minLength(17),
                }
            }
        },
        methods: {
            sendForm() {
                this.$v.form.$touch();
                if(this.$v.form.$invalid) {
                    this.$toast('Заполните обязательны поля', {type: 'error'})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.actions-form {
    max-width: 32.7rem;
    text-align: center;
    margin-left: 3.9rem;
    .input {
        margin-bottom: 2.1rem;
    }
}

</style>