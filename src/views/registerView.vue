<script setup>
import appLayout from '@/components/layout/appLayout.vue'
import registerForm from '@/components/auth/registerForm.vue'
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
                :width="mobile ? '75%' : '25%'" 
                alt="CSU Library Logo"
              ></v-img>
              <h5 class="font-weight-black">CSU Library Room Reservation System</h5>
              <p>Registration Form</p>
            </v-card-title>

            <v-card-text class="bg-surface-light pt-4">
              <v-divider class="my-5"></v-divider>

              <registerForm></registerForm>

              <v-divider class="my-5"></v-divider>
              <h5 class="text-center">
                Already have an account?
                <RouterLink class="text-primary font-weight-black" to="/">Click here to Login</RouterLink>
              </h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </appLayout>
</template>
