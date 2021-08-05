<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
        
        <v-row row wrap>
            <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                <v-card flat class="text-center ma-3 grey lighten-4 rounded-0">
                    <v-responsive class="pt-4">
                        <v-avatar color="indigo">
                            <v-icon dark>mdi-account-circle</v-icon>
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subtitle-1">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="grey">
                            <v-icon small left>mdi-message</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'Nonna Lisova', role: 'Web developer' },
                { name: 'Ryu', role: 'Graphic designer' },
                { name: 'Chun Li', role: 'Web developer' },
                { name: 'Gouken', role: 'Social media maverick' },
                { name: 'Yoshi', role: 'Sales guru' }
            ]
        }
    }  
}
</script>