import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Property {
  name: String,
  value: String,
  comment: String
}

export interface Item {
  name: String,
  props: Property[]
}

export const useItemStore = defineStore('item', () => {
  const item = ref<Item>({
    name: '',
    props: [
      { name: 'amount', value: '10', comment: 'Too much' },
      { name: 'quality', value: 'epic', comment: 'Amazing' }
    ]
  })

  return { item }
})
