<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>
<template>
    <!-- we can pass the props -->
    <Hero title="Welcome to vue jobs" subtitle="This is where you can get your first dream job" />

    <HomeCards />

    <JobListings :limit="3" :showButton="true" />
</template>
