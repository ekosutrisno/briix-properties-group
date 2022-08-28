<template>
    <section class="relative overflow-hidden pb-40">
        <!-- Ornament Section -->
        <CircleSeluet class="absolute opacity-75"/>

        <section class="lg:min-h-[559px] relative lg:pb-[134px] pt-20 lg:pt-[200px]">
            <h1 class="font-manrope text-center mb-12 font-bold text-2xl lg:text-5xl">Process</h1>
            
            <div class="w-full">
                <ClientOnly>
                    <Carousel class="bg-transparent" paginationActiveColor="#1F9ED3" paginationColor="#9ee2fe" :paginationSize="10" easing="linear" :perPageCustom="[[384, 1], [448, 2], [512, 3]]" :navigationEnabled="true" :scrollPerPage="true">
                        <Slide class="p-5 lg:p-10" v-for="(i, idx) in cards" :key="i.id">
                            <CardProcess :data="i" :idx="idx"/>
                        </Slide>
                    </Carousel>
                </ClientOnly>
            </div>
            <div class="flex items-center justify-center mt-20">
                <div class="inline-flex items-center space-x-4">
                    <div class="rounded-full bg-white w-5 h-5 hover:scale-125 transition-transform cursor-pointer"></div>
                    <div class="rounded-full bg-white w-4 h-4 hover:scale-125 transition-transform cursor-pointer"></div>
                    <div class="rounded-full bg-white w-4 h-4 hover:scale-125 transition-transform cursor-pointer"></div>
                </div>
            </div>
        </section>

        <section class="min-h-full lg:h-[852px] relative flex flex-col items-center justify-center">
            <div class="lg:mb-10">
                <h1 class="font-manrope font-bold leading-[65px] text-2xl lg:text-5xl text-center">Briix Group</h1>    
            </div>
            <div class="w-full flex items-center justify-center relative">
                <div class="w-full hidden lg:block"></div>
                <BriixGroup class="absolute z-20 top-0 lg:w-auto w-80"/>
                <CicrleSeluetSm class="opacity-75"/>
            </div>

        </section>
        
    </section>
</template>

<script>
import BriixGroup from './svg/BriixGroup.vue';
import CircleSeluet from './svg/CircleSeluet.vue';
import CicrleSeluetSm from './svg/CicrleSeluetSm.vue';
import CardProcess from './CardProcess.vue';
export default {
    data: () => ({
        cards: [
            {
                id: "1e208487-9d57-4214-9d5e-7f21a6a0c31f",
                text: "Client engagement"
            },
            {
                id: "a7d08731-d2b0-412f-9e62-9915a9e6564f",
                text: "Project analysis and feasibility study"
            },
            {
                id: "faedcaaa-2c52-4d9d-a411-481a3fcef977",
                text: "ESG Incorporation"
            },
            {
                id: "9dbefa62-6e9e-45cd-926e-6b8598837dd3",
                text: "Licensing & regulation"
            },
        ]
    }),
    components: { 
        BriixGroup, 
        CircleSeluet, 
        CicrleSeluetSm, 
        CardProcess,
        Carousel: () =>
            import ('vue-carousel')
            .then(m => m.Carousel)
            .catch(),
        Slide: () =>
            import ('vue-carousel')
            .then(m => m.Slide)
            .catch()
        }
}

</script>