<template>
    <div>
      <!-- Soat ko'rsatiladigan div -->
      <div>{{ formattedTime }}</div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Boshlang'ich vaqt
        startHour: 0, // soat
        startMinute: 0, // minut
        startSecond: 0 // sekund
      };
    },
    computed: {
      // 24 soatlik davrni hisoblash uchun funksiya
      newTime() {
        // Boshlang'ich vaqt
        let startTime = this.startHour * 3600 + this.startMinute * 60 + this.startSecond;
        // Yakun vaqti
        let endTime = startTime + 24 * 3600;
        
        // Yangi kunning boshlanish vaqti
        let newStartTime = endTime % (24 * 3600);
        let newStartHour = Math.floor(newStartTime / 3600);
        let remainingSeconds = newStartTime % 3600;
        let newStartMinute = Math.floor(remainingSeconds / 60);
        let newStartSecond = remainingSeconds % 60;
        
        // Yangi vaqtni qaytarish
        return { hour: newStartHour, minute: newStartMinute, second: newStartSecond };
      },
      // Formatlangan soat
      formattedTime() {
        // Yangi kunning soati, minutlari va sekundlari
        let newHour = this.newTime.hour;
        let newMinute = this.newTime.minute;
        let newSecond = this.newTime.second;
        
        // Formatlangan vaqt (HH:MM:SS)
        let formattedHour = newHour < 10 ? '0' + newHour : newHour;
        let formattedMinute = newMinute < 10 ? '0' + newMinute : newMinute;
        let formattedSecond = newSecond < 10 ? '0' + newSecond : newSecond;
        
        // Formatlangan vaqt
        return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
      }
    }
  };
  </script>
  