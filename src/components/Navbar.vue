<template>
    <nav>
        <v-toolbar app>
            <v-toolbar-side-icon class="grey" @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="white--text text-uppercase">
                <span class="font-weight-light">Boss</span>
                <span>Spider</span>
            </v-toolbar-title>

            <v-spacer/>

            <v-btn>
                <span class="font-weight">Exit</span>
                <v-icon right="">exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer app class="grey darken-4" v-model="drawer">
            <v-list>
                <v-list-tile v-for="page in pages" :key="page.text" router :to="page.route">
                    <v-list-tile-action>
                        <v-icon>{{page.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{page.text}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data() {
            return {
                drawer: false,
                pages: [
                    {icon: 'dashboard', text: 'Main', route: '/'},
                    {icon: 'info', text: 'About', route: '/About'},
                ]
            }

        }
    }
</script>

<style scoped>

</style>