<template>
    <teleport to="body" >
        <transition name="fade">
            <div v-if="modelValue" class="position-fixed top-0 start-0 h-100 w-100" style="background-color: rgba(0, 0, 0, 0.25); z-index: 999999; " >
                <div id="backdrop" @click="backdropClick" class="modal1-dialog h-100 overflow-auto">
                    <div class="card px-0" :class="(container == null) ? 'container' : `container-${container}`"
                        :style="(maxwidth != null) ? `max-width: ${maxwidth}` : null">
                        
                        <div class="card-header bg-dark text-white" style="height: 43px;">
                            {{ header }}
                            <button v-if="closeable" @click='$emit("update:modelValue", false)' class="btn btn-text p-0 float-end text-white">X</button>
                        </div>
                        <div class="card-body p-0">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const backdropClick = (event) => {
    if (event.target.id == 'backdrop' && props.closeable == true) {
        emit("update:modelValue", false);
    }
}

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
        default: false
    },
    closeable: {
        type: Boolean,
        required: false,
        default: false
    },
    header: {
        type: String,
        required: false,
        default: null
    },
    container: {
        type: String,
        required: false,
        default: null
    },
    maxwidth: {
        type: String,
        required: false,
        default: null
    }
})
 
const isVisible = ref(false);

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
</style>