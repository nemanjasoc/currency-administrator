<template>
    <header>
        <div class="header">
            <router-link class="left" :to="'/currencies'">
                <img src="/src/assets/images/logo.png" alt="logo">
            </router-link>
            
            <div class="eur">
                <i class="fa fa-eur"></i>
                <span>Currencies</span>
            </div>
        </div>
    </header>
</template>

<script>
</script>

<style lang="scss">
@import 'src/scss/variables';

header {
    width: 100%;
    height: 60px;
    background-color: $main-orange-color;
}

.header {
    height: 100%;
    opacity: 0.9;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 5px grey;
}

.left {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: $darker-orange-color;

    img {
        height: 30px;
        padding-left: 15px;
    }
}

.eur {
    position: relative;
    border: 2px solid #ffffff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 15px;
    display: flex;
    align-items: center;

    span {
        color: #ffffff;
        margin-left: 30px;
    }
}

.fa-eur {
    color: #ffffff;
    position: absolute;
    top: 2px;
    left: 4px;
}
</style>
