<template>
    <section class="h-full min-h-screen py-10 lg:h-[982px] briix-container  mx-auto relative flex flex-col items-center justify-center">
        <img class="absolute object-cover inset-0 h-full w-full" src="/22.png" alt="hero-background">
        <div class="relative lg:-mt-36 text-center flex flex-col items-center">
            <BriixLogoWhiteTitle/>
            <p class="font-manrope mt-12 text-white font-bold text-xl lg:leading-[55px] lg:text-[40px]">Providing comprehensive, <br class="hidden lg:block"/> integrated solutions for property <br class="hidden lg:block"/>developers</p>
        </div>
    </section>
</template>

<script>
import BriixLogoWhiteTitle from './svg/BriixLogoWhiteTitle.vue';
export default { components: { BriixLogoWhiteTitle } }
</script>