<template>
    <div class="form" :class="data ? data.class : ''">
        <v-input :place="data ? data.question : 'Введите имя'"/>
        <v-input place="Введите номер телефона" type="tel"/>
        <v-btn :name="data ? data.btn : 'Отправить'" :class="data ? data.btnClass : ''"/>
    </div>
</template>

<script>
    import vBtn from '../ui-kit/v-btn'
    import vInput from '../ui-kit/v-input'
    export default {
        components: {
            vInput,
            vBtn
        },
        props: ['data'] 
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