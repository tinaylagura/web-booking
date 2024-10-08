<script setup>
import appLayout from '@/components/layout/appLayout.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <appLayout>
    <template #content>
      <v-row>
        <v-col cols="12" md="6" class="mx-auto pt-16">
          <v-card class="mx-auto" elevation="24">
            <v-card-title class="text-center">
              <v-img
                class="mx-auto"
                src="public/images/logo-favicon.png"
                :width="mobile ? '65%' : '25%'"
              ></v-img>
              <h5 class="font-weight-black">CSU Library Room Reservation System</h5>
              <p>Login Form</p>
            </v-card-title>

            <v-card-text class="bg-surface-light pt-4">
              <v-divider class="my-5"></v-divider>
              <v-form fast-fail @submit.prevent>
                <v-text-field label="Email" variant="outlined"></v-text-field>

                <v-text-field label="Password" type="password" variant="outlined"></v-text-field>

                <v-btn class="mt-2" type="submit" block color="success" prepend-icon="mdi-login"
                  >Login
                </v-btn>
              </v-form>

              <v-divider class="my-5"> </v-divider>
              <h5 class="text-center">
                Don't have Account?
                <RouterLink class="text-primary" to="/register">Click here to Register</RouterLink>
              </h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </appLayout>
</template>
