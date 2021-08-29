<template>
  <div>
  <h1>List of Customers Page 1/2</h1>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        {{ displayName(customer) }}
        <button>
        <router-link :to="{name: 'CustomerFiche',
                           params: {id: customer.id,
                           customer: customer
                           }}"
                     >Voir la fiche</router-link>
        </button>
        <button>
          Editer
        </button>
        <button>
          Supprimer
        </button>
      </li>
    </ul>
    <router-link to="/customers/page2"><button>Page 2</button></router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Customers",
  data() {
    return {
      customers: [],
    }
  },
  methods: {
    displayName(customer) {
      return customer.firstName + ' ' + customer.lastName
    },

  },
  created() {
        axios
            .get('https://heroku-campus-suppliers.herokuapp.com/api/customers')
            .then(response => this.customers = response.data.data)
      }

}
</script>

<style scoped>

</style>