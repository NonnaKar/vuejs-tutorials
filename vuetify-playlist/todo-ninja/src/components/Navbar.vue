<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-toolbar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            
            <!-- Dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn text color="grey" v-bind="attrs" v-on="on">
                        <v-icon left>mdi-arrow-down</v-icon>
                        <span>menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="primary">
            <v-row class="mt-5" justify="center">
                <v-avatar color="#ffaa2c" size="100">
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
            </v-row>
            <v-row justify="center">
                <p class="white--text subheading mt-1">Nonna Lisova</p>
            </v-row>
            <v-row justify="center" class="mt-4 mb-3">
                <Popup @projectAdded="snackbar = true" />
            </v-row>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-action>
                        <v-icon color="white">{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">
                            {{link.text}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components: { Popup },
    data: () => ({
        drawer: false,
        links: [
            { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
            { icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
            { icon: 'mdi-account', text: 'Team', route: '/team'},
        ],
        snackbar: false
    }),
}
</script>