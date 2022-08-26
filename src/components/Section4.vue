<template>
    <section class="relative overflow-hidden lg:min-h-[633px] py-[134px] briix-container bg-briix-blue-7">
        <SeluetSocial class="h-auto w-auto absolute inset-0"/>
        <h1 class="font-manrope text-center mb-12 font-extrabold text-5xl text-white">Social Responsibility</h1>
        <div class="grid lg:grid-cols-2">
            <div>
                <div class="font-manrope text-xl text-white leading-[34px]">
                    <p>
                        <span class="text-briix-blue-3 text-[28px] font-bold">Integrating sustainability insights into our development and management systems</span>
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        Our business is driven by an unwavering commitment towards sustainability, and a profound belief that environmentally and socially responsible property developments are not only better for our planet, but also for long-term asset performance.
                        <br class="hidden lg:block"/>
                        <br class="hidden lg:block"/>
                        We believe that we become significantly better property developers and managers by incorporating environmental, social and governance (ESG) principles in to our analysis, review, approval and financing processes.
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-end">
                <EsgIlustration/>
            </div>
        </div>
    </section>
</template>

<script>
import EsgIlustration from './svg/EsgIlustration.vue';
import SeluetSocial from './svg/SeluetSocial.vue';
export default { components: { EsgIlustration, SeluetSocial } }
</script>