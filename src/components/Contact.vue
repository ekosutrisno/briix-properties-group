<template>
    <section class="relative overflow-hidden lg:min-h-[769px] py-10 lg:py-[85px] lg:mt-20 briix-container bg-[#EAF6FB]">
        <SeluetBlue class="absolute inset-0"/>
        <div class="grid lg:grid-cols-2 font-manrope relative">
            <div class="lg:border-r lg:border-r-[#C7E7F4] lg:pr-20">
                <div class="lg:text-5xl text-3xl mb-10 font-semibold">Contact Us</div>
                <div>
                    <p class="text-xl lg:text-2xl font-medium">Email</p>
                    <p class="mt-[5px] text-lg text-briix-body">enquiry@briix.com</p>
                </div>
                <div class="mt-10">
                    <p class="text-xl lg:text-2xl font-medium">Phone Numbers</p>
                    <p class="mt-[5px] text-lg text-briix-body">+62 811-3821-7788</p>
                </div>
                <div class="mt-10">
                    <p class="text-xl lg:text-2xl font-medium">Bali Office</p>
                    <p class="mt-[5px] text-lg text-briix-body">Pertokoan Canggu Square Unit 12, Jl. Pantai Berawa Subak Sari No.11 Kab. Badung- Kuta Utara Bali – Indonesia 80365</p>
                </div>
                <div class="mt-10">
                    <p class="text-xl lg:text-2xl font-medium">Jakarta Office</p>
                    <p class="mt-[5px] text-lg text-briix-body">Prosperity Tower 21st Floor, Unit I, District 8, SCBD Lot 28, Jl. Jend. Sudirman Kav. 52 – 53, Jakarta 12190</p>
                </div>
            </div>
            <div class="mt-10 lg:mt-0 lg:pl-20">
                <form>
                    <div class="grid lg:grid-cols-2 lg:gap-10">
                        <div class="flex flex-col">
                            <label for="name" class="text-briix-primary">Your Name</label>
                            <input required id="name" class="rounded-lg mt-3 py-3 px-4 border focus:outline-briix-primary border-[#C7E7F4]" placeholder="Enter Your Name" type="text"/>
                        </div>
                        <div class="flex flex-col mt-5 lg:mt-0">
                            <label for="number" class="text-briix-primary">Your Number</label>
                            <input required id="number" class="rounded-lg mt-3 py-3 px-4 border focus:outline-briix-primary border-[#C7E7F4]" placeholder="Enter Your Number" type="text"/>
                        </div>
                    </div>
                    <div class="grid mt-5">
                        <div class="flex flex-col">
                            <label for="email" class="text-briix-primary">Your Email</label>
                            <input required id="email" class="rounded-lg mt-3 py-3 px-4 border focus:outline-briix-primary border-[#C7E7F4]" placeholder="Enter Your Email" type="email"/>
                        </div>
                    </div>
                    <div class="grid mt-5">
                        <div class="flex flex-col">
                            <label for="message" class="text-briix-primary">Your Message</label>
                            <textarea required rows="5" id="message" class="rounded-lg mt-3 py-3 px-4 border focus:outline-briix-primary border-[#C7E7F4]" placeholder="Enter Your message"></textarea>
                        </div>
                    </div>
                    <div class="grid mt-5">
                        <div class="flex justify-end">
                            <button type="submit" class="py-4 px-10 rounded-xl w-max bg-briix-primary/90 text-white hover:bg-briix-primary">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import SeluetBlue from './svg/SeluetBlue.vue';
    export default {
    components: { SeluetBlue }
}
</script>