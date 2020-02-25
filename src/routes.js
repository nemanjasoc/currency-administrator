import Currencies from './components/Currencies.vue';
import Add from './components/Add.vue';
import Edit from './components/Edit.vue';

export const routes = [
    {
        name: 'Currencies',
        path: '/currencies',
        component: Currencies,
        children: [
        {
            name: 'AddCurrency',
            path: 'add',
            component: Add
        },
        {
            name: 'EditCurrency',
            path: 'edit/:id',
            component: Edit
        }
        ]
    },
    {
        path: '*',
        redirect: '/currencies'
    }
];
