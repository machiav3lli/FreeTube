import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FtButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    textColor: {
      type: String,
      default: 'var(--color-on-primary)'
    },
    backgroundColor: {
      type: String,
      default: 'var(--color-primary)'
    },
    id: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: null
    }
  },
  emits: ['click'],
  methods: {
    click: function() {
      this.$emit('click')
    }
  }
})
