var medicalCenter = {
    doctors:['Dr.Alexa', 'Dr.Soare', 'Dr.Martoma'],
    medicalAssistants:['Alexandru', 'Violeta', 'Mihaela', 'Alexandra'],
    kinetoAssistants:['Daiana', 'Gabriela', 'Adina', 'Bianca'],
    frontOffice:['Alina', 'Madalina' , 'Ilinca'],
    procedures: 
    [{name:'magnetoterapie', time: '30 min', price: 35},
    {name:'tens', time:'20 min', price:40},
    {name:'unda scurta', time:'10 min', price:40},
    {name:'ultrasunet', time:'20 min', price:35},
    {name:'curenti diadinamici', time:'20 min', price:35},
    {name:'trabert', time:'10 min', price:35},
    {name:'curenti interferentiali', time:'20 min', price:40},
    {name:'curenti exponentiali', time:'10 min', price:35},
    {name:'kinetoterapie', time:'50 min', price:70},
    {name:
        [{fullName:'laserLLT', time:'10 min', price:40},
        {fullName:'laseHLT', time:'10 min', price:55}]
    },
    {name:
        [{fullName:'masaj terapeutic', time:'30 min', price:80},
        {fullName:'masaj general', time:'50 min', price:120}]
    },
    
    {name:
        [{fullName:'baie galvanica 2', time:'20min', price:65},
        {fullName:'baie galvanica 4', time:'40min', price:75}]
},
],

};

console.log(medicalCenter.procedures[11].name[0].fullName);