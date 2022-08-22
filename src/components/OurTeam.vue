<template>
    <section>
        <section class="py-10 lg:py-[200px] px-4 lg:px-24 bg-white">
            <h1 class="font-manrope text-center mb-12 font-extrabold text-5xl">Our Team</h1>
        
            <div class="grid gap-4 lg:gap-20 md:grid-cols-3 lg:grid-cols-5 mt-11">
                <CardTeam  v-for="(team, idx) in teams" :team="team" :key="idx"/>
            </div>
        </section>
        
        <section class="pb-[200px] px-24 bg-white">
            <h1 class="font-manrope text-center mb-12 font-extrabold text-5xl">Investor Center</h1>
        </section>
    </section>

</template>

<script>
import CardTeam from './CardTeam.vue';

export default {
    components: { CardTeam },
    data:()=>({
        teams : [
        {
            img: "/DA.png",
            name: "David Anderson",
            title: "Chairman"
        },
        {
            img: "/CW.png",
            name: "Conrad Warren",
            title: "Managing Director & Chief Executive Offiver"
        },
        {
            img: "",
            name: "Marc Thompson",
            title: "President Director - Briix Property Group"
        },
        {
            img: "/SF.png",
            name: "Stephen Field",
            title: "Director - Property Development"
        },
        {
            img: "",
            name: "Stephen Jeisman",
            title: "Director of Operations"
        },
        {
            img: "/JF.png",
            name: "Justin Field",
            title: "Vice President - ESG"
        },
        {
            img: "",
            name: "Brendan Mullins",
            title: "Vice President - Hotel Management"
        },
        {
            img: "/MD.png",
            name: "Matthew Davidson",
            title: "Vice President - Property Sales"
        },
        {
            img: "/SA.png",
            name: "Scott Atkinson",
            title: "Vice President - Licensing & regulation"
        },
        {
            img: "/LJ.png",
            name: "Leksy Jordan",
            title: "Corporate Secretary"
        },
        ]
    })
}

</script>