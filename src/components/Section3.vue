<template>
    <section>
        <section class="lg:min-h-[633px] py-[134px] briix-container bg-briix-blue-7">
            <div class="font-manrope text-center font-bold text-white text-5xl">Operations</div>
            <div class="grid mt-[75px] font-manrope">
                <div>
                    <div class="font-manrope text-xl text-white leading-[34px]">
                        <p>
                        Building a property development is only half the challenge. Whether the intention is to sell the completed units or to hold the asset for the long term - a comprehensive operational strategy is required in order to realise the value created.
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        BPG is the ideal partner for hotel and property management solutions. Our specialised team of management and marketing experts have the track record, experience and infrastructure required in order to deliver consistent, market leading asset performance.
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        <span class="text-briix-blue-3 text-[28px] uppercase font-bold">BPG provides a better deal for our owner clients</span>
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        Our unique revenue sharing model has been designed to more efficiently align the interests of both owner and manager.
                        </p>
                    </div>
                    <div class="mt-12">
                        <h1 class="uppercase text-xl text-[28px] text-briix-blue-3 leading-[34px] font-bold">Management Brands</h1>

                        <div class="grid lg:grid-cols-2 lg:gap-10 mt-4">

                            <div class="rounded-xl overflow-hidden group relative cursor-pointer">
                                <img class="w-full h-full object-cover group-hover:scale-125 transition" src="/VillaG.png" alt="villa-ex-1">
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <img width="258" src="/logo/siwa-logo.png" alt="siwa-logo">  
                                </div>
                            </div>
                            <div class="rounded-xl overflow-hidden group relative">
                                <img class="w-full h-full object-cover group-hover:scale-125 transition" src="/KuVilla4.png" alt="villa-ex-2">
                                <div class="absolute inset-0 flex flex-col items-center justify-center">
                                    <img width="94" src="/logo/ku-logo.png" alt="ku-logo">  
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
        <section class="briix-container w-full py-[134px]">
            <div class="grid lg:grid-cols-2 gap-8">
                <CardTable v-for="content in contents" :key="content.id" :content="content"/>
            </div>
        </section>
    </section>
</template>

<script>
import CardTable from './CardTable.vue';

export default {
    data: () => ({
        contents: [
            {   id: 1,
                title: "GOP Sharing Model",
                subContent: [
                    {
                        title: "Owner",
                        list: [
                            "Operating costs are absorbed by profit sharing pool",
                            "Requires owner to analyse all expenses."
                        ]
                    },
                    {
                        title: "Manager",
                        list: [
                            "Manager benefits from same profit sharing pool as owner"
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "Revenue Sharing Model",
                subContent: [
                    {
                        title: "Owner",
                        list: [
                            "Owner income generated from top-line revenue.",
                            "Only requires owner to analyse occupancy and ADR."
                        ]
                    },
                    {
                        title: "Manager",
                        list: [
                            "Manager absorbs all operating costs.",
                            "Manager is structurally incentivised to maximize cost efficiency."
                        ]
                    }
                ]
            },
        ]
    }),
    components: { CardTable }
}
</script>