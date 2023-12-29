<template>
    <div class="filter">
        <div class="container">
            <div class="filter__main">
                <div class="filter-top">
                    <div class="filter-col">
                        <v-select :option="options" label="Тип недвижимости" id="type-house"/>
                    </div>
                    <div class="filter-col">
                        <v-select :option="options" label="Район" id="type-rayon"/>
                    </div>
                    <div class="filter-col price-col">
                        <div class="label-input__group">Ценовой диапазон, €</div>
                        <div class="input-group">
                            <v-input type="number" minilabel="от"/>
                            <v-input type="number" minilabel="до"/>
                        </div>
                    </div>
                    <div class="filter-col">
                        <v-select :option="plans" label="Планировка" id="plan"/>
                    </div>
                    <div class="filter-col max-w-small">
                        <v-input type="number" id="house-one" label="ID"/>
                    </div>
                </div>
                <div class="medium" v-if="open">
                    <div class="filter-medium">
                    <div class="filter-col">
                        <v-select :option="options" label="Расстояние до моря" id="km"/>
                    </div>
                    <div class="filter-col">
                        <v-select :option="options" label="Площадь" id="data"/>
                    </div>
                    <div class="filter-col">
                        <v-select :option="options" label="Преимущества" id="adv"/>
                    </div>
                    <div class="filter-col">
                        <v-select :option="options" label="Год постройки" id="years"/>
                    </div>
                    <div class="filter-col">
                        <v-select :option="options" label="Инфаструктура" id="info"/>
                    </div>
                    </div>
                </div>
                <ul class="filter-bottom">
                    <li>
                        <div class="filter-more" @click="open = !open">Расширенные параметры</div>
                    </li>
                    <li>
                        <div class="filter-reset">Сбросить фильтр</div>
                    </li>
                    <li>
                        <v-btn name="Поиск" class="rounded-btn small"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import vSelect from '../ui-kit/v-select';
    import vInput from '../ui-kit/v-input';
    import vBtn from '../ui-kit/v-btn';
    export default {
        props: {
            isOpen: false,
        },
        components: {
            vSelect,
            vInput,
            vBtn
        },
        data() {
            return {
                open: this.isOpen ? this.isOpen : false,
                options: [
                    { name: 'Все', value: 'all' },
                    { name: 'Аланья Центр', value: 'Аланья Центр' },
                    { name: 'Авсаллар', value: 'Авсаллар' },
                    { name: 'Оба', value: 'Оба' },
                    { name: 'Тосмур', value: 'Тосмур' },
                    { name: 'Махмутлар', value: 'Махмутлар' },
                ],
                plans: [
                    {name: 'Любая', value: ''},
                    {name: 'О нас', value: 'О нас'},
                    {name: 'Наша команда', value: 'Наша команда'},
                    {name: 'Вакансии', value: 'Вакансии'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

.filter__main {
    background-color: $gray;
    padding: 2.7rem 3rem;
    border-radius: 1.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 11
}

.filter-top, .filter-medium {
    @include flex-start;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: -2rem -2rem 2rem 0;
    &>div {
        padding: 2rem 2rem 0 0;
        flex-grow: 1;
    }
}



.medium {
    margin: 3.2rem 0 2rem 0;
}


.label-input__group {
    font-size: 1.4rem;
    font-weight: 400;
    font-family: $font_2;
    margin-bottom: 1.3rem;
    text-align: center;
}

.input-group {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    grid-gap: 1.3rem
}

.filter-bottom {
    @include flex-end;
    flex-wrap: wrap;
    margin: -4rem -4rem 0 0;
    font-family: $font_2;
    font-weight: 400;
    font-size: 1.4rem;
    &>li {
        padding: 4rem 4rem 0 0;
    }
}

.filter-more {
    color: $white;
    cursor: pointer;
    transition: all .2s ease;
    border-bottom: .1rem solid $white;
    &:hover {
        border-bottom: .1rem solid $dark;
        color: $dark;
    }
}

.filter-reset {
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
        color: $dark-light;
    }
}

.max-w-small {
    max-width: 11.9rem;
}
</style>