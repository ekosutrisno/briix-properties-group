<template>
    <div class="bg-white relative overflow-hidden p-8 border mx-4 lg:mx-0 transition group font-manrope border-briix-primary/25 w-full cursor-pointer briix-shadow rounded-lg h-full lg:min-h-[280px] lg:max-w-md">
        <div class="relative">
            <div class="w-[74px] h-[74px] border-[1.5px] border-gray-900/10 rounded-full flex flex-col items-center justify-center">
                <svg v-if="idx % 2 == 0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none group-hover:scale-110 transition">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                    <path fill="#E0F2FE" d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"></path>
                    <path fill="#0EA5E9" d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"></path>
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none group-hover:scale-110 transition">
                    <path fill="#fff" d="M0 0h32v32H0z"></path>
                    <rect width="23" height="22" x="3" y="5" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                    <rect width="10" height="18" x="19" y="9" fill="#E0F2FE" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                    <circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
                    <circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
                    <path stroke="#0EA5E9" stroke-width="1.5" d="M3 11h16"></path>
                </svg>
            </div>
            <div class="mt-5">
                <h1 class="text-xl lg:leading-[42px] font-semibold">{{ data.text }}</h1>
                <p class="text-briix-body mt-2 lg:mt-0">Requires owner to analyse all expenses.</p>
            </div>
        </div>
        <svg class="absolute -right-20" width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="87.5" cy="87.4999" r="17.3" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
            <circle cx="87.5" cy="87.5002" r="28.8333" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
            <circle cx="87.4999" cy="87.5" r="40.3667" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
            <circle cx="87.5" cy="87.5003" r="51.9" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
            <circle cx="87.5" cy="87.4999" r="63.4333" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
            <circle cx="87.5001" cy="87.5003" r="74.9667" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
            <circle cx="87.5" cy="87.5" r="86.5" stroke="#99D2EB" stroke-opacity="0.2" stroke-width="2"/>
        </svg>
    </div>
</template>

<script>
import CicrleSeluetSm from './svg/CicrleSeluetSm.vue';
    export default {
    props: {
        data: {
            type: Object
        },
        idx: {
            type: Number
        }
    },
    components: { CicrleSeluetSm }
}
</script>

<style lang="scss" scoped>

</style>