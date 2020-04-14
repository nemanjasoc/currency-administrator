<template>
    <div>
        <div class="section-title">
            <span>Edit Currency</span>
        </div>
        <app-form></app-form>
    </div>
</template>

<script>
import Form from '../components/form/Form.vue';

export default {
    components: {
        appForm: Form
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

.section-title {
    width: 100%;
    border-bottom: 1px solid $main-orange-color;

    span {
        color: $main-orange-color;
    }
}
</style>
