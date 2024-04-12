<template>
  <div class="container-fluid">
  <div style="width: 700px; height: 130px; margin-top: 30px; display: flex;" class="p-3 ps-4">
    <img src="../../../public/assets/images/Placeholder1.png" class="idh" alt="" @click="toggleActive(1)" :class="{ active: activeImage === 1 }" style="margin-right: 7px;">
    <img src="../../../public/assets/images/Placeholder2.png" class="idh" alt="" @click="toggleActive(2)" :class="{ active: activeImage === 2 }" style="margin-right: 7px;">
    <img src="../../../public/assets/images/Placeholder3.png" class="idh" alt="" @click="toggleActive(3)" :class="{ active: activeImage === 3 }" style="margin-right: 7px;">
    <img src="../../../public/assets/images/Placeholder4.png" class="idh" alt="" @click="toggleActive(4)" :class="{ active: activeImage === 4 }" style="margin-right: 7px;">
    <img src="../../../public/assets/images/Placeholder5.png" class="idh" alt="" @click="toggleActive(5)" :class="{ active: activeImage === 5 }" style="margin-right: 7px;">
    <img src="../../../public/assets/images/Placeholder6.png" class="idh" alt="" @click="toggleActive(6)" :class="{ active: activeImage === 6 }">
  </div>





    <div class="button-row">
      <input v-model="inputValue" class="input-field" type="text" readonly>
    </div>
    <div v-for="(row, index) in buttonRows" :key="index" class="button-row">
      <div v-for="button in row" :key="button.label" @click="addToInput(button.label)" class="button">{{ button.label }}
      </div>
    </div>
    <div class="button-row">
      <button @click="clearInput"
        style="width: 305px; height: 50px; border-radius: 5px; border: none; background-color: orange; color: white; cursor: pointer;">GET</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '', // Input qiymati
      buttons: [      // Tugmalar ro'yxati
        { label: '1' },
        { label: '2' },
        { label: '3' },
        { label: '4' },
        { label: '5' },
        { label: '6' },
        { label: '7' },
        { label: '8' },
        { label: '9' },
        { label: '@' },
        { label: '0' },
        { label: 'Del' }
      ]
    };
  },
  computed: {
    buttonRows() {
      const rows = [];
      let row = [];
      for (let i = 0; i < this.buttons.length; i++) {
        row.push(this.buttons[i]);
        if (row.length === 3 || i === this.buttons.length - 1) {
          rows.push(row);
          row = [];
        }
      }
      return rows;
    }
  },
  methods: {
    addToInput(value) {
      if (value === 'Del') {
        // Agar 'Del' tugmasi bosilgan bo'lsa, inputni tozalash
        this.inputValue = '';
      } else {
        // Boshqa tugmalar uchun qiymatni inputga qo'shish
        this.inputValue += value;
      }
    },
    clearInput() {
      // Inputni tozalash
      this.inputValue = '';
    }
  }
};
</script>

<style scoped>
.idh.active {
  opacity: 1;
}
.idh {
  opacity: 0.5; /* Boshlang'ich opacity qiymati */
  transition: opacity 0.3s ease; /* Opacity o'zgarishining animatsiyasi */
}

.idh:hover {
  opacity: 1; /* Hover bo'lganda opacity 100% */
}
.idh {
  height: 100px;
  width: 100px;
  opacity: 50%;
  border-radius: 50px;
}

.container-fluid {
  display: flex;
  height: 40.07rem;
  flex-direction: column;
  background-image: url(../../../public/assets/images/Background.png);
  align-items: center;
}

.input-field {
  width: 300px;
  height: 50px;
  margin-top: 20px;
  /* Yukori joylashish uchun margin-top */
  margin-bottom: 20px;
  /* Pastga joylashish uchun margin-bottom */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.button-row {
  display: flex;
  justify-content: center;
}

.button {
  width: 95px;
  height: 70px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 25%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #f0f0f0;
}
</style>
