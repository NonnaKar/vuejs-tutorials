<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="success"
          text
          v-bind="attrs"
          v-on="on"
        >
          Add a New Project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field 
                label="Title" 
                v-model="title" 
                prepend-icon="mdi-folder"
                :rules="inputRules"
                ></v-text-field>

                <v-textarea 
                label="Information" 
                v-model="content" 
                prepend-icon="mdi-pencil"
                :rules="inputRules"
                ></v-textarea>
                
                <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        :rules="inputRules"
                        :value="formattedDate"
                        clearable
                        label="Due date"
                        prepend-icon="mdi-calendar-range"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker v-model="due"></v-date-picker>
                </v-menu>

                <v-btn 
                text 
                class="success mt-3" 
                @click="submit"
                :loading="loading">
                Add Project
                </v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import db from '@/fb'

export default {
    name: 'Popup',
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit(){
            if(this.$refs.form.validate()){
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(parseISO(this.due), "do MMM YYY"),
                    person: 'Nonna Lisova',
                    status: 'ongoing'
                }

                db.collection('project-vutify').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded')
                })
            }
        }
    },
    computed: {
        formattedDate(){
            return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
        },
    }
}
</script>