<template>
    <div class="modal-form">
        <div class="form__main">
            <div class="close" @click="closeModal('form')"><icons icon="ooui:close"/></div>
            <div class="form__header">
                <section-title title="Связаться с нами" :level="3" class="big-xl"/>
            </div>
            <div class="form-start">
                <p>Можно любым удобным способом:</p>
                <div class="form_start__contacts">
                    <div class="form_start__num">
                        <a href="#">+90 507 706 00 07</a>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(item, i) in social" :key="'social-' + i">
                                <a :href="item.link">
                                    <icons :icon="item.icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="form_start__mail">
                        <a href="#">info@citydeft.com</a>
                    </div>    
                </div>
                <div class="form_start__actions">
                    <p>Или оставьте свои контактные данные и мы свяжемся с вами</p>
                    <v-form :data="form"/>
                </div>
            </div>
            <div class="form-end" v-if="false">
                <section-title title="Связаться с нами" :level="3" class="big-xl"/>
                <p>Мы свяжемся с вами в ближайшее время.</p>
            </div>
        </div>
    </div>
</template>

<script>
    import vForm from '../components/templates/v-form'
    import sectionTitle from '../components/ui-kit/section-title'
    export default {
        components: { sectionTitle, vForm },
        data() {
            return {
                social: [
                    { icon: 'ic:baseline-whatsapp', link: '/' },
                    { icon: 'file-icons:telegram', link: '/' },
                ],
                form: {
                    btnClass: 'gray rounded-btn',
                    btn: 'Отправить',
                    question: 'Введите имя'
                }
            }
        },
        methods: {
            closeModal(modal) {
                this.$store.commit('openPopup', modal)
            }
        }
    }
</script>

<style lang="scss" scoped>

.big-xl {
    color: $white;
}

.modal-form {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include flex-center;
    z-index: 11;
    background-color: #00000075;

    .form__main {
        max-width: 72.9rem;
        border-radius: 8.2rem;
        background-color: $gray;
        text-align: center;
        overflow: hidden;
        color: $dark-light;
        position: relative;
        a {
            color: inherit;
            font-family: $font_2;
            font-weight: 400;
        }
    }
}

.form-start {
    padding: 2.5rem 10rem;
    background-color: $yellow;
    border-radius: 8.2rem;
    &>p {
        margin-bottom: 2rem;
    }
}

.form_start__contacts {
    @include flex-center;
    flex-wrap: wrap;
    font-size: 1.8rem;
    margin: -2rem -2rem 3rem 0;
    &>div {
        padding: 2rem 2rem 0 0;
    }

    ul {
        @include flex-center;
        li {
            width: 4rem;
            height: 4rem;
            a {
                width: 3rem;
                height: 3rem;
                @include flex-center;
                svg {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}


.form_start__actions {
    p {
        font-family: $font_2;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .form {
        max-width: 32.7rem;
        margin: 0 auto;
        :deep(.input) {
            margin-bottom: 2rem;
        }
    }
}

.close {
    position: absolute;
    top: 3.6rem;
    right: 3.6rem;
    color: $white;
    cursor: pointer;
    svg {
        width: 100%;
        height: 100%;
    }
}

.form__header {
    padding: 1.2rem 0;
}
</style>