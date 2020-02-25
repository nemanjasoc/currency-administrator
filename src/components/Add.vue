<template>
    <div>
        <div class="section-title">
            <span>Add Currency</span>
        </div>

        <b-form @submit="onSubmitAdd">
            <div class="input-wrapper">
                <label class="input-title" for="feedback-user">Currency Code</label>
                <b-form-group :invalid-feedback="invalidFeedbackCurrencyCode">
                    <b-input v-model="form.code" :state="validationCurrencyCode" id="feedback-user" type="text" required></b-input>
                </b-form-group>
            </div>

            <div class="input-wrapper">
                <label class="input-title" for="feedback-user2">Currency Symbol</label>
                <b-form-group :invalid-feedback="invalidFeedbackCurrencySymbol">
                    <b-input v-model="form.symbol" :state="validationCurrencySymbol" id="feedback-user2" type="text" required></b-input>
                </b-form-group>
            </div>

            <div class="submit-button">
                <b-button type="submit" variant="primary" :disabled="isSubmitBtnDisabled">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            form: {
                code: '',
                symbol: ''
            }
        }
    },
    computed: {
		...mapGetters([
			'allCurrencies'
        ]),
        validationCurrencyCode() {
            return this.form.code.length === 3 && this.isCurrencyCodeUnique();
        },
        validationCurrencySymbol() {
            return this.form.symbol.length === 1;
        },
        invalidFeedbackCurrencyCode() {
            if (this.form.code.length !== 3) {
                return 'Your currency code must be 3 characters long'
            } else if (!this.isCurrencyCodeUnique()) {
                return 'Your currency already exist'
            }
        },
        invalidFeedbackCurrencySymbol() {
            if (this.form.symbol.length !== 1) {
                return 'Your currency code must be 1 characters long'
            }
        },
        isSubmitBtnDisabled() {
            return !this.validationCurrencyCode || !this.validationCurrencySymbol
        }
	},
    methods: {
        generateID() {
            var id = 1;
            var max = 0;

            for (var i = 0; i < this.allCurrencies.length; i++) {
                var currentCurrency = this.allCurrencies[i];

                if (currentCurrency.id > max) {
                    max = currentCurrency.id;
                }
            }

            this.form.id = max + 1;
        },
        addNewCurrency() {
            if (this.isCurrencyCodeUnique()) {
                var newCurrencyObj = Object.assign({}, this.form)

                this.allCurrencies.push(newCurrencyObj);
                this.$store.commit('setNewCurrencyObj', this.allCurrencies);
            }
        },
        isCurrencyCodeUnique() {
            if (this.form.code && this.form.code.length === 3) {
                var findCurrencyCode = this.allCurrencies.find(currency => currency.code == this.form.code);
                return findCurrencyCode === null || findCurrencyCode === undefined;
            } else {
                return true;
            }
        },
        onSubmitAdd(evt) {
            evt.preventDefault()
            this.generateID();
            this.addNewCurrency();
            this.$router.push('/index');
        }
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

.input-wrapper {
    border-bottom: 1px solid #cccccc;
    padding: 9px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

label {
    margin: 0;
}

.input-title {
    display: flex;
    font-weight: 600;
    color: #666666;
}

.submit-button {
    display: flex;
    justify-content: flex-end;
}

.form-group {
    margin: 0;
    width: 50%;
}

.btn-primary {
    background-color: $main-orange-color !important;
    outline: none;
    border-style: none;
    width: 120px;
    margin-top: 10px;
    line-height: 20px;
    text-transform: uppercase;
    font-size: 12px;
}
</style>
