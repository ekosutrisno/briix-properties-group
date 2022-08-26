<template>
    <section class="min-h-full lg:h-[852px] relative flex flex-col items-center justify-center">
       <div class="lg:mb-10 ">
           <h1 class="font-manrope font-bold leading-[65px] text-5xl text-center">Briix Group</h1>    
       </div>
       <BriixGroup/>
    </section>
</template>

<script>
import BriixGroup from './svg/BriixGroup.vue';
export default { components: { BriixGroup } }
</script>