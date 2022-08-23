<template>
    <section>
        <section class="lg:min-h-[633px] py-[134px] briix-container bg-white">
            <div class="font-manrope text-center first-letter:font-extrabold text-5xl">Operation</div>
            <div class="grid lg:grid-cols-2  mt-[75px] ">
                <div>
                    <div class="lg:h-full lg:w-[498px] bg-[#949494]">
                    </div>
                </div>
                <div>
                    <div class="font-manrope text-xl text-gray-600 leading-[34px]">
                        <p>
                        Building a property development is only half the challenge. Whether the intention is to sell the completed units or to hold the asset for the long term - a comprehensive operational strategy is required in order to realise the value created.
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        BPG is the ideal partner for hotel and property management solutions. Our specialised team of management and marketing experts have the track record, experience and infrastructure required in order to deliver consistent, market leading asset performance.
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        <span class="text-briix-primary font-bold">BPG provides a better deal for our owner clients</span>
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        Our unique revenue sharing model has been designed to more efficiently align the interests of both owner and manager.
                        </p>
                    </div>
                </div>
            </div>
        
        </section>
        <section class="briix-container w-full">
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