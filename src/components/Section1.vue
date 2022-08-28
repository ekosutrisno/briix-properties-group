<template>
    <section class="lg:h-[633px] py-16 lg:py-[134px] briix-container grid lg:grid-cols-2">
    <div>
        <div class="lg:h-[365px] lg:w-[498px] bg-[#949494]"></div>
    </div>
    <div>
        <h1 class="font-manrope font-extrabold text-2xl lg:text-5xl">What We Do</h1>
        <div class="font-manrope lg:text-xl text-gray-600 leading-[34px]">
            <p class="mt-2 lg:mt-6">BPG is a unique and integrated property development platform providing institutional investors and property developers with turnkey solutions for large scale real estate developments.</p>
            <ul class="mt-2 lg:mt-6 grid lg:grid-cols-2 gap-4">
                <li class="inline-flex items-center space-x-4">
                    <ListStyle class="lg:w-auto w-6"/>
                    <span>We build</span>
                </li>
                <li class="inline-flex items-center space-x-4">
                    <ListStyle class="lg:w-auto w-6"/>  
                    <span>We manage</span>
                </li>
                <li class="inline-flex items-center space-x-4">
                    <ListStyle class="lg:w-auto w-6"/>
                    <span>We operate</span>
                </li>
                <li class="inline-flex items-center space-x-4">
                    <ListStyle class="lg:w-auto w-6"/>
                    <span>We market</span>
                </li>
                <li class="inline-flex items-center space-x-4">
                    <ListStyle class="lg:w-auto w-6"/>
                    <span>We finance</span>
                </li>
            </ul>
        </div>
    </div>
    </section>
</template>

<script>
import ListStyle from './svg/ListStyle.vue';
export default { components: { ListStyle } }
</script>