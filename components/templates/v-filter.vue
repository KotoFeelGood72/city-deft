<template>
    <div class="filter">
        <div class="container">
            <div class="filter__main">
                <div class="filter-top">
                    <div class="filter-col" v-if="categories">
                        <v-select :option="categories" label="Тип недвижимости" id="type-estate" v-model="filter.category" :multiple="false" :stateSelected="true"/>
                    </div>
                    
                    <div class="filter-col" v-if="selects[0]">
                        <v-select :option="selects[0]" label="Район" id="type-rayon" v-model="filter.district" :multiple="true"/>
                    </div>
                    <div class="filter-col price-col">
                        <div class="label-input__group">Ценовой диапазон, €</div>
                        <div class="input-group">
                            <v-input type="number" minilabel="от" v-model="filter.startPrice" :price="true"/>
                            <v-input type="number" minilabel="до" v-model="filter.endPrice" :price="true"/>
                        </div>
                    </div>
                    <div class="filter-col max-w-50" v-if="selects[1]">
                        <v-select :option="selects[1]" label="Планировка" id="plan" v-model="filter.plan" :multiple="true"/>
                    </div>
                    <div class="filter-col max-w-small max-w-50">
                        <v-input type="number" id="house-one" label="ID" v-model="filter.id"/>
                    </div>
                </div>
                <div class="medium" v-if="open">
                    <div class="filter-medium">
                    <div class="filter-col" v-if="selects[2]">
                        <v-select :option="selects[2]" label="Расстояние до моря" id="km" v-model="filter.km" :multiple="true"/>
                    </div>
                    <div class="filter-col" v-if="selects[3]">
                        <v-select :option="selects[3]" label="Площадь" id="place" v-model="filter.place" :multiple="true"/>
                    </div>
                    <div class="filter-col" v-if="selects[4]">
                        <v-select :option="selects[4]" label="Преимущества" id="adv" v-model="filter.adv" :multiple="true"/>
                    </div>
                    <div class="filter-col" v-if="selects[5]">
                        <v-select :option="selects[5]" label="Год постройки" id="date" v-model="filter.date" :multiple="true"/>
                    </div>
                    <div class="filter-col" v-if="selects[6]">
                        <v-select :option="selects[6]" label="Инфаструктура" id="info" v-model="filter.infastructure" :multiple="true"/>
                    </div>
                    </div>
                </div>
                <ul class="filter-bottom">
                    <li>
                        <div class="filter-more" @click="open = !open">Расширенные параметры</div>
                    </li>
                    <li>
                        <div class="filter-reset" @click="resetFilter">Сбросить фильтр</div>
                    </li>
                    <li>
                        <v-btn name="Поиск" class="rounded-btn small" @click.native="searchEvent"/>
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
    import { mapGetters } from 'vuex'



    export default {
        props: {
            isOpen: false,
        },
        components: {
            vSelect,
            vInput,
            vBtn,
        },
        data() {
            return {
                open: this.isOpen ? this.isOpen : false,
                categories: [],
                selects: [],
                filter: {
                    category: null,
                    district: null,
                    startPrice: null,
                    endPrice: null,
                    plan: null,
                    id: null,
                    km: null,
                    place: null,
                    adv: null,
                    date: null,
                    infastructure: null,
                    page: 1,
                    per_page: 6,
                },
            }
        },
        methods: {
            resetFilter() {
                const url = new URL(window.location.href);
                const path = url.pathname;
                window.history.pushState({}, '', path);
                window.location.reload();
            },
            searchEvent() {
                const filteredParams = Object.entries(this.filter).reduce((acc, [key, value]) => {
                    if (value !== null && value !== '' && value !== undefined) {
                        acc[key] = value;
                    }
                    return acc;
                }, {});

                this.$router.push({ path: '/estate', query: filteredParams });
            },
            async getCategories() {
                try {
                    const result = await this.$axios.$get('/api/wp-json/wp/v2/estate_categories/');
                    this.categories = result.map(item => item.name)
                } catch {
                    console.log('error')
                }
            },
            async getAcfSelectValues() {
                try {
                const response = await this.$axios.$get('/api/wp-json/city/v1/acf-select-values/');
                this.selects = response
                } catch (error) {
                console.error('Ошибка при получении ACF select значений:', error);
                }
            },
        },
        mounted() {
            this.getCategories();
            this.getAcfSelectValues();
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

.max-w-50 {
    :deep(.multiselect) {
        @include bp($point_4) {
            min-width: 100%;
        }
    }
    @include bp($point_4) {
        max-width: 50%;
    }
}
</style>