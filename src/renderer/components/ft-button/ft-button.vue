<template>
  <button
    :id="id.length > 0 ? id : null"
    class="btn ripple"
    :style="{
      color: textColor,
      backgroundColor: backgroundColor,
      border: `2px solid ${backgroundColor}`
    }"
    @click="click"
  >
    <slot>
      <font-awesome-icon
        v-if="icon && iconPosition === 'before'"
        :icon="icon"
        class="icon"
      />
      <span class="label">
        {{ label }}
      </span>
      <font-awesome-icon
        v-if="icon && iconPosition === 'after'"
        :icon="icon"
        class="icon"
      />
    </slot>
  </button>
</template>

<script src="./ft-button.js" />
<style scoped src="./ft-button.css" />
