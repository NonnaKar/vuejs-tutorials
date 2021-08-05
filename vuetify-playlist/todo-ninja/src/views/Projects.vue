<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row justify="center">
        <v-expansion-panels accordion>
          <v-expansion-panel
          v-for="project in projects"
          :key="project.title"
          >
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">duy by {{project.due}}</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
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
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Nonna Lisova'
      })
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