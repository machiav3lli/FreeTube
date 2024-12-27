<template>
  <div
    ref="select"
    class="select-container"
    :class="{ 'is-disabled': disabled }"
  >
    <div class="select-label-container">
      <label
        v-if="!disabled"
        class="select-label"
        :for="sanitizedId ?? sanitizedPlaceholder"
      >
        <font-awesome-icon
          :icon="icon"
          class="select-icon"
          :color="iconColor"
        />
        {{ placeholder }}
      </label>
      <ft-tooltip
        v-if="tooltip !== ''"
        class="selectTooltip"
        :tooltip="tooltip"
      />
    </div>
    <ft-button
      :title="sanitizedId ?? sanitizedPlaceholder"
      :label="label"
      background-color="var(--color-surface-container-low)"
      text-color="var(--color-on-surface)"
      iconPosition="after"
      :icon="['fas', 'sort-down']"
      :no-border="true"
      class="select-text"
      :disabled="disabled"
      @click="toggleDropdown"
    />
    <div
      v-if="isDropdownOpen"
      class="options"
      :disabled="disabled"
    >
      <ul
        :id="sanitizedId ?? sanitizedPlaceholder"
        class="list"
      >
        <!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
        <li
          v-for="(name, index) in selectNames"
          :key="index"
          class="select-option"
          :class="{
            selected: value === selectValues[index]
          }"
          :value="selectValues[index]"
          :lang="isLocaleSelector && selectValues[index] !== 'system' ? selectValues[index] : null"
          @click="change(selectValues[index])"
        >
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./ft-select.js" />
<style scoped src="./ft-select.css" />
