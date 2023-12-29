<template>
    <div class="select">
        <label :for="id">{{ label }}</label>
        <select name="" :id="id">
            <option :value="item.value" v-for="(item, i) in option" :key="'option-' + i">{{ item.name }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: ['option', 'label', 'id'],
    }
</script>

<style lang="scss" scoped>

.select {
    @include flex-center;
    flex-direction: column;

    label {
        font-size: 1.4rem;
        font-weight: 400;
        font-family: $font_2;
        margin-bottom: 1.2rem;
    }
    select {
        @include app;
        background-color: $white;
        padding: 1.3rem 1.2rem;
        border-radius: 10rem;
        color: $dark;
        font-size: 1.4rem;
        font-family: $font_2;
        font-weight: 400;
        width: 100%;
    }
}

</style>