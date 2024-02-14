<template>
    <div class="form" :class="data ? data.class : ''">
        <v-input :place="data ? data.question : 'Введите имя'" v-model="form.name" :error="$v.form.name.$error"/>
        <v-input place="Введите номер телефона" type="tel" v-model="form.tel" :error="$v.form.tel.$error"/>
        <v-btn :name="data ? data.btn : 'Отправить'" :class="data ? data.btnClass : ''" @click.native="sendForm"/>
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
                    // minLength: minLength(17),
                }
            }
        },
        methods: {
          closeModal(modal) {
                this.$store.commit('openPopup', modal)
            },
    sendForm() {
        this.$v.form.$touch();
        if (this.$v.form.$invalid) {
            this.$toast('Заполните обязательные поля', { type: 'error' });
        } else {
            // Подготовка данных формы к отправке
            const formData = {
                name: this.form.name,
                tel: this.form.tel,
            };

            // Отправка данных формы на сервер
            fetch('api/wp-json/form/v1/submit-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                this.$toast('Форма успешно отправлена', { type: 'success' });
                setTimeout(() => {
                  this.form.name = '';
                  this.form.tel = '';
                  this.closeModal('form')
                }, 500)
            })
            .catch((error) => {
                console.error('Error:', error);
                this.$toast('Ошибка при отправке формы', { type: 'error' });
            });
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
    @include bp($point_2) {
        margin-left: 0;
        max-width: 100%;
    }
    .input {
        margin-bottom: 2.1rem;
    }
}

</style>
