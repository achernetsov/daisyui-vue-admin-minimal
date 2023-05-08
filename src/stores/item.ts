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

function initProps(n: number): Property[] {
  let props = [] as Property[]
  for (let i = 0; i < n; i++) {
    props.push({ name: `Prop ${i}`, value: i.toString(), comment: `Comment ${i}` })
  }
  return props
}

export const useItemStore = defineStore('item', () => {
  const item = ref<Item>({
    name: '',
    props: initProps(20)
  })

  return { item }
})
