<template>
    <div class="input">
        <label :for="id" v-if="label">{{ label }}</label>
        <div class="input__w">
            <span class="minilabel" v-if="minilabel">{{ minilabel }}</span>
            <input :type="type" :placeholder="place" :max="max" :min="min" :id="id">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type', 'place', 'max', 'min', 'label', 'id', 'minilabel'],
    }
</script>

<style lang="scss" scoped>

.input {
    font-family: $font_2;
    font-weight: 400;
    label {
        font-size: 1.4rem;
        font-weight: 400;
        font-family: $font_2;
        margin-bottom: 1.2rem;
        display: block;
        text-align: center
    }
    input {
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.minilabel {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.2rem;
    pointer-events: none;
}

.input__w {
    position: relative;
}

input[type="number"] {
    padding: 1.3rem 3.5rem;
}




</style>