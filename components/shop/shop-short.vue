<template>
    <div class="short">
        <div class="price">
            <span>Стоимость:</span>
            <p>{{ info.acf.price }}</p>
        </div>
        <div class="add-favorite">
            <div class="icon-heart">
                <icons icon="mdi:heart"/>
            </div>
            <p>Добавить в избранное</p>
        </div>
        <div class="group-btn">
            <v-btn name="Оставить заявку" @click.native="open('form')"/>
            <v-btn name="Онлайн-просмотр" class="border"/>
        </div>
        <div class="card-info">
            <ul>
                <li v-for="(item, i) in info.acf.short" :key="'info-list-' + i">
                    <div class="info_item__icon">
                        <icons :icon="item.icon.value"/>
                    </div>
                    <span>{{ item.icon.label }}: </span>
                    <p>{{ item.value }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import vBtn from '../ui-kit/v-btn'
    export default {
        components: {
            vBtn,
        },
        props: ['info'],
        methods: {
            open(modal) {
                this.$store.commit('openPopup', modal)
            }
        }
    }
</script>

<style lang="scss" scoped>

.short {
    
}

.price {
    text-align: center;
    margin-bottom: 2.1rem;
    span {
        font-size: 2rem;
        font-weight: 400;
        display: block;
    }

    p {
        font-size: 3.6rem;
        font-family: $font_2;
        font-weight: 700;
        color: $orange;
        &:after {
            content: ' €';
        }
    }
}


.add-favorite {
    @include flex-center;
    cursor: pointer;
    margin-bottom: 3rem;
    .icon-heart {
        @include flex-center;
        color: $gray;
        width: 2.3rem;
        height: 2.1rem;
        margin-right: 0.9rem;
    }

    p {
        font-size: 2rem;
        color: $dark-light;
        font-family: $font_2;
    }
}

.group-btn {
    margin-bottom: 1.8rem;
    .button {
        width: 100%;    
        &:first-child {
            margin-bottom: 1.4rem;
        }
    }
}

.card-info {
    background-color: $gray;
    padding: 2rem 3.8rem;
    border-radius: 1rem;

    ul {
        li {
            @include flex-start;
            font-family: $font_2;
            font-weight: 400;

            &:not(:last-child) {
                margin-bottom: 2.2rem;
            }

            .info_item__icon {
                width: 2.4rem;
                @include flex-center;
                margin-right: 1.5rem;
                color: $dark-light;
            }
        }
    }
}
</style>