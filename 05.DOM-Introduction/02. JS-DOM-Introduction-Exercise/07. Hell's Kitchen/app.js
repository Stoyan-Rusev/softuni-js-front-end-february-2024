function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   
   function onClick () {
      const inputText = document.querySelector('#inputs textarea').value;
      let inputDataArr = JSON.parse(inputText);
      let restaurants = {};

      for (textContent of inputDataArr) {
         let [restaurantName, staff] = textContent.split(' - ');
         staff = staff.split(', ');

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {};
         }

         for (let nameAndSalary of staff) {
            let [personName, salary] = nameAndSalary.split(' ');
            restaurants[restaurantName][personName] = Number(salary);
         }
      }

      let bestRestaurant = '';
      let averageSalary = 0;
      let bestStaff = {};
      let sortedStaff = {};
      let bestSallary = 0;

      for (let currentRestaurant in restaurants) {
         let currentStaff = restaurants[restaurants];
         let currentSalariesSum = 0;
         let currentBestSalary = 0;
         let staffCounter = 0;

         for (let currentCheff in restaurants[currentRestaurant]) {
            cheffSalary = restaurants[currentRestaurant][currentCheff];
            currentSalariesSum += cheffSalary;
            staffCounter++;

            if (cheffSalary > currentBestSalary) {
               currentBestSalary = cheffSalary;
            }
         }

         let currentAverageSalary = currentSalariesSum / staffCounter;
         if (currentAverageSalary > averageSalary) {
            let staffArr = [];
            for (let name in currentStaff) {
               staffArr.push([name, currentStaff[name]]);
            }

            bestRestaurant = currentRestaurant;
            averageSalary = currentAverageSalary.toFixed(2);
            bestStaff = restaurants[currentRestaurant];
            bestSallary = currentBestSalary.toFixed(2);
         }
      }

      // Sorting the best staff by salary:
      let sortable = [];
      for (let member in bestStaff) {
         sortable.push([member, bestStaff[member]]);
      }

      sortable.sort(function(a, b) {
         return b[1] - a[1];
      });

      for (let data of sortable) {
         sortedStaff[data[0]] = data[1];
      }
   
      let bestRestaurantElement = document.querySelector('#bestRestaurant p');
      bestRestaurantElement.textContent = ''
      let workersElement = document.querySelector('#workers p');
      workersElement.textContent = ''

      bestRestaurantElement.textContent = `Name: ${bestRestaurant} Average Salary: ${averageSalary} Best Salary: ${bestSallary}`;
      for (let person in sortedStaff) {
         workersElement.textContent += `Name: ${person} With Salary: ${sortedStaff[person]} `;
      }

      for (let restaurant in restaurants) {
         console.log(restaurants[restaurant]);
      }
      
      console.log(bestStaff);
      console.log(sortedStaff);
   }  
}