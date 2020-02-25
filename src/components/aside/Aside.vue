<template>
    <div class="wrapper">
        <b-input-group class="search-term">
            <b-form-input v-model="searchTerm" type="text" placeholder="Search currency"></b-form-input>
            
            <b-input-group-append>
                <b-button variant="outline-secondary" @click="onSearch">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <span class="currency-title">Currency list</span>

        <ul>
            <li v-for="currency in currencies" :key="currency.id"> 
                <router-link class="current-currency" :to="{name: 'EditCurrency', params: {id: currency.id }}">{{ currency.code }}</router-link>
                <span class="delete" @click="deleteCurrency(currency)">Delete</span>
            </li>
        </ul>

        <div class="add">
            <router-link class="add-button" :to="{name: 'AddCurrency'}">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </router-link>
            <span class="add-title">Add currency</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            form: {
                code: '',
                symbol: '',
                id: ''
            },
            searchTerm: '',
            currencies: []
        }
    },
    computed: {
        ...mapGetters([
            'allCurrencies'
        ])
    },
    mounted() {
        this.currencies = this.allCurrencies;
    },
    methods: {
        onSearch() {
            if (this.searchTerm == '') {
                this.currencies = this.allCurrencies;
                return;
            }

            var searchedCurrencies = [];

            for (var i = 0; i < this.allCurrencies.length; i++) {
                var currencyCode = this.allCurrencies[i]['code'].toLowerCase();
                var currencySymbol = this.allCurrencies[i]['symbol'].toLowerCase();
                var currencyId = this.allCurrencies[i].id;

                if (currencyCode.indexOf(this.searchTerm.toLowerCase()) >= 0 || currencySymbol.indexOf(this.searchTerm.toLowerCase()) >= 0 || currencyId == this.searchTerm) {
                    searchedCurrencies.push(this.allCurrencies[i]);
                }
            }

            this.currencies = searchedCurrencies;
        },
        deleteCurrency(currency) {
            var newCurrencyData = [];

            for (var i = 0; i < this.allCurrencies.length; i++) {
                var currentCurrency = this.allCurrencies[i];

                if (currentCurrency.id != currency.id) {
                    newCurrencyData.push(currentCurrency)
                }

            }

            this.$store.commit('setCurrencies', newCurrencyData)
            this.currencies = this.$store.state.currencies.allCurrencies;
        }
    },
    watch: {
        allCurrencies: function (val) {
            this.searchTerm = '';
            this.currencies = this.allCurrencies;
        }
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

.wrapper {
    width: 100%;
    height: 100%;
    background-color: #eeeeee;

    .search-term {
        padding: 15px;
        padding-bottom: 0;
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    li {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 15px;
        border-bottom: 1px solid #cccccc;
        padding: 10px 0;
        color: #666666;
        cursor: pointer;

        &:hover {
            .delete {
                display: block;
                cursor: pointer;
                color: #666678;
            }
        }

        a {
            color: #666666;

            &:hover {
                text-decoration: none;
                color: $main-orange-color;
            }

            &:focus {
                text-decoration: none;
                color: $main-orange-color;
            }
        }
    }

    input {
        border: 1px solid white;
        width: 100%;
        padding: 5px 5px 5px 10px;
        outline: none;
        color: #666678;
    }
}

.currency-title {
    color: $main-orange-color;
    margin-top: 20px;
    display: flex;
    margin-left: 16px;
    border-bottom: 1px solid $main-orange-color;
    margin-right: 16px;
}

.delete {
    display: none;
}

.add {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #cccccc;
    margin: 0 15px;
    padding: 10px 0;
}

.add-button {
    position: relative;
    border: 2px solid $main-orange-color;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    cursor: pointer;
}

.fa-plus {
    color: $main-orange-color;
    position: absolute;
    top: 3px;
    left: 4px;
    font-size: 13px;
}

.add-title {
    color: $main-orange-color;
    text-transform: uppercase;
    font-size: 11px;
    margin: auto 5px;
    border: none;
}

.form-control {

    &.is-invalid {
        background-image: none;
    }

}
</style>
