<script setup lang="ts">
const props = defineProps({
  message: {type: String, requited: true}
})
</script>

<template>






  <div :data-tooltip="props.message" class="tooltip-left">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#d71626" viewBox="0 0 256 256">
      <path
          d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
    </svg>
  </div>


</template>

<style scoped>

svg {
  width: 1rem;
  height: 1rem;
}
[data-tooltip] {
  position: relative;
  cursor: help;
  text-decoration: underline;

  &.tooltip-left::before {
    top: -50%;
    right: 105%;
    left: auto;
    transform: translateX(20px);
  }

  &:hover::before {
    transform: translate(0);
    opacity: 1;
  }

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    min-width: 250px;
    max-width: 350px;
    display: block;
    background: var(--gray-900);

    padding: 0.3rem;
    top: -50px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 0px;
    text-align: center;
    left: 0;
    z-index: 4;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
    transition: all .3s cubic-bezier(.4, 0, .2, 1);
  }
}
</style>
