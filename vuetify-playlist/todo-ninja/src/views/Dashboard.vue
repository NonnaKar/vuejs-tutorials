<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    
    <v-container class="my-5 py-1 grey lighten-4 rounded-0">
      
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span right class="caption text-lowercase">By project name</span>
          </v-btn>
        </template>
        <span>Sort projects by project name</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
            <v-icon left small>mdi-account</v-icon>
            <span right class="caption text-lowercase">By person</span>
          </v-btn>
        </template>
        <span>Sort projects by person</span>
      </v-tooltip>
      
      <v-divider></v-divider>
      
      <v-card flat class="grey lighten-4" v-for="project in projects" :key="project.title">
        <v-row row wrap :class="`rounded-0 pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  
  </div>
</template>

<script>
import db from '@/fb'


export default {
  data() {
    return {
      projects: []
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('project-vutify').onSnapshot(res => {
      const changes = res.docChanges()

      changes.forEach(change => {
        if (change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>

 .v-card{
    word-break: normal;
  }

.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing{
  border-left: 4px solid #e0c444;
}

.project.overdue{
  border-left: 4px solid #ce1c16;
}

  .theme--light.v-chip.complete:not(.v-chip--active)  {
    background: #3cd1c2;
  }

  .theme--light.v-chip.ongoing:not(.v-chip--active) {
    background: #ffaa2c;
  }

  .theme--light.v-chip.overdue:not(.v-chip--active) {
    background: #f83e70;
  }
</style>