<template>
  <div class="bg-white px-2 pt-10 pb-8 border border-gray-900/5 sm:mx-auto w-full briix-shadow rounded-lg">
    <div class="mx-auto px-6">
      <h1 class="text-2xl text-[#1F9ED3]"> {{ content.title }} </h1>
      <div class="divide-y divide-gray-300/50">
        <div v-for="sub in content.subContent" :key="sub.title" class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <ul class="space-y-2">
            <li class="flex">
              <svg v-if="sub.title == 'Owner'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none">
                <path fill="#fff" d="M0 0h32v32H0z"></path>
                <path fill="#E0F2FE" d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z"></path>
                <path fill="#0EA5E9" d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z"></path>
              </svg>

              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" class="h-8 w-8 flex-none">
                <path fill="#fff" d="M0 0h32v32H0z"></path>
                <rect width="23" height="22" x="3" y="5" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                <rect width="10" height="18" x="19" y="9" fill="#E0F2FE" stroke="#0EA5E9" stroke-linejoin="round" stroke-width="1.5" rx="2"></rect>
                <circle cx="6" cy="8" r="1" fill="#0EA5E9"></circle>
                <circle cx="9" cy="8" r="1" fill="#0EA5E9"></circle>
                <path stroke="#0EA5E9" stroke-width="1.5" d="M3 11h16"></path>
              </svg>
              <p class="ml-6"><strong class="font-semibold text-slate-900">{{ sub.title }}</strong> —</p>
            </li>
            <div class="pl-14">
              <div v-for="(list, idx) in sub.list" :key="idx">&bull; {{ list }}</div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: Object,
                required: true
            }
        }
    }
</script>