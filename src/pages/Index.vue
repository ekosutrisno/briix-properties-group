<template>
  <Layout>
    <Hero />

    <Section1 />

    <Section2 />

    <Section3 />

    <Section4 />

    <Section5 />

    <Section6 />

    <OurTeam />

    <Footer />
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue';
import Section1 from '../components/Section1.vue';
import Section2 from '../components/Section2.vue';
import Section3 from '../components/Section3.vue';
import Footer from '../components/Footer.vue';
import Section4 from '../components/Section4.vue';
import Section5 from '../components/Section5.vue';
import Section6 from '../components/Section6.vue';
import OurTeam from '../components/OurTeam.vue';

export default {
  components: { Hero, Section1, Section2, Section3, Section4, Section5, Section6, Footer, OurTeam },
  metaInfo: {
    title: 'Briix Properties Group',
    
  },
}
</script>
